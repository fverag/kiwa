export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  type?: "a" | "button" | "div";
  href?: string;
  variant?: string;
  target?: string;
}

export interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
  uselines?: boolean;
}

export interface MainProps {
  className?: string;
  children?: React.ReactNode;
}

export interface MainHeadProps {
  title?: string;
  children?: React.ReactNode;
}

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
  innerClassName?: string;
}

export interface ProjectImage {
  title: string;
  url: string;
}

export interface ProjectPreviewEntry {
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
