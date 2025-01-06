const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
const closeHam = document.querySelector(".close-ham");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  sidebar.style.transform = `translateX(0)`;
  overlay.style.display = "block";
});

closeHam.addEventListener("click", () => {
  sidebar.style.transform = `translateX(100%)`;
  overlay.style.display = "none";
});
