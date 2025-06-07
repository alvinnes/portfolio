import { X } from "@phosphor-icons/react";
import { Link } from "react-router";

const ModalIframe = ({ isActive, setIsActive, url }) => {
  const handleCloseIframe = () => {
    setIsActive(false);
  };
  return (
    <div
      className={`${isActive && "visible opacity-100"} scroll-style invisible fixed top-0 left-0 z-1000 flex h-screen w-full flex-col items-center justify-center opacity-0 backdrop-blur-[1rem] transition-all duration-300 ease-in`}
    >
      <div className="relative h-[80%] w-11/12 bg-white p-2 sm:w-10/12">
        <span
          className="absolute -top-2 -right-3 flex size-8 cursor-pointer items-center justify-center rounded-full bg-slate-800 p-1 text-white transition-all duration-300 hover:rotate-180"
          onClick={handleCloseIframe}
        >
          <X size={20} />
        </span>
        <iframe src={url} title="image-project" className="size-full"></iframe>
      </div>
      <button className="mt-4 cursor-pointer rounded-md bg-indigo-300 px-8 py-2 font-semibold text-white shadow-md outline-0">
        <Link to={url} target="_blank">
          Visit Website
        </Link>
      </button>
    </div>
  );
};

export default ModalIframe;
