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

// for (let i = 0; i < panel.length; i++) {
//   const panels = panel[i];
//   console.log(panels);
// }
btns.forEach(function (a) {
  a.addEventListener("click", function () {
    this.classList.toggle("active");
  });
  if (btns.classList.contains("active")) {
    panel.classList.add("active");
  } else {
    panel.classList.remove("active");
  }
});

// panel.forEach(function (b) {
//   this.classList.toggle("active");
//   console.log(this);
// });
// //1. 버튼 요소 선택
// const btns = document.querySelectorAll(".btns .btn");
// const panels = document.querySelectorAll(".panels .panel");

// //4. 각각의 버튼 클릭 시 active 클래스 추가 : activeTabs 함수 정의
// function activeTabs(idx) {
//   //3번 과정에서 전달된 i 파라미터는 idx에 저장
//   //   console.log(idx);
//   //   console.log(btns[idx]);
//   // 5번 :각각의 버튼을 반복문으로 추출하여 전체 요소의 active 클래스 제거
//   for (let i = 0; i < btns.length; i++) {
//     const btn = btns[i];
//     btn.classList.remove("active");
//   }
//   //7번: 전체 패널을 반복문으로 각각 추출하여 display값 none 으로 변경(버튼 클릭시 실행)
//   for (let i = 0; i < panels.length; i++) {
//     panels[i].style.display = "none";
//   }
//   //8번 : 패널 3개 중 idx로 전달받은 패널의 요소애먼 display를 block으로 변경
//   panels[idx].style.display = "block";
//   // 6번 : 전달 받은 idx를 인덱스로 하는 버튼(클릭하는 대상)에만 active 클래스 추가
//   btns[idx].classList.add("active");
// }

// //2. 반복문으로 버튼 요소 추출 : 버튼 개를 반복문으로 각각 추출한다.
// for (let i = 0; i < btns.length; i++) {
//   const btn = btns[i];
//   //   console.log(btn);

//   //3.  버튼 클릭 시 전체 active 클래스 삭제 : 각각 추출된 버튼 요소를 클릭했을 때 activeTabs함수 실행
//   btn.addEventListener("click", () => {
//     activeTabs(i); //함수의 파라미터로 i 인덱스 전달 ex) 첫번째 탭 클릭 시 0 전달, 두 번째 탭 클릭시 1 전달...
//   });
// }
