const navLinks = document.querySelectorAll(".nav__link");
const arrow = document.querySelector(".arrow");
//добавляет событие клика на стрелку вниз
arrow.onclick = function (event) {
  event.preventDefault();
  scrollToSection(arrow);
};
//добавляет событие клика на боковую навигацию
navLinks.forEach((link) => {
  link.onclick = function (event) {
    event.preventDefault();
    scrollToSection(link);
  };
});
//делает скролл к указанной в ссылке секции
function scrollToSection(elem) {
  const section = document.querySelector(elem.getAttribute("href"));
  const coord = section.getBoundingClientRect().top;

  window.scrollTo({
    top: coord + pageYOffset,
    behavior: "smooth",
  });
}
//вычисляет отступ от страницы
window.onscroll = function () {
  const clientHeight = document.documentElement.clientHeight;
  const coord = window.pageYOffset;
  if (coord <= clientHeight) {
    addClassToActiveLink(0);
  }
  if (coord > clientHeight && coord < clientHeight + clientHeight) {
    addClassToActiveLink(1);
  }
  if (coord >= clientHeight + clientHeight) {
    addClassToActiveLink(2);
  }
};
//добавляет стандартный класс и активный класс для нужного элемента по индексу
function addClassToActiveLink(index) {
  navLinks.forEach((elem, key) => {
    key === index
      ? elem.setAttribute("class", "nav__link active-link")
      : elem.setAttribute("class", "nav__link");
  });
}