'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRightIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { capabilitiesForProject, profile, type Project } from '../data/portfolio'
import { assetPath } from '../lib/paths'
import ProjectImage from './ProjectImage'

export type RobotSystem = Project['system']

export const systemMeta: Record<RobotSystem, { label: string; number: string }> = {
  marine: { label: 'Marine', number: '01' },
  mobile: { label: 'Mobile', number: '02' },
  legged: { label: 'Legged', number: '03' },
  aerial: { label: 'Aerial', number: '04' },
  manipulation: { label: 'Manipulation', number: '05' }
}

const cardSummaries: Record<string, string> = {
  'tiago-navigation-integration': 'Integrated Nav2 with ROS 2, REST and MQTT mission interfaces, health monitoring and repeatable commissioning tests.',
  'failure-aware-manipulation': 'Built contact-aware failure detection and autonomous recovery for Franka manipulation.',
  bathygraph: 'Built lightweight bathymetric pose-graph SLAM for GPS-denied underwater navigation.',
  'aquanav-fm': 'Connected adapted underwater visual place recognition to synchronized sensing and short-horizon AUV navigation.',
  aquaadapt: 'Trained a domain-adaptive underwater place-recognition pipeline for changing visual conditions.',
  maestro: 'Developed multi-agent fault diagnosis and operator-approved recovery for autonomous underwater missions.',
  minigirona: 'Integrated localization, perception, planning and intervention on the MiniGirona autonomous underwater robot.',
  marsim: 'Built a ROS 2 planetary rover simulator with terrain-aware dynamics and configurable sensors.',
  reconstruction: 'Fused stereo, sonar and vehicle poses for underwater 3D reconstruction of offshore structures.',
  humanoid: 'Trained a curriculum-based PPO locomotion policy for a humanoid robot in MuJoCo.',
  'can-robots-code': 'Built an LLM agent that generates, validates and tests ROS 2 robot software.',
  'active-navigation': 'Planned perception-aware rover motion using localization and terrain uncertainty.',
  'stereo-perception': 'Estimated object pose from underwater stereo imagery for autonomous manipulation.',
  frontier_exploration: 'Implemented frontier exploration, SLAM and navigation for a Unitree Go1 quadruped.',
  'mobile-autonomy': 'Integrated SLAM, EKF localization, RRT* planning and behavior-tree execution on a mobile robot.',
  'stereo-visual-slam': 'Implemented stereo visual odometry and mapping with geometric estimation and bundle adjustment.',
  'multi-robot': 'Implemented consensus, flocking and task allocation for coordinated aerial robots.',
  'underwater-depth': 'Compared supervised and self-supervised metric depth on FLSea with strict scene splits and a 24.35% held-out AbsRel reduction.',
  openvla: 'Connected OpenVLA outputs to a simulated KUKA pick-and-place pipeline.',
  'tiago-assistant': 'Combined language and vision models with TIAGo for task-oriented home assistance.',
  'rl-pid-drone': 'Applied reinforcement learning to tune drone PID control gains in simulation.',
  'colour-enhancement': 'Evaluated color-space enhancement methods for more reliable underwater perception.'
}

export function conciseSummary(project: Project) {
  return cardSummaries[project.id] || project.summary.split(/(?<=[.!?])\s/)[0]
}

export function Reveal({
  children,
  className = '',
  delay = 0
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string
  title: string
  copy?: string
}) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </Reveal>
  )
}

