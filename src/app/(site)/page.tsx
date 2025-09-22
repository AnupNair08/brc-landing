import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Carousel from '@/components/Carousel';
import ParallaxImage from '@/components/ParallaxImage';
import { ServiceCard, FleetCard, AimVisionMissionCards, ClientCard, MajorWorkCard } from '@/components/Cards';
import { company } from '@/lib/company';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

export default function Page() {
  const slides = [
    { src: '/assets/10.jpeg', alt: 'Heavy lift operation' },
    { src: '/assets/9.jpeg', alt: 'Heavy lift operation' },
    { src: '/assets/12.jpeg', alt: 'Heavy lift operation' },
    { src: '/assets/0.jpeg', alt: 'Heavy lift operation' },
    { src: '/assets/1.jpeg', alt: 'Heavy lift operation' },
    { src: '/assets/2.jpeg', alt: 'Heavy lift operation' },
    { src: '/assets/3.jpeg', alt: 'Heavy lift operation' },
    // { src: '/assets/4.jpeg', alt: 'Heavy lift operation' },
    { src: '/assets/5.jpeg', alt: 'Heavy lift operation' },
    { src: '/assets/6.jpeg', alt: 'Heavy lift operation' },
    { src: '/assets/7.jpeg', alt: 'Heavy lift operation' },
    { src: '/assets/8.jpeg', alt: 'Heavy lift operation' },
    { src: '/assets/11.jpeg', alt: 'Heavy lift operation' },
  ];

  const vishwakarmaDirectory = path.join(process.cwd(), 'public/assets/vishwakarma');
  let vishwakarmaSlides: { src: string; alt: string; }[] = [];
  try {
    const vishwakarmaImageFiles = fs.readdirSync(vishwakarmaDirectory);
    vishwakarmaSlides = vishwakarmaImageFiles.map(file => ({
      src: `/assets/vishwakarma/${file}`,
      alt: 'Vishwakarma pooja',
    }));
  } catch (error) {
    // The directory doesn't exist, so we don't render the section.
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Section id="about">
          <div className="rounded-2xl border border-primary-100 bg-primary-50 p-8 shadow-sm sm:p-10 md:p-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="relative inline-block h-10 w-10 overflow-hidden rounded-lg ring-1 ring-primary-200">
                <Image src="/assets/logo.jpeg" alt={`${company.name} logo`} fill className="object-contain" />
              </span>
              <h2 className="text-xl font-semibold md:text-4xl">About Us</h2>
            </div>
            <div className="text-gray-800 md:text-xl space-y-4">
              <p>Located in Transport Nagar, Nigdi, Pune, we are a leading provider of telescopic mobile cranes ranging from 3 MT to 300 MT, along with forklifts, man lifts, crawlers, earth-moving equipment, and heavy construction machinery. Over the years, we have built a strong reputation for quality, reliability, and customer-centric services.</p>
              <p>With ISO 9001:2015 certification, we maintain a high standard of safety, quality, and efficiency. Our fleet is well-maintained, and our team is composed of dedicated experts who work tirelessly to meet client needs across construction, manufacturing, infrastructure, and energy.</p>
              <p>Our mission is to enhance construction efficiency by providing seamless lifting solutions that optimize plant operations and reduce downtime while upholding the highest ethical standards and workplace safety.</p>
            </div>
          </div>
        </Section>

        <Section id="founders">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">Founders</h2>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full ring-2 ring-primary-200 shadow-sm">
              <Image src="/assets/founder.jpeg" alt="Founder - Late Mr. Madhavan Kutty" fill className="object-cover" />
            </div>
            <p className="text-lg font-medium text-primary-900">Late Mr. P Madhavan Kutty</p>
          </div>
        </Section>

        <Section id="director">
          <div className="text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">Director</h2>
            <div className="mx-auto mt-4 max-w-xl rounded-xl border border-primary-200 bg-white p-8 shadow-md">
              <h3 className="text-2xl font-bold text-primary-900">M Rajesh Kutty</h3>
              <p className="mt-2 text-lg text-gray-600">Leading the company with vision and dedication.</p>
            </div>
          </div>
        </Section>

        <Section id="promotional" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <ParallaxImage 
              src="/assets/asset1.png" 
              alt="BRC Cranes promotional collage showcasing our crane services and equipment"
            />
          </div>
          <div className="relative z-10 h-[80vh]" />
        </Section>

        <Section id="aim-vision-mission">
          <AimVisionMissionCards />
        </Section>

        <Section id="services">
          <h2 className="mb-3 text-2xl font-semibold">Our Products & Equipment</h2>
          <p className="mb-8 max-w-3xl text-gray-700">We offer a wide range of high-quality lifting and heavy construction equipment operated by skilled professionals to ensure safety, efficiency and reliability in every project.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Telescopic Mobile Cranes (3 MT to 300 MT)"
              description="High maneuverability and precision for construction, infrastructure and heavy machinery installation."
              details={
                <div className="space-y-4">
                  <div>
                    <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-primary-900">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 15h7l3-5h8"/></svg>
                      <span>Pick & Carry</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['9 MT','12 MT','15 MT','23 MT','25 MT'].map((c) => (
                        <span key={c} className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs ring-1 ring-primary-200 text-primary-900">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6H9l-7 7h11l7-7z"/></svg>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-primary-900">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15h10l3-6h3"/></svg>
                      <span>Mobile Cranes</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['30 MT','50 MT','60 MT','80 MT','110 MT','150 MT','160 MT','200 MT','350 MT'].map((c) => (
                        <span key={c} className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs ring-1 ring-primary-200 text-primary-900">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/></svg>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              }
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 17 9 11 13 15 21 7"/></svg>}
            />
            <ServiceCard
              title="Forklifts"
              description="Safe, efficient handling of goods in warehouses, factories and logistics centers."
              details={
                <div className="flex flex-wrap gap-2">
                  {['3 MT','5 MT'].map((c) => (
                    <span key={c} className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs ring-1 ring-primary-200 text-primary-900">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="6" height="7"/><circle cx="8" cy="19" r="2"/><circle cx="16" cy="19" r="2"/></svg>
                      {c}
                    </span>
                  ))}
                </div>
              }
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="6" height="7"/><circle cx="8" cy="19" r="2"/><circle cx="16" cy="19" r="2"/><path d="M9 17h6l2-6"/></svg>}
            />
            <ServiceCard
              title="Man Lifts"
              description="Aerial work platforms and boom lifts for safe access to high elevations."
              details={
                <div className="flex flex-wrap gap-2">
                  {['14 m (Electric)','24 m','38 m'].map((c) => (
                    <span key={c} className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs ring-1 ring-primary-200 text-primary-900">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v8"/><circle cx="12" cy="14" r="3"/></svg>
                      {c}
                    </span>
                  ))}
                </div>
              }
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v8"/><circle cx="12" cy="14" r="3"/></svg>}
            />
            <ServiceCard
              title="Crawlers"
              description="Heavy-duty lifting on challenging terrains with superior stability and capacity."
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="14" height="6"/><path d="M5 18h14"/></svg>}
            />
            <ServiceCard
              title="Earth Moving Equipment"
              description="Bulldozers, excavators, backhoe loaders and motor graders for durable performance."
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 15h6l4-6 8 0"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>}
            />
            <ServiceCard
              title="Heavy Construction Equipment"
              description="Loaders, dumpers, compactors and hydraulic cranes for major projects."
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15h10l3-6h3"/></svg>}
            />
          </div>
        </Section>

        {/* <Section id="fleet" className="bg-gray-50">
          <h2 className="mb-8 text-2xl font-semibold">Fleet</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FleetCard name="Hydraulic Crane" capacity="25–75 Ton" />
            <FleetCard name="All-Terrain Crane" capacity="100–200 Ton" />
            <FleetCard name="Crawler Crane" capacity="Up to 250 Ton" />
          </div>
        </Section> */}

        
        <Section id="gallery">
          <h2 className="mb-8 text-2xl font-semibold">Gallery</h2>
          <Carousel slides={slides} intervalMs={4000} />
        </Section>

        {vishwakarmaSlides.length > 0 && (
          <Section id="news">
            <h2 className="mb-8 text-2xl font-semibold">News</h2>
            <div className="rounded-2xl border border-primary-100 bg-primary-50 p-8 shadow-sm sm:p-10 md:p-12">
              <h3 className="text-xl font-semibold md:text-2xl">Vishwakarma Pooja</h3>
              <p className="text-gray-800 md:text-lg">September 17, 2025</p>
              <Carousel slides={vishwakarmaSlides} intervalMs={4000} />
            </div>
          </Section>
        )}

        <Section id="why">
          <h2 className="mb-4 text-2xl font-semibold">Why Choose Us?</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li className="rounded-lg border bg-white p-4 shadow-sm">50+ years of experience in crane rental and heavy lifting.</li>
            <li className="rounded-lg border bg-white p-4 shadow-sm">Wide range of equipment: cranes (3–300 MT), forklifts, man lifts, crawlers, and more.</li>
            <li className="rounded-lg border bg-white p-4 shadow-sm">ISO 9001:2015 certified systems ensure the highest standards.</li>
            <li className="rounded-lg border bg-white p-4 shadow-sm">Expert team and 24/7 support for seamless operations.</li>
            <li className="rounded-lg border bg-white p-4 shadow-sm">Customer-centric approach focused on efficiency and on-time execution.</li>
          </ul>
        </Section>

        <Section id="clients" className="bg-primary-50">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-800 md:text-4xl">Our Esteemed Clients</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-900/80 md:text-xl">We are proud to have served a diverse range of clients across various industries.</p>
          </div>
          <div className="mt-8 grid grid-cols-3 grid-rows-2 gap-6">
            {[
              { name: 'Thermax', logo: '/assets/logos/thermax.svg' },
              { name: 'Bajaj', logo: '/assets/logos/bajaj.jpg' },
              { name: 'Force', logo: '/assets/logos/force.jpg' },
              { name: 'Tkil', logo: '/assets/logos/tkil.png' },
              { name: 'L&T', logo: '/assets/logos/lnt.png' },
              { name: 'Anant sky', logo: '/assets/logos/anant.png' },
            ].map((client) => (
              <ClientCard key={client.name} name={client.name} logo={client.logo} />
            ))}
          </div>
        </Section>

        <Section id="major-works">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-800 md:text-4xl">Major Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-900/80 md:text-xl">We have been a part of some of the most prestigious projects in the region.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { title: 'Pune Metro', logo: '/assets/logos/pune_metro.png' },
              { title: 'Bullet Train', logo: '/assets/logos/bullet_train.jpg' },
              { title: 'Shree Cement', logo: '/assets/logos/sree_cements.jpeg' },
              { title: 'Hyundai Plant', logo: '/assets/logos/hyundai.png' },
            ].map((work) => (
              <MajorWorkCard key={work.title} title={work.title} logo={work.logo} />
            ))}
          </div>
        </Section>

      </main>
      <Footer />
    </>
  );
}
