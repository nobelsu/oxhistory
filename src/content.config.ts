import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Events / termcard. Each event is one Markdown file in src/content/events/.
// The body of the Markdown file is the event's long description.
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time: z.string().optional(),
    // Which kind of event — drives the coloured tag on the card.
    type: z.enum(['academic', 'social', 'welfare']).default('academic'),
    location: z.string().optional(),
    // Short one-line summary used in listings.
    summary: z.string().optional(),
    // Optional sign-up / tickets link.
    link: z.string().optional(),
    // Hide from the site without deleting (e.g. a draft).
    draft: z.boolean().default(false),
  }),
});

export const collections = { events };
