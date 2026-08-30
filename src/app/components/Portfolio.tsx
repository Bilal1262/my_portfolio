'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import {
  awards,
  capabilityGroups,
  education,
  experience,
  profile,
  projects,
  research,
  skills,
  type CapabilityId,
  type Project,
  type RobotSystem
} from '../data/portfolio'
import { assetPath } from '../lib/paths'
import ProjectImage from './ProjectImage'

const robotSystems: Array<{
  id: RobotSystem
  label: string
}> = [
  { id: 'marine', label: 'Marine Robotics' },
  { id: 'mobile', label: 'Mobile Robotics' },
  { id: 'legged', label: 'Legged Robotics' },
  { id: 'aerial', label: 'Aerial Robotics' },
  { id: 'manipulation', label: 'Manipulation & Embodied AI' }
]

const robotSystemLabels = Object.fromEntries(
  robotSystems.map((system) => [system.id, system.label])
) as Record<RobotSystem, string>

const featuredProjectIds = [
  'minigirona',
  'tiago-navigation-integration',
  'maestro',
  'reconstruction',
  'adaptive-sim2real-go2',
  'failure-aware-manipulation'
]

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
  number,
  eyebrow,
  title,
  description
}: {
  number: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="section-title">
      <div>
        <span>{number}</span>
        <p>{eyebrow}</p>
      </div>
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
              <p className="mini-label">My contribution</p>
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
              <p className="mini-label">Limitations</p>
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
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)
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
  const active = showcase[slide]

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
    if (paused || reduce || showcase.length < 2) return
    const timer = window.setInterval(
      () => setSlide((index) => (index + 1) % showcase.length),
      5600
    )
    return () => window.clearInterval(timer)
  }, [paused, reduce, showcase.length])

  useEffect(() => {
    setVisibleProjects(6)
  }, [archiveCapability, archiveCategory, archiveSearch])

  const moveSlide = (direction: number) =>
    setSlide(
      (index) => (index + direction + showcase.length) % showcase.length
    )

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
    ['Systems', '#systems'],
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
              <p className="hero-kicker">{profile.name}</p>
              <h1>{profile.headline}</h1>

              <p className="hero-description">
                Designing, integrating and validating autonomous robot systems
                across perception, localization &amp; SLAM, navigation, planning,
                manipulation and robot learning.
              </p>

              <p className="hero-stack">
                ROS / ROS 2 · C++ / Python · SLAM &amp; Sensor Fusion · Nav2 &amp;
                Motion Planning · 3D Perception · Robot Learning
              </p>

              <p className="hero-context">
                Real-robot, simulation and research experience across underwater,
                mobile, legged, aerial and manipulation systems.
              </p>

              <p className="hero-availability">{profile.availability}</p>

              <div className="hero-actions">
                <a className="primary-button" href="#work">
                  Explore selected work
                  <ArrowDownIcon />
                </a>
                <a className="secondary-button" href="#capabilities">
                  Explore by expertise
                  <ArrowDownIcon />
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>Sense → Act</strong>
                  <span>Across the autonomy stack</span>
                </div>
                <div>
                  <strong>ROS / ROS 2</strong>
                  <span>Integrated robot systems</span>
                </div>
                <div>
                  <strong>Research</strong>
                  <span>Evaluated, documented work</span>
                </div>
              </div>
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
                  <span>Field robotics</span>
                  <strong>MiniGirona autonomous underwater vehicle</strong>
                  <small>Integrated real-robot deployment · CIRS Lab</small>
                </figcaption>
              </figure>
              <div className="floating-note note-one">
                <i aria-hidden="true" />
                <div>
                  <strong>Real robot systems</strong>
                  <span>Integrated &amp; validated</span>
                </div>
              </div>
              <div className="floating-note note-two">
                <b aria-hidden="true" />
                <div>
                  <strong>End-to-end autonomy</strong>
                  <span>Sense · Localize · Plan · Act</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="dark-section" id="about">
          <div className="shell about-layout">
            <Reveal>
              <p className="section-eyebrow light">About</p>
              <h2>
                End-to-End Autonomy Engineering Across Real and Simulated Robot Systems
              </h2>
            </Reveal>

            <Reveal className="about-text" delay={0.08}>
              <p>
                I build complete autonomous robot systems from sensing and state
                estimation through localization, planning, execution and
                intelligent adaptation. My work combines robotics software,
                perception, SLAM, navigation, manipulation and robot learning
                across underwater, mobile, legged and aerial platforms, with
                experience spanning simulation, experimental research and
                integrated real-robot deployment.
              </p>
              <div>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section capability-section" id="capabilities">
          <div className="shell">
            <SectionTitle
              number="01"
              eyebrow="Explore by expertise"
              title="One autonomy stack. Multiple ways into the work."
              description="Follow the capability most relevant to your role, then open the projects that provide direct engineering evidence."
            />

            <div className="autonomy-flow" aria-label="Autonomy engineering capability map">
              {capabilityGroups.map((capability, index) => (
                <Reveal
                  className="capability-card"
                  delay={index * 0.045}
                  key={capability.id}
                >
                  <article id={capability.id}>
                    <div className="capability-stage">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <strong>{capability.stage}</strong>
                    </div>
                    <h3>{capability.label}</h3>
                    <p>{capability.summary}</p>
                    <div className="capability-projects">
                      {capability.projectIds.slice(0, 3).map((projectId) => {
                        const project = projects.find((item) => item.id === projectId)
                        return project ? (
                          <button
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            key={project.id}
                          >
                            {project.name ?? project.title}
                          </button>
                        ) : null
                      })}
                    </div>
                    <button
                      className="capability-open"
                      type="button"
                      onClick={() => exploreCapability(capability.id)}
                    >
                      Explore related work <span>→</span>
                    </button>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="applied-platforms">
              <span>Applied across</span>
              {robotSystems.map((system) => (
                <a href={`#${system.id}`} key={system.id}>{system.label}</a>
              ))}
            </div>
          </div>
        </section>

        <section className="section systems-section" id="systems">
          <div className="shell">
            <SectionTitle
              number="02"
              eyebrow="Robot systems"
              title="Explore projects by robotic platform."
              description="Work across marine, mobile, legged, aerial and manipulation systems, with technical capabilities retained on every project."
            />

            <div
              className="archive-filters system-tabs"
              aria-label="Explore projects by robot system"
            >
              {robotSystems.map((system) => (
                <button
                  id={system.id}
                  className={archiveCategory === system.id ? 'active' : ''}
                  onClick={() => exploreSystem(system.id)}
                  key={system.id}
                >
                  {system.label} ·{' '}
                  {projects.filter((project) => project.system === system.id).length}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section showcase-section" id="work">
          <div className="shell">
            <SectionTitle
              number="03"
              eyebrow="Selected work"
              title="Complete robotic systems with measurable outcomes."
              description="Six projects that best represent my systems engineering, research and implementation work."
            />

            <div
              className="showcase"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="showcase-copy">
                <div className="counter">
                  <span>{String(slide + 1).padStart(2, '0')}</span>
                  <i />
                  <span>{String(showcase.length).padStart(2, '0')}</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="project-area">
                      {robotSystemLabels[active.system]} · {active.area}
                    </p>
                    <ContextLogos
                      logos={active.logos}
                      className="project-context-logos"
                    />
                    <h3>{active.title}</h3>
                    <p className="project-stack">{(active.stack ?? active.technologies.slice(0, 5)).join(' · ')}</p>
                    <p>{active.summary}</p>

                    {active.evidence ? (
                      <p className="project-evidence">{active.evidence}</p>
                    ) : null}

                    <div className="showcase-results">
                      {active.results.slice(0, 3).map((result) => (
                        <span key={result}>{result}</span>
                      ))}
                    </div>

                    <button
                      className="text-button"
                      onClick={() => setSelectedProject(active)}
                    >
                      View engineering case study
                      <ArrowUpRightIcon />
                    </button>
                  </motion.div>
                </AnimatePresence>

                <div className="carousel-controls">
                  <button
                    onClick={() => moveSlide(-1)}
                    aria-label="Previous project"
                  >
                    <ArrowLeftIcon />
                  </button>
                  <div>
                    {showcase.map((item, index) => (
                      <button
                        className={slide === index ? 'active' : ''}
                        onClick={() => setSlide(index)}
                        aria-label={`Show ${item.title}`}
                        key={item.id}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => moveSlide(1)}
                    aria-label="Next project"
                  >
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>

              <div className="showcase-media">
                <AnimatePresence mode="wait">
                  <motion.div
                    className="showcase-image"
                    key={active.cover}
                    initial={
                      reduce ? false : { opacity: 0, scale: 1.025 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={
                      reduce ? undefined : { opacity: 0, scale: 0.985 }
                    }
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectImage
                      src={active.cover}
                      alt={active.title}
                      eager={slide === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="media-caption">
                  <span>{active.period}</span>
                  <span>{active.technologies.slice(0, 3).join(' · ')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section experience-section"
          id="experience"
        >
          <div className="shell">
            <SectionTitle
              number="04"
              eyebrow="Experience"
              title="Research and engineering across the autonomy stack."
              description="Work spanning mission reasoning, multimodal perception, localization and real-robot integration."
            />

            <div className="experience-list">
              {experience.map((item, index) => (
                <Reveal
                  className="experience-row"
                  delay={index * 0.05}
                  key={item.role}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
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
            <SectionTitle
              number="05"
              eyebrow="Research & communication"
              title="Research in autonomy, perception and resilient robot systems."
              description="Peer-reviewed work, technical presentations and thesis research across the autonomy stack."
            />

            <div className="research-list">
              {research.map((item, index) => (
                <Reveal
                  className="research-row"
                  delay={index * 0.05}
                  key={item.title}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
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
            <div className="recognition-heading">
              <p className="section-eyebrow">Selected recognition</p>
              <h3>Awards tied to research and robot performance.</h3>
              <p>
                External recognition for technical research, integrated
                robotic systems, and applied AI engineering.
              </p>
            </div>

            <div className="awards-grid">
              {awards.map((award, index) => (
                <Reveal
                  className="award-card"
                  delay={index * 0.05}
                  key={`${award.achievement}-${award.year}`}
                >
                  <div className="award-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>

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
            <SectionTitle
              number="06"
              eyebrow="Capabilities"
              title="Tools organised around engineering problems."
            />

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <Reveal
                  className="skill-card"
                  delay={index * 0.05}
                  key={skill.group}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{skill.group}</h3>
                  <div>
                    {skill.items.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                  <p className="skill-proof">{skill.proof}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="shell">
            <SectionTitle
              number="07"
              eyebrow="Education"
              title="International training in intelligent field robotics."
              description="A multidisciplinary path combining robotics, perception, control, autonomous systems and field deployment."
            />

            <div className="education-list">
              {education.map((item, index) => (
                <Reveal
                  className="education-row"
                  delay={index * 0.06}
                  key={item.degree}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
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

        <section className="section projects-section" id="archive">
          <div className="shell">
            <SectionTitle
              number="08"
              eyebrow="Additional robotics work"
              title="More systems, experiments and engineering studies."
              description="The six flagship case studies stay above. Filter the remaining work by expertise or platform, or open the complete project archive."
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
                All expertise
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
              ) : (
                <span>Flagship projects are presented separately above.</span>
              )}
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
                        View case study <span>→</span>
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
              <p className="section-eyebrow">Contact</p>
              <h2>Let&apos;s build autonomous robots that work outside the lab.</h2>
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
