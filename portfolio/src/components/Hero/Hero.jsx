import "./Hero.css";


function Hero() {
    return (
        <section id="hero">
            <p className="intro">Building interfaces.</p>
            <p className="intro">Solving problems.</p>
            <p className="intro">Always learning.</p>

            <h1>Arthur Messias</h1>

            <h2>"Front-End Developer</h2>

            <p className="description">
                I build fast, accessible and maintainable web applications
                focused on creating simple solutions for real problems.
            </p>

            <div>
                <a href="#projects">View Projects</a>
                <a
                    href="https://github.com/ArthurMessias02"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </div>
        </section>
    );
}

export default Hero;