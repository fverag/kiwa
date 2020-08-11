import React, { useState } from 'react';
import clsx from 'clsx';
import ProjectPreview from './ProjectPreview';
import { CATEGORIES } from '../_constants';
import { FeedProps } from '../_types';

const sectionClasses =
  'sm:container mx-2 sm:mx-auto py-5 px-5 sm:px-8 bg-white rounded-lg -mt-16 z-10 relative';

const setProjectLiClasses = (entryTier: number) => {
  const baseClasses = 'rounded-lg overflow-hidden';
  let entryClasses: string;

  switch (entryTier) {
    case 1:
      entryClasses = 'col-span-1 row-span-1';
      break;
    case 2:
      entryClasses = 'col-span-2 row-span-1';
      break;
    case 3:
      entryClasses = 'col-span-2 row-span-2';
      break;
  }

  return clsx(baseClasses, entryClasses);
};

const setUlClasses = (isCurrent: boolean) => {
  const isUlHidden = isCurrent ? 'md:grid' : 'hidden';
  const baseUlClass =
    'grid-cols-4 md:grid-rows-4-fixed lg:grid-rows-4-fixed xl:grid-rows-4-fixed gap-2 mt-6 space-y-2 md:space-y-0';
  return clsx(isUlHidden, baseUlClass);
};

const setButtonClasses = (isCurrent: boolean): string => {
  const baseButtonClass = 'inline-block font-medium px-2 sm:px-4 pt-1 pb-2 outline-none-important';
  const activeClass = {
    'is-active': isCurrent,
  };
  return clsx(baseButtonClass, activeClass);
};

const Feed: React.FC<FeedProps> = ({ id, projects }: FeedProps) => {
  const [category, setCategory] = useState(1);
  const ulGroups = [];
  const navGroup = [];
  const projectGroups = JSON.parse(JSON.stringify(CATEGORIES));

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
        className={buttonClasses}
        onClick={() => setCategory(projectGroup.id)}
        key={projectGroup.id}
      >
        <span>{projectGroup.name}</span>
      </button>
    );
  }

  return (
    <section id={id} className={sectionClasses}>
      <nav className="flex justify-evenly items-start">{navGroup}</nav>
      {ulGroups}
    </section>
  );
};

export default Feed;
