import { ArrowCircleUpRight, ArrowsOut, X } from "@phosphor-icons/react";
import AnimatedContent from "../../react-bits/components/AnimatedContent/AnimatedContent";
import { Link } from "react-router";
import { Fragment, useState } from "react";
import RadialShadow from "../Elements/RadialShadow";
import SubTitle from "../Elements/SubTitle";

const SectionProjects = () => {
  return (
    <section
      className="relative flex w-full flex-col items-center py-30"
      id="projects"
    >
      <SubTitle title="Curent Projects" />
      <div className="flex w-10/12 flex-col gap-8 sm:flex-row">
        <CardProject
          img="/img/project-2.png"
          title="Website Game Tic Tac Toe"
          url="https://alvinnes.github.io/tic-tac-toe.github.io/"
        />
        <CardProject
          img="/img/project-3.png"
          title="Simple Kalkulator App"
          delay={200}
          url={"/projects/kalkulator/index.html"}
        />
        <CardProject
          img="/img/project-4.png"
          title="Simple To-do-list App"
          delay={400}
          url="https://to-do-list-kappa-two-32.vercel.app/"
        />
      </div>
      <AnimatedItem direction="vertical" reverse={false} distance={20}>
        <button className="relative mt-10 cursor-pointer rounded-md border-2 border-solid border-white bg-transparent px-10 py-2 font-semibold text-white transition-all duration-300 before:absolute before:top-0 before:left-0 before:-z-1 before:size-full before:origin-left before:scale-x-0 before:bg-white before:transition-all before:duration-300 hover:text-black hover:before:scale-x-100">
          <Link to="/detailProjects" className="flex items-center gap-2">
            <ArrowCircleUpRight size={30} /> View Project
          </Link>
        </button>
      </AnimatedItem>
      <RadialShadow blur="blur-[5rem]" position="top-0 right-10" />
      <RadialShadow blur="blur-[5rem]" position="bottom-0 left-10" />
    </section>
  );
};

const CardProject = ({ img, title, delay, url }) => {
  const [isActive, setIsActive] = useState(false);
  const handleShowIframe = () => {
    setIsActive(true);
  };
  return (
    <Fragment>
      <AnimatedItem distance={20} delay={delay}>
        <div className="h-60 w-80 rounded-md bg-slate-200 p-2">
          <div
            className="group relative h-40 w-full cursor-pointer rounded-md bg-slate-700"
            onClick={handleShowIframe}
          >
            <img
              src={img}
              alt="foto-project"
              className="size-full object-cover drop-shadow-md"
            />
            <div className="invisible absolute top-0 left-0 flex size-full items-center justify-center bg-black/50 text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <ArrowsOut size={30} />
            </div>
          </div>
          <h2 className="mt-2 font-bold text-slate-700">{title}</h2>
        </div>
      </AnimatedItem>
      <ModalIframe isActive={isActive} setIsActive={setIsActive} url={url} />
    </Fragment>
  );
};

const ModalIframe = ({ isActive, setIsActive, url }) => {
  const handleCloseIframe = () => {
    setIsActive(false);
  };
  return (
    <div
      className={`${isActive && "visible opacity-100"} invisible fixed top-0 left-0 z-1000 flex h-screen w-full flex-col items-center justify-center opacity-0 backdrop-blur-[1rem] transition-all duration-300 ease-in`}
    >
      <div className="relative h-100 w-11/12 bg-white p-2 sm:h-125 sm:w-2xl">
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

const AnimatedItem = (props) => {
  const { distance, children, delay } = props;
  return (
    <AnimatedContent
      distance={distance}
      direction="vertical"
      reverse={true}
      config={{ tension: 70, friction: 5 }}
      initialOpacity={0}
      animateOpacity
      scale={1}
      delay={delay}
      threshold={0.5}
    >
      {children}
    </AnimatedContent>
  );
};

export default SectionProjects;
