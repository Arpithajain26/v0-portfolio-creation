'use client'

import React, { useState, useEffect } from 'react'

interface TypingNameProps {
  text: string
  className?: string
  speed?: number
}

export default function TypingName({ text, className = '', speed = 100 }: TypingNameProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || displayedText.length >= text.length) return

    const timer = setTimeout(() => {
      setDisplayedText(text.slice(0, displayedText.length + 1))
    }, speed)

    return () => clearTimeout(timer)
  }, [displayedText, text, speed, isClient])

  const isComplete = displayedText.length === text.length && isClient

  return (
    <h1 className={`${className} ${isComplete ? 'animate-float' : ''}`}>
      <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        {displayedText || text}
      </span>
      {!isComplete && <span className="animate-pulse">|</span>}
    </h1>
  )
}
