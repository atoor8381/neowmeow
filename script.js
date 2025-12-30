const grid = document.getElementById("grid");
const remainingTime = document.getElementById("remaining-time");

const now = new Date();
const year = now.getFullYear();

const startOfYear = new Date(year, 0, 1);
const endOfYear = new Date(year + 1, 0, 1);

const MS_PER_DAY = 1000 * 60 * 60 * 24;
const totalDays = Math.round((endOfYear - startOfYear) / MS_PER_DAY);

// Create boxes
for (let i = 0; i < totalDays; i++) {
  const day = document.createElement("div");
  day.classList.add("day");
  grid.appendChild(day);
}

function update() {
  const now = new Date();

  const daysPassed = Math.floor((now - startOfYear) / MS_PER_DAY);

  // Paint completed days
  document.querySelectorAll(".day").forEach((box, index) => {
    box.classList.toggle("completed", index < daysPassed);
  });

  // Remaining time
  const diff = endOfYear - now;

  const days = Math.floor(diff / MS_PER_DAY);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  remainingTime.textContent = 
    `${days} days ${hours.toString().padStart(2,"0")}:` +
    `${minutes.toString().padStart(2,"0")}:` +
    `${seconds.toString().padStart(2,"0")}`;
}

update();
setInterval(update, 1000);
