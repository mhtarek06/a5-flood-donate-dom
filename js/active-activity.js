const donateSection = document.getElementById("donate-area-section");
const historySection = document.getElementById("donated-history-section");

document.getElementById("donate-switch").addEventListener("click", function () {
  donateSection.classList.remove("hidden");
  historySection.classList.add("hidden");
});

document
  .getElementById("history-switch")
  .addEventListener("click", function () {
    donateSection.classList.add("hidden");
    historySection.classList.add("flex");
    historySection.classList.remove("hidden");
  });
