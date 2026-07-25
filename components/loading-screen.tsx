'use client'

import React from 'react'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-8">
        {/* Animated Spinner */}
        <div className="relative w-24 h-24">
          {/* Outer rotating circle */}
          <div className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-purple-500 rounded-full animate-spin"></div>
          
          {/* Middle rotating circle - slower */}
          <div className="absolute inset-3 border-3 border-transparent border-b-cyan-400 border-l-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          
          {/* Inner pulsing circle */}
          <div className="absolute inset-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>

        {/* Name Text */}
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Arpitha Jain
          </h1>
          <p className="text-cyan-400 text-sm mt-4 animate-bounce">Loading Portfolio...</p>
        </div>
      </div>
    </div>
  )
}
