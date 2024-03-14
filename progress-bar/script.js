const next = document.getElementById("next");
const pre = document.getElementById("pre");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

pre.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

const update = () => {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  1;
  if (currentActive == 1) {
    pre.disabled = true;
  } else if (currentActive == circles.length) {
    next.disabled = true;
  } else {
    pre.disabled = false;
    next.disabled = false;
  }
};
