window.addEventListener("scroll", function () {
    var upperAnv = document.querySelector(".upper-header");
    var nav = document.querySelector(".upper-header > nav");
    var logo = document.querySelector(".upper-header__logo");
    var logo2 = document.querySelector(".logo2");
    var viewportHeight = window.innerHeight;

    if (window.innerWidth >= 700) {
      // Check for max-width 700px
      if (window.scrollY > viewportHeight) {
        upperAnv.classList.add("sticky");
        nav.style.display = "flex";
        logo.style.display = "flex";
        logo2.style.display = "none";
      } else {
        upperAnv.classList.remove("sticky");
        logo.style.display = "none";
        nav.style.display = "none";
        logo2.style.display = "none";
      }
    } else {
      if (window.scrollY > viewportHeight) {
        upperAnv.classList.add("sticky");
        logo.style.display = "flex";
      } else {
        upperAnv.classList.remove("sticky");
        logo.style.display = "none";
      }
    }
  });
  