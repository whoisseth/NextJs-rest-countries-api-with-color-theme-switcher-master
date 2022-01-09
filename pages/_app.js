import "../style/global.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attributes="class">
      <Layout></Layout>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
