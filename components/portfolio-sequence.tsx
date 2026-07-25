'use client'

import React from 'react'

interface PortfolioSequenceProps {
  children: React.ReactNode
}

export default function PortfolioSequence({ children }: PortfolioSequenceProps) {
  // For now, skip the intro sequence and go directly to portfolio
  return <>{children}</>
}
