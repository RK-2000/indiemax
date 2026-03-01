'use client'

import { motion } from 'framer-motion'
import { Hand, Leaf, Heart, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const defaultValues = [
  {
    icon: Hand,
    title: 'Handcrafted',
    description: 'Every piece is meticulously crafted by skilled artisans using traditional techniques passed down through generations.',
    stat: '100%',
    statLabel: 'Hand Made',
  },
  {
    icon: Heart,
    title: 'Artisan First',
    description: 'We work directly with master craftspeople, ensuring fair wages and preserving their invaluable heritage skills.',
    stat: '2x',
    statLabel: 'Fair Wages',
  },
  {
    icon: Sparkles,
    title: 'Limited Editions',
    description: 'Each collection is a unique story with no repeats. When it\'s gone, it\'s gone — making every piece truly special.',
    stat: '1',
    statLabel: 'Of A Kind',
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    description: 'Natural dyes, organic fabrics, and slow fashion principles guide our commitment to the environment.',
    stat: '0',
    statLabel: 'Synthetics',
  },
]

interface BrandValue {
  title: string
  description: string
  icon?: string
}

interface BrandValuesSectionProps {
  values?: BrandValue[]
}

export default function BrandValuesSection({ values }: BrandValuesSectionProps) {
  const displayValues = values?.length ? values : defaultValues

  const getIcon = (iconName?: string, index?: number) => {
    const icons = [Hand, Heart, Sparkles, Leaf]
    if (iconName) {
      const iconMap: { [key: string]: typeof Hand } = {
        hand: Hand,
        heart: Heart,
        sparkles: Sparkles,
        leaf: Leaf,
      }
      return iconMap[iconName.toLowerCase()] || icons[index || 0]
    }
    return icons[index || 0]
  }

  return (
    <section className="py-20 md:py-28 bg-cream relative texture-paper overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 heritage-pattern opacity-30" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-number block mb-4">04</span>
          
          <span className="text-xs tracking-[0.2em] uppercase text-terracotta mb-4 block font-serif">
            Our Philosophy
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide mb-4 section-header-decorated">
            Weaving Stories, Not Just Fabric
          </h2>
          <p className="font-serif text-base text-walnut max-w-2xl mx-auto italic mt-6">
            Every thread carries meaning. Every pattern tells a tale.
          </p>
        </motion.div>

        {/* Values Grid - Card style on light bg */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {displayValues.map((value, index) => {
            const IconComponent = 'icon' in value && typeof value.icon === 'string' 
              ? getIcon(value.icon, index) 
              : (value as typeof defaultValues[0]).icon || getIcon(undefined, index)
            
            const stat = (value as typeof defaultValues[0]).stat
            const statLabel = (value as typeof defaultValues[0]).statLabel
            
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-ivory p-8 border border-stone/20 hover:border-terracotta/30 transition-all duration-300 card-warm-glow group"
              >
                {/* Icon & Stat */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 flex items-center justify-center border border-terracotta/20 rounded-full group-hover:border-terracotta/40 transition-colors">
                    <IconComponent className="w-6 h-6 text-terracotta" />
                  </div>
                  {stat && (
                    <div className="text-right">
                      <span className="block text-2xl font-display text-charcoal">{stat}</span>
                      <span className="text-[10px] tracking-wider uppercase text-taupe">{statLabel}</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-display text-charcoal tracking-wide mb-3">{value.title}</h3>
                <p className="text-taupe text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-stone/20"
        >
          <p className="text-taupe mb-6 max-w-lg mx-auto">
            Ready to experience the difference that authentic craftsmanship makes?
          </p>
          <Link
            href="/heritage"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-cream hover:bg-walnut transition-colors text-sm tracking-[0.12em] uppercase"
          >
            Explore Our Heritage
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
