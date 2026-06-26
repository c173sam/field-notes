const notes = document.querySelectorAll(".case-card, .lab-note, .skill-lanes div");

notes.forEach((item) => {
  item.addEventListener("mouseenter", () => item.setAttribute("data-active", "true"));
  item.addEventListener("mouseleave", () => item.removeAttribute("data-active"));
});
