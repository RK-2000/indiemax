'use client'

import { motion } from 'framer-motion'
import { Hand, Leaf, Heart, Sparkles } from 'lucide-react'

const defaultValues = [
  {
    icon: Hand,
    title: 'Handcrafted',
    description: 'Every piece is meticulously crafted by skilled artisans using traditional techniques passed down through generations.',
  },
  {
    icon: Heart,
    title: 'Artisan First',
    description: 'We work directly with master craftspeople, ensuring fair wages and preserving their invaluable heritage skills.',
  },
  {
    icon: Sparkles,
    title: 'Limited Editions',
    description: 'Each collection is a unique story with no repeats. When it\'s gone, it\'s gone — making every piece truly special.',
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    description: 'Natural dyes, organic fabrics, and slow fashion principles guide our commitment to the environment.',
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
    <section className="py-20 md:py-28 bg-walnut text-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gold mb-4 block font-serif">
            Our Philosophy
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wide mb-4">
            Weaving Stories, Not Just Fabric
          </h2>
          <p className="font-serif text-base text-cream/70 max-w-2xl mx-auto italic">
            Every thread carries meaning. Every pattern tells a tale.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {displayValues.map((value, index) => {
            const IconComponent = 'icon' in value && typeof value.icon === 'string' 
              ? getIcon(value.icon, index) 
              : (value as typeof defaultValues[0]).icon || getIcon(undefined, index)
            
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-gold/30 rounded-full">
                  <IconComponent className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-light tracking-wide mb-3">{value.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
