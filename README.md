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

## Структура проекта:

```
tailwind-webinar/
├── dist/               # Собранная версия (создается при npm run build)
├── public/             # Статические файлы (копируются как есть)
├── src/                # Исходники (тут всё делаем)
│   ├── index.html      # Главная страница
│   ├── main.js         # JavaScript логика
│   ├── css/            # CSS файлы, в том числе и главный style.css
│   │   ├── style.css           # Tailwind + кастомные стили
│   ├── js/             # Внешние JS библиотеки
│   └── img/            # Изображения. Все картинки из этой папки будут оптимизированы
├── vite.config.js      # Конфигурация сборщика Vite
├── package.json        # Зависимости
└── README.md           # Документация
```

## Основные команды:

```bash
npm run dev     # Запуск dev сервера
npm run build   # Сборка для продакшена
npm run preview # Предпросмотр собранной версии
```

## background-image с подключением картинок:

Используйте для подключения картинок обычный CSS т.к. тут я не смог с ним совладать т.к. из-за того что работа со сборкой слишком упрощена

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
