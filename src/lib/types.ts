export type Qualification =
  | "8th"
  | "10th"
  | "12th"
  | "ITI"
  | "Diploma"
  | "Graduate"
  | "Postgraduate"
  | "Any";

export type JobListing = {
  slug: string;
  title: string;
  titleHi?: string;
  organisation: string;
  organisationShort: string;
  sector: string;
  type: "job" | "result" | "admit-card" | "answer-key";
  posts: number | string;
  qualification: Qualification[];
  ageMin: number;
  ageMax: number;
  states: string[];
  location: string;
  lastDate: string;
  examDate?: string;
  applyUrl: string;
  officialUrl: string;
  sourceName: string;
  salary?: string;
  selection?: string;
  summary: string;
  details: string[];
  eligibility: string[];
  howToApply: string[];
  documents: string[];
  faqs: { q: string; a: string }[];
  updatedAt: string;
};

export type Scheme = {
  slug: string;
  name: string;
  nameHi?: string;
  ministry: string;
  category: "income" | "housing" | "health" | "education" | "labour" | "insurance" | "pension" | "women";
  benefit: string;
  incomeCeiling?: string;
  officialUrl: string;
  applyUrl: string;
  states: string[];
  summary: string;
  eligibility: string[];
  exclusions: string[];
  documents: string[];
  steps: string[];
  faqs: { q: string; a: string }[];
  updatedAt: string;
};

export type ExamHub = {
  slug: string;
  name: string;
  short: string;
  body: string;
  officialUrl: string;
  cycle: string;
  posts?: string;
  stages: string[];
  dates: { label: string; value: string }[];
  syllabus: { paper: string; topics: string[] }[];
  cutoffNote: string;
  recentCutoff: { category: string; marks: string }[];
  applyUrl: string;
  summary: string;
  prep: string[];
  faqs: { q: string; a: string }[];
};

export type Article = {
  slug: string;
  site: string;
  title: string;
  excerpt: string;
  category: string;
  minutes: number;
  updatedAt: string;
  body: string[];
};

export type QuizQ = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
};

export type Quiz = {
  slug: string;
  title: string;
  date: string;
  topic: string;
  questions: QuizQ[];
};
