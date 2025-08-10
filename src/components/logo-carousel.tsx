import Image from "next/image";

const logos = [
    { src: "/logos/logo-1.svg", alt: "Sponsor One" },
    { src: "/logos/olympic-rings.svg", alt: "Olympic Rings" }, // Example path, replace with your SVG
    { src: "/logos/world-archery.svg", alt: "World Archery" }, // Example path, replace with your SVG
    { src: "/logos/archery-canada.svg", alt: "Archery Canada" }, // Example path, replace with your SVG
    { src: "/logos/usa-archery.svg", alt: "USA Archery" }, // Example path, replace with your SVG
    { src: "/logos/british-archery.svg", alt: "British Archery" }, // Example path, replace with your SVG
    { src: "/logos/korean-archery.svg", alt: "Korean Archery Federation" }, // Example path, replace with your SVG
    { src: "/logos/european-archery.svg", alt: "European Archery Federation" }, // Example path, replace with your SVG
];

const duplicatedLogos = [...logos, ...logos];

export default function LogoCarousel() {
  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-center font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Travelled across
        </h3>
        <div
            className="relative w-full overflow-hidden"
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            }}
        >
          <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 mx-4 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="w-auto h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
