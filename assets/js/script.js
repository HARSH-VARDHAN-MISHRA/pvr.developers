document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initGalleryFilter();
});

function initNavbar() {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  if (!hamburger || !navbar) return;

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close-btn");
  closeBtn.innerHTML = "&times;";
  navbar.appendChild(closeBtn);

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("show");
    hamburger.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    navbar.classList.remove("show");
    hamburger.classList.remove("active");
  });
}

function initGalleryFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      galleryItems.forEach((item) => {
        item.style.display =
          filter === "all" || item.classList.contains(filter) ? "block" : "none";
      });
    });
  });
}
