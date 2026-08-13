import type { Metadata } from 'next'
import ProjectArchive from '../components/ProjectArchive'

export const metadata: Metadata = {
  title: 'Robot Systems & Projects',
  description: 'Robotics engineering projects across marine, mobile, legged, aerial and manipulation systems.'
}

export default function ProjectsPage() {
  return <ProjectArchive />
}
