"use client";
import { useFormik } from "formik";
import React from "react";
import { MdEmail, MdError } from "react-icons/md";
import * as Yup from "yup";

export default function SentMe() {
  const SentMeSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string()
      .required("Message is required")
      .test(
        "min-two-words",
        "Message must contain at least two words",
        (value) => value && value.trim().split(/\s+/).length >= 2
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      if (!formik.isValid) return;
      const data = {
        email: values.email.trim(),
        message: values.message.trim(),
      };
      console.log(data);
    },
    validationSchema: SentMeSchema,
  });

  return (
    <div className="w-full min-h-[calc(100dvh-100px)] flex justify-center items-center fadeIn-content">
      <div className="w-full h-full flex justify-between items-stretch flex-col md:flex-row">
        <form
          onSubmit={formik.handleSubmit}
          noValidate
          className="w-full flex flex-col gap-10 p-3 rounded-2xl"
        >
          <h2 className="text-5xl text-center text-white">Sent Me</h2>

          <div className="relative flex items-center">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type="email"
              name="email"
              id="email"
              placeholder="Email:"
              className="py-3 border-2 border-[var(--main-color)] rounded-2xl w-full px-8"
            />
            <span className="absolute inset-y-0 left-0 flex items-center px-2 text-xl text-zinc-700">
              <MdEmail />
            </span>
          </div>
          {formik.touched.email && formik.errors.email && (
            <div className="flex gap-3 items-center text-red-500 bg-red-100 p-3 rounded-2xl">
              <MdError />
              <span>{formik.errors.email}</span>
            </div>
          )}

          <div className="relative flex">
            <textarea
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              name="message"
              id="message"
              placeholder="Message:"
              className="p-2 border-2 border-[var(--main-color)] rounded-xl h-[300px] w-full"
            ></textarea>
          </div>
          {formik.touched.message && formik.errors.message && (
            <div className="flex gap-3 items-center text-red-500 bg-red-100 p-3 rounded-2xl">
              <MdError />
              <span>{formik.errors.message}</span>
            </div>
          )}

          <button
            type="submit"
            className={`text-lg py-3 rounded-2xl max-w-[200px] transition-all duration-300 ${
              formik.isValid && formik.touched.email && formik.touched.message
                ? "bg-[var(--main-color)] text-black cursor-pointer"
                : "border-2 border-gray-500 text-gray-400 cursor-not-allowed"
            }`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
