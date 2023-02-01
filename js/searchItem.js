// search item click
const searchIcon = document.querySelector("#header .search");
const searchBox = document.querySelector("#header .side-search");
const searchClose = document.querySelector(".search-icon-2");

searchIcon.addEventListener("click", function () {
  searchIcon.classList.toggle("active");
  if (searchIcon.classList.contains("active")) {
    searchBox.classList.add("active");
    searchClose.classList.add("active");
  }
});

searchClose.addEventListener("click", function () {
  searchClose.classList.remove("active");
  if (!searchClose.classList.contains("active")) {
    searchIcon.classList.remove("active");
    searchBox.classList.remove("active");
  }
});
