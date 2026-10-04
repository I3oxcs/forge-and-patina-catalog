/**
 * CONTENT COLLECTIONS
 * Describes the shape of the site's data. Astro checks every file in a
 * collection against its schema when the site builds — a missing price
 * or misspelled field stops the build with a message naming the file.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { swatchKeys } from './data/swatches';

const wheels = defineCollection({
  // Every .md file in src/content/wheels/ is one wheel.
  // Its filename (minus .md) becomes its id: halden-71.md → "halden-71".
  loader: glob({ pattern: '*.md', base: './src/content/wheels' }),

  // `image` is a helper Astro passes in. It turns a path in the
  // frontmatter into an optimisable image, and fails the build if
  // the file doesn't exist.
  schema: ({ image }) => z.object({
    name:    z.string(),                 // "The Halden 71"
    year:    z.number().int(),           // 1971
    origin:  z.string(),                 // "Le Mans"
    summary: z.string(),                 // one sentence, for cards and search results

    // Lines of text; each becomes its own line on the page.
    tagline:      z.array(z.string()),   // hero, under the name
    storyHeading: z.array(z.string()),   // heading above the origin story

    // Technical data
    construction: z.string(),
    material:     z.string(),
    details: z.array(z.object({          // rows that differ between wheels
      label: z.string(),
      value: z.string(),
    })).default([]),
    sizes:        z.array(z.number().int()).nonempty(),   // diameters in inches
    weight: z.object({
      kg:   z.number(),
      size: z.number().int(),            // the diameter the weight was measured at
    }),
    pcd:           z.string(),
    leadTimeWeeks: z.number().int(),
    price:         z.number().int(),     // euros, per wheel

    finishes: z.array(z.object({
      name:   z.string(),                // "Polished Bronze"
      code:   z.string(),                // "PB-71"
      swatch: z.enum(swatchKeys),        // must be a key in src/data/swatches.ts
    })).nonempty(),

    // The first image is the hero. No images → the page shows a placeholder.
    images: z.array(z.object({
      src: image(),
      alt: z.string(),
    })).default([]),
  }),
});

export const collections = { wheels };
