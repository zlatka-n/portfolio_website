import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
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
              I currently work as an IT consultant in Prague, but {" I'd "} like
              to switch to front-end development. Here you can find a few
              information about me including my portfolio.
            </p>
          </div>
        </section>

        {/* Portfolio section with images */}
        <section className="bg-gray-200 pb-10 overflow-y-hidden min-h-screen flex">
          <div className="mx-auto max-w-7xl 4k:max-w-full	my-auto 4k:my-32">
            <div>
              <h2 className="mx-auto text-5xl 4k:text-7xl px-5 pt-7 pb-3 text-gray-700 font-semibold">
                Projects
              </h2>
            </div>

            <div className="px-5 md:flex gap-x-10">
              <div className="flex-column">
                <h3 className="text-2xl py-5 text-gray-700 font-medium">
                  Book Store
                </h3>
                <Image src="/screens/bookstore1.png" width={814} height={460} />

                <div className=" my-5 flex gap-x-3">
                  <a
                    href="https://github.com/zlatka-n/eshop_redux"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 lg:mr-0 rounded"
                  >
                    <AiFillGithub className="float-left text-xl" />{" "}
                    <span className="px-1">GitHub</span>
                  </a>
                  <a
                    href="https://eshop-redux-o0j2i15xt-zlatka-n.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <span className="px-5">Visit</span>
                  </a>
                </div>
              </div>

              <div className="flex-column">
                <h3 className="text-2xl py-5 text-gray-700 font-medium">
                  CRUD Todo List
                </h3>
                <Image
                  src="/screens/todo_redux2.png"
                  width={514}
                  height={460}
                />

                <div className=" my-5 flex gap-x-3">
                  <a
                    href="https://github.com/zlatka-n/todo_redux/tree/master"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 lg:mr-0 rounded"
                  >
                    <AiFillGithub className="float-left text-xl" />{" "}
                    <span className="px-1">GitHub</span>
                  </a>
                  <a
                    href="https://todo-redux-liart.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <span className="px-5">Visit</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="px-5 md:flex-column gap-x-10">
              <h3 className="text-2xl py-5 text-gray-700 font-medium">
                JSON Placeholder
              </h3>
              <Image
                src="/screens/typicode1.png"
                width={709.67}
                height={401.04}
              />
              <div className=" my-5 flex gap-x-3">
                <a
                  href="https://github.com/zlatka-n/typicode_json"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 lg:mr-0 rounded"
                >
                  <AiFillGithub className="float-left text-xl" />{" "}
                  <span className="px-1">GitHub</span>
                </a>

                <a
                  href="https://json-placeholder-zlatka-n.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  <span className="px-5">Visit</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
