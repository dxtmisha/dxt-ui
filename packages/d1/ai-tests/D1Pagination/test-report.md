# Отчёт визуального тестирования: `D1Pagination`

- **Дата (UTC):** `2026-11-24T16:37:46Z`
- **Среда:** Headless Google Chrome (CDP `127.0.0.1:9222`), Vite SSR dev server (`http://localhost:3000/component-pagination`)
- **Итог:** **`9 / 9 ✅ PASS`** (`0` console errors, `0` `[Vue warn]`, `0` `pageerror`)

## Найденные и исправленные дефекты во время прогона

1. **Горизонтальное переполнение на мобильном экране (`375×812`, `overflowPx: 292px`)**: блок `.d1-pagination__navigation` в [style.scss](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Pagination/style.scss) не разрешал перенос кнопок (`flex-wrap: nowrap`), из-за чего на узких экранах крайняя кнопка `Last` и расширенный список страниц выходили за границу вьюпорта. Добавлено `flex-wrap: wrap; justify-content: center;` в `&__navigation`, пересобраны `constructor` и `d1` — переполнение снизилось с `292px` до `0px`.
2. **Плейсхолдер `textInfo` и подписка на `@more-lite`/`@more-prev-lite` в демо**: в [DemoPaginationPage.vue](file:///Users/tung/Documents/GitHub/dxt-ui/packages/demo/src/pages/components/DemoPaginationPage.vue) исправлен шаблон `text-info="[item] / [count]"` (отображается `31-45 / 90`) и добавлены обработчики `@more-lite` / `@more-prev-lite`.

## Результаты по тест-кейсам

| ID | Статус | Ключевые фактические показатели | Скриншот |
| --- | :---: | --- | --- |
| `TC-VIS-001` | ✅ PASS | `role="navigation"`, `aria-label="Pagination"`, `aria-current="page"` = `2`, `info` = `11-20 of 100`, `ellipsis` = `•••` (`aria-hidden="true"`) | [TC-VIS-001.png](./screenshots/TC-VIS-001.png) |
| `TC-A11Y-001` | ✅ PASS | `tabindex="0"`, фокус `2` -> `ArrowRight` -> `3` -> `Enter` (`page=3, rows=10`), `blur` снимает фокус (`0` активных) | [TC-A11Y-001.png](./screenshots/TC-A11Y-001.png) |
| `TC-INT-001` | ✅ PASS | `Go to Page 5` (`page=5`, `aria-current="5"`), `Set Rows to 20` (`rows=20`, кнопка меню `20`), `Reset` (`page=2, rows=10`) | [TC-INT-001.png](./screenshots/TC-INT-001.png) |
| `TC-INT-002` | ✅ PASS | `showMore`: `morePage=3 -> 4`; `showMorePrev`: `morePrevPage=4 -> 3` | [TC-INT-002.png](./screenshots/TC-INT-002.png) |
| `TC-INT-003` | ✅ PASS | `more`: `clickLite: more = 4`; `morePrev`: `clickLite: morePrev = 2`; клик по странице `4`: `clickLite: page = 4` | [TC-INT-003.png](./screenshots/TC-INT-003.png) |
| `TC-VIS-002` | ✅ PASS | Все 3 слота (`leading`, `info`, `trailing`), `aria-label="Custom pages nav"`, `textInfo="31-45 / 90"`, `aria-label="Step 3"` | [TC-VIS-002.png](./screenshots/TC-VIS-002.png) |
| `TC-BND-001` | ✅ PASS | Строки (`31-45 of 120`, page `3`), `hideIfOne` скрывает и показывает 1 страницу, `count=0` -> `0-0 of 0` (`4/4` кнопок `disabled`) | [TC-BND-001.png](./screenshots/TC-BND-001.png) |
| `TC-VIS-003` | ✅ PASS | Класс `d1-pagination--adaptive--lineAlways` применён; `dir="rtl"` отображается корректно | [TC-VIS-003.png](./screenshots/TC-VIS-003.png) |
| `TC-RESP-001` | ✅ PASS | Desktop `1440/1440` (`0px`), Tablet `768/768` (`0px`), Mobile `375/375` (`0px`), `0` ошибок консоли/Vue/page | [TC-RESP-001-mobile.png](./screenshots/TC-RESP-001-mobile.png) |
