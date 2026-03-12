import type { CollectionConfig } from 'payload'

export const Newsletters: CollectionConfig = {
  slug: 'newsletters',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'subscribedAt', 'source'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'subscribedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'source',
      type: 'text',
      admin: {
        description: 'Where they signed up from',
      },
    },
  ],
}
