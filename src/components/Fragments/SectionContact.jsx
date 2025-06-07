import AnimatedContent from "../../react-bits/components/AnimatedContent/AnimatedContent";
import RadialShadow from "../Elements/RadialShadow";
import Location from "./Location";
import FormContact from "./FormContact";

const SectionContact = () => {
  return (
    <AnimatedContent
      distance={50}
      reverse={true}
      direction="vertical"
      config={{ tension: 80, friction: 10 }}
      initialOpacity={0}
      animateOpacity
      scale={0.9}
    >
      <section
        className="relative flex w-full flex-col items-center py-20"
        id="contact"
      >
        <AnimatedContent
          direction="vertical"
          reverse={true}
          distance={30}
          config={{ tension: 50, friction: 10 }}
          initialOpacity={0}
          animateOpacity
          delay={300}
        >
          <h2 className="mb-15 text-2xl font-semibold text-white">Contact</h2>
        </AnimatedContent>
        <div className="grid w-11/12 grid-cols-1 bg-white p-2 sm:w-10/12 sm:grid-cols-2">
          <Location />
          <FormContact />
        </div>
        <RadialShadow blur="blur-3xl" position="top-0 right-15" />
        <RadialShadow blur="blur-[7rem]" position="bottom-30 left-0" />
        <RadialShadow blur="blur-[5rem]" position="bottom-0 right-0" />
      </section>
    </AnimatedContent>
  );
};

export default SectionContact;
