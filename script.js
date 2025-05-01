
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  input.addEventListener("input", function () {
    const keyword = input.value.toLowerCase();
    document.querySelectorAll(".tool-card").forEach((card) => {
      const name = card.getAttribute("data-name").toLowerCase();
      card.style.display = name.includes(keyword) ? "block" : "none";
    });
  });
});
