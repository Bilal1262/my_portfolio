import type { Metadata } from 'next'
import ProjectArchive from '../components/ProjectArchive'

export const metadata: Metadata = {
  title: 'Autonomy Engineering Projects',
  description: 'Robotics projects spanning perception, localization, planning, robot software and learning across marine, mobile, legged, aerial and manipulation systems.'
}

export default function ProjectsPage() {
  return <ProjectArchive />
}
