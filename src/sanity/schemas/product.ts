import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
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
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'price',
      title: 'Price (₹)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price (₹)',
      type: 'number',
      description: 'Optional: Show as strikethrough if on sale',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Brief description for product cards',
    }),
    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'reference',
      to: [{ type: 'collection' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'artisan',
      title: 'Artisan',
      type: 'reference',
      to: [{ type: 'artisan' }],
    }),
    defineField({
      name: 'stock',
      title: 'Stock Quantity',
      type: 'number',
      description: 'Number of pieces available',
      validation: (Rule) => Rule.required().min(0),
      initialValue: 1,
    }),
    defineField({
      name: 'isSoldOut',
      title: 'Sold Out',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Kurtas', value: 'kurtas' },
          { title: 'Shirts', value: 'shirts' },
          { title: 'Dresses', value: 'dresses' },
          { title: 'Sarees', value: 'sarees' },
          { title: 'Dupattas', value: 'dupattas' },
          { title: 'Accessories', value: 'accessories' },
          { title: 'Co-ords', value: 'coords' },
        ],
      },
    }),
    defineField({
      name: 'fabric',
      title: 'Fabric',
      type: 'string',
      description: 'e.g., Cotton, Silk, Linen',
    }),
    defineField({
      name: 'craftDetails',
      title: 'Craft Details',
      type: 'text',
      rows: 3,
      description: 'Details about the handmade process',
    }),
    defineField({
      name: 'careInstructions',
      title: 'Care Instructions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'collection.name',
      media: 'images.0',
    },
  },
})
