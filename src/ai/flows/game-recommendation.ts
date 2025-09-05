'use server';

/**
 * @fileOverview A game recommendation AI agent.
 *
 * - recommendGame - A function that handles the game recommendation process.
 * - RecommendGameInput - The input type for the recommendGame function.
 * - RecommendGameOutput - The return type for the recommendGame function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendGameInputSchema = z.object({
  gameTastes: z
    .string()
    .describe(
      'The users game tastes or game history, can include specific games or genres they enjoy.'
    ),
  availableGames: z
    .string()
    .describe('A list of games available at the club.'),
});
export type RecommendGameInput = z.infer<typeof RecommendGameInputSchema>;

const RecommendGameOutputSchema = z.object({
  recommendedGame: z.string().describe('The name of the recommended game.'),
  reason: z.string().describe('The reason for the recommendation.'),
});
export type RecommendGameOutput = z.infer<typeof RecommendGameOutputSchema>;

export async function recommendGame(input: RecommendGameInput): Promise<RecommendGameOutput> {
  return recommendGameFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendGamePrompt',
  input: {schema: RecommendGameInputSchema},
  output: {schema: RecommendGameOutputSchema},
  prompt: `You are a game recommendation expert. A user will provide their game tastes, and a list of available games.  You will recommend one game from the list of available games that the user might enjoy, and explain your reasoning.

Game Tastes: {{{gameTastes}}}
Available Games: {{{availableGames}}}`,
});

const recommendGameFlow = ai.defineFlow(
  {
    name: 'recommendGameFlow',
    inputSchema: RecommendGameInputSchema,
    outputSchema: RecommendGameOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
