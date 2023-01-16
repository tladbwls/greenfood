// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
//   // document.getElementById("main").style.marginLeft = "250px";
//   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   // document.getElementById("main").style.marginLeft = "0";
//   document.body.style.backgroundColor = "white";
// }

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

// const menu = document.querySelector(".menu");
// const toggle_menu = document.querySelector(".menu-toggle");

// toggle_menu.addEventListener("click", function () {
//   this.classList.toggle("active");
//   console.log(this);
//   if (toggle_menu.classList.contains("active")) {
//     menu.classList.add("active");
//   } else {
//     menu.classList.remove("active");
//   }
// });

// // toggle.addEventListener("click", toggleclick);
// const overlay = document.querySelector(".overlay");
// function openNav() {
//   document.getElementById("menuToggle").style.width = "250px";
//   overlay.style.backgroundColor = "rgba(0,0,0,0.4)";
//   // overlay.style.visibility = "visible";
//   // overlay.style.opacity = 1;
// }

// function closeNav() {
//   document.getElementById("menu").style.width = "0";
//   overlay.style.backgroundColor = "white";
//   // overlay.visibility = "hidden";
// }

const btns = document.querySelector(".main-toggle");
const panel = document.querySelectorAll(".sidenav");
const close = document.querySelectorAll(".closebtn");
const overlay = document.querySelector(".overlay");

// btns.forEach(function (a) {
//   // console.log(a);
//   a.addEventListener("click", function () {
//     this.classList.toggle("active");
//     // this.sibling.classList.add("active");
//     if (this.classList.contains("active")) {
//       // console.log(this.nextSibling.nextSibling.childNodes);
//       this.nextSibling.nextSibling.classList.add("active");
//     } else {
//       this.nextSibling.nextSibling.classList.remove("active");
//     }
//   });
// });

close.forEach(function (b) {
  btns.addEventListener("click", function () {
    btns.classList.toggle("active");

    if (btns.classList.contains("active")) {
      this.nextSibling.nextSibling.classList.add("active");
      b.classList.add("active");
      overlay.classList.add("active");
    } else {
      this.nextSibling.nextSibling.classList.remove("active");
      b.classList.remove("active");
      overlay.classList.remove("active");
    }
  });
  b.addEventListener("click", function () {
    b.classList.remove("active");
    if (!b.classList.contains("active")) {
      btns.classList.remove("active");
      btns.nextSibling.nextSibling.classList.remove("active");
      overlay.classList.remove("active");
    }
  });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  // panel.style.zlndex = 1000;
  overlay.style.backgroundColor = "rgba(0,0,0,0.4)";
  overlay.style.visibility = "visible";
  overlay.style.opacity = 1;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  // document.body.style.backgroundColor = "white";
  overlay.style.backgroundColor = "white";
  overlay.style.visibility = "hidden";
}
