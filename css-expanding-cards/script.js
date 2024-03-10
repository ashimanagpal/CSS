//With Javascript
// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });
// function removeActiveClasses() {
//   panels.forEach((p) => {
//     p.classList.remove("active");
//   });
// }

//With Jquery
$(document).ready(function () {
  $(".panel").click(function () {
    $(".panel").removeClass("active");
    $(this).addClass("active");
  });
});
