import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';

export const ProjectCard = ({ imgSrc, imgWidth, imgHeight, projectLink, githubLink }) => {
    return (
        <div className="flex-column">
            <h3 className="text-2xl py-5 text-gray-700 font-medium">Book Store</h3>
            <Image src={imgSrc} width={imgWidth} height={imgHeight} />

            <div className=" my-5 flex gap-x-3">
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 lg:mr-0 rounded"
                >
                    <AiFillGithub className="float-left text-xl" /> <span className="px-1">GitHub</span>
                </a>
                <a
                    href={projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    <span className="px-5">Visit</span>
                </a>
            </div>
        </div>
    );
};
