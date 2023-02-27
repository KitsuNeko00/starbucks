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

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();