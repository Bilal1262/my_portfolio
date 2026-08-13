'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { projects, type Project } from '../data/portfolio'
import {
  ProjectCard,
  ProjectModal,
  SiteFooter,
  SiteHeader,
  systemMeta,
  type RobotSystem
} from './PortfolioUI'

const systems: Array<'all' | RobotSystem> = ['all', 'marine', 'mobile', 'legged', 'aerial', 'manipulation']

export default function ProjectArchive() {
  const [system, setSystem] = useState<'all' | RobotSystem>('all')
  const [capability, setCapability] = useState('All capabilities')
  const [query, setQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get('system') as RobotSystem | null
    if (selected && systems.includes(selected)) setSystem(selected)
  }, [])

  const capabilities = useMemo(
    () => ['All capabilities', ...Array.from(new Set(projects.flatMap((project) => project.capabilities ?? [project.category]))).sort()],
    []
  )

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return projects.filter((project) => {
      const matchesSystem = system === 'all' || project.system === system
      const projectCapabilities = project.capabilities ?? [project.category]
      const matchesCapability = capability === 'All capabilities' || projectCapabilities.includes(capability)
      const searchable = [
        project.title,
        project.summary,
        project.system,
        ...projectCapabilities,
        ...project.technologies
      ].join(' ').toLowerCase()
      return matchesSystem && matchesCapability && (!normalizedQuery || searchable.includes(normalizedQuery))
    })
  }, [capability, query, system])

  return (
    <>
      <SiteHeader page="projects" />
      <main id="top" className="archive-page">
        <section className="archive-hero">
          <div className="shell">
            <p className="eyebrow">Robot systems / project archive</p>
            <h1>Engineering work across sea, land and air.</h1>
            <p>Browse projects by robot system, then narrow the collection by engineering capability or technology.</p>
          </div>
        </section>

        <section className="archive-section">
          <div className="shell">
            <div className="system-filters" aria-label="Filter projects by robot system">
              {systems.map((item) => (
                <button className={system === item ? 'active' : ''} type="button" onClick={() => setSystem(item)} key={item}>
                  {item === 'all' ? 'All' : systemMeta[item].label}
                </button>
              ))}
            </div>

            <div className="secondary-filters">
              <label className="project-search">
                <MagnifyingGlassIcon aria-hidden="true" />
                <input value={query} type="search" onChange={(event) => setQuery(event.target.value)} placeholder="Search technology or project" aria-label="Search projects" />
              </label>
              <label className="capability-filter">
                <span>Capability</span>
                <select value={capability} onChange={(event) => setCapability(event.target.value)}>
                  {capabilities.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
            </div>

            <div className="archive-status">
              <p><strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}</p>
              {system !== 'all' || capability !== 'All capabilities' || query ? (
                <button type="button" onClick={() => { setSystem('all'); setCapability('All capabilities'); setQuery('') }}>Clear filters</button>
              ) : <span>System, capability and technology remain separate.</span>}
            </div>

            {filteredProjects.length ? (
              <div className="archive-grid">
                {filteredProjects.map((project) => <ProjectCard project={project} onOpen={setSelectedProject} key={project.id} />)}
              </div>
            ) : (
              <div className="archive-empty">
                <h2>No matching projects</h2>
                <p>Try another capability or clear the current filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
      <AnimatePresence>{selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}</AnimatePresence>
    </>
  )
}
