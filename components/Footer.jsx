import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <>
      <Link href='https://github.com/whoisseth/NextJs-rest-countries-api-with-color-theme-switcher-master'>
        <a>
          <AiFillGithub className=' mx-auto border-12 my-8  h-12 w-12  ' />
        </a>
      </Link>
    </>
  );
}

export default Footer;
