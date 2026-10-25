import type { Metadata } from 'next'
import ProjectImage from '../../components/ProjectImage'
import { SiteFooter, SiteHeader } from '../../components/PortfolioUI'
import { assetPath } from '../../lib/paths'
import styles from './surgnav.module.css'

export const metadata: Metadata = {
  title: 'SurgNav-RT | Calibrated RGB-D Endoscopic Navigation',
  description:
    'A reproducible single-sequence phantom study of calibrated RGB-D endoscopic odometry, learned depth, surface registration and pose-consistent augmented reality.',
  keywords: [
    'SurgNav-RT',
    'endoscopic navigation',
    'medical computer vision',
    'RGB-D visual odometry',
    'augmented reality',
    'Scaramuzza camera model',
    'C3VDv2'
  ],
  openGraph: {
    title: 'SurgNav-RT | Calibrated RGB-D Endoscopic Navigation',
    description:
      'A 454-frame phantom study with explicit oracle-input accounting, robust odometry, learned-depth ablation and registration failure analysis.',
    url: '/projects/surgnav-rt/',
    type: 'article',
    images: [{
      url: '/projects_picture/surgnav-rt/surgnav-cover.webp',
      width: 1280,
      height: 720,
      alt: 'C3VDv2 endoscopic frame with reference, baseline and robust RGB-D camera trajectories'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SurgNav-RT | Calibrated RGB-D Endoscopic Navigation',
    description:
      'Reproducible phantom-data evaluation of endoscopic odometry, learned depth, surface registration and pose-consistent AR.',
    images: ['/projects_picture/surgnav-rt/surgnav-cover.webp']
  }
}

const comparisonRows = [
  ['Mean absolute translation error', 'mm', '4.489', '3.553', '−20.9%'],
  ['Median absolute translation error', 'mm', '4.296', '2.910', '−32.3%'],
  ['Final-frame translation error', 'mm', '2.403', '2.748', '+14.4%'],
  ['Mean absolute rotation error', 'deg', '3.188', '2.622', '−17.7%'],
  ['Mean pose-induced AR displacement', 'px', '49.553', '35.842', '−27.7%'],
  ['Valid adjacent-frame estimates', 'count', '453 / 453', '453 / 453', '0']
]

const limitations = [
  {
    title: 'External validity',
    text: 'The principal evaluation uses one 454-frame silicone-colon-phantom sequence. It does not establish robustness across anatomies, acquisition devices, procedures or patients.'
  },
  {
    title: 'Oracle inputs',
    text: 'Dataset depth is used for the complete-sequence RGB-D estimate and reconstruction; current-frame reference depth also supports AR occlusion. This is not an RGB-only deployment result.'
  },
  {
    title: 'Learned depth',
    text: 'The contiguous train/validation/test split lies within one sequence. Temporal correlation may make the reported holdout error optimistic relative to cross-sequence deployment.'
  },
  {
    title: 'AR endpoint',
    text: 'AR displacement measures the difference between projections under estimated and reference camera poses. It is not anatomical target-registration error and has no clinical tolerance interpretation.'
  },
  {
    title: 'Registration identifiability',
    text: 'Tubular geometry admits plausible but incorrect alignments: independent registration has a low surface residual while remaining 17.782 mm and 15.028° from the reference transform.'
  },
  {
    title: 'Statistical scope',
    text: 'Results are descriptive paired measurements on a deterministic sequence. No confidence interval or population-level significance claim is made.'
  }
]

export default function SurgNavPage() {
  return (
    <>
      <SiteHeader page="projects" />
      <main id="top" className={`case-study ${styles.page}`}>
        <section className={`case-hero ${styles.hero}`}>
          <div className="shell">
            <a className="case-back" href={assetPath('/projects/')}>← All projects</a>
            <div className="case-hero-grid">
              <div className="case-hero-copy">
                <p className="case-kicker">Research case study · Medical computer vision</p>
                <h1>SurgNav-RT</h1>
                <h2>Calibrated RGB-D odometry for endoscopic navigation and pose-consistent AR.</h2>
                <p className="case-deck">
                  A reproducible phantom-data investigation of robust 6-DoF camera-motion estimation
                  under omnidirectional optics, with explicit oracle-input accounting, learned-depth
                  ablation and failure-aware surface-registration analysis.
                </p>
                <div className="case-tags" aria-label="Technical methods">
                  {['C3VDv2', 'Scaramuzza OCam', 'RGB-D Odometry', 'SE(3)', 'PyTorch'].map((item) => <span key={item}>{item}</span>)}
                </div>
                <a className="case-dataset-link" href="https://durrlab.github.io/C3VDv2/" target="_blank" rel="noreferrer">Dataset documentation and attribution ↗</a>
              </div>
              <div className="case-hero-result" aria-label="Principal result">
                <small>Primary endpoint · same-sequence comparison</small>
                <strong>−20.9%</strong>
                <span>mean absolute translation error</span>
                <p>4.489 → 3.553 mm · 454 frames · oracle-depth RGB-D</p>
              </div>
            </div>
            <div className={styles.studyStrip} aria-label="Study summary">
              <div><small>Dataset</small><strong>C3VDv2</strong></div>
              <div><small>Sequence</small><strong>c1_ascending_t1_v2</strong></div>
              <div><small>Study unit</small><strong>454 frames / 453 transitions</strong></div>
              <div><small>Evidence level</small><strong>Single-sequence phantom study</strong></div>
            </div>
            <figure className={`${styles.heroFigure} evidence-figure`}>
              <div className={styles.heroImage}>
                <ProjectImage src="/projects_picture/surgnav-rt/surgnav-cover.webp" alt="C3VDv2 endoscopic frame beside reference, baseline and robust RGB-D trajectories" eager />
              </div>
              <figcaption><strong>Figure 1 · Study overview.</strong> A C3VDv2 phantom frame and the measured camera trajectories from the 454-frame evaluation. The imagery is acquired from a silicone colon phantom; it is not patient data.</figcaption>
            </figure>
            <figure className={styles.videoFigure}>
              <div className={styles.videoHeading}><span>Reproducibility artifact</span><p>65 s · measured outputs · 1280 × 720</p></div>
              <video controls playsInline preload="metadata" poster={assetPath('/projects_picture/surgnav-rt/surgnav-cover.webp')}>
                <source src={assetPath('/projects_picture/surgnav-rt/surgnav-demo.mp4')} type="video/mp4" />
              </video>
              <figcaption><strong>Supplementary video.</strong> The recording presents dataset frames, tracked correspondences, depth estimates, reconstructed trajectories and synthetic reference anchors produced by the evaluated pipeline. It contains no clinical detections.</figcaption>
            </figure>
          </div>
        </section>

        <nav className="case-jump-nav" aria-label="Case study sections"><div className="shell">
          {[['Abstract', 'abstract'], ['Protocol', 'protocol'], ['Method', 'method'], ['Results', 'results'], ['Depth', 'depth'], ['Registration', 'registration'], ['Validity', 'validity']].map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </div></nav>

        <section className="case-section" id="abstract">
          <div className="shell case-copy-grid">
            <div className="case-section-heading"><p>01 · Abstract</p><h2>Question, intervention and principal finding</h2></div>
            <div className="case-prose">
              <p className={styles.abstractLead}>Endoscopic camera tracking is degraded by non-pinhole optics, specular reflections, low texture and short working distances. This study asks whether calibrated correspondence rejection and robust rigid refinement reduce accumulated pose error, relative to the reproduced Stage 3 baseline, without using reference camera poses or optical flow during estimation.</p>
              <p>The proposed estimator combines masked pyramidal Lucas–Kanade tracking, forward–backward consistency, 2-D geometric rejection, 3-D RANSAC and confidence-weighted rigid refinement. On the complete 454-frame sequence, mean absolute translation error decreased from 4.489 to 3.553 mm and mean rotation error from 3.188° to 2.622°, with all 453 adjacent-frame updates retained. Mean pose-induced anchor displacement decreased from 49.553 to 35.842 px. The final-frame translation error increased by 14.4%, indicating that improved average accuracy did not uniformly reduce terminal drift.</p>
              <aside className="research-question"><span>Interpretation</span><p>The evidence supports a sequence-specific improvement in average pose accuracy under oracle-depth conditions. It does not yet support cross-scene generalization, RGB-only navigation or clinical use.</p></aside>
            </div>
          </div>
          <div className={`shell ${styles.contributionGrid}`}>
            <article><span>Contribution 01</span><h3>Calibrated geometry</h3><p>A tested Scaramuzza projection/unprojection implementation with explicit pose, flow, depth and unit conventions.</p></article>
            <article><span>Contribution 02</span><h3>Robust odometry</h3><p>A layered 2-D/3-D outlier-rejection and weighted-refinement pipeline evaluated against an exact reproduced baseline.</p></article>
            <article><span>Contribution 03</span><h3>Negative-result analysis</h3><p>A registration study showing why low nearest-surface residual is insufficient evidence of correct anatomical alignment.</p></article>
          </div>
        </section>

        <section className="case-section case-section-dark" id="protocol">
          <div className="shell">
            <div className="case-section-heading wide"><p>02 · Experimental protocol</p><h2>Inputs, references and endpoints are separated explicitly</h2></div>
            <div className={styles.protocolGrid}>
              <article><small>Estimation inputs</small><h3>What the method receives</h3><ul><li>Adjacent endoscopic RGB frames</li><li>Dataset axial depth for each frame</li><li>Supplied OCam calibration</li></ul></article>
              <article><small>Evaluation-only references</small><h3>What does not enter estimation</h3><ul><li>Ground-truth camera poses</li><li>Backward optical flow</li><li>Known frame-0 alignment, except in the labeled reference ICP condition</li></ul></article>
              <article><small>Prespecified endpoints</small><h3>What is measured</h3><ul><li>Absolute translation and rotation error</li><li>Flow endpoint error for tracked features</li><li>Pose-induced AR displacement</li><li>Valid adjacent-frame updates</li></ul></article>
            </div>
            <div className={styles.protocolNote}><strong>Comparison design.</strong><p>Baseline and robust estimators process frames 0–453 under the same camera model, depth source, pose convention and evaluation code. The robust method uses a 0.75 mm 3-D RANSAC threshold followed by iteratively reweighted least squares. Reported percentage changes are descriptive relative differences on this sequence.</p></div>
            <div className={styles.authorship}><span>Research ownership</span><p>I reproduced the original four-stage pipeline; implemented the calibrated geometry, robust odometry, learned-depth and registration extensions; designed the evaluations; audited oracle dependencies; and produced the tests, figures, interactive workbench and technical demonstration.</p></div>
          </div>
        </section>

        <section className="case-section" id="method">
          <div className="shell">
            <div className="case-section-heading wide"><p>03 · Method</p><h2>Calibrated geometry precedes robust motion estimation</h2></div>
            <figure className={styles.architectureFigure}>
              <ProjectImage src="/projects_picture/surgnav-rt/architecture.svg" alt="SurgNav-RT architecture separating image tracking, oracle and predicted depth, OCam geometry, pose estimation, reconstruction, registration and AR" />
              <figcaption><strong>Figure 2 · System architecture.</strong> The primary oracle-depth pathway and experimental learned-depth pathway share the same calibrated geometry, pose-estimation and evaluation components.</figcaption>
            </figure>
            <ol className={styles.methodSteps}>
              <li><span>01</span><div><h3>Mask and track</h3><p>Exclude the black image boundary and high-intensity specular regions; detect Shi–Tomasi corners; propagate them with pyramidal Lucas–Kanade flow.</p></div></li>
              <li><span>02</span><div><h3>Reject inconsistent evidence</h3><p>Apply forward–backward consistency and 2-D RANSAC before depth lifting, then remove 3-D outliers with a 0.75 mm robust threshold.</p></div></li>
              <li><span>03</span><div><h3>Estimate rigid motion</h3><p>Unproject axial depth through the Scaramuzza model and estimate the adjacent-frame SE(3) transform with confidence-weighted IRLS.</p></div></li>
              <li><span>04</span><div><h3>Compose and gate</h3><p>Compose camera-to-world poses; display persistent 3-D anchors only when observable match count, inlier ratio, residual and pose availability satisfy a hysteretic gate.</p></div></li>
            </ol>
            <div className={styles.figurePair}>
              <figure className="compact-figure"><ProjectImage src="/projects_picture/surgnav-rt/tracking.webp" alt="Endoscopic feature tracks with accepted 3-D inliers in green and rejected correspondences in red" /><figcaption><strong>Figure 3 · Correspondence diagnostics.</strong> Accepted 3-D inliers are shown in green and rejected correspondences in red after image-space and metric-space filtering.</figcaption></figure>
              <div className={styles.geometryFacts}>
                <p className="mini-label">Implementation invariants</p>
                <dl><div><dt>Projection model</dt><dd>Scaramuzza polynomial</dd></div><div><dt>Round-trip maximum</dt><dd>&lt; 0.00002 px</dd></div><div><dt>Depth convention</dt><dd>axial camera-Z · mm</dd></div><div><dt>Flow convention</dt><dd>current → previous</dd></div><div><dt>Pose convention</dt><dd>camera → world</dd></div><div><dt>Automated tests</dt><dd>12 / 12 passing</dd></div></dl>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-section-tinted" id="results">
          <div className="shell">
            <div className="case-section-heading wide"><p>04 · Primary results</p><h2>Average accuracy improves; terminal drift does not</h2></div>
            <div className="primary-result-grid">
              <article><small>Reproduced baseline</small><strong>4.489 mm</strong><span>mean translation error</span></article>
              <article className="best"><small>Robust weighted RGB-D</small><strong>3.553 mm</strong><span>20.9% relative reduction</span></article>
              <article><small>Tracking quality</small><strong>1.597 px</strong><span>mean flow endpoint error</span></article>
            </div>
            <figure className="evidence-figure"><div className="evidence-image"><ProjectImage src="/projects_picture/surgnav-rt/trajectory.webp" alt="Reference, reproduced baseline and robust RGB-D camera trajectories with per-frame translation error" /></div><figcaption><strong>Figure 4 · Full-sequence trajectory.</strong> The robust estimator lowers mean and median translation error across 454 frames. Its final-frame error is 2.748 mm versus 2.403 mm for the baseline, so the improvement should be interpreted as an average sequence effect rather than uniformly lower drift.</figcaption></figure>
            <div className="results-table-wrap"><table className="results-table">
              <caption>Table 1 · Paired descriptive results on c1_ascending_t1_v2, frames 0–453</caption>
              <thead><tr><th>Endpoint</th><th>Unit</th><th>Baseline</th><th>Robust RGB-D</th><th>Relative change</th></tr></thead>
              <tbody>{comparisonRows.map(([metric, unit, baseline, improved, change]) => <tr key={metric}><th>{metric}</th><td>{unit}</td><td>{baseline}</td><td className="best-cell">{improved}</td><td>{change}</td></tr>)}</tbody>
            </table></div>
            <div className={styles.resultInterpretation}>
              <span>Result interpretation</span>
              <p>All adjacent-frame motions were estimated successfully. The robust method improved the central tendency of both translation and rotation error and reduced the downstream AR displacement metric. The adverse final-frame result remains material: local gains do not prevent all accumulation patterns, and a single sequence cannot identify the conditions under which each estimator is preferable.</p>
            </div>
            <figure className={`${styles.arFigure} evidence-figure`}><div className="evidence-image"><ProjectImage src="/projects_picture/surgnav-rt/ar-reprojection.webp" alt="Pose-induced augmented-reality anchor displacement for baseline and robust trajectories over 454 frames" /></div><figcaption><strong>Figure 5 · Pose-induced anchor displacement.</strong> Using the same synthetic surface anchors and visibility protocol, the sequence mean decreases from 49.553 to 35.842 px. This endpoint isolates the image-space consequence of pose discrepancy; it is not anatomical landmark error.</figcaption></figure>
          </div>
        </section>

        <section className="case-section case-section-dark" id="depth">
          <div className="shell">
            <div className="case-section-heading wide"><p>05 · Learned-depth ablation</p><h2>Feasibility within one sequence, not evidence of generalization</h2></div>
            <div className={styles.depthMetrics}><article><strong>117,681</strong><span>trainable parameters</span></article><article><strong>3.265 mm</strong><span>test MAE</span></article><article><strong>4.448 mm</strong><span>test RMSE</span></article><article><strong>0.114</strong><span>test AbsRel</span></article></div>
            <figure className={styles.darkFigure}><ProjectImage src="/projects_picture/surgnav-rt/depth.webp" alt="Held-out endoscopic RGB, reference depth, Tiny U-Net prediction and absolute error map" /><figcaption><strong>Figure 6 · Contiguous temporal holdout.</strong> Frames 0–226 are used for training, 227–299 for validation and 300–453 for testing. The split prevents direct frame reuse but does not remove within-sequence appearance correlation.</figcaption></figure>
            <div className={styles.depthInterpretation}><p><strong>Downstream test.</strong> Replacing dataset depth with predicted depth produces 6.415 mm mean translation error over the 35.904 mm test path. The result demonstrates end-to-end compatibility, but underperforms the oracle-depth estimator and is not presented as a deployment-ready substitute.</p><p><strong>Measurement boundary.</strong> Reference poses are accessed only after inference for scoring. No cross-phantom or cross-device test was performed.</p></div>
          </div>
        </section>

        <section className="case-section" id="registration">
          <div className="shell">
            <div className="case-section-heading wide"><p>06 · Registration study</p><h2>Surface fit is not equivalent to transform correctness</h2></div>
            <figure className="evidence-figure"><div className="evidence-image"><ProjectImage src="/projects_picture/surgnav-rt/registration.webp" alt="Oracle-depth reconstruction before and after independently initialized alignment to the phantom mesh" /></div><figcaption><strong>Figure 7 · PCA-initialized trimmed ICP.</strong> Repeated tubular geometry permits a locally convincing surface fit at an incorrect global pose. This is a clinically relevant failure pattern because residual-only acceptance would not reveal the transform error.</figcaption></figure>
            <div className={styles.registrationGrid}>
              <article><small>Independent geometry-only estimate</small><strong>2.624 mm</strong><span>inlier RMSE</span><p>Threshold fitness is 0.9996, yet the transform differs from the reference by 17.782 mm and 15.028°. The estimate is rejected for navigation.</p></article>
              <article><small>Reference-initialized diagnostic</small><strong>1.143 mm</strong><span>inlier RMSE</span><p>ICP initialized with the known frame-0 transform demonstrates local refinement capacity. Because it uses privileged initialization, it is not counted as an independent registration result.</p></article>
            </div>
            <aside className={styles.negativeResult}><span>Research conclusion</span><p>The independent experiment falsifies the assumption that high overlap and low nearest-surface residual are sufficient validation criteria for this geometry. A deployable system requires identifiable landmarks, stronger priors or global ambiguity detection.</p></aside>
          </div>
        </section>

        <section className="case-section case-section-tinted" id="validity">
          <div className="shell">
            <div className="case-section-heading wide"><p>07 · Threats to validity</p><h2>Claims are bounded by the evidence actually collected</h2></div>
            <div className={styles.validityGrid}>{limitations.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
            <div className={styles.nextStudy}>
              <div><span>Next study</span><h3>From proof of method to evidence of generalization</h3></div>
              <p>A defensible next evaluation would freeze all hyperparameters before testing on independent C3VDv2 sequences and anatomies, report per-sequence distributions with uncertainty intervals, train depth across sequences, evaluate relocalization after tracking failure, and test registration against identifiable landmarks. Patient-data or clinical claims should follow only after those technical gates are satisfied.</p>
            </div>
          </div>
        </section>

        <section className="case-section case-stack-section"><div className="shell">
          <p className="case-kicker">Methods and tooling</p>
          <div className="case-stack-list">{['Python', 'OpenCV', 'NumPy', 'SciPy', 'PyTorch', 'Scaramuzza OCam', 'Lucas–Kanade', 'RANSAC', 'IRLS', 'SE(3)', 'ICP', 'Streamlit', 'Plotly', 'Pytest'].map((item) => <span key={item}>{item}</span>)}</div>
          <div className="case-closing-links"><a href="https://durrlab.github.io/C3VDv2/" target="_blank" rel="noreferrer">C3VDv2 dataset and attribution ↗</a><a href={assetPath('/projects/')}>Explore all projects →</a></div>
        </div></section>
      </main>
      <SiteFooter />
    </>
  )
}
