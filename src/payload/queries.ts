import { getPayloadClient, getMediaUrl } from './client'
import type { Where } from 'payload'

// Site Settings
export async function getSiteSettings() {
  const payload = await getPayloadClient()
  const settings = await payload.findGlobal({
    slug: 'site-settings',
  })
  return settings
}

// Announcement
export async function getAnnouncement() {
  const payload = await getPayloadClient()
  const announcement = await payload.findGlobal({
    slug: 'announcement',
  })
  return announcement.isActive ? announcement : null
}

// Collections
export async function getAllCollections() {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'collections',
    where: {
      isLive: {
        equals: true,
      },
    },
    sort: '-dropDate',
    depth: 2,
  })
  return result.docs
}

export async function getFeaturedCollection() {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'collections',
    where: {
      and: [
        { isFeatured: { equals: true } },
        { isLive: { equals: true } },
      ],
    },
    depth: 2,
    limit: 1,
  })
  return result.docs[0] || null
}

export async function getUpcomingCollection() {
  const payload = await getPayloadClient()
  const now = new Date().toISOString()
  const result = await payload.find({
    collection: 'collections',
    where: {
      and: [
        { isLive: { equals: false } },
        { dropDate: { greater_than: now } },
      ],
    },
    sort: 'dropDate',
    depth: 2,
    limit: 1,
  })
  return result.docs[0] || null
}

export async function getCollectionBySlug(slug: string) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'collections',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
    limit: 1,
  })
  
  if (!result.docs[0]) return null

  const collection = result.docs[0]
  
  // Get products in this collection
  const products = await payload.find({
    collection: 'products',
    where: {
      collection: {
        equals: collection.id,
      },
    },
    depth: 2,
  })

  return {
    ...collection,
    products: products.docs,
  }
}

// Products
export async function getAllProducts() {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'products',
    sort: '-createdAt',
    depth: 2,
  })
  return result.docs
}

export async function getProductBySlug(slug: string) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'products',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
    limit: 1,
  })
  return result.docs[0] || null
}

export async function getRelatedProducts(collectionId: string | number, excludeProductId: string | number) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'products',
    where: {
      and: [
        { collection: { equals: collectionId } },
        { id: { not_equals: excludeProductId } },
      ],
    },
    depth: 2,
    limit: 4,
  })
  return result.docs
}

// Artisans
export async function getAllArtisans() {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'artisans',
    sort: 'name',
    depth: 1,
  })
  return result.docs
}

export async function getArtisanBySlug(slug: string) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'artisans',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 1,
    limit: 1,
  })

  if (!result.docs[0]) return null

  const artisan = result.docs[0]

  // Get products by this artisan
  const products = await payload.find({
    collection: 'products',
    where: {
      artisan: {
        equals: artisan.id,
      },
    },
    depth: 2,
  })

  return {
    ...artisan,
    products: products.docs,
  }
}

// Newsletter
export async function subscribeToNewsletter(email: string, source?: string) {
  const payload = await getPayloadClient()
  
  try {
    await payload.create({
      collection: 'newsletters',
      data: {
        email,
        subscribedAt: new Date().toISOString(),
        source: source || 'website',
      },
    })
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Email already subscribed or invalid' }
  }
}
