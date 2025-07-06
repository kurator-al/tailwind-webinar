// Добавляем функционал смены цвета хедера
const changeColorBtn = document.querySelector("#change-color");

// Массив цветов для кнопки
const colors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-cyan-500",
];

// Функция для получения случайного цвета
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

changeColorBtn.addEventListener("click", () => {
  changeColorBtn.classList.forEach((color) => {
    if (color.includes("bg-")) {
      changeColorBtn.classList.remove(color);
    }
  });

  changeColorBtn.classList.add(getRandomColor());
});

// Инициализация и настройка слайдера Swiper
const swiper = new Swiper(".mySwiper", {
  // Основные параметры
  direction: "horizontal",
  loop: true,
  speed: 400,
  spaceBetween: 0,

  // Автопроигрывание
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // Пагинация
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Навигация
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
