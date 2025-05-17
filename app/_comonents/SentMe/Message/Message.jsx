"use client";

import React from "react";
import MSError from "../MSError/MSError";

export default function Message({ formik }) {
  return (
    <div className="w-full">
      <textarea
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        name="message"
        id="message"
        className="h-[200px] border-2 border-[var(--main-color)] rounded-xl w-full p-2"
      ></textarea>
      {formik.errors.message && formik.touched.message && (
        <MSError error={formik.errors.message} />
      )}
    </div>
  );
}
