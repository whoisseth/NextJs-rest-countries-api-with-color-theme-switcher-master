// import 'tailwindcss/tailwind.css'
import "../style/global.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attributes="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
