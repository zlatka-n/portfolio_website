import Head from 'next/head';
import Header from './Header';
import Footer from '@/components/Footer';

export const Layout = ({ title, children, keywords, description }) => {
  return (
    <div className="max-h-full">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords}></meta>
        <meta name="description" content={description}></meta>
      </Head>

      <main>
        <div className="h-1/4">
          <Header />
        </div>
        <div className="min-h-screen mx-auto h-2/4">{children}</div>
        <div className="h-1/4">
          <Footer />
        </div>
      </main>
    </div>
  );
};
