import { AiOutlineArrowUp } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto py-10 lg:py-10 2xl:py-30 px-2 md:px-5 xl:px-0 leading-normal md:text-xl">
      <div className="flex justify-between">
        <p className="">zlatka094@seznam.cz</p>
        <div
          className="flex items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <AiOutlineArrowUp /> Top
        </div>
      </div>
      <p>+420 735 204 082</p>
    </footer>
  );
}
