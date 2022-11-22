import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import { ProjectCard } from '@/components/ProjectCard';
import { projectCardConfig } from 'utils';
export default function Home() {
  return (
    <Layout
      title="home page"
      keywords="website portfolio"
      description="Visit Zlatka's personal website homepage"
    >
      <div className="flex flex-col">
        <section className="mx-auto max-w-7xl 4k:max-w-full 4k:mb-20">
          <h1 className="mx-auto md:w-3/5 text-5xl md:text-7xl 4k:text-9xl font-sans font-bold bg-pink-400 leading-normal pl-5 md:pl-2 pt-2 pb-2">
            Hello, {" I'm "} Zlatka.
          </h1>
          <div className="mx-auto md:w-3/5 leading-normal px-5 md:px-0 py-10 text-2xl text-gray-700">
            <p>
              I currently work as an IT consultant in Prague, but {" I'd "} like to switch to
              front-end development. Here you can find a few information about me including my
              portfolio.
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

            <div className="grid grid-cols-2 gap-20">
              {projectCardConfig.map(
                ({ imgSrc, imgWidth, imgHeight, githubLink, projectLink, name }) => (
                  <ProjectCard
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
