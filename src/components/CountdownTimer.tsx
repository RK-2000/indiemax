'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDate: string
  title?: string
  subtitle?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ 
  targetDate, 
  title = 'Next Drop',
  subtitle 
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()

      if (difference <= 0) {
        setIsExpired(true)
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (isExpired) {
    return (
      <div className="text-center py-8">
        <p className="text-xl text-terracotta font-medium tracking-wide">Now Available!</p>
      </div>
    )
  }

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-ivory border border-stone/30">
        <span className="text-2xl md:text-3xl font-light text-charcoal">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm text-taupe mt-2 tracking-[0.1em] uppercase">
        {label}
      </span>
    </div>
  )

  return (
    <div className="text-center">
      {title && (
        <p className="text-xs tracking-[0.2em] uppercase text-terracotta mb-3">
          {title}
        </p>
      )}
      {subtitle && (
        <h3 className="text-2xl md:text-3xl font-light text-charcoal tracking-wide mb-6">
          {subtitle}
        </h3>
      )}
      <div className="flex justify-center gap-3 md:gap-4">
        <TimeBlock value={timeLeft.days} label="Days" />
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <TimeBlock value={timeLeft.minutes} label="Mins" />
        <TimeBlock value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  )
}
