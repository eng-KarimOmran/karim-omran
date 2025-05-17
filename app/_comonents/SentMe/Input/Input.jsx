"use client";
import React from "react";
import MSError from "../MSError/MSError";

export default function Input({ formik, id, label }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="ps-2" htmlFor={id}>{label}</label>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[id]}
        type="text"
        name={id}
        id={id}
        className="py-3 border-2 border-[var(--main-color)] rounded-xl w-full px-2"
      />
      {formik.errors[id] && formik.touched[id] && <MSError error={formik.errors[id]} />}
    </div>
  );
}
