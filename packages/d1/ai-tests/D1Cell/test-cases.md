# Спецификация тест-кейсов: D1Cell

- **Сущность**: `D1Cell`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Cell`, `packages/constructor/src/constructors/Cell`, `packages/demo/src/pages/components/DemoCellPage.vue`
- **Целевой URL**: `http://localhost:3000/component-cell`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `16`

---

## 1. Матрица покрытия

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуальное соответствие и дизайн-система** | `VIS` | 4 | P0, P1 | Базовый рендер, теги (`section`, `button`, `a`), иконки и модификаторы, все 12 `dividerLabel`, все 7 `padding` и `paddingByIndent` |
| **Интерактивность и функциональный контракт** | `INT` | 5 | P0, P1 | Состояния (`focus`, `selected`, `readonly`, `disabled`, `dynamic`), переключатели состояний, блокировка кликов, `loading`/`isSkeleton`, `slots` (включая scoped-слоты), `expose` и `v-if` |
| **Граничные значения и краевые случаи** | `BND` | 3 | P1, P2 | Пустые/пробельные строки, `0`/`-42`/`3.14`, одиночный символ `"A"`, Unicode/эмодзи, экранированный XSS, длинный текст и узкий `DemoBox` |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1 | Десктоп (`1440×900`), планшет (`768×1024`), мобильный (`375×812`, `320×568`), контейнерные/адаптивные `dividerLabel` |
| **Доступность** | `A11Y` | 1 | P1 | `role="button"`, `tabindex="0"`, явные `role`, `labelId`/`descriptionId`, `captionDecorative` (`aria-hidden`), клавиатурная активация `Enter` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | События `click` / `clickLite` с `EventClickValue`, `index`-фолбэк, `0` ошибок консоли и `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуальное соответствие и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг, `label`, `caption`, `description` и теги (`section`, `button`, `a`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, вьюпорт `1440×900`, светлая тема.
- **Шаги**:
  1. Проверить секции `Basic & Data Formats` и `Tags & Links`.
  2. Проверить рендер тегов `<section>`, `<button type="button">`, `<a href="#demo-link">` и роутер-ссылок (`to="/component-cell"`, `:to="{ name: 'home' }"`).
- **Ожидаемый результат**: Все элементы `.d1-cell` рендерятся с ненулевой геометрией, корректной иерархией `caption`/`label`/`description` и соответствующими HTML-тегами.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Иконки, модификаторы (`iconTurn`, `iconDir`, `iconHide`, `iconPalette`, `iconTop`, `iconAttrs`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, вьюпорт `1440×900`.
- **Шаги**:
  1. Прокрутить к группе `Icons & Modifiers`.
  2. Проверить отображение иконок строкой и объектом (`IconProps`), скрытие иконки при `iconHide`, верхнее выравнивание при `iconTop`, а также клик по `Icon Turn Toggle`.
- **Ожидаемый результат**: Ведущие и завершающие иконки выровнены корректно, `iconHide` скрывает основную иконку, `iconTop` выравнивает иконку по верхнему краю, `iconTurn` поворачивает завершающую иконку.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Разделители (`divider`, все 12 значений `dividerLabel`) и отступы (все 7 `padding`, `paddingByIndent`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, вьюпорт `1440×900`.
- **Шаги**:
  1. Прокрутить к группам `Dividers & Divider Labels (All 12)` и `Padding & Indent (All 7)`.
  2. Проверить модификаторы `.d1-cell--divider`, `data-divider="active"`, `.d1-cell--dividerLabel--*` (включая `always`, `none`, `adaptive*`, `container*` внутри `DemoBox container`) и `.d1-cell--padding--*` (`sm`, `md`, `lg`, `ySm`, `yMd`, `yLg`, `none`), а также `:paddingByIndent="false"`.
- **Ожидаемый результат**: Все 12 вариантов `dividerLabel` и все 7 вариантов `padding` применяют соответствующие классы и визуальные отступы без смещения разметки.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Индикатор загрузки (`loading`) и состояние скелетона (`isSkeleton` внутри `D1Skeleton`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, вьюпорт `1440×900`.
- **Шаги**:
  1. Прокрутить к группе `Loading & Skeleton`.
  2. Проверить `.d1-progress` при `loading` (булево и объект `{ visible: true, value: 65, max: 100 }`) и классы `.d1-skeleton__text` / `.d1-skeleton__textVariant` у `D1Cell` с `isSkeleton` внутри активного `D1Skeleton`.
- **Ожидаемый результат**: Прогресс-бар рендерится у нижней границы ячейки, а скелетон-классы применяются без дублирования DOM.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

### 2.2 Интерактивность и функциональный контракт (`INT`)

#### [TC-INT-001] Статические состояния (`focus`, `selected`, `readonly`, `disabled`, `dynamic`, `dynamicHover`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, вьюпорт `1440×900`.
- **Шаги**:
  1. Прокрутить к группе `States & Dynamic`.
  2. Проверить классы `.d1-cell--focus`, `.d1-cell--selected`, `.d1-cell--readonly`, `.d1-cell--disabled`, `.d1-cell--dynamic`, `.d1-cell--dynamicHover` и вычисленные свойства `cursor` (`pointer` для `dynamic`, `default` для `disabled`/`readonly`).
- **Ожидаемый результат**: Все модификаторы состояний применены корректно и соответствуют визуальным токенам.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Динамические переключатели состояний (`Interactive State Toggles`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, группа `Interactive State Toggles`.
- **Шаги**:
  1. Последовательно нажать кнопки `Toggle Selected`, `Toggle Disabled`, `Toggle Readonly`, `Toggle Loading`, `Toggle Dynamic` и `Toggle Skeleton`.
  2. Проверить обновление классов целевого `D1Cell` и значений в `DemoValue` (`State Flags`).
- **Ожидаемый результат**: Целевой `D1Cell` реактивно переключает все состояния и возвращается в исходный вид без ошибок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Блокировка кликов в состояниях `disabled`, `readonly` и `loading` (`Blocked & Guarded Actions`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, группа `Blocked & Guarded Actions`.
- **Шаги**:
  1. Зафиксировать исходное значение `Blocked Click Count` (`0`).
  2. Кликнуть по ячейкам `Blocked Disabled Cell`, `Blocked Readonly Cell` и `Blocked Loading Cell`.
- **Ожидаемый результат**: Ни одно из заблокированных действий не вызывает `@click` или `@click-lite`; `Blocked Click Count` остаётся равным `0`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Слоты (`#caption`, `#default`, `#description`) и scoped-привязки (`#trailing`, `#body`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, группа `Slots & Scoped Bindings`.
- **Шаги**:
  1. Проверить рендер пользовательского содержимого в `#caption`, `#default`, `#description`.
  2. Проверить scoped-привязки `slotBindings.trailing`, `slotBindings.description`, `slotBindings.label` в `#trailing` и `#body`.
