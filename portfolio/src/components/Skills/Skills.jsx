import {skills  } from "../../data/Skills.js";
import "./Skills.css";
import { useScrollReveal } from "../../hooks/useScrollReveal";


function Skills() {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section id="skills" ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
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