"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  MobileIcon,
  EnvelopeOpenIcon,
  Crosshair2Icon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
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
import Link from "next/link";
// import { WhatsappIcon } from "lucide-react";

export default function ContactPage() {
  const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);

  const form = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      subject: "",
      phone: "",
    },
  });

  const onSubmit = (data: {
    email: string;
    firstName: string;
    lastName: string;
    message: string;
    subject: string;
    phone: string;
  }) => {
    console.log({ ...data, appointmentDate });
  };

  const contactInfos = [
    { id: 0, data: "sovefi@gmail.com", icon: <EnvelopeOpenIcon /> },
    { id: 1, data: "113-232-2322", icon: <MobileIcon /> },
    {
      id: 2,
      data: "Halishar, Chattogram, Bangladesh",
      icon: <Crosshair2Icon />,
    },
  ];

  return (
    <div className="mt-24 mb-16">
      <div className="max-w-7xl mx-auto mt-[50px] md:mt-[60px] px-4 md:px-20 space-y-4 md:space-y-0">
        <div className="max-h-[212px]">
          <h2 className="text-[28px] md:text-[48px] font-semibold">
            Contact Us
          </h2>
          <p className="text-xs">
            Welcome to Sovefi. What sets sovefi apart, including our commitment
            to the environment.
          </p>
        </div>

        <div className="rounded-xl p-4 flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 md:space-x-8 mb-5">
          <div className="w-full mx-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your first name"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your last name"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            required
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            required
                            placeholder="Enter your phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          required
                          placeholder="Enter your subject"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          required
                          placeholder="Enter your message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormItem>
                  <FormLabel>Appointment Date</FormLabel>
                  <FormControl>
                    <DatePicker
                      selected={appointmentDate}
                      onChange={(date) => setAppointmentDate(date)}
                      className="w-full p-2 border rounded-md bg-white mx-3"
                      placeholderText="Select appointment date"
                    />
                  </FormControl>
                </FormItem>
                <div className="flex items-center justify-center py-2">
                  <Button className="w-full md:w-1/3" type="submit">
                    Send Your Message
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="w-full md:w-1/3 space-y-8">
            {contactInfos.map((contactInfo) => (
              <div
                key={contactInfo.id}
                className="p-5 flex flex-col items-center justify-center gap-6 text-center bg-slate-100 dark:bg-slate-950 rounded-xl"
              >
                <Button variant="ghost">{contactInfo.icon}</Button>
                <p className="text-sm">{contactInfo.data}</p>
              </div>
            ))}
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/md-kamrul-hasan-dev/"
                >
                  <Button variant="ghost">
                    <LinkedInLogoIcon />
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="ghost">
                    <TwitterLogoIcon />
                  </Button>
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/kamrul-CSE-official"
                >
                  <Button variant="ghost">
                    <GitHubLogoIcon />
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-center">Social Profiles</p>
            </div>
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full" variant="outline">
                {/* <WhatsappIcon className="mr-2 h-4 w-4" /> */}
                Chat on WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
