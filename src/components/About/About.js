import React from "react";
import { skills } from "../data/data";
import Skill from "../skills/Skill";

const About = () => {
  console.log(skills);
  return (
    <div className="about" id="about">
      <section>
        <h1>
        Hello and Welcome to My Digital World!
        </h1>
        <p>
        A dedicated DSA enthusiast who thrives on the excitement of competitive programming challenges. Through relentless learning, I am steadily mastering frontend development, blending my DSA skills with the creativity of web design to craft dynamic and efficient user interfaces. With my expanding knowledge in web development, I am set to make a significant impact in the tech industry.
        </p>
      </section>
      <section>
        <h1>Education</h1>
        <p>
          <a href="https://www.dtu.ac.in/"> Delhi Technological University </a><span> | </span>Bachelor of Technology - Computer Engineering<span> | </span> 2021-2025
        <br /><a href ="https://xaviersrohini.edu.in/">St. Xavier's School,Rohini,Delhi-110042</a><span> | </span>AISSCE/CBSE (Class XII)<span> | </span> 2021
        <br /><a href ="https://xaviersrohini.edu.in/">St. Xavier's School,Rohini,Delhi-110042</a><span> | </span>AISSCE/CBSE (Class X)<span> | </span>2019
        </p>
      </section>
      <section style={{ margin: "100px 0px" }}>
        <h1 style={{ color: "#d6dcff" }}>Skills</h1>
        <div className="skills">
          <div
            style={{
              margin: "auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {skills.map((skill) => {
              return <Skill key={skill.id} {...skill} />;
            })}
          </div>
        </div>
      </section>
      {/* <a href="#projects" className="hvr-sweep-to-right-white btn-lg btn-black">
        <span>My Projects</span>
      </a> */}
    </div>
  );
};

export default About;
