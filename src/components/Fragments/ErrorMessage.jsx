import { Fragment } from "react";

export const ErrorMessageEmail = ({ errors }) => {
  return (
    <Fragment>
      {errors.email?.type == "pattern" && (
        <ErrorMessage message={"tolong tambahkan @ dan .com!"} />
      )}
      {errors.email?.type == "required" && (
        <ErrorMessage message={"email tidak boleh kosong!"} />
      )}
    </Fragment>
  );
};

export const ErrorMessageUsername = ({ errors }) => {
  return (
    <Fragment>
      {errors.username?.type == "required" && (
        <ErrorMessage message={"username tidak boleh kosong!"} />
      )}
      {errors.username?.type == "minLength" && (
        <ErrorMessage message={"input tidak boleh kurang dari 3 karakter!"} />
      )}
      {errors.username?.type == "maxLength" && (
        <ErrorMessage message={"input tidak boleh lebih dari 10 karakter!"} />
      )}
    </Fragment>
  );
};

export const ErrorMessageMsg = ({ errors }) => {
  return (
    <Fragment>
      {errors.message?.type == "maxLength" && (
        <ErrorMessage message={"pesan tidak boleh lebih dari 80 karakter!"} />
      )}
    </Fragment>
  );
};

const ErrorMessage = ({ message }) => {
  return <p className="-mt-2 mb-4 text-center font-semibold text-red-500">{message}</p>;
};
