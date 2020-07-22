export interface ProjectPreviewProps {
  entry: ProjectPreviewEntry;
}

export type projectCategory = string;

export interface ProjectPreviewEntry {
  id: number;
  title: string;
  category?: projectCategory;
  image: string;
  complementaryImages?: string[];
  shortDescription?: string;
  longDescription?: string;
  url?: string;
}