export function SiteHeader({ page = 'home' }: { page?: 'home' | 'projects' }) {
  const [open, setOpen] = useState(false)
  const home = assetPath('/')
  const projectPage = assetPath('/projects/')
  const anchor = (id: string) => (page === 'home' ? `#${id}` : `${home}#${id}`)
  const links = [
    ['Projects', projectPage],
    ['Systems', anchor('systems')],
    ['Research', anchor('research')],
    ['About', anchor('about')],
    ['Contact', anchor('contact')]
  ]

  return (
    <header className="site-header scrolled">
      <nav className="shell nav-bar" aria-label="Main navigation">
        <a className="brand" href={home} onClick={() => setOpen(false)}>
          <span>BQ</span>
          <div>
            <strong>{profile.name}</strong>
            <small>{profile.headline}</small>
          </div>
        </a>

        <div className="desktop-nav">
          {links.map(([label, href]) => (
            <a href={href} key={label}>{label}</a>
          ))}
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </button>
      </nav>

      <div className={`mobile-nav${open ? ' open' : ''}`}>
        <div className="shell">
          {links.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer>
      <div className="shell">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Robotics · Autonomous Systems · Robot Learning</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export function ProjectCard({
  project,
  onOpen,
  featured = false
}: {
  project: Project
  onOpen: (project: Project) => void
  featured?: boolean
}) {
  const system = systemMeta[project.system]

  return (
    <article className={`archive-card system-${project.system}${featured ? ' featured' : ''}`}>
      <button className="archive-image" type="button" onClick={() => onOpen(project)} aria-label={`View ${project.title}`}>
        <ProjectImage src={project.cover} alt={`${project.title} project`} />
        <span><ArrowUpRightIcon /></span>
      </button>
      <div className="archive-card-copy">
        <div className="archive-card-meta">
          <small>{system.label}</small>
          <time>{project.period}</time>
        </div>
        <h3>{project.title}</h3>
        <h4>{project.subtitle}</h4>
        <p>{conciseSummary(project)}</p>
        <div className="archive-tech" aria-label="Key technologies">
          {project.technologies.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <button className="archive-open" type="button" onClick={() => onOpen(project)}>
          View case study <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  )
}

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const [activeImage, setActiveImage] = useState(project.cover)
  const images = [project.cover, ...project.gallery].filter((image, index, list) => image && list.indexOf(image) === index)
  const videos = project.videos ?? (project.video ? [project.video] : [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <article className="project-modal" role="dialog" aria-modal="true" aria-labelledby={`case-${project.id}`}>
        <button ref={closeRef} className="modal-close" type="button" onClick={onClose} aria-label="Close project details">
          <XMarkIcon />
        </button>

        <div className="modal-media">
          <div className="modal-main-image">
            <ProjectImage src={activeImage} alt={`${project.title} project evidence`} eager />
          </div>
          {images.length > 1 ? (
            <div className="modal-thumbnails" aria-label="Project image gallery">
              {images.map((image, index) => (
                <button className={activeImage === image ? 'active' : ''} type="button" onClick={() => setActiveImage(image)} key={image} aria-label={`Show image ${index + 1}`}>
                  <ProjectImage src={image} alt={`${project.title} view ${index + 1}`} />
                </button>
              ))}
            </div>
          ) : null}
          {videos.map((video) => (
            <figure className="modal-video" key={video.src}>
              <div><span>Result video</span><small>{video.caption}</small></div>
              <video className={video.layout === 'wide' ? 'wide' : undefined} controls playsInline preload="metadata" poster={assetPath(video.poster)}>
                <source src={assetPath(video.src)} type="video/mp4" />
              </video>
            </figure>
          ))}
        </div>

        <div className="modal-copy">
          <div className="modal-meta">
            <span>{systemMeta[project.system].label} Robotics · {project.area}</span>
            <span>{project.period}</span>
            <span>{project.status}</span>
          </div>
          <h2 id={`case-${project.id}`}>{project.title}</h2>
          <h3>{project.subtitle}</h3>
          <p className="modal-summary">{project.summary}</p>

          <div className="modal-columns">
            <section><p className="mini-label">Problem</p><p>{project.challenge}</p></section>
            <section><p className="mini-label">My contribution</p><p>{project.contribution}</p></section>
          </div>
          {project.architecture.length ? (
            <section className="modal-results">
              <p className="mini-label">System architecture</p>
              <ul>
                {project.architecture.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          ) : null}
          <div className="modal-columns">
            <section><p className="mini-label">Role</p><p>{project.role}</p></section>
            <section><p className="mini-label">Team</p><p>{project.team}</p></section>
          </div>
          <section>
            <p className="mini-label">Evaluation</p>
            <p>{project.evaluation}</p>
          </section>
          <section className="modal-results">
            <p className="mini-label">Results</p>
            <ul>
              {project.results.map((result) => <li key={result}>{result}</li>)}
            </ul>
          </section>
          {project.limitations ? (
            <section>
              <p className="mini-label">Limitations</p>
              <p>{project.limitations}</p>
            </section>
          ) : null}

          <div className="modal-technologies">
            {(capabilitiesForProject(project).length ? capabilitiesForProject(project) : project.capabilities ?? [project.category]).map((item) => <span key={`capability-${item}`}>{item}</span>)}
            {project.technologies.map((item) => <span key={item}>{item}</span>)}
          </div>

          {project.links?.length ? (
            <div className="modal-links">
              {project.links.map((link) => (
                <a href={assetPath(link.href)} target="_blank" rel="noreferrer" key={link.href}>
                  {link.label} <ArrowUpRightIcon />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </div>
  )
}
