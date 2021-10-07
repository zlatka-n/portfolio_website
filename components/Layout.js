import Head from "next/head";
import Header from "./Header";

export default function Layout({ title, children, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta keywords={keywords}></meta>
      </Head>
      <main>
        <Header />
        <div>{children}</div>
      </main>
    </div>
  );
}
