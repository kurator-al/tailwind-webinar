# Быстрая установка Tailwind CSS с Vite для вебинара

## Команды для быстрого старта:

```bash
# 1. Создаем проект
npm create vite@latest my-tailwind-app -- --template vanilla

# 2. Переходим в папку
cd my-tailwind-app

# 3. Устанавливаем зависимости
npm install

# 4. Устанавливаем Tailwind CSS
npm install -D tailwindcss @tailwindcss/postcss autoprefixer

# 5. Создаем конфигурацию PostCSS
echo "export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}" > postcss.config.js
```

## Настройка CSS:

В файле `src/style.css` заменить содержимое на:

```css
@import "tailwindcss";

/* Дополнительные кастомные стили можно добавлять здесь */
.custom-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## Структура проекта для вебинара:

```
my-tailwind-app/
├── index.html          # Вся разметка здесь (как в обычной верстке)
├── src/
│   ├── style.css       # Tailwind + кастомные стили
│   ├── main.js         # Только JavaScript логика
│   └── counter.js      # Модульный JS (опционально)
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
