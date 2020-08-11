import React from 'react';
import Link from 'next/link';
import { ProjectPreviewProps } from '../_types';
import sanitize from '../utilities/sanitize';

const filterPlaceholder = (imageUrl: string) => {
  return imageUrl.replace('/image/upload', '/image/upload/${t}');
};

const solveImageSizeExpression = (entry) => {
  if (Object.prototype.hasOwnProperty.call(entry, 'until')) {
    return `(max-width: ${entry.until}px) ${entry.width}px`;
  } else if (Object.prototype.hasOwnProperty.call(entry, 'from')) {
    return `(min-width: ${entry.from}px) ${entry.width}px`;
  }

  return `${entry.width}px`;
};

const setImageSrcsetAndSizes = (imageTier: number, imageUrl: string) => {
  let transformations;

  switch (imageTier) {
    case 1:
      transformations = [
        {
          width: 295,
          transf: 'c_fill,w_295',
          until: 400,
        },
        {
          width: 476,
          transf: 'c_fill,w_570,h_570',
          until: 1280,
        },
        {
          width: 298,
          transf: 'c_fill,w_298,w_298',
        },
      ];
      break;
    case 2:
      transformations = [
        {
          width: 295,
          transf: 'c_fill,w_295,h_150',
          until: 400,
        },
        {
          width: 640,
          transf: 'c_fill,w_640,h_320',
          until: 768,
        },
        {
          width: 604,
          transf: 'c_fill,w_604,h_298',
        },
      ];
      break;
    case 3:
      transformations = [
        {
          width: 295,
          transf: 'c_scale,w_295',
          until: 400,
        },
        {
          width: 476,
          transf: 'c_scale,w_570,h_570',
          until: 1280,
        },
        {
          width: 604,
          transf: 'c_scale,w_604,h_604',
        },
      ];
      break;
  }

  const filterableImage = filterPlaceholder(imageUrl);
  const imageUrls = [];
  const imageSizes = [];

  for (let key in transformations) {
    if (Object.prototype.hasOwnProperty.call(transformations, key)) {
      const value = transformations[key];
      const imageUrl = filterableImage.replace('${t}', value.transf);

      imageUrls.push(`${imageUrl} ${value.width}w`);
      imageSizes.push(solveImageSizeExpression(value));
    }
  }

  return [imageUrls.join(', '), imageSizes.join(', ')];
};

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ entry }: ProjectPreviewProps) => {
  const [srcset, sizes] = setImageSrcsetAndSizes(entry.tier, entry.image.url);
  const slug = sanitize(entry.title);
  const url = `/project/${slug}`;
  const baseImgClasses = 'w-full h-full object-cover object-center';

  return (
    <Link href={url}>
      <a className="w-full h-full">
        <img src={entry.image.url} srcSet={srcset} sizes={sizes} className={baseImgClasses} />
      </a>
    </Link>
  );
};

export default ProjectPreview;
