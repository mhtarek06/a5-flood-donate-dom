const donateSection = document.getElementById("donate-area-section");
const historySection = document.getElementById("donated-history-section");

const donateSwitch = document.getElementById('donate-switch');
const historySwitch = document.getElementById('history-switch');

console.log(donateSwitch);


document.getElementById("donate-switch").addEventListener("click", function () {
  donateSection.classList.remove("hidden");
  historySection.classList.add("hidden");

  donateSwitch.classList.remove("border-gray-500");
  donateSwitch.classList.add("bg-btn-bg");
  
  historySwitch.classList.remove("bg-btn-bg");
  historySwitch.classList.add("bg-header-bg");
});

document
  .getElementById("history-switch")
  .addEventListener("click", function () {
    donateSection.classList.add("hidden");
    historySection.classList.add("flex");
    historySection.classList.remove("hidden");

    historySwitch.classList.remove("bg-header-bg");
    historySwitch.classList.add("bg-btn-bg");

    donateSwitch.classList.remove("bg-btn-bg");
    donateSwitch.classList.add("border-gray-500");
  });
