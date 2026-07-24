// MouseGlow.jsx
import { useEffect, useRef } from "react";
import "./MouseGlow.css";

function MouseGlow() {
    const glowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (glowRef.current) {
                glowRef.current.style.setProperty("--x", `${e.clientX}px`);
                glowRef.current.style.setProperty("--y", `${e.clientY}px`);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return <div className="mouse-glow" ref={glowRef} />;
}

export default MouseGlow;