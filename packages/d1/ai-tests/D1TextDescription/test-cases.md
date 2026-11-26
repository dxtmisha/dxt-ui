# Спецификация тест-кейсов: D1TextDescription

- **Сущность:** `D1TextDescription`
- **Путь к исходному коду:** `packages/d1/src/components/Ui/TextDescription`, `packages/constructor/src/constructors/TextDescription`, `packages/demo/src/pages/components/DemoTextDescriptionPage.vue`
- **Целевой URL:** `http://localhost:3000/component-text-description`
- **Справочные материалы:** `Нет`
- **Последняя проверка / обновление:** `2026-11-26`
- **Всего тест-кейсов:** `10`

---

## 1. Обзорная матрица покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область проверки |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 2 | P0, P1 | Шкала размеров (`xs`, `sm`, `md`), токены типографики, `color-opacity`, динамические HTML-теги |
| **Интерактивность и функции** | `INT` | 3 | P0, P1 | Слоты (`description` и комбинированный), динамическое переключение пропсов, внешние атрибуты/`@click`/`expose().elementHtml`, `v-if` |
| **Границы и крайние случаи** | `BND` | 2 | P1, P2 | Пустое/пробельное состояние (нулевой DOM), `0`, Unicode/Кириллица/Вьетнамский/Emoji, XSS, узкий контейнер `240px` |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `descriptionId`, связь `aria-describedby`, `role="note"`, `aria-live="polite"`, семантический `tag` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие `console.error`, `[Vue warn]`, `pageerror`, сетевых сбоев и диалогов |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Шкала размеров (`xs`, `sm`, `md`), числовое значение и токены типографики
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Visual & Design System`
- **Предусловия:** Открыть `http://localhost:3000/component-text-description`, вьюпорт `1440×900`, светлая тема.
- **Шаги:**
  1. Найти секцию `Basic & Sizes (xs, sm, md)`.
  2. Проверить классы `.d1-textDescription`, `.d1-textDescription__description`, `.d1-textDescription--size--xs|sm|md`, вычисленные `font-size`, `line-height`, `color` и геометрию.
- **Ожидаемый результат:** Все 3 размера рендерятся с монотонной прогрессией `font-size`, корректной прозрачностью текста по токену и ненулевой геометрией; числовое значение `42` отображается корректно.
- **Тип доказательства:** `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Динамические HTML-теги (`div`, `p`, `span`, `small`, `figcaption`, `section`) и слоты
- **Приоритет:** `P1 (High)`
- **Категория:** `Visual & Design System`
- **Предусловия:** Открыть `http://localhost:3000/component-text-description`, вьюпорт `1440×900`.
- **Шаги:**
  1. Проверить теги в секции `Dynamic HTML Tags`.
  2. Проверить слот `description` и комбинированный рендер `description` + слот в секции `Slots (description & Combined)`.
- **Ожидаемый результат:** Каждый элемент рендерится в соответствующем HTML-теге; слот и комбинированное содержимое корректно отображают `<strong>` и `<em>`.
- **Тип доказательства:** `Screenshot` (`./screenshots/TC-VIS-002.png`)

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Внешние атрибуты (`mergeProps`), `@click` и `expose().elementHtml`
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Interactive & Functional`
- **Предусловия:** Открыть страницу демо, прокрутить к секции `External Attrs, Events & Expose (elementHtml)`.
- **Шаги:**
  1. Кликнуть по `[data-testid="demo-text-description-interactive"]`.
  2. Нажать кнопку `Inspect elementHtml`.
- **Ожидаемый результат:** Фиксируется событие `click` с payload `{"source":"demo-text-description-interactive"}`, затем `elementHtml` возвращает `DIV#demo-text-description-target` с сохранёнными базовыми классами `.d1-textDescription` и `.d1-textDescription__description`.
- **Тип доказательства:** `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Реактивное переключение `size`, `tag`, `description` (текст / `0` / пусто) и `descriptionId`
- **Приоритет:** `P1 (High)`
- **Категория:** `Interactive & Functional`
- **Предусловия:** Открыть секцию `Interactive Controls & Dynamic Props`.
- **Шаги:**
  1. Последовательно нажимать `Cycle Size`, `Cycle Tag`, `Toggle Custom ID`.
  2. Нажать `Cycle Content (Text / 0 / Empty)` дважды (проверить `0`, затем пустое состояние `""`), затем вернуть текст.
- **Ожидаемый результат:** Размер, тег, `id` и содержимое обновляются реактивно; при `0` элемент виден с текстом `0`; при `""` узел `.d1-textDescription` полностью отсутствует в DOM.
- **Тип доказательства:** `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Условное монтирование и размонтирование (`v-if`)
- **Приоритет:** `P1 (High)`
- **Категория:** `Interactive & Functional`
- **Предусловия:** Открыть секцию `Lifecycle & Conditional Mount`.
- **Шаги:**
  1. Нажать `Toggle Mount` дважды, проверяя наличие `[data-testid="demo-text-description-lifecycle"]`.
