// hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");

}))

// Click/Touch Logo 

const productCard = document.getElementById('branding');

productCard.addEventListener('click', function() {
  window.location.href = 'index.html';
  console.log("hice click");
});