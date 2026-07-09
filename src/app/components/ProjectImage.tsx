'use client'

import { useState } from 'react'
import { assetPath } from '../lib/paths'

function initials(label: string) {
  return label.split(/\s+/).filter(Boolean).slice(0, 3).map((word) => word[0]?.toUpperCase()).join('')
}

export default function ProjectImage({ src, alt, eager = false }: { src: string; alt: string; eager?: boolean }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div className="image-fallback" role="img" aria-label={`${alt} image placeholder`}>
        <span className="fallback-line" />
        <strong>{initials(alt)}</strong>
        <small>Add project image</small>
      </div>
    )
  }

  return <img src={assetPath(src)} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} onError={() => setFailed(true)} />
}
