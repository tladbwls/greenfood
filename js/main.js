// slider section
var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 2000,

  autoplay: {
    delay: 3000,
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

//sidemenu
const btns = document.querySelector(".main-toggle");
const panel = document.querySelectorAll(".sidenav");
const close = document.querySelectorAll(".closebtn");
const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".hamburger");

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
      closeNav();
      hamburger.classList.remove("active");
      btns.classList.remove("active");
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
  hamburger.classList.add("active");
}

function closeNav() {
  document.getElementById("mySidenav").style.left = "-300px";
  document.getElementById("main").style.marginLeft = "0";
  // document.body.style.backgroundColor = "white";
  overlay.style.backgroundColor = "white";
  overlay.style.visibility = "hidden";
}

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
