import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bilal Ahmed Qaimkhani | Robotics Engineer',
  description: 'Robotics engineer working on underwater autonomy, ROS 2 systems, robot learning and fault-tolerant autonomy.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
