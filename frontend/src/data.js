// All website text lives here, so the team can edit content without touching the layout.

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#team', label: 'Team' },
  { href: '#work', label: 'Our work' },
];

export const motto = 'Focus is the fuel that drives success in every chapter.';

export const mission = {
  before: 'To build ',
  highlight: 'safe, simple and engaging',
  after: " software that helps our clients' people do their best work.",
};

export const visionStory = [
  {
    title: 'Our vision',
    text: 'To be the studio clients call when they need a reliable team that listens, plans properly and delivers working software every sprint.',
  },
  {
    title: 'Our story',
    text: 'We are three BSc IT students at the University of Sunderland. Each of us brings a different specialism (design, development and documentation), and together we cover a project from first idea to final hand-over.',
  },
];

export const values = [
  { title: 'Focus', text: 'One goal per sprint, and we finish it.' },
  { title: 'Teamwork', text: 'Clear roles, shared ownership.' },
  { title: 'Quality', text: 'Tested, documented and ready to use.' },
  { title: 'Honesty', text: 'Original work and open communication.' },
];

export const services = [
  {
    icon: 'design',
    title: 'UI / UX design',
    text: 'Wireframes, prototypes and polished interfaces that are easy to use, tested with real users.',
    tags: ['Figma', 'Prototyping', 'Branding'],
  },
  {
    icon: 'code',
    title: 'Web app development',
    text: 'Full-stack web applications with secure log-in, user roles, dashboards and a reliable database.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: 'globe',
    title: 'E-learning and training platforms',
    text: 'Interactive training with multimedia lessons, quizzes, 360° environments, progress tracking and certificates.',
    tags: ['Quizzes', '360° / 3D', 'Certificates'],
  },
  {
    icon: 'doc',
    title: 'Requirements and documentation',
    text: 'Requirements specifications, user stories, UML diagrams, user guides and technical documentation.',
    tags: ['SRS', 'User stories', 'UML'],
  },
  {
    icon: 'check',
    title: 'Testing and quality',
    text: 'Test plans, user acceptance testing and bug fixing, so your product works on launch day.',
    tags: ['UAT', 'Test plans', 'Bug fixing'],
  },
  {
    icon: 'chart',
    title: 'Dashboards and reporting',
    text: "Admin panels, analytics and reports that show managers what's happening at a glance.",
    tags: ['Analytics', 'Admin', 'Reports'],
  },
];

export const processSteps = [
  { n: '01', title: 'Discover', text: 'We gather your requirements and write user stories and a backlog.' },
  { n: '02', title: 'Design', text: 'UML, architecture and Figma prototypes for you to review.' },
  { n: '03', title: 'Build', text: 'Working features every sprint, starting with the foundations.' },
  { n: '04', title: 'Test', text: 'User acceptance testing with you, then bug fixing.' },
  { n: '05', title: 'Launch', text: 'Deployment, documentation and a clean hand-over.' },
];

export const skills = [
  { name: 'Project planning', detail: 'agile sprints from backlog to launch' },
  { name: 'Teamwork', detail: 'clear roles and shared ownership' },
  { name: 'Client communication', detail: 'regular check-ins and demos' },
  { name: 'Time management', detail: 'planned work, met deadlines' },
  { name: 'Marketing', detail: 'branding and promoting a product' },
  { name: 'New tools', detail: 'quick to learn what a project needs' },
];

export const tools = [
  { kind: 'FRONT END', name: 'React' },
  { kind: 'BACK END', name: 'Node.js · Express' },
  { kind: 'DATABASE', name: 'PostgreSQL' },
  { kind: 'DESIGN', name: 'Figma' },
  { kind: 'DESIGN', name: 'Canva' },
  { kind: '3D', name: 'Blender' },
  { kind: 'CODE', name: 'VS Code' },
  { kind: 'VERSIONING', name: 'GitHub' },
];

// photo: file inside frontend/public/team/
// photoPosition: where the person is in the photo (left-right %, top-bottom %)
// photoZoom: how much to zoom in (1 = no zoom, bigger number = closer)
export const team = [
  {
    initials: 'AB',
    name: 'Amina Budha',
    role: 'Designer · Team Lead',
    bio: 'Leads the team and designs every interface we ship, from first wireframe to final Figma prototype.',
    photo: '/team/amina-budha.jpg',
    photoPosition: '50% 20%',
    photoZoom: 1,
  },
  {
    initials: 'PR',
    name: 'Parbati Rai',
    role: 'Developer',
    bio: 'Builds the front end in React and the back end in Node.js, with PostgreSQL behind it all.',
    photo: '/team/parbati-rai.jpg',
    photoPosition: '50% 50%',
    photoZoom: 1,
  },
  {
    initials: 'DP',
    name: 'Durga Poudel',
    role: 'Documentation Lead',
    bio: 'Turns client needs into clear requirements, and keeps testing and documentation complete.',
    photo: '/team/durga-poudel.jpg',
    photoPosition: '50% 25%',
    photoZoom: 1.1,
  },
];

export const caseStudy = {
  summary:
    'A warehousing client needed health and safety training that staff would actually complete. We designed and built SafeStack: a training platform with multimedia lessons, quizzes, a 360° warehouse hazard tour, progress tracking and certificates.',
  details: [
    { label: 'Client', value: 'Saran Karki' },
    { label: 'Services', value: 'Design, development, documentation, testing' },
    { label: 'Built with', value: 'React, Node.js, PostgreSQL' },
    { label: 'Delivered', value: 'Pre-sprint + 5 sprints' },
  ],
};

export const contactFacts = [
  { label: 'Based at', value: 'University of Sunderland' },
  { label: 'Module', value: 'CET257 Enterprise Project' },
  { label: 'Email', value: '[your team email]' },
];

export const serviceOptions = [
  'Full project',
  'UI / UX design',
  'Web app development',
  'E-learning / training platform',
  'Requirements & documentation',
  'Testing & quality',
  'Dashboards & reporting',
];