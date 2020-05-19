const button = document.querySelector(".blur-button a");

button.addEventListener("click", function () {
  if (!button.classList.contains("active")) {
    button.innerHTML = "Stop";
    button.style.animation = "animate 9s linear infinite";
    button.classList.add("active");
  } else {
    button.classList.remove("active");
    button.innerHTML = "play";
    button.style.animation = "animate-reverse 1.2s linear";
  }
});
