export interface ProjectPreviewProps {
  entry: ProjectPreviewEntry;
}

export type ProjectCategory = string;
export interface ProjectImage {
  title: string;
  url: string;
}

export interface ProjectPreviewEntry {
  id: number;
  title: string;
  category_id?: ProjectCategory;
  tier: number;
  image: ProjectImage;
  shortDescription?: string;
  longDescription?: string;
  complementaryImages?: ProjectImage[];
}
