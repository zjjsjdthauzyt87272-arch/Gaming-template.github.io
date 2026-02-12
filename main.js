// /js/main.js
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content h1", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".hero-content p", {
  y: 40,
  opacity: 0,
  delay: .3,
  duration: 1,
  ease: "power3.out"
});

gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});

gsap.utils.toArray(".game-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.05, duration: .3, ease: "power2.out" });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: .3, ease: "power2.out" });
  });
});
// 3 DOT MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const menuPanel = document.getElementById("menuPanel");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menuPanel.classList.toggle("active");
});

// CLOSE WHEN CLICK OUTSIDE
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !menuPanel.contains(e.target)) {
    menuToggle.classList.remove("active");
    menuPanel.classList.remove("active");
  }
});