import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className='py-2  flex justify-center'>
        <Link href='https://github.com/whoisseth/NextJs-rest-countries-api-with-color-theme-switcher-master'>
          <a>
            <AiFillGithub className=' border-12  h-12 w-12  ' />
          </a>
        </Link>
      </div>
    </>
  );
}

export default Footer;
