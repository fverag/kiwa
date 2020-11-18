const CATEGORIES = [
  {
    name: 'Diseño Web / UI',
    id: 2,
    entries: [],
  },
  {
    name: 'Marketing digital',
    id: 1,
    entries: [],
  },
  {
    name: 'Identidad',
    id: 3,
    entries: [],
  },
];
const DEFAULT_CATEGORY = 2;
const SKILLS = [
  {
    title: 'Fácil adaptación y trabajo en equipo',
    image:
      'https://res.cloudinary.com/hadmouse/image/upload/v1596166758/kiwa/skills/Icon-skill-01_m5c9vg.svg',
  },
  {
    title: 'Responsabilidad, organización y puntualidad.',
    image:
      'https://res.cloudinary.com/hadmouse/image/upload/v1596166759/kiwa/skills/Icon-skill-02_oylo9t.svg',
  },
  {
    title: 'Observación, análisis y capacidad de resolución de problemas.',
    image:
      'https://res.cloudinary.com/hadmouse/image/upload/v1596166759/kiwa/skills/Icon-skill-03_ovkis3.svg',
  },
  {
    title: 'Actitud propositiva, creativa y crítica.',
    image:
      'https://res.cloudinary.com/hadmouse/image/upload/v1596166759/kiwa/skills/Icon-skill-04_dz2tpr.svg',
  },
];
const SKILLS_SCORES = [
  {
    skill: 'Photoshop',
    score: 80,
  },
  {
    skill: 'Adobe XD / Sketch / Figma',
    score: 80,
  },
  {
    skill: 'Illustrator',
    score: 80,
  },
  {
    skill: 'InDesign',
    score: 60,
  },
  {
    skill: 'Dreamweaver',
    score: 60,
  },
  {
    skill: 'Office',
    score: 60,
  },
  {
    skill: 'Miró',
    score: 30,
  },
  {
    skill: 'Premiere',
    score: 30,
  },
];

const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;
const BASE_URL = process.env.BASE_URL;
const MOCK_CONTACT_FORM = false;
const MONGODB_CONNECT = process.env.MONGODB_CONNECT;
const RC_PUBLIC_KEY = process.env.NEXT_PUBLIC_RC_PUBLIC_KEY;
const RC_SECRET_KEY = process.env.RC_SECRET_KEY;
const RC_SCORE_THRESHOLD = 0.5;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

export {
  ANALYTICS_ID,
  BASE_URL,
  CATEGORIES,
  DEFAULT_CATEGORY,
  MOCK_CONTACT_FORM,
  MONGODB_CONNECT,
  SKILLS,
  SKILLS_SCORES,
  RC_PUBLIC_KEY,
  RC_SCORE_THRESHOLD,
  RC_SECRET_KEY,
  SENDGRID_API_KEY,
};
