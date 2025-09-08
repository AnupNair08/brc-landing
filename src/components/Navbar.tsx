"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { company } from '@/lib/company';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container-responsive flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded bg-primary-50 ring-1 ring-primary-100">
            <Image src="/assets/logo.jpeg" alt={`${company.name} logo`} fill className="object-contain p-1" />
          </span>
          <span className="tracking-wide">{company.name}</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#about" className="inline-flex items-center py-2 hover:text-primary-700">About</Link>
          <Link href="#services" className="inline-flex items-center py-2 hover:text-primary-700">Services</Link>
          <div className='flex items-center gap-4'>
            <a href={`tel:${company.phones[0]}`} className="btn-primary flex items-center gap-2 py-2 px-4 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Contact</span>
            </a>
            <a href={`mailto:${company.emails[0]}`} className="btn-primary flex items-center gap-2 py-2 px-4 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>Email</span>
            </a>
          </div>
        </nav>
        <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="md:hidden">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
      {open && (
        <div className="container-responsive pb-4 md:hidden">
          <div className="grid gap-3">
            <Link href="#about" onClick={() => setOpen(false)}>About</Link>
            <Link href="#services" onClick={() => setOpen(false)}>Services</Link>
            <div className='flex flex-col gap-2'>
            <a href={`tel:${company.phones[0]}`} className="btn-primary flex items-center justify-center gap-2 py-2 px-4 text-sm" onClick={() => setOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Contact</span>
            </a>
            <a href={`mailto:${company.emails[0]}`} className="btn-primary flex items-center justify-center gap-2 py-2 px-4 text-sm" onClick={() => setOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>Email</span>
            </a>
          </div>
          </div>
        </div>
      )}
    </header>
  );
}


