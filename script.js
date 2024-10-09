let currentDate = new Date().toLocaleDateString();
let currentYear = new Date().getFullYear().toLocaleString();
let dateLabel = document.querySelector("#date");
let yearLabel = document.querySelector("#year");

dateLabel.textContent = currentDate;
yearLabel.textContent = currentYear;
