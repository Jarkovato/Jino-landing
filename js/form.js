//добавляет значение инпута формы в див с результатом поиска
function onSubmit(event) {
  event.preventDefault();
  const value = document.querySelector(".form__input").value;
  if (value) {
    const result = document.querySelector(".form__search-result");
    const link = document.querySelector(".form__registration-link");
    result.innerHTML = `Домен ${value} — свободен.`;
    link.innerHTML = "Зарегистрировать за 39₽";
  }
}