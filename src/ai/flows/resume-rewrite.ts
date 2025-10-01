'use server';
/**
 * @fileOverview Rewrites the uploaded resume to match the tone of the portfolio.
 *
 * - rewriteResume - A function that handles the resume rewriting process.
 * - RewriteResumeInput - The input type for the rewriteResume function.
 * - RewriteResumeOutput - The return type for the rewriteResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteResumeInputSchema = z.object({
  resumeDataUri: z
    .string()
    .describe(
      'The resume as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
  portfolioText: z.string().describe('The text content of the portfolio.'),
});
export type RewriteResumeInput = z.infer<typeof RewriteResumeInputSchema>;

const RewriteResumeOutputSchema = z.object({
  rewrittenResume: z.string().describe('The rewritten resume content.'),
});
export type RewriteResumeOutput = z.infer<typeof RewriteResumeOutputSchema>;

export async function rewriteResume(input: RewriteResumeInput): Promise<RewriteResumeOutput> {
  return rewriteResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rewriteResumePrompt',
  input: {schema: RewriteResumeInputSchema},
  output: {schema: RewriteResumeOutputSchema},
  prompt: `You are an expert resume writer. Rewrite the following resume to match the style and tone of the provided portfolio text.

Resume:
{{resumeDataUri}}

Portfolio Text:
{{portfolioText}}`,
});

const rewriteResumeFlow = ai.defineFlow(
  {
    name: 'rewriteResumeFlow',
    inputSchema: RewriteResumeInputSchema,
    outputSchema: RewriteResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
