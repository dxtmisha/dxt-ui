# Спецификация тест-кейсов: D1TextLabel

- **Сущность:** `D1TextLabel`
- **Путь к исходному коду:** `packages/d1/src/components/Ui/TextLabel`, `packages/constructor/src/constructors/TextLabel`, `packages/demo/src/pages/components/DemoTextLabelPage.vue`
- **Целевой URL:** `http://localhost:3000/component-text-label`
- **Справочные материалы:** `Нет`
- **Последняя проверка / обновление:** `2026-11-26`
- **Всего тест-кейсов:** `10`

---

## 1. Обзорная матрица покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область проверки |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 2 | P0, P1 | Шкала размеров (`xs`, `sm`, `md`, `lg`), токены типографики, динамические HTML-теги |
| **Интерактивность и функции** | `INT` | 3 | P0, P1 | Слоты (`default` и комбинированный), динамическое переключение пропсов, внешние атрибуты/`@click`/`expose().elementHtml`, `v-if` |
| **Границы и крайние случаи** | `BND` | 2 | P1, P2 | Пустое/пробельное состояние (нулевой DOM), `0`, Unicode/Кириллица/Вьетнамский/Emoji, XSS, узкий контейнер `240px` |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) |
| **Доступность (A11Y)** | `A11Y` | 1 | P1 | `labelId`, связь `aria-labelledby`, семантический `<label for="...">` и заголовки `<h3>` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие `console.error`, `[Vue warn]`, `pageerror`, сетевых сбоев и диалогов |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Шкала размеров (`xs`, `sm`, `md`, `lg`), числовое значение и токены типографики
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Visual & Design System`
- **Предусловия:** Открыть `http://localhost:3000/component-text-label`, вьюпорт `1440×900`, светлая тема.
- **Шаги:**
  1. Найти секцию `Basic & Sizes (xs, sm, md, lg)`.
  2. Проверить классы `.d1-textLabel`, `.d1-textLabel__label`, `.d1-textLabel--size--xs|sm|md|lg`, вычисленные `font-size`, `font-weight`, `line-height` и геометрию.
- **Ожидаемый результат:** Все 4 размера рендерятся с монотонной прогрессией `font-size` и ненулевой геометрией; числовое значение `100` отображается корректно.
- **Тип доказательства:** `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Динамические HTML-теги (`div`, `span`, `p`, `h2`, `h3`, `h4`, `label`) и слоты
- **Приоритет:** `P1 (High)`
- **Категория:** `Visual & Design System`
- **Предусловия:** Открыть `http://localhost:3000/component-text-label`, вьюпорт `1440×900`.
- **Шаги:**
  1. Проверить теги в секции `Dynamic HTML Tags`.
  2. Проверить слот `default` и комбинированный рендер `label` + слот в секции `Slots (default & Combined)`.
- **Ожидаемый результат:** Каждый элемент рендерится в соответствующем HTML-теге; слот и комбинированное содержимое корректно отображают `<strong>` и `<em>`.
- **Тип доказательства:** `Screenshot` (`./screenshots/TC-VIS-002.png`)

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Внешние атрибуты (`mergeProps`), `@click` и `expose().elementHtml`
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Interactive & Functional`
- **Предусловия:** Открыть страницу демо, прокрутить к секции `External Attrs, Events & Expose (elementHtml)`.
- **Шаги:**
  1. Кликнуть по `[data-testid="demo-text-label-interactive"]`.
  2. Нажать кнопку `Inspect elementHtml`.
- **Ожидаемый результат:** Фиксируется событие `click` с payload `{"source":"demo-text-label-interactive"}`, затем `elementHtml` возвращает `DIV#demo-text-label-target` с сохранёнными базовыми классами `.d1-textLabel` и `.d1-textLabel__label`.
- **Тип доказательства:** `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Реактивное переключение `size`, `tag`, `label` (текст / `0` / пусто) и `labelId`
- **Приоритет:** `P1 (High)`
- **Категория:** `Interactive & Functional`
- **Предусловия:** Открыть секцию `Interactive Controls & Dynamic Props`.
- **Шаги:**
  1. Последовательно нажимать `Cycle Size`, `Cycle Tag`, `Toggle Custom ID`.
  2. Нажать `Cycle Content (Text / 0 / Empty)` дважды (проверить `0`, затем пустое состояние `""`), затем вернуть текст.
- **Ожидаемый результат:** Размер, тег, `id` и содержимое обновляются реактивно; при `0` элемент виден с текстом `0`; при `""` узел `.d1-textLabel` полностью отсутствует в DOM.
- **Тип доказательства:** `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Условное монтирование и размонтирование (`v-if`)
- **Приоритет:** `P1 (High)`
- **Категория:** `Interactive & Functional`
- **Предусловия:** Открыть секцию `Lifecycle & Conditional Mount`.
- **Шаги:**
  1. Нажать `Toggle Mount` дважды, проверяя наличие `[data-testid="demo-text-label-lifecycle"]`.
