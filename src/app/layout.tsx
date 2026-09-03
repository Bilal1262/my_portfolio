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
    'Field robotics and autonomy engineer building ROS and ROS 2 systems across marine, mobile, legged, aerial and manipulation platforms.',
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
      'Field robotics across platforms: real-robot AUV autonomy, ROS 2 integration, localization, perception, navigation and robot learning.',
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
      'Field robotics portfolio spanning ROS 2, perception, localization, planning, robot software and intelligent autonomy.',
    images: ['/projects_picture/minigirona_2.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
