import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-10 md:py-20 ">
      <div className="max-w-7xl	 mx-auto px-2 md:flex md:flex-row md:justify-between md:text-xl">
        <div className="py-5 md:py-0">Zlatka</div>
        <div className="space-x-5 md:space-x-10">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
          <Link href="resume">
            <a>Resume</a>
          </Link>
          <Link href="contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </header>
  );
}

//