- **Ожидаемый результат:** Элемент чисто удаляется из DOM и повторно монтируется без ошибок и предупреждений.
- **Тип доказательства:** `Console/Log`

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Пустые и пробельные строки (нулевой DOM без аллокации)
- **Приоритет:** `P1 (High)`
- **Категория:** `Boundaries & Edge Cases`
- **Предусловия:** Открыть секцию `Boundary & Edge Cases`.
- **Шаги:**
  1. Проверить `[data-testid="demo-text-label-empty-box"]`.
- **Ожидаемый результат:** Внутри контейнера нет ни одного отрендеренного элемента `.d1-textLabel` для `""` и `"   "`.
- **Тип доказательства:** `Console/Log`

#### [TC-BND-002] Числовой `0`, Unicode/Emoji, XSS-экранирование и узкий контейнер `240px`
- **Приоритет:** `P1 (High)`
- **Категория:** `Boundaries & Edge Cases`
- **Предусловия:** Открыть секцию `Boundary & Edge Cases`.
- **Шаги:**
  1. Проверить текст `[data-testid="demo-text-label-zero"]`, `[data-testid="demo-text-label-unicode"]` и `[data-testid="demo-text-label-xss"]`.
  2. Проверить `scrollWidth <= clientWidth` в `.demo-text-label-page__narrow`.
- **Ожидаемый результат:** `0` и Unicode/Emoji отображаются полностью, XSS-строка экранирована как текст (0 `<script>` / `<img>` внутри), неразрывная строка не выходит за пределы `240px`.
- **Тип доказательства:** `Screenshot` (`./screenshots/TC-BND-002.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптация на `1440×900`, `768×1024`, `375×812` и `320×568`
- **Приоритет:** `P1 (High)`
- **Категория:** `Responsive & Viewport`
- **Предусловия:** Открыть страницу демо.
- **Шаги:**
  1. Последовательно изменить вьюпорт на `1440×900`, `768×1024`, `375×812` и `320×568`.
  2. Проверить `document.documentElement.scrollWidth <= window.innerWidth` и отсутствие горизонтального переполнения у всех `.d1-textLabel`.
- **Ожидаемый результат:** На всех 4 разрешениях отсутствует горизонтальный скролл и выход элементов за границы вьюпорта.
- **Тип доказательства:** `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Связь `aria-labelledby`, `labelId`, `<h3>` и `<label for="...">`
- **Приоритет:** `P1 (High)`
- **Категория:** `Accessibility`
- **Предусловия:** Открыть секцию `Accessibility (labelId, aria-labelledby & Semantic Label)`.
- **Шаги:**
  1. Проверить `#a11y-label-heading` (тег `H3`), контейнер `[role="region"][aria-labelledby="a11y-label-heading"]` и элемент `label[for="a11y-label-input"]`.
- **Ожидаемый результат:** Семантические теги, `id` и ARIA-связи корректны и сохраняют классы компонента.
- **Тип доказательства:** `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Чистота консоли, Vue-предупреждений и сетевых запросов
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Console & Runtime`
- **Предусловия:** Выполнить все предыдущие сценарии.
- **Шаги:**
  1. Собрать все сообщения консоли, `pageerror`, диалоги и ошибочные сетевые ответы.
- **Ожидаемый результат:** `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`, `networkErrors: []`, `dialogs: []`.
- **Тип доказательства:** `Console/Log`
