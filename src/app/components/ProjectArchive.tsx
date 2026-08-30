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
        ...(project.stack ?? []),
        project.evidence ?? '',
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
        <section className="section archive-page-intro">
          <div className="shell">
            <div className="section-title archive-page-heading">
              <div><span>00</span><p>Autonomy engineering / complete archive</p></div>
              <h2>One robotics foundation, applied across platforms.</h2>
              <p className="section-lead">Explore all projects by robot system or by the capability most relevant to your role: perception, localization, navigation, robot software or learning.</p>
            </div>
          </div>
        </section>

        <section className="section projects-section archive-section">
          <div className="shell">
            <div className="archive-toolbar">
              <label className="archive-search">
                <MagnifyingGlassIcon aria-hidden="true" />
                <input value={query} type="search" onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, tools or outcomes" aria-label="Search projects" />
              </label>
              <div className="archive-filters" aria-label="Filter projects by robot system">
                {systems.map((item) => (
                  <button className={system === item ? 'active' : ''} type="button" onClick={() => setSystem(item)} key={item}>
                    {item === 'all' ? 'All systems' : systemMeta[item].label}
                  </button>
                ))}
              </div>
            </div>

            <div className="archive-capability-filters" aria-label="Filter projects by engineering capability">
              <button className={capability === 'all' ? 'active' : ''} type="button" onClick={() => setCapability('all')}>All expertise</button>
              {capabilityGroups.map((item) => (
                <button className={capability === item.id ? 'active' : ''} type="button" onClick={() => setCapability(item.id)} key={item.id}>{item.label}</button>
              ))}
            </div>

            <div className="archive-meta">
              <p><strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}</p>
              {system !== 'all' || capability !== 'all' || query ? (
                <button type="button" onClick={() => { setSystem('all'); setCapability('all'); setQuery('') }}>Clear filters</button>
              ) : <span>Filter by platform, engineering capability or technology.</span>}
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
