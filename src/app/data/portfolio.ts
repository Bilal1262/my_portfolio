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

export type Deployment =
  | 'REAL ROBOT'
  | 'SIMULATION'
  | 'REAL ROBOT DATA'
  | 'BENCHMARK / DATASET'
  | 'ROS 2 SIMULATION'

export type Project = {
  id: string
  name?: string
  title: string
  subtitle: string
  period: string
  area: string
  category: string
  system: RobotSystem
  capabilities?: string[]
  status: 'Completed' | 'Ongoing' | 'Research Prototype'
  summary: string
  stack?: string[]
  evidence?: string
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
    'I am open to robotics software, autonomy and research engineering roles across Europe.'
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
  label: string
  summary: string
  projectIds: string[]
}> = [
  {
    id: 'perception',
    label: 'Perception',
    summary: 'Stereo, sonar, vision and multimodal reconstruction.',
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
    label: 'Navigation & Planning',
    summary: 'Nav2, mission planning, exploration and collision-aware robot motion.',
    projectIds: [
      'tiago-navigation-integration',
      'minigirona',
      'frontier_exploration',
      'mobile-autonomy',
      'active-navigation',
      'marsim',
      'multi-robot',
      'wind-turbine-inspection'
    ]
  },
  {
    id: 'robot-software',
    label: 'ROS & Robotics Software',
    summary: 'ROS and ROS 2 systems, interfaces, validation and real-robot execution.',
    projectIds: [
      'minigirona',
      'tiago-navigation-integration',
      'maestro',
      'marsim',
      'reconstruction',
      'can-robots-code',
      'frontier_exploration',
      'mobile-autonomy',
      'tiago-assistant',
      'wind-turbine-inspection'
    ]
  },
  {
    id: 'learning',
    label: 'Robot Learning & Intelligent Autonomy',
    summary: 'Foundation models, reinforcement learning and learning-based systems for robots.',
    projectIds: [
      'adaptive-sim2real-go2',
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
      'I am developing MAESTRO, a multi-agent ROS 2 framework for fault diagnosis and recovery in autonomous underwater missions. It has been evaluated on 255 fault-recovery scenarios, with 89% recovery-decision accuracy.'
  },
  {
    period: '2025',
    organisation: 'COE MARBLE Lab, University of Zagreb',
    role: 'Research Intern — Multimodal Underwater 3D Reconstruction',
    logo: '/companies_logo/coe_marble.png',
    description:
      'I developed a stereo, sonar and AUV-pose fusion pipeline for reconstructing offshore structures from real underwater data, and presented the work at Breaking the Surface 2025.'
  },
  {
    period: '2024–2025',
    organisation: 'CIRS Lab, University of Girona',
    role: 'Volunteer Researcher — MiniGirona AUV',
    logo: '/companies_logo/cirs_girona.png',
    description:
      'I worked on sonar initialization, DVL/INS localization, mission behaviors and manipulation for the MiniGirona I-AUV. The team placed second at RAMI 2025, and the work was published at ROBOT 2025.'
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
      'Contributed to MiniGirona AUV software for navigation, inspection and intervention tasks.',
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

export const technicalSkills = [
  {
    group: 'Robotics',
    items: 'ROS / ROS 2 · Nav2 · Behavior Trees · SLAM · EKF · Motion Planning'
  },
  {
    group: 'Programming',
    items: 'C++ · Python · PyTorch'
  },
  {
    group: 'Perception',
    items: 'OpenCV · Stereo Vision · Sonar · LiDAR · PCL · Open3D'
  },
  {
    group: 'Robot Learning',
    items: 'PPO · Behavior Cloning · DINOv2 · VLA / VLM / LLM Systems'
  },
  {
    group: 'Simulation',
    items: 'Gazebo · Webots · MuJoCo · StoneFish · Panda3D'
  }
]

const projectRecords: Project[] = [
  {
    id: 'adaptive-sim2real-go2',
    title: 'AdaptiveSim2Real-Go2',
    subtitle:
      'Domain-Randomized PPO and Context-Conditioned Locomotion under Dynamics Shift',
    period: '2026',
    area: 'Robot Learning · Robust Legged Locomotion',
    category: 'Robot Learning & Control',
    system: 'legged',
    status: 'Research Prototype',
    featured: true,
    summary:
      'I trained and compared three Unitree Go2 locomotion controllers: nominal PPO, domain-randomized PPO and context-conditioned PPO. The benchmark applies controlled changes to the robot dynamics.',
    challenge:
      'A policy trained under nominal simulation conditions may fail when the mass, contact friction, payload, actuator authority, latency or terrain changes, or when the robot is disturbed. To compare the controllers fairly, I used fixed checkpoints, the same scenarios and seeds, non-privileged observations, recoverable raw data and explicit failure reporting.',
    architecture: [
      'MuJoCo and Gymnasium Unitree Go2 velocity-tracking environment with PD joint control and a 48-dimensional proprioceptive observation that excludes hidden dynamics parameters',
      'Staged warm-start pipeline from nominal PPO to DR-PPO and Context-DR-PPO, with curriculum randomization and history-based context features',
      'Controlled dynamics sweeps for mass, friction, payload, motor strength, latency and incline, plus rough terrain, pushes, combined OOD conditions and sudden parameter shifts',
      'Seeded evaluation runner that streams per-step and per-episode telemetry, progress and ETA while preserving partial evidence after interruption',
      'Automated bootstrap/Wilson reporting and headless 720p video generation with synchronized policies, minimal tracking telemetry and a physical challenge arena'
    ],
    contribution:
      'I built the environment and control stack, set up domain randomization and staged PPO training, and implemented the context encoder and event-driven dynamics. I also wrote the benchmark runner, statistical reports, automated tests and visualization tools.',
    role: 'Independent robot-learning research engineer and developer',
    team: 'Solo research portfolio project',
    evaluation:
      'I evaluated three frozen controllers in 47 nominal, in-distribution and out-of-distribution scenarios. Each policy-scenario pair used 10 seeded episodes, giving 1,410 episodes with full trajectory telemetry. The tests include parameter sweeps, rough terrain, pushes, combined shifts, and sudden changes to payload, friction and motor strength.',
    results: [
      'Evaluated 3 controllers over 1,410 controlled episodes spanning 47 scenarios',
      'DR-PPO reduced mean OOD linear-tracking RMSE by 22.3% relative to nominal PPO',
      'Context-DR-PPO achieved the highest overall success rate at 89.4%',
      'Measured 86.5% aggregate success and 0.222 m/s mean tracking RMSE across the complete three-policy benchmark',
      'Measured 5.49 s mean recorded recovery time for Context-DR-PPO across sudden dynamics shifts',
      'Validated the implementation with 28 automated tests and reproducible raw-data, plot, report and video generation'
    ],
    limitations:
      'These results are limited to simulation and do not establish transfer to a physical Go2. The challenge arena combines low friction, foot-scale roughness, an incline, payload changes, actuator loss and a lateral push; some policies still terminate before reaching the finish. The next steps are hardware tests and further training on terrain and event changes.',
    technologies: [
      'Python',
      'MuJoCo',
      'Gymnasium',
      'Stable-Baselines3',
      'PPO',
      'Domain Randomization',
      'PyTorch',
      'Context Encoder',
      'Statistical Evaluation',
      'Pillow',
      'FFmpeg'
    ],
    cover: '/projects_picture/adaptive_sim2real_go2_cover.png',
    gallery: [
      '/projects_picture/adaptive_sim2real_go2_architecture.png',
      '/projects_picture/adaptive_sim2real_go2_comparison.png',
      '/projects_picture/adaptive_sim2real_go2_success.png',
      '/projects_picture/adaptive_sim2real_go2_recovery.png'
    ],
    videos: [
      {
        src: '/projects_picture/adaptive_sim2real_go2_challenge.mp4',
        poster: '/projects_picture/adaptive_sim2real_go2_comparison.png',
        caption:
          'Synchronized nominal, DR and Context-DR controllers on the revised challenge course with foot-scale roughness and position-triggered payload, motor and push events.',
        layout: 'ultrawide'
      },
      {
        src: '/projects_picture/adaptive_sim2real_go2_recovery.mp4',
        poster: '/projects_picture/adaptive_sim2real_go2_cover.png',
        caption:
          'Context-DR-PPO responding to a sudden 4 kg payload event with a minimal target-versus-speed overlay.',
        layout: 'wide'
      }
    ],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/Bilal1262/AdaptiveSim2Real-Go2'
      }
    ]
  },
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
      'I connected TIAGo navigation to ROS 2 and Nav2, then added REST and MQTT interfaces, health monitoring and repeatable commissioning tests.',
    challenge:
      'A Nav2 demonstration does not by itself provide an interface for external systems. The integration needed stable commands, readiness checks, explicit mission states, pause, resume and cancel controls, recorded fault evidence and measurable acceptance tests without exposing Nav2 internals.',
    architecture: [
      'Mission interfaces accept goals from a ROS 2 PoseStamped topic, a FastAPI REST service and a VDA5050-inspired MQTT fleet subset',
      'A C++ integration adapter validates readiness, translates commands and manages goal, pause, resume and cancel state',
      'The adapter uses the standard Nav2 NavigateToPose action for planning, control, feedback and terminal results',
      'Gazebo simulates the TIAGo robot, LiDAR, odometry and motion while RViz exposes localization, costmaps and planned paths',
      'A parallel monitor checks sensor freshness, AMCL, planner, controller, goal progress and stuck conditions',
      'Commissioning and failure tooling writes CSV/JSON reports and MCAP evidence for repeatable diagnosis'
    ],
    contribution:
      'I wrote the C++ Nav2 adapter, the Python health monitor and failure tools, and the REST and MQTT fleet gateway. I also implemented pause, resume and cancel handling, then added commissioning scenarios, structured reports and launch files.',
    role: 'Independent robotics software engineer and system integrator',
    team: 'Solo portfolio project built on the TIAGo simulation and Nav2 stack',
    evaluation:
      'I ran three repeatable navigation missions in the PAL office simulation and controlled them through both ROS and REST. I inspected the robot in Gazebo and RViz, then ran a controlled localization-degradation test and recorded the results in a structured format.',
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
      'I added contact-based failure detection and autonomous recovery to a behavior-cloned Franka peg-insertion task in MuJoCo.',
    challenge:
      'Peg insertion can fail through errors in perception, alignment or force control. Low action error on held-out data does not guarantee that a policy will remain within the demonstration distribution during a closed-loop rollout. Any recovery action must also stay within the robot safety limits.',
    architecture: [
      'MuJoCo/Gymnasium square-peg environment with a collision-enabled Franka Menagerie presentation model and a checkpoint-compatible training proxy',
      'HDF5 pipeline for 200 demonstrations containing front and wrist RGB, joint state, gripper width, force/torque, actions, task phase and failure labels',
      'PyTorch state-only and multimodal vision/state/force behavior-cloning policies with deterministic training histories and checkpointed validation loss',
      'Windowed rule-based failure detector feeding a retry-limited recovery manager with regrasp, spiral search, withdraw/retry and safe-abort skills',
      'Seeded evaluation, controlled disturbance injection, structured metrics and 16:9 rollout visualization based on recorded telemetry'
    ],
    contribution:
      'I developed the simulator and Cartesian controller, scripted the demonstration policy, and defined the dataset format. I trained the state-only and multimodal behavior-cloning models, then added temporal failure rules, recovery skills, evaluation reports, tests and rollout visualizations.',
    role: 'Independent robotics research engineer and developer',
    team: 'Solo research project',
    evaluation:
      'I collected 200 successful randomized demonstrations and compared the state-only and multimodal behavior-cloning models on held-out transitions. I then ran both checkpoints in closed loop and tested a controlled object slip on the collision-enabled Franka, recording detection, recovery, force and task outcome.',
    results: [
      'Completed the nominal collision-enabled Franka insertion in 110 control steps with 9.7 N peak measured force',
      'Detected a controlled OBJECT_SLIP, selected REGRASP once and resumed the task to successful insertion at step 175',
      'Kept the recovery rollout below the configured 60 N robot limit, with a measured peak of 38.0 N',
      'Reached best validation MSE of 0.002239 for State BC and 0.002102 for Multimodal BC; closed-loop rollouts exposed transfer-to-alignment covariate shift',
      'Validated the implementation with Ruff, mypy and 16 automated tests'
    ],
    limitations:
      'The learned checkpoints were trained on the lightweight proxy and did not complete end-to-end insertion within 500 steps. The selected object-slip recovery succeeded, but detector precision and recovery performance still need to be tested across more seeds and contact disturbances before reporting a general success rate.',
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
      'I implemented bathymetric pose-graph SLAM using real AUV dead-reckoning and multibeam records collected without GNSS.',
    challenge:
      'Without GNSS, an underwater vehicle accumulates dead-reckoning drift. Sparse or repetitive seabed geometry also makes it difficult to associate and register bathymetric submaps reliably.',
    architecture: [
      'Streaming index for 34,048,732 XYZ measurements and an exact-layout decoder for 97,318 AUVLib Cereal pings',
      'Quality-checked monotonic association of 296 measured submaps with representative DR states',
      'DR-proximity candidate generation followed by generalized ICP and explicit geometric quality gates',
      'Huber-robust GTSAM Pose2 optimization with trajectory, map-consistency and candidate-audit outputs'
    ],
    contribution:
      'I implemented the pipeline from data ingestion to graph optimization, including the Cereal decoder, submap-to-ping association, point-cloud preprocessing and GICP registration. I also ran the sensitivity analysis and produced the reports.',
    role: 'Independent researcher and developer',
    team: 'Solo research project using the published KTH Antarctica 2019 dataset',
    evaluation:
      'I processed all 296 embedded submaps and manually reviewed the seven proposed candidates without using the algorithm decision as a guide. I repeated the experiment after removing associations above 30 m and 20 m to check sensitivity to the inferred mapping.',
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
      'Using AQUALOC, I adapted frozen DINOv2 descriptors for underwater place localization. I also tested depth-assisted localization and used the visual representation to predict AUV waypoints two seconds ahead.',
    challenge:
      'Changes in underwater appearance can alter visual place-recognition results. The project therefore links image retrieval to synchronized vehicle state and navigation outputs, while treating place recognition separately from SLAM and path planning.',
    architecture: [
      'Synchronizes 4,586 AQUALOC camera frames with 45,859 IMU measurements, 1,120 depth records and the corrected COLMAP trajectory',
      'Uses a frozen DINOv2 ViT-S/14 encoder to produce normalized 384-dimensional global image descriptors',
      'Applies six deterministic appearance shifts at three severities: low light, colour loss, turbidity, backscatter, blur and marine snow',
      'Learns a zero-initialized 384→128→384 residual adapter with clean/degraded consistency, identity preservation and spatially distant negatives',
      'Retrieves reference poses by cosine similarity with a 10-second temporal exclusion and a 1.5 m correctness radius',
      'Connects adapted visual features to calibrated depth assistance and a learned relative waypoint at a two-second horizon'
    ],
    contribution:
      'I implemented the multimodal synchronization, DINOv2 feature cache, underwater degradation suite and residual-adapter training. The repository also includes retrieval evaluation with temporal exclusion, sensor experiments, waypoint prediction, figures and synchronized comparison videos.',
    role: 'Independent robotics researcher and developer',
    team: 'Solo research portfolio project using the published AQUALOC dataset',
    evaluation:
      'I split AQUALOC Harbor Sequence 01 chronologically into 60% training, 20% validation and 20% test data. After temporal exclusion, 180 held-out queries were eligible for retrieval evaluation. I measured clean and degraded views using Recall@K, coverage and metric position error.',
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
      'I adapted DINOv2 for underwater place recognition and tested it under low light, haze, colour attenuation, blur and marine snow.',
    challenge:
      'Descriptors that work on clean images may retrieve different places when underwater images lose light and colour or contain backscatter and suspended particles. These are also the conditions in which a system needs dependable loop-closure candidates.',
    architecture: [
      'ROS1 image extraction at 5 Hz with TUM timestamp–pose association',
      'Frozen DINOv2 ViT-S/14 with a zero-initialized 384→512→384 residual adapter',
      'Multi-positive InfoNCE, DINO geometry preservation and clean/corrupt consistency',
      'Exact cosine retrieval with temporal exclusion and pose-based Recall@K evaluation'
    ],
    contribution:
      'I implemented ROS bag ingestion, dataset manifests, controlled underwater augmentations and residual-adapter training. I then evaluated descriptor retrieval on the held-out trajectory and prepared the quantitative and qualitative comparisons.',
    role: 'Independent researcher and developer',
    team: 'Solo research project',
    evaluation:
      'I trained on the balanced MCLab1, MCLab2 and Fjord1 trajectories. After freezing the checkpoint, I evaluated it on the untouched Fjord2 trajectory. Temporal exclusion left 665 of the 1,095 candidate queries with a valid geometric revisit.',
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
      'I am developing a multi-agent system that diagnoses faults, assesses their effect on a mission and proposes ROS 2 recovery actions for operator approval.',
    challenge:
      'During a long AUV mission, sensor, localization or thruster faults may occur outside the cases covered by pre-programmed recovery logic. Communication with an operator may also be limited.',
    architecture: [
      'Residual-based anomaly evidence',
      'Multi-agent diagnosis and mission-impact reasoning',
      'RAG-supported recovery generation',
      'Validation and operator approval before deployment'
    ],
    contribution:
      'I designed the multi-agent architecture and mission-impact reasoning, and built the evaluation workflow and constrained ROS 2 code-generation pipeline.',
    role: 'Primary researcher and system architect',
    team: 'Research project supervised at Heriot-Watt University',
    evaluation:
      'The current evaluation covers 255 fault-recovery scenarios. It compares models, includes operator and judge modes, and checks generated ROS 2 nodes before they are used.',
    results: [
      '89% recovery-decision accuracy across 255 scenarios',
      'Improved Coordinated Success Score from 2.42 to 3.92',
      '80% validated success across 50 generated ROS 2 nodes',
      'Operator approval retained before recovery deployment'
    ],
    limitations:
      'Most of the current evaluation is simulation-based. Hardware trials are still in progress.',
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
      'I worked on sonar initialization, DVL/INS localization, behavior-tree missions, stereo perception and manipulation for the MiniGirona AUV.',
    challenge:
      'The AUV has to coordinate perception, localization, planning and intervention modules despite poor visibility and uncertain sensor measurements.',
    architecture: [
      'Mechanical-sonar voting initialization',
      'DVL/INS/sonar EKF localization',
      'Behavior-tree mission sequencing',
      'Stereo perception and task-priority manipulation'
    ],
    contribution:
      'I worked on sonar initialization, localization updates, mission integration, stereo perception and manipulation behaviors.',
    role: 'Autonomy and localization contributor',
    team: 'CIRS Lab MiniGirona research team',
    evaluation:
      'The software was tested in simulation and on the physical AUV, then used in the RAMI 2025 competition missions in La Spezia, Italy.',
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
      'I built a ROS 2 simulator for planetary rovers with terrain-dependent motion, environmental effects and configurable sensors.',
    challenge:
      'Testing planetary autonomy requires repeatable control over the terrain, wheel slip, sinkage, rocks, dust and sensor degradation.',
    architecture: [
      'Panda3D rendering and terrain system',
      'Rover motion and terramechanics abstractions',
      'Virtual camera, stereo, LiDAR and IMU sensors',
      'ROS 2 telemetry and autonomy interfaces'
    ],
    contribution:
      'I designed the simulator architecture and environment, then implemented the sensor interfaces, rover abstractions and ROS 2 integration.',
    role: 'Independent developer',
    team: 'Solo project',
    evaluation:
      'I used the simulator to test perception, localization and navigation modules under configurable environmental conditions.',
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
      'I combined stereo depth, forward-looking sonar and AUV poses to reconstruct underwater offshore structures.',
    challenge:
      'Forward-looking sonar provides little information about elevation, so a direct conversion from sonar measurements to 3D geometry is ambiguous.',
    architecture: [
      'FoundationStereo disparity',
      'AUV pose transformation',
      'Sonar feature extraction',
      'Particle-filter height estimation',
      'Point-cloud fusion'
    ],
    contribution:
      'I developed the multimodal fusion workflow, the probabilistic height estimator and the point-cloud generation pipeline.',
    role: 'Research intern and primary implementation contributor',
    team: 'COE MARBLE research team',
    evaluation:
      'I compared reconstruction consistency over several passes and examined how probabilistic elevation estimation affected the result.',
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
      'I trained a PPO policy in MuJoCo using separate curriculum stages for walking, reaching a goal and navigating around obstacles.',
    challenge:
      'When balance, locomotion and navigation were trained at the same time, the policies were unstable and the humanoid fell frequently.',
    architecture: [
      'MuJoCo humanoid environment',
      'PPO training pipeline',
      'Stage-specific reward functions',
      'Walking → goal → obstacle curriculum',
      'Automated evaluation scripts'
    ],
    contribution:
      'I implemented the MuJoCo environment, staged curriculum and reward functions, then set up training and evaluation.',
    role: 'Independent developer',
    team: 'Solo project',
    evaluation:
      'After tuning, I evaluated each curriculum stage on the same five fixed episodes.',
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
      'I built an LLM pipeline that generates ROS 2 robot software, tests it and uses the failures to make another attempt.',
    challenge:
      'Generated ROS 2 code can appear correct but still fail because an interface is missing, a package assumption is wrong or the node does not integrate at runtime.',
    architecture: [
      'Prompt expansion',
      'RAG-supported implementation',
      'Syntax and package validation',
      'Execution testing',
      'Failure-driven refinement'
    ],
    contribution:
      'I built the generation, validation and repair loop, including the checks used to feed execution failures back into the next attempt.',
    role: 'Independent researcher and developer',
    team: 'Solo project',
    evaluation:
      'I evaluated the pipeline on 50 ROS 2 tasks, checking task expansion, syntax and executable behavior separately.',
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
      'I implemented a rover navigation method that selects another viewpoint before entering a region with uncertain perception.',
    challenge:
      'Fog, occlusion and incomplete observations can leave a rover with too little information to commit safely to a path.',
    architecture: [
      'Depth/LiDAR uncertainty estimator',
      'Safety-aware planner cost',
      'Active viewpoint selection',
      'Condition-specific evaluation'
    ],
    contribution:
      'I implemented the uncertainty estimator, viewpoint selection method and evaluation workflow.',
    role: 'Independent developer',
    team: 'Solo project',
    evaluation:
      'I compared collision rate, success rate, path efficiency and estimated uncertainty in clear, foggy and occluded conditions.',
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
      'I estimated object poses for underwater manipulation using image enhancement, zero-shot detection, stereo depth and 3D keypoints.',
    challenge:
      'The manipulation planner needs stable geometric targets, but the available underwater images are visually degraded.',
    architecture: [
      'Underwater image enhancement',
      'YOLOE zero-shot detection',
      'Stereo disparity',
      'Point-cloud clustering',
      'PCA-based 3D keypoints'
    ],
    contribution:
      'I integrated the image enhancement, detection and stereo stages, and implemented the geometric keypoint extraction.',
    role: 'Primary perception developer',
    team: 'MiniGirona research context',
    evaluation:
      'I tested the pipeline on underwater images containing valves, buoys and damaged-structure targets.',
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
      'I combined LiDAR SLAM, frontier exploration and collision-aware navigation for a Unitree Go1 quadruped.',

    challenge:
      'The Go1 needs to map an unknown environment, select unexplored regions and plan collision-free paths without becoming trapped near obstacles.',

    architecture: [
      'GMapping occupancy-grid SLAM',
      'Frontier detection with explore_lite',
      'Navfn global path planning',
      'DWA local obstacle avoidance',
      'Go1-specific velocity safety controller'
    ],

    contribution:
      'I integrated the exploration stack and developed a velocity safety layer for smoother Go1 motion, obstacle recovery and bounded cmd_vel commands.',

    role: 'Independent developer',
    team: 'Independent robotics project',

    evaluation:
      'I evaluated the system in custom cluttered Gazebo environments while monitoring the live SLAM map, frontier goals, global paths, local trajectories and obstacle-avoidance behavior.',

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
      'I built a mobile-robot autonomy stack with LiDAR SLAM, probabilistic localization, classical planners and behavior-tree execution.',
    challenge:
      'The aim was to connect and compare the main parts of an autonomy stack instead of testing each algorithm in isolation.',
    architecture: [
      'LiDAR mapping',
      'PF/KF/EKF localization',
      'A*/RRT/RRT*/Wavefront planning',
      'Behavior-tree execution',
      'ROS 2 interfaces'
    ],
    contribution:
      'I implemented the planners and state-estimation filters, connected them through ROS 2, and used behavior trees for execution.',
    role: 'Independent developer',
    team: 'Course and personal project work',
    evaluation:
      'I compared the planning and state-estimation methods in the same simulated environments.',
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
      'I implemented stereo visual odometry and SLAM using geometric pose estimation, bundle adjustment and loop closure.',
    challenge:
      'The task was to estimate camera motion and map structure from stereo image sequences while limiting trajectory drift.',
    architecture: [
      'Feature detection and tracking',
      'Stereo matching and triangulation',
      'PnP pose estimation',
      'Bundle adjustment',
      'Loop closure and pose graph'
    ],
    contribution:
      'I implemented the visual-odometry and mapping pipeline, including the evaluation scripts for ATE and RPE.',
    role: 'Independent developer',
    team: 'Academic project',
    evaluation:
      'I evaluated the estimated trajectories on KITTI using Absolute Trajectory Error and Relative Pose Error.',
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
      'I implemented flocking, consensus-based formation and auction-based task allocation for a group of aerial robots.',
    challenge:
      'The robots had to coordinate from local information without relying on one low-level controller for the whole group.',
    architecture: [
      'Reynolds flocking rules',
      'Consensus-based formation',
      'Auction-based task allocation',
      'Crazyflie simulation'
    ],
    contribution:
      'I implemented the flocking, consensus and auction-based allocation methods and evaluated them in simulation.',
    role: 'Primary algorithm developer',
    team: 'Academic multi-agent project',
    evaluation:
      'I evaluated group motion, formation behavior and distributed task assignment in simulation.',
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
      'I compared four methods for underwater metric depth: supervised Depth Anything V2, self-supervised Monodepth2, classical stereo and FoundationStereo. Training, validation and test data were separated by scene.',
    challenge:
      'The models had to estimate metric depth from degraded underwater images with sparse invalid labels and a domain shift between canyons. The held-out canyon2 data could not be used for training or model selection.',
    architecture: [
      'Calibrated and rectified FLSea stereo ingestion with corrupt-TIFF preflight auditing',
      'Supervised Depth Anything V2 Metric Small fine-tuning on valid canyon1 depth only',
      'Self-supervised Monodepth2 trained from stereo photometric reconstruction',
      'Masked log-depth, metric Huber, multiscale-gradient and edge-aware losses',
      'Validation-selected 672 × 378 inference with native metric scale and no per-frame fitting',
      'Common-mask comparison against StereoSGBM and FoundationStereo'
    ],
    contribution:
      'I prepared the dataset, trained the supervised and self-supervised models, and implemented the masked losses and checkpoint selection. I also added depth-range diagnostics, common-mask benchmarking and fixed-scale 2D and 3D visualizations.',
    role: 'Independent researcher and developer',
    team: 'Solo research project',
    evaluation:
      'I trained on 3,417 canyon1 frames and selected the configuration using 375 separate canyon1 validation frames. The final evaluation was run once on 2,345 valid held-out canyon2 frames, using native metric depth from 0.45 to 12 m.',
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
      'I connected OpenVLA predictions to a simulated KUKA arm through an inverse-kinematics adapter and added retry logic for pick-and-place tasks.',
    challenge:
      'The vision-language-action output has to be converted into safe, executable robot commands, and task success needs a geometric measure.',
    architecture: [
      'RGB and language input',
      'OpenVLA 7D action prediction',
      'Inverse-kinematics action adapter',
      'Multi-camera retry logic',
      'Object-to-target success evaluation'
    ],
    contribution:
      'I connected OpenVLA to the simulation and implemented the inverse-kinematics adapter, retry logic and geometric task evaluation.',
    role: 'Independent developer',
    team: 'Solo project',
    evaluation:
      'I evaluated each simulated pick-and-place attempt using the final distance between the object and its target.',
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
      'I connected language, vision, face and gesture input to TIAGo actions for a home-assistance task.',
    challenge:
      'The perception, intent interpretation and robot actions had to work together so that a user could issue a command through more than one interaction mode.',
    architecture: [
      'Face-based activation',
      'Gesture interpretation',
      'LLM/VLM intent reasoning',
      'ROS action execution'
    ],
    contribution:
      'I connected the language and visual interaction components to the robot action interface.',
    role: 'Robotics and AI integration contributor',
    team: 'Academic team project',
    evaluation:
      'We demonstrated multimodal commands and the corresponding robot actions in a smart-home scenario.',
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
    id: 'wind-turbine-inspection',
    title: 'Autonomous Wind Turbine Inspection',
    subtitle: '3D Coverage Planning and Collision-Aware UAV Path Execution',
    period: '2026',
    area: 'Aerial Robotics · Coverage & Motion Planning',
    category: 'Multi-Agent & Aerial Robotics',
    system: 'aerial',
    status: 'Research Prototype',
    summary:
      'I built a ROS 2 and Webots pipeline that selects inspection viewpoints around a wind turbine, connects them with collision-checked 3D paths and displays the UAV route in RViz.',
    challenge:
      'The route needs to observe the tower, nacelle, hub and blades while keeping the surfaces visible to the camera, clearing the turbine geometry and providing stable commands to the simulated UAV.',
    architecture: [
      'Webots environment with a Mavic 2 Pro, turbine geometry and ground-truth pose feedback',
      'Surface sampling across the tower, nacelle, hub and three blades',
      'Camera-frustum and occlusion checks followed by greedy viewpoint selection',
      'A* or RRT* planning between ordered inspection viewpoints with collision-aware smoothing',
      'ROS 2 waypoint follower with bounded velocity, acceleration, attitude and crash safeguards',
      'RViz visualization of candidates, selected viewpoints, planned route, live UAV pose and executed path'
    ],
    contribution:
      'I implemented the coverage planner, geometric collision model, A* and RRT* planners, and trajectory smoothing. I also wrote the ROS 2 nodes and waypoint follower, added automated tests, and set up the RViz displays.',
    role: 'Independent robotics software developer',
    team: 'Solo portfolio project',
    evaluation:
      'I compared A* and RRT* using the same 306 inspection targets and 1,027 candidate viewpoints. Every segment of the final paths was checked at 0.5 m resolution, and 13 automated tests covered the planner and visualization code.',
    results: [
      'Reached 100% modeled surface coverage with 31 selected viewpoints',
      'A* planned in 2.91 s with a 443.77 m raw path and a 408.70 m smoothed path',
      'RRT* planned in 4.06 s with a 567.37 m raw path and a 408.73 m smoothed path',
      'Both planners completed with zero failed segments and 3.08 m minimum geometric clearance',
      'Published the planned route, active waypoint, live UAV pose and executed trail in RViz'
    ],
    limitations:
      'The evaluation is simulation-only and uses simplified turbine collision primitives and ground-truth localization. Stable completion of the full inspection flight is still being validated.',
    technologies: [
      'ROS 2 Humble',
      'Webots',
      'Python',
      'A*',
      'RRT*',
      'RViz',
      '3D Coverage Planning'
    ],
    cover: '/projects_picture/wind_turbine_inspection_architecture.png',
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
      'I used reinforcement learning to select PID gains for altitude and position control in a drone simulation.',
    challenge:
      'PID gains chosen by hand can take time to tune and may respond differently when the vehicle dynamics or task conditions change.',
    architecture: [
      'Drone dynamics simulation',
      'PID controller',
      'RL-based gain selection',
      'Tracking-error evaluation'
    ],
    contribution:
      'I connected the learning agent to the PID gains and evaluated the resulting closed-loop responses.',
    role: 'Independent developer',
    team: 'Academic project',
    evaluation:
      'I compared tracking behavior and closed-loop response across the learned gain configurations.',
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
      'I compared image-processing methods in HSV, RGB and YCbCr for degraded underwater images.',
    challenge:
      'Low contrast and colour casts can make detection, tracking and stereo matching less reliable.',
    architecture: [
      'HSV enhancement',
      'RGB-domain processing',
      'YCbCr enhancement',
      'Visual and downstream comparison'
    ],
    contribution:
      'I implemented the three colour-space pipelines and compared their outputs as inputs to later perception stages.',
    role: 'Independent developer',
    team: 'Academic project',
    evaluation:
      'I compared the processed images visually and considered how suitable they were as inputs to later perception stages.',
    results: [
      'Implemented multiple colour-space pipelines',
      'Produced repeatable enhancement comparisons',
      'Identified trade-offs for downstream perception'
    ],
    limitations:
      'The study still needs quantitative evaluation using downstream detection and depth metrics.',
    technologies: ['OpenCV', 'HSV', 'RGB', 'YCbCr'],
    cover: '/projects_picture/enhancement.png',
    gallery: ['/projects_picture/enhancement_1.png']
  }
  
]

