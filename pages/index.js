import { Layout } from '../components/Layout';
import { ProjectCard } from '@/components/ProjectCard';
import { projectCardConfig } from 'utils';
import { Introduction } from '@/components/Introduction';
import { introductionText } from 'utils';

export default function Home() {
  return (
    <Layout
      title="home page"
      keywords="website portfolio"
      description="Visit Zlatka's personal website homepage">
      <div className="flex flex-col">
        <section className="mx-auto max-w-7xl 4k:max-w-full 4k:mb-20">
          <h1 className="mx-auto md:w-3/5 text-5xl md:text-7xl 4k:text-9xl font-sans font-bold bg-pink-400 leading-normal pl-5 md:pl-2 pt-2 pb-2">
            Hello, {" I'm "} Zlatka.
          </h1>
          <div className="mx-auto md:w-3/5 leading-normal px-5 md:px-0 py-10 text-2xl text-gray-700">
            <Introduction text={introductionText.homepage} className={"line-through mb-2"} />
            <p>
              So I made it and have been working as a front-end developer for almost a year now. :)
              This portfolio project is under construction, as I'm trying to refactor my spaghetti
              code that I created a year ago.
            </p>
          </div>
        </section>

        <section className="bg-gray-200 pb-10 overflow-y-hidden min-h-screen flex">
          <div className="mx-auto max-w-7xl 4k:max-w-full	my-auto 4k:my-32">
            <div>
              <h2 className="mx-auto text-5xl 4k:text-7xl px-5 pt-7 pb-3 text-gray-700 font-semibold">
                Projects
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-20 px-5">
              {projectCardConfig.map(
                ({ imgSrc, imgWidth, imgHeight, githubLink, projectLink, name }) => (
                  <ProjectCard
                    key={name}
                    imgSrc={imgSrc}
                    imgWidth={imgWidth}
                    imgHeight={imgHeight}
                    githubLink={githubLink}
                    projectLink={projectLink}
                    name={name}
                  />
                )
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
