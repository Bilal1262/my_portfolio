import type { Metadata } from 'next'
import ProjectImage from '../../components/ProjectImage'
import { SiteFooter, SiteHeader } from '../../components/PortfolioUI'
import { assetPath } from '../../lib/paths'
import styles from './orca.module.css'

export const metadata: Metadata = {
  title: 'ORCA ContactWorld — Contact-Aware Dexterous Manipulation',
  description: 'A MuJoCo research case study in stable dexterous grasping, measured slip recovery, perturbation data and residual-policy ball catching.',
  keywords: ['ORCA ContactWorld', 'dexterous manipulation', 'contact-aware control', 'MuJoCo', 'robot learning', 'slip recovery'],
  openGraph: {
    title: 'ORCA ContactWorld — Contact-Aware Dexterous Manipulation',
    description: '50/50 stable lifts, a validated 773k-timestep perturbation pilot and a first residual-PPO catch baseline.',
    url: '/projects/orca-contactworld/',
    type: 'article',
    images: [{ url: '/projects_picture/orca-contactworld/contactworld-recovery.webp', width: 2560, height: 1440, alt: 'ORCA hand recovering a cube after a measured lateral disturbance in MuJoCo' }]
  }
}

const graspStages = [
  ['01', 'Pre-grasp', 'Align the palm and pre-shape the hand around the measured cube pose.'],
  ['02', 'Opposing contact', 'Close thumb and opposing fingers until at least two sides are supported.'],
  ['03', 'Force-aware closure', 'Advance fingers independently and stop each at its normal-force target.'],
  ['04', 'Slip check', 'Compare cube-to-palm motion with persistent contact and support state.'],
  ['05', 'Recovery + lift', 'Increase grip only when needed, then lift slowly and hold for two seconds.']
]

const datasetRows = [
  ['Stable success', '17', '8.5%'], ['Active slip recovery', '90', '45.0%'],
  ['Passive stabilization', '46', '23.0%'], ['Slip → drop', '40', '20.0%'],
  ['Other non-success', '7', '3.5%']
]

const limitations = [
  'The evidence is simulation-only; no real-hand transfer or compliant-hardware validation is claimed.',
  'ContactWorld-v1 currently contains 200 pilot episodes, not the planned 2,000–5,000-episode main dataset.',
  'Slip precursors are descriptive associations. A predictive ContactWorld model has not yet been trained.',
  'The ball starts with a scripted upward release impulse, so the policy learns catch corrections rather than an end-to-end throw.',
  'The residual PPO gain is +0.5 percentage points on one training seed—pipeline evidence, not a strong RL result.',
  'Two-ball handovers, juggling and real-world stick manipulation remain future tasks, not demonstrated capabilities.'
]

