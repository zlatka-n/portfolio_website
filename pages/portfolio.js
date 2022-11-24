import Layout from '@/components/Layout';
import { portfolioCardConfig } from 'utils'
import { PorfolioCard } from '@/components/PortfolioCard';

export default function PortfolioPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-5">
        <section className="mx-auto md:w-3/5">
          <h1 className="text-5xl md:text-7xl 4k:text-9xl font-bold">Portfolio</h1>
          <p className="text-xl my-5 md:my-10 leading-normal">
            Everytime, when I learn something new, I try to create my own project from scratch,
            because practice makes perfect. Below, you can see my work. The latest project, I worked
            on, is this website which was created in Next.js.
          </p>
        </section>
      </div>

      <div className="bg-gray-200 py-10">
        <div className="max-w-7xl mx-auto  overflow-y-hidden min-h-screen">
          {portfolioCardConfig.map(({ imgSrc, imgWidth, imgHeight, githubLink, projectLink, name, description, techStack, challenges }) =>
            <PorfolioCard
              imgSrc={imgSrc}
              imgWidth={imgWidth}
              imgHeight={imgHeight}
              githubLink={githubLink}
              projectLink={projectLink}
              name={name}
              description={description}
              techStack={techStack}
              challenges={challenges} />)}
        </div>
      </div>
    </Layout>
  );
}
