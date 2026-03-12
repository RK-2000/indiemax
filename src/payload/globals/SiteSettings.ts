import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'IndieMax',
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Handcrafted Heritage Prints',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Homepage Hero Image',
      },
    },
    {
      name: 'heroTitle',
      type: 'text',
    },
    {
      name: 'heroSubtitle',
      type: 'textarea',
    },
    {
      name: 'aboutShort',
      type: 'textarea',
      admin: {
        description: 'Brief about text for homepage',
      },
    },
    {
      name: 'aboutFull',
      type: 'richText',
      admin: {
        description: 'Full story for the Heritage page',
      },
    },
    {
      name: 'mission',
      type: 'textarea',
      admin: {
        description: 'Mission Statement',
      },
    },
    {
      name: 'values',
      type: 'array',
      label: 'Brand Values',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Value Title',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'icon',
          type: 'text',
          admin: {
            description: 'Lucide icon name',
          },
        },
      ],
    },
    {
      name: 'instagram',
      type: 'text',
      admin: {
        description: 'Instagram URL',
      },
    },
    {
      name: 'whatsapp',
      type: 'text',
      admin: {
        description: 'WhatsApp Number - Include country code, e.g., +91XXXXXXXXXX',
      },
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'address',
      type: 'textarea',
    },
  ],
}
