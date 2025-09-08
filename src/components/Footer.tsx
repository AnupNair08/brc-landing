import Image from 'next/image';
import { company } from '@/lib/company';

export default function Footer() {
  return (
    <footer className="mt-16 border-top bg-white">
      <div className="container-responsive py-10 text-sm text-gray-700">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 font-semibold">
              <span className="relative inline-block h-6 w-6 overflow-hidden rounded ring-1 ring-primary-100">
                <Image src="/assets/logo.jpeg" alt={`${company.name} logo`} fill className="object-contain" />
              </span>
              {company.legalName}
            </p>
            <p className="mt-2 text-gray-600">{company.addressLine}</p>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <div className="mt-2 grid gap-1">
              <a href={`tel:${company.phones[0]}`} className="hover:text-primary-700">{company.phones.join(' / ')}</a>
              <a href={`mailto:${company.emails[0]}`} className="hover:text-primary-700">{company.emails.join(' / ')}</a>
            </div>
          </div>
          <div>
            <p className="font-semibold">Registration</p>
            <p className="mt-2">GST: {company.gst}</p>
            <p>PAN: {company.pan}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-top pt-6 text-gray-600 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          {/* <div className="flex gap-4">
            <a href="#" className="hover:text-primary-700">Privacy</a>
            <a href="#" className="hover:text-primary-700">Terms</a>
            <a href="#contact" className="hover:text-primary-700">Contact</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}


