import AnimatedContent from "../../react-bits/components/AnimatedContent/AnimatedContent";

const SubTitle = ({ title }) => {
  return (
    <AnimatedContent
      direction="vertical"
      reverse={true}
      distance={30}
      config={{ tension: 50, friction: 5 }}
      initialOpacity={0}
      animateOpacity
      delay={300}
    >
      <h2 className="mb-15 text-4xl font-bold text-white">{title}</h2>
    </AnimatedContent>
  );
};

export default SubTitle;
