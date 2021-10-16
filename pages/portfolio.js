import Layout from "@/components/Layout";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

export default function PortfolioPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-5">
        <section className="mx-auto md:w-3/5">
          <h1 className="text-5xl md:text-7xl 4k:text-9xl font-bold">
            Portfolio
          </h1>
          <p className="text-xl my-5 md:my-10 leading-normal">
            Everytime, when I learn something new, I try to create my own
            project from scratch, because practice makes perfect. Below, you can
            see my work. The latest project, I worked on, is this website which
            was created in Next.js.
          </p>
        </section>
      </div>

      <div className="bg-gray-200 py-10">
        <div className="max-w-7xl mx-auto  overflow-y-hidden min-h-screen">
          <section className="mx-auto md:w-3/5 flex flex-col">
            <h2 className="text-3xl px-5 md:px-0 py-5 text-gray-700 font-medium">
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

            <div className="mt-10 mb-10 px-5 md:px-0">
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
                of time with website responsiveness, as it was the first time I
                used media queries.
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

          <section className="mx-auto md:w-3/5 flex flex-col">
            <h2 className="text-3xl px-5 md:px-0 py-5 text-gray-700 font-medium">
              JSON Placeholder
            </h2>
            <div>
              <Image
                layout="responsive"
                src="/screens/typicode2.png"
                width={620}
                height={345}
              />
            </div>

            <div className="mt-10 mb-10 px-5 md:px-0">
              <h3 className="text-2xl text-gray-700 font-medium">
                Description
              </h3>
              <p className="text-xl mt-2 mb-5 leading-normal">
                This project fetches data from JSON Placeholder - GET request
                was performed. The data I fetched, I used for showing all posts,
                user search, and user's profile rendering. The layout of the
                website was inspired heavily by Facebook and Twitter.
              </p>
              <h3 className="text-2xl text-gray-700 font-medium">Tech stack</h3>
              <ul className="text-xl mt-2 mb-5 leading-normal">
                <li>React.js</li>
              </ul>
              <h3 className="text-2xl text-gray-700 font-medium">Challenges</h3>
              <p className="text-xl mt-2 mb-5 leading-normal">
                The most difficult part for me was the user search
                functionality. I came up with setting up a hook for searched
                value (typed in the form input), which I later used for
                filtering the result. From Stack Overflow, I learnt how to make
                case insensitive search.
              </p>
              <div className="mt-2 mb-5 flex gap-x-3">
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
          </section>

          <section className="mx-auto md:w-3/5 flex flex-col">
            <h2 className="text-3xl px-5 md:px-0 py-5 text-gray-700 font-medium">
              Todo List
            </h2>
            <div className="mx-auto">
              <Image src="/screens/todo_redux2.png" width={420} height={345} />
            </div>

            <div className="mt-10 mb-10 px-5 md:px-0">
              <h3 className="text-2xl text-gray-700 font-medium">
                Description
              </h3>
              <p className="text-xl mt-2 mb-5 leading-normal">
                This project was probably the first one that I created in Redux.
                The todo list is capable of CRUD (create, read, update, delete)
                operations.
              </p>
              <h3 className="text-2xl text-gray-700 font-medium">Tech stack</h3>
              <ul className="text-xl mt-2 mb-5 leading-normal">
                <li>React.js</li>
                <li>Redux</li>
              </ul>
              <h3 className="text-2xl text-gray-700 font-medium">Challenges</h3>
              <p className="text-xl mt-2 mb-5 leading-normal">
                The most time I spent on was the update operation. I struggled
                most with writing edit todo reducer.
              </p>
              <div className="mt-2 mb-5 flex gap-x-3">
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
          </section>

          <section className="mx-auto md:w-3/5 flex flex-col">
            <h2 className="text-3xl px-5 md:px-0 py-5 text-gray-700 font-medium">
              Website Portfolio
            </h2>
            <div className="">
              <Image
                layout="responsive"
                src="/screens/website_portfolio.png"
                width={620}
                height={375}
              />
            </div>

            <div className="px-5 md:px-0 mt-10 mb-5">
              <h3 className="text-2xl text-gray-700 font-medium">
                Description
              </h3>
              <p className="text-xl mt-2 mb-5 leading-normal">
                The reason I created this website was for job search. My
                potential employer can see my portfolio here and evaluate my
                tech skills.
              </p>
              <h3 className="text-2xl text-gray-700 font-medium">Tech stack</h3>
              <ul className="text-xl mt-2 mb-5 leading-normal">
                <li>Next.js</li>
                <li>Tailwind</li>
              </ul>
              <h3 className="text-2xl text-gray-700 font-medium">Challenges</h3>
              <p className="text-xl mt-2 mb-5 leading-normal">
                This was the first time I used Next.js and Tailwind, so firstly
                I had to get hang of it. Firstly, it took me a while to decide
                on layout of this website. Another problem, I had, was with web
                responsivness for 4k screen's dimensions (3840px X 2160px). The
                4k issue was somehow managed with custom breakpoint in Tailwind.
              </p>
              <div className="mt-2 mb-5 flex gap-x-3">
                <a
                  href="https://github.com/zlatka-n/portfolio_website"
                  target="_blank"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  <AiFillGithub className="float-left text-xl" />{" "}
                  <span className="px-1">GitHub</span>
                </a>
                {/* <a
                  href="https://todo-redux-liart.vercel.app/"
                  target="_blank"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  <span className="px-5">Visit</span>
                </a> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
