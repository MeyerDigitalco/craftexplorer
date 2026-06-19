export const site = {
  name: 'CrafterExplorer Technology',
  shortName: 'CET',
  tagline: 'Command & Control for the Uncrewed Ocean',
  description:
    'UK-built command and control software for uncrewed surface vessels. Engineered in Dorset for operators worldwide.',
  url: 'https://crafterexplorer.co.uk',
  email: 'info@crafterexplorer.co.uk',
  linkedin: 'https://www.linkedin.com/company/crafter-explorer-technology',
  address: {
    locality: 'Dorchester',
    region: 'Dorset',
    country: 'United Kingdom',
  },
  certifications: [
    { code: 'ISO 9001',  label: 'Quality Management' },
    { code: 'ISO 27001', label: 'Information Security' },
    { code: 'ISO 45001', label: 'Occupational Health & Safety' },
  ],
} as const

export const stats = [
  { value: '117', label: 'Deployments' },
  { value: '936', label: 'Hours of Support' },
  { value: '6',   label: 'Countries Operating In' },
  { value: '4',   label: 'Employees' },
] as const

export const capabilities = [
  {
    code: '01',
    title: 'Command & Control',
    summary:
      'A full command system for USVs of any size — including a tactical, mission-aware autonomous navigation system built for high-stakes operations.',
    bullets: [
      'Multi-vessel mission management',
      'Autonomous navigation system with tactical & AI-driven autopilots',
      'Real-time situational awareness',
      'Hardware-agnostic vessel integration',
    ],
    image: '/software/main-screen.jpg',
  },
  {
    code: '02',
    title: 'Simulation',
    summary:
      'A complete USV simulator and software-in-the-loop training suite for crew competency, mission rehearsal, and system validation.',
    bullets: [
      'Realistic and configurable environmental modelling',
      'Emergency procedure training and simulation',
      'Operator certification workflows',
      'Training centre scenario validation and assessment',
      'New operator familiarisation and onboarding / CPD',
    ],
    image: '/software/sim-instructor.jpg',
    image2: '/software/sim-operator.jpg',
    imageCaptions: ['Operator Station', 'Instructor Station'],
  },
  {
    code: '03',
    title: 'Data',
    summary:
      'High-fidelity telemetry, sensor capture, and reporting — the digital backbone of every mission.',
    bullets: [
      'Sensor & payload ingestion',
      'Time-series telemetry archive',
      'Mission reporting & export',
      'API access for downstream systems',
    ],
    linkedBullet: {
      text: 'Real-time environmental intelligence portals for clients, hotels and visitor centres',
      linkText: 'env.crafterexplorer.co.uk',
      href: 'https://env.crafterexplorer.co.uk',
    },
    image: '/software/env-portal.png',
  },
] as const

export const vessels = [
  {
    name: 'Orion',
    code: 'USV',
    role: 'Multi-mission survey & autonomy platform',
    image: '/vessels/orion-hero.jpg',
    specs: [
      ['Class',     'Mid-size USV'],
      ['Role',      'Survey / Autonomy R&D'],
      ['C2',        'BlueHelm — full integration'],
      ['Endurance', '24h+'],
    ],
    spec: '/docs/usv-orion-spec.pdf',
  },
  {
    name: 'Phoenix',
    code: 'USV',
    role: 'Workboat-derived defence & survey platform',
    image: '/vessels/phoenix-hero.png',
    specs: [
      ['Class',     'Workboat USV'],
      ['Role',      'Defence / Survey'],
      ['C2',        'BlueHelm — full integration'],
      ['Endurance', 'Mission-configurable'],
    ],
    spec: '/docs/usv-phoenix-spec.pdf',
  },
  {
    name: 'R5',
    code: 'USV',
    role: 'Compact rapid-deploy platform',
    image: '/vessels/r5-hero.png',
    specs: [
      ['Class',     'Compact USV'],
      ['Role',      'Rapid deploy / training'],
      ['C2',        'BlueHelm — lite integration'],
      ['Endurance', 'Short-duration'],
    ],
    spec: '/docs/usv-r5-spec.pdf',
  },
] as const

export const team = [
  {
    name: 'Peter Walker',
    role: 'Founder & Technical Director',
    image: '/team/peter-walker.jpg',
    bio:
      'A recognised innovator in the USV sector. Previously Technical Director at Sea-Kit, where he helped build the company from start-up into a multi-million-pound, world-leading USV builder — personally winning industry awards. Background in marine science, electrical and mechanical engineering, with a lifelong passion for diving and ocean exploration.',
  },
] as const

export const consultingPillars = [
  {
    code: '01',
    title: 'Technical',
    summary:
      'Software development, cloud integration, cybersecurity and data analytics tailored to your USV programme.',
  },
  {
    code: '02',
    title: 'Operations',
    summary:
      'Mission planning, autonomous navigation, remote monitoring, data acquisition and payload integration for live operations.',
  },
  {
    code: '03',
    title: 'Communications & Networking',
    summary:
      'Secure, resilient network design, satellite and RF comms, real-time data transmission and system integration.',
  },
] as const
