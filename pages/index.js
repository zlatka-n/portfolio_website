import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
export default function Home() {
  return (
    <Layout
      title="home page"
      keywords="website portfolio"
      description="Visit Zlatka's personal website homepage"
    >
      <section className="mx-auto max-w-7xl">
        <h1 className="mx-auto md:w-3/5 text-7xl font-sans text-gray-700	font-bold bg-pink-400 leading-normal">
          Hello, I'm Zlatka.
        </h1>
        <div className="mx-auto md:w-3/5 leading-normal py-10 text-2xl text-gray-700 ">
          <p>
            I currently work as an IT consultant in Prague, but I'd like to
            switch to front-end development. Here you can find a few information
            about me including my portfolio.
          </p>
        </div>
      </section>

      {/* Portfolio section with images */}
      <section className="bg-gray-200">
        <div className="mx-auto max-w-7xl">
          <h2 className="mx-auto text-5xl p-5 text-gray-700	font-semibold">
            Projects
          </h2>

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
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  <AiFillGithub className="float-left text-xl" />{" "}
                  <span className="px-1">GitHub</span>
                </a>
                <a
                  href="https://eshop-redux-o0j2i15xt-zlatka-n.vercel.app/"
                  target="_blank"
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
              <Image src="/screens/todo_redux.png" width={514} height={460} />

              <div className=" my-5 flex gap-x-3">
                <a
                  href="https://github.com/zlatka-n/todo_redux/tree/master"
                  target="_blank"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  <AiFillGithub className="float-left text-xl" />{" "}
                  <span className="px-1">GitHub</span>
                </a>
                <a
                  href="https://todo-redux-liart.vercel.app/"
                  target="_blank"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  <span className="px-5">Visit</span>
                </a>
              </div>
            </div>
          </div>

          <div className="px-5 md:flex-column gap-x-10">
            <h3 className="text-2xl py-5 text-gray-700 font-medium">
              JSON placeholder
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <AiFillGithub className="float-left text-xl" />{" "}
                <span className="px-1">GitHub</span>
              </a>

              <a
                href="https://json-placeholder-zlatka-n.vercel.app/"
                target="_blank"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <span className="px-5">Visit</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

//max-w-7xl
