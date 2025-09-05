"use client";

import { Calendar as CalendarIcon, Swords, Handshake } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    title: "Weekly 'Valorant' Showdown",
    date: "Every Friday",
    type: "Tournament",
    icon: <Swords className="h-4 w-4 mr-2" />,
  },
  {
    title: "Indie Game Discovery Night",
    date: "June 28, 2024",
    type: "Meetup",
    icon: <Handshake className="h-4 w-4 mr-2" />,
  },
  {
    title: "Summer 'Apex Legends' Championship",
    date: "July 15, 2024",
    type: "Tournament",
    icon: <Swords className="h-4 w-4 mr-2" />,
  },
];

export function EventCalendar() {
  return (
    <section id="events" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <CalendarIcon className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl lg:text-4xl font-bold font-headline">Upcoming Events</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Don't miss out on our exciting tournaments, meetups, and special events.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-2 sm:p-4">
                 <Calendar
                    mode="single"
                    selected={new Date()}
                    className="rounded-md w-full"
                    />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-headline">Event List</h3>
            {events.map((event) => (
              <Card key={event.title}>
                 <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                        {event.icon} {event.title}
                    </CardTitle>
                    <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Badge variant={event.type === 'Tournament' ? 'default' : 'secondary'}>{event.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
