import { useForm } from "react-hook-form";
import InputItem from "./InputItem";
import MessageInput from "./MessageInput";
import {
  ErrorMessageEmail,
  ErrorMessageMsg,
  ErrorMessageUsername,
} from "./ErrorMessage";
import {
  CheckCircleIcon,
  Envelope,
  Phone,
  UserCircle,
} from "@phosphor-icons/react";
import { useState } from "react";

const FormContact = () => {
  const [submittingForm, setSubmittingForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitted = (datas) => {
    setSubmittingForm(true);
    setTimeout(() => {
      try {
        const oldDatas = JSON.parse(localStorage.getItem("contact")) || [];
        const newDatas = [...oldDatas, datas];
        localStorage.setItem("contact", JSON.stringify(newDatas));
        console.log(datas);
      } catch (err) {
        console.log(err);
      } finally {
        setSubmittingForm(false);
      }
    }, 1000);
  };

  return (
    <form
      className="relative flex flex-col items-center py-4"
      onSubmit={handleSubmit(submitted)}
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
        register={register}
        errors={errors.username}
      />
      <ErrorMessageUsername errors={errors} />
      <InputItem
        icon={<Envelope size={23} />}
        title="Email"
        id="email"
        type="email"
        placeholder="place your email here."
        register={register}
        errors={errors.email}
      />
      <ErrorMessageEmail errors={errors} />
      <MessageInput register={register} />
      <ErrorMessageMsg errors={errors} />
      <button
        disabled={submittingForm}
        className="w-11/12 cursor-pointer rounded-sm bg-blue-300 py-2.5 font-semibold text-white shadow-sm sm:ml-1 sm:w-[84%]"
      >
        {submittingForm ? "Loading..." : "Submit"}
      </button>
      <div
        className={`${submittingForm ? "opcaity-100 -top-20" : "-top-50 opacity-0"} absolute left-1/2 z-1000 flex w-xs -translate-x-1/2 items-center gap-4 rounded-sm bg-white p-2 font-semibold text-slate-600 shadow-sm transition-all duration-600 ease-in-out`}
      >
        <CheckCircleIcon size={40} className="font-bold text-green-400" />
        Berhasil Terkirim
      </div>
    </form>
  );
};

export default FormContact;
