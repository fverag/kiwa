import React from "react";
import { ProjectPreviewProps } from "./types";

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ entry }: ProjectPreviewProps) => {
  return (
    <article className="w-full h-full">
      <img src={entry.image.url} className="w-full h-full object-cover object-center" />
    </article>
  );
};
