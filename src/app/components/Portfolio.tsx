'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import {
  awards,
  capabilityGroups,
  deploymentForProject,
  education,
  experience,
  profile,
  projects,
  research,
  technicalSkills,
  type CapabilityId,
  type Project,
  type RobotSystem
} from '../data/portfolio'
import { assetPath } from '../lib/paths'
import ProjectImage from './ProjectImage'

const robotSystems: Array<{
  id: RobotSystem
  label: string
  evidence: string
}> = [
  { id: 'marine', label: 'Marine', evidence: 'AUV autonomy · SLAM · underwater perception' },
  { id: 'mobile', label: 'Mobile', evidence: 'ROS 2 · Nav2 · SLAM · navigation' },
  { id: 'legged', label: 'Legged', evidence: 'Locomotion · reinforcement learning · exploration' },
  { id: 'aerial', label: 'Aerial', evidence: 'Control · coordination · inspection' },
  { id: 'manipulation', label: 'Manipulation', evidence: 'Perception · learning · recovery · HRI' }
]

const robotSystemLabels = Object.fromEntries(
  robotSystems.map((system) => [system.id, system.label])
) as Record<RobotSystem, string>

const featuredProjectIds = [
  'minigirona',
  'tiago-navigation-integration',
  'adaptive-sim2real-go2',
  'failure-aware-manipulation',
  'maestro',
  'reconstruction',
  'bathygraph',
  'underwater-depth'
]

const flagshipContribution: Record<string, string> = {
  minigirona: 'Sonar initialization · EKF integration · mission behaviors',
  'tiago-navigation-integration': 'C++ Nav2 adapter · fleet interfaces · diagnostics',
  'adaptive-sim2real-go2': 'Environment · PPO training · 47-scenario benchmark',
  'failure-aware-manipulation': 'BC pipeline · failure detector · recovery skills',
  maestro: 'System architecture · recovery agents · ROS 2 validation',
  reconstruction: 'Stereo-sonar fusion · particle filtering · point clouds',
  bathygraph: 'Data ingestion · GICP registration · pose-graph optimization',
  'underwater-depth': 'Leakage-free benchmark · training · evaluation'
}

