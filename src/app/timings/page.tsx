import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const batchTimings = [
  {
    name: "Beginner's Bow - Morning",
    days: "Mon, Wed, Fri",
    time: "9:00 AM - 10:30 AM",
    coach: "Elias Vance",
  },
  {
    name: "Beginner's Bow - Evening",
    days: "Mon, Wed, Fri",
    time: "6:00 PM - 7:30 PM",
    coach: "Seraphina Moon",
  },
  {
    name: "Intermediate Archer",
    days: "Tue, Thu",
    time: "5:30 PM - 7:00 PM",
    coach: "Elias Vance",
  },
  {
    name: "Competitive Edge",
    days: "Sat, Sun",
    time: "10:00 AM - 12:00 PM",
    coach: "Kenji Tanaka",
  },
  {
    name: "Kyudo Meditation",
    days: "Sunday",
    time: "8:00 AM - 9:30 AM",
    coach: "Kenji Tanaka",
  },
];

export default function TimingsPage() {
  return (
    <div className="bg-background min-h-screen">
       <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-headline text-5xl md:text-6xl font-bold">Batch Timings</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Find a schedule that works for you.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Weekly Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Batch Name</TableHead>
                    <TableHead>Days</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Coach</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {batchTimings.map((batch) => (
                    <TableRow key={batch.name}>
                      <TableCell className="font-medium">{batch.name}</TableCell>
                      <TableCell>{batch.days}</TableCell>
                      <TableCell>{batch.time}</TableCell>
                      <TableCell>{batch.coach}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}