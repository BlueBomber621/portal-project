let currentDate = new Date().toLocaleDateString();
let currentYear = new Date().getFullYear().toLocaleString();
let dateLabel = document.querySelector("#date");
let yearLabel = document.querySelector("#year");
let cardsList = document.querySelector(".cards");
let cards = [
  { title: "Quiz Game", link: "./project_1/index.html" },
  { title: "Memory Game", link: "./memory_project/index.html" },
];

dateLabel.textContent = currentDate;
yearLabel.textContent = currentYear;

cards.map((item) => {
  cardsList.innerHTML += `
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <h2>${item.title}</h2>
          </div>
          <div class="card-back">
            <a href="${item.link}">Visit</a>
          </div>
        </div>`;
});
