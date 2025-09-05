import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[500px] flex items-center justify-center text-center text-white">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="A vibrant gaming setup"
        data-ai-hint="gaming setup"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-headline drop-shadow-lg">
          <span className="block">Unleash Your Inner Champion</span>
          <span className="block text-primary">at LevelUp Gaming Club</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-lg sm:text-xl text-neutral-200 drop-shadow-md">
          Experience gaming like never before with state-of-the-art PCs, a massive game library, and a community that shares your passion.
        </p>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#membership">
              Become a Member
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
