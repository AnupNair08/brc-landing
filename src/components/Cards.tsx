"use client";
import { useState } from 'react';

export function ServiceCard({ title, description, icon, details }: { title: string; description: string; icon: React.ReactNode; details?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const panelId = `${title.replace(/\s+/g, '-').toLowerCase()}-details`;

  return (
    <div className="group rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-700 ring-1 ring-primary-100">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {details && (
        <div className="mt-4">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={toggle}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-primary-800 hover:bg-primary-50"
          >
            <span>{open ? 'Hide details' : 'View details'}</span>
            <svg className={`transition-transform ${open ? 'rotate-180' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div
            id={panelId}
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="mt-3 rounded-md border bg-gray-50 p-4 text-sm text-gray-800">
              {details}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function FleetCard({ name, capacity, image }: { name: string; capacity: string; image?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100">
        <svg className="h-full w-full text-primary-100" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="80" y="90" width="60" height="12" fill="currentColor" />
          <rect x="60" y="60" width="8" height="42" fill="currentColor" />
          <rect x="68" y="60" width="60" height="6" fill="currentColor" />
        </svg>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{name}</h3>
          <span className="rounded bg-primary-50 px-2 py-1 text-xs text-primary-700 ring-1 ring-primary-100">{capacity}</span>
        </div>
      </div>
    </div>
  );
}

export function AimVisionMissionCards() {
  const cards = [
    {
      title: 'Aim',
      description: 'To be the most trusted and customer-centric crane service provider in Maharashtra, delivering excellence in quality, service, and value.',
      img: '/assets/1.jpeg'
    },
    {
      title: 'Vision',
      description: 'To become the leading provider of crane services by ensuring outstanding customer satisfaction, reliability, and operational efficiency.',
      img: '/assets/2.jpeg'
    },
    {
      title: 'Mission',
      description: 'To provide premium lifting, installation, and decommissioning solutions for heavy structures, enhancing construction efficiency and optimizing plant operations with a focus on safety, quality, and customer success.',
      img: '/assets/3.jpeg'
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card, index) => (
        <div 
          key={index}
          className="group relative rounded-xl border border-primary-200 bg-white p-8 shadow-md ring-1 ring-primary-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:scale-105"
        >
          <div 
            className="absolute inset-0 rounded-xl bg-cover bg-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
            style={{ backgroundImage: `url(${card.img})` }}
          >
            <div className="absolute inset-0 rounded-xl bg-black/70"></div>
          </div>
          <div className="relative">
            <h3 className="text-2xl font-semibold text-primary-900 transition-colors duration-300 ease-in-out group-hover:text-white">{card.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-gray-800 transition-colors duration-300 ease-in-out md:text-lg group-hover:text-gray-200">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ClientCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <img src={logo} alt={`${name} logo`} className="h-16 object-contain" />
      <p className="font-semibold text-primary-900">{name}</p>
    </div>
  );
}

export function MajorWorkCard({ title, logo }: { title: string; logo: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <img src={logo} alt={`${title} logo`} className="h-24 object-contain" />
      <p className="mt-4 font-semibold text-primary-900">{title}</p>
    </div>
  );
}


