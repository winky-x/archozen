import Image from "next/image";

const logos = [
    { src: "https://placehold.co/150x60.png", alt: "Sponsor One", dataAiHint: "brand logo" },
    { src: "https://placehold.co/150x60.png", alt: "Sponsor Two", dataAiHint: "brand logo" },
    { src: "https://placehold.co/150x60.png", alt: "Sponsor Three", dataAiHint: "brand logo" },
    { src: "https://placehold.co/150x60.png", alt: "Sponsor Four", dataAiHint: "brand logo" },
    { src: "https://placehold.co/150x60.png", alt: "Sponsor Five", dataAiHint: "brand logo" },
    { src: "https://placehold.co/150x60.png", alt: "Sponsor Six", dataAiHint: "brand logo" },
    { src: "https://placehold.co/150x60.png", alt: "Sponsor Seven", dataAiHint: "brand logo" },
    { src: "https://placehold.co/150x60.png", alt: "Sponsor Eight", dataAiHint: "brand logo" },
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
                  data-ai-hint={logo.dataAiHint}
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
