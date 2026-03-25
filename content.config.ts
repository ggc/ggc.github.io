import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
    resume: defineCollection({
      type: 'data',
      source: 'galancasillas_gabriel.json',
      schema: z.object({
        fullname: z.string(),
        principalRole: z.string(),
        totalYearsExperience: z.string(),
        discipline: z.string(),
        capacity: z.string(),
        translations: z.record(z.any()),
      }),
    }),
  },
})
