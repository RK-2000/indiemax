'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Eye, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  name: string
  slug: string
  image: string
  price: number
  originalPrice?: number
  stock: number
  isSoldOut?: boolean
  collectionName?: string
}

export default function ProductCard({
  name,
  slug,
  image,
  price,
  originalPrice,
  stock,
  isSoldOut,
  collectionName,
}: ProductCardProps) {
  const showLowStock = stock > 0 && stock <= 5
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={`/product/${slug}`} className="block" data-cursor-view>
        <div className="relative aspect-[3/4] overflow-hidden bg-sand mb-4">
          {/* Skeleton loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-sand via-stone/20 to-sand animate-shimmer" />
          )}
          
          <Image
            src={image}
            alt={name}
            fill
            className={`object-cover transition-all duration-700 ease-out ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } group-hover:scale-110`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isSoldOut && (
              <motion.span 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="px-3 py-1.5 bg-charcoal text-cream text-[10px] tracking-[0.15em] uppercase font-medium"
              >
                Sold Out
              </motion.span>
            )}
            {showLowStock && !isSoldOut && (
              <motion.span 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="px-3 py-1.5 bg-terracotta text-cream text-[10px] tracking-[0.15em] uppercase font-medium flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 bg-cream rounded-full animate-pulse" />
                Only {stock} Left
              </motion.span>
            )}
            {originalPrice && originalPrice > price && (
              <span className="px-3 py-1.5 bg-gold text-charcoal text-[10px] tracking-[0.15em] uppercase font-medium">
                {Math.round((1 - price / originalPrice) * 100)}% Off
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <motion.button
              onClick={(e) => {
                e.preventDefault()
                setIsLiked(!isLiked)
              }}
              className={`w-9 h-9 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 ${
                isLiked 
                  ? 'bg-terracotta text-cream' 
                  : 'bg-ivory/80 text-charcoal hover:bg-terracotta hover:text-cream'
              }`}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </motion.button>
          </div>

          {/* Quick actions on hover */}
          <motion.div 
            className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0 }}
          >
            <motion.div
              className="flex items-center gap-2 px-5 py-3 bg-ivory/95 backdrop-blur-sm text-charcoal opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
            >
              <Eye className="w-4 h-4" />
              <span className="text-xs tracking-[0.1em] uppercase font-medium">Quick View</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          {collectionName && (
            <motion.p 
              className="text-[10px] text-taupe tracking-[0.15em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {collectionName}
            </motion.p>
          )}
          <h3 className="text-charcoal group-hover:text-terracotta transition-colors duration-300 font-medium">
            {name}
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-charcoal font-medium text-lg">
              ₹{price.toLocaleString('en-IN')}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-taupe line-through text-sm">
                ₹{originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          
          {/* Hover indicator line */}
          <div className="h-[1px] bg-stone/30 relative overflow-hidden">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-terracotta"
              initial={{ width: '0%' }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
              style={{ width: '0%' }}
            />
            <div className="absolute inset-y-0 left-0 bg-terracotta w-0 group-hover:w-full transition-all duration-500" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
