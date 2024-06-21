import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col justify-center lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        
        <div className="mt-6 lgl:mt-13 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech"
            subTitle="Computer Science at VIT CHENNAI - (2021 - 2025)"
            des="Successfully completed my graduation in Computer Science, gaining a solid foundation in the field."
          />
          <ResumeCard
            title="12th"
            subTitle="Bhashyam Junior College (2019 - 2021)"
            des="Completed my 12th grade in 2021"
          />
          <ResumeCard
            title="10th"
            subTitle="Viswabharati EM High School - (2019)"
            des="Completed my 10th grade in 2019."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;