export type ProjectLink = {
  label: string
  href: string
}

export type ContextLogo = {
  name: string
  src: string
}

export type ProjectVideo = {
  src: string
  poster: string
  caption: string
  layout?: 'wide' | 'ultrawide'
}

export type RobotSystem =
  | 'marine'
  | 'mobile'
  | 'legged'
  | 'aerial'
  | 'manipulation'

export type Project = {
  id: string
  title: string
  subtitle: string
  period: string
  area: string
  category: string
  system: RobotSystem
  capabilities?: string[]
  status: 'Completed' | 'Ongoing' | 'Research Prototype'
  summary: string
  challenge: string
  architecture: string[]
  contribution: string
  role: string
  team: string
  evaluation: string
  results: string[]
  limitations?: string
  technologies: string[]
  cover: string
  gallery: string[]
  video?: ProjectVideo
  videos?: ProjectVideo[]
  links?: ProjectLink[]
  logos?: ContextLogo[]
  featured?: boolean
}

export const profile = {
  name: 'Bilal Ahmed',
  headline: 'Robotics Software & Autonomy Engineer',
  email: 'bk632723@gmail.com',
  location: 'Girona, Spain',
  github: 'https://github.com/Bilal1262',
  linkedin: 'https://www.linkedin.com/in/bilal131/',
  resume: '/resume/Bilal_Ahmed_Qaimkhani_CV.pdf',
  heroImage: '/projects_picture/minigirona_1.png',
  availability:
    'Open to robotics software, autonomy and research engineering roles across Europe.'
}

export const roles = [
  'marine robot autonomy',
  'mobile robot navigation',
  'legged robot learning',
  'aerial robot coordination',
  'robot manipulation'
]

export type CapabilityId =
  | 'perception'
  | 'localization'
  | 'navigation'
  | 'learning'
  | 'robot-software'

export const capabilityGroups: Array<{
  id: CapabilityId
  stage: string
  label: string
  summary: string
  projectIds: string[]
}> = [
  {
    id: 'perception',
    stage: 'Sense',
    label: 'Perception',
    summary: 'Stereo, sonar, vision and multimodal reconstruction in degraded field conditions.',
    projectIds: [
      'reconstruction',
      'aquaadapt',
      'aquanav-fm',
      'stereo-perception',
      'underwater-depth',
      'stereo-visual-slam',
      'colour-enhancement',
      'failure-aware-manipulation'
    ]
  },
  {
    id: 'localization',
    stage: 'Localize',
    label: 'Localization & SLAM',
    summary: 'Visual, bathymetric and multisensor state estimation for GPS-denied robots.',
    projectIds: [
      'bathygraph',
      'stereo-visual-slam',
      'minigirona',
      'aquanav-fm',
      'aquaadapt',
      'active-navigation',
      'mobile-autonomy'
    ]
  },
  {
    id: 'navigation',
    stage: 'Plan',
    label: 'Navigation & Planning',
    summary: 'Nav2, mission planning, exploration and collision-aware robot motion.',
    projectIds: [
      'tiago-navigation-integration',
      'minigirona',
      'frontier_exploration',
      'mobile-autonomy',
      'active-navigation',
      'marsim',
      'multi-robot'
    ]
  },
  {
    id: 'robot-software',
    stage: 'Act',
    label: 'ROS & Robotics Software',
    summary: 'Integrated ROS and ROS 2 systems, interfaces, validation and real-robot execution.',
    projectIds: [
      'minigirona',
      'tiago-navigation-integration',
      'maestro',
      'marsim',
      'reconstruction',
      'can-robots-code',
      'frontier_exploration',
      'mobile-autonomy',
      'tiago-assistant'
    ]
  },
  {
    id: 'learning',
    stage: 'Adapt',
    label: 'Robot Learning & AI',
    summary: 'Foundation models, reinforcement learning and agentic decision-making for robots.',
    projectIds: [
      'maestro',
      'failure-aware-manipulation',
      'aquaadapt',
      'aquanav-fm',
      'humanoid',
      'can-robots-code',
      'underwater-depth',
      'openvla',
      'tiago-assistant',
      'rl-pid-drone'
    ]
  }
]

export const experience = [
  {
    period: '2026–Present',
    organisation: 'Ocean Systems Lab, Heriot-Watt University',
    role: 'Visiting Scholar — Agentic Recovery for Marine Robotics',
    logo: '/companies_logo/herriot_watt.png',
    description:
      'Developing MAESTRO, a multi-agent ROS 2 framework for anomaly diagnosis, mission-impact reasoning and operator-approved recovery synthesis for autonomous underwater vehicles.'
  },
  {
    period: '2025',
    organisation: 'COE MARBLE Lab, University of Zagreb',
    role: 'Research Intern — Multimodal Underwater 3D Reconstruction',
    logo: '/companies_logo/coe_marble.png',
    description:
      'Developed stereo, sonar and vehicle-pose fusion methods for offshore-structure reconstruction and probabilistic reduction of sonar vertical ambiguity.'
  },
  {
    period: '2024–2025',
    organisation: 'CIRS Lab, University of Girona',
    role: 'Volunteer Researcher — MiniGirona AUV',
    logo: '/companies_logo/cirs_girona.png',
    description:
      'Contributed to sonar-based initialization, DVL/INS localization, mission planning, stereo perception and task-priority manipulation on a real autonomous underwater vehicle.'
  }
]

export const education = [
  {
    period: '2024–Present',
    degree: 'Erasmus Mundus Joint Master in Intelligent Field Robotic Systems',
    institution: 'University of Zagreb · University of Girona',
    result: 'GPA: 9.40/10.0',
    focus:
      'Autonomous systems · perception · localization · planning · robot learning'
  },
  {
    period: '2018–2022',
    degree: 'Bachelor of Mechatronics Engineering',
    institution: 'Mehran University of Engineering and Technology, Jamshoro',
    result: 'CGPA: 3.9/4.0 · 2nd in Faculty',
    focus: 'Mechatronics · control · embedded systems · robotics'
  }
]

export const research = [
  {
    type: 'Peer-Reviewed Paper',
    title:
      'Advancing Accessible Underwater Robotics: The Mini-Girona I-AUV at RAMI 2025',
    venue: 'ROBOT 2025 · Porto, Portugal',
    logo: '/companies_logo/rami_competition.png',
    links: [] as ProjectLink[]
  },
  {
    type: 'Research Presentation',
    title: 'Multimodal 3D Reconstruction of Offshore Structures',
    venue: 'Breaking the Surface 2025 · Cyprus',
    logo: '/companies_logo/breaking_the_surface.png',
    links: [] as ProjectLink[]
  },
  {
    type: 'Master Thesis',
    title:
      'MAESTRO: Agentic Fault Diagnosis and Recovery for Autonomous Underwater Robots',
    venue: 'Heriot-Watt University · 2026',
    logo: '/companies_logo/herriot_watt.png',
    links: [] as ProjectLink[]
  }
]

