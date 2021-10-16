import Layout from "@/components/Layout";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const form = useRef();

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_66mzfvh",
        "template_xvq88cp",
        form.current,
        "user_uG2ERR9NyJGgBbIe05qy3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };

  return (
    <Layout>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto md:w-3/5">
          <h1 className="text-5xl md:text-7xl 4k:text-9xl font-bold px-5 md:px-0 pb-5">
            Contact
          </h1>
          <p className="text-xl py-5">
            Feel free to contact me also by phone +420 735 204 082. I will get
            back to you as soon as I can.
          </p>
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <div className="my-5">
              <label className="text-xl">Full name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full name"
                className="bg-gray-200 w-full h-14 px-3 my-2"
                {...register("user_name", {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors?.user_name?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>

            <div className="my-5">
              <label className="text-xl">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="bg-gray-200 w-full h-14 px-3 my-2"
                {...register("user_email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {errors?.user_email?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
              {errors?.user_email?.type === "pattern" && (
                <p className="text-red-500">Invalid email</p>
              )}
            </div>

            <div className="my-5">
              <label className="text-xl">Message</label>
              <textarea
                name="message"
                className="bg-gray-200 w-full h-60 px-3 my-2"
                placeholder="Message"
                {...register("message", {
                  required: true,
                })}
              />
              {errors?.message?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
              <input
                type="submit"
                value="Send"
                className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 my-2 rounded"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