type ProjectPresentation = Pick<Project, 'title' | 'summary'> &
  Pick<Required<Project>, 'stack'> &
  Pick<Project, 'evidence'>

const projectPresentation: Record<string, ProjectPresentation> = {
  'adaptive-sim2real-go2': {
    title: 'Unitree Go2 Robust Locomotion with Domain-Randomized PPO',
    stack: ['MuJoCo', 'PPO', 'Domain Randomization', 'Context Adaptation'],
    summary:
      'The evaluation compares three Unitree Go2 locomotion policies: nominal, domain-randomized and context-conditioned PPO. Each is tested under controlled changes to the robot dynamics.',
    evidence: 'DR-PPO: 22.3% lower OOD RMSE · Context-DR-PPO: 89.4% success'
  },
  'tiago-navigation-integration': {
    title: 'TIAGo ROS 2 Navigation & Mission Integration',
    stack: ['ROS 2 Humble', 'Nav2', 'C++', 'REST / MQTT'],
    summary:
      'The TIAGo integration combines ROS 2 and Nav2 with REST and MQTT interfaces, health monitoring and repeatable commissioning tests.',
    evidence: '3/3 commissioning missions completed'
  },
  'failure-aware-manipulation': {
    title: 'Failure-Aware Franka Manipulation with Behavior Cloning & Recovery',
    stack: ['PyTorch', 'Behavior Cloning', 'MuJoCo', 'Force/Torque Sensing'],
    summary:
      'The Franka peg-insertion system uses behavior cloning, contact-based failure detection and autonomous recovery.',
    evidence: '200 successful demonstrations · closed-loop recovery'
  },
  bathygraph: {
    title: 'BathyGraph-Lite — Bathymetric Pose-Graph SLAM for AUVs',
    stack: ['Pose-Graph SLAM', 'GTSAM', 'GICP', 'AUVLib'],
    summary:
      'BathyGraph-Lite registers bathymetric submaps and optimizes a pose graph using real AUV data collected without GNSS.',
    evidence: '296 measured submaps · GPS-denied navigation'
  },
  'aquanav-fm': {
    title: 'AquaNav-FM — Underwater Visual Localization & Waypoint Prediction',
    stack: ['DINOv2', 'PyTorch', 'Visual Place Recognition', 'AQUALOC'],
    summary:
      'AquaNav-FM adapts DINOv2 for underwater place recognition and tests depth-assisted localization and waypoint prediction at a two-second horizon.',
    evidence: 'Median localization error: 3.90 m → 1.50 m'
  },
  aquaadapt: {
    title: 'AquaAdapt — Underwater Visual Place Recognition with DINOv2',
    stack: ['DINOv2', 'Self-Supervised Learning', 'PyTorch', 'FAISS'],
    summary:
      'AquaAdapt trains a residual adapter on frozen DINOv2 descriptors for place recognition under low light, haze, colour attenuation, blur and marine snow.',
    evidence: 'Outperformed raw DINOv2 across all 15 corruption tests'
  },
  maestro: {
    title: 'MAESTRO — AUV Fault Diagnosis & Autonomous Recovery with ROS 2',
    stack: ['ROS 2', 'Fault Diagnosis', 'Multi-Agent Systems', 'RAG'],
    summary:
      'MAESTRO diagnoses faults, assesses their effect on an underwater mission and proposes ROS 2 recovery actions for operator approval.',
    evidence: '89% recovery-decision accuracy across 255 scenarios'
  },
  minigirona: {
    title: 'MiniGirona AUV Localization & Autonomous Mission Control',
    stack: ['ROS', 'EKF', 'DVL / INS', 'Sonar', 'Behavior Trees'],
    summary:
      'My work on MiniGirona covered sonar initialization, DVL/INS localization, behavior-tree missions, stereo perception and manipulation.',
    evidence: '2nd Place — RAMI 2025'
  },
  marsim: {
    title: 'MarsSim — ROS 2 Planetary Rover Simulation & Sensor Modeling',
    stack: ['ROS 2', 'Panda3D', 'Python', 'Sensor Simulation'],
    summary:
      'MarsSim is a ROS 2 planetary rover simulator with terrain-dependent motion, environmental effects and configurable sensors.'
  },
  reconstruction: {
    title: 'Underwater 3D Reconstruction with Stereo, Sonar & AUV Pose Fusion',
    stack: ['FoundationStereo', 'Sonar', 'Particle Filter', 'Point Clouds'],
    summary:
      'The reconstruction pipeline combines stereo depth, forward-looking sonar and AUV poses to reconstruct underwater offshore structures.',
    evidence: 'Stereo + sonar + AUV-pose fusion'
  },
  humanoid: {
    title: 'Humanoid Locomotion & Goal Navigation with PPO',
    stack: ['PPO', 'MuJoCo', 'Stable-Baselines3', 'Curriculum Learning'],
    summary:
      'A PPO policy is trained in MuJoCo through separate curriculum stages for walking, reaching a goal and navigating around obstacles.'
  },
  'can-robots-code': {
    title: 'LLM-Based ROS 2 Code Generation, Testing & Repair',
    stack: ['ROS 2', 'LLM Agents', 'RAG', 'Automated Testing'],
    summary:
      'The LLM pipeline generates ROS 2 software, tests it and uses validation failures to repair the code.'
  },
  'active-navigation': {
    title: 'Uncertainty-Aware Rover Navigation with Active Perception',
    stack: ['ROS 2', 'Active Perception', 'LiDAR', 'Path Planning'],
    summary:
      'The rover planner uses localization confidence and terrain uncertainty when selecting a path.'
  },
  'stereo-perception': {
    title: 'Underwater Object Pose Estimation with Stereo 3D Perception',
    stack: ['YOLOE', 'Stereo Vision', 'PCL', 'OpenCV'],
    summary:
      'The perception pipeline estimates object poses for underwater manipulation using image enhancement, zero-shot detection, stereo depth and 3D keypoints.'
  },
  frontier_exploration: {
    title: 'Unitree Go1 Autonomous Exploration with SLAM & Frontier Planning',
    stack: ['ROS', 'Gazebo', 'GMapping', 'Frontier Exploration', 'move_base'],
    summary:
      'The Unitree Go1 stack combines SLAM, frontier selection, navigation and obstacle avoidance for autonomous exploration.'
  },
  'mobile-autonomy': {
    title: 'ROS 2 Mobile Robot SLAM, Localization & RRT* Navigation',
    stack: ['ROS 2', 'SLAM', 'EKF', 'RRT*', 'Behavior Trees'],
    summary:
      'This mobile-robot stack combines LiDAR SLAM, probabilistic localization, classical planners and behavior-tree execution.'
  },
  'stereo-visual-slam': {
    title: 'Stereo Visual Odometry & SLAM with PnP and Bundle Adjustment',
    stack: ['Stereo Vision', 'KITTI', 'PnP', 'Bundle Adjustment'],
    summary:
      'The KITTI implementation uses geometric pose estimation, bundle adjustment and loop closure for stereo visual odometry and SLAM.'
  },
  'multi-robot': {
    title: 'Multi-Robot Aerial Coordination with Consensus & Task Allocation',
    stack: ['Consensus', 'Flocking', 'Task Allocation', 'Crazyflie'],
    summary:
      'The aerial-robot system combines flocking, consensus-based formation and auction-based task allocation.'
  },
  'underwater-depth': {
    title: 'Underwater Metric Depth Estimation with Foundation Models',
    stack: ['PyTorch', 'Depth Anything V2', 'Monodepth2', 'FLSea'],
    summary:
      'The study compares supervised and self-supervised methods for underwater metric depth on FLSea, with training and test data separated by scene.',
    evidence: '24.35% held-out AbsRel reduction'
  },
  openvla: {
    title: 'OpenVLA-Based KUKA Pick-and-Place Manipulation',
    stack: ['OpenVLA', 'PyBullet', 'KUKA', 'Inverse Kinematics'],
    summary:
      'OpenVLA predictions are converted into commands for a simulated KUKA arm through inverse kinematics, with retry logic for pick-and-place tasks.'
  },
  'tiago-assistant': {
    title: 'TIAGo Multimodal HRI with Language, Vision & Gesture Recognition',
    stack: ['TIAGo', 'ROS', 'LLM', 'VLM', 'HRI'],
    summary:
      'The TIAGo assistant connects language, vision, face and gesture input to robot actions for a home-assistance task.'
  },
  'rl-pid-drone': {
    title: 'Reinforcement-Learning PID Tuning for Drone Control',
    stack: ['Reinforcement Learning', 'PID', 'UAV', 'Simulation'],
    summary:
      'Reinforcement learning selects PID gains for altitude and position control in a drone simulation.'
  },
  'wind-turbine-inspection': {
    title: 'Autonomous Wind Turbine Inspection with 3D Coverage Planning',
    stack: ['ROS 2', 'Webots', 'A*', 'RRT*', 'RViz'],
    summary:
      'The inspection planner selects camera-aware viewpoints around a wind turbine and connects them with collision-checked A* and RRT* paths for a simulated UAV.',
    evidence: '100% modeled coverage · 31 viewpoints · 0 failed path segments'
  },
  'colour-enhancement': {
    title: 'Underwater Image Enhancement for Robotic Vision',
    stack: ['OpenCV', 'HSV', 'RGB', 'YCbCr'],
    summary:
      'The study compares image-processing methods in HSV, RGB and YCbCr for degraded underwater images.'
  }
}

export const projects: Project[] = projectRecords.map((project) => {
  const presentation = projectPresentation[project.id]
  return {
    ...project,
    ...presentation,
    name: presentation?.title ?? project.title
  }
})

const deploymentByProject: Partial<Record<string, Deployment>> = {
  minigirona: 'REAL ROBOT',
  'tiago-navigation-integration': 'ROS 2 SIMULATION',
  'adaptive-sim2real-go2': 'SIMULATION',
  'failure-aware-manipulation': 'SIMULATION',
  maestro: 'ROS 2 SIMULATION',
  reconstruction: 'REAL ROBOT DATA',
  bathygraph: 'REAL ROBOT DATA',
  'underwater-depth': 'BENCHMARK / DATASET',
  'wind-turbine-inspection': 'ROS 2 SIMULATION',
  aquaadapt: 'REAL ROBOT DATA',
  'aquanav-fm': 'REAL ROBOT DATA'
}

export function deploymentForProject(project: Project) {
  return deploymentByProject[project.id]
}

export function capabilitiesForProject(project: Project) {
  return capabilityGroups
    .filter((capability) => capability.projectIds.includes(project.id))
    .map((capability) => capability.label)
}
