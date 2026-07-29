import "./Projects.css";
import projects from "../../data/projects";
import { useScrollReveal } from "../../hooks/useScrollReveal";


import "./Projects.css";
function Projects() {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section id="projects" ref={ref} className={`projects reveal ${isVisible ? "visible" : ""}`}>
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            {project.image && (
              <div className="project-image">
                <img src={project.image} alt={`Preview do projeto ${project.title}`} />
              </div>
            )}
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technologies">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              ) : (
                <span className="in-progress">Em andamento</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;