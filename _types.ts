export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  type?: 'a' | 'button' | 'div';
  href?: string;
  variant?: 'clear' | 'link' | 'rounded';
  target?: string;
  onClick?: () => void;
}

export interface ContactFormRequest {
  name: string;
  email: string;
  message: string;
  hash?: string;
}

export interface ContactFormResponse {
  sentEmail: boolean;
  status: boolean;
  message: string;
}

export interface FeedProps {
  id?: string;
  projects: ProjectPreviewEntry[];
}

export interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
  uselines?: boolean;
}

export interface MainProps {
  className?: string;
  children?: React.ReactNode;
  useBG?: boolean;
}

export interface MainHeadProps {
  title?: string;
  pageTitle?: string;
  children?: React.ReactNode;
}

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
  innerClassName?: string;
  textAlign?: 'left' | 'center' | 'right';
  narrow?: boolean;
}

export interface ProjectImage {
  title: string;
  url: string;
}

export interface ProjectPreviewEntry {
  _id?: string;
  id: number;
  title: string;
  category_id?: number;
  tier: number;
  image: ProjectImage;
  shortDescription?: string;
  longDescription?: string;
  complementaryImages?: ProjectImage[];
}

export interface ProjectPreviewProps {
  entry: ProjectPreviewEntry;
}

export type Skills = SkillProps[];

export interface SkillProps {
  image: string;
  title: string;
}

export interface SkillsProps {
  skills: Skills;
}

export interface SkillScoreProps {
  skill: string;
  score: number;
}

export interface SkillsScoresProps {
  skills: SkillScoreProps[];
}

export interface WithChildren {
  children?: React.ReactNode;
  className?: string;
}

export interface WithId {
  id?: string;
}

export interface WithHash {
  hash?: string;
}

export interface WithRecaptcha {
  recaptcha?: typeof grecaptcha;
}
