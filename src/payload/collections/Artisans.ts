import type { CollectionConfig } from 'payload'

export const Artisans: CollectionConfig = {
  slug: 'artisans',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'craft', 'region', 'experience'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'region',
      type: 'text',
      admin: {
        description: 'e.g., Jaipur, Rajasthan',
      },
    },
    {
      name: 'craft',
      type: 'text',
      admin: {
        description: 'Craft Specialty - e.g., Block Printing, Bandhani, Kalamkari',
      },
    },
    {
      name: 'experience',
      type: 'number',
      admin: {
        description: 'Years of Experience',
      },
    },
    {
      name: 'shortBio',
      type: 'textarea',
      admin: {
        description: 'Brief introduction for cards',
      },
    },
    {
      name: 'story',
      type: 'richText',
      admin: {
        description: 'Detailed story about the artisan',
      },
    },
    {
      name: 'craftProcess',
      type: 'array',
      fields: [
        {
          name: 'step',
          type: 'text',
          label: 'Step Title',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Process Image',
        },
      ],
    },
  ],
}
