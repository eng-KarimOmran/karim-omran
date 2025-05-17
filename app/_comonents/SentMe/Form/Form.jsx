"use client";

import React from "react";
import { useFormik } from "formik";
import { SentMeSchema } from "./validation";
import Input from "../Input/Input";
import BTNSub from "../BTNSub/BTNSub";
import Message from "../Message/Message";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      if (!formik.isValid) return;
      const data = {
        name:values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      };
      console.log(data)
    },
    validationSchema: SentMeSchema,
  });

  return (
    <form className="w-full flex flex-col gap-5 grow justify-around" onSubmit={formik.handleSubmit}>
      <div className="w-full flex gap-3 flex-col md:flex-row">
        <Input formik={formik} id={"name"} label={"Name:"} />
        <Input formik={formik} id={"email"} label={"Email:"} />
      </div>
      <Message formik={formik} />
      <BTNSub formik={formik} />
    </form>
  );
}
