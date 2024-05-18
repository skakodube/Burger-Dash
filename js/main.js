const nav = document.querySelector(".nav");
const navToggler = document.querySelector(".nav-toggler");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector(".cart-close");
const cartOpen = document.querySelector(".cart-open");
const collapsibles = document.querySelectorAll(".collapsible");

navToggler.addEventListener("click", () => {
  nav.classList.toggle("navigation--expanded");
});

cartOpen.addEventListener("click", () => {
  if (nav.classList.contains("navigation--expanded")) {
    nav.addEventListener(
      "transitionend",
      () => {
        cart.classList.add("cart--expanded");
        nav.removeEventListener("transitionend");
      },
      { once: true }
    );
    nav.classList.remove("navigation--expanded");
  } else {
    cart.classList.add("cart--expanded");
  }
});

cartClose.addEventListener("click", () => {
  cart.classList.remove("cart--expanded");
});

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
