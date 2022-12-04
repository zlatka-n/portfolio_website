/* eslint-disable no-unused-vars */
import React from 'react';
import Image from 'next/dist/client/image';
import { AiFillGithub } from 'react-icons/ai';

export const PorfolioCard = ({
  imgSrc,
  imgWidth,
  imgHeight,
  name,
  description,
  techStack,
  challenges,
  githubLink,
  projectLink
}) => {
  return (
    <section className="mx-auto md:w-3/5 flex flex-col">
      <h2 className="text-3xl px-5 md:px-0 py-5 text-gray-700 font-medium">{name}</h2>
      <div>
        <Image layout="responsive" src={imgSrc} width={imgWidth} height={imgHeight} alt={name} />
      </div>

      <div className="mt-10 mb-10 px-5 md:px-0">
        <h3 className="text-2xl text-gray-700 font-medium">Description</h3>
        <p className="text-xl mt-2 mb-5 leading-normal">{description}</p>
        <h3 className="text-2xl text-gray-700 font-medium">The main library/framework</h3>
        <ul className="text-xl mt-2 mb-5 leading-normal list-disc pl-10">
          {techStack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3 className="text-2xl text-gray-700 font-medium">Challenges</h3>
        <p className="text-xl mt-2 mb-5 leading-normal">{challenges}</p>
        <div className="mt-2 mb-5 flex gap-x-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 md:px-4 mr-2 lg:mr-0	rounded">
            <AiFillGithub className="float-left text-xl" /> <span className="px-1">GitHub</span>
          </a>
          <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 md:px-4 rounded">
            <span className="px-5">Visit</span>
          </a>
        </div>
      </div>
    </section>
  );
};
