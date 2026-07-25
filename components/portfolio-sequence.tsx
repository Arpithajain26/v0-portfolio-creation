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
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return

    console.log('[v0] Sequence useEffect running')

    // Check if user has already seen the intro
    const hasSeenIntro = localStorage.getItem('portfolio-intro-seen')

    if (hasSeenIntro) {
      console.log('[v0] Intro already seen, skipping to portfolio')
      setSequence('portfolio')
      return
    }

    console.log('[v0] Starting intro sequence')

    // Timeline for loading sequence
    const timers: NodeJS.Timeout[] = []

    // Transition 1: Loading screen fade out at 2.5s
    timers.push(
      setTimeout(() => {
        console.log('[v0] 2.5s - Fading out loading')
        setFadeOut(true)
      }, 2500)
    )

    // Transition 2: Switch to GIF screen at 3s
    timers.push(
      setTimeout(() => {
        console.log('[v0] 3s - Switching to GIF')
        setSequence('gif')
        setFadeOut(false)
      }, 3000)
    )

    // Transition 3: GIF screen fade out at 8.5s
    timers.push(
      setTimeout(() => {
        console.log('[v0] 8.5s - Fading out GIF')
        setFadeOut(true)
      }, 8500)
    )

    // Transition 4: Switch to portfolio at 9s
    timers.push(
      setTimeout(() => {
        console.log('[v0] 9s - Switching to portfolio')
        setSequence('portfolio')
        setFadeOut(false)
        localStorage.setItem('portfolio-intro-seen', 'true')
      }, 9000)
    )

    return () => {
      timers.forEach(timer => clearTimeout(timer))
    }
  }, [])

  if (sequence === 'loading') {
    return (
      <div className={`transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <LoadingScreen />
      </div>
    )
  }

  if (sequence === 'gif') {
    return (
      <div className={`transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <GifScreen />
      </div>
    )
  }

  return (
    <div className={`transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {children}
    </div>
  )
}
