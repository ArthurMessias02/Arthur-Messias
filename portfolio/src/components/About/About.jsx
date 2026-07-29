// About.jsx
import "./About.css";

function About() {
    return (
        <section id="about">
            <h2>About Me</h2>

            <div className="about-content">
                <div className="about-text">
                    <p>
                        I started programming because I wanted to build things that solve real problems...
                    </p>

                    <p>
                        I enjoy learning how things work behind the scenes...
                    </p>

                    <p>
                        Today I'm looking for my first opportunity...
                    </p>

                    <blockquote>
                        "I believe good software isn't about writing more code.
                        It's about solving the right problems."
                    </blockquote>
                </div>

                <div className="about-photo">
                    <img src="./Perfil/Perfil.jpg" alt="Foto de Arthur Messias" />
                </div>
            </div>
        </section>
    );
}

export default About;