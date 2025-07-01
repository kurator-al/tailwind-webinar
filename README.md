# Быстрая установка Tailwind CSS с Vite для вебинара

## Быстрый старт:

```bash
# 1. Либо просто скачиваем проект, либо клонируем этот репозиторий при помощи команды
git clone https://github.com/kurator-al/tailwind-webinar.git

# 2. Устанавливаем node.js
# его можно поставить как обычную программу, сейчас на сайте это зелёная кнопка "Windows Installer", но может в будущем измениться. Процедура установки многоступенчатая, но в основном просто жмём "далее"

https://nodejs.org/en/download

# 3. Открываем папку с проектом (tailwind-webinar если не переименовали), открываем её в vs code и в терминале устанавливаем зависимости
npm install

```

## Структура проекта для вебинара:

```
tailwind-webinar/
├── index.html          # Вся разметка здесь (как в обычной верстке)
├── src/
│   ├── style.css       # Tailwind + кастомные стили
│   └── main.js         # Только JavaScript логика
├── postcss.config.js   # Конфигурация для Tailwind
└── package.json        # Зависимости
```

## Основные команды:

```bash
npm run dev     # Запуск dev сервера
npm run build   # Сборка для продакшена
npm run preview # Предпросмотр собранной версии
```

## Преимущества этой настройки:

✅ **Простота**: Вся разметка в HTML, как в обычной верстке  
✅ **Быстрота**: Hot reload + автопересборка стилей  
✅ **Минимализм**: Только необходимые файлы и зависимости  
✅ **Знакомство**: Структура похожа на обычную верстку  
✅ **Современность**: Tailwind v4 + Vite сборщик

## Примеры использования Tailwind:

```html
<!-- Responsive сетка -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Красивая кнопка -->
  <button
    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
  >
    Кнопка
  </button>

  <!-- Адаптивный текст -->
  <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold">Заголовок</h1>
</div>
```
