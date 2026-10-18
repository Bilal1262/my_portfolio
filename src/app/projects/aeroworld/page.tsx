import type { Metadata } from 'next'
import ProjectImage from '../../components/ProjectImage'
import { SiteFooter, SiteHeader } from '../../components/PortfolioUI'
import { assetPath } from '../../lib/paths'

export const metadata: Metadata = {
  title: 'AeroWorld — Reliability-Gated Visual Dynamics Learning',
  description:
    'A research case study on camera-informed residual correction for future drone-motion prediction, evaluated with frozen models on real flight recordings.',
  keywords: ['AeroWorld', 'drone dynamics prediction', 'robot learning', 'computer vision', 'PyTorch', 'GRU', 'ResNet-18'],
  openGraph: {
    title: 'AeroWorld — Reliability-Gated Visual Dynamics Learning',
    description: '12.75% lower mean 3D displacement error than a control-and-IMU baseline across four additional real-flight recordings.',
    url: '/projects/aeroworld/',
    type: 'article',
    images: [{
      url: '/projects_picture/aeroworld/holdout_by_flight.png',
      width: 1312,
      height: 720,
      alt: 'Frozen-model displacement error across four additional flight recordings'
    }]
  }
}

const developmentResults = [
  { method: 'Control + IMU', value: '0.7017 m' },
  { method: 'Static RGB fusion', value: '0.8187 m' },
  { method: 'Temporal RGB fusion', value: '0.7708 m' },
  { method: 'AeroWorld-V3 gated correction', value: '0.5656 m' }
]

const holdoutFlights = [
  { flight: '01a · ellipse', control: '0.6389', temporal: '0.6983', gated: '0.5844' },
  { flight: '02a · ellipse', control: '0.5965', temporal: '0.6802', gated: '0.5741' },
  { flight: '13a · trackRATM', control: '0.7336', temporal: '0.7955', gated: '0.6331' },
  { flight: '17a · trackRATM', control: '0.7149', temporal: '0.9125', gated: '0.5897' }
]

const limitations = [
  'The experiments evaluate offline future-displacement prediction; they do not demonstrate autonomous or closed-loop drone control.',
  'The model does not receive candidate future actions and is not yet a complete action-conditioned visual world model for planning.',
  'The sigmoid gate is a learned mixing weight, not a calibrated estimator of camera reliability or predictive uncertainty.',
  'A control-only residual-correction ablation is still needed to isolate the benefit of visual input from the residual architecture itself.',
  'The four holdout IDs are separate recordings, but recordings may share the same physical track or arena.',
  'The 2,668 overlapping temporal windows per seed are correlated samples and should not be read as independent statistical trials.'
]

