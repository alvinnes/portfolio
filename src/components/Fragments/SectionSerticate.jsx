import AnimatedContent from "../../react-bits/components/AnimatedContent/AnimatedContent";
import { ArrowsOut, X } from "@phosphor-icons/react";
import RadialShadow from "../Elements/RadialShadow";
import SubTitle from "../Elements/SubTitle";
import { Fragment, useState } from "react";

const SectionCertificate = () => {
  return (
    <section
      className="relative flex w-full flex-col items-center py-35"
      id="certificate"
    >
      <SubTitle title="Certification" />
      <div className="flex w-10/12 flex-col gap-4 sm:w-9/12 sm:flex-row">
        <CardCertificate img="/img/project-2.png" />
        <CardCertificate delay={200} img="/img/project-1.png" />
        <CardCertificate delay={400} img="/img/project-2.png" />
      </div>
      <RadialShadow position="top-0 right-15" blur="blur-[6rem]" />
      <RadialShadow position="-bottom-20 left-0" blur="blur-[6rem]" />
    </section>
  );
};

const CardCertificate = ({ delay, img }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleShowModal = () => {
    setIsClicked(true);
  };
  return (
    <Fragment>
      <AnimatedItem delay={delay}>
        <div
          className="group relative h-45 w-80 cursor-pointer bg-white/20 p-1 shadow-md"
          onClick={handleShowModal}
        >
          <div className="invisible absolute top-0 left-0 flex size-full items-center justify-center bg-black/40 text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
            <ArrowsOut size={25} />
          </div>
          <img
            src={img}
            alt="foto-project"
            className="size-full object-cover"
          />
        </div>
      </AnimatedItem>
      <ModalCertificate
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        img={img}
      />
    </Fragment>
  );
};

const ModalCertificate = ({ isClicked, setIsClicked, img }) => {
  const handleCloseModal = () => {
    setIsClicked(false);
  };
  return (
    <div
      className={`${isClicked ? "visible opacity-100" : "invisible opacity-0"} fixed top-0 left-0 z-1000 flex h-screen w-full items-center justify-center bg-white/10 backdrop-blur-[1rem] transition-all duration-600`}
    >
      <div className="relative h-100 w-11/12 bg-white sm:h-130 sm:w-5xl">
        <span
          className="absolute -top-2 -right-2 flex size-8 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-white transition-all duration-300 hover:rotate-180"
          onClick={handleCloseModal}
        >
          <X size={23} />
        </span>
        <img
          src={img}
          alt="foto-certificate"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
};

const AnimatedItem = (props) => {
  const { children, delay } = props;
  return (
    <AnimatedContent
      distance={30}
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

export default SectionCertificate;
