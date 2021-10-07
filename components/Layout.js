import Head from "next/head";
import Header from "./Header";

export default function Layout({
  title,
  children,
  keywords,
  description,
  content,
}) {
  return (
    <div className="w-full">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords}></meta>
        <meta name="description" content={description}></meta>
      </Head>
      <main className="w-full">
        <Header />
        <div className="max-w-7xl mx-auto px-2">{children}</div>
      </main>
    </div>
  );
}
