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
          <section className="mx-auto md:w-3/5 flex flex-col">
            <h2 className="text-3xl py-5 text-gray-700 font-medium">
              Book Store
            </h2>
            <div>
              <Image
                layout="responsive"
                src="/screens/bookstore1.png"
                width={620}
                height={345}
              />
            </div>

            <div className="mt-10 mb-10">
              <h3 className="text-2xl text-gray-700 font-medium">
                Description
              </h3>
              <p className="text-xl mt-2 mb-5 leading-normal">
                This book store lets a user to add items to the basket. Each
                item (book) comes with its own page with description. In the
                basket, user can also modify quantity or remove items. In
                checkout, user must submit delivery information.
              </p>
              <h3 className="text-2xl text-gray-700 font-medium">Tech stack</h3>
              <ul className="text-xl mt-2 mb-5 leading-normal">
                <li>React.js</li>
                <li>Redux</li>
              </ul>
              <h3 className="text-2xl text-gray-700 font-medium">Challenges</h3>
              <p className="text-xl mt-2 mb-5 leading-normal">
                The most challenging thing I faced was configuration of the
                Redux store. Firstly, I struggled with the data structure setup
                and secondly, with updating the amount of an item, if the item
                was already in the basket. Also, I spent a considerable amount
                with website responsiveness, as it was the first time I used
                media queries.
              </p>
              <div className="mt-2 mb-5 flex gap-x-3">
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
          </section>
        </div>
      </div>
    </Layout>
  );
}
