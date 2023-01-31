// slider section
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

// sticky header
window.onscroll = function () {
  myFunction();
};

const header = document.querySelector(".header");
const sticky = header.offsetTop;
function myFunction() {
  // console.log(scrollX);
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

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

//sidemenu
const btns = document.querySelector(".main-toggle");
const panel = document.querySelectorAll(".sidenav");
const close = document.querySelectorAll(".closebtn");
const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".hamburger");

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
      hamburger.classList.add("active");
    } else {
      this.nextSibling.nextSibling.classList.remove("active");
      b.classList.remove("active");
      overlay.classList.remove("active");
      hamburger.classList.remove("active");
    }

    // overlay.addEventListener("click", function () {
    //   this.nextSibling.nextSibling.classList.remove("active");
    //   b.classList.remove("active");
    //   overlay.classList.remove("active");
    // });
  });
  b.addEventListener("click", function () {
    b.classList.remove("active");
    if (!b.classList.contains("active")) {
      btns.classList.remove("active");
      btns.nextSibling.nextSibling.classList.remove("active");
      overlay.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  overlay.addEventListener("click", function () {
    overlay.classList.remove("active");
    if (!overlay.classList.contains("active")) {
      btns.classList.remove("active");
      btns.nextSibling.nextSibling.classList.remove("active");
      overlay.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

function openNav() {
  document.getElementById("mySidenav").style.left = "0";
  document.getElementById("main").style.marginLeft = "250px";
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  // panel.style.zlndex = 1000;
  overlay.style.backgroundColor = "rgba(0,0,0,0.4)";
  overlay.style.visibility = "visible";
  overlay.style.opacity = 1;
}

function closeNav() {
  document.getElementById("mySidenav").style.left = "-300px";
  document.getElementById("main").style.marginLeft = "0";
  // document.body.style.backgroundColor = "white";
  overlay.style.backgroundColor = "white";
  overlay.style.visibility = "hidden";
}

// sidenav
// const dropdownBtn = document.querySelectorAll(".dropdown-btn");
// const dropdownCtn = document.querySelectorAll(".dropdown-container");

// dropdownBtn.forEach((dBtn, idx) => {
//   dBtn.addEventListener("click", function () {
//     dropdownCtn.forEach((cBtn) => {
//       // console.log(cBtn);
//       cBtn.classList.remove("active");
//     });
//     dropdownBtn.forEach((item) => {
//       // console.log(item);
//       item.classList.remove("active");
//     });

//     dropdownBtn[idx].classList.add("active");
//     dropdownCtn[idx].classList.add("active");

//     if (dropdownBtn[idx].classList.contains("active")) {
//       dropdownBtn[idx].classList.remove("active");
//       // dropdownBtn[idx].addEventListener("click", function () {

//       //   dropdownCtn[idx].classList.remove("active");
//       // });
//     }
//   });
// });

var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionItemHeading");
for (i = 0; i < accHD.length; i++) {
  // console.log(accHD);
  accHD[i].addEventListener("click", toggleItem);
}
function toggleItem() {
  // console.log(this.parentNode.parentNode);
  var itemClass = this.parentNode.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.parentNode.className = "accordionItem open";
  }
}

// search item click
const searchIcon = document.querySelector(".header .search");
const searchBox = document.querySelector(".header .side-search");
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
