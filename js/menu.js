document.addEventListener("includesLoaded", () => {

  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("menuFull");
  const logo = document.querySelector(".logo__fixed");

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
    logo.classList.toggle("active");
  });

});