'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import {
  capabilityGroups,
  projects,
  type CapabilityId,
  type Project
} from '../data/portfolio'
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
  const [capability, setCapability] = useState<'all' | CapabilityId>('all')
  const [query, setQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const selected = params.get('system') as RobotSystem | null
    const selectedCapability = params.get('capability') as CapabilityId | null
    if (selected && systems.includes(selected)) setSystem(selected)
    if (selectedCapability && capabilityGroups.some((item) => item.id === selectedCapability)) {
      setCapability(selectedCapability)
    }
  }, [])

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return projects.filter((project) => {
      const matchesSystem = system === 'all' || project.system === system
      const selectedCapability = capabilityGroups.find((item) => item.id === capability)
      const matchesCapability = capability === 'all' || Boolean(selectedCapability?.projectIds.includes(project.id))
      const searchable = [
        project.title,
        project.summary,
        project.system,
        project.category,
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
            <p className="eyebrow">Autonomy engineering / complete archive</p>
            <h1>One robotics foundation, applied across platforms.</h1>
            <p>Explore all projects by robot system or by the capability most relevant to your role: perception, localization, navigation, robot software or learning.</p>
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
                <select value={capability} onChange={(event) => setCapability(event.target.value as 'all' | CapabilityId)}>
                  <option value="all">All capabilities</option>
                  {capabilityGroups.map((item) => <option value={item.id} key={item.id}>{item.label}</option>)}
                </select>
              </label>
            </div>

            <div className="archive-status">
              <p><strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}</p>
              {system !== 'all' || capability !== 'all' || query ? (
                <button type="button" onClick={() => { setSystem('all'); setCapability('all'); setQuery('') }}>Clear filters</button>
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
