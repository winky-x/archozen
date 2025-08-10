
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const coaches = [
  {
    name: "Alisha",
    title: "Head Coach & Founder",
    bio: "With over 20 years of competitive archery experience, Alisha founded ArchoZen to share her passion for the sport's mental and physical discipline.",
    image: "/coaches/coach.png",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Neena",
    title: "Recurve Specialist",
    bio: "An Olympian archer, Neena specializes in the recurve bow, focusing on precision form and mental stillness under pressure.",
    image: "/coaches/coach.png",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Yuvraj",
    title: "Kyudo Master",
    bio: "A master of the traditional Japanese art of Kyudo, Yuvraj brings a meditative and spiritual approach to the practice of archery.",
    image: "/coaches/coach.png",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Ahad",
    title: "Compound Bow Expert",
    bio: "Ahad is a specialist in modern compound bows, focusing on technical precision and equipment tuning for peak performance.",
    image: "/coaches/coach.png",
    socials: { twitter: "#", linkedin: "#" },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach) => (
            <div key={coach.name} className="group overflow-hidden rounded-xl">
              <Card className="h-full flex flex-col transition-all duration-300 ease-smooth hover:shadow-2xl hover:-translate-y-2 active:shadow-2xl active:-translate-y-2">
                <CardHeader className="items-center text-center p-6">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src={coach.image}
                      alt={`Portrait of ${coach.name}`}
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="font-headline text-2xl pt-4">{coach.name}</CardTitle>
                  <CardDescription className="text-muted-foreground font-semibold">{coach.title}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-6 pt-0 text-center">
                  <p className="text-foreground/70">{coach.bio}</p>
                </CardContent>
                <CardFooter className="justify-center p-6 pt-0">
                  <div className="flex gap-2">
                    <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary active:text-primary">
                      <a href={coach.socials.twitter} aria-label={`${coach.name}'s Twitter`}>
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary active:text-primary">
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
