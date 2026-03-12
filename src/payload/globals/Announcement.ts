import type { GlobalConfig } from 'payload'

export const Announcement: GlobalConfig = {
  slug: 'announcement',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'message',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      admin: {
        description: 'Optional link',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'backgroundColor',
      type: 'select',
      options: [
        { label: 'Terracotta', value: 'terracotta' },
        { label: 'Indigo', value: 'indigo' },
        { label: 'Gold', value: 'gold' },
        { label: 'Olive', value: 'olive' },
      ],
      defaultValue: 'terracotta',
    },
  ],
}
