import React from "react";

export default function BTNSub({ formik }) {
  function isValid() {
    const valuesFormik = Object.values(formik.values);
    for (const value of valuesFormik) {
      if (!value) {
        return false;
      } else {
        return formik.isValid;
      }
    }
  }
  return (
    <button
      type="submit"
      disabled={!isValid()}
      className={`text-xl py-3 rounded-xl text-zinc-200 w-[200px] my-2 ${
        isValid()
          ? "bg-[var(--main-color)]/85 cursor-pointer"
          : "bg-[var(--main-color)]/30 cursor-not-allowed"
      }`}
    >
      Send
    </button>
  );
}
