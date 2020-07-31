import React, { useState } from "react";
import clsx from "clsx";
import useSWR from "swr";
import fetcherFunction from "../utilities/fetcher";
import ProjectPreview from "./ProjectPreview";

const setProjectLiClasses = (entryTier: number) => {
  const baseClasses = "rounded-lg overflow-hidden";
  let entryClasses: string;

  switch (entryTier) {
    case 1:
      entryClasses = "col-span-1 row-span-1";
      break;
    case 2:
      entryClasses = "col-span-2 row-span-1";
      break;
    case 3:
      entryClasses = "col-span-2 row-span-2";
      break;
  }

  return clsx(baseClasses, entryClasses);
};

const setUlClasses = (isCurrent: boolean) => {
  const isUlHidden = isCurrent ? "md:grid" : "hidden";
  const baseUlClass =
    "grid-cols-4 md:grid-rows-4-fixed lg:grid-rows-4-fixed xl:grid-rows-4-fixed gap-2 mt-6 space-y-2 md:space-y-0";
  return clsx(isUlHidden, baseUlClass);
};

const setButtonClasses = (isCurrent: boolean): string[] => {
  const baseButtonClass = "px-4 py-1 font-medium";
  const spanButtoClass = isCurrent ? "is-active inline-block py-2" : "py-2";
  return [baseButtonClass, spanButtoClass];
};

const Feed: React.FC = () => {
  const route = "/api/projects";
  const [category, setCategory] = useState(1);
  const { data, error } = useSWR(route, fetcherFunction);
  const ulGroups = [];
  const navGroup = [];
  const projectGroups = [
    {
      name: "Marketing digital",
      id: 1,
      entries: [],
    },
    {
      name: "Diseño Web / UI",
      id: 2,
      entries: [],
    },
    {
      name: "Identidad",
      id: 3,
      entries: [],
    },
  ];

  if (error) {
    return <div>{error.messsage}</div>;
  }

  if (!data) {
    return <div>Cargando...</div>;
  }

  const projects = data.data;

  for (let entry of projects) {
    const projectLiClasses = setProjectLiClasses(entry.tier);

    projectGroups[entry.category_id - 1].entries.push(
      <li key={entry.id} className={projectLiClasses}>
        <ProjectPreview entry={entry} />
      </li>
    );
  }

  for (let projectGroup of projectGroups) {
    const ulClasses = setUlClasses(projectGroup.id === category);
    const buttonClasses = setButtonClasses(projectGroup.id === category);

    ulGroups.push(
      <ul className={ulClasses} key={projectGroup.id}>
        {projectGroup.entries}
      </ul>
    );
    navGroup.push(
      <button
        className={buttonClasses[0]}
        onClick={() => setCategory(projectGroup.id)}
        key={projectGroup.id}
      >
        <span className={buttonClasses[1]}>{projectGroup.name}</span>
      </button>
    );
  }

  return (
    <section className="sm:container mx-2 sm:mx-auto py-5 px-8 bg-white rounded-lg -mt-12 z-10 relative">
      <nav className="flex justify-evenly">{navGroup}</nav>
      {ulGroups}
    </section>
  );
};

export default Feed;
