'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart, Share2, Truck, Shield, Leaf, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProductDetailProps {
  product: {
    name: string
    slug: string
    images: string[]
    price: number
    description: string
    stock: number
    fabric?: string
    craftDetails?: string
    careInstructions?: string[]
    sizes?: string[]
    collection?: {
      name: string
      slug: string
      craftTechnique?: string
    }
    artisan?: {
      name: string
      slug: string
      photo: string
      craft?: string
      region?: string
      experience?: number
    }
  }
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  
  const showLowStock = product.stock > 0 && product.stock <= 5
  const images = product.images.length > 0 ? product.images : ['https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80']
  const sizes = product.sizes && product.sizes.length > 0 ? product.sizes : ["XS", "S", "M", "L", "XL"]
  const careInstructions = product.careInstructions && product.careInstructions.length > 0 
    ? product.careInstructions 
    : [
        "Hand wash or gentle machine wash in cold water",
        "Use mild detergent",
        "Dry in shade to preserve colors",
        "Iron on medium heat",
        "Natural dyes may show slight variations",
      ]

  return (
    <div className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm text-stone hover:text-charcoal transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-[3/4] overflow-hidden bg-sand"
            >
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {showLowStock && (
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-terracotta text-cream text-sm tracking-wider">
                    ONLY {product.stock} LEFT
                  </span>
                </div>
              )}
            </motion.div>
            
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square overflow-hidden ${
                      selectedImage === index
                        ? 'ring-2 ring-terracotta'
                        : 'opacity-70 hover:opacity-100'
                    } transition-all`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <div>
              {product.collection && (
                <Link
                  href={`/collections/${product.collection.slug}`}
                  className="text-sm tracking-wider uppercase text-terracotta hover:text-terracotta-dark transition-colors"
                >
                  {product.collection.name}
                </Link>
              )}
              <h1 className="text-3xl md:text-4xl font-light text-charcoal mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-2xl text-charcoal">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-3">
                Size
              </label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center border transition-colors ${
                      selectedSize === size
                        ? 'border-charcoal bg-charcoal text-cream'
                        : 'border-sand hover:border-charcoal'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button className="w-full py-4 bg-charcoal text-cream hover:bg-charcoal/90 transition-colors tracking-wider flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5" />
                ENQUIRE TO PURCHASE
              </button>
              <div className="flex gap-3">
                <button className="flex-1 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-colors flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  SAVE
                </button>
                <button className="flex-1 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  SHARE
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-sand">
              <div className="text-center">
                <Truck className="w-5 h-5 mx-auto mb-2 text-terracotta" />
                <span className="text-xs text-stone">Free Shipping</span>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 mx-auto mb-2 text-terracotta" />
                <span className="text-xs text-stone">Authentic Craft</span>
              </div>
              <div className="text-center">
                <Leaf className="w-5 h-5 mx-auto mb-2 text-terracotta" />
                <span className="text-xs text-stone">Natural Dyes</span>
              </div>
            </div>

            {/* Description */}
            {product.description && (
              <div>
                <h2 className="text-sm font-medium tracking-wider text-charcoal mb-3">
                  ABOUT THIS PIECE
                </h2>
                <div className="text-stone space-y-4">
                  {product.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Details */}
            <div className="space-y-4">
              {product.fabric && (
                <div>
                  <h3 className="text-sm font-medium tracking-wider text-charcoal mb-2">
                    FABRIC
                  </h3>
                  <p className="text-stone">{product.fabric}</p>
                </div>
              )}
              {product.craftDetails && (
                <div>
                  <h3 className="text-sm font-medium tracking-wider text-charcoal mb-2">
                    CRAFT DETAILS
                  </h3>
                  <p className="text-stone">{product.craftDetails}</p>
                </div>
              )}
              <div>
                <h3 className="text-sm font-medium tracking-wider text-charcoal mb-2">
                  CARE INSTRUCTIONS
                </h3>
                <ul className="text-stone space-y-1">
                  {careInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-terracotta">•</span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Artisan */}
            {product.artisan && (
              <div className="bg-sand p-6">
                <h3 className="text-sm font-medium tracking-wider text-charcoal mb-4">
                  MADE BY
                </h3>
                <Link
                  href={`/artisans/${product.artisan.slug}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={product.artisan.photo}
                      alt={product.artisan.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal group-hover:text-terracotta transition-colors">
                      {product.artisan.name}
                    </p>
                    {product.artisan.craft && (
                      <p className="text-sm text-terracotta">{product.artisan.craft}</p>
                    )}
                    {product.artisan.region && (
                      <p className="text-sm text-stone">{product.artisan.region}</p>
                    )}
                    {product.artisan.experience && (
                      <p className="text-sm text-stone mt-1">
                        {product.artisan.experience} years of experience
                      </p>
                    )}
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
