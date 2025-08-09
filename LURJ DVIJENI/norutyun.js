
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("tristraka");
  const menu = document.getElementById("menu");

  // Открытие/закрытие меню при клике на кнопку
  toggleButton.addEventListener("click", (event) => {
    event.stopPropagation();  // Прекращает всплытие события
    menu.classList.toggle("show");  // Переключает видимость меню
  });

  // Клик на любое место вне меню или кнопки — закрывает меню
  document.addEventListener("click", (event) => {
    // Если клик был не по меню и не по кнопке, закрываем меню
      menu.classList.remove("show");  // Закрываем меню

  });
});
