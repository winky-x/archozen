import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const coaches = [
  {
    name: "Elias Vance",
    title: "Head Coach & Founder",
    bio: "With over 20 years of competitive archery experience, Elias founded ArchoZen to share his passion for the sport's mental and physical discipline.",
    image: "/images/coach-1.png",
    socials: { twitter: "#", linkedin: "#" },
    dataAiHint: "portrait man"
  },
  {
    name: "Seraphina Moon",
    title: "Recurve Specialist",
    bio: "An Olympian archer, Seraphina specializes in the recurve bow, focusing on precision form and mental stillness under pressure.",
    image: "/images/coach-2.png",
    socials: { twitter: "#", linkedin: "#" },
    dataAiHint: "portrait woman"
  },
  {
    name: "Kenji Tanaka",
    title: "Kyudo Master",
    bio: "A master of the traditional Japanese art of Kyudo, Kenji brings a meditative and spiritual approach to the practice of archery.",
    image: "/images/coach-3.png",
    socials: { twitter: "#", linkedin: "#" },
    dataAiHint: "portrait asian man"
  },
];

export default function CoachSpotlight() {
  return (
    <section id="coaches" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Meet Our Coaches</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our world-class instructors are dedicated to helping you achieve your archery goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <div key={coach.name} className="group overflow-hidden rounded-xl">
              <Card className="glassmorphic h-full flex flex-col text-center items-center p-6 transition-all duration-500 ease-smooth group-hover:scale-105">
                <CardHeader className="p-0">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-accent">
                    <Image
                      src={coach.image}
                      alt={`Portrait of ${coach.name}`}
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="font-headline text-2xl pt-4">{coach.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{coach.title}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-0 pt-4">
                  <p className="text-foreground/70">{coach.bio}</p>
                </CardContent>
                <CardFooter className="p-0 pt-4">
                  <div className="flex gap-2">
                    <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <a href={coach.socials.twitter} aria-label={`${coach.name}'s Twitter`}>
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <a href={coach.socials.linkedin} aria-label={`${coach.name}'s LinkedIn`}>
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
