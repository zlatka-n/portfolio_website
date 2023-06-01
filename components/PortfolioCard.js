import React from 'react';
import Image from 'next/dist/client/image';
import Buttons from './Buttons';

export const PorfolioCard = ({
  imgSrc,
  imgWidth,
  imgHeight,
  name,
  description,
  techStack,
  challenges,
  githubLink,
  projectLink,
  isVisitHidden
}) => {
  return (
    <section className="mx-auto md:w-3/5 flex flex-col">
      <h2 className="text-3xl px-5 md:px-0 py-5 text-gray-700 font-medium">
        {name}
      </h2>
      <div>
        <Image
          layout="responsive"
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          alt={name}
        />
      </div>

      <div className="mt-10 mb-10 px-5 md:px-0">
        <h3 className="text-2xl text-gray-700 font-medium">Description</h3>
        <p className="text-xl mt-2 mb-5 leading-normal">{description}</p>
        <h3 className="text-2xl text-gray-700 font-medium">
          The main library/framework
        </h3>
        <ul className="text-xl mt-2 mb-5 leading-normal list-disc pl-10">
          {techStack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3 className="text-2xl text-gray-700 font-medium">Challenges</h3>
        <p className="text-xl mt-2 mb-5 leading-normal">{challenges}</p>
        <Buttons
          githubLink={githubLink}
          projectLink={projectLink}
          isVisitHidden={isVisitHidden}
        />
      </div>
    </section>
  );
};
