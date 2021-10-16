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
          <h1 className="text-5xl md:text-7xl 4k:text-9xl font-bold px-5 md:px-0">
            Contact
          </h1>
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <label>Full name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Full name"
              className="bg-gray-200 w-full h-14 px-3"
              {...register("user_name", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.user_name?.type === "required" && (
              <p>This field is required</p>
            )}

            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="bg-gray-200 w-full h-14 px-3"
            />
            <label>Message</label>
            <textarea
              name="message"
              className="bg-gray-200 w-full h-60 px-3"
              placeholder="Message"
            />
            <input
              type="submit"
              value="Send"
              className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}