function Reveal({
  children,
  className = '',
  delay = 0
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: 0.62,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

function SectionTitle({
  title,
  description
}: {
  title: string
  description?: string
}) {
  return (
    <Reveal className="section-title">
      <h2>{title}</h2>
      {description ? <p className="section-lead">{description}</p> : null}
    </Reveal>
  )
}

function ContextLogos({
  logos,
  className = ''
}: {
  logos?: Project['logos']
  className?: string
}) {
  if (!logos?.length) return null

  return (
    <div className={`context-logos ${className}`}>
      {logos.map((logo) => (
        <span className="context-logo" key={logo.name}>
          <img src={assetPath(logo.src)} alt={`${logo.name} logo`} />
          <span>{logo.name}</span>
        </span>
      ))}
    </div>
  )
}

function ProjectModal({
  project,
  onClose
}: {
  project: Project
  onClose: () => void
}) {
  const [activeImage, setActiveImage] = useState(project.cover)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const media = useMemo(
    () =>
      [project.cover, ...project.gallery].filter(
        (item, index, list) => item && list.indexOf(item) === index
      ),
    [project]
  )
  const projectVideos = project.videos ?? (project.video ? [project.video] : [])

  useEffect(() => {
    setActiveImage(project.cover)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', escape)

    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', escape)
    }
  }, [onClose, project])

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) =>
        event.target === event.currentTarget && onClose()
      }
    >
      <motion.article
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.id}`}
        initial={{ opacity: 0, y: 34, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.985 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          ref={closeButtonRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <XMarkIcon />
        </button>

        <div className="modal-media">
          <div className="modal-main-image">
            <ProjectImage
              src={activeImage}
              alt={`${project.title} project media`}
              eager
            />
          </div>

          {media.length > 1 ? (
            <div className="modal-thumbnails">
              {media.map((image, index) => (
                <button
                  className={activeImage === image ? 'active' : ''}
                  onClick={() => setActiveImage(image)}
                  key={`${image}-${index}`}
                  aria-label={`Show project image ${index + 1}`}
                >
                  <ProjectImage
                    src={image}
                    alt={`${project.title} thumbnail ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          ) : null}

          {projectVideos.map((video, index) => (
            <div className="modal-video" key={video.src}>
              <div>
                <span>
                  {projectVideos.length > 1
                    ? `Result video ${index + 1}`
                    : 'Result video'}
                </span>
                <small>{video.caption}</small>
              </div>
              <video
                className={video.layout === 'wide' ? 'wide' : undefined}
                controls
                playsInline
                preload="metadata"
                poster={assetPath(video.poster)}
              >
                <source src={assetPath(video.src)} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
          ))}
        </div>

        <div className="modal-copy">
          <div className="modal-meta">
            <span>
              {robotSystemLabels[project.system]} · {project.area}
            </span>
            <span>{project.period}</span>
            <span>{project.status}</span>
            {deploymentForProject(project) ? <span className="deployment-badge">{deploymentForProject(project)}</span> : null}
          </div>

          <ContextLogos
            logos={project.logos}
            className="modal-context-logos"
          />

          <h2 id={`project-title-${project.id}`}>{project.title}</h2>
          <p className="modal-stack">{(project.stack ?? project.technologies.slice(0, 5)).join(' · ')}</p>
          <p className="modal-summary">{project.summary}</p>

          <div className="modal-columns">
            <section>
              <p className="mini-label">Problem</p>
              <p>{project.challenge}</p>
            </section>
            <section>
              <p className="mini-label">What I built</p>
              <p>{project.contribution}</p>
            </section>
          </div>

          <section className="modal-results">
            <p className="mini-label">System architecture</p>
            <ul>
              {project.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <div className="modal-columns">
            <section>
              <p className="mini-label">Role</p>
              <p>{project.role}</p>
            </section>
            <section>
              <p className="mini-label">Team</p>
              <p>{project.team}</p>
            </section>
          </div>

          <section>
            <p className="mini-label">Evaluation</p>
            <p>{project.evaluation}</p>
          </section>

          <section className="modal-results">
            <p className="mini-label">Results</p>
            <ul>
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </section>

          {project.limitations ? (
            <section>
              <p className="mini-label">Limitations &amp; next engineering step</p>
              <p>{project.limitations}</p>
            </section>
          ) : null}

          <div className="modal-technologies">
            {project.technologies.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          {project.links?.length ? (
            <div className="modal-links">
              {project.links.map((link) => (
                <a
                  href={assetPath(link.href)}
                  target="_blank"
                  rel="noreferrer"
                  key={link.href}
                >
                  {link.label}
                  <ArrowUpRightIcon />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </motion.article>
    </motion.div>
  )
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [archiveCategory, setArchiveCategory] =
    useState<'All' | RobotSystem>('All')
  const [archiveCapability, setArchiveCapability] =
    useState<'All' | CapabilityId>('All')
  const [archiveSearch, setArchiveSearch] = useState('')
  const [visibleProjects, setVisibleProjects] = useState(6)
  const reduce = useReducedMotion()

  const showcase = useMemo(
    () =>
      featuredProjectIds
        .map((id) => projects.find((project) => project.id === id))
        .filter((project): project is Project => Boolean(project)),
    []
  )
  const archiveCategories: Array<{
    id: 'All' | RobotSystem
    label: string
  }> = [{ id: 'All', label: 'All' }, ...robotSystems]

  const filteredProjects = useMemo(() => {
    const query = archiveSearch.trim().toLowerCase()

    const focused =
      archiveCategory !== 'All' || archiveCapability !== 'All' || Boolean(query)

    return projects.filter((project) => {
      if (!focused && featuredProjectIds.includes(project.id)) return false
      const matchesCategory =
        archiveCategory === 'All' || project.system === archiveCategory
      const matchesCapability =
        archiveCapability === 'All' ||
        capabilityGroups
          .find((capability) => capability.id === archiveCapability)
          ?.projectIds.includes(project.id)
      const searchable = [
        project.title,
        project.subtitle,
        project.summary,
        ...(project.stack ?? []),
        project.evidence ?? '',
        project.area,
        project.category,
        robotSystemLabels[project.system],
        project.role,
        project.team,
        project.evaluation,
        ...project.technologies,
        ...project.results
      ]
        .join(' ')
        .toLowerCase()

      return matchesCategory && matchesCapability && (!query || searchable.includes(query))
    })
  }, [archiveCapability, archiveCategory, archiveSearch])

  const displayedProjects = filteredProjects.slice(0, visibleProjects)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setVisibleProjects(6)
  }, [archiveCapability, archiveCategory, archiveSearch])

  const exploreSystem = (system: RobotSystem) => {
    setArchiveCategory(system)
    setArchiveCapability('All')
    window.requestAnimationFrame(() => {
      document.getElementById('archive')?.scrollIntoView({
        behavior: reduce ? 'auto' : 'smooth'
      })
    })
  }

  const exploreCapability = (capability: CapabilityId) => {
    setArchiveCapability(capability)
    setArchiveCategory('All')
    window.requestAnimationFrame(() => {
      document.getElementById('archive')?.scrollIntoView({
        behavior: reduce ? 'auto' : 'smooth'
      })
    })
  }

  const nav = [
    ['Projects', '#work'],
    ['Platforms', '#systems'],
    ['Research', '#research'],
    ['About', '#about'],
    ['Contact', '#contact']
  ]

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <nav className="shell nav-bar" aria-label="Main navigation">
          <a
            className="brand"
            href="#top"
            onClick={() => setMenuOpen(false)}
          >
            <span>BQ</span>
            <div>
              <strong>{profile.name}</strong>
              <small>{profile.headline}</small>
            </div>
          </a>

          <div className="desktop-nav">
            {nav.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
            <a
              className="nav-cv"
              href={assetPath(profile.resume)}
              target="_blank"
              rel="noreferrer"
            >
              CV ↗
            </a>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
          </button>
        </nav>

        <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
          <div className="shell">
            {nav.map(([label, href]) => (
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                key={href}
              >
                {label}
              </a>
            ))}
            <a
              href={assetPath(profile.resume)}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Download CV ↗
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />

          <div className="shell hero-layout">
            <motion.div
              className="hero-copy"
              initial={reduce ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72 }}
            >
              <p className="hero-kicker">Field Robotics · Autonomous Systems</p>
              <h1>{profile.headline}</h1>

              <p className="hero-description">
                I develop autonomous robotic systems with experience in ROS/ROS 2,
                localization, perception, navigation and robot learning across marine,
                mobile, legged, aerial and manipulation platforms.
              </p>

              <p className="hero-education">
                Erasmus Mundus MSc — Intelligent Field Robotic Systems
                <strong>9.4 / 10</strong>
              </p>

              <p className="hero-stack">
                ROS / ROS 2 · C++ / Python · SLAM &amp; Sensor Fusion · Nav2 &amp;
                Motion Planning · 3D Perception · Robot Learning
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="#work">
                  View Projects
                  <ArrowDownIcon />
                </a>
                <a
                  className="secondary-button cv-button"
                  href={assetPath(profile.resume)}
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  Download CV
                  <ArrowDownIcon />
                </a>
                <a className="secondary-button" href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                  <ArrowUpRightIcon />
                </a>
              </div>

              <p className="hero-availability">{profile.availability}</p>
            </motion.div>

            <motion.div
              className="hero-visual hero-portrait"
              initial={reduce ? false : { opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <figure>
                <ProjectImage
                  src={profile.heroImage}
                  alt={`${profile.name} with the MiniGirona autonomous underwater robot`}
                  eager
                />
                <figcaption>
                  <span>MiniGirona I-AUV · CIRS Lab</span>
                  <strong>Localization, mission autonomy and manipulation</strong>
                  <small>RAMI 2025 · 2nd Place</small>
                </figcaption>
              </figure>
            </motion.div>
          </div>
        </section>

        <section className="section systems-section" id="systems">
          <div className="shell">
            <SectionTitle
              title="Robotics Platforms"
              description="Projects across marine, mobile, legged, aerial and manipulation robotics."
            />

            <div
              className="platform-grid"
              aria-label="Explore projects by robot system"
            >
              {robotSystems.map((system, index) => (
                <Reveal className="platform-card" delay={index * 0.04} key={system.id}>
                  <button id={system.id} onClick={() => exploreSystem(system.id)}>
                    <strong>{system.label}</strong>
                    <small>{system.evidence}</small>
                    <i aria-hidden="true">→</i>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section showcase-section" id="work">
          <div className="shell">
            <SectionTitle
              title="Selected Robotics Projects"
              description="Eight projects covering real robots, simulation and real-world robotics datasets."
            />

            <div className="flagship-grid">
              {showcase.map((project, index) => (
                <Reveal className={`flagship-card system-${project.system}`} delay={(index % 2) * 0.04} key={project.id}>
                  <article>
                    <button className="flagship-image" type="button" onClick={() => setSelectedProject(project)} aria-label={`Open ${project.title}`}>
                      <ProjectImage src={project.cover} alt={`${project.title} project`} eager={index < 2} />
                      <span>View project <ArrowUpRightIcon /></span>
                    </button>
                    <div className="flagship-copy">
                      <div className="flagship-meta">
                        <span className="deployment-badge">{deploymentForProject(project)}</span>
                        <small>{robotSystemLabels[project.system]}</small>
                      </div>
                      <h3>{project.title}</h3>
                      <p className="project-stack">{(project.stack ?? project.technologies.slice(0, 5)).slice(0, 5).join(' · ')}</p>
                      <p className="flagship-summary">{project.summary}</p>
                      {project.evidence ? <p className="project-evidence">{project.evidence}</p> : null}
                      <div className="ownership-line">
                        <span>My contribution</span>
                        <p>{flagshipContribution[project.id]}</p>
                      </div>
                      <button className="archive-open" type="button" onClick={() => setSelectedProject(project)}>
                        View project <span>→</span>
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section capability-section" id="technical-areas">
          <div className="shell">
            <SectionTitle
              title="Technical Areas"
              description="Projects grouped by the main robotics areas I have worked on."
            />

            <div className="autonomy-flow" aria-label="Technical areas">
              {capabilityGroups.map((capability, index) => (
                <Reveal className="capability-card" delay={index * 0.045} key={capability.id}>
                  <article id={capability.id}>
                    <h3>{capability.label}</h3>
                    <p>{capability.summary}</p>
                    <div className="capability-projects">
                      {capability.projectIds.slice(0, 3).map((projectId) => {
                        const project = projects.find((item) => item.id === projectId)
                        return project ? <button type="button" onClick={() => setSelectedProject(project)} key={project.id}>{project.name ?? project.title}</button> : null
                      })}
                    </div>
                    <button className="capability-open" type="button" onClick={() => exploreCapability(capability.id)}>
                      View related projects <span>→</span>
                    </button>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section experience-section"
          id="experience"
        >
          <div className="shell">
            <SectionTitle title="Experience" />

            <div className="experience-list">
              {experience.map((item, index) => (
                <Reveal
                  className="experience-row"
                  delay={index * 0.05}
                  key={item.role}
                >
                  <div className="row-logo-tile">
                    <img
                      src={assetPath(item.logo)}
                      alt={`${item.organisation} logo`}
                    />
                  </div>
                  <div>
                    <small>{item.organisation}</small>
                    <h3>{item.role}</h3>
                  </div>
                  <p>{item.description}</p>
                  <time>{item.period}</time>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="shell">
            <SectionTitle title="Publications & Research" />

            <div className="research-list">
              {research.map((item, index) => (
                <Reveal
                  className="research-row"
                  delay={index * 0.05}
                  key={item.title}
                >
                  <div className="row-logo-tile">
                    <img
                      src={assetPath(item.logo)}
                      alt={`${item.venue} logo`}
                    />
                  </div>
                  <small>{item.type}</small>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.venue}</p>
                    {item.links.length ? (
                      <div className="research-links">
                        {item.links.map((link) => (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            key={link.href}
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>


        <section className="section recognition-block">
          <div className="shell">
            <SectionTitle title="Awards" />

            <div className="awards-grid">
              {awards.map((award, index) => (
                <Reveal
                  className="award-card"
                  delay={index * 0.05}
                  key={`${award.achievement}-${award.year}`}
                >
                  <div className="award-card-content">
                    {'logo' in award && award.logo ? (
                      <div className="award-logo-tile">
                        <img
                          src={assetPath(award.logo)}
                          alt={`${award.organisation} logo`}
                        />
                      </div>
                    ) : null}

                    <div className="award-heading">
                      <p className="award-kicker">{award.organisation}</p>

                      <span className="award-meta">
                        {award.year} · {award.location}
                      </span>
                    </div>

                    <h3>{award.achievement}</h3>
                    <p className="award-description">
                      {award.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="shell">
            <SectionTitle title="Technical Skills" />

            <div className="technical-skills-list">
              {technicalSkills.map((skill, index) => (
                <Reveal className="technical-skill-row" delay={index * 0.04} key={skill.group}>
                  <strong>{skill.group}</strong>
                  <span>{skill.items}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="shell">
            <SectionTitle title="Education" />

            <div className="education-list">
              {education.map((item, index) => (
                <Reveal
                  className="education-row"
                  delay={index * 0.06}
                  key={item.degree}
                >
                  <time>{item.period}</time>
                  <div className="education-main">
                    <small>{item.institution}</small>
                    <h3>{item.degree}</h3>
                    <p>{item.focus}</p>
                  </div>
                  <strong>{item.result}</strong>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section" id="about">
          <div className="shell about-layout">
            <Reveal>
              <h2>About</h2>
            </Reveal>

            <Reveal className="about-text" delay={0.08}>
              <p>
                My Erasmus Mundus MSc in Intelligent Field Robotic Systems has given me
                experience across different robotic platforms. My work focuses mainly on
                ROS/ROS 2, localization, perception, navigation, planning and robot learning,
                with projects across underwater, mobile, legged, aerial and manipulation systems.
              </p>
              <div>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href={assetPath(profile.resume)} target="_blank" rel="noreferrer">CV ↗</a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section projects-section" id="archive">
          <div className="shell">
            <SectionTitle
              title="Additional Projects"
              description="Other robotics projects from my MSc, research work and independent development."
            />

            <div className="archive-toolbar">
              <label className="archive-search">
                <MagnifyingGlassIcon aria-hidden="true" />
                <input
                  type="search"
                  value={archiveSearch}
                  onChange={(event) => setArchiveSearch(event.target.value)}
                  placeholder="Search projects, tools or outcomes"
                  aria-label="Search project archive"
                />
              </label>

              <div
                className="archive-filters"
                aria-label="Filter projects by robot system"
              >
                {archiveCategories.map((category) => (
                  <button
                    className={
                      archiveCategory === category.id ? 'active' : ''
                    }
                    onClick={() => setArchiveCategory(category.id)}
                    key={category.id}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div
              className="archive-capability-filters"
              aria-label="Filter projects by engineering capability"
            >
              <button
                className={archiveCapability === 'All' ? 'active' : ''}
                onClick={() => setArchiveCapability('All')}
              >
                All areas
              </button>
              {capabilityGroups.map((capability) => (
                <button
                  className={archiveCapability === capability.id ? 'active' : ''}
                  onClick={() => setArchiveCapability(capability.id)}
                  key={capability.id}
                >
                  {capability.label}
                </button>
              ))}
            </div>

            <div className="archive-meta">
              <p>
                <strong>{filteredProjects.length}</strong>{' '}
                {filteredProjects.length === 1 ? 'project' : 'projects'}
              </p>

              {archiveCategory !== 'All' || archiveCapability !== 'All' || archiveSearch ? (
                <button
                  onClick={() => {
                    setArchiveCategory('All')
                    setArchiveCapability('All')
                    setArchiveSearch('')
                  }}
                >
                  Clear filters
                </button>
              ) : null}
            </div>

            {displayedProjects.length ? (
              <div className="archive-grid">
                {displayedProjects.map((project, index) => (
                  <Reveal
                    className={`archive-card system-${project.system}`}
                    delay={(index % 3) * 0.035}
                    key={project.id}
                  >
                    <button
                      className="archive-image"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`Open ${project.title}`}
                    >
                      <ProjectImage
                        src={project.cover}
                        alt={project.title}
                        eager={index < 3}
                      />
                      <span>
                        <ArrowUpRightIcon />
                      </span>
                    </button>

                    <div className="archive-card-copy">
                      <div className="archive-card-meta">
                        <small>{robotSystemLabels[project.system]}</small>
                        <time>{project.period}</time>
                      </div>

                      {deploymentForProject(project) ? (
                        <span className="deployment-badge archive-deployment">{deploymentForProject(project)}</span>
                      ) : null}

                      <ContextLogos
                        logos={project.logos}
                        className="archive-context-logos"
                      />

                      <h3>{project.title}</h3>
                      <p className="project-stack">{(project.stack ?? project.technologies.slice(0, 5)).join(' · ')}</p>
                      <p>{project.summary}</p>
                      {project.evidence ? (
                        <p className="project-evidence">{project.evidence}</p>
                      ) : null}

                      <button
                        className="archive-open"
                        onClick={() => setSelectedProject(project)}
                      >
                        View project <span>→</span>
                      </button>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="archive-empty">
                <h3>No matching projects</h3>
                <p>Try another search term or clear the selected category.</p>
              </div>
            )}

            {visibleProjects < filteredProjects.length ? (
              <div className="archive-more">
                <button
                  onClick={() =>
                    setVisibleProjects((count) => count + 6)
                  }
                >
                  Load 6 more projects
                </button>
                <span>
                  {displayedProjects.length} of {filteredProjects.length} shown
                </span>
              </div>
            ) : null}

            <a className="archive-all-link" href={assetPath('/projects/')}>
              View all {projects.length} projects <ArrowUpRightIcon />
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-layout">
            <Reveal>
              <h2>Contact</h2>
            </Reveal>

            <Reveal className="contact-copy" delay={0.08}>
              <p>{profile.availability}</p>

              <a className="email-link" href={`mailto:${profile.email}`}>
                {profile.email}
                <ArrowUpRightIcon />
              </a>

              <div>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </div>

              <span>{profile.location}</span>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>Robotics · Autonomous Systems · Robot Learning</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject ? (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        ) : null}
      </AnimatePresence>
    </>
  )
}
