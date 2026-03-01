'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'
import ArtisanCard from '../ArtisanCard'

interface Artisan {
  name: string
  slug: string
  photo: string
  craft: string
  region?: string
}

interface ArtisanSpotlightProps {
  artisans: Artisan[]
  title?: string
  subtitle?: string
}

export default function ArtisanSpotlightSection({
  artisans,
  title = "Meet the Artisans",
  subtitle = "Behind every piece is a master craftsperson keeping centuries-old traditions alive."
}: ArtisanSpotlightProps) {
  return (
    <section className="py-20 md:py-28 bg-walnut text-cream relative overflow-hidden text-on-dark">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-terracotta rounded-full blur-3xl" />
      </div>
      
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section Number - Gold on dark */}
          <span className="text-[0.75rem] tracking-[0.3em] text-gold/60 block mb-4">03</span>
          
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-gold/80 mb-6 font-serif">
            <Users className="w-4 h-4" />
            The Human Touch
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wide mb-4">
            {title}
          </h2>
          <p className="font-serif text-base text-cream/70 max-w-2xl mx-auto italic">
            {subtitle}
          </p>
          
          {/* Quote block */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-lg mx-auto"
          >
            <p className="text-cream/50 text-sm italic font-serif">
              "When you wear our work, you carry forward a legacy that spans generations."
            </p>
          </motion.blockquote>
        </motion.div>

        {/* Artisan Grid - Increased spacing on dark bg */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-16">
          {artisans.slice(0, 4).map((artisan, index) => (
            <motion.div
              key={artisan.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ArtisanCard
                name={artisan.name}
                slug={artisan.slug}
                photo={artisan.photo}
                craft={artisan.craft}
                region={artisan.region}
                variant="light"
              />
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 py-8 border-t border-b border-cream/10 mb-12"
        >
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-display text-gold mb-1">50+</span>
            <span className="text-xs tracking-wider uppercase text-cream/50">Artisan Partners</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-display text-gold mb-1">12</span>
            <span className="text-xs tracking-wider uppercase text-cream/50">Craft Traditions</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-display text-gold mb-1">8</span>
            <span className="text-xs tracking-wider uppercase text-cream/50">Indian States</span>
          </div>
        </motion.div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/artisans"
            className="inline-flex items-center gap-2 text-cream hover:text-gold transition-colors group text-sm tracking-[0.12em] uppercase border border-cream/30 hover:border-gold/50 px-8 py-4"
          >
            <span>Discover All Artisans</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
