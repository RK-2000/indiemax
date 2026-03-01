import { defineField, defineType } from 'sanity'

export const artisan = defineType({
  name: 'artisan',
  title: 'Artisan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      description: 'e.g., Jaipur, Rajasthan',
    }),
    defineField({
      name: 'craft',
      title: 'Craft Specialty',
      type: 'string',
      description: 'e.g., Block Printing, Bandhani, Kalamkari',
    }),
    defineField({
      name: 'experience',
      title: 'Years of Experience',
      type: 'number',
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 3,
      description: 'Brief introduction for cards',
    }),
    defineField({
      name: 'story',
      title: 'Full Story',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed story about the artisan',
    }),
    defineField({
      name: 'craftProcess',
      title: 'Craft Process',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', type: 'string', title: 'Step Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'image', type: 'image', title: 'Process Image', options: { hotspot: true } },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'craft',
      media: 'photo',
    },
  },
})
