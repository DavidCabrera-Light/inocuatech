function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}

// Scroll efecto header
window.addEventListener("scroll", function() {
    document.querySelector(".header").classList.toggle("scrolled", window.scrollY > 50);
});

// Animaciones al hacer scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));