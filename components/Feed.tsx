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

const Feed: React.FC = () => {
  const route = "/api/projects";
  const [category, setCategory] = useState(1);
  const { data, error } = useSWR(route, fetcherFunction);
  const baseUlClass = "md:grid grid-cols-4 grid-rows-4 gap-2 mt-6 space-y-2 md:space-y-0";
  const baseButtonClass = "px-4 py-2 font-medium";
  const ulGroups = [];
  const navGroups = [];
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
    const isUlHidden = projectGroup.id === category ? null : "hidden";
    const ulClasses = clsx(baseUlClass, isUlHidden);

    const isButtonActive = projectGroup.id === category ? "active" : null;
    const buttonClasses = clsx(baseButtonClass, isButtonActive);

    ulGroups.push(
      <ul className={ulClasses} key={projectGroup.id}>
        {projectGroup.entries}
      </ul>
    );
    navGroups.push(
      <button
        className={buttonClasses}
        onClick={() => setCategory(projectGroup.id)}
        key={projectGroup.id}
      >
        {projectGroup.name}
      </button>
    );
  }

  return (
    <section className="container mx-auto py-5 px-8 bg-white rounded-lg -m-12 z-10 relative">
      <nav className="flex justify-evenly">{navGroups}</nav>
      {ulGroups}
    </section>
  );
};

export default Feed;
