// Contact Form Handling (no backend, just UI feedback)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      document.getElementById("formMsg").textContent = "Message sent successfully!";
      form.reset();
    });
  }
});

