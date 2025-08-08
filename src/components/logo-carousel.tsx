import Image from "next/image";

const logos = [
    { src: "/logos/logo-1.svg", alt: "Sponsor One" },
    { src: "/logos/logo-2.svg", alt: "Sponsor Two" },
    { src: "/logos/logo-3.svg", alt: "Sponsor Three" },
    { src: "/logos/logo-4.svg", alt: "Sponsor Four" },
    { src: "/logos/logo-5.svg", alt: "Sponsor Five" },
    { src: "/logos/logo-6.svg", alt: "Sponsor Six" },
    { src: "/logos/logo-7.svg", alt: "Sponsor Seven" },
    { src: "/logos/logo-8.svg", alt: "Sponsor Eight" },
];

const duplicatedLogos = [...logos, ...logos];

export default function LogoCarousel() {
  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-center font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by world-class partners
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
