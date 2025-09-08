import './globals.css';
import type { Metadata } from 'next';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: `${company.legalName}`,
  description: `Crane hire and heavy lifting services since ${company.since}.`,
  metadataBase: new URL(company.baseUrl),
  openGraph: {
    title: company.legalName,
    description: `Reliable crane hire in Pune since ${company.since}. Call ${company.phones[0]}.`,
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}