export default function AeroWorldPage() {
  return (
    <>
      <SiteHeader page="projects" />
      <main id="top" className="case-study aeroworld-page">
        <section className="case-hero">
          <div className="shell">
            <a className="case-back" href={assetPath('/projects/')}>← All projects</a>
            <div className="case-hero-grid">
              <div className="case-hero-copy">
                <p className="case-kicker">Aerial robot learning · Independent research</p>
                <h1>AeroWorld</h1>
                <h2>Reliability-Gated Visual Dynamics Learning</h2>
                <p className="case-deck">Predicting high-speed drone motion using real flight recordings, temporal vision and control-aware learning.</p>
                <div className="case-tags" aria-label="Technical stack">
                  {['PyTorch', 'ResNet-18', 'GRU', 'Temporal Vision', 'Drone Dynamics'].map((item) => <span key={item}>{item}</span>)}
                </div>
                <a className="case-dataset-link" href="https://github.com/tii-racing/drone-racing-dataset" target="_blank" rel="noreferrer">Race Against the Machine dataset ↗</a>
              </div>
              <div className="case-hero-result" aria-label="Principal result">
                <small>Frozen holdout result</small>
                <strong>12.75%</strong>
                <span>lower mean 3D displacement error</span>
                <p>vs. control + IMU · 4 additional flights · 3 seeds</p>
              </div>
            </div>
            <figure className="case-architecture-cover">
              <ProjectImage src="/projects_picture/aeroworld/aeroworld_architecture.svg" alt="AeroWorld architecture with frozen control predictor and gated visual residual correction" eager />
            </figure>
          </div>
        </section>

        <nav className="case-jump-nav" aria-label="Case study sections">
          <div className="shell">
            {[
              ['Overview', 'overview'], ['Evolution', 'evolution'], ['Architecture', 'architecture'],
              ['Method', 'method'], ['Results', 'results'], ['Limitations', 'limitations']
            ].map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
          </div>
        </nav>

        <section className="case-section" id="overview">
          <div className="shell case-copy-grid">
            <div className="case-section-heading"><p>01 · Overview</p><h2>When direct visual fusion is not enough</h2></div>
            <div className="case-prose">
              <p>Future drone motion depends on recent control commands and inertial motion, but onboard images can contain additional clues about turns, track geometry and scene-relative movement. During agile flight, extracting information that generalizes beyond a particular recording is difficult.</p>
              <p>AeroWorld investigates a narrow question: <strong>can a camera-informed residual correction improve future-motion prediction over a strong control-and-IMU baseline?</strong> The final model does not replace that baseline. It freezes the pretrained prediction and learns a bounded, visually informed adjustment whose contribution is controlled by a learned gate.</p>
              <aside className="research-question"><span>Research question</span><p>Can temporal visual evidence add useful corrections without sacrificing the stability of a control-based dynamics predictor?</p></aside>
            </div>
          </div>
        </section>

        <section className="case-section case-section-tinted" id="evolution">
          <div className="shell">
            <div className="case-section-heading wide"><p>02 · Research evolution</p><h2>Three experiments, one increasingly conservative hypothesis</h2></div>
            <div className="evolution-grid">
              <article><span>V1</span><h3>Start with direct fusion</h3><p>An initial ResNet-18 + GRU combined camera features with control and inertial history. Visual fusion did not consistently beat control-only prediction and showed overfitting.</p><small>Lesson: camera features are not automatically useful.</small></article>
              <article><span>V2</span><h3>Test the failure carefully</h3><p>Twelve flights and three seeds compared control-only, static RGB and temporal RGB models. Both direct visual variants were weaker on the development test split.</p><small>Lesson: preserve the strong motion prior.</small></article>
              <article className="selected"><span>V3</span><h3>Learn a gated correction</h3><p>The control model stays frozen. A temporal visual branch proposes a bounded residual, while a learned gate scales its contribution. Validation data determines whether to deploy it.</p><small>Outcome: selected for all three seeds.</small></article>
            </div>
          </div>
        </section>

        <section className="case-section" id="architecture">
          <div className="shell">
            <div className="case-section-heading wide"><p>03 · System architecture</p><h2>Vision corrects; the motion predictor anchors</h2></div>
            <div className="architecture-flow" role="img" aria-label="Camera and control histories flow through visual and baseline temporal branches, then gated visual correction is added to the baseline future displacement prediction">
              <div className="architecture-lane visual-lane">
                <div className="architecture-node"><small>Input</small><strong>Camera frames</strong><span>8 RGB observations</span></div><i aria-hidden="true">→</i>
                <div className="architecture-node"><small>Frozen</small><strong>ResNet-18</strong><span>512-D features</span></div><i aria-hidden="true">→</i>
                <div className="architecture-node"><small>Temporal</small><strong>Visual GRU</strong><span>features + differences</span></div><i aria-hidden="true">→</i>
                <div className="architecture-node accent"><small>Correction</small><strong>gate × residual</strong><span>bounded contribution</span></div>
              </div>
              <div className="architecture-lane control-lane">
                <div className="architecture-node"><small>Input</small><strong>Control + IMU</strong><span>7 channels · 8 steps</span></div><i aria-hidden="true">→</i>
                <div className="architecture-node"><small>Frozen</small><strong>Baseline GRU</strong><span>base displacement</span></div><i aria-hidden="true">+</i>
                <div className="architecture-node output"><small>Output</small><strong>Future 3D displacement</strong><span>0.2 · 0.5 · 1.0 s</span></div>
              </div>
            </div>
            <p className="architecture-note">The visual path uses both per-frame frozen ImageNet features and frame-to-frame feature differences. Its GRU also receives the control history. The gate is initialized conservatively, but it should be interpreted only as a learned mixing coefficient.</p>
          </div>
        </section>

        <section className="case-section case-section-dark" id="method">
          <div className="shell">
            <div className="case-section-heading wide"><p>04 · Dataset and methodology</p><h2>Flight-level separation, multiseed evaluation</h2></div>
            <div className="method-grid">
              <article><strong>20 Hz</strong><span>aligned image, control, gyro and pose samples</span></article>
              <article><strong>8 frames</strong><span>observation history spanning 0.35 seconds</span></article>
              <article><strong>3 horizons</strong><span>0.2, 0.5 and 1.0-second displacement</span></article>
              <article><strong>12 flights</strong><span>6 train · 3 validation · 3 development test</span></article>
              <article><strong>3 seeds</strong><span>42 · 43 · 44 for each learned method</span></article>
              <article><strong>4 more flights</strong><span>one-time evaluation with frozen checkpoints</span></article>
            </div>
            <div className="method-copy">
              <p>The source data comes from the public <a href="https://github.com/tii-racing/drone-racing-dataset" target="_blank" rel="noreferrer">Race Against the Machine drone-racing dataset ↗</a>. Complete recordings—not individual windows—were assigned to the development train, validation and test partitions. Motion-capture position supplies the supervised target and is not a learned-model input.</p>
              <p>Candidate checkpoints were selected on validation ADE. V3 was accepted only when its best validation error exceeded the frozen baseline by the configured margin. After that selection was locked, saved V2 and V3 checkpoints were loaded without optimization and evaluated on four recordings excluded from the 12-flight development split and from the two earlier V1 recordings.</p>
            </div>
          </div>
        </section>

        <section className="case-section" id="results">
          <div className="shell">
            <div className="case-section-heading wide"><p>05 · Experimental results</p><h2>The gain persists on additional frozen holdouts</h2></div>
            <div className="primary-result-grid">
              <article><small>Control + IMU</small><strong>0.6886 m</strong><span>seed SD 0.0088 m</span></article>
              <article><small>Temporal RGB fusion</small><strong>0.7987 m</strong><span>seed SD 0.0301 m</span></article>
              <article className="best"><small>AeroWorld-V3</small><strong>0.6008 m</strong><span>seed SD 0.0133 m</span></article>
            </div>
            <figure className="evidence-figure">
              <div className="evidence-image"><ProjectImage src="/projects_picture/aeroworld/holdout_by_flight.png" alt="Mean 3D displacement error for control-only, temporal RGB and gated AeroWorld models on each of four additional flight recordings" /></div>
              <figcaption><strong>Frozen holdout by flight.</strong> Bars are means across seeds 42, 43 and 44. AeroWorld-V3 is lower than the control baseline for every flight in every seed; these recordings were not used for training or checkpoint selection.</figcaption>
            </figure>
            <div className="results-table-wrap">
              <table className="results-table">
                <caption>Mean 3D displacement error by holdout recording, averaged across three seeds (metres)</caption>
                <thead><tr><th>Recording</th><th>Control + IMU</th><th>Temporal RGB</th><th>AeroWorld-V3</th></tr></thead>
                <tbody>{holdoutFlights.map((row) => <tr key={row.flight}><th>{row.flight}</th><td>{row.control}</td><td>{row.temporal}</td><td className="best-cell">{row.gated}</td></tr>)}</tbody>
              </table>
            </div>
            <div className="secondary-results">
              <div>
                <p className="mini-label">Development split</p><h3>Direct fusion established the need for a different design</h3>
                <ul>{developmentResults.map((row) => <li key={row.method}><span>{row.method}</span><strong>{row.value}</strong></li>)}</ul>
                <p>The gated result is 19.39% below the control-only mean on the three development test flights. This split guided the research and is not presented as the final independent result.</p>
              </div>
              <figure className="compact-figure"><ProjectImage src="/projects_picture/aeroworld/v3_comparison.png" alt="AeroWorld development test split comparison showing gated correction below the control and temporal RGB errors" /><figcaption>V3 comparison on the repeatedly inspected development test split.</figcaption></figure>
            </div>
            <figure className="evidence-figure validation-figure">
              <div className="evidence-image"><ProjectImage src="/projects_picture/aeroworld/v2_validation_curves.png" alt="Validation error curves for control-only, static RGB and temporal RGB models for seed 42" /></div>
              <figcaption><strong>Why V3 was needed.</strong> The seed-42 V2 validation curve shows the control model continuing to improve while direct static and temporal visual fusion plateaued at higher error. The plot is diagnostic evidence from validation, not a final test result.</figcaption>
            </figure>
          </div>
        </section>

        <section className="case-section case-section-tinted" id="limitations">
          <div className="shell case-copy-grid">
            <div className="case-section-heading"><p>06 · Limitations and next steps</p><h2>What this result does—and does not—show</h2></div>
            <div>
              <ul className="limitations-list">{limitations.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="future-work"><h3>Next experiments</h3><p>Run the control-only residual ablation, calibrate or replace the gate with an explicit reliability objective, evaluate environment-level generalization, and extend the predictor to candidate future action sequences before studying closed-loop planning.</p></div>
            </div>
          </div>
        </section>

        <section className="case-section case-stack-section">
          <div className="shell">
            <p className="case-kicker">Technical stack</p>
            <div className="case-stack-list">{['Python', 'PyTorch', 'ResNet-18', 'GRU', 'Temporal visual features', 'Gated residual learning', 'NumPy', 'Pandas', 'Matplotlib', 'NVIDIA CUDA'].map((item) => <span key={item}>{item}</span>)}</div>
            <div className="case-closing-links"><a href="https://github.com/tii-racing/drone-racing-dataset" target="_blank" rel="noreferrer">Dataset and attribution ↗</a><a href={assetPath('/projects/')}>Explore all projects →</a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
