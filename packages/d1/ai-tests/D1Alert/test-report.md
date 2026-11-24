# Отчёт о визуальном и функциональном тестировании: `D1Alert`

- **Дата прогона**: `2026-11-24`
- **Целевой URL**: `http://localhost:3000/component-alert`
- **Инструмент**: Headless Chrome CDP (`127.0.0.1:9222`, Puppeteer)
- **Разрешения**: Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`), Narrow Mobile (`320×568`)

## 1. Сводка результатов

- **Всего тест-кейсов**: `12`
- **Пройдено (`✅`)**: `12`
- **Предупреждения (`⚠️`)**: `0`
- **Провалено (`❌`)**: `0`

> [!TIP]
> Все 12 тест-кейсов пройдены успешно после добавления `min-width: 0; overflow-wrap: anywhere;` для `&__context` в [`Alert/style.scss`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Alert/style.scss) и разделения перегруженных примеров в [`DemoAlertPage.vue`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/demo/src/pages/components/DemoAlertPage.vue).

---

## 2. Матрица результатов тестирования

### 2.1. Визуальное тестирование (`VIS`)

| ID | Сценарий | Статус | Скриншот | Комментарий |
| :--- | :--- | :---: | :--- | :--- |
| `TC-VIS-001` | Базовые варианты (`label`, `description`, только `label`, только `description`, числовые `0`) | ✅ | [TC-VIS-001.png](./screenshots/TC-VIS-001.png) | Все 4 варианта отрендерены корректно, включая `0` / `0` и пользовательские `labelId`/`descriptionId`. |
| `TC-VIS-002` | Иконки (`icon`, `iconTrailing`, `iconDir`, `iconAttrs`) | ✅ | [TC-VIS-002.png](./screenshots/TC-VIS-002.png) | Ведущие и хвостовые иконки, размеры (`size: 'lg'`) и направление выровнены корректно. |
| `TC-VIS-003` | Хвостовая кнопка (`button`: строка, `0`, объект, иконка) и выравнивание (`itemCenter`) | ✅ | [TC-VIS-003.png](./screenshots/TC-VIS-003.png), [TC-VIS-003b.png](./screenshots/TC-VIS-003b.png) | Все 4 варианта кнопки отображаются без дубля класса `d1-alert__button`; `itemCenter` (`center` vs `flex-start`) работает корректно. |
| `TC-VIS-004` | Оформления (`primary`, `secondary`) и палитры (`slate`, `red`, `green`, `blue`, `amber`) | ✅ | [TC-VIS-004.png](./screenshots/TC-VIS-004.png) | Цветовые схемы и контраст текста/фона корректны во всех вариантах. |
| `TC-VIS-005` | Действия (`actionsList`, `actionsSecondary`), ссылки (`links`, `linksAttrs`) и слоты (`#default`, `#description`, `#body`, `#trailing`) | ✅ | [TC-VIS-005.png](./screenshots/TC-VIS-005.png), [TC-VIS-005b.png](./screenshots/TC-VIS-005b.png) | Разделители `•` между ссылками симметричны, `linksAttrs: { divider: false }` убирает разделители, действия и все 4 слота рендерятся корректно. |

### 2.2. Интерактивное тестирование (`INT`)

| ID | Сценарий | Статус | Скриншот | Комментарий |
| :--- | :--- | :---: | :--- | :--- |
| `TC-INT-001` | Закрытие алерта (`closeButton`) и восстановление | ✅ | [TC-INT-001.png](./screenshots/TC-INT-001.png) | Клик по `.d1-alert__buttonClose` плавно скрыл и удалил алерт из DOM (`2 -> 1`), сгенерировал событие `close`; `Restore Dismissed Alerts` восстановил оба алерта (`2`). |
| `TC-INT-002` | Клики по хвостовой кнопке (`Undo`, `0`, `Retry Sync`, icon-only) | ✅ | [TC-INT-002.png](./screenshots/TC-INT-002.png) | Все 4 варианта стабильно генерируют `click` и `clickLite`. |
| `TC-INT-003` | Клики по ссылкам и действиям, переключатели `actionsHide`, `iconTurn`, `iconHide` | ✅ | [TC-INT-002.png](./screenshots/TC-INT-002.png) | Зафиксированы события `linkLite` и `actionsLite`; `Toggle Actions Hide` скрывает/возвращает `.d1-actions` (`1 -> 0 -> 1`); `Toggle Icon Turn`/`Hide` применяют классы `d1-icon--turn` и `d1-icon--hide`. |

### 2.3. Граничные случаи (`BND`)

| ID | Сценарий | Статус | Скриншот | Комментарий |
| :--- | :--- | :---: | :--- | :--- |
| `TC-BND-001` | Длинный неразрывный текст, Unicode (`Tiếng Việt`, кириллица, эмодзи), XSS-экранирование, пустой `links: []` | ✅ | [TC-BND-001.png](./screenshots/TC-BND-001.png) | Неразрывный токен переносится внутри `&__context` (`overflow-wrap: anywhere`, `scrollWidth: 1280 === clientWidth: 1280`), кнопка закрытия остаётся на месте; Unicode, `links: []` и XSS (`scriptCount: 0`) корректны. |

### 2.4. Адаптивность (`RSP`)

| ID | Сценарий | Статус | Скриншот | Комментарий |
| :--- | :--- | :---: | :--- | :--- |
| `TC-RSP-001` | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`), Narrow Mobile (`320×568`) | ✅ | [TC-RSP-001.png](./screenshots/TC-RSP-001.png), [TC-RSP-001b.png](./screenshots/TC-RSP-001b.png) | На всех четырёх разрешениях `documentElement.scrollWidth === window.innerWidth` и `0` переполняющихся алертов (`overflowingAlerts: []`). |

### 2.5. Доступность (`A11Y`)

| ID | Сценарий | Статус | Скриншот | Комментарий |
| :--- | :--- | :---: | :--- | :--- |
| `TC-A11Y-001` | ARIA-роли, `aria-live`, связки `aria-labelledby`/`aria-describedby`, `aria-label` кнопок закрытия | ✅ | — | `role="alert"` / `role="status"`, `aria-live="polite"` / `"assertive"`, `0` битых ARIA-ссылок (`brokenAriaRefs: []`), `aria-labelledby`/`aria-describedby` не добавляются при отсутствии элемента, кнопки закрытия имеют `aria-label="Close"` и `"Dismiss notification"`. |

### 2.6. Консоль и сеть (`LOG`)

| ID | Сценарий | Статус | Скриншот | Комментарий |
| :--- | :--- | :---: | :--- | :--- |
| `TC-LOG-001` | Проверка ошибок консоли, Vue-предупреждений, `pageerror` и HTTP-ошибок | ✅ | — | `0` `console.error`, `0` `[Vue warn]`, `0` `pageerror`, `0` сетевых ошибок (`>= 400`). |
