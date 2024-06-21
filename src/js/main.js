// Import our custom CSS
import "../scss/styles.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const hamburgerBtn = document.querySelector("#toggleButton");

hamburgerBtn.addEventListener("click", () => {
  document.querySelector("#sidebar").classList.toggle("expand");
});

const appLogo = document.querySelector("#appLogo");

appLogo.addEventListener("click", () => {
  document.querySelector("#popup").classList.toggle("d-none");
});

const modal = document.querySelector("#modal");
const createWorkOrderBtn = document.getElementById("newProject");
const span = document.getElementsByClassName("close")[0];
const cancelBtn = document.querySelector("#cancelBtn");

createWorkOrderBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

cancelBtn.onclick = function () {
  modal.style.display = "none";
  console.log("hello");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const ctx = document.getElementById("projectContent");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["02-06-2024", "09-06-2024", "16-06-2024", "23-06-2024", "30-06-2024"],
    datasets: [
      {
        label: "Plan",
        data: [0, 0, 100, 100, 100],
        borderWidth: 1,
      },
      {
        label: "Actual",
        data: [0, 0, 48],
        borderWidth: 1, 
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

