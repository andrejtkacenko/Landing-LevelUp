import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users } from "lucide-react";

const testimonials = [
  {
    name: "Alex 'Cypher' Johnson",
    avatar: "AJ",
    image: "https://picsum.photos/100/100",
    imageHint: "man face",
    quote: "The best gaming community I've ever been a part of. The events are epic and I've made some great friends.",
  },
  {
    name: "Mia 'Valkyrie' Chen",
    avatar: "MC",
    image: "https://picsum.photos/101/101",
    imageHint: "woman face",
    quote: "LevelUp has top-tier equipment and a huge game library. It's my go-to spot for competitive practice.",
  },
  {
    name: "Sam 'Glitch' Rodriguez",
    avatar: "SR",
    image: "https://picsum.photos/102/102",
    imageHint: "person face",
    quote: "As a casual gamer, I love the welcoming atmosphere. There's always someone to team up with, no matter the game.",
  },
];

export function CommunityHighlights() {
  return (
    <section id="community" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Users className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl lg:text-4xl font-bold font-headline">Join Our Thriving Community</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Hear what our members have to say about their experience at LevelUp.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <p className="text-foreground/90">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.imageHint}/>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold font-headline">{testimonial.name}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
