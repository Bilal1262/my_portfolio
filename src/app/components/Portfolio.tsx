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
  education,
  experience,
  profile,
  projects,
  research,
  roles,
  skills,
  type Project
} from '../data/portfolio'
import { assetPath } from '../lib/paths'
import ProjectImage from './ProjectImage'

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

function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = roles[wordIndex]
    const complete = text === word
    const empty = text.length === 0
    const delay =
      complete && !deleting
        ? 1400
        : empty && deleting
          ? 240
          : deleting
            ? 30
            : 58

    const timer = window.setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true)
        return
      }

      if (empty && deleting) {
        setDeleting(false)
        setWordIndex((index) => (index + 1) % roles.length)
        return
      }

      setText(
        deleting
          ? word.slice(0, Math.max(0, text.length - 1))
          : word.slice(0, text.length + 1)
      )
    }, delay)

    return () => window.clearTimeout(timer)
  }, [deleting, text, wordIndex])

  return (
    <span className="typed-role">
      {text}
      <i aria-hidden="true" />
    </span>
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

          {project.video ? (
            <div className="modal-video">
              <div>
                <span>Result video</span>
                <small>{project.video.caption}</small>
              </div>
              <video
                controls
                playsInline
                preload="metadata"
                poster={assetPath(project.video.poster)}
              >
                <source
                  src={assetPath(project.video.src)}
                  type="video/mp4"
                />
                Your browser does not support embedded video.
              </video>
            </div>
          ) : null}
        </div>

        <div className="modal-copy">
          <div className="modal-meta">
            <span>{project.area}</span>
            <span>{project.period}</span>
            <span>{project.status}</span>
          </div>

          <ContextLogos
            logos={project.logos}
            className="modal-context-logos"
          />

          <h2 id={`project-title-${project.id}`}>{project.title}</h2>
          <h3>{project.subtitle}</h3>
          <p className="modal-summary">{project.summary}</p>

          <div className="modal-columns">
            <section>
              <p className="mini-label">Challenge</p>
              <p>{project.challenge}</p>
            </section>
            <section>
              <p className="mini-label">My ownership</p>
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
  const [archiveCategory, setArchiveCategory] = useState('All')
  const [archiveSearch, setArchiveSearch] = useState('')
  const [visibleProjects, setVisibleProjects] = useState(6)
  const reduce = useReducedMotion()

  const showcase = useMemo(
    () => projects.filter((project) => project.featured).slice(0, 6),
    []
  )
  const active = showcase[slide]

  const archiveCategories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  )

  const filteredProjects = useMemo(() => {
    const query = archiveSearch.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesCategory =
        archiveCategory === 'All' || project.category === archiveCategory
      const searchable = [
        project.title,
        project.subtitle,
        project.summary,
        project.area,
        project.category,
        project.role,
        project.team,
        project.evaluation,
        ...project.technologies,
        ...project.results
      ]
        .join(' ')
        .toLowerCase()

      return matchesCategory && (!query || searchable.includes(query))
    })
  }, [archiveCategory, archiveSearch])

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
  }, [archiveCategory, archiveSearch])

  const moveSlide = (direction: number) =>
    setSlide(
      (index) => (index + direction + showcase.length) % showcase.length
    )

  const nav = [
    ['Work', '#work'],
    ['Experience', '#experience'],
    ['Research', '#research'],
    ['Capabilities', '#skills'],
    ['Education', '#education'],
    ['Archive', '#archive'],
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
              className="resume-link"
              href={assetPath(profile.resume)}
              target="_blank"
              rel="noreferrer"
            >
              Resume
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
            >
              Resume
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
              <p className="hero-kicker">Hi, I am {profile.name}</p>
              <h1>
                I build <Typewriter />
              </h1>

              <p className="hero-description">
                Robotics software and research engineer building autonomous
                systems for challenging environments—across underwater
                robotics, perception, localization, simulation and embodied AI.
              </p>

              <p className="hero-availability">{profile.availability}</p>

              <div className="hero-actions">
                <a className="primary-button" href="#work">
                  Explore selected work
                  <ArrowDownIcon />
                </a>
                <a
                  className="secondary-button"
                  href={assetPath(profile.resume)}
                  target="_blank"
                  rel="noreferrer"
                >
                  View resume
                  <ArrowUpRightIcon />
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>Real AUV</strong>
                  <span>Field-tested autonomy</span>
                </div>
                <div>
                  <strong>ROS 2</strong>
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
              </figure>
            </motion.div>
          </div>
        </section>

        <section className="dark-section" id="about">
          <div className="shell about-layout">
            <Reveal>
              <p className="section-eyebrow light">About</p>
              <h2>
                I turn difficult autonomy problems into evaluated robot systems.
              </h2>
            </Reveal>

            <Reveal className="about-text" delay={0.08}>
              <p>
                My work usually begins with an autonomy failure—uncertain
                localization, degraded perception, incomplete mission logic or
                unsafe planning—and ends with an integrated ROS 2 system,
                evaluation workflow and documented limitations.
              </p>
              <p>
                I am most interested in robotics software and research-engineering
                roles involving autonomous systems, perception, simulation and
                embodied AI.
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

        <section className="section showcase-section" id="work">
          <div className="shell">
            <SectionTitle
              number="01"
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
                    <p className="project-area">{active.area}</p>
                    <ContextLogos
                      logos={active.logos}
                      className="project-context-logos"
                    />
                    <h3>{active.title}</h3>
                    <h4>{active.subtitle}</h4>
                    <p>{active.summary}</p>

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
              number="02"
              eyebrow="Experience"
              title="Research and engineering across the autonomy stack."
              description="Work spanning mission reasoning, underwater perception, localization, simulation and real-robot integration."
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
              number="03"
              eyebrow="Research & communication"
              title="Work communicated beyond the codebase."
              description="Peer-reviewed research, technical presentations and thesis work."
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
              number="04"
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
              number="05"
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
              number="06"
              eyebrow="Project archive"
              title="A curated catalogue of robotics and AI work."
              description="Browse substantial case studies by engineering area, technology or problem."
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
                aria-label="Filter projects by category"
              >
                {archiveCategories.map((category) => (
                  <button
                    className={
                      archiveCategory === category ? 'active' : ''
                    }
                    onClick={() => setArchiveCategory(category)}
                    key={category}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="archive-meta">
              <p>
                <strong>{filteredProjects.length}</strong>{' '}
                {filteredProjects.length === 1 ? 'project' : 'projects'}
              </p>

              {archiveCategory !== 'All' || archiveSearch ? (
                <button
                  onClick={() => {
                    setArchiveCategory('All')
                    setArchiveSearch('')
                  }}
                >
                  Clear filters
                </button>
              ) : (
                <span>Featured projects are included in this archive.</span>
              )}
            </div>

            {displayedProjects.length ? (
              <div className="archive-grid">
                {displayedProjects.map((project, index) => (
                  <Reveal
                    className="archive-card"
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
                        <small>{project.category}</small>
                        <time>{project.period}</time>
                      </div>

                      <ContextLogos
                        logos={project.logos}
                        className="archive-context-logos"
                      />

                      <h3>{project.title}</h3>
                      <h4>{project.subtitle}</h4>
                      <p>{project.summary}</p>

                      <div className="archive-tech">
                        {project.technologies.slice(0, 3).map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>

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
                <a
                  href={assetPath(profile.resume)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume ↗
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
