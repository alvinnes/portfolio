import { useLocation } from "react-router";
import { AlignRight, TextAlignRight } from "@phosphor-icons/react";
import { useContext } from "react";
import { ButtonNavContext } from "../../context/ButtonNav";

const Navbar = () => {
  const { isClicked, setIsClicked } = useContext(ButtonNavContext);
  const handleShowNavbar = () => {
    setIsClicked(!isClicked);
  };
  return (
    <nav className="fixed top-0 right-0 left-0 z-999 flex items-center justify-between bg-slate-800 px-[5%] py-4">
      <h3 className="text-xl font-semibold text-white">Alvinnes</h3>
      <ul className="hidden gap-10 text-slate-400 sm:flex">
        <NavigationItem text="Home" link="#home" />
        <NavigationItem text="About" link="#about" />
        <NavigationItem text="Skills" link="#skills" />
        <NavigationItem text="Certification" link="#certificate" />
        <NavigationItem text="Projects" link="#projects" />
        <NavigationItem text="Contact" link="#contact" />
      </ul>
      <span className="text-white sm:hidden" onClick={handleShowNavbar}>
        <TextAlignRight size={25} />
      </span>
    </nav>
  );
};

const NavigationItem = ({ link, text }) => {
  const location = useLocation();
  const activeNav = location.hash == link;
  return (
    <li
      className={`after:-mt-1 after:block after:origin-left after:scale-x-0 after:border-b-1 after:border-solid after:border-white after:transition-all after:duration-300 after:ease-in hover:after:scale-x-80 ${activeNav && "after:scale-x-80 text-white"}`}
    >
      <a href={link}>{text}</a>
    </li>
  );
};

export default Navbar;
