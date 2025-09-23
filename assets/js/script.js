const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const closeBtn = document.createElement("span");

closeBtn.classList.add("close-btn");
closeBtn.innerHTML = "&times;"; // "×" symbol for the close button
navbar.appendChild(closeBtn);

// Toggle navbar on hamburger click
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
  hamburger.classList.toggle("active");
});

// Close the navbar when the close button is clicked
closeBtn.addEventListener("click", () => {
  navbar.classList.remove("show");
  hamburger.classList.remove("active");
});
