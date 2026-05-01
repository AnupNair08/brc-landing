type LocationMapProps = {
  title?: string;
};

export default function LocationMap({ title = 'Our location' }: LocationMapProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-md">
      <iframe
        title={title}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0177465134416!2d73.76268093515813!3d18.663199613296843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b75ed2972025%3A0xaeba35325e103c1d!2sBRC%20Group!5e0!3m2!1sen!2sin!4v1777619018812!5m2!1sen!2sin"
        className="h-[360px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
