import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'collection', 'stock', 'isSoldOut'],
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
      name: 'images',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Price in ₹',
      },
    },
    {
      name: 'originalPrice',
      type: 'number',
      min: 0,
      admin: {
        description: 'Original Price (₹) - Show as strikethrough if on sale',
      },
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      admin: {
        description: 'Brief description for product cards',
      },
    },
    {
      name: 'collection',
      type: 'relationship',
      relationTo: 'collections',
      required: true,
    },
    {
      name: 'artisan',
      type: 'relationship',
      relationTo: 'artisans',
    },
    {
      name: 'stock',
      type: 'number',
      required: true,
      min: 0,
      defaultValue: 1,
      admin: {
        description: 'Number of pieces available',
      },
    },
    {
      name: 'isSoldOut',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Kurtas', value: 'kurtas' },
        { label: 'Shirts', value: 'shirts' },
        { label: 'Dresses', value: 'dresses' },
        { label: 'Sarees', value: 'sarees' },
        { label: 'Dupattas', value: 'dupattas' },
        { label: 'Accessories', value: 'accessories' },
        { label: 'Co-ords', value: 'coords' },
      ],
    },
    {
      name: 'fabric',
      type: 'text',
      admin: {
        description: 'e.g., Cotton, Silk, Linen',
      },
    },
    {
      name: 'craftDetails',
      type: 'textarea',
      admin: {
        description: 'Details about the handmade process',
      },
    },
    {
      name: 'careInstructions',
      type: 'array',
      fields: [
        {
          name: 'instruction',
          type: 'text',
        },
      ],
    },
    {
      name: 'sizes',
      type: 'array',
      fields: [
        {
          name: 'size',
          type: 'text',
        },
      ],
    },
  ],
}
