import { defineField, defineType } from 'sanity'

export const collection = defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Collection Name',
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
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short catchy line for the collection',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'story',
      title: 'Collection Story',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The narrative behind this collection',
    }),
    defineField({
      name: 'inspiration',
      title: 'Inspiration',
      type: 'text',
      rows: 3,
      description: 'What inspired this collection',
    }),
    defineField({
      name: 'dropDate',
      title: 'Drop Date',
      type: 'datetime',
      description: 'When this collection launches',
    }),
    defineField({
      name: 'isLive',
      title: 'Is Live',
      type: 'boolean',
      description: 'Toggle to make collection visible',
      initialValue: false,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Collection',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'artisans',
      title: 'Featured Artisans',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'artisan' }] }],
    }),
    defineField({
      name: 'craftTechnique',
      title: 'Craft Technique',
      type: 'string',
      description: 'e.g., Block Print, Bandhani, Ikat',
    }),
    defineField({
      name: 'region',
      title: 'Region of Origin',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'craftTechnique',
      media: 'coverImage',
    },
  },
})
