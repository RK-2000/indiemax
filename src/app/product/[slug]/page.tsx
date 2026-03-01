'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart, Share2, Truck, Shield, Leaf, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

// Sample data - In production, this would come from Sanity CMS based on the slug
const sampleProduct = {
  name: "Azure Block Print Kurta",
  slug: "azure-block-print-kurta",
  images: [
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80",
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1200&q=80",
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=80",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc3f17?w=1200&q=80",
  ],
  price: 4500,
  description: `A stunning kurta featuring traditional Rajasthani block printing in calming azure blue tones. Each print is hand-stamped using antique wooden blocks, some over 100 years old.

The fabric is 100% organic cotton, pre-washed for softness and colored using natural indigo dyes. The result is a garment that becomes more beautiful with each wash, developing a unique patina that tells the story of its journey with you.`,
  stock: 3,
  category: "kurtas",
  fabric: "100% Organic Cotton",
  craftDetails: "Hand block printed using traditional wooden blocks. Natural indigo dye. 14-step printing process. Each piece takes 3 days to complete.",
  careInstructions: [
    "Hand wash or gentle machine wash in cold water",
    "Use mild detergent",
    "Dry in shade to preserve colors",
    "Iron on medium heat",
    "Natural dyes may show slight variations",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  collection: {
    name: "Rajasthan Reverie",
    slug: "rajasthan-reverie",
    craftTechnique: "Block Printing",
  },
  artisan: {
    name: "Ramji Bhai Khatri",
    slug: "ramji-bhai-khatri",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    craft: "Block Printing",
    region: "Bagru, Rajasthan",
    shortBio: "Third-generation block printer preserving traditional Dabu techniques.",
    experience: 35,
  },
}

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  
  const showLowStock = sampleProduct.stock > 0 && sampleProduct.stock <= 5

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
                src={sampleProduct.images[selectedImage]}
                alt={sampleProduct.name}
                fill
                className="object-cover"
                priority
              />
              {showLowStock && (
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-terracotta text-cream text-sm tracking-wider">
                    ONLY {sampleProduct.stock} LEFT
                  </span>
                </div>
              )}
            </motion.div>
            
            <div className="grid grid-cols-4 gap-2">
              {sampleProduct.images.map((image, index) => (
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
                    alt={`${sampleProduct.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <div>
              <Link
                href={`/collections/${sampleProduct.collection.slug}`}
                className="text-sm tracking-wider uppercase text-terracotta hover:text-terracotta-dark transition-colors"
              >
                {sampleProduct.collection.name}
              </Link>
              <h1 className="text-3xl md:text-4xl font-light text-charcoal mt-2 mb-4">
                {sampleProduct.name}
              </h1>
              <p className="text-2xl text-charcoal">
                ₹{sampleProduct.price.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-3">
                Size
              </label>
              <div className="flex flex-wrap gap-2">
                {sampleProduct.sizes.map((size) => (
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
            <div>
              <h2 className="text-sm font-medium tracking-wider text-charcoal mb-3">
                ABOUT THIS PIECE
              </h2>
              <div className="text-stone space-y-4">
                {sampleProduct.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium tracking-wider text-charcoal mb-2">
                  FABRIC
                </h3>
                <p className="text-stone">{sampleProduct.fabric}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium tracking-wider text-charcoal mb-2">
                  CRAFT DETAILS
                </h3>
                <p className="text-stone">{sampleProduct.craftDetails}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium tracking-wider text-charcoal mb-2">
                  CARE INSTRUCTIONS
                </h3>
                <ul className="text-stone space-y-1">
                  {sampleProduct.careInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-terracotta">•</span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Artisan */}
            <div className="bg-sand p-6">
              <h3 className="text-sm font-medium tracking-wider text-charcoal mb-4">
                MADE BY
              </h3>
              <Link
                href={`/artisans/${sampleProduct.artisan.slug}`}
                className="flex items-start gap-4 group"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={sampleProduct.artisan.photo}
                    alt={sampleProduct.artisan.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-charcoal group-hover:text-terracotta transition-colors">
                    {sampleProduct.artisan.name}
                  </p>
                  <p className="text-sm text-terracotta">{sampleProduct.artisan.craft}</p>
                  <p className="text-sm text-stone">{sampleProduct.artisan.region}</p>
                  <p className="text-sm text-stone mt-1">
                    {sampleProduct.artisan.experience} years of experience
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
