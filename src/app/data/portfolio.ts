export type Project = {
  id: string
  title: string
  subtitle: string
  period: string
  area: string
  category: string
  summary: string
  challenge: string
  contribution: string
  results: string[]
  technologies: string[]
  cover: string
  gallery: string[]
  links?: { label: string; href: string }[]
}

export const profile = {
  name: 'Bilal Ahmed',
  email: 'bk632723@gmail.com',
  location: 'Girona, Spain',
  github: 'https://github.com/Bilal1262',
  linkedin: '',
  resume: '/resume/Bilal_Ahmed_Qaimkhani_CV.pdf',
  heroImage: '/projects_picture/minigirona_2.png'
}

export const roles = [
  'robotics systems engineer',
  'underwater autonomy researcher',
  'ROS 2 developer',
  'robot learning engineer'
]

export const experience = [
  {
    period: '2025–2026',
    organisation: 'Heriot-Watt University',
    role: 'Master Thesis Researcher — Agentic Fault Recovery',
    description: 'Designed MAESTRO, an operator-supervised framework for AUV fault diagnosis, mission-impact reasoning and validated ROS 2 recovery-code synthesis.'
  },
  {
    period: '2025–2026',
    organisation: 'COE MARBLE',
    role: 'Research Intern — Underwater 3D Reconstruction',
    description: 'Developed sonar and vehicle-pose fusion methods for reconstructing offshore structures and resolving vertical ambiguity.'
  },
  {
    period: '2024–2025',
    organisation: 'CIRS Lab, University of Girona',
    role: 'AUV Autonomy Researcher',
    description: 'Worked across MiniGirona localization, navigation, manipulation, perception and competition-oriented mission integration.'
  }
]

export const education = [
  {
    period: '2024–2026',
    degree: 'Erasmus Mundus Joint Master in Intelligent Field Robotics',
    institution: 'University of Girona · Heriot-Watt University · University of Zagreb',
    result: 'Current average: 9.26/10',
    focus: 'Autonomous systems · underwater robotics · perception · localization · robot learning'
  },
  {
    period: '2018–2022',
    degree: 'Bachelor of Mechatronics Engineering',
    institution: 'Mehran University of Engineering and Technology, Jamshoro',
    result: 'CGPA: 3.9/4.0',
    focus: 'Mechatronics · control systems · embedded systems · robotics'
  }
]

export const research = [
  { type: 'Master Thesis', title: 'MAESTRO: Agentic fault diagnosis and recovery for autonomous underwater robots', venue: 'Heriot-Watt University · 2026' },
  { type: 'Research Presentation', title: 'Multimodal sonar and navigation fusion for underwater 3D reconstruction', venue: 'Underwater robotics research setting · 2026' },
  { type: 'Competition System', title: 'MiniGirona mission planning, perception and manipulation integration', venue: 'RAMI 2025' }
]

export const skills = [
  { group: 'Autonomous Systems', items: ['ROS 2', 'Behavior Trees', 'Mission Planning', 'Fault Recovery'] },
  { group: 'Perception & Localization', items: ['Sonar', 'Stereo Vision', 'SLAM', 'EKF', 'Particle Filters'] },
  { group: 'Robot Learning & AI', items: ['PyTorch', 'PPO', 'Self-Supervision', 'LLM/VLM Agents'] },
  { group: 'Simulation & Control', items: ['StoneFish', 'MuJoCo', 'Panda3D', 'Gazebo', 'Control Systems'] }
]

