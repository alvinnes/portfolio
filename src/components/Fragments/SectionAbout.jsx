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
        <h2 className="mb-15 sm:-ml-30 text-2xl font-semibold">About Me</h2>
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
          <div className="size-60 overflow-hidden rounded-full bg-white p-2 sm:size-70">
            <img
              src="/img/picture.png"
              alt="foto-profile"
              className="size-full rounded-full bg-slate-700 object-cover"
            />
          </div>
        </AnimatedContent>
        <div className="mt-8 flex w-10/12 flex-col items-center text-center sm:text-left sm:items-start sm:mt-0 sm:w-lg">
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
              perspiciatis voluptatibus nam a, voluptatum voluptas officia
              numquam rem dolorum modi deserunt quaerat laboriosam deleniti
              harum error. Ea, ex voluptas ipsum temporibus fuga numquam non
              officia, esse voluptatum fugit a possimus odio animi hic? Dolor
              fugit possimus aperiam ipsam? Amet, consequuntur.
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
