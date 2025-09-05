import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Swords } from "lucide-react";

const games = [
  {
    title: "Cyberpunk 2077",
    description: "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
    genre: "RPG",
    image: "https://picsum.photos/600/400?v=1",
    imageHint: "sci-fi city",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    description: "You are Geralt of Rivia, mercenary monster slayer. At your disposal is every tool of the trade: razor-sharp swords, lethal mixtures, stealthy crossbows, and powerful combat magic.",
    genre: "RPG",
    image: "https://picsum.photos/600/400?v=2",
    imageHint: "fantasy warrior",
  },
  {
    title: "Elden Ring",
    description: "THE NEW FANTASY ACTION RPG. Arise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    genre: "Action RPG",
    image: "https://picsum.photos/600/400?v=3",
    imageHint: "dark fantasy",
  },
  {
    title: "Valorant",
    description: "A 5v5 character-based tactical shooter where precise gunplay meets unique agent abilities.",
    genre: "Tactical Shooter",
    image: "https://picsum.photos/600/400?v=4",
    imageHint: "abstract shapes",
  },
  {
    title: "Baldur's Gate 3",
    description: "Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.",
    genre: "CRPG",
    image: "https://picsum.photos/600/400?v=5",
    imageHint: "fantasy group",
  },
  {
    title: "Hades",
    description: "Defy the god of the dead as you hack and slash your way out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion and Transistor.",
    genre: "Roguelike",
    image: "https://picsum.photos/600/400?v=6",
    imageHint: "mythology art",
  },
];

export function GamesShowcase() {
  return (
    <section id="games" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Swords className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl lg:text-4xl font-bold font-headline">Our Game Library</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore a selection of the hottest titles and timeless classics available to all members.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card key={game.title} className="overflow-hidden flex flex-col group">
              <div className="relative h-48 w-full">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={game.imageHint}
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-headline">{game.title}</CardTitle>
                  <Badge variant="secondary">{game.genre}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{game.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
