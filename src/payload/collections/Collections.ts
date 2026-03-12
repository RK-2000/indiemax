import type { CollectionConfig } from 'payload'

export const Collections: CollectionConfig = {
  slug: 'collections',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'craftTechnique', 'isLive', 'isFeatured', 'dropDate'],
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
      name: 'tagline',
      type: 'text',
      admin: {
        description: 'Short catchy line for the collection',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'story',
      type: 'richText',
      admin: {
        description: 'The narrative behind this collection',
      },
    },
    {
      name: 'inspiration',
      type: 'textarea',
      admin: {
        description: 'What inspired this collection',
      },
    },
    {
      name: 'dropDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        description: 'When this collection launches',
      },
    },
    {
      name: 'isLive',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Toggle to make collection visible',
      },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Show on homepage',
      },
    },
    {
      name: 'artisans',
      type: 'relationship',
      relationTo: 'artisans',
      hasMany: true,
      admin: {
        description: 'Featured Artisans',
      },
    },
    {
      name: 'craftTechnique',
      type: 'text',
      admin: {
        description: 'e.g., Block Print, Bandhani, Ikat',
      },
    },
    {
      name: 'region',
      type: 'text',
      admin: {
        description: 'Region of Origin',
      },
    },
  ],
}
