import { ProjectPreviewProps } from "./types";

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ entry }) => {
  return (
    <article className="p-1">
      <img src={entry.image} />
    </article>
  );
};
