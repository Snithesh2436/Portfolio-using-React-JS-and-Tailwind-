import React from "react";
import Title from "../layouts/Title";
import Education from "./Education";

const Journey = () => {
  return (
    <section
      id="journey"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Journey" />
      </div>

      <Education />
    </section>
  );
};

export default Journey;