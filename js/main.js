const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchMIEl = searchEl.querySelector(".material-icons");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
// material-icons search가 클릭 됐을 때도 focus 실행

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  // Input 요소가 focus 되면 search class 속성값에 focused 추가
  searchInputEl.setAttribute("placeholder", "통합검색");
  // setAttribute는 HTML요소의 속성값을 정하는 메소드
  // 첫번째 인수는 속성 이름, 두번째 인수는 속성 값
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  // Input 요소에 focus가 해제(blur) 되면 search class 속성값에서 focused를 제거
  searchInputEl.removeAttribute("placeholder", "통합검색");
  // Input 요소에 focus가 해제(blur) 되면 setAttribute에서 추가되었던 속성과 속성값을 제거
});

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
window.addEventListener(
  "scroll", // _.throttle(함수, 시간(ms단위)) (함수가 몇초에 한번씩 실행되면 되는지 설정함)
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // badgeEl.style.display = "none";
      // 배지 숨김
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //gsap.to(요소, 지속시간(s단위), 옵션);
      gsap.to(toTopEl, 0.2, {
        x: 0, // 요소가 x축의 원래위치로 이동
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block", // badgeEl.style.display = "block"; 배지 보임
      });
      gsap.to(toTopEl, 0.2, {
        x: 100, // 요소가 x축으로 100px 이동
      });
    }
  }, 300)
);
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0, 
    // 스크롤(화면)의 위치를 0px(최상단)지점으로 이동
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    // 0.7, 1,4, 2.1, 2.8 시간 지연
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  // 수직 방향
  autoplay: true,
  // autoplay는 자동재생의 여부
  loop: true,
  // loop는 반복재생의 여부
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,
  // 슬라이드 사이의 여백 (10px)
  centeredSlides: true,
  // 1번 슬라이드가 가운데에 보이기
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    // 페이지 번호 요소 선택자
    clickable: true,
    // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  // 느낌표를 붙이면 반대값이 되게 만들어 줌
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
    // 숨김처리
  } else {
    promotionEl.classList.remove("hide");
    // 보임처리
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.tp(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    // y축으로 size값 이동하며 애니메이션 처리
    repeat: -1,
    // repeat: -1은 무한반복
    yoyo: true,
    // 한번 재생된 애니메이션을 다시 역 재생
    ease: Power1.easeInOut,
    // 애니메이션 움직임 제어
    delay: random(0, delay),
    // 애니메이션 시간 지연
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 요소가 뷰포트에서 80퍼센트 지점을 넘어가면 실행
  })
    .setClassToggle(spyEl, "show") // show라는 class 속성을 넣었다 뺌
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