export default function OrcaContactWorldPage() {
  return (
    <>
      <SiteHeader page="projects" />
      <main id="top" className={`case-study ${styles.page}`}>
        <section className={`case-hero ${styles.hero}`}>
          <div className="shell">
            <a className="case-back" href={assetPath('/projects/')}>← All projects</a>
            <div className="case-hero-grid">
              <div className="case-hero-copy">
                <p className="case-kicker">Dexterous manipulation · Independent research</p>
                <h1>ORCA<br />ContactWorld</h1>
                <h2>Contact-aware grasping, measured slip recovery and dynamic-object learning.</h2>
                <p className="case-deck">A research benchmark built around a 7-DoF OpenArm and 17-DoF ORCA hand in MuJoCo—designed to turn contact events into reproducible grasp, perturbation and recovery evidence.</p>
                <div className="case-tags" aria-label="Technical stack">{['MuJoCo', 'OpenArm + ORCA', 'Contact sensing', 'Gymnasium', 'Residual PPO'].map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              <div className="case-hero-result" aria-label="Principal result">
                <small>Frozen scripted baseline</small><strong>50/50</strong><span>grasp · 8 cm lift · 2 s hold</span>
                <p>Deterministic pose trials · unchanged physics · actuator limits respected</p>
              </div>
            </div>
            <figure className={`${styles.heroFigure} evidence-figure`}>
              <div className={styles.heroImage}><ProjectImage src="/projects_picture/orca-contactworld/contactworld-recovery.webp" alt="Four MuJoCo frames show an ORCA robotic hand holding a yellow cube before a lateral disturbance, during peak slip, and after recovery; measured finger forces and cube-to-palm speed appear below" eager /></div>
              <figcaption><strong>Measured recovery, not a staged render.</strong> Episode 119 is replayed from saved MuJoCo states: a 5.22 N lateral disturbance produces 0.617 m/s peak relative slip before stability is restored 1.08 s after detection. Aggregate pilot results are shown beside the trace.</figcaption>
            </figure>
            <figure className={styles.videoFigure}>
              <div className={styles.videoHeading}><span>Experiment replay</span><p>Episode 119 · synchronized simulation and telemetry</p></div>
              <video autoPlay muted loop playsInline controls preload="metadata" poster={assetPath('/projects_picture/orca-contactworld/contactworld-recovery.webp')} aria-label="ContactWorld Episode 119 slip-recovery replay with synchronized contact force and slip telemetry">
                <source src={assetPath('/projects_picture/orca-contactworld/contactworld-recovery.webm')} type="video/webm" />
                <source src={assetPath('/projects_picture/orca-contactworld/contactworld-recovery.mp4')} type="video/mp4" />
              </video>
              <figcaption><strong>6.7-second measured replay.</strong> The robot and cube frames are restored from the saved trajectory; the dashboard reads the matching contact forces, external force and cube-to-palm velocity. Simulation evidence, not real hardware.</figcaption>
            </figure>
          </div>
        </section>

        <nav className="case-jump-nav" aria-label="Case study sections"><div className="shell">{[
          ['Motivation', 'motivation'], ['System', 'system'], ['Grasp', 'grasp'], ['Benchmark', 'benchmark'],
          ['Dataset', 'dataset'], ['Ball catch', 'ball-catch'], ['Limits', 'limitations']
        ].map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div></nav>

        <section className="case-section" id="motivation">
          <div className="shell case-copy-grid">
            <div className="case-section-heading"><p>01 · Motivation</p><h2>A grasp is only useful if it survives motion.</h2></div>
            <div className="case-prose">
              <p>Touching a cube once is not force closure. During lift, small pose errors redistribute load across the fingers; acceleration and disturbances expose weak opposition; a controller that keeps closing every joint can create excessive force without stopping slip.</p>
              <p>ContactWorld was built to make that failure measurable. It couples per-finger contact and normal-force estimates with object-to-palm motion, then records the full chain from stable contact through slip detection, corrective closure and either recovery or drop.</p>
              <aside className="research-question"><span>Research direction</span><p>Can contact-rich trajectories support a predictive model that recognizes failure early enough to choose a recovery before the object is lost?</p></aside>
            </div>
          </div>
        </section>

        <section className="case-section case-section-dark" id="system">
          <div className="shell">
            <div className="case-section-heading wide"><p>02 · System architecture</p><h2>One physical interface, from scripted control to learned residuals</h2></div>
            <div className={styles.systemFlow} role="img" aria-label="OpenArm and ORCA hand feed semantic contact, force, object and camera observations to a 106-dimensional state; the controller returns 24 bounded actuator targets to MuJoCo">
              <div className={styles.flowColumn}><small>Embodiment</small><strong>7-DoF OpenArm</strong><span>rigid hand adapter</span><strong>17-DoF ORCA hand</strong></div><i>→</i>
              <div className={styles.flowColumn}><small>Measured state</small><strong>5 semantic contacts</strong><span>normal force · cube / palm motion</span><strong>external + wrist RGB</strong></div><i>→</i>
              <div className={`${styles.flowColumn} ${styles.flowAccent}`}><small>Control layer</small><strong>106-D observation</strong><span>scripted baseline or skill residual</span><strong>24 bounded targets</strong></div><i>↺</i>
              <div className={styles.flowColumn}><small>Simulation</small><strong>MuJoCo dynamics</strong><span>free-joint object · 100 Hz logs</span><strong>events + integrity checks</strong></div>
            </div>
            <div className={styles.systemFacts}>
              <article><strong>24</strong><span>physical actuator targets<br />7 arm + 17 hand</span></article>
              <article><strong>106</strong><span>default low-dimensional<br />observation values</span></article>
              <article><strong>2 × RGB</strong><span>external and wrist cameras<br />available on demand</span></article>
              <article><strong>22/22</strong><span>current automated<br />tests passing</span></article>
            </div>
          </div>
        </section>

        <section className="case-section" id="grasp"><div className="shell">
          <div className="case-section-heading wide"><p>03 · Contact-aware grasp controller</p><h2>Close each finger for a reason</h2></div>
          <div className={styles.stageGrid}>{graspStages.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
          <div className={styles.acceptanceGrid}>
            <div><p className="mini-label">Strict acceptance test</p><h3>Every deterministic trial passed the complete task.</h3><p>The cube pose varied within ±1 cm in the horizontal plane. Success required the grasp, at least 8 cm of lift and a two-second hold. Friction, damping and gains were not changed to make the object sticky. The frozen baseline retained the original 17/17 acceptance suite; the expanded repository now passes 22/22 tests.</p></div>
            <dl><div><dt>Grasp</dt><dd>50 / 50</dd></div><div><dt>Lift ≥ 8 cm</dt><dd>50 / 50</dd></div><div><dt>Hold ≥ 2 s</dt><dd>50 / 50</dd></div><div><dt>Peak contact force</dt><dd>10.96 N</dd></div><div><dt>Peak hand command</dt><dd>84.7%</dd></div><div><dt>Physics modified</dt><dd>No</dd></div></dl>
          </div>
        </div></section>

        <section className="case-section case-section-tinted" id="benchmark"><div className="shell">
          <div className="case-section-heading wide"><p>04 · Perturbation benchmark</p><h2>Find the boundary—not just the success case</h2></div>
          <div className="primary-result-grid"><article><small>Independent conditions</small><strong>88</strong><span>pose, dynamics, delay and force</span></article><article className="best"><small>Final successes</small><strong>81</strong><span>92.0% of sweep conditions</span></article><article><small>Observed response</small><strong>35 / 5</strong><span>slip events / physical drops</span></article></div>
          <div className={styles.figurePair}>
            <figure className="compact-figure"><ProjectImage src="/projects_picture/orca-contactworld/perturbation-force.png" alt="Success rate by external force magnitude in the deterministic ContactWorld perturbation sweep" /><figcaption><strong>Lateral-force boundary.</strong> Direction matters: the first drop appears at a five-times-weight pulse; higher pulses expose additional failure directions.</figcaption></figure>
            <div className={styles.rangePanel}><p className="mini-label">Independently characterized ranges</p><ul>
              <li><span>Object mass</span><strong>0.70–1.50×</strong></li><li><span>Contact friction</span><strong>0.60–1.10×</strong></li><li><span>Cube X / Y offset</span><strong>±2 cm</strong></li><li><span>Cube yaw</span><strong>±30°</strong></li><li><span>Actuator strength</span><strong>0.85–1.05×</strong></li><li><span>Control delay</span><strong>0–50 ms</strong></li>
            </ul><p>Size 1.10× was the only static task failure. Force pulses lasted 0.20 s and reached a direction-dependent drop boundary at five times cube weight.</p></div>
          </div>
        </div></section>

        <section className="case-section" id="dataset"><div className="shell">
          <div className="case-section-heading wide"><p>05 · Validated pilot dataset</p><h2>Dense contact trajectories with explicit outcomes</h2></div>
          <div className={styles.datasetLead}><div><strong>200</strong><span>episodes</span></div><div><strong>773,131</strong><span>timesteps at 100 Hz</span></div><div><strong>76.5%</strong><span>final task success</span></div><div><strong>0 / 0</strong><span>NaN / Inf values</span></div></div>
          <div className={styles.datasetGrid}>
            <div className="results-table-wrap"><table className="results-table"><caption>Mutually exclusive final episode outcomes</caption><thead><tr><th>Outcome</th><th>Episodes</th><th>Share</th></tr></thead><tbody>{datasetRows.map(([label, count, share]) => <tr key={label}><th>{label}</th><td>{count}</td><td>{share}</td></tr>)}</tbody></table><p className={styles.dataNote}>Splits: 140 train · 30 validation · 15 IID test · 15 OOD test. All 200 episodes passed full physics-integrity validation.</p></div>
            <figure className="compact-figure"><ProjectImage src="/projects_picture/orca-contactworld/contact-force-slip.png" alt="Mean index and middle contact normal force aligned around detected slip events in 180 ContactWorld pilot episodes" /><figcaption><strong>Slip-aligned sensing.</strong> Across 180 events, index and middle normal forces increased by 0.334 N and 0.362 N from the early to pre-slip windows. This is descriptive evidence, not a trained predictor.</figcaption></figure>
          </div>
        </div></section>

        <section className="case-section case-section-dark" id="ball-catch"><div className="shell">
          <div className="case-section-heading wide"><p>06 · Dynamic extension</p><h2>From a stable cube to a ball in flight</h2></div>
          <div className={styles.ballIntro}><p>The isolated ball task starts a 45 g, 18 mm-radius sphere 35 mm above the palm with a scripted upward velocity. From that release boundary onward, flight, collision, finger contact, miss, drop and retention are simulated physically.</p><div className={styles.ballFlow} role="img" aria-label="A scripted release feeds physical ball flight and a ballistic contact controller; a four-dimensional PPO residual adjusts catch point, closure timing and grip balance before mapping to 24 actuator targets"><span>Scripted release</span><i>→</i><span>Physical flight</span><i>→</i><span>Ballistic + contact reference</span><b>+</b><span>4-D PPO residual</span><i>→</i><span>24 actuators</span></div></div>
          <figure className={`${styles.ballFigure} evidence-figure`}><div className="evidence-image"><ProjectImage src="/projects_picture/orca-contactworld/ball-catch.webp" alt="Selected held-out MuJoCo ball-catch recovery case comparing the scripted reference with residual PPO, alongside aggregate evaluation metrics" /></div><figcaption><strong>Selected recovery case, with aggregate context.</strong> Seed 20109 changes from a 33.8 cm miss under the reference to a 2.2 cm catch error with the residual. The overall policy advantage is intentionally shown beside it.</figcaption></figure>
          <div className={styles.ballResults}><div><small>200 held-out launches</small><strong>53.0%</strong><span>reference catch rate</span></div><div className={styles.ballBest}><small>10k PPO steps · seed 41</small><strong>53.5%</strong><span>residual-policy catch rate</span></div><div><small>Mean final catch error</small><strong>17.66 → 17.48 cm</strong><span>reference → residual PPO</span></div></div>
          <p className={styles.boundaryNote}>Scientific boundary: this is a learned catch correction with a scripted release—not a learned throw, handover, two-ball trick or juggling policy. The +0.5 percentage-point gain confirms that the residual training/evaluation path works, but it is not yet a compelling performance improvement.</p>
        </div></section>

        <section className="case-section case-section-tinted" id="limitations"><div className="shell case-copy-grid">
          <div className="case-section-heading"><p>07 · Limitations and roadmap</p><h2>What the evidence supports today</h2></div>
          <div><ul className="limitations-list">{limitations.map((item) => <li key={item}>{item}</li>)}</ul><div className="future-work"><h3>Next research gates</h3><p>First improve catch performance by at least five percentage points across three training seeds. Then add a learned release and validate one complete toss/catch cycle. Only after those controls are reliable: train the predictive ContactWorld model, compare predictive with reactive recovery, and consider a second object.</p></div></div>
        </div></section>

        <section className="case-section case-stack-section"><div className="shell"><p className="case-kicker">Technical stack</p><div className="case-stack-list">{['Python', 'MuJoCo', 'Gymnasium', 'PyTorch', 'PPO', 'OpenArm v2', 'ORCA v2 hand', 'Semantic contact sensing', 'HDF5', 'NumPy', 'Matplotlib'].map((item) => <span key={item}>{item}</span>)}</div><div className="case-closing-links"><a href={assetPath('/projects/')}>Explore all projects →</a></div></div></section>
      </main>
      <SiteFooter />
    </>
  )
}
