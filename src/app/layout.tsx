import type { Metadata } from 'next'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://bilal1262.github.io/Portfolio'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bilal Ahmed | Robotics Software & Research Engineer',
    template: '%s | Bilal Ahmed'
  },
  description:
    'Robotics software and research engineer building ROS 2 autonomy, underwater robotics, perception, localization, simulation and robot-learning systems.',
  keywords: [
    'Bilal Ahmed',
    'robotics software engineer',
    'ROS 2',
    'autonomous systems',
    'underwater robotics',
    'robot perception',
    'robot localization',
    'robot learning'
  ],
  authors: [{ name: 'Bilal Ahmed' }],
  creator: 'Bilal Ahmed',
  openGraph: {
    title: 'Bilal Ahmed | Robotics Software & Research Engineer',
    description:
      'ROS 2 autonomy, underwater robotics, perception, localization, simulation and robot-learning portfolio.',
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
    title: 'Bilal Ahmed | Robotics Software & Research Engineer',
    description:
      'Robotics portfolio covering ROS 2 autonomy, underwater robotics, perception and robot learning.',
    images: ['/projects_picture/minigirona_2.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
