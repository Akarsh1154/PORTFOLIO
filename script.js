// === Mobile Menu Toggle ===
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuBtn.querySelector("i").classList.toggle("fa-bars");
  menuBtn.querySelector("i").classList.toggle("fa-times");
});

// === Highlight Navigation Links on Scroll ===
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav .nav-link");
const mobileLinks = document.querySelectorAll("#mobile-menu .mobile-link");

function highlightNav() {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 90;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Desktop
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + sectionId) {
          link.classList.add("active");
        }
      });

      // Mobile
      mobileLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + sectionId) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", highlightNav);
