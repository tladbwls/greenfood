var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: false,
  loopAdditionalSlides: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".recomend-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $("header").outerHeight();

// $(window).scroll(function (event) {
//   didScroll = true;
// });

// setInterval(function () {
//   if (didScroll) {
//     hasScrolled();
//     didScroll = false;
//   }
// }, 250);

const menu = document.querySelector(".menu");
const toggle_menu = document.querySelector(".menu-toggle");
const all = document.querySelector(".all");

toggle_menu.addEventListener("click", function () {
  this.classList.toggle("active");
  console.log(this);
  if (toggle_menu.classList.contains("active")) {
    menu.classList.add("active");
    all.classList.add("active");
  } else {
    menu.classList.remove("active");
    all.classList.remove("active");
  }
});

// if (menu == b) {
//   function toggleclick() {
//     menu.classList.remove("active");
//   }
// } else {
//   function toggleclick() {
//     menu.classList.add("active");
//   }
// }
// function toggleclick() {
//   menu.classList.add("active");
// }

// function  (toggleclick) {
//   if (menu.classList.contains("active")) {
//   menu.classList.add("active");
// } else {
//   menu.classList.remove("active");
// };
// }

// if (menu.classList.contains("active")) {
//   function toggleclick() {
//     menu.classList.toggle("active");
//   }
// } else {
//   function toggleclick() {
//     menu.classList.add("active");
//   }
// }

// toggle.addEventListener("click", toggleclick);

function openNav() {
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.body.style.backgroundColor = "white";
}

const btn = document.querySelector(".grm");
const panel = document.querySelector(".nav-menu-bar");

btn.addEventListener("click", function () {
  this.classList.toggle("active");
  console.log(this);
  if (panel.classList.contains("active")) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
});
