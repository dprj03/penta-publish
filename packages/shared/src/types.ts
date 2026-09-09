export type Job = {
  slug: string;
  title: string;
  org: string;
  lastDate: string;
  vacancies?: number;
  officialUrl: string;
};

export type Scheme = {
  slug: string;
  title: string;
  officialUrl: string;
};