- **Ожидаемый результат:** Элемент чисто удаляется из DOM и повторно монтируется без ошибок и предупреждений.
- **Тип доказательства:** `Console/Log`

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Пустые и пробельные строки (нулевой DOM без аллокации)
- **Приоритет:** `P1 (High)`
- **Категория:** `Boundaries & Edge Cases`
- **Предусловия:** Открыть секцию `Boundary & Edge Cases`.
- **Шаги:**
  1. Проверить `[data-testid="demo-text-description-empty-box"]`.
- **Ожидаемый результат:** Внутри контейнера нет ни одного отрендеренного элемента `.d1-textDescription` для `""` и `"   "`.
- **Тип доказательства:** `Console/Log`

#### [TC-BND-002] Числовой `0`, Unicode/Emoji, XSS-экранирование и узкий контейнер `240px`
- **Приоритет:** `P1 (High)`
- **Категория:** `Boundaries & Edge Cases`
- **Предусловия:** Открыть секцию `Boundary & Edge Cases`.
- **Шаги:**
  1. Проверить текст `[data-testid="demo-text-description-zero"]`, `[data-testid="demo-text-description-unicode"]` и `[data-testid="demo-text-description-xss"]`.
  2. Проверить `scrollWidth <= clientWidth` в `.demo-text-description-page__narrow`.
- **Ожидаемый результат:** `0` и Unicode/Emoji отображаются полностью, XSS-строка экранирована как текст (0 `<script>` / `<img>` внутри), неразрывная строка не выходит за пределы `240px`.
- **Тип доказательства:** `Screenshot` (`./screenshots/TC-BND-002.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптация на `1440×900`, `768×1024`, `375×812` и `320×568`
- **Приоритет:** `P1 (High)`
- **Категория:** `Responsive & Viewport`
- **Предусловия:** Открыть страницу демо.
- **Шаги:**
  1. Последовательно изменить вьюпорт на `1440×900`, `768×1024`, `375×812` и `320×568`.
  2. Проверить `document.documentElement.scrollWidth <= window.innerWidth` и отсутствие горизонтального переполнения у всех `.d1-textDescription`.
- **Ожидаемый результат:** На всех 4 разрешениях отсутствует горизонтальный скролл и выход элементов за границы вьюпорта.
- **Тип доказательства:** `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Связь `aria-describedby`, `descriptionId`, `role="note"` и `aria-live="polite"`
- **Приоритет:** `P1 (High)`
- **Категория:** `Accessibility`
- **Предусловия:** Открыть секцию `Accessibility (descriptionId, aria-describedby & Live Region)`.
- **Шаги:**
  1. Проверить наличие `#a11y-description-hint`, тега `P`, атрибутов `role="note"`, `aria-live="polite"` и ссылки `aria-describedby="a11y-description-hint"`.
- **Ожидаемый результат:** Атрибуты и ID полностью совпадают и сохраняют классы компонента.
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
