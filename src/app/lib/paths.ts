export function assetPath(path: string) {
  if (!path) return ''
  if (/^https?:\/\//.test(path)) return path
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
