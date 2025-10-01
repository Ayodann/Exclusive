const targetDate = new Date("oct 27, 2025 00:00:00").getTime();
const endDate = new Date("oct 30 ,2025 00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const gap = targetDate - now;
  const interval = endDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  const td = Math.floor(interval / day);
  const th = Math.floor((interval % day) / hour);
  const tm = Math.floor((interval % hour) / minute);
  const ts = Math.floor((interval % minute) / second);

  document.querySelector("#days").textContent = d.toString().padStart(2, "0");
  document.querySelector("#hours").textContent = h.toString().padStart(2, "0");
  document.querySelector("#minutes").textContent = m
    .toString()
    .padStart(2, "0");
  document.querySelector("#seconds").textContent = s
    .toString()
    .padStart(2, "0");

  document.querySelector("#tdays").textContent = td.toString().padStart(2, "0");
  document.querySelector("#thours").textContent = th
    .toString()
    .padStart(2, "0");
  document.querySelector("#tminutes").textContent = tm
    .toString()
    .padStart(2, "0");
  document.querySelector("#tseconds").textContent = ts
    .toString()
    .padStart(2, "0");

  if (gap < 0) {
    clearInterval(countdown);
  }
  document.querySelector(".contdown-container").innerHTML =
    "<h1> Time's up!</h1>";
}, 1000);

const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".searchInput");
const searchContainer = document.querySelector("s.earch-container");

searchBtn.addEventListener("click", (e) => {
  if (window.innerWidth <= 1023) {
    e.preventDefault();
    if (searchInput.ariaValueMax.trim() === "") {
      searchContainer.classList.toggle("active");
    } else {
      alert("searching for : " + searchInput.value);
    }
  }
});
