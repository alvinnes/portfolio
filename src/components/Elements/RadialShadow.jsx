const RadialShadow = ({ position, blur }) => {
  return (
    <div
      className={`absolute ${position} -z-1 size-100 rounded-full bg-indigo-500/10 ${blur}`}
    ></div>
  );
};

export default RadialShadow;
