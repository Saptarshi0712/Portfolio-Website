"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/lib/hooks";
import SubmitBtn from "./_components/submit-btn";
import SectionHeading from "@/common/components/shared/section-heading";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { ref } = useSectionInView("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");

  const serviceID = "service_m6pexsn"; 
  const templateID = "template_w8a4syh"; 
  const publicKey = "aWAZOmzTp8dbMGIaN"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);

      toast.success("Email sent successfully!");
      formRef.current.reset();
      setEmail(""); // Clear email field
    } catch (error) {
      console.error("Failed to send email:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to send email";
      toast.error(errorMessage);
      toast.error("Please contact me directly at saptarshirpattanayak2004@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex w-full scroll-mt-12 flex-col items-center py-20 pb-44 text-center dark:bg-darkBg dark:text-white"
      initial={{ opacity: 0.8 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Hit me up!</SectionHeading>
      <div className="w-[min(100%,38rem)] px-4">
        <p className="mb-20 mt-6 text-gray-700 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:saptarshirpattanayak2004@gmail.com">
            saptarshirpattanayak2004@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          ref={formRef}
          className="mt-10 flex flex-col dark:text-black"
          onSubmit={handleSubmit}
        >
          <input
            className="h-14 rounded-lg border bg-gray-50 px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:placeholder:text-darkBg dark:focus:bg-opacity-100"
            name="from_email" // must match your EmailJS template!
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="my-3 h-52 resize-none rounded-lg border bg-gray-50 p-4 transition-all dark:bg-opacity-80 dark:outline-none dark:placeholder:text-darkBg dark:focus:bg-opacity-100"
            name="message" // must match your EmailJS template!
            placeholder="Your message 👋"
            required
            maxLength={5000}
          />
          <div className="flex justify-center">
            <SubmitBtn isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </motion.section>
  );
}
