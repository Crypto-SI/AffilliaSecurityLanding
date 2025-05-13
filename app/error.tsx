'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary-dark text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <p className="mb-6 text-gray-300 max-w-md text-center">
        We apologize for the inconvenience. Our team has been notified of this issue.
      </p>
      <button
        onClick={reset}
        className="bg-accent-gold text-primary-dark px-6 py-2 rounded-md font-medium hover:bg-accent-gold/90 transition-colors"
      >
        Try again
      </button>
    </div>
  )
} 