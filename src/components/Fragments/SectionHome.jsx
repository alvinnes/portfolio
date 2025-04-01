import RotatingText from "../../react-bits/components/RotatingText/RotatingText";
import BlurText from "../../react-bits/components/BlurText/BlurText";
import AnimatedContent from "../../react-bits/components/AnimatedContent/AnimatedContent";
import StarBorder from "../../react-bits/components/StarBorder/StarBorder";
import ShinyText from "../../react-bits/components/ShinyText/ShinyText";
import RadialShadow from "../Elements/RadialShadow";

const SectionHome = () => {
  return (
    <section
      className="relative flex h-screen w-full flex-col-reverse items-center justify-center sm:flex-row"
      id="home"
    >
      <div className="ml-8 w-10/12 text-white sm:ml-0 sm:w-xl">
        <AnimatedItem distance={50} direction="vertical" reverse={true}>
          <div className="mb-4 ml-1 flex items-center gap-3">
            <ShinyText
              text="I Can Help You For"
              speed="3s"
              disabled={false}
              className="animate-shine sm:text-md text-sm font-semibold"
            />
            <RotatingText
              texts={["Web Development", "Web Design"]}
              mainClassName="px-3 sm:px-2 md:px-3 bg-[#D7F337] text-slate-600 overflow-hidden py-1  md:py-1.5 justify-center rounded-lg inline-flex font-bold text-sm"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </AnimatedItem>
        <BlurText
          text="Hi I'm Alvinnes"
          delay={150}
          animateBy="words"
          direction="top"
          className="mb-4 text-4xl font-bold sm:mb-6 sm:text-6xl"
        />
        <AnimatedItem distance={50} direction="horizontal" reverse={true}>
          <p className="mb-2 w-11/12 text-sm sm:mb-4 sm:w-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            iste dicta itaque architecto dolore aliquid voluptates
          </p>
        </AnimatedItem>
        <div className="flex gap-6">
          <AnimatedItem distance={10} direction="horizontal" reverse={true}>
            <StarBorder
              as="div"
              color="white"
              speed="3s"
              className="animate-star-movement-top mt-4"
            >
              <button className="sm:text-md cursor-pointer bg-slate-900 px-4 py-2.5 text-sm shadow-md">
                <a href="#about">Read More</a>
              </button>
            </StarBorder>
          </AnimatedItem>
          <AnimatedItem direction="horizontal" reverse={false} distance={20}>
            <button className="sm:text-md relative mt-4 cursor-pointer rounded-md border-2 border-solid border-white bg-transparent px-4 py-2 text-sm font-semibold transition-all duration-300 before:absolute before:top-0 before:left-0 before:-z-1 before:size-full before:origin-left before:scale-x-0 before:bg-white before:transition-all before:duration-300 hover:text-black hover:before:scale-x-100">
              <a href="#projects">View Project</a>
            </button>
          </AnimatedItem>
        </div>
      </div>
      <div>
        <AnimatedContent
          distance={70}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 5 }}
          initialOpacity={0}
          animateOpacity
          scale={1}
          delay={300}
          threshold={0.2}
        >
          <img
            src="/img/asset-1.png"
            alt="ilustrasi orang"
            className="mb-8 h-70 w-85 sm:mb-0 sm:h-110 sm:w-125"
          />
        </AnimatedContent>
      </div>
      <RadialShadow position="top-20 right-15" blur="blur-[2rem]" />
      <RadialShadow position="-bottom-5 left-0" blur="blur-[5rem]" />
    </section>
  );
};

const AnimatedItem = (props) => {
  const { distance, reverse, direction, children } = props;
  return (
    <AnimatedContent
      distance={distance}
      direction={direction}
      reverse={reverse}
      config={{ tension: 60, friction: 20 }}
      initialOpacity={0}
      animateOpacity
      scale={1}
      delay={300}
      threshold={0.5}
    >
      {children}
    </AnimatedContent>
  );
};

export default SectionHome;
