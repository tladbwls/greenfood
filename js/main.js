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

toggle_menu.addEventListener("click", function () {
  this.classList.toggle("active");
  console.log(this);
  if (toggle_menu.classList.contains("active")) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
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
const overlay = document.querySelector(".overlay");
function openNav() {
  overlay.style.backgroundColor = "rgba(0,0,0,0.4)";
  overlay.style.visibility = "visible";
  overlay.style.opacity = 1;
}

function closeNav() {
  overlay.style.backgroundColor = "white";
  overlay.visibility = "hidden";
}

const btns = document.querySelectorAll(".grm");
const panel = document.querySelectorAll(".nav-menu-bar");

// btns.addEventListener("click", function () {
//   this.classList.toggle("active");
//   console.log(this);
//   if (btns.classList.contains("active")) {
//     panel.classList.add("active");
//   } else {
//     panel.classList.remove("active");
//   }

// });
// for (let i = 0; i < btns.length; i++) {
//   const btn = btns[i];
//   console.log(btn);

//   btn.addEventListener("click", function () {
//     this.classList.toggle("active");
//     // console.log(this);
//   });
// }

btns.forEach(function (a) {
  console.log(a);
  a.addEventListener("click", function () {
    this.classList.toggle("active");
    // this.sibling.classList.add("active");
    if (this.classList.contains("active")) {
      console.log(this.nextSibling.nextSibling);
      this.nextSibling.nextSibling.classList.add("active");
    } else {
      this.nextSibling.nextSibling.classList.remove("active");
    }
  });
  // panel.forEach(function (b) {
  //   console.log(b);
  //   a.addEventListener("click", function () {
  //     // b.classList.add("active");
  //     if (a.classList.contains("active")) {
  //       b.classList.add("active");
  //     } else {
  //       b.classList.remove("active");
  //     }
  //   });
  // });
});
