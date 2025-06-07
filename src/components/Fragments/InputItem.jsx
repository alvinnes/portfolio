const InputItem = (props) => {
  const { icon, title, type, register, placeholder, errors, id } = props;
  const validationRules = {
    username: {
      required: true,
      minLength: 3,
      maxLength: 10,
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
  };
  return (
    <label className="mb-6 flex w-11/12 flex-col gap-2 sm:w-10/12">
      <span className="ml-2 flex items-center gap-1">
        {icon} {title}
      </span>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id, validationRules[id])}
        aria-invalid={errors ? "true" : "false"}
        className="rounded-full p-2 ring-3 ring-slate-500/20 outline-0 transition-all duration-300 focus:ring-blue-400/20"
      />
    </label>
  );
};

export default InputItem;
