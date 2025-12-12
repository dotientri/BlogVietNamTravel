"use client"

import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import { cn } from "@/lib/utils"

export function ImageWithFallback({ src, alt, className, ...props }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className={cn("flex items-center justify-center bg-slate-100 h-full w-full", className)}>
        <ImageOff className="w-10 h-10 text-slate-300" />
      </div>
    )
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => setError(true)}
      {...props} 
    />
  )
}