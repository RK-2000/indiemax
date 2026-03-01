'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

interface ArtisanCardProps {
  name: string
  slug: string
  photo: string
  craft: string
  region?: string
  shortBio?: string
  variant?: 'default' | 'light'
}

export default function ArtisanCard({
  name,
  slug,
  photo,
  craft,
  region,
  shortBio,
  variant = 'default',
}: ArtisanCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const isLight = variant === 'light'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/artisans/${slug}`} className="group block" data-cursor-text="Meet">
        <div className={`relative aspect-square overflow-hidden mb-4 ${isLight ? 'bg-cream/10' : 'bg-sand'}`}>
          {/* Skeleton loader */}
          {!imageLoaded && (
            <div className={`absolute inset-0 bg-gradient-to-r animate-shimmer ${
              isLight ? 'from-cream/10 via-cream/20 to-cream/10' : 'from-sand via-stone/20 to-sand'
            }`} />
          )}
          
          <Image
            src={photo}
            alt={name}
            fill
            className={`object-cover transition-all duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } group-hover:scale-110`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          {/* Reveal content on hover */}
          <div className="absolute inset-x-0 bottom-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <motion.span 
              className="inline-flex items-center gap-1.5 text-cream text-xs tracking-[0.15em] uppercase"
            >
              View Profile
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.span>
          </div>
          
          {/* Craft badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1.5 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase font-medium ${
              isLight ? 'bg-gold/90 text-charcoal' : 'bg-ivory/90 text-charcoal'
            }`}>
              {craft}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className={`text-lg tracking-wide font-medium transition-colors duration-300 ${
            isLight 
              ? 'text-cream group-hover:text-gold' 
              : 'text-charcoal group-hover:text-terracotta'
          }`}>
            {name}
          </h3>
          {region && (
            <p className={`flex items-center gap-1.5 text-sm transition-colors ${
              isLight ? 'text-cream/60 group-hover:text-cream/80' : 'text-taupe group-hover:text-walnut'
            }`}>
              <MapPin className="w-3.5 h-3.5" />
              {region}
            </p>
          )}
          {shortBio && (
            <p className={`text-sm line-clamp-2 leading-relaxed ${isLight ? 'text-cream/50' : 'text-walnut'}`}>
              {shortBio}
            </p>
          )}
          
          {/* Animated underline */}
          <div className={`h-[1px] relative overflow-hidden ${isLight ? 'bg-cream/20' : 'bg-stone/30'}`}>
            <div className={`absolute inset-y-0 left-0 w-0 group-hover:w-full transition-all duration-500 ${
              isLight ? 'bg-gold' : 'bg-terracotta'
            }`} />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
