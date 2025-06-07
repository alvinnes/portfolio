import {
  AddressBook,
  BracketsCurly,
  Certificate,
  HouseSimple,
  RocketLaunch,
  UserCircle,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { useLocation } from "react-router";
import { ButtonNavContext } from "../../context/ButtonNav";

const Sidebar = () => {
  const { isClicked } = useContext(ButtonNavContext);
  return (
    <nav
      className={`${isClicked ? "right-0 opacity-100" : "-right-full opacity-0"} fixed top-0 z-80 flex h-screen w-7/12 flex-col bg-slate-900 px-3 py-20 text-white transition-all duration-500`}
    >
      {/* <hr className="mt-4 w-full text-white" /> */}
      <ul className="mt-8 flex flex-col gap-4">
        <NavigationItem text="Home" link="#home" icon={<HouseSimple />} />
        <NavigationItem text="About" link="#about" icon={<AddressBook />} />
        <NavigationItem text="Skills" link="#skills" icon={<BracketsCurly />} />
        <NavigationItem text="Certification" link="#certificate" icon={<Certificate />} />
        <NavigationItem
          text="Projects"
          link="#projects"
          icon={<RocketLaunch />}
        />
        <NavigationItem text="Contact" link="#contact" icon={<UserCircle />} />
      </ul>
    </nav>
  );
};

const NavigationItem = ({ link, text, icon }) => {
  const location = useLocation();
  const activeNav = location.hash == link;
  return (
    <li
      className={`${activeNav && "bg-slate-800 text-white"} w-full rounded-md px-2 py-2 text-slate-400 transition-all duration-500`}
    >
      <a href={link} className="flex items-center gap-3">
        {icon} {text}
      </a>
    </li>
  );
};

export default Sidebar;
