// UseRef
import { useRef } from "react";

// EmailJS
import emailjs from "@emailjs/browser";

// Swal JS
import Swal from "sweetalert2";

// Icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

const Contact = () => {
  // useRef
  const form = useRef();
  const submitForm = () => {
    form.submit();
  };

  // Function send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1dy7eq3", "template_jqzmr9e", form.current, {
        publicKey: "b113b-QEx5bIZdu0x",
      })
      .then(
        () => {
          Swal.fire({
            title: "Thank You",
            text: "We recived your message and we will back to you soon",
            icon: "success",
          });
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] ">
          {/* Text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            id="myform"
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* Group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Name"
                className="input"
                name="name"
              />
              <input
                type="text"
                placeholder="Email"
                className="input"
                name="email"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input"
              name="subject"
            />
            <textarea
              placeholder="Message"
              className="textarea"
              name="message"
            ></textarea>
            <button
              type="submit"
              form="myform"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
