import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import {
  CodeEditor,
  RestaurantReviews,
  WeatherApp,
  
} from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Code Editor"
          des="A versatile, browser-based code editor with multi-language support, real-time collaboration, syntax highlighting, and instant code execution."
          src={CodeEditor}
          github={"https://github.com/Snithesh2436/Online-Code-Editor"}
          liveLink={"https://online-code-editor-wheat.vercel.app/"}
        />
        <ProjectsCard
          title="Weather App"
          des="Developed a responsive weather application using React.js, integrating real-time weather data via API calls for current conditions and forecasts."
          src={WeatherApp}
          github={"https://github.com/Snithesh2436/Weather_App-using-React-js"}
          liveLink={"https://weather-app-using-react-js-five.vercel.app/"}
        />
        <ProjectsCard
          title="Restaurant Reviews"
          des="Engineered a machine learning-driven web application for sentiment analysis of restaurant reviews, enabling users to receive automated sentiment assessments."
          src={RestaurantReviews}
          github={"https://github.com/Snithesh2436/Restaurant_Reviews"}
          
        />
      </div>
    </section>
  );
};

export default Projects;
