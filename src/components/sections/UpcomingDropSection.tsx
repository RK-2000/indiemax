'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Bell, Calendar, Clock } from 'lucide-react'
import CountdownTimer from '../CountdownTimer'

interface UpcomingDropProps {
  name: string
  slug: string
  tagline?: string
  image: string
  dropDate: string
  craftTechnique?: string
  inspiration?: string
}

export default function UpcomingDropSection({
  name,
  slug,
  tagline,
  image,
  dropDate,
  craftTechnique,
  inspiration,
}: UpcomingDropProps) {
  return (
    <section className="py-20 md:py-28 bg-sand relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pattern-woven" />
      
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-number block mb-4">02</span>
          <span className="text-xs tracking-[0.2em] uppercase text-terracotta mb-4 block font-serif">
            Upcoming Release
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-stretch">
          {/* Image - Full bleed on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] lg:aspect-auto overflow-hidden"
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            
            {/* Coming Soon Badge - Positioned prominently */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <motion.span 
                className="px-4 py-2 bg-terracotta text-cream text-xs tracking-[0.15em] uppercase flex items-center gap-2"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Clock className="w-3 h-3" />
                Coming Soon
              </motion.span>
            </div>
            
            {/* Date Badge */}
            <div className="absolute bottom-6 left-6 bg-cream/95 backdrop-blur-sm px-4 py-3 flex items-center gap-3">
              <Calendar className="w-4 h-4 text-terracotta" />
              <div>
                <span className="text-[10px] tracking-wider uppercase text-taupe block">Drop Date</span>
                <span className="text-sm font-display text-charcoal">March 15, 2026</span>
              </div>
            </div>
          </motion.div>

          {/* Content - On contrasting background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-linen p-8 md:p-12 lg:p-16 flex flex-col justify-center"
          >
            {craftTechnique && (
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-terracotta mb-4 font-serif">
                <span className="w-6 h-px bg-terracotta/50" />
                {craftTechnique}
              </span>
            )}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide mb-4">
              {name}
            </h2>
            {tagline && (
              <p className="font-accent text-lg md:text-xl text-walnut mb-6">{tagline}</p>
            )}
            {inspiration && (
              <div className="mb-8 pb-8 border-b border-stone/30">
                <p className="text-taupe leading-relaxed font-serif italic text-sm">{inspiration}</p>
              </div>
            )}

            {/* Countdown - More prominent */}
            <div className="mb-10 p-6 bg-cream/80 border border-stone/20">
              <span className="text-[10px] tracking-[0.2em] uppercase text-taupe mb-4 block">Launching In</span>
              <CountdownTimer
                targetDate={dropDate}
                title=""
              />
            </div>

            {/* Notify Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-charcoal text-cream hover:bg-walnut transition-colors text-sm tracking-[0.12em] uppercase flex items-center justify-center gap-2">
                <Bell className="w-4 h-4" />
                Notify Me
              </button>
              <Link
                href={`/collections/${slug}`}
                className="px-8 py-4 border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal/5 transition-colors text-sm tracking-[0.12em] uppercase text-center"
              >
                Preview Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
