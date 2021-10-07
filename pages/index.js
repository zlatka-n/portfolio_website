import Layout from "../components/Layout";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Layout
        title="home page"
        keywords="website portfolio"
        description="Visit Zlatka's personal website homepage"
      >
        <section className="mx-auto">
          <h1 className="mx-auto md:w-3/5 text-7xl font-sans text-gray-700	font-bold bg-pink-400 leading-normal">
            Hello, I'm Zlatka.
          </h1>
          <div className="mx-auto md:w-3/5 leading-normal py-10 text-2xl text-gray-700 ">
            <p>
              I currently work as an IT consultant, but I'd like to switch to
              front-end development. Here you can find a few information about
              me including my portfolio.
            </p>
          </div>
        </section>
        {/* <section className="bg-gray-200">skks</section> */}
      </Layout>
      <section className="bg-gray-200">
        <div>Portfolio here</div>
      </section>
    </>
  );
}
