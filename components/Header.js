import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-10 lg:py-20 2xl:py-30 4k:py-40 ">
      <div className="max-w-7xl	mx-auto px-5 xl:px-0 flex flex-col items-start md:flex-row md:justify-between md:text-xl">
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1BAkSzpC2xfy-YqOjGgt8CoS4sOoVSEWY/view?usp=sharing">
            Resume
          </a>
          {/* </Link> */}
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
