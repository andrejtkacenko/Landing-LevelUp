import { Star, Gamepad2, Zap, Percent, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const benefits = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Top-Tier Equipment",
    description: "Access to high-performance gaming PCs, next-gen consoles, and premium peripherals.",
  },
  {
    icon: <Gamepad2 className="h-8 w-8 text-primary" />,
    title: "Expansive Game Library",
    description: "Instantly play hundreds of titles, from the latest AAA releases to beloved indie gems.",
  },
  {
    icon: <Percent className="h-8 w-8 text-primary" />,
    title: "Exclusive Discounts",
    description: "Enjoy member-only discounts on events, merchandise, and snacks.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Vibrant Community",
    description: "Join regular tournaments, meetups, and connect with fellow gamers.",
  },
];

export function MemberBenefits() {
  return (
    <section id="membership" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Star className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl lg:text-4xl font-bold font-headline">Membership Perks</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Unlock a world of gaming advantages by joining the LevelUp community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold font-headline">{benefit.title}</h3>
                <p className="mt-1 text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
