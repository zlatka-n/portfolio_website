import Layout from "@/components/Layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto md:w-3/5 font-sans">
          <h1 className="text-5xl md:text-7xl 4k:text-9xl font-bold">About</h1>

          <div className=" box-border">
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
              Redux.
            </p>
            <p className="text-xl my-10 leading-normal">
              Feel free to get in touch. I will try to read and respond to all
              emails.
            </p>
            <h2 className=" w-2/6	lg:w-1/5 my-10 p-2 box-content text-2xl md:text-3xl font-bold text-white bg-red-500 rounded">
              Tech stack
            </h2>
            <div className="flex flex-col gap-y-5">
              <div className="flex justify-center">
                <Image src="/techStack/combo.png" width={500} height={120} />
              </div>
              <div className="flex justify-center lg:pl-20  md:gap-x-10">
                <Image src="/techStack/react.png" width={140} height={110} />
                <a className="">
                  <Image src="/techStack/redux.png" width={140} height={110} />
                </a>
                <Image src="/techStack/git3.png" width={210} height={110} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
