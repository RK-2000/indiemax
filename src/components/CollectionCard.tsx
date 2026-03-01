'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface CollectionCardProps {
  name: string
  slug: string
  image: string
  tagline?: string
  craftTechnique?: string
  productCount?: number
}

export default function CollectionCard({
  name,
  slug,
  image,
  tagline,
  craftTechnique,
  productCount,
}: CollectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/collections/${slug}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end text-cream">
            {craftTechnique && (
              <span className="text-xs tracking-[0.15em] uppercase text-gold mb-2">
                {craftTechnique}
              </span>
            )}
            <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-2">{name}</h3>
            {tagline && (
              <p className="text-sm text-cream/80 mb-4 line-clamp-2">
                {tagline}
              </p>
            )}
            <div className="flex items-center justify-between">
              {productCount !== undefined && (
                <span className="text-sm text-cream/70">
                  {productCount} {productCount === 1 ? 'piece' : 'pieces'}
                </span>
              )}
              <span className="flex items-center gap-2 text-sm group-hover:text-gold transition-colors tracking-wide">
                Explore
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
