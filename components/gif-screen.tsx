'use client'

import React from 'react'

export default function GifScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl px-4">
        {/* Glassmorphic Card Container */}
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl hover:bg-white/10 transition-all duration-500">
          {/* GIF Display with Float Animation */}
          <div className="relative mb-8 animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl blur-2xl"></div>
            <img
              src="/animated-accent.gif"
              alt="Creative animation"
              className="relative w-80 h-80 rounded-2xl border border-white/20 shadow-2xl object-cover"
            />
          </div>

          {/* Transition Text with Glassmorphic Background */}
          <div className="text-center space-y-4">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Get Ready
              </h2>
            </div>
            <p className="text-gray-300 text-lg backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-3 animate-pulse">
              Entering the portfolio...
            </p>
          </div>

          {/* Animated dots for transition */}
          <div className="flex gap-3 items-center justify-center mt-8">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
