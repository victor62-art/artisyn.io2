"use client"

import Image from "next/image"

export function Logo() {
  return (
    <div className="mb-12">
      <Image
        src="/images/artisan_logo.png"
        alt="Artisyn Logo"
        width={160}
        height={40}
        className="w-full h-auto"
      />
    </div>
  )
}

