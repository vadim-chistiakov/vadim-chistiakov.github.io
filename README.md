# The IT Community

Одностраничный сайт сообщества мобильных разработчиков **The IT Community**.
Astro 5, статическая сборка, деплой на GitHub Pages. RU по умолчанию, EN — под `/en/`.

## Команды

| Команда           | Действие                                     |
| :---------------- | :------------------------------------------- |
| `npm install`     | установить зависимости                       |
| `npm run dev`     | локальный сервер на `http://localhost:4321`  |
| `npm run build`   | production-сборка в `./dist/`                |
| `npm run preview` | предпросмотр собранного сайта                |

## Структура

```
src/
  pages/
    index.astro          — главная (RU, одностраничник, секции с id под якоря)
    mentorstvo.astro     — детальная: менторство + консультации (RU)
    en/index.astro        — главная (EN)
    en/mentorstvo.astro   — детальная (EN)
    404.astro
  components/
    sections/            — секции главной (Hero, Community, Tiers, …)
    Section.astro         — обёртка секции (номер + eyebrow + заголовок)
    Accordion.astro       — <details> с оформлением
    ReviewCard.astro       — карточка отзыва (используется в ленте и в модалке)
    ReviewModal.astro      — модалка отзыва/скриншота оффера (открывается с плашек)
    Nav / Footer / MainHead / Icon
  data/                  — контент секций (см. TODO(real-data) в файлах)
  i18n/                  — config.ts (Lang, локализация путей) + ui.ts (RU/EN словарь)
  layouts/BaseLayout.astro
  styles/global.css      — дизайн-система (dark-only, токены, примитивы)
```

## Данные и плейсхолдеры

Весь редактируемый контент лежит в `src/data/*.ts`, RU/EN тексты интерфейса — в
`src/i18n/ui.ts`. Что там всё ещё демо и стоит проверить перед публикацией:

- `src/data/offers.ts` — цифры офферов демо, нужно заменить на реальные (анонимно)
- `src/data/reviews.ts` — `companyReviews` (какой отзыв открывается по клику на
  оффер/логотип компании) — часть сопоставлений подобрана по совпадению текста/суммы,
  стоит перепроверить
- `src/data/faq.ts`, `src/data/career.ts` — финальные тексты и формулировки
- `src/data/mentorship.ts` — проценты и условия по трекам менторства помечены как демо

## Дизайн

Тёмная неоновая тема, шрифты Unbounded (заголовки) + Manrope (текст).
Токены и общие классы — в `src/styles/global.css`.

Макет-референс: см. историю обсуждения / артефакт «The IT Community — Redesign».
