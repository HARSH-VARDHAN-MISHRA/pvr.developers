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





  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Active button styling
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      galleryItems.forEach(item => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
