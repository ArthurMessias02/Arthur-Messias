import {skills  } from "../../data/Skills.js";
import "./Skills.css";
function Skills() {
  return (
    <section id="skills">
    <h2>Skills</h2>

    <p>Currently working with</p>

    <ul>
        {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
        ))}
    </ul>
</section>
  );
}

export default Skills;