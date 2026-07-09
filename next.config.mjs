const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
const onGitHub = process.env.GITHUB_ACTIONS === 'true'
const isUserSite = repositoryName.endsWith('.github.io')
const basePath = onGitHub && repositoryName && !isUserSite ? `/${repositoryName}` : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath }
}

export default nextConfig
