import React from 'react';
import Image from 'next/image';
import { Buttons } from './Buttons';

export const ProjectCard = ({
  imgSrc,
  imgWidth,
  imgHeight,
  projectLink,
  githubLink,
  name
}) => {
  return (
    <div className="flex-column">
      <h3 className="text-2xl py-5 text-gray-700 font-medium">{name}</h3>
      <Image src={imgSrc} width={imgWidth} height={imgHeight} alt={name} />

      <Buttons projectLink={projectLink} githubLink={githubLink} />
    </div>
  );
};
