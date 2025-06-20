"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { SentMeSchema } from "./validation";
import Input from "../Input/Input";
import BTNSub from "../BTNSub/BTNSub";
import Message from "../Message/Message";
import axios from "axios";
import MessageSuccessfully from "../MessageSuccessfully/MessageSuccessfully";

export default function Form() {
  const [isSuccessfully, setIsSuccessfully] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  async function sendmessage(data) {
    try {
      setIsSuccessfully(false);
      setIsLoading(true);
      const body = data;
      const req = await axios.post("https://formspree.io/f/xnnvzrrw", body);
      const res = req.data;
      if (res.ok) {
        setIsSuccessfully(true);
        formik.resetForm()
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      const data = {
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      };
      sendmessage(data);
    },
    validationSchema: SentMeSchema,
  });

  return (
    <>
      <form
        className="w-full flex flex-col gap-5 grow justify-around"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-full flex gap-3 flex-col md:flex-row">
          <Input formik={formik} id={"name"} label={"Name:"} />
          <Input formik={formik} id={"email"} label={"Email:"} />
        </div>
        <Message formik={formik} />
        <BTNSub formik={formik} isLoading={isLoading} />
      </form>
      <MessageSuccessfully isSuccessfully={isSuccessfully} setIsSuccessfully={setIsSuccessfully} />
    </>
  );
}
