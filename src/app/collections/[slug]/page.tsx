import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ArtisanCard from "@/components/ArtisanCard";

// This would be dynamically generated in production
export const metadata: Metadata = {
  title: "Collection | IndieMax",
  description: "Explore this unique collection of handcrafted Indian heritage prints.",
};

// Sample data - In production, this would come from Sanity CMS based on the slug
const sampleCollection = {
  name: "Rajasthan Reverie",
  slug: "rajasthan-reverie",
  tagline: "A journey through the vibrant textile traditions of the desert state",
  coverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1600&q=80",
  craftTechnique: "Block Printing",
  region: "Rajasthan",
  story: `The Rajasthan Reverie collection is born from countless hours spent in the narrow lanes of Bagru and Sanganer, watching master craftspeople practice an art that has been passed down through generations.

Each piece in this collection carries the imprint of history — from the hand-carved wooden blocks to the natural dyes extracted from pomegranate rinds and indigo leaves. The patterns you see are not merely decorative; they are a language, telling stories of royal courts, monsoon rains, and desert blooms.

This collection celebrates the resilience of these traditions in a world of fast fashion. Every kurta, every dupatta, every dress is a meditation on patience and precision. When you wear these pieces, you carry forward a legacy.`,
  inspiration: "Inspired by the geometric precision and natural indigo hues of Kutch's master printers.",
  artisans: [
    {
      name: "Ramji Bhai Khatri",
      slug: "ramji-bhai-khatri",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      craft: "Block Printing",
      region: "Bagru, Rajasthan",
      shortBio: "Third-generation block printer preserving traditional Dabu techniques.",
    },
    {
      name: "Geeta Devi",
      slug: "geeta-devi",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
      craft: "Natural Dyeing",
      region: "Sanganer, Rajasthan",
      shortBio: "Expert in extracting vibrant colors from local plants and minerals.",
    },
  ],
  products: [
    {
      name: "Azure Block Print Kurta",
      slug: "azure-block-print-kurta",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      price: 4500,
      stock: 3,
    },
    {
      name: "Terracotta Ajrak Dress",
      slug: "terracotta-ajrak-dress",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
      price: 5200,
      originalPrice: 6500,
      stock: 5,
    },
    {
      name: "Indigo Dabu Print Set",
      slug: "indigo-dabu-print-set",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
      price: 6800,
      stock: 2,
    },
    {
      name: "Natural Dye Cotton Dupatta",
      slug: "natural-dye-cotton-dupatta",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc3f17?w=800&q=80",
      price: 1800,
      stock: 8,
    },
    {
      name: "Bagru Print Maxi Dress",
      slug: "bagru-print-maxi-dress",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&q=80",
      price: 5800,
      stock: 4,
    },
    {
      name: "Hand Block Print Shirt",
      slug: "hand-block-print-shirt",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      price: 3200,
      stock: 6,
    },
  ],
};

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={sampleCollection.coverImage}
          alt={sampleCollection.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 w-full text-cream">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-sm text-cream/80 hover:text-cream mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Collections
            </Link>
            <span className="text-sm tracking-wider uppercase text-gold-light mb-3 block">
              {sampleCollection.craftTechnique} • {sampleCollection.region}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
              {sampleCollection.name}
            </h1>
            <p className="text-xl text-cream/80 max-w-2xl">
              {sampleCollection.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Collection Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm tracking-wider uppercase text-terracotta mb-6">
            The Story
          </h2>
          <div className="prose prose-lg text-stone">
            {sampleCollection.story.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-16 md:py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
              The Makers
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-charcoal">
              Artisans Behind This Collection
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {sampleCollection.artisans.map((artisan) => (
              <ArtisanCard
                key={artisan.slug}
                name={artisan.name}
                slug={artisan.slug}
                photo={artisan.photo}
                craft={artisan.craft}
                region={artisan.region}
                shortBio={artisan.shortBio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
              {sampleCollection.products.length} Pieces
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-charcoal">
              Shop the Collection
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {sampleCollection.products.map((product) => (
              <ProductCard
                key={product.slug}
                name={product.name}
                slug={product.slug}
                image={product.image}
                price={product.price}
                originalPrice={product.originalPrice}
                stock={product.stock}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
