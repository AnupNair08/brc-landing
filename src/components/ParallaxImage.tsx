"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ParallaxImage({ src, alt, className = "" }: ParallaxImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const speed = 0.25; // Slower movement so the parallax effect lasts longer
      
      // Calculate parallax offset based on scroll position
      const offset = (window.innerHeight - rect.top) * speed;
      
      // Apply the transform
      imageRef.current.style.setProperty('--parallax-offset', `${offset}px`);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={imageRef} className={`h-[160vh] w-full ${className}`}>
      <Image 
        src={src}
        alt={alt}
        fill
        className="object-cover parallax-image"
        priority
      />
    </div>
  );
}