export const awards = [
  {
    achievement: 'First Place — Research Poster Competition',
    organisation: 'RAMI Marine Robots Competition',
    logo: '/companies_logo/rami_competition.png',
    description:
      'Recognised for research on multimodal underwater 3D reconstruction and offshore inspection.',
    year: 'June 2025',
    location: 'La Spezia, Italy'
  },
  {
    achievement: 'Second Place — Underwater Inspection & Maintenance Challenge',
    organisation: 'RAMI Marine Robots Competition',
    logo: '/companies_logo/rami_competition.png',
    description:
      'Contributed to the MiniGirona AUV autonomy stack used for navigation, inspection and intervention tasks.',
    year: 'June 2025',
    location: 'La Spezia, Italy'
  },
  {
    achievement: 'Second Prize — AI Agent Olympics',
    organisation: 'Milan AI Week',
    description:
      'Built a multi-agent invoice-auditing system combining LLM reasoning, hybrid retrieval and tamper-evident traceability.',
    year: '2026',
    location: 'Milan, Italy'
  }
]

export const projectCategories = [
  'All',
  'Marine',
  'Mobile',
  'Legged',
  'Aerial',
  'Manipulation'
]

export const skills = [
  {
    group: 'Robot Software',
    headline: 'Integrated software for autonomous robot systems.',
    items: [
      'ROS and ROS 2',
      'Python and C++',
      'Behavior Trees',
      'Testing and debugging'
    ],
    proof: 'Applied in MAESTRO, MiniGirona, TIAGo, MarsSim and mobile-robot autonomy projects.'
  },
  {
    group: 'Perception',
    headline: 'Perception across optical and range sensors.',
    items: [
      'Computer vision',
      'LiDAR and sonar',
      'Stereo vision',
      'Point-cloud reconstruction'
    ],
    proof: 'Used in underwater reconstruction, manipulation perception, rover sensing and stereo SLAM.'
  },
  {
    group: 'Localization & Mapping',
    headline: 'State estimation and mapping under uncertain sensing.',
    items: [
      'SLAM and visual odometry',
      'EKF and particle filters',
      'Pose graphs',
      'Bathymetric mapping'
    ],
    proof: 'Implemented for AUVs, mobile robots, stereo datasets and bathymetric mapping.'
  },
  {
    group: 'Navigation & Planning',
    headline: 'Navigation from mission goals to safe robot motion.',
    items: [
      'Nav2',
      'Path planning',
      'Behavior Trees',
      'Exploration'
    ],
    proof: 'Used in TIAGo commissioning, Unitree exploration, rover navigation and AUV missions.'
  },
  {
    group: 'Robot Learning & Embodied AI',
    headline: 'Learned policies and foundation models connected to robot actions.',
    items: [
      'PyTorch',
      'Reinforcement learning',
      'Behavior cloning',
      'VLA, VLM and LLM systems'
    ],
    proof: 'Demonstrated in locomotion, manipulation, recovery and robot-software generation.'
  },
  {
    group: 'Simulation',
    headline: 'Reproducible environments for robotics development and evaluation.',
    items: [
      'MuJoCo and Panda3D',
      'Gazebo and StoneFish',
      'Sensor simulation',
      'Benchmarking and evaluation'
    ],
    proof: 'Used to build MarsSim and evaluate navigation, learning and recovery systems.'
  }
]

