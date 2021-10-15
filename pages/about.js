import Layout from "@/components/Layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto md:w-3/5 font-sans">
          <h1 className="text-5xl md:text-7xl 4k:text-9xl font-bold px-5 md:px-0">
            About
          </h1>

          <div className="box-border px-5 md:px-0">
            <p className="text-xl my-10 leading-normal">
              Hi, I’m Zlatka, an IT consultant based in the city of Prague,
              Czech Republic. I’m currently working with Neit Consulting
              automating business processes.
            </p>
            <p className="text-xl my-10 leading-normal">
              I've started coding out of curiosity in June 2020 . At my current
              job, vanilla JavaScript is mostly needed, but I became curious
              about other technologies - I've just finished a Udemy's Next.js
              course. In my free time, I've been coding mostly with React.js and
              Redux, and realized that I would like to switch to front-end
              development.
            </p>
            <p className="text-xl my-10 leading-normal">
              Feel free to get in touch. I will try to read and respond to all
              emails.
            </p>
            <h2 className="w-2/6 lg:w-1/5 my-10 p-2 box-content text-xl md:text-2xl xl:text-3xl font-bold text-white bg-red-500 rounded">
              Tech stack
            </h2>
            <div className="flex flex-col gap-y-5 px-5 md:px-5">
              <div className="flex justify-center">
                <Image src="/techStack/combo.png" width={400} height={120} />
              </div>
              <div className="flex justify-center lg:pl-20  md:gap-x-5">
                <Image src="/techStack/react.png" width={125} height={80} />
                <a className="">
                  <Image src="/techStack/redux.png" width={125} height={80} />
                </a>
                <Image src="/techStack/git3.png" width={180} height={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
