import SpotlightCard from "../../react-bits/components/SpotlightCard/SpotlightCard";
import AnimatedContent from "../../react-bits/components/AnimatedContent/AnimatedContent";
import RadialShadow from "../Elements/RadialShadow";

const SectionSkills = () => {
  return (
    <section
      id="skills"
      className="relative flex w-full flex-col items-center py-30"
    >
      <AnimatedItem direction="vertical" reverse={true} delay={500}>
        <h2 className="mb-15 text-2xl font-semibold text-white">Skills</h2>
      </AnimatedItem>
      <div className="flex w-11/12 flex-wrap justify-center gap-8 sm:w-7/12">
        <CardSkills img="/img/img-skills/HTML5.png" />
        <CardSkills img="/img/img-skills/CSS3.png" delay={100} />
        <CardSkills img="/img/img-skills/typescript.png" delay={200} />
        <CardSkills img="/img/img-skills/Git.png" delay={300} />
        <CardSkills img="/img/img-skills/Redux.png" delay={400} />
        <CardSkills img="/img/img-skills/js.png" delay={500} />
        <CardSkills img="/img/img-skills/React.png" delay={600} />
        <CardSkills img="/img/img-skills/Bootstrap.png" delay={700} />
        <CardSkills img="/img/img-skills/Sass.png" delay={800} />
        <CardSkills img="/img/img-skills/Tailwind CSS.png" delay={900} />
      </div>
      <RadialShadow blur="blur-[5rem]" position="-top-10 right-10" />
      <RadialShadow blur="blur-[5rem]" position="-bottom-10 left-10" />
    </section>
  );
};

const CardSkills = ({ img, delay }) => {
  return (
    <AnimatedItem delay={delay}>
      <SpotlightCard>
        <div className="size-30 rounded-sm bg-slate-700 p-2 shadow-md sm:size-20">
          <img
            src={img}
            alt="foto-skill"
            className="size-ful cursor-pointer object-cover"
          />
        </div>
      </SpotlightCard>
    </AnimatedItem>
  );
};

const AnimatedItem = ({ children, delay }) => {
  return (
    <AnimatedContent
      direction="vertical"
      reverse={true}
      distance={60}
      config={{ tension: 50, friction: 10 }}
      initialOpacity={0}
      animateOpacity
      delay={delay}
    >
      {children}
    </AnimatedContent>
  );
};

export default SectionSkills;
