'use server';

/**
 * @fileOverview An AI agent that refines landing page content to improve engagement and conversion.
 *
 * - improveLandingPageContent - A function that refines landing page content.
 * - ImproveLandingPageContentInput - The input type for the improveLandingPageContent function.
 * - ImproveLandingPageContentOutput - The return type for the improveLandingPageContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveLandingPageContentInputSchema = z.object({
  title: z.string().describe('The title of the landing page.'),
  heading: z.string().describe('The main heading of the landing page.'),
  bodyCopy: z.string().describe('The body copy of the landing page.'),
  keywords: z
    .string()
    .describe(
      'Comma separated list of keywords relevant to the landing page content.'
    ),
});
export type ImproveLandingPageContentInput = z.infer<
  typeof ImproveLandingPageContentInputSchema
>;

const ImproveLandingPageContentOutputSchema = z.object({
  refinedTitle: z.string().describe('The refined title of the landing page.'),
  refinedHeading: z
    .string()
    .describe('The refined main heading of the landing page.'),
  refinedBodyCopy: z
    .string()
    .describe('The refined body copy of the landing page.'),
  reasoning: z
    .string()
    .describe(
      'Explanation of why the content was refined and what impact it should have.'
    ),
});
export type ImproveLandingPageContentOutput = z.infer<
  typeof ImproveLandingPageContentOutputSchema
>;

export async function improveLandingPageContent(
  input: ImproveLandingPageContentInput
): Promise<ImproveLandingPageContentOutput> {
  return improveLandingPageContentFlow(input);
}

const improveLandingPageContentPrompt = ai.definePrompt({
  name: 'improveLandingPageContentPrompt',
  input: {schema: ImproveLandingPageContentInputSchema},
  output: {schema: ImproveLandingPageContentOutputSchema},
  prompt: `You are an expert marketer specializing in landing page optimization.

  You will receive the title, heading, and body copy of a landing page, as well as a list of keywords.
  Your goal is to refine the content to be more engaging and effective at converting visitors.

  Provide a reasoning explaining why the content was refined and what impact it should have.

  Title: {{{title}}}
  Heading: {{{heading}}}
  Body Copy: {{{bodyCopy}}}
  Keywords: {{{keywords}}}
  `,
});

const improveLandingPageContentFlow = ai.defineFlow(
  {
    name: 'improveLandingPageContentFlow',
    inputSchema: ImproveLandingPageContentInputSchema,
    outputSchema: ImproveLandingPageContentOutputSchema,
  },
  async input => {
    const {output} = await improveLandingPageContentPrompt(input);
    return output!;
  }
);
