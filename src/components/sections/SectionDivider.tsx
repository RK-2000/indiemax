'use client'

import { motion } from 'framer-motion'

type DividerStyle = 'wave' | 'pattern' | 'line' | 'gradient' | 'craft'

interface SectionDividerProps {
  style?: DividerStyle
  fromColor?: string
  toColor?: string
  className?: string
}

export default function SectionDivider({
  style = 'line',
  fromColor = 'bg-ivory',
  toColor = 'bg-cream',
  className = '',
}: SectionDividerProps) {
  if (style === 'wave') {
    return (
      <div className={`relative ${fromColor} ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M0,0 C150,90 350,0 600,60 C850,120 1050,30 1200,90 L1200,120 L0,120 Z"
            className={`fill-sand`}
          />
        </svg>
      </div>
    )
  }

  if (style === 'pattern') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={`py-12 ${fromColor} ${className}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-terracotta/40 rotate-45" />
              <span className="w-1.5 h-1.5 bg-gold/60 rounded-full" />
              <span className="w-2 h-2 bg-terracotta/40 rotate-45" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
          </div>
        </div>
      </motion.div>
    )
  }

  if (style === 'craft') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`py-16 md:py-20 ${fromColor} ${className}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center">
            {/* Decorative craft-inspired pattern */}
            <div className="flex items-center gap-6 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-terracotta/40" />
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-terracotta/50">
                <path
                  fill="currentColor"
                  d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                />
              </svg>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-terracotta/40" />
            </div>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`w-1 h-1 rounded-full ${i === 2 ? 'bg-gold' : 'bg-stone'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (style === 'gradient') {
    return (
      <div className={`h-24 md:h-32 ${className}`}>
        <div className={`h-full bg-gradient-to-b ${fromColor} ${toColor}`} />
      </div>
    )
  }

  // Default: line style
  return (
    <div className={`py-8 ${fromColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  )
}
