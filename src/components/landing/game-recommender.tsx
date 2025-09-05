"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Bot, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { recommendGame, type RecommendGameOutput } from "@/ai/flows/game-recommendation";
import { Skeleton } from "../ui/skeleton";

const availableGames =
  "Cyberpunk 2077, The Witcher 3, Baldur's Gate 3, Elden Ring, Stardew Valley, Hades, Counter-Strike 2, Valorant, Apex Legends, Fortnite, League of Legends, Dota 2, Minecraft";

const formSchema = z.object({
  gameTastes: z.string().min(10, {
    message: "Please describe your tastes in at least 10 characters.",
  }),
});

export function GameRecommender() {
  const [result, setResult] = useState<RecommendGameOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gameTastes: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const res = await recommendGame({ ...values, availableGames });
      setResult(res);
    } catch (error) {
      console.error("Game recommendation error:", error);
      toast({
        title: "An Error Occurred",
        description: "Couldn't get a recommendation. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-recommender" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Bot className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl lg:text-4xl font-bold font-headline">AI Game Recommender</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Not sure what to play? Let our AI guide you to your next adventure from our collection.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Find Your Next Game</CardTitle>
              <CardDescription>
                Tell us about games you love, genres you enjoy, or what you're in the mood for.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="gameTastes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Game Tastes</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'I love open-world RPGs like The Witcher 3, but I'm looking for something with more challenging combat.'"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90">
                    {isLoading ? "Thinking..." : "Get Recommendation"}
                    {!isLoading && <Sparkles className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="w-full">
            <Card className="min-h-full">
              <CardHeader>
                <CardTitle>Our Suggestion</CardTitle>
                <CardDescription>Here's what our AI thinks you'll enjoy.</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                ) : result ? (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-headline text-primary">{result.recommendedGame}</h3>
                    <p className="text-muted-foreground">{result.reason}</p>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    <p>Your personalized recommendation will appear here.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
