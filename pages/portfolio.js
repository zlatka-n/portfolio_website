import Layout from "@/components/Layout";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

export default function PortfolioPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl">
        <section className="mx-auto md:w-3/5">
          <h1 className="text-5xl md:text-7xl 4k:text-9xl font-bold">
            Portfolio
          </h1>
          <p className="text-xl my-10 leading-normal">
            Everytime, when I learn something new, I try to create my own
            project from scratch, because practice makes perfect. Below, you can
            see my work. The latest project, I worked on, is this website which
            was created in Next.js.
          </p>
        </section>
      </div>

      <div className="bg-gray-200 pb-10">
        <div className="max-w-7xl mx-auto  overflow-y-hidden min-h-screen">
          <h2 className="text-2xl py-5 text-gray-700 font-medium">
            Book Store
          </h2>
          <section className="flex flex-row gap-x-10	">
            <Image src="/screens/bookstore1.png" width={610} height={345} />
            <div>
              <h3>Description</h3>
              <p>It does this and this</p>
            </div>
            {/* <div className=" my-5 flex gap-x-3">
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
            </div> */}
          </section>
        </div>
      </div>
    </Layout>
  );
}
