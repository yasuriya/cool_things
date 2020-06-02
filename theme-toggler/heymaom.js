const togglerBtn = document.querySelector(".theme-toggler"),
  container = document.querySelector(".container");

togglerBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const currentRotation = parseInt(
    getComputedStyle(container).getPropertyValue("--rotation")
  );
  container.style.setProperty("--rotation", currentRotation + 180);
});
