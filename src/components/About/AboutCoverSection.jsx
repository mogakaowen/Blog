import React from "react";
import Image from "next/image";
import profileCharacter from "@/public/character.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
      <div className="w-1/2 h-full border-r-2 border-solid border-dark flex justify-center ">
        <Image
          src={profileCharacter}
          alt="Mogaka"
          className="w-full h-full object-contain object-center"
        />
      </div>

      <div className="w-1/2 flex flex-col text-left items-start justify-center px-16">
        <h2 className="font-bold capitalize text-6xl">
          Hi, I'm Mogaka, a front-end software developer and an electrical and
          electronics engineer.
        </h2>

        <p className="font-medium capitalize mt-4 text-base">
          I build web applications using modern technologies and tools. I am
          passionate about learning and sharing knowledge with others. I am also
          a tech enthusiast and a lifelong learner. I am always looking for
          opportunities to work on exciting projects and collaborate with other
          developers. Dream big, work hard, and stay humble. That's my motto.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
