window.onscroll = function() {myFunction()};
var navbar = document.getElementById("menu");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= 150) {
    navbar.classList.add("sticky");
  }else {
    navbar.classList.remove("sticky");
  }
}