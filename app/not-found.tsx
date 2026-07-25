export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-cyan-400">404</h2>
        <p className="text-xl text-gray-400">Page not found</p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors"
        >
          Return home
        </a>
      </div>
    </div>
  )
}
