import { Mailbox } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";

const MessageInput = ({ register }) => {
  const {
    formState: { errors },
  } = useForm();
  return (
    <label className="mb-6 flex w-11/12 flex-col gap-2 sm:w-10/12">
      <span className="ml-2 flex items-center gap-1">
        <Mailbox size={23} /> Send Message
      </span>
      <textarea
        name="message"
        id="message"
        rows={7}
        placeholder="send message here."
        {...register("message", {
          maxLength: 80,
        })}
        aria-invalid={errors.message ? "true" : "false"}
        className="rounded-md p-2 ring-3 ring-slate-500/20 outline-0 transition-all duration-300 focus:ring-blue-400/20"
      ></textarea>
    </label>
  );
};

export default MessageInput;
