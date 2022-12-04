import React from 'react'
import { AiFillGithub } from 'react-icons/ai';

export const Buttons = ({ githubLink, projectLink, isVisitHidden = false }) => {
    return (
        <div className=" my-5 flex gap-x-3">
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
            {!isVisitHidden ?
                <a
                    href={projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <h2 className="px-5">Visit</h2>
                </a>
                : <></>}
        </div>
    )
}
