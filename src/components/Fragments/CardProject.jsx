import { Fragment, useState } from "react";
import AnimatedContent from "../../react-bits/components/AnimatedContent/AnimatedContent";
import { ArrowsOut } from "@phosphor-icons/react";
import ModalIframe from "./Modal";

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

export default CardProject;
