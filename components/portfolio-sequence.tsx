'use client'

import React, { useState, useEffect } from 'react'
import LoadingScreen from './loading-screen'
import GifScreen from './gif-screen'

type SequenceState = 'loading' | 'gif' | 'portfolio'

interface PortfolioSequenceProps {
  children: React.ReactNode
}

export default function PortfolioSequence({ children }: PortfolioSequenceProps) {
  const [sequence, setSequence] = useState<SequenceState>('loading')

  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      const hasSeenIntro = localStorage.getItem('portfolio-intro-seen')
      if (hasSeenIntro) {
        setSequence('portfolio')
        return
      }
    } catch (e) {
      // localStorage not available
    }

    // 5-second intro: 1.5s loading → 2s GIF → 1.5s portfolio
    const timer1 = setTimeout(() => {
      setSequence('gif')
    }, 1500)

    const timer2 = setTimeout(() => {
      setSequence('portfolio')
      try {
        localStorage.setItem('portfolio-intro-seen', 'true')
      } catch (e) {
        // localStorage not available
      }
    }, 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  if (sequence === 'loading') {
    return <LoadingScreen />
  }

  if (sequence === 'gif') {
    return <GifScreen />
  }

  return <>{children}</>
}
