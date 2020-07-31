import React from "react";
import sanitize from "../../utilities/sanitize";
import { BASE_URL } from "../../_constants";

const projectsApiRoute = `${BASE_URL}/api/projects`;

export async function getStaticPaths() {
  const response = await fetch(projectsApiRoute);
  const jsonResponse = await response.json();
  const projects = jsonResponse.data;
  const paths = projects.map((project) => `/project/${sanitize(project.title)}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch(projectsApiRoute + `?slug=${params.slug}`);
  const jsonResponse = await response.json();
  const project = jsonResponse.data;

  return {
    props: { project },
  };
}

const ProjectPage: React.FC = ({ project }: any) => {
  //console.log(project);

  return <div>{project.title}</div>;
};

export default ProjectPage;