export const projects: Project[] = [
  {
    id: 'maestro',
    title: 'MAESTRO',
    subtitle: 'Agentic Fault Recovery for Autonomous Underwater Robots',
    period: '2025–2026',
    area: 'Master Thesis · Agentic Robotics',
    category: 'Agentic Robotics',
    summary: 'An operator-supervised autonomy framework connecting residual-based anomaly detection, multi-agent LLM reasoning, mission-impact analysis and validated ROS 2 recovery synthesis.',
    challenge: 'Long-duration AUV missions must recover from sensor, localization and thruster faults despite limited communication and incomplete pre-programmed recovery logic.',
    contribution: 'Designed the multi-agent architecture, mission-impact reasoning, operator interaction and constrained code-generation pipeline; evaluated fault scenarios in StoneFish.',
    results: ['End-to-end workflow from anomaly evidence to deployable ROS 2 artefacts', 'Human and LLM operator/judge evaluation modes', 'Targeted function-level recovery edits with validation', 'Operator approval retained before deployment'],
    technologies: ['ROS 2', 'LLM Agents', 'StoneFish', 'Fault Recovery', 'AUV'],
    cover: '/projects_picture/maestro_cover.png',
    gallery: ['/projects_picture/maestro_architecture.png', '/projects_picture/maestro_results.png', '/projects_picture/maestro_recovery.png']
  },
  {
    id: 'minigirona',
    title: 'MiniGirona AUV',
    subtitle: 'Integrated Underwater Autonomy and Intervention',
    period: '2024–2025',
    area: 'CIRS Lab · Underwater Robotics',
    category: 'Underwater Robotics',
    summary: 'An integrated autonomy stack combining sonar-based initialization, DVL/INS localization, behavior-tree missions, perception, planning and manipulation.',
    challenge: 'Reliable underwater autonomy requires multiple modules to cooperate under poor visibility, uncertain localization and limited sensing.',
    contribution: 'Worked across localization initialization, navigation, mission planning, stereo perception and Alpha 5 arm manipulation for the MiniGirona platform.',
    results: ['Voting-based sonar pose initialization', 'DVL/INS and sonar-aided navigation', 'Integrated mission and manipulation behaviours', 'RAMI-oriented system preparation'],
    technologies: ['AUV', 'Sonar', 'DVL', 'Behavior Trees', 'Manipulation'],
    cover: '/projects_picture/minigirona_2.png',
    gallery: ['/projects_picture/minigirona_1.png', '/projects_picture/minigirona_3.png', '/projects_picture/minig_localization_cover.png', '/projects_picture/minig_manipulation_cover.png'],
    links: [{ label: 'Mission planning video', href: 'https://youtu.be/Nc9D36YvdUA' }, { label: 'Manipulation video', href: 'https://youtu.be/vyJ8t69w2wo' }]
  },
  {
    id: 'reconstruction',
    title: 'Underwater 3D Reconstruction',
    subtitle: 'Multimodal Reconstruction of Offshore Structures',
    period: '2025–2026',
    area: 'COE MARBLE · Research Internship',
    category: 'Underwater Robotics',
    summary: 'A sonar and AUV-navigation fusion pipeline that estimates vertical structure and generates 3D point clouds for offshore inspection.',
    challenge: 'Imaging sonar has weak vertical observability, making direct 3D reconstruction geometrically ambiguous.',
    contribution: 'Developed the fusion workflow, probabilistic height estimation and point-cloud generation using sonar features and AUV poses.',
    results: ['Spatially consistent multi-pass sonar reconstruction', 'Particle-filter height estimation', '3D point-cloud outputs for offshore structures'],
    technologies: ['Sonar', 'Particle Filter', 'Pose Fusion', 'Point Clouds'],
    cover: '/projects_picture/sonar_cover.png',
    gallery: ['/projects_picture/sonar_project1.png', '/projects_picture/sonar_project2.png', '/projects_picture/sonar_project3.png', '/projects_picture/sonar_project4.png']
  },
  {
    id: 'marsim',
    title: 'MarsSim',
    subtitle: 'A ROS 2 Simulator for Planetary Field Robotics',
    period: '2026',
    area: 'Simulation · Planetary Robotics',
    category: 'Simulation',
    summary: 'A modular simulator with rover dynamics, terrain interaction, environmental effects, sensor topics and a three-dimensional Mars environment.',
    challenge: 'Planetary autonomy requires repeatable testing across terrain, wheel slip, sinkage, rocks, dust and degraded sensing.',
    contribution: 'Designed the simulator architecture, ROS 2 interfaces, terrain/robot/contact abstractions, visual environment and telemetry system.',
    results: ['ROS 2 odometry, IMU, slip, sinkage and environment topics', 'Terrain, rocks, dust, wind and lighting controls', 'Extensible per-wheel terramechanics architecture'],
    technologies: ['ROS 2', 'Panda3D', 'Terramechanics', 'Sensors'],
    cover: '/projects_picture/marsim_cover.png',
    gallery: ['/projects_picture/marsim_environment.png', '/projects_picture/marsim_rover.png', '/projects_picture/marsim_architecture.png'],
    links: [{ label: 'Video demonstration', href: 'https://youtu.be/t26hZjJ5NcQ?si=xdQssn14VgJZq20d' }]
  },
  {
    id: 'humanoid',
    title: 'Humanoid PPO',
    subtitle: 'Curriculum-Based Locomotion and Navigation',
    period: '2026',
    area: 'Robot Learning · MuJoCo',
    category: 'Robot Learning',
    summary: 'A staged reinforcement-learning system progressing from standing to walking, goal reaching and obstacle avoidance.',
    challenge: 'Learning balance, locomotion and navigation simultaneously produced unstable policies and frequent falls.',
    contribution: 'Implemented the MuJoCo environment, PPO workflow, curriculum stages, reward functions and evaluation scripts.',
    results: ['100% walking success across five evaluation episodes', '100% goal-reaching success', '0% obstacle collision rate in tuned evaluation'],
    technologies: ['PPO', 'MuJoCo', 'Stable-Baselines3', 'Curriculum Learning'],
    cover: '/projects_picture/humanoid_ppo_cover.png',
    gallery: ['/projects_picture/humanoid_walk.png', '/projects_picture/humanoid_goal.png', '/projects_picture/humanoid_obstacle.png'],
    links: [{ label: 'GitHub repository', href: 'https://github.com/Bilal1262/Humanoid-Reinforcemnt-Learning' }]
  },
  {
    id: 'depth',
    title: 'Underwater Depth',
    subtitle: 'Self-Supervised Stereo Depth Estimation',
    period: '2025–2026',
    area: 'Computer Vision · Deep Learning',
    category: 'Computer Vision',
    summary: 'A self-supervised stereo-depth pipeline combining contrastive representation learning, teacher–student consistency and underwater-specific augmentation.',
    challenge: 'Underwater colour distortion, backscatter and limited labelled data reduce supervised depth reliability.',
    contribution: 'Implemented the StereoNet baseline, contrastive pretraining, consistency learning and evaluation workflow.',
    results: ['Reproducible stereo-depth baseline', 'MoCo feature integration', 'Underwater-specific training augmentations'],
    technologies: ['PyTorch', 'StereoNet', 'MoCo', 'Self-Supervision'],
    cover: '/projects_picture/self_supervised_cover.png',
    gallery: ['/projects_picture/self_supervised_cover.png']
  },
  {
    id: 'stereo-perception',
    title: 'Stereo Manipulation Perception',
    subtitle: '3D Keypoints for Underwater Manipulation',
    period: '2025',
    area: 'Perception · Manipulation',
    category: 'Computer Vision',
    summary: 'Underwater enhancement, zero-shot object detection, stereo disparity and 3D keypoint extraction for valves, buoys and damage inspection.',
    challenge: 'Manipulation requires stable geometric targets from visually degraded underwater images.',
    contribution: 'Combined enhancement, YOLOE detection, disparity, clustering and PCA-based geometry extraction.',
    results: ['Object-level 3D keypoints suitable for planning and manipulation'],
    technologies: ['YOLOE', 'Stereo', 'PCA', 'Clustering'],
    cover: '/projects_picture/key_feature1.png',
    gallery: ['/projects_picture/key_feature1.png', '/projects_picture/key_feature2.png']
  },
  {
    id: 'mobile-autonomy',
    title: 'ROS 2 Mobile Autonomy',
    subtitle: 'SLAM, Localization and Planning on TurtleBot',
    period: '2024–2025',
    area: 'Mobile Robotics · ROS 2',
    category: 'Autonomous Systems',
    summary: 'A consolidated mobile-robot autonomy project covering LiDAR SLAM, probabilistic localization, classical planning and behavior-tree execution.',
    challenge: 'Build and compare the core components of an end-to-end mobile-robot autonomy stack.',
    contribution: 'Implemented planners, probabilistic filters, behavior-tree integration and ROS 2 system interfaces.',
    results: ['Compared A*, RRT, RRT*, wavefront and potential-field planners', 'Implemented PF, KF and EKF localization workflows'],
    technologies: ['ROS 2', 'SLAM', 'RRT*', 'EKF', 'Behavior Trees'],
    cover: '/projects_picture/turtlebot_localization.png',
    gallery: ['/projects_picture/turtlebot_plan.png', '/projects_picture/path_planning_cover.png', '/projects_picture/sim_localization_cover.png'],
    links: [{ label: 'Planning demonstration', href: 'https://youtu.be/V_S-zIa8rDM' }, { label: 'Planner comparison', href: 'https://youtu.be/I-3rC5znRv4' }]
  },
  {
    id: 'multi-robot',
    title: 'Multi-Robot Coordination',
    subtitle: 'Flocking, Consensus and Task Allocation',
    period: '2024',
    area: 'Multi-Agent Systems',
    category: 'Multi-Robot Systems',
    summary: 'Decentralized coordination experiments using Reynolds flocking rules, consensus protocols and auction-based task allocation.',
    challenge: 'Coordinate multiple robots using local information without relying on a single motion controller.',
    contribution: 'Developed and evaluated flocking, formation and task-allocation algorithms in simulation.',
    results: ['Coordinated swarm motion', 'Consensus-based formation behaviour', 'Distributed task assignment'],
    technologies: ['Consensus', 'Flocking', 'Auctions', 'Crazyflie'],
    cover: '/projects_picture/consensus.png',
    gallery: ['/projects_picture/swarm_control.png', '/projects_picture/consensus.png'],
    links: [{ label: 'Flocking demonstration', href: 'https://youtu.be/9Q8QMtbf99w' }]
  },
  {
    id: 'voting-localization',
    title: 'Voting-Based Localization Initialization',
    subtitle: 'Mechanical-Sonar Pose Initialization for MiniGirona',
    period: '2024–2025',
    area: 'Localization · Underwater Robotics',
    category: 'Underwater Robotics',
    summary: 'A voting-based method for estimating the AUV initial pose in a known pool frame from mechanical imaging sonar observations and robot yaw.',
    challenge: 'The localization filter requires a reliable starting pose before normal state estimation can converge.',
    contribution: 'Implemented the sonar observation voting process and evaluated pose hypotheses in the known environment frame.',
    results: ['Initial pose estimate before filter convergence', 'Sonar and yaw observations combined in a known map'],
    technologies: ['Sonar', 'Pose Estimation', 'Localization', 'Probabilistic Robotics'],
    cover: '/projects_picture/voting_based2.png',
    gallery: ['/projects_picture/voting_based1.png', '/projects_picture/voting_based2.png', '/projects_picture/voting_based3.png']
  },
  {
    id: 'turtlebot-slam',
    title: 'TurtleBot LiDAR SLAM',
    subtitle: 'ROS 2 Mapping and Localization Pipeline',
    period: '2025',
    area: 'Mobile Robotics · Localization',
    category: 'Autonomous Systems',
    summary: 'A ROS 2 SLAM pipeline for TurtleBot using LiDAR data, developed in simulation with preparation for real-robot deployment.',
    challenge: 'Create a consistent map and localization workflow from noisy range sensing and robot motion.',
    contribution: 'Integrated ROS 2 mapping, sensor topics and navigation interfaces for the simulated TurtleBot platform.',
    results: ['LiDAR-based map generation', 'Reusable ROS 2 pipeline for simulation and hardware transfer'],
    technologies: ['ROS 2', 'SLAM', 'LiDAR', 'TurtleBot'],
    cover: '/projects_picture/turtlebot_localization.png',
    gallery: ['/projects_picture/turtlebot_localization.png']
  },
  {
    id: 'classical-path-planning',
    title: 'Classical Robot Path Planning',
    subtitle: 'PF, Wavefront, A*, RRT and RRT* Comparison',
    period: '2024',
    area: 'Planning · Simulation',
    category: 'Autonomous Systems',
    summary: 'Implementation and comparison of classical path-planning methods across simulated environments and constraints.',
    challenge: 'Understand how planning methods trade path quality, computation and obstacle behaviour.',
    contribution: 'Implemented the planners, created common test environments and compared their generated paths.',
    results: ['Side-by-side planner comparison', 'Analysis of deterministic, sampling-based and potential-field behaviour'],
    technologies: ['A*', 'RRT', 'RRT*', 'Wavefront', 'Potential Fields'],
    cover: '/projects_picture/path_planning_cover.png',
    gallery: ['/projects_picture/path_planning.png', '/projects_picture/path_planning2.png', '/projects_picture/path_planning3.png', '/projects_picture/path_planning4.png', '/projects_picture/path_planning5.png', '/projects_picture/path_planning6.png'],
    links: [{ label: 'Video demonstration', href: 'https://youtu.be/I-3rC5znRv4' }, { label: 'Project files', href: 'https://drive.google.com/drive/folders/11Ax14OU1zgr5tUh25LctUbYXZz0vCJmb?usp=drive_link' }]
  },
  {
    id: 'localization-filters',
    title: 'Differential-Drive Localization',
    subtitle: 'Particle Filter, Kalman Filter and EKF',
    period: '2024–2025',
    area: 'State Estimation · Simulation',
    category: 'Autonomous Systems',
    summary: 'A comparative localization study using odometry and noisy sensor measurements in an indoor GPS-denied setting.',
    challenge: 'Estimate robot state despite process noise, sensor uncertainty and accumulated odometry error.',
    contribution: 'Implemented PF, KF and EKF estimators and compared their behaviour on a common differential-drive simulation.',
    results: ['Three probabilistic estimators implemented', 'Comparable trajectories and estimation-error visualizations'],
    technologies: ['Particle Filter', 'Kalman Filter', 'EKF', 'Odometry'],
    cover: '/projects_picture/sim_localization_cover.png',
    gallery: ['/projects_picture/sim_localization.png', '/projects_picture/sim_localization1.png', '/projects_picture/sim_localization2.png', '/projects_picture/sim_localization3.png', '/projects_picture/sim_localization4.png'],
    links: [{ label: 'Project files', href: 'https://drive.google.com/drive/folders/1kmpMVzvTMQfsoiBdNLg0t4_Y-YFhmRYa?usp=drive_link' }]
  },
  {
    id: 'minigirona-navigation',
    title: 'MiniGirona Navigation',
    subtitle: 'DVL, INS and Mechanical-Sonar Localization',
    period: '2025',
    area: 'AUV Navigation · Sensor Fusion',
    category: 'Underwater Robotics',
    summary: 'GPS-denied AUV navigation combining voting-based initialization, INS and constant-velocity motion models with map-based sonar updates.',
    challenge: 'Maintain a consistent underwater pose estimate when global positioning is unavailable.',
    contribution: 'Worked on the initialization and EKF point-to-line update workflow using DVL, INS and sonar information.',
    results: ['Map-referenced localization updates', 'Simulation and experimental navigation workflow'],
    technologies: ['DVL', 'INS', 'EKF', 'Sonar', 'Sensor Fusion'],
    cover: '/projects_picture/minig_localization_cover.png',
    gallery: ['/projects_picture/minig_localization.png', '/projects_picture/minig_localization1.png', '/projects_picture/minig_localization2.png', '/projects_picture/minig_localization3.png', '/projects_picture/minig_localization4.png', '/projects_picture/minig_localization5.png']
  },
  {
    id: 'minigirona-manipulation',
    title: 'MiniGirona Manipulation',
    subtitle: 'Alpha 5 Arm and Task-Priority Control',
    period: '2024–2025',
    area: 'Underwater Manipulation',
    category: 'Underwater Robotics',
    summary: 'Underwater intervention behaviours for valve rotation and ring pickup using the MiniGirona Alpha 5 manipulator.',
    challenge: 'Coordinate multiple arm objectives while operating from a moving underwater platform.',
    contribution: 'Developed and evaluated task-priority manipulation strategies for competition-oriented intervention tasks.',
    results: ['Valve-rotation behaviour', 'Ring-pickup manipulation sequence'],
    technologies: ['Manipulation', 'Task Priority', 'Alpha 5 Arm', 'AUV'],
    cover: '/projects_picture/minig_manipulation_cover.png',
    gallery: ['/projects_picture/minig_manipulation.png', '/projects_picture/minig_manipulation1.png'],
    links: [{ label: 'Video demonstration', href: 'https://youtu.be/vyJ8t69w2wo' }]
  },
  {
    id: 'minigirona-mission-planning',
    title: 'MiniGirona Mission Planning',
    subtitle: 'RAMI Competition Mission Integration',
    period: '2024–2025',
    area: 'Mission Planning · AUV',
    category: 'Underwater Robotics',
    summary: 'Mission-level sequencing of navigation and intervention behaviours aligned with RAMI underwater competition objectives.',
    challenge: 'Coordinate perception, navigation and manipulation tasks in a robust mission sequence.',
    contribution: 'Integrated task sequencing and path-level execution into the MiniGirona mission workflow.',
    results: ['Competition-oriented mission sequence', 'Integrated navigation and intervention behaviours'],
    technologies: ['Mission Planning', 'Behavior Trees', 'AUV', 'Manipulation'],
    cover: '/projects_picture/minig_planning_cover.png',
    gallery: [],
    links: [{ label: 'Video demonstration', href: 'https://youtu.be/Nc9D36YvdUA' }]
  },
  {
    id: 'turtlebot-rrt',
    title: 'RRT and RRT* on TurtleBot',
    subtitle: 'Behavior-Tree Navigation Integration',
    period: '2024',
    area: 'Planning · ROS 2',
    category: 'Autonomous Systems',
    summary: 'Sampling-based planning on TurtleBot with structured execution through a behavior tree.',
    challenge: 'Connect planner output to a reliable robot execution architecture rather than stopping at path generation.',
    contribution: 'Implemented RRT/RRT* and integrated navigation actions into a behavior-tree workflow.',
    results: ['RRT and RRT* planning', 'Behavior-tree based path execution'],
    technologies: ['RRT', 'RRT*', 'Behavior Trees', 'TurtleBot'],
    cover: '/projects_picture/turtlebot_plan.png',
    gallery: ['/projects_picture/path_planning.png', '/projects_picture/path_planning2.png', '/projects_picture/path_planning3.png'],
    links: [{ label: 'Video demonstration', href: 'https://youtu.be/V_S-zIa8rDM' }]
  },
  {
    id: 'colour-enhancement',
    title: 'Colour Enhancement for Robot Perception',
    subtitle: 'HSV, RGB and YCbCr Image Processing',
    period: '2024',
    area: 'Image Processing · Perception',
    category: 'Computer Vision',
    summary: 'Colour-space based enhancement experiments designed to improve the input quality of downstream robotic perception.',
    challenge: 'Improve visual contrast and colour consistency before detection or tracking.',
    contribution: 'Implemented and compared enhancement operations in HSV, RGB and YCbCr colour spaces.',
    results: ['Multiple colour-space enhancement pipelines', 'Visual comparison for downstream perception suitability'],
    technologies: ['HSV', 'RGB', 'YCbCr', 'Image Enhancement'],
    cover: '/projects_picture/color_enhancement_cover.png',
    gallery: []
  },
  {
    id: 'q-learning-navigation',
    title: 'Q-Learning Path Planning',
    subtitle: 'Autonomous Navigation in Simulation',
    period: '2024',
    area: 'Reinforcement Learning · Planning',
    category: 'Robot Learning',
    summary: 'A tabular reinforcement-learning approach for learning navigation policies in a simulated environment.',
    challenge: 'Learn goal-directed behaviour from reward feedback and compare it with classical planning ideas.',
    contribution: 'Implemented the environment, Q-learning update process and policy evaluation visualizations.',
    results: ['Learned navigation policy', 'Training and path-behaviour visualization'],
    technologies: ['Q-Learning', 'Reinforcement Learning', 'Path Planning'],
    cover: '/projects_picture/rl_As_cover.png',
    gallery: ['/projects_picture/rl_As.png', '/projects_picture/rl_As2.png', '/projects_picture/rl_As3.png', '/projects_picture/rl_As4.png']
  },
  {
    id: 'stereo-visual-slam',
    title: 'Stereo Visual SLAM',
    subtitle: 'Odometry and Mapping on the KITTI Dataset',
    period: '2024',
    area: 'Visual Localization · Computer Vision',
    category: 'Computer Vision',
    summary: 'A stereo visual-SLAM framework developed and evaluated using sequences from the KITTI autonomous-driving dataset.',
    challenge: 'Recover camera motion and map structure from stereo image sequences.',
    contribution: 'Implemented the visual odometry and mapping workflow and evaluated estimated trajectories.',
    results: ['Stereo feature and motion pipeline', 'Trajectory evaluation on KITTI sequences'],
    technologies: ['Visual SLAM', 'Stereo Vision', 'KITTI', 'Visual Odometry'],
    cover: '/projects_picture/visual_odometry_cover.png',
    gallery: ['/projects_picture/visual_odometry.png', '/projects_picture/visual_odometry2.png', '/projects_picture/visual_odometry3.png', '/projects_picture/visual_odometry4.png', '/projects_picture/visual_odometry5.png', '/projects_picture/visual_odometry6.png']
  },
  {
    id: 'tiago-smart-home',
    title: 'LLM–VLM Smart Home Assistant',
    subtitle: 'Face and Gesture Interaction on TiAGo',
    period: '2024',
    area: 'Human–Robot Interaction',
    category: 'Human–Robot Interaction',
    summary: 'A smart-home robot assistant combining language and vision-language modules with face activation and gesture-based interaction.',
    challenge: 'Create a natural multimodal interface that connects user intent to robot actions.',
    contribution: 'Integrated LLM/VLM reasoning with perception-triggered interaction on the TiAGo platform.',
    results: ['Face-activated interaction', 'Gesture and language-based robot commands'],
    technologies: ['LLM', 'VLM', 'TiAGo', 'Gesture Recognition', 'HRI'],
    cover: '/projects_picture/hri_cover.png',
    gallery: []
  },
  {
    id: 'reynolds-flocking',
    title: 'Swarm Control with Reynolds Rules',
    subtitle: 'Decentralized Flocking in Multi-Agent Simulation',
    period: '2024',
    area: 'Swarm Robotics',
    category: 'Multi-Robot Systems',
    summary: 'A decentralized flocking controller based on separation, alignment and cohesion behaviours.',
    challenge: 'Produce coordinated group motion using only local interaction rules.',
    contribution: 'Implemented Reynolds behaviours and tuned their interaction for stable multi-agent movement.',
    results: ['Coherent flock motion', 'Decentralized local-rule coordination'],
    technologies: ['Reynolds Rules', 'Flocking', 'Multi-Agent Systems'],
    cover: '/projects_picture/swarm_control.png',
    gallery: [],
    links: [{ label: 'Video demonstration', href: 'https://youtu.be/9Q8QMtbf99w' }]
  },
  {
    id: 'crazyflie-consensus',
    title: 'Crazyflie Swarm Coordination',
    subtitle: 'Consensus Control and Auction-Based Allocation',
    period: '2024',
    area: 'Swarm Robotics · Task Allocation',
    category: 'Multi-Robot Systems',
    summary: 'Consensus-based formation control connected with auction-based task allocation for a team of Crazyflie robots.',
    challenge: 'Coordinate formation behaviour and distribute mission tasks without a single low-level controller.',
    contribution: 'Implemented the consensus protocol and task-allocation logic in a multi-agent workflow.',
    results: ['Consensus-based formation', 'Distributed auction task assignment'],
    technologies: ['Consensus', 'Auctions', 'Crazyflie', 'Multi-Agent Systems'],
    cover: '/projects_picture/consensus.png',
    gallery: []
  },
  {
    id: 'rl-pid-drone',
    title: 'RL-Based PID Tuning',
    subtitle: 'Drone Height and Position Control',
    period: '2024',
    area: 'Control · Reinforcement Learning',
    category: 'Control Systems',
    summary: 'A reinforcement-learning experiment for tuning PID gains used in simulated drone height and position control.',
    challenge: 'Find control gains that balance response speed, stability and tracking error.',
    contribution: 'Connected the learning loop to the controller parameters and evaluated the resulting closed-loop response.',
    results: ['Learned PID gain selection', 'Height and position response evaluation'],
    technologies: ['PID', 'Reinforcement Learning', 'Drone Control', 'Simulation'],
    cover: '/projects_picture/pid_tunning.png',
    gallery: []
  }

]
