
import { BsArrowUpShort } from "react-icons/bs";
const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
function ScrollToTop() {
    return (
        <div className='hide-arrow  right-10  align-right  bottom-10  rounded-full cursor-pointer bot  bg-gray-800 text-3xl'>
        <BsArrowUpShort onClick={() => scrollToTop()} className='text-white ' />
      </div>
  )
}

export default ScrollToTop