'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

interface HeroSectionProps {
  title?: string
  subtitle?: string
}

export default function HeroSection({
  title = "Hand Block Prints · Indian Silhouettes",
  subtitle = "Modern Everyday Looks",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layer background for depth */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-ivory to-sand" />
        {/* Ambient color spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      </div>
      
      {/* Heritage pattern overlay */}
      <div className="absolute inset-0 heritage-pattern z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Craft Badge */}
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-terracotta/10 border border-terracotta/20 text-terracotta text-xs tracking-[0.15em] uppercase">
              <Sparkles className="w-3 h-3" />
              Artisan Crafted Since 2024
            </span>
          </motion.div>

          {/* Logo Image */}
          <motion.div 
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/logo.jpeg"
              alt="IndieMax"
              width={180}
              height={180}
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
              priority
            />
          </motion.div>

          {/* Brand Name */}
          <motion.h1 
            className="font-decorative text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.2em] text-charcoal mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            INDIEMAX
          </motion.h1>

          {/* Decorative line */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-terracotta/50" />
              <span className="w-1.5 h-1.5 bg-terracotta/60 rotate-45" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-terracotta/50" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p 
            className="font-serif text-sm md:text-base tracking-[0.2em] uppercase text-taupe mb-2 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {title}
          </motion.p>

          <motion.p 
            className="font-display text-lg md:text-xl tracking-wide text-walnut mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>

          {/* Value Propositions - Quick scan */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-xs tracking-wider text-taupe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-terracotta rounded-full" />
              100% Handcrafted
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-gold rounded-full" />
              Natural Dyes
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-olive rounded-full" />
              Artisan Direct
            </span>
          </motion.div>

          {/* Limited Drop Badge */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 px-6 py-3 bg-charcoal/5 border border-charcoal/10 text-xs tracking-[0.15em] uppercase text-terracotta font-serif">
              <span className="w-1.5 h-1.5 bg-terracotta rounded-full animate-pulse" />
              Limited Drop · No Repeats · Once it&apos;s gone, it&apos;s gone
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link
              href="/collections"
              className="group relative px-10 py-4 bg-charcoal text-cream hover:bg-walnut transition-all duration-300 text-sm tracking-[0.12em] uppercase overflow-hidden btn-magnetic"
            >
              <span className="relative z-10">Explore Collection</span>
            </Link>
            <Link
              href="/heritage"
              className="group relative px-10 py-4 border border-charcoal/30 text-charcoal hover:border-charcoal transition-all duration-300 text-sm tracking-[0.12em] uppercase overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-charcoal transition-colors">Our Story</span>
              <span className="absolute inset-0 bg-charcoal/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          y: { delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-taupe/60">Scroll</span>
        <ArrowDown className="w-4 h-4 text-taupe" />
      </motion.div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent z-[2]" />
    </section>
  )
}
