
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const programs = [
  {
    title: "Beginner's Bow",
    description: "Master the fundamentals of archery, from safety to your first shot. Perfect for all ages.",
    duration: "4 Weeks",
    price: "$199",
    features: ["Safety Protocols", "Stance & Grip", "Basic Aiming", "Equipment Use"],
  },
  {
    title: "Intermediate Archer",
    description: "Refine your technique, improve consistency, and increase your shooting distance.",
    duration: "6 Weeks",
    price: "$299",
    features: ["Advanced Form", "Distance Shooting", "Scoring Techniques", "Mental Focus"],
  },
  {
    title: "Competitive Edge",
    description: "Train for tournaments with elite coaching, video analysis, and competitive strategy.",
    duration: "8 Weeks",
    price: "$449",
    features: ["Tournament Prep", "Video Analysis", "Pressure Training", "Custom Drills"],
  },
];

export default function ProgramShowcase() {
  return (
    <section id="programs" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Programs</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From your first arrow to competitive excellence, we have a path for every archer.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.title} className="flex flex-col transition-all duration-300 ease-smooth hover:shadow-2xl hover:-translate-y-2 active:shadow-2xl active:-translate-y-2">
              <CardHeader className="p-6">
                <CardTitle className="font-headline text-2xl">{program.title}</CardTitle>
                <CardDescription className="pt-2 text-base text-foreground/70">{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <ul className="space-y-3">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="font-body">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 flex justify-between items-center bg-transparent mt-auto">
                 <p className="text-3xl font-bold font-headline text-foreground">{program.price}</p>
                 <p className="text-muted-foreground font-medium">{program.duration}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
