'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Eye } from 'lucide-react'
import ProductCard from '../ProductCard'

interface FeaturedProduct {
  name: string
  slug: string
  image: string
  price: number
  originalPrice?: number
  stock: number
  isSoldOut?: boolean
}

interface FeaturedCollectionProps {
  name: string
  slug: string
  tagline?: string
  image: string
  craftTechnique?: string
  products?: FeaturedProduct[]
}

export default function FeaturedCollectionSection({
  name,
  slug,
  tagline,
  image,
  craftTechnique,
  products = [],
}: FeaturedCollectionProps) {
  return (
    <section className="py-20 md:py-28 bg-ivory relative texture-paper">
      {/* Subtle block print pattern overlay */}
      <div className="absolute inset-0 pattern-block-print opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section Number */}
          <span className="section-number block mb-4">01</span>
          
          <span className="text-xs tracking-[0.2em] uppercase text-terracotta mb-4 block font-serif">
            Featured Collection
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide mb-4 section-header-decorated">
            {name}
          </h2>
          {tagline && (
            <p className="font-serif text-base text-walnut max-w-2xl mx-auto italic mt-6">{tagline}</p>
          )}
        </motion.div>

        {/* Collection Hero - Split layout for better visual interest */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Main Image - Larger portion */}
            <div className="lg:col-span-3 relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/20 to-transparent" />
            </div>
            
            {/* Content Panel - Contrasting dark section */}
            <div className="lg:col-span-2 bg-charcoal flex items-center p-8 md:p-12 lg:p-16">
              <div className="text-cream">
                {craftTechnique && (
                  <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold mb-4">
                    <span className="w-6 h-px bg-gold/50" />
                    {craftTechnique}
                  </span>
                )}
                <h3 className="text-xl md:text-2xl font-display mb-4 tracking-wide">
                  Discover the Story Behind Each Piece
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed mb-8">
                  Every thread woven, every block pressed — a testament to generations of skill and dedication.
                </p>
                <Link
                  href={`/collections/${slug}`}
                  className="inline-flex items-center gap-3 text-cream hover:text-gold transition-colors group text-sm tracking-[0.12em] uppercase"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Full Collection</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        {products.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs tracking-[0.15em] uppercase text-taupe">From the Collection</span>
              <div className="h-px flex-1 mx-6 bg-gradient-to-r from-stone/50 to-transparent" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
              {products.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.slug}
                  name={product.name}
                  slug={product.slug}
                  image={product.image}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  stock={product.stock}
                  isSoldOut={product.isSoldOut}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* View All Link */}
        <div className="text-center pt-4">
          <Link
            href={`/collections/${slug}`}
            className="inline-flex items-center gap-2 px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-colors tracking-wider text-sm"
          >
            VIEW ALL PIECES
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
