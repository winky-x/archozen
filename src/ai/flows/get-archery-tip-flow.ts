'use server';
/**
 * @fileOverview An AI flow for generating archery tips.
 *
 * - getArcheryTip - A function that generates a specific archery tip.
 * - GetArcheryTipInput - The input type for the getArcheryTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetArcheryTipInputSchema = z.object({
  category: z.enum(['form', 'aiming', 'mindset']).describe('The category of the archery tip to generate.'),
});
export type GetArcheryTipInput = z.infer<typeof GetArcheryTipInputSchema>;

export async function getArcheryTip(input: GetArcheryTipInput): Promise<string> {
    const archeryTipFlow = ai.defineFlow(
        {
          name: 'archeryTipFlow',
          inputSchema: GetArcheryTipInputSchema,
          outputSchema: z.string(),
        },
        async ({ category }) => {
          const prompt = `You are an expert archery coach. Provide a single, concise, and insightful tip for an archer focusing on their ${category}. The tip should be encouraging and easy to understand for an intermediate archer. Do not add any preamble or extra text, just the tip itself.`;
      
          const { output } = await ai.generate({
            prompt: prompt,
          });
      
          return output!;
        }
      );

  return archeryTipFlow(input);
}
