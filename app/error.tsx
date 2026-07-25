'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-cyan-400">Something went wrong!</h2>
        <p className="text-gray-400">{error.message || 'An error occurred'}</p>
        <button
          onClick={() => reset()}
          className="mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
