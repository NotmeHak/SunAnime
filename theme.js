const toggleBtn = document.getElementById("darkToggle");

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) applyTheme(savedTheme);

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
