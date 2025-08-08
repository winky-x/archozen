"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const joinFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    experience: z.string().min(3, { message: "Please describe your experience." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;
type JoinFormValues = z.infer<typeof joinFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();

  const contactForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onChange",
  });

  const joinForm = useForm<JoinFormValues>({
    resolver: zodResolver(joinFormSchema),
    defaultValues: { name: "", email: "", phone: "", experience: "" },
    mode: "onChange",
  });

  function onContactSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    contactForm.reset();
  }

  function onJoinSubmit(data: JoinFormValues) {
    console.log(data);
    toast({
      title: "Application Received!",
      description: "Welcome! We're excited to have you. We will contact you shortly.",
    });
    joinForm.reset();
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions or ready to start your journey? We'd love to hear from you.
          </p>
        </div>
        <Tabs defaultValue="contact" className="max-w-2xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="join">Join Our Academy</TabsTrigger>
          </TabsList>
          <TabsContent value="contact">
            <Card className="glassmorphic">
              <CardHeader>
                <CardTitle className="font-headline">General Inquiry</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...contactForm}>
                  <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                    <FormField control={contactForm.control} name="name" render={({ field }) => (
                      <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={contactForm.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={contactForm.control} name="message" render={({ field }) => (
                      <FormItem><FormLabel>Your Message</FormLabel><FormControl><Textarea placeholder="Tell us how we can help..." className="min-h-[120px]" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <Button type="submit" className="w-full transition-transform duration-300 hover:scale-105" size="lg">Send Message</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="join">
          <Card className="glassmorphic">
              <CardHeader>
                <CardTitle className="font-headline">Academy Application</CardTitle>
                <CardDescription>Ready to take the next step? Tell us a bit about yourself.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...joinForm}>
                  <form onSubmit={joinForm.handleSubmit(onJoinSubmit)} className="space-y-6">
                    <FormField control={joinForm.control} name="name" render={({ field }) => (
                      <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Jane Smith" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={joinForm.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                     <FormField control={joinForm.control} name="phone" render={({ field }) => (
                      <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="(123) 456-7890" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={joinForm.control} name="experience" render={({ field }) => (
                      <FormItem><FormLabel>Archery Experience</FormLabel><FormControl><Textarea placeholder="e.g., Beginner, a few years of recreational shooting, etc." {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <Button type="submit" className="w-full transition-transform duration-300 hover:scale-105" size="lg">Submit Application</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