- **Ожидаемый результат**: Все слоты и переданные классы подэлементов корректно рендерятся в DOM (`d1-cell__trailing`, `d1-cell__description`, `d1-cell__label`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

#### [TC-INT-005] Методы `expose` (`getValue`, `getDetail`), переключение данных и жизненный цикл `v-if`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, группы `Events & Expose Methods` и `Lifecycle & Conditional Mount`.
- **Шаги**:
  1. Нажать `Read getValue()`, `Read getDetail()`, затем `Switch Value & Detail` и проверить обновление `Expose Output`.
  2. Нажать `Toggle Mount` в группе `Lifecycle & Conditional Mount` дважды (размонтирование и повторное монтирование `Mounted Cell`).
- **Ожидаемый результат**: Методы `getValue()` и `getDetail()` возвращают актуальные значения (`"my-cell-value"` -> `"updated-cell-value"`), а `v-if` чисто размонтирует и монтирует `D1Cell`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-005.png`)

### 2.3 Граничные значения и краевые случаи (`BND`)

#### [TC-BND-001] Пустые, пробельные, отсутствующие значения и числовые границы (`0`, `-42`, `3.14`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные значения и краевые случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, группа `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить ячейки с `""`, `"   "`, без пропов, а также с числовыми значениями `0`, `-42`, `3.14` и одиночным символом `"A"`.
  2. Убедиться, что `0` отображается явно и не отбрасывается как пустое значение.
- **Ожидаемый результат**: Числа `0`, `-42`, `3.14` и символ `"A"` отображаются корректно; пустые ячейки рендерятся без исключений.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-002] Unicode, вьетнамский/кириллица/эмодзи и экранирование XSS (`<img src=x onerror=alert(1)>`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные значения и краевые случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, группа `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить отображение текста `"Tiếng Việt / Кириллица / 🚀 & <>"`.
  2. Проверить, что строки `"<img src=x onerror=alert(1)>"` и `"<script>alert('xss')</script>"` рендерятся исключительно как экранированный текст без создания DOM-узлов `<img>` или `<script>`.
- **Ожидаемый результат**: Вся символика Unicode отображается без искажений, XSS-строки полностью экранированы.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

#### [TC-BND-003] Длинный многословный текст и неразрывная строка в узком `DemoBox`
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные значения и краевые случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, группа `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить `getBoundingClientRect()` для ячейки с длинным описанием и ячейки `"AAAA...AAAA"` внутри узкого `.demo-cell-page__narrow` (`max-width: 220px`).
  2. Убедиться, что `scrollWidth <= clientWidth + 1` у `.d1-cell` и нет наложения текста на иконки.
- **Ожидаемый результат**: Длинный и неразрывный текст корректно переносится (`overflow-wrap: anywhere`) без выхода за границы контейнера.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптивность на десктопе (`1440×900`) и планшете (`768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, проверить при `1440×900` и `768×1024`.
- **Шаги**:
  1. Проверить `document.documentElement.scrollWidth <= window.innerWidth` на обоих разрешениях.
  2. Проверить адаптивное отображение `dividerLabel` (`adaptiveMd`, `adaptiveLg`).
- **Ожидаемый результат**: Горизонтальный скролл отсутствует, макет ячеек и разделителей сохраняет целостность.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Адаптивность на мобильном экране (`375×812` и `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Изменить размер вьюпорта на `375×812`, затем `320×568`.
- **Шаги**:
  1. Проверить `document.documentElement.scrollWidth <= window.innerWidth` и отсутствие горизонтального переполнения у `.d1-cell`.
  2. Проверить переключение `dividerLabel="adaptiveSm"` на мобильном вьюпорте.
- **Ожидаемый результат**: Все ячейки корректно адаптируются к ширине `375px` и `320px` без горизонтального переполнения.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] WAI-ARIA роли, `labelId`/`descriptionId`, `captionDecorative`, `tabindex` и клавиатура (`Enter`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить `role="button"` и `tabindex="0"` у `dynamic`-ячеек, `aria-hidden="true"` у декоративного `captionDecorative`, а также `id="demo-cell-custom-label"` / `id="demo-cell-custom-description"` и явные `role="listitem"`, `role="menuitem"`, `role="option"`.
  2. Сфокусировать `Interactive Cell` и нажать `Enter` — проверить срабатывание события клика.
- **Ожидаемый результат**: ARIA-атрибуты и клавиатурная активация по `Enter` соответствуют стандарту WAI-ARIA.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] События `click` / `clickLite`, `index`-фолбэк и чистота консоли
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль и рантайм`
- **Предусловия**: Открыть `http://localhost:3000/component-cell`, очистить буфер консоли.
- **Шаги**:
  1. Кликнуть по `Interactive Cell` и затем по `Index Fallback Cell` (`:index="7"`).
  2. Проверить обновление `Event Name` и `Event Payload` в `DemoValue` и собрать все ошибки/предупреждения консоли за сессию.
- **Ожидаемый результат**: Фиксируются события `click`/`clickLite` с корректным payload (включая `value: 7` для фолбэка), `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`.
- **Тип доказательства**: `Console/Log`
