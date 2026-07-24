import { useEffect, useState } from "react";
import "./Navbar.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const sections = ["about", "skills", "projects", "contact"];

function Navbar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header>
            <nav className="navbar">
                <h2 className="logo">Arthur Messias</h2>

                <ul className="nav-links">
                    {sections.map((id) => (
                        <li key={id}>
                            
                                <a
                                    href={`#${id}`}
                                    className={activeSection === id ? "active" : ""}
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </a>
                        </li>
                    ))}
                </ul>

                <ul className="social-icons">
                    <li>
                        <a href="https://github.com/ArthurMessias02" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/arthur-messias-077114316/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/arthurm10k/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;