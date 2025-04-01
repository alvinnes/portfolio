import { Mailbox, MapTrifold, Phone, UserCircle } from "@phosphor-icons/react";
import AnimatedContent from "../../react-bits/components/AnimatedContent/AnimatedContent";
import RadialShadow from "../Elements/RadialShadow";

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

const FormContact = () => {
  const oldDatas = JSON.parse(localStorage.getItem("contact")) || [];
  const handleForm = (e) => {
    e.preventDefault();
    const dataForm = {
      username: e.target.username.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    const newData = [...oldDatas, dataForm];
    localStorage.setItem("contact", JSON.stringify(newData));
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={(e) => handleForm(e)}
    >
      <h2 className="mt-10 mb-8 flex items-center gap-2 text-xl font-semibold text-slate-700 sm:mt-4">
        <span className="size-8 rounded-sm bg-indigo-200/50 p-1 text-white shadow-md">
          <Phone className="size-full rounded-sm bg-indigo-300 p-1" />
        </span>
        Contact Me
      </h2>
      <InputItem
        icon={<UserCircle size={23} />}
        title="Username"
        id="username"
        type="text"
        placeholder="place your name here."
      />
      <InputItem
        icon={<UserCircle size={23} />}
        title="Email"
        id="email"
        type="email"
        placeholder="place your email here."
      />

      <label className="mb-6 flex w-11/12 flex-col gap-2 sm:w-10/12">
        <span className="ml-2 flex items-center gap-1">
          <Mailbox size={23} /> Send Message
        </span>
        <textarea
          name="message"
          id="message"
          rows={7}
          placeholder="send message here."
          className="rounded-md p-2 ring-3 ring-slate-500/20 outline-0 transition-all duration-300 focus:ring-blue-400/20"
        ></textarea>
      </label>
      <button className="ml-4 self-start rounded-sm bg-blue-300 px-10 py-2 font-semibold text-white sm:ml-11">
        Submit
      </button>
    </form>
  );
};

const Location = () => {
  return (
    <div className="flex w-full flex-col items-center gap-6">
      <h2 className="mt-4 flex items-center gap-2 text-xl font-semibold text-slate-700">
        <span className="size-8 rounded-sm bg-indigo-200/50 p-1 text-white shadow-md">
          <MapTrifold className="size-full rounded-sm bg-indigo-300 p-1" />
        </span>
        Location
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31706.489918908224!2d110.6686479!3d-6.6081935499999895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e711fadb135f331%3A0xfbb7878c14555377!2sKrapyak%2C%20Tahunan%2C%20Jepara%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1743242043590!5m2!1sen!2sid"
        loading="lazy"
        className="h-80 w-full border-0 shadow-md sm:h-full"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const InputItem = (props) => {
  const { icon, title, type, placeholder, id } = props;
  return (
    <label className="mb-6 flex w-11/12 flex-col gap-2 sm:w-10/12">
      <span className="ml-2 flex items-center gap-1">
        {icon} {title}
      </span>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="rounded-full p-2 ring-3 ring-slate-500/20 outline-0 transition-all duration-300 focus:ring-blue-400/20"
      />
    </label>
  );
};

export default SectionContact;
