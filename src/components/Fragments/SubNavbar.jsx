import {
  AlignRight,
  ArrowArcLeftIcon,
  TextAlignRight,
} from "@phosphor-icons/react";
import { ButtonNavContext } from "../../context/ButtonNav";
import { Link } from "react-router";

const SubNavbar = () => {
  return (
    <nav className="fixed top-0 w-11/12 sm:w-10/12 left-1/2 -translate-x-1/2 rounded-md z-999 flex items-center justify-between bg-slate-700 px-[5%] py-4 text-white">
      <button>
        <Link to={"/"}>
          <ArrowArcLeftIcon size={30} weight="bold" />
        </Link>
      </button>
    </nav>
  );
};

export default SubNavbar;
