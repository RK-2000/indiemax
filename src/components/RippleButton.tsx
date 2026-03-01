'use client'

import { useState, ReactNode, MouseEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface RippleButtonProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

export default function RippleButton({
  children,
  className = '',
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled = false,
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const createRipple = (e: MouseEvent<HTMLElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()

    const size = Math.max(rect.width, rect.height) * 2
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
    }

    setRipples((prev) => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 600)
  }

  const baseStyles = 'relative overflow-hidden inline-flex items-center justify-center gap-2 transition-all duration-300'
  
  const variantStyles = {
    primary: 'px-8 py-4 bg-charcoal text-cream hover:bg-walnut text-sm tracking-[0.12em] uppercase',
    secondary: 'px-8 py-4 bg-terracotta text-cream hover:bg-terracotta-light text-sm tracking-[0.12em] uppercase',
    outline: 'px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream text-sm tracking-[0.12em] uppercase',
  }

  const rippleColor = variant === 'outline' ? 'bg-charcoal/20' : 'bg-white/30'

  const buttonContent = (
    <>
      {/* Ripple effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className={`absolute rounded-full ${rippleColor} pointer-events-none`}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Button content with subtle scale on hover */}
      <motion.span
        className="relative z-10 flex items-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.span>
    </>
  )

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <Link
        href={href}
        className={combinedStyles}
        onClick={createRipple}
      >
        {buttonContent}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={(e) => {
        createRipple(e)
        onClick?.()
      }}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  )
}
