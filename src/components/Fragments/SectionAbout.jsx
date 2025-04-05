import TrueFocus from "../../react-bits/components/TrueFocus/TrueFocus";
import ScrollVelocity from "../../react-bits/components/ScrollVelocity/ScrollVelocity";
import AnimatedContent from "../../react-bits/components/AnimatedContent/AnimatedContent";
import RadialShadow from "../Elements/RadialShadow";

const SectionAbout = () => {
  return (
    <section
      id="about"
      className="relative flex w-full flex-col items-center py-30 text-white"
    >
      <AnimatedItem direction="vertical" reverse={true} delay={500}>
        <h2 className="mb-15 text-2xl font-semibold sm:-ml-30">About Me</h2>
      </AnimatedItem>
      <div className="flex w-11/12 flex-col items-center justify-evenly sm:flex-row">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={true}
          config={{ tension: 80, friction: 5 }}
          initialOpacity={0}
          animateOpacity
          delay={300}
          scale={1.1}
        >
          <div className="size-60 overflow-hidden rounded-full bg-white p-2 sm:size-80">
            <img
              src="/img/foto.png"
              alt="foto-profile"
              className="size-full rounded-full bg-slate-700 object-top object-cover"
            />
          </div>
        </AnimatedContent>
        <div className="mt-8 flex w-10/12 flex-col items-center text-center sm:mt-0 sm:w-lg sm:items-start sm:text-left">
          <AnimatedItem delay={300} direction="horizontal" reverse={false}>
            <TrueFocus
              sentence="I'm Frontend Developer"
              manualMode={false}
              blurAmount={5}
              glowColor="black"
              borderColor="skyblue"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </AnimatedItem>

          <AnimatedItem direction="horizontal" reverse={false}>
            <p className="mt-4 text-sm text-slate-300">
            Hi! I'm alvin, a web developer focused on user experience (UX) and React-based applications. I specialize in building dynamic user interfaces using React and JavaScript. I also have experience in developing applications using TypeScript. I always prioritize efficiency and accessibility, ensuring that every application I build provides a fast and easily accessible user experience for everyone, anywhere. I'm passionate about continuously improving my web development skills and am eager to collaborate with teams focused on innovation and relevant technological solutions. Feel free to reach out if you're interested in collaborating or checking out more of my projects below.
            </p>
          </AnimatedItem>
        </div>
      </div>
      <div className="mt-20 sm:mt-30">
        <ScrollVelocity
          texts={["Alvinnes", "Good Boy"]}
          velocity={100}
          className="text-6xl font-medium"
        />
      </div>
      <RadialShadow position="bottom-30 left-2 blur-[5rem]" />
      <RadialShadow position="top-10 right-2 blur-[8rem]" />
    </section>
  );
};

const AnimatedItem = ({ children, delay, direction, reverse }) => {
  return (
    <AnimatedContent
      direction={direction}
      reverse={reverse}
      distance={60}
      config={{ tension: 50, friction: 5 }}
      initialOpacity={0}
      animateOpacity
      delay={delay}
    >
      {children}
    </AnimatedContent>
  );
};

export default SectionAbout;
