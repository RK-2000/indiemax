'use client'

import { X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

interface AnnouncementBarProps {
  message: string
  link?: string
  backgroundColor?: 'terracotta' | 'indigo' | 'gold' | 'olive'
}

const bgColors = {
  terracotta: 'bg-terracotta',
  indigo: 'bg-indigo',
  gold: 'bg-gold text-charcoal',
  olive: 'bg-olive',
}

export default function AnnouncementBar({
  message,
  link,
  backgroundColor = 'terracotta',
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const Content = () => (
    <span className="text-sm tracking-wide">{message}</span>
  )

  return (
    <div className={`${bgColors[backgroundColor]} text-cream py-2.5 px-4 relative`}>
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {link ? (
          <Link href={link} className="hover:underline">
            <Content />
          </Link>
        ) : (
          <Content />
        )}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
