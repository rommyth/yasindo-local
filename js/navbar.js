// on load
window.addEventListener("load", function () {
  const navToggleBtn = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
  const navMenu = document.getElementById("navbar-sticky");

  navToggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
  });
});
