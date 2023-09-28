const mobileMenuButton = document.getElementById("mobile-menu");
const navList = document.querySelector(".navbar ul");

mobileMenuButton.addEventListener("click", function () {
  navList.classList.toggle("active");
});
