import { groq } from 'next-sanity'

// Site Settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  siteName,
  tagline,
  logo,
  heroImage,
  heroTitle,
  heroSubtitle,
  aboutShort,
  aboutFull,
  mission,
  values,
  instagram,
  whatsapp,
  email,
  phone,
  address
}`

// Announcements
export const announcementQuery = groq`*[_type == "announcement" && isActive == true][0]{
  message,
  link,
  backgroundColor
}`

// Collections
export const allCollectionsQuery = groq`*[_type == "collection" && isLive == true] | order(dropDate desc){
  _id,
  name,
  slug,
  tagline,
  coverImage,
  dropDate,
  craftTechnique,
  region,
  isFeatured,
  "productCount": count(*[_type == "product" && references(^._id)])
}`

export const featuredCollectionQuery = groq`*[_type == "collection" && isFeatured == true && isLive == true][0]{
  _id,
  name,
  slug,
  tagline,
  coverImage,
  gallery,
  story,
  dropDate,
  craftTechnique,
  artisans[]->{
    _id,
    name,
    photo,
    craft
  }
}`

export const upcomingCollectionQuery = groq`*[_type == "collection" && isLive == false && dropDate > now()] | order(dropDate asc)[0]{
  _id,
  name,
  slug,
  tagline,
  coverImage,
  dropDate,
  craftTechnique,
  inspiration
}`

export const collectionBySlugQuery = groq`*[_type == "collection" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  tagline,
  coverImage,
  gallery,
  story,
  inspiration,
  dropDate,
  craftTechnique,
  region,
  artisans[]->{
    _id,
    name,
    slug,
    photo,
    craft,
    region,
    shortBio
  },
  "products": *[_type == "product" && references(^._id)]{
    _id,
    name,
    slug,
    images,
    price,
    originalPrice,
    shortDescription,
    stock,
    isSoldOut,
    category
  }
}`

// Products
export const allProductsQuery = groq`*[_type == "product"] | order(_createdAt desc){
  _id,
  name,
  slug,
  images,
  price,
  originalPrice,
  shortDescription,
  stock,
  isSoldOut,
  category,
  collection->{
    name,
    slug
  }
}`

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  images,
  price,
  originalPrice,
  description,
  shortDescription,
  stock,
  isSoldOut,
  category,
  fabric,
  craftDetails,
  careInstructions,
  sizes,
  collection->{
    _id,
    name,
    slug,
    craftTechnique
  },
  artisan->{
    _id,
    name,
    slug,
    photo,
    craft,
    region,
    shortBio,
    experience
  }
}`

export const relatedProductsQuery = groq`*[_type == "product" && collection._ref == $collectionId && _id != $productId][0...4]{
  _id,
  name,
  slug,
  images,
  price,
  stock,
  isSoldOut
}`

// Artisans
export const allArtisansQuery = groq`*[_type == "artisan"] | order(name asc){
  _id,
  name,
  slug,
  photo,
  region,
  craft,
  experience,
  shortBio
}`

export const artisanBySlugQuery = groq`*[_type == "artisan" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  photo,
  region,
  craft,
  experience,
  shortBio,
  story,
  craftProcess,
  "products": *[_type == "product" && references(^._id)]{
    _id,
    name,
    slug,
    images,
    price,
    collection->{
      name,
      slug
    }
  }
}`

export const featuredArtisansQuery = groq`*[_type == "artisan"][0...4]{
  _id,
  name,
  slug,
  photo,
  craft,
  region
}`
