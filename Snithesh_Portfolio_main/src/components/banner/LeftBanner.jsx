import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal"> Welcome</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Snithesh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#6366f1"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Developing and implementing highly responsive user interface components using
          React. Let's start scrolling and learn more about me.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://github.com/Snithesh2436" target="_blank">
                <FaGithub />
              </a>
            </span>
            
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/g-snithesh-74419426b/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeftBanner;
