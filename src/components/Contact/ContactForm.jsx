"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />{" "}
      and I want to discuss a project with you. You can email me at{" "}
      <input
        type="email"
        placeholder="email"
        {...register("email", { required: true })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />{" "}
      or call me at{" "}
      <input
        type="tel"
        placeholder="phone"
        {...register("phone", { required: true })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      . <br />
      Here are some details about the project: <br />
      <textarea
        {...register("project details", {})}
        rows={3}
        placeholder="My project is about..."
        className="w-full  p-2 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      <input
        type="submit"
        value="send request"
        className="mt-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-solid border-dark rounded-lg  cursor-pointer"
      />
    </form>
  );
}
