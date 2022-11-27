import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';

export const ProjectCard = ({ imgSrc, imgWidth, imgHeight, projectLink, githubLink, name }) => {
  return (
    <div className="flex-column">
      <h3 className="text-2xl py-5 text-gray-700 font-medium">{name}</h3>
      <Image src={imgSrc} width={imgWidth} height={imgHeight} alt={name} />

      <button className=" my-5 flex gap-x-3">
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 lg:mr-0 rounded">
          <div className="flex">
            <AiFillGithub className="float-left text-xl" />
            <h2 className="px-1">GitHub</h2>
          </div>
        </a>
        <a
          href={projectLink}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <h2 className="px-5">Visit</h2>
        </a>
      </button>
    </div>
  );
};
