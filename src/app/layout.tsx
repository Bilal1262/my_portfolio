import type { Metadata } from 'next'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://bilal1262.github.io/Portfolio'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bilal Ahmed | Robotics Software & Autonomy Engineer',
    template: '%s | Bilal Ahmed'
  },
  description:
    'Robotics software and autonomy engineer building systems across perception, localization, planning and intelligent decision-making.',
  keywords: [
    'Bilal Ahmed',
    'robotics software engineer',
    'ROS 2',
    'autonomous systems',
    'marine robotics',
    'mobile robotics',
    'legged robotics',
    'aerial robotics',
    'robot manipulation',
    'robot perception',
    'robot localization',
    'robot learning'
  ],
  authors: [{ name: 'Bilal Ahmed' }],
  creator: 'Bilal Ahmed',
  openGraph: {
    title: 'Bilal Ahmed | Robotics Software & Autonomy Engineer',
    description:
      'Autonomous robotics from perception and localization through planning, execution and intelligent adaptation.',
    url: '/',
    siteName: 'Bilal Ahmed Portfolio',
    images: [
      {
        url: '/projects_picture/minigirona_2.png',
        width: 1200,
        height: 630,
        alt: 'MiniGirona autonomous underwater robot'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bilal Ahmed | Robotics Software & Autonomy Engineer',
    description:
      'Robotics portfolio spanning perception, localization, planning, robot software and intelligent autonomy.',
    images: ['/projects_picture/minigirona_2.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
