import "./style.css";
import { setupCounter } from "./counter.js";

// Настраиваем счетчик для кнопки counter
setupCounter(document.querySelector("#counter"));

// Добавляем функционал смены цвета хедера
const changeColorBtn = document.querySelector("#change-color");
if (changeColorBtn) {
  changeColorBtn.addEventListener("click", () => {
    const header = document.querySelector("header");
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-red-500",
      "bg-yellow-500",
      "bg-pink-500",
    ];
    const currentColor = colors[Math.floor(Math.random() * colors.length)];

    // Удаляем все цветовые классы и добавляем новый
    header.className = header.className.replace(/bg-\w+-\d+/g, "");
    header.classList.add(currentColor, "shadow-lg");

    console.log("Цвет хедера изменен на:", currentColor);
  });
}
