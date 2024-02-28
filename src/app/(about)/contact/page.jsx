import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";
import siteMetadata from "@/src/utils/siteMetaData";
import React from "react";

// setting SEO (no need for generateMetadata function as it's a static page and doesn't need to be generated i.e. it's not a dynamic page)
export const metadata = {
  title: "Contact Me",
  description: `Get in touch with me through the form available on this page or email me at ${siteMetadata.email}`,
};

const Contact = () => {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
      <div className="inline-block w-2/5 h-full border-r-2 border-solid border-dark">
        <LottieAnimation />
      </div>

      <div className="w-3/5 flex flex-col items-start justify-center px-16 pb-8">
        <h2 className="font-bold capitalize text-4xl">Let's Connect</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
