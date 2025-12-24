const searchInput = document.getElementById("searchInput");
const articles = document.querySelectorAll(".image-container article");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  articles.forEach(article => {
    const imgName = article.querySelector("img").dataset.name.toLowerCase();
    const overlayText = article.querySelector(".image-overlay").textContent.toLowerCase();
    if (imgName.includes(value) || overlayText.includes(value)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
});
