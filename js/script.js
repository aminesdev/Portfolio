// Enhanced Cursor Effect
const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
});

// Interactive Elements Glow
const interactiveElements = document.querySelectorAll(
    "a, button, .nav-dock-link, .project-card, input, textarea, select, [tabindex]"
);

interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursorGlow.classList.add("active");
    });
    el.addEventListener("mouseleave", () => {
        cursorGlow.classList.remove("active");
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll(".nav-dock-link").forEach((anchor) => {
    if (anchor.getAttribute("href")?.startsWith("#")) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth",
                });
            }
        });
    }
});

// Initialize animations when elements come into view
document.addEventListener("DOMContentLoaded", () => {
    const animateElements = document.querySelectorAll("section, .project-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fade-in");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    animateElements.forEach((element) => {
        observer.observe(element);
    });
});


