import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>NextJs-rest-countries-api</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
