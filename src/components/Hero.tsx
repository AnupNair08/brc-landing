import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/lib/company';

export default function Hero() {
  return (
    <div className="relative overflow-hidden text-gray-900 min-h-[70vh]" style={{ backgroundColor: 'white' }}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-100/60 via-white to-white" />
      <div className="container-responsive relative z-10 grid items-center gap-12 py-24 sm:py-28 md:py-32 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
            <span className="h-2 w-2 rounded-full bg-primary-500"></span>
            Since {company.since}
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            BRC CRANES
            <span className="block mt-2 text-2xl font-normal text-primary-800 sm:text-3xl">
              Trusted lifting solutions
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-700">
            Comprehensive lifting solutions with telescopic mobile cranes (3 MT to 300 MT), forklifts, man lifts, crawlers, earth-moving equipment, and heavy construction machinery—serving every project with safety, reliability, and expertise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#about" className="inline-flex items-center justify-center gap-2 rounded-md btn-primary px-5 py-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crane">
                <path d="M6 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2"/>
                <path d="M12 10v12"/>
                <path d="M9 22h6"/>
                <path d="M3 22h3"/>
                <path d="M18 22h3"/>
                <path d="M12 4h.01"/>
              </svg>
              <span>Get Started</span>
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-square">
            <Image src="/assets/logo.jpeg" alt={`${company.name} logo`} fill priority className="object-contain p-6 rounded-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}

