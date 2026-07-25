'use client'

import React from 'react'

export default function GifScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-purple-500/10"></div>

      {/* Main GIF Container */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-2xl px-4">
        {/* GIF Display */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
          <img
            src="/animated-accent.gif"
            alt="Creative animation"
            className="relative w-96 h-96 rounded-3xl border-2 border-cyan-400/50 shadow-2xl shadow-purple-500/50 object-cover"
          />
        </div>

        {/* Transition Text */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-cyan-400">Get Ready</h2>
          <p className="text-gray-300 text-lg animate-pulse">Entering the portfolio...</p>
        </div>

        {/* Animated dots for transition */}
        <div className="flex gap-2 items-center justify-center">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  )
}
