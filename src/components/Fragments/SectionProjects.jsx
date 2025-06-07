import { ArrowCircleUpRight, ArrowsOut, X } from "@phosphor-icons/react";
import AnimatedContent from "../../react-bits/components/AnimatedContent/AnimatedContent";
import { Link } from "react-router";
import RadialShadow from "../Elements/RadialShadow";
import SubTitle from "../Elements/SubTitle";
import CardProject from "./CardProject";
import projects from "../../datas/projects.json";

const SectionProjects = () => {
  const newProjects = projects.filter((project) => project.id > 3);
  return (
    <section
      className="relative flex w-full flex-col items-center py-30"
      id="projects"
    >
      <SubTitle title="Curent Projects" />
      <div className="my-18 flex w-10/12 flex-col items-center justify-center gap-8 sm:flex-row">
        {newProjects.map((project) => (
          <CardProject
            key={project.id}
            img={project.img}
            title={project.title}
            url={project.url}
            description={project.description}
            delay={project.delay}
          />
        ))}
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