export const projects: Project[] = [
  {
    id: 'tiago-navigation-integration',
    title: 'TIAGo Navigation Integration',
    subtitle:
      'ROS 2 and Nav2 Integration with Fleet Interfaces, Diagnostics and Commissioning',
    period: '2026',
    area: 'ROS 2 Navigation · Systems Integration',
    category: 'SLAM, Localization & Navigation',
    system: 'mobile',
    status: 'Research Prototype',
    featured: true,
    summary:
      'Integrated TIAGo navigation with ROS 2, Nav2, REST and MQTT interfaces, health monitoring and repeatable commissioning tests.',
    challenge:
      'A working Nav2 demo is not yet an integration-ready robot. External systems need stable command interfaces, readiness checks, clear mission states, pause/resume/cancel control, fault evidence and measurable acceptance results without coupling directly to Nav2 internals.',
    architecture: [
      'Mission interfaces accept goals from a ROS 2 PoseStamped topic, a FastAPI REST service and a VDA5050-inspired MQTT fleet subset',
      'A C++ integration adapter validates readiness, translates commands and manages goal, pause, resume and cancel state',
      'The adapter uses the standard Nav2 NavigateToPose action for planning, control, feedback and terminal results',
      'Gazebo simulates the TIAGo robot, LiDAR, odometry and motion while RViz exposes localization, costmaps and planned paths',
      'A parallel monitor checks sensor freshness, AMCL, planner, controller, goal progress and stuck conditions',
      'Commissioning and failure tooling writes CSV/JSON reports and MCAP evidence for repeatable diagnosis'
    ],
    contribution:
      'Designed and implemented the complete integration layer: the C++ Nav2 adapter, Python health and failure tooling, REST and MQTT fleet gateway, pause/resume/cancel behavior, commissioning scenarios, structured reports and launch orchestration.',
    role: 'Independent robotics software engineer and system integrator',
    team: 'Solo portfolio project built on the TIAGo simulation and Nav2 stack',
    evaluation:
      'Executed three repeatable navigation missions in the PAL office simulation, exercised mission control through ROS and REST, inspected live Gazebo/RViz behavior and ran a controlled localization-degradation test with structured evidence capture.',
    results: [
      'Completed 3 of 3 commissioning missions successfully',
      'Measured a mean navigation time of 8.53 seconds across the commissioning run',
      'Measured 0.23 m mean final position error; the 0.10 m acceptance target remains unmet and is reported as a tuning gap',
      'Verified readiness gating, goal feedback, stuck monitoring, pause/resume/cancel control and synthetic failure evidence'
    ],
    limitations:
      'Current validation is simulation-based. Mean final position error remains above the configured acceptance target, collision count is not reported because no collision-event source is configured, and the MQTT interface implements a deliberately scoped VDA5050-inspired subset rather than full standard compliance.',
    technologies: [
      'ROS 2 Humble',
      'Nav2',
      'C++',
      'Python',
      'FastAPI',
      'MQTT',
      'VDA5050',
      'Gazebo',
      'RViz',
      'MCAP'
    ],
    cover: '/projects_picture/tiago_navigation_integration.png',
    gallery: ['/projects_picture/tiago_navigation_architecture.png']
  },
  {
    id: 'failure-aware-manipulation',
    title: 'Failure-Aware Multimodal Manipulation',
    subtitle:
      'Behavior Cloning, Contact-Aware Failure Detection and Autonomous Recovery',
    period: '2026',
    area: 'Robot Learning · Contact-Rich Manipulation',
    category: 'Robot Learning & Manipulation',
    system: 'manipulation',
    status: 'Research Prototype',
    featured: true,
    summary:
      'Built contact-aware failure detection and autonomous recovery for behavior-cloned Franka peg insertion in MuJoCo.',
    challenge:
      'Contact-rich insertion compounds perception, alignment and force-control errors. A policy can achieve low held-out action error yet drift outside the demonstration distribution in closed loop, while recovery must respond without exceeding robot safety limits.',
    architecture: [
      'MuJoCo/Gymnasium square-peg environment with a collision-enabled Franka Menagerie presentation model and a checkpoint-compatible training proxy',
      'HDF5 pipeline for 200 demonstrations containing front and wrist RGB, joint state, gripper width, force/torque, actions, task phase and failure labels',
      'PyTorch state-only and multimodal vision/state/force behavior-cloning policies with deterministic training histories and checkpointed validation loss',
      'Windowed rule-based failure detector feeding a retry-limited recovery manager with regrasp, spiral search, withdraw/retry and safe-abort skills',
      'Seeded evaluation, controlled disturbance injection, structured metrics and truthful 16:9 rollout visualization'
    ],
    contribution:
      'Designed and implemented the complete project: simulator and Cartesian control, scripted demonstration policy, dataset schema, state and multimodal BC models, temporal failure rules, recovery skills, evaluation reports, tests and portfolio-ready visual diagnostics.',
    role: 'Independent robotics research engineer and developer',
    team: 'Solo research project',
    evaluation:
      'Collected 200 successful randomized demonstrations, compared state and multimodal BC on held-out transitions, executed both checkpoints in closed loop, and ran a controlled object-slip test on the collision-enabled Franka with measured detection, recovery, force and task outcome.',
    results: [
      'Completed the nominal collision-enabled Franka insertion in 110 control steps with 9.7 N peak measured force',
      'Detected a controlled OBJECT_SLIP, selected REGRASP once and resumed the task to successful insertion at step 175',
      'Kept the recovery rollout below the configured 60 N robot limit, with a measured peak of 38.0 N',
      'Reached best validation MSE of 0.002239 for State BC and 0.002102 for Multimodal BC; closed-loop rollouts exposed transfer-to-alignment covariate shift',
      'Validated the implementation with Ruff, mypy and 16 automated tests'
    ],
    limitations:
      'The learned checkpoints were trained on the lightweight proxy and did not complete end-to-end insertion within 500 steps. The selected object-slip recovery succeeded, but broader detector precision and recovery robustness still require evaluation across more seeds and contact disturbances before making general success-rate claims.',
    technologies: [
      'Python',
      'PyTorch',
      'MuJoCo',
      'Gymnasium',
      'Behavior Cloning',
      'Multimodal Learning',
      'Force/Torque Sensing',
      'Failure Recovery',
      'HDF5',
      'OpenCV'
    ],
    cover: '/projects_picture/failure_aware_manipulation_cover.png',
    gallery: [
      '/projects_picture/failure_aware_manipulation_live.png',
      '/projects_picture/failure_aware_manipulation_recovery.png',
      '/projects_picture/failure_aware_manipulation_training.png'
    ],
    videos: [
      {
        src: '/projects_picture/failure_aware_manipulation_success.mp4',
        poster: '/projects_picture/failure_aware_manipulation_cover.png',
        caption:
          'Collision-enabled Franka reference rollout: pick, transfer, align and insert with measured telemetry.',
        layout: 'wide'
      },
      {
        src: '/projects_picture/failure_aware_manipulation_recovery.mp4',
        poster: '/projects_picture/failure_aware_manipulation_recovery.png',
        caption:
          'Controlled object slip, online detection, autonomous regrasp and successful task resumption.',
        layout: 'wide'
      }
    ]
  },
  {
    id: 'bathygraph',
    title: 'BathyGraph-Lite',
    subtitle:
      'DR-Initialized Bathymetric Submap Registration and Pose-Graph Optimization',
    period: '2026',
    area: 'Underwater Mapping · Pose-Graph Optimization',
    category: 'SLAM, Localization & Navigation',
    system: 'marine',
    status: 'Research Prototype',
    featured: true,
    summary:
      'Built bathymetric pose-graph SLAM from real AUV dead-reckoning and multibeam records for GPS-denied navigation.',
    challenge:
      'Underwater vehicles accumulate dead-reckoning drift without GNSS, while sparse or repetitive seabed geometry makes reliable submap association and registration difficult.',
    architecture: [
      'Streaming index for 34,048,732 XYZ measurements and an exact-layout decoder for 97,318 AUVLib Cereal pings',
      'Quality-checked monotonic association of 296 measured submaps with representative DR states',
      'DR-proximity candidate generation followed by generalized ICP and explicit geometric quality gates',
      'Huber-robust GTSAM Pose2 optimization with trajectory, map-consistency and candidate-audit outputs'
    ],
    contribution:
      'Designed and implemented the complete pipeline: large-file ingestion, Cereal decoding, submap-to-ping association, point-cloud preprocessing, GICP registration, robust graph optimization, sensitivity analysis and reproducible reporting.',
    role: 'Independent researcher and developer',
    team: 'Solo research project using the published KTH Antarctica 2019 dataset',
    evaluation:
      'Ran all 296 embedded submaps and manually audited all seven proposed candidates independently of the algorithm decision. Repeated the experiment after excluding associations above 30 m and 20 m to test sensitivity to the inferred mapping.',
    results: [
      'Decoded 97,318 DR states and 36,087,441 multibeam points from the AUVLib Cereal archive',
      'Improved accepted-edge bathymetric overlap consistency by 6.3% while reducing the robust graph objective',
      'Reduced accepted-pair vertical RMS consistency from 2.219 m to 1.466 m after graph optimization',
      'Recorded TP=2, FP=0, FN=3 and TN=2 in the seven-candidate manual audit; results were unchanged by association-residual filtering'
    ],
    limitations:
      'No verified external trajectory ground truth is available. The ping association is quality-checked but inferred, the XYZ groups are already globally expressed, and only seven candidates with two accepted loops were observed. The exploratory terrain-observability gate showed no independent benefit.',
    technologies: [
      'Python',
      'AUVLib Cereal',
      'Open3D',
      'Generalized ICP',
      'GTSAM',
      'Pose Graphs',
      'Bathymetric Mapping'
    ],
    cover: '/projects_picture/bathygraph_map.png',
    gallery: [
      '/projects_picture/bathygraph_trajectory.png',
      '/projects_picture/bathygraph_navigation.png'
    ]
  },
  {
    id: 'aquanav-fm',
    title: 'AquaNav-FM',
    subtitle:
      'Foundation-Model Place Localization and Short-Horizon AUV Navigation',
    period: '2026',
    area: 'Underwater Localization · Foundation Models',
    category: 'Underwater & Marine Robotics',
    system: 'marine',
    capabilities: [
      'Visual Localization',
      'Foundation Models',
      'Sensor Fusion',
      'Robot Learning'
    ],
    status: 'Research Prototype',
    featured: true,
    summary:
      'Built an AQUALOC-based research system that adapts frozen DINOv2 descriptors for underwater place localization and connects the representation to depth-assisted localization and learned two-second AUV waypoints.',
    challenge:
      'Underwater appearance changes can break visual place recognition, while a useful robotics system must connect retrieval to synchronized vehicle state and navigation outputs without overstating place recognition as SLAM or path planning.',
    architecture: [
      'Synchronizes 4,586 AQUALOC camera frames with 45,859 IMU measurements, 1,120 depth records and the corrected COLMAP trajectory',
      'Uses a frozen DINOv2 ViT-S/14 encoder to produce normalized 384-dimensional global image descriptors',
      'Applies six deterministic appearance shifts at three severities: low light, colour loss, turbidity, backscatter, blur and marine snow',
      'Learns a zero-initialized 384→128→384 residual adapter with clean/degraded consistency, identity preservation and spatially distant negatives',
      'Retrieves reference poses by cosine similarity with a 10-second temporal exclusion and a 1.5 m correctness radius',
      'Connects adapted visual features to calibrated depth assistance and a learned relative waypoint at a two-second horizon'
    ],
    contribution:
      'Designed and implemented the complete repository: multimodal synchronization, DINOv2 feature caching, underwater degradation suite, residual-adapter training, leakage-aware retrieval evaluation, sensor experiments, waypoint prediction, portfolio figures and synchronized baseline-versus-adapted videos.',
    role: 'Independent robotics researcher and developer',
    team: 'Solo research portfolio project using the published AQUALOC dataset',
    evaluation:
      'Used a chronological 60/20/20 train, validation and test split on AQUALOC Harbor Sequence 01. Retrieval was measured on 180 eligible held-out queries after temporal exclusion, with clean and degraded views evaluated using Recall@K, coverage and metric position error.',
    results: [
      'Improved clean Recall@1 from 0.433 to 0.500 and Recall@5 from 0.528 to 0.572',
      'Reduced clean median localization error from 3.90 m to 1.50 m',
      'Changed 96 of 180 clean retrievals, correcting 18 baseline failures while regressing 6 baseline successes',
      'Reduced median two-second waypoint error from 1.09 m with raw DINOv2 features to 0.93 m with adapted visual features',
      'Retained mixed robustness results: marine snow, low light, backscatter and blur improved at medium severity, while turbidity degraded'
    ],
    limitations:
      'The experiment uses one AQUALOC sequence with environment overlap across its chronological split. Robustness gains are condition-dependent, calibrated depth did not improve median localization error, and the system is place-based localization with learned waypoint prediction rather than SLAM, obstacle avoidance or a complete path planner.',
    technologies: [
      'Python',
      'PyTorch',
      'DINOv2',
      'AQUALOC',
      'OpenCV',
      'Scikit-learn',
      'Visual Place Recognition',
      'Multimodal Synchronization'
    ],
    cover: '/projects_picture/aquanaV_cover.png',
    gallery: [
      '/projects_picture/aquanaV_results_summary.png',
      '/projects_picture/aquanaV_architecture.png',
      '/projects_picture/aquanaV_baseline_vs_adapted.png',
      '/projects_picture/aquanaV_waypoint_prediction.png'
    ],
    videos: [
      {
        src: '/projects_picture/aquanaV_comparison.mp4',
        poster: '/projects_picture/aquanaV_results_summary.png',
        caption:
          'Same held-out query and reference database: raw DINOv2 versus AquaNav-FM retrieval and localization error.',
        layout: 'wide'
      },
      {
        src: '/projects_picture/aquanaV_dinov2_baseline.mp4',
        poster: '/projects_picture/aquanaV_cover.png',
        caption:
          'Standalone raw DINOv2 baseline with retrieved references and trajectory-level localization error.',
        layout: 'wide'
      },
      {
        src: '/projects_picture/aquanaV_adapted_demo.mp4',
        poster: '/projects_picture/aquanaV_cover.png',
        caption:
          'Standalone AquaNav-FM adapted retrieval on the identical held-out evaluation protocol.',
        layout: 'wide'
      }
    ]
  },
  {
    id: 'aquaadapt',
    title: 'AquaAdapt',
    subtitle: 'Robust Underwater Place Recognition with DINOv2',
    period: '2026',
    area: 'Computer Vision · Self-Supervised Learning',
    category: 'Underwater & Marine Robotics',
    system: 'marine',
    status: 'Research Prototype',
    featured: true,
    summary:
      'Adapted DINOv2 for underwater place recognition under low light, haze, colour attenuation, blur and marine snow.',
    challenge:
      'Foundation visual descriptors are strong on clean imagery but underwater lighting loss, backscatter, colour attenuation and suspended particles can change retrieval rankings precisely when reliable loop closures are needed.',
    architecture: [
      'ROS1 image extraction at 5 Hz with TUM timestamp–pose association',
      'Frozen DINOv2 ViT-S/14 with a zero-initialized 384→512→384 residual adapter',
      'Multi-positive InfoNCE, DINO geometry preservation and clean/corrupt consistency',
      'Exact cosine retrieval with temporal exclusion and pose-based Recall@K evaluation'
    ],
    contribution:
      'Designed and implemented the complete research pipeline: bag ingestion, leakage-resistant manifests, controlled underwater augmentation, residual-adapter training, descriptor retrieval, robustness evaluation and qualitative reporting.',
    role: 'Independent researcher and developer',
    team: 'Solo research project',
    evaluation:
      'Trained on balanced MCLab1, MCLab2 and Fjord1 trajectories, then froze the checkpoint and evaluated on untouched Fjord2. Of 1,095 candidate queries, 665 had a valid geometric revisit after temporal exclusion.',
    results: [
      'Improved clean Recall@5 from 49.32% to 51.13% on held-out Fjord2',
      'Improved macro Recall@1 by +1.77, +3.34 and +5.41 percentage points at corruption severities 1–3',
      'Outperformed raw DINOv2 in all 15 corruption/severity comparisons',
      'Reached gains of +9.32 pp in severe low light and +8.57 pp under severe haze'
    ],
    limitations:
      'Fjord2 is an unseen trajectory rather than a completely unseen environment because Fjord1 is present during training. Clean Recall@1 improves by only 0.30 pp, and evaluation coverage is 60.73%; the strongest evidence is degradation robustness.',
    technologies: [
      'PyTorch',
      'DINOv2',
      'Self-Supervised Learning',
      'ROS1 Bags',
      'FAISS',
      'OpenCV'
    ],
    cover: '/projects_picture/aquaadapt_robustness.png',
    gallery: [
      '/projects_picture/aquaadapt_architecture.png',
      '/projects_picture/aquaadapt_retrieval.png',
      '/projects_picture/aquaadapt_training.png'
    ],
    video: {
      src: '/projects_picture/aquaadapt_retrieval_highlights.mp4',
      poster: '/projects_picture/aquaadapt_retrieval.png',
      caption:
        'Held-out Fjord2 retrievals under haze, low light, colour attenuation and marine snow'
    }
  },
  {
    id: 'maestro',
    title: 'MAESTRO',
    subtitle: 'Agentic Fault Recovery for Autonomous Underwater Robots',
    period: '2026–Present',
    area: 'Master Thesis · Agentic Robotics',
    category: 'LLM/VLM & Agentic Robotics',
    system: 'marine',
    status: 'Ongoing',
    featured: true,
    logos: [
      {
        name: 'Heriot-Watt University',
        src: '/companies_logo/herriot_watt.png'
      }
    ],
    summary:
      'Developed multi-agent fault diagnosis, mission-impact reasoning and operator-approved ROS 2 recovery for autonomous underwater missions.',
    challenge:
      'Long-duration AUV missions must diagnose and recover from sensor, localization and thruster faults despite incomplete pre-programmed recovery logic and limited communication.',
    architecture: [
      'Residual-based anomaly evidence',
      'Multi-agent diagnosis and mission-impact reasoning',
      'RAG-supported recovery generation',
      'Validation and operator approval before deployment'
    ],
    contribution:
      'Designed the multi-agent architecture, mission-impact reasoning, evaluation workflow and constrained ROS 2 code-generation pipeline.',
    role: 'Primary researcher and system architect',
    team: 'Research project supervised at Heriot-Watt University',
    evaluation:
      'Evaluated across 255 fault-recovery scenarios with model benchmarking, operator/judge modes and validated ROS 2 node generation.',
    results: [
      '89% recovery-decision accuracy across 255 scenarios',
      'Improved Coordinated Success Score from 2.42 to 3.92',
      '80% validated success across 50 generated ROS 2 nodes',
      'Operator approval retained before recovery deployment'
    ],
    limitations:
      'Current evaluation is primarily simulation-based; broader hardware trials remain ongoing.',
    technologies: ['ROS 2', 'LLM Agents', 'RAG', 'FAISS', 'StoneFish'],
    cover: '/projects_picture/maestro_cover.png',
    gallery: [
      '/projects_picture/maestro_1.png',
      '/projects_picture/maestro_2.png',
      '/projects_picture/maestro_3.png',
      '/projects_picture/maestro_4.png',
      '/projects_picture/maestro_5.png',
      '/projects_picture/maestro_6.png'
    ]
  },
  {
    id: 'minigirona',
    title: 'MiniGirona AUV Autonomy Stack',
    subtitle: 'Localization, Mission Planning, Perception and Manipulation',
    period: '2024–2025',
    area: 'CIRS Lab · Real-Robot Deployment',
    category: 'Underwater & Marine Robotics',
    system: 'marine',
    status: 'Completed',
    featured: true,
    logos: [
      {
        name: 'CIRS, University of Girona',
        src: '/companies_logo/cirs_girona.png'
      },
      {
        name: 'RAMI Marine Robots Competition',
        src: '/companies_logo/rami_competition.png'
      }
    ],
    summary:
      'Integrated sonar initialization, DVL/INS localization, behavior-tree missions, stereo perception and manipulation on the MiniGirona AUV.',
    challenge:
      'Underwater autonomy requires multiple perception, localization, planning and intervention modules to cooperate under poor visibility and uncertain sensing.',
    architecture: [
      'Mechanical-sonar voting initialization',
      'DVL/INS/sonar EKF localization',
      'Behavior-tree mission sequencing',
      'Stereo perception and task-priority manipulation'
    ],
    contribution:
      'Owned major parts of initialization, localization updates, mission integration, stereo perception and manipulation behavior development.',
    role: 'Autonomy and localization contributor',
    team: 'CIRS Lab MiniGirona research team',
    evaluation:
      'Validated in simulation and real-robot experiments and integrated into RAMI 2025 competition missions in La Spezia, Italy.',
    results: [
      '2nd place at RAMI 2025 in La Spezia, Italy',
      'Validated sonar-based initialization on MiniGirona',
      'Integrated navigation and manipulation into mission execution',
      'Research contribution published at ROBOT 2025'
    ],
    limitations:
      'Some modules were developed collaboratively; project ownership is described per subsystem.',
    technologies: ['AUV', 'ROS', 'Sonar', 'DVL', 'EKF', 'Behavior Trees'],
    cover: '/projects_picture/minigirona_2.png',
    gallery: [
      '/projects_picture/minigirona_1.png',
      '/projects_picture/minig_localization_cover.png',
      '/projects_picture/minig_manipulation_cover.png'
    ],
    links: [
      {
        label: 'Mission planning video',
        href: 'https://youtu.be/Nc9D36YvdUA'
      },
      {
        label: 'Manipulation video',
        href: 'https://youtu.be/vyJ8t69w2wo'
      }
    ]
  },
  {
    id: 'marsim',
    title: 'MarsSim',
    subtitle: 'A ROS 2 Simulator for Planetary Field Robotics',
    period: '2025–Present',
    area: 'Simulation · Planetary Robotics',
    category: 'Robot Simulation',
    system: 'mobile',
    status: 'Ongoing',
    featured: true,
    summary:
      'Built a ROS 2 planetary rover simulator with terrain-aware motion, environmental effects and configurable sensors.',
    challenge:
      'Planetary autonomy needs repeatable testing across terrain, wheel slip, sinkage, rocks, dust and degraded sensing.',
    architecture: [
      'Panda3D rendering and terrain system',
      'Rover motion and terramechanics abstractions',
      'Virtual camera, stereo, LiDAR and IMU sensors',
      'ROS 2 telemetry and autonomy interfaces'
    ],
    contribution:
      'Designed the simulator architecture, environment, sensor interfaces, rover abstractions and ROS 2 integration.',
    role: 'Independent developer',
    team: 'Solo project',
    evaluation:
      'Used to test perception, localization and navigation modules under configurable environmental conditions.',
    results: [
      'Publishes odometry, IMU, stereo, LiDAR and environment topics',
      'Supports terrain, dust, wind, rocks and lighting controls',
      'Provides reusable interfaces for autonomy experiments',
      'Demonstrated deployment of navigation and localization modules'
    ],
    limitations:
      'The simulator is a research and learning platform rather than a validated high-fidelity replacement for commercial physics engines.',
    technologies: ['ROS 2', 'Panda3D', 'Python', 'Sensors', 'Terramechanics'],
    cover: '/projects_picture/marsim_cover.png',
    gallery: [
      '/projects_picture/marsim_1.png',
      '/projects_picture/marsim_2.png',
      '/projects_picture/marsim_3.png',
      '/projects_picture/marsim_4.png'
    ],
    links: [
      {
        label: 'Video demonstration',
        href: 'https://youtu.be/t26hZjJ5NcQ?si=xdQssn14VgJZq20d'
      }
    ]
  },
  {
    id: 'reconstruction',
    title: 'Underwater 3D Reconstruction',
    subtitle: 'Stereo, Sonar and AUV-Pose Fusion for Offshore Inspection',
    period: '2025',
    area: 'COE MARBLE · Research Internship',
    category: 'Underwater & Marine Robotics',
    system: 'marine',
    status: 'Research Prototype',
    featured: true,
    logos: [
      {
        name: 'COE MARBLE',
        src: '/companies_logo/coe_marble.png'
      },
      {
        name: 'Breaking the Surface',
        src: '/companies_logo/breaking_the_surface.png'
      }
    ],
    summary:
      'Fused stereo depth, forward-looking sonar and AUV poses to reconstruct offshore structures underwater.',
    challenge:
      'Forward-looking sonar has weak vertical observability, making direct 3D reconstruction geometrically ambiguous.',
    architecture: [
      'FoundationStereo disparity',
      'AUV pose transformation',
      'Sonar feature extraction',
      'Particle-filter height estimation',
      'Point-cloud fusion'
    ],
    contribution:
      'Developed the multimodal fusion workflow, probabilistic height estimation and point-cloud generation pipeline.',
    role: 'Research intern and primary implementation contributor',
    team: 'COE MARBLE research team',
    evaluation:
      'Compared reconstruction consistency across multiple passes and examined the effect of probabilistic elevation estimation.',
    results: [
      'Generated dense stereo point clouds from AUV imagery',
      'Reduced sonar vertical ambiguity using particle filtering',
      'Produced multimodal offshore-structure reconstructions',
      'Presented the work at Breaking the Surface 2025'
    ],
    limitations:
      'Quantitative ground-truth evaluation is limited by the availability of calibrated underwater reference geometry.',
    technologies: ['FoundationStereo', 'Sonar', 'Particle Filter', 'PCL'],
    cover: '/projects_picture/sonar_cover.png',
    gallery: [
      '/projects_picture/sonar_project1.png',
      '/projects_picture/sonar_project2.png',
      '/projects_picture/sonar_project3.png',
      '/projects_picture/sonar_project4.png'
    ]
  },
  {
    id: 'humanoid',
    title: 'Humanoid PPO',
    subtitle: 'Curriculum-Based Locomotion and Navigation',
    period: '2026',
    area: 'Robot Learning · MuJoCo',
    category: 'Robot Learning & Manipulation',
    system: 'legged',
    status: 'Completed',
    featured: true,
    summary:
      'Trained a curriculum-based PPO policy for humanoid walking, goal reaching and obstacle navigation in MuJoCo.',
    challenge:
      'Training balance, locomotion and navigation simultaneously produced unstable policies and frequent falls.',
    architecture: [
      'MuJoCo humanoid environment',
      'PPO training pipeline',
      'Stage-specific reward functions',
      'Walking → goal → obstacle curriculum',
      'Automated evaluation scripts'
    ],
    contribution:
      'Implemented the environment, curriculum, reward design, training workflow and evaluation tooling.',
    role: 'Independent developer',
    team: 'Solo project',
    evaluation:
      'Evaluated each curriculum stage across five fixed evaluation episodes after tuning.',
    results: [
      'Completed 5/5 walking evaluations with 1,000-step episodes',
      'Reached goals in 5/5 evaluation runs',
      'Completed 5/5 obstacle runs without recorded collisions',
      'Progressed through a three-stage curriculum'
    ],
    limitations:
      'Evaluation used a small fixed set of simulation episodes and has not yet transferred to hardware.',
    technologies: ['PPO', 'MuJoCo', 'Stable-Baselines3', 'Curriculum Learning'],
    cover: '/projects_picture/ppo_cover.png',
    gallery: [],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/Bilal1262/Humanoid-Reinforcemnt-Learning'
      }
    ]
  },
  {
    id: 'can-robots-code',
    title: 'Can Robots Code?',
    subtitle: 'Self-Improving ROS 2 Code Generation and Validation',
    period: '2026',
    area: 'LLM Systems · Robotics Software',
    category: 'LLM/VLM & Agentic Robotics',
    system: 'manipulation',
    status: 'Completed',
    featured: true,
    summary:
      'Built an LLM pipeline that generates, validates and iteratively repairs ROS 2 robot software.',
    challenge:
      'General coding agents often generate plausible ROS 2 code that fails because of missing interfaces, package assumptions or runtime integration errors.',
    architecture: [
      'Prompt expansion',
      'RAG-supported implementation',
      'Syntax and package validation',
      'Execution testing',
      'Failure-driven refinement'
    ],
    contribution:
      'Designed and implemented the complete generation, validation and refinement loop.',
    role: 'Independent researcher and developer',
    team: 'Solo project',
    evaluation:
      'Evaluated on 50 ROS 2 tasks with separate checks for task expansion, syntax validity and executable behavior.',
    results: [
      '50/50 prompts expanded into detailed task specifications',
      '45/50 generated nodes were syntactically valid',
      '40/50 generated nodes executed successfully',
      'Validation feedback was reused for iterative improvement'
    ],
    limitations:
      'The benchmark contains 50 curated tasks and does not yet cover every ROS 2 package or hardware interface.',
    technologies: ['ROS 2', 'LLM', 'RAG', 'FAISS', 'Validation'],
    cover: '/projects_picture/code_cover.png',
    gallery: [
      '/projects_picture/code_1.png',
      '/projects_picture/code_2.png',
      '/projects_picture/code_3.png'
    ]
  },
  {
    id: 'active-navigation',
    title: 'Uncertainty-Aware Active Navigation',
    subtitle: 'Safety-Aware Planning under Degraded Perception',
    period: '2026',
    area: 'MarSim · Active Perception',
    category: 'SLAM, Localization & Navigation',
    system: 'mobile',
    status: 'Research Prototype',
    summary:
      'Implemented perception-aware rover navigation that seeks better viewpoints before entering uncertain regions.',
    challenge:
      'A robot should not commit to a path when perception is degraded by fog, occlusion or incomplete observations.',
    architecture: [
      'Depth/LiDAR uncertainty estimator',
      'Safety-aware planner cost',
      'Active viewpoint selection',
      'Condition-specific evaluation'
    ],
    contribution:
      'Implemented the complete uncertainty estimation, viewpoint selection and evaluation workflow.',
    role: 'Independent developer',
    team: 'Solo project',
    evaluation:
      'Compared collision rate, success rate, path efficiency and uncertainty under clear, foggy and occluded conditions.',
    results: [
      'Integrated uncertainty into navigation cost',
      'Triggered additional observations before risky motion',
      'Evaluated performance across three perception conditions'
    ],
    limitations:
      'Current evaluation is simulation-only and depends on the fidelity of the MarSim sensor models.',
    technologies: ['ROS 2', 'Active Perception', 'LiDAR', 'Depth', 'Planning'],
    cover: '/projects_picture/uncertainity.png',
    gallery: []
  },
  {
    id: 'stereo-perception',
    title: 'Underwater Stereo Manipulation Perception',
    subtitle: 'Detection, Depth and 3D Keypoint Extraction',
    period: '2025',
    area: 'Perception · Manipulation',
    category: 'Computer Vision',
    system: 'marine',
    status: 'Research Prototype',
    logos: [
      {
        name: 'CIRS, University of Girona',
        src: '/companies_logo/cirs_girona.png'
      }
    ],
    summary:
      'Estimated object pose for underwater manipulation using image enhancement, zero-shot detection, stereo depth and 3D keypoints.',
    challenge:
      'Manipulation requires stable geometric targets from visually degraded underwater images.',
    architecture: [
      'Underwater image enhancement',
      'YOLOE zero-shot detection',
      'Stereo disparity',
      'Point-cloud clustering',
      'PCA-based 3D keypoints'
    ],
    contribution:
      'Integrated the complete perception pipeline and implemented geometric keypoint extraction.',
    role: 'Primary perception developer',
    team: 'MiniGirona research context',
    evaluation:
      'Tested on valves, buoys and damaged-structure targets in underwater imagery.',
    results: [
      'Produced object-level 3D keypoints for manipulation planning',
      'Combined zero-shot detection with stereo geometry',
      'Integrated enhancement and point-cloud processing'
    ],
    limitations:
      'Performance depends on stereo calibration, visibility and object texture.',
    technologies: ['YOLOE', 'Stereo', 'PCL', 'PCA', 'Clustering'],
    cover: '/projects_picture/feature_cover.png',
    gallery: [
      '/projects_picture/key_feature1.png',
      '/projects_picture/key_feature2.png'
    ]
  },
  {
    id: 'frontier_exploration',
    title: 'Frontier-Based Autonomous Exploration for a Unitree Go1',
    subtitle: 'Autonomous SLAM, Navigation and Obstacle Avoidance',
    period: '2026',
    area: 'Robotics · Autonomous Navigation',
    category: 'Mobile Robotics',
    system: 'legged',
    status: 'Completed',

    summary:
      'Implemented LiDAR SLAM, frontier exploration and collision-aware navigation for a Unitree Go1 quadruped.',

    challenge:
      'The robot must build a consistent occupancy map, identify unexplored regions, generate collision-free paths and avoid becoming trapped near obstacles.',

    architecture: [
      'GMapping occupancy-grid SLAM',
      'Frontier detection with explore_lite',
      'Navfn global path planning',
      'DWA local obstacle avoidance',
      'Go1-specific velocity safety controller'
    ],

    contribution:
      'Integrated the complete exploration stack and developed a velocity safety layer for smooth Go1 motion, obstacle recovery and safe cmd_vel execution.',

    role: 'Independent developer',
    team: 'Independent robotics project',

    evaluation:
      'Evaluated in custom cluttered Gazebo environments using live SLAM maps, frontier goals, global paths, local trajectories and obstacle-avoidance behaviour.',

    results: [
      'Generated occupancy maps of previously unknown environments',
      'Enabled autonomous frontier selection and path replanning',
      'Integrated collision-aware global and local navigation',
      'Visualized SLAM, costmaps, paths and frontiers in RViz'
    ],

    limitations:
      'Navigation performance depends on accurate LiDAR-to-base transforms, odometry quality and environment-specific costmap tuning.',

    technologies: [
      'ROS1',
      'Python',
      'Gazebo',
      'RViz',
      'GMapping',
      'move_base',
      'Navfn',
      'DWA',
      'explore_lite',
      '2D LiDAR'
    ],

    cover: '/projects_picture/unitree.png',
    gallery: []
  },
  {
    id: 'mobile-autonomy',
    title: 'ROS 2 Mobile Robot Autonomy',
    subtitle: 'SLAM, Localization, Planning and Behavior Trees',
    period: '2024–2025',
    area: 'TurtleBot · Mobile Robotics',
    category: 'SLAM, Localization & Navigation',
    system: 'mobile',
    status: 'Completed',
    summary:
      'Built mobile-robot autonomy using LiDAR SLAM, probabilistic localization, classical planning and behavior-tree execution.',
    challenge:
      'Build and compare the core components of an end-to-end autonomy stack rather than isolated algorithms.',
    architecture: [
      'LiDAR mapping',
      'PF/KF/EKF localization',
      'A*/RRT/RRT*/Wavefront planning',
      'Behavior-tree execution',
      'ROS 2 interfaces'
    ],
    contribution:
      'Implemented the planners, filters, ROS 2 integration and behavior-tree execution.',
    role: 'Independent developer',
    team: 'Course and personal project work',
    evaluation:
      'Compared planning and state-estimation methods on common simulated environments.',
    results: [
      'Compared five classical planning methods',
      'Implemented PF, KF and EKF localization',
      'Connected RRT/RRT* planning to behavior-tree execution',
      'Produced a reusable ROS 2 mobile-autonomy workflow'
    ],
    limitations:
      'Most evaluation was performed in simulation; hardware transfer was partial.',
    technologies: ['ROS 2', 'SLAM', 'RRT*', 'EKF', 'Behavior Trees'],
    cover: '/projects_picture/turtlebot_localization.png',
    gallery: [
      '/projects_picture/turtlebot_plan.png',
      '/projects_picture/path_planning_cover.png',
      '/projects_picture/sim_localization_cover.png'
    ],
    links: [
      {
        label: 'Planning demonstration',
        href: 'https://youtu.be/V_S-zIa8rDM'
      },
      {
        label: 'Planner comparison',
        href: 'https://youtu.be/I-3rC5znRv4'
      }
    ]
  },
  {
    id: 'stereo-visual-slam',
    title: 'Stereo Visual Odometry & SLAM',
    subtitle: 'KITTI-Based Mapping and Trajectory Estimation',
    period: '2025–2026',
    area: 'Visual Localization · Computer Vision',
    category: 'Computer Vision',
    system: 'mobile',
    status: 'Completed',
    summary:
      'Implemented stereo visual odometry and SLAM with geometric estimation, bundle adjustment and loop closure.',
    challenge:
      'Recover consistent camera motion and map structure from stereo image sequences while limiting drift.',
    architecture: [
      'Feature detection and tracking',
      'Stereo matching and triangulation',
      'PnP pose estimation',
      'Bundle adjustment',
      'Loop closure and pose graph'
    ],
    contribution:
      'Implemented the complete visual-odometry and mapping workflow and evaluation scripts.',
    role: 'Independent developer',
    team: 'Academic project',
    evaluation:
      'Evaluated on KITTI using Absolute Trajectory Error and Relative Pose Error.',
    results: [
      'Built an end-to-end stereo odometry pipeline',
      'Added bundle adjustment and loop closure',
      'Evaluated trajectories with ATE and RPE'
    ],
    limitations:
      'Results are dataset-based and have not yet been deployed on a real vehicle.',
    technologies: ['Stereo Vision', 'KITTI', 'PnP', 'Bundle Adjustment', 'SLAM'],
    cover: '/projects_picture/visual_odometry_cover.png',
    gallery: [
      '/projects_picture/visual_odometry.png',
      '/projects_picture/visual_odometry2.png',
      '/projects_picture/visual_odometry3.png'
    ]
  },
  {
    id: 'multi-robot',
    title: 'Multi-Robot Coordination',
    subtitle: 'Flocking, Consensus and Auction-Based Task Allocation',
    period: '2024–2025',
    area: 'Multi-Agent Systems',
    category: 'Multi-Agent & Aerial Robotics',
    system: 'aerial',
    status: 'Completed',
    summary:
      'Implemented flocking, consensus formation and auction-based task allocation for coordinated aerial robots.',
    challenge:
      'Coordinate multiple robots from local information without a single low-level controller.',
    architecture: [
      'Reynolds flocking rules',
      'Consensus-based formation',
      'Auction-based task allocation',
      'Crazyflie simulation'
    ],
    contribution:
      'Implemented and evaluated the coordination and allocation algorithms.',
    role: 'Primary algorithm developer',
    team: 'Academic multi-agent project',
    evaluation:
      'Assessed group motion, formation behavior and distributed task assignment in simulation.',
    results: [
      'Achieved coordinated flock motion',
      'Implemented consensus-based formation',
      'Distributed tasks through auctions'
    ],
    limitations:
      'Evaluation was performed in simulation rather than on a large physical swarm.',
    technologies: ['Consensus', 'Flocking', 'Auctions', 'Crazyflie'],
    cover: '/projects_picture/consensus.png',
    gallery: [
      '/projects_picture/swarm_control.png',
      '/projects_picture/consensus.png'
    ],
    links: [
      {
        label: 'Flocking demonstration',
        href: 'https://youtu.be/9Q8QMtbf99w'
      }
    ]
  },
  {
    id: 'underwater-depth',
    title: 'Supervised vs Self-Supervised Underwater Depth Estimation',
    subtitle: 'Leakage-Free FLSea Evaluation, Domain-Shift Analysis and Metric Depth',
    period: '2025–2026',
    area: 'Deep Learning · Underwater Perception',
    category: 'Computer Vision',
    system: 'marine',
    status: 'Completed',
    summary:
      'Built a reproducible underwater metric-depth study comparing supervised Depth Anything V2, self-supervised Monodepth2, classical stereo and FoundationStereo under strict scene-level separation.',
    challenge:
      'Estimate metrically accurate depth despite underwater appearance degradation, sparse invalid labels and canyon-to-canyon domain shift—without leaking held-out canyon2 data into training or model selection.',
    architecture: [
      'Calibrated and rectified FLSea stereo ingestion with corrupt-TIFF preflight auditing',
      'Supervised Depth Anything V2 Metric Small fine-tuning on valid canyon1 depth only',
      'Self-supervised Monodepth2 trained from stereo photometric reconstruction',
      'Masked log-depth, metric Huber, multiscale-gradient and edge-aware losses',
      'Validation-selected 672 × 378 inference with native metric scale and no per-frame fitting',
      'Common-mask comparison against StereoSGBM and FoundationStereo'
    ],
    contribution:
      'Implemented dataset preparation, supervised and self-supervised training, masked losses, checkpoint gating, depth-range diagnostics, fair common-mask benchmarking and fixed-scale qualitative and 3D visualizations.',
    role: 'Independent researcher and developer',
    team: 'Solo research project',
    evaluation:
      'Trained on 3,417 canyon1 frames, selected configurations on 375 separate canyon1 validation frames and evaluated once on 2,345 valid held-out canyon2 frames using native metric depth from 0.45–12 m.',
    results: [
      'Reduced held-out AbsRel from 0.1995 to 0.1509 (24.35%)',
      'Reduced RMSE from 0.8623 m to 0.7593 m and increased δ1 from 0.7148 to 0.8111',
      'Maintained strict canyon1 train/validation and canyon2 test separation with no median or test-derived scaling',
      'Benchmarked supervised, self-supervised, StereoSGBM and FoundationStereo predictions on identical IDs and common masks',
      'Detected validation overfitting and rejected five additional fine-tuning epochs instead of promoting worse weights'
    ],
    limitations:
      'The final gain comes from validation-selected inference resolution rather than newly improved weights. FoundationStereo common-mask evidence is limited to two available frames, evaluation spans one training and one test canyon, and vertical striping was not measured with a dedicated metric.',
    technologies: ['PyTorch', 'Depth Anything V2', 'Monodepth2', 'StereoSGBM', 'FLSea'],
    cover: '/projects_picture/underwater_depth_cover.png',
    gallery: [
      '/projects_picture/underwater_depth_best_cases.png',
      '/projects_picture/underwater_depth_failure_cases.png',
      '/projects_picture/underwater_depth_benchmark.png',
      '/projects_picture/underwater_depth_training.png',
      '/projects_picture/underwater_depth_3d.png'
    ],
    video: {
      src: '/projects_picture/underwater_depth_comparison.mp4',
      poster: '/projects_picture/underwater_depth_cover.png',
      caption: 'Held-out canyon2 comparison: RGB, FLSea ground truth, previous 448 × 252 prediction, recommended 672 × 378 prediction and fixed-scale absolute errors.'
    }
  },
  {
    id: 'openvla',
    title: 'OpenVLA-Assisted Pick-and-Place',
    subtitle: 'Vision-Language-Action Control for a Simulated KUKA Arm',
    period: '2026',
    area: 'Embodied AI · Manipulation',
    category: 'Robot Learning & Manipulation',
    system: 'manipulation',
    status: 'Research Prototype',
    summary:
      'Connected OpenVLA predictions to a simulated KUKA pick-and-place pipeline with inverse kinematics and retry logic.',
    challenge:
      'Vision-language-action outputs must be translated into safe, executable robot commands and evaluated geometrically.',
    architecture: [
      'RGB and language input',
      'OpenVLA 7D action prediction',
      'Inverse-kinematics action adapter',
      'Multi-camera retry logic',
      'Object-to-target success evaluation'
    ],
    contribution:
      'Integrated OpenVLA with the simulation, implemented the IK adapter, retry logic and task evaluation.',
    role: 'Independent developer',
    team: 'Solo project',
    evaluation:
      'Evaluated simulated pick-and-place completion using final object-to-target distance.',
    results: [
      'Converted VLA outputs into executable arm commands',
      'Added multi-camera retries for failed observations',
      'Implemented repeatable geometric success checks'
    ],
    limitations:
      'The current system is simulation-only and has not been transferred to a physical manipulator.',
    technologies: ['OpenVLA', 'PyBullet', 'KUKA', 'Inverse Kinematics'],
    cover: '/projects_picture/vla_cover.png',
    gallery: []
  },

  {
    id: 'tiago-assistant',
    title: 'TiAGo LLM–VLM Smart-Home Assistant',
    subtitle: 'Face-Activated and Gesture-Based Human–Robot Interaction',
    period: '2025–2026',
    area: 'Human–Robot Interaction',
    category: 'LLM/VLM & Agentic Robotics',
    system: 'manipulation',
    status: 'Completed',
    summary:
      'Integrated language, vision, face and gesture interaction with TIAGo for task-oriented home assistance.',
    challenge:
      'Natural robot interaction requires perception, user-intent understanding and action execution to operate as a coherent system.',
    architecture: [
      'Face-based activation',
      'Gesture interpretation',
      'LLM/VLM intent reasoning',
      'ROS action execution'
    ],
    contribution:
      'Integrated the language, visual interaction and robot-action components.',
    role: 'Robotics and AI integration contributor',
    team: 'Academic team project',
    evaluation:
      'Demonstrated multimodal commands and robot responses in a smart-home scenario.',
    results: [
      'Enabled face-triggered interaction',
      'Connected gesture and language commands to robot actions',
      'Demonstrated multimodal HRI on TiAGo'
    ],
    limitations:
      'Evaluation focused on controlled demonstrations rather than long-term household deployment.',
    technologies: ['TiAGo', 'ROS', 'LLM', 'VLM', 'HRI'],
    cover: '/projects_picture/hri_cover.png',
    gallery: []
  },
  {
    id: 'rl-pid-drone',
    title: 'RL-Based PID Tuning for Drone Control',
    subtitle: 'Automatic Gain Selection for Altitude and Position Tracking',
    period: '2025–2026',
    area: 'Aerial Robotics · Control',
    category: 'Multi-Agent & Aerial Robotics',
    system: 'aerial',
    status: 'Completed',
    summary:
      'Applied reinforcement learning to tune PID gains for simulated drone altitude and position control.',
    challenge:
      'Manual PID tuning can be slow and sensitive to changes in vehicle dynamics and task conditions.',
    architecture: [
      'Drone dynamics simulation',
      'PID controller',
      'RL-based gain selection',
      'Tracking-error evaluation'
    ],
    contribution:
      'Connected the learning agent to PID parameters and evaluated closed-loop responses.',
    role: 'Independent developer',
    team: 'Academic project',
    evaluation:
      'Compared tracking behavior and control response across learned gain configurations.',
    results: [
      'Automated PID gain selection',
      'Evaluated altitude and position tracking',
      'Visualized closed-loop response behavior'
    ],
    limitations:
      'The controller was evaluated in simulation and has not been transferred to a physical drone.',
    technologies: ['Reinforcement Learning', 'PID', 'Drone Control'],
    cover: '/projects_picture/pid_tunning.png',
    gallery: []
  },
  {
    id: 'colour-enhancement',
    title: 'Colour Enhancement for Robot Perception',
    subtitle: 'HSV, RGB and YCbCr Image-Processing Study',
    period: '2024–2025',
    area: 'Image Processing · Perception',
    category: 'Computer Vision',
    system: 'marine',
    status: 'Completed',
    summary:
      'Evaluated HSV, RGB and YCbCr enhancement methods for more reliable perception in degraded underwater imagery.',
    challenge:
      'Poor contrast and colour casts can reduce detection, tracking and stereo-matching reliability.',
    architecture: [
      'HSV enhancement',
      'RGB-domain processing',
      'YCbCr enhancement',
      'Visual and downstream comparison'
    ],
    contribution:
      'Implemented the enhancement variants and compared their behavior.',
    role: 'Independent developer',
    team: 'Academic project',
    evaluation:
      'Compared enhanced images visually and for suitability as perception inputs.',
    results: [
      'Implemented multiple colour-space pipelines',
      'Produced repeatable enhancement comparisons',
      'Identified trade-offs for downstream perception'
    ],
    limitations:
      'The study requires broader quantitative evaluation against downstream detection and depth metrics.',
    technologies: ['OpenCV', 'HSV', 'RGB', 'YCbCr'],
    cover: '/projects_picture/enhancement.png',
    gallery: ['/projects_picture/enhancement_1.png']
  }
  
]

export function capabilitiesForProject(project: Project) {
  return capabilityGroups
    .filter((capability) => capability.projectIds.includes(project.id))
    .map((capability) => capability.label)
}
