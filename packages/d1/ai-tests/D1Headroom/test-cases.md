# Спецификация тест-кейсов: D1Headroom

- **Сущность**: `D1Headroom`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Headroom`, `packages/constructor/src/constructors/Headroom`, `packages/constructor/src/classes/HeadroomInclude.ts`, `packages/demo/src/pages/components/DemoHeadroomPage.vue`
- **Целевой URL**: `http://localhost:3000/component-headroom`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `18`

---

## 1. Матрица покрытия

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :---: | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 4 | P0, P1 | Базовый рендеринг, `position: sticky`, полиморфный `tag`, режим `disappears`, тёмная тема |
| **Интерактивность и функциональность** | `INT` | 7 | P0, P1 | Прокрутка, `disappears` (`data-headroom-direction`, `--d1-headroom-sys-top`), `transformThreshold` (`--d1-headroom-sys-value`, `--d1-headroom-sys-percent`), форматы `scrollElement`, `defineExpose`, события, `v-if` |
| **Границы и крайние случаи** | `BND` | 3 | P0, P1 | `transformThreshold: 0`, пустой слот, длинная неразрывная строка в `240px`, Unicode и экранированный XSS |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | Семантические теги, `role="banner"`, `aria-label`, клавиатурная прокрутка скролл-региона |
| **Консоль и рантайм** | `LOG` | 1 | P0 | События `headroomScroll` / `headroomSticky`, очистка слушателей и отсутствие `console.error` / `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг и липкое позиционирование внутри скролл-контейнера
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-headroom`, вьюпорт `1440×900`, светлая тема.
- **Шаги**:
  1. Найти контейнер `[data-testid="headroom-basic-scroller"]` и элемент `[data-testid="headroom-basic"]`.
  2. Проверить вычисленные стили `.d1-headroom` (`position: sticky`, `top: 0px`, `min-width: 0px`, `max-width: 100%`).
  3. Убедиться в отсутствии горизонтального переполнения (`documentElement.scrollWidth <= window.innerWidth`).
- **Ожидаемый результат**: Компонент рендерится с классом `d1-headroom`, корректно вписывается в скролл-контейнер и имеет `position: sticky; top: 0px` без визуального наложения или обрезания.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Полиморфный тег `tag` (`header`, `nav`, `div`, `section`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-headroom`, вьюпорт `1440×900`.
- **Шаги**:
  1. Пролистать к группе `Polymorphic Tag & Accessibility (ARIA)`.
  2. Проверить `tagName` у `[data-testid="headroom-tag-header"]`, `[data-testid="headroom-tag-nav"]`, `[data-testid="headroom-tag-div"]` и `[data-testid="headroom-tag-section"]`.
  3. Нажать кнопки `Tag: nav` и `Tag: section` и проверить динамическую смену тега у `[data-testid="headroom-tag-reactive"]`.
- **Ожидаемый результат**: Теги соответствуют `<HEADER>`, `<NAV>`, `<DIV>`, `<SECTION>`; реактивный экземпляр перестраивается на выбранный тег без потери класса `d1-headroom`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Визуальное отображение в режиме `disappears`
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Группа `Disappears Mode`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить наличие модификатора `d1-headroom--disappears` у `[data-testid="headroom-disappears"]`.
  2. Нажать `[data-testid="btn-disappears-down"]` (`Scroll 120px Down`) и зафиксировать скрытие шапки вверх.
  3. Нажать `[data-testid="btn-disappears-up"]` (`Scroll 40px Up`) и зафиксировать возвращение шапки в видимую область.
- **Ожидаемый результат**: Модификатор `d1-headroom--disappears` применяет `top: var(--d1-headroom-sys-top)`, шапка плавно уходит вверх при прокрутке вниз и снова появляется при прокрутке вверх.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Тёмная тема и контрастность поверх прокрученного контента
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-headroom`, вьюпорт `1440×900`.
- **Шаги**:
  1. Включить эмуляцию тёмной темы (`prefers-color-scheme: dark`).
  2. Прокрутить базовый и трансформационный скролл-контейнеры вниз на `100px`.
  3. Проверить фон, контраст текста и отсутствие просвечивания нижнего текста сквозь липкую шапку.
- **Ожидаемый результат**: В тёмной теме фон шапки, текст и границы сохраняют читаемость и системный контраст без визуального наложения текста.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

---

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Удержание базовой шапки при прокрутке (`Scroll Down` / `Scroll Up` / `Scroll Top`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `Basic Sticky Header`, скроллер на `scrollTop === 0`.
- **Шаги**:
  1. Нажать `[data-testid="btn-basic-scroll-down"]` (`Scroll Down`).
  2. Сравнить `getBoundingClientRect().top` у `[data-testid="headroom-basic"]` и `[data-testid="headroom-basic-scroller"]`.
  3. Нажать `[data-testid="btn-basic-scroll-up"]` и затем `[data-testid="btn-basic-scroll-top"]`.
- **Ожидаемый результат**: При прокрутке скроллера шапка остаётся прилипшей к его верхней границе (`headroomRect.top >= scrollerRect.top`), а при возврате на `0` занимает исходное положение.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Режим `disappears`, `data-headroom-direction`, `--d1-headroom-sys-top` и реактивное отключение
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `Disappears Mode`, `isDisappearsEnabled === true`, `scrollTop === 0`.
- **Шаги**:
  1. Проверить исходные атрибуты `[data-testid="headroom-disappears"]`: `data-headroom="none"`, `data-headroom-direction="none"`, `--d1-headroom-sys-top: 0px`.
  2. Нажать `[data-testid="btn-disappears-down"]` (`Scroll 120px Down`) и проверить `data-headroom="sticky"`, `data-headroom-direction="down"` и отрицательное значение `--d1-headroom-sys-top`.
  3. Нажать `[data-testid="btn-disappears-up"]` (`Scroll 40px Up`) и проверить `data-headroom-direction="up"` и возврат `--d1-headroom-sys-top` к `0px`.
  4. Нажать `[data-testid="btn-disappears-toggle"]` (`Disappears: OFF`) и убедиться в удалении класса `d1-headroom--disappears` и инлайнового свойства `--d1-headroom-sys-top`.
- **Ожидаемый результат**: Атрибуты `data-headroom` / `data-headroom-direction` и переменная `--d1-headroom-sys-top` точно отражают направление прокрутки, а выключение `disappears` чисто удаляет inline-переменную.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Порог трансформации `transformThreshold` (`120`, `0`, `80`, `200`) и CSS-переменные прогресса
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `Transform Threshold`, активный порог `120`, `scrollTop === 0`.
- **Шаги**:
  1. Проверить `data-headroom-transform="120"`, `--d1-headroom-sys-threshold: 120px`, `--d1-headroom-sys-value: 0px`, `--d1-headroom-sys-percent: 0`.
  2. Нажать `[data-testid="btn-transform-scroll-60"]` (`Scroll 60px`) и проверить `--d1-headroom-sys-value: 60px` и `--d1-headroom-sys-percent: 0.5`.
  3. Нажать `[data-testid="btn-transform-scroll-120"]` (`Scroll 120px`) и проверить `--d1-headroom-sys-value: 120px` и `--d1-headroom-sys-percent: 1`.
  4. Переключить пороги кнопками `[data-testid="btn-threshold-80"]`, `[data-testid="btn-threshold-200"]` и `[data-testid="btn-threshold-0"]`, проверяя пересчёт `data-headroom-transform` и `--d1-headroom-sys-percent` (и удаление `data-headroom-transform` при `0`).
- **Ожидаемый результат**: Все CSS-переменные трансформации и `data-headroom-transform` пересчитываются в реальном времени при прокрутке и реактивном переключении порога.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Форматы `scrollElement`: селектор `#id`, `HTMLElement` ref и `window` по умолчанию
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `Scroll Element Formats (Selector, HTMLElement Ref & Window)`.
- **Шаги**:
  1. Нажать `[data-testid="btn-selector-scroll"]` и проверить у `[data-testid="headroom-selector"]` значение `data-headroom="sticky"` и `--d1-headroom-sys-percent: 0.9`.
  2. Нажать `[data-testid="btn-ref-scroll"]` и проверить у `[data-testid="headroom-ref"]` значение `data-headroom="sticky"` и `--d1-headroom-sys-percent: 0.9`.
  3. Нажать `[data-testid="btn-window-toggle"]`, прокрутить окно `window.scrollTo(0, 100)` и проверить обновление `data-headroom="sticky"` у `[data-testid="headroom-window"]`, затем скрыть его обратно.
- **Ожидаемый результат**: Компонент корректно отслеживает прокрутку по CSS-селектору, ссылке на `HTMLElement` и глобальному `window`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-005] Программное управление через `defineExpose` (`isSticky`, `getValues()`, `update()`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `Programmatic Expose (isSticky, getValues, update)`.
- **Шаги**:
  1. Нажать `[data-testid="btn-expose-scroll-100"]` (`Scroll 100px`) и проверить обновление `[data-testid="value-expose-sticky"]` на `true`.
  2. Нажать `[data-testid="btn-expose-get-values"]` (`Read getValues()`) и проверить поля `value`, `isSticky`, `transformThreshold`, `transformValue`, `transformPercent`, `disappearsValue`, `valueDifference` в `[data-testid="value-expose-values"]`.
  3. Программно изменить `scrollTop` и нажать `[data-testid="btn-expose-update"]` (`Call update()`), проверяя пересчёт снимка состояния.
- **Ожидаемый результат**: Все экспонированные свойства и методы (`isSticky`, `getValues()`, `update()`) возвращают актуальные расчётные значения.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-006] Эмиссия событий `@headroom-scroll` и `@headroom-sticky`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `Events (@headroom-scroll & @headroom-sticky)`, счётчики событий обнулены.
- **Шаги**:
  1. Нажать `[data-testid="btn-events-scroll-80"]` и проверить увеличение `headroomScroll Count` и `headroomSticky Count`.
  2. Выполнить дополнительный скролл контейнера `[data-testid="headroom-events-scroller"]` с `80px` до `120px`.
  3. Убедиться, что `headroomScroll Count` увеличился, а `headroomSticky Count` остался неизменным, так как `isSticky` не менялся.
  4. Нажать `[data-testid="btn-events-reset"]` и проверить повторное срабатывание `headroomSticky` при возврате `isSticky: false`.
- **Ожидаемый результат**: `@headroom-scroll` эмитится на каждом событии прокрутки, а `@headroom-sticky` — строго при переходе `isSticky`, с полным объектом `HeadroomEventItem`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-007] Условное монтирование `v-if` (`Toggle Mount`) и очистка слушателей
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `Lifecycle & Conditional Mount`, `Mounted: true`.
- **Шаги**:
  1. Нажать `[data-testid="btn-lifecycle-scroll"]` и убедиться в обновлении `[data-testid="headroom-lifecycle"]`.
  2. Нажать `[data-testid="btn-lifecycle-toggle"]` для размонтирования элемента (`Mounted: false`).
  3. Повторно нажать `[data-testid="btn-lifecycle-scroll"]` и `[data-testid="btn-lifecycle-reset"]`, затем снова смонтировать компонент.
- **Ожидаемый результат**: Размонтированный компонент удаляется из DOM, прокрутка скроллера при размонтированном состоянии не вызывает ошибок, повторное монтирование восстанавливает отслеживание.
- **Тип доказательства**: `Console/Log`

---

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Граничное значение `transformThreshold: 0` без `disappears`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Группа `Boundary & Edge Cases`, экземпляр `[data-testid="headroom-zero"]` с `:transform-threshold="0"`.
- **Шаги**:
  1. Проверить отсутствие атрибута `data-headroom-transform` у `[data-testid="headroom-zero"]`.
  2. Нажать `[data-testid="btn-zero-scroll"]` (`Scroll Zero Threshold (80px)`).
  3. Убедиться, что `HeadroomInclude.is` остаётся `false` (нет активного слушателя прокрутки и атрибута `data-headroom-transform`), при этом элемент сохраняет нативное CSS-прилипание `position: sticky`.
- **Ожидаемый результат**: При `transformThreshold: 0` и выключенном `disappears` лишние обработчики прокрутки не запускаются, а базовый CSS `sticky` продолжает работать без ошибок.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-002] Пустой слот (`empty slot`) и нулевые значения
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Группа `Boundary & Edge Cases`, контейнер `[data-testid="headroom-empty-scroller"]`.
- **Шаги**:
  1. Проверить рендеринг `[data-testid="headroom-empty"]` без переданного контента слота.
  2. Прокрутить `[data-testid="headroom-empty-scroller"]` на `60px` и убедиться в корректном обновлении `data-headroom="sticky"` и `--d1-headroom-sys-percent: 1`.
- **Ожидаемый результат**: Пустой слот не вызывает падений и корректно рассчитывает метрики скролла при `scrollTop > 0`.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-003] Неразрывный текст в узком контейнере (`240px`), Unicode и экранированный XSS
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Группа `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить `[data-testid="headroom-unicode-xss"]`: отображение `Tiếng Việt / Кириллица / 🚀🔥✨` и строго текстовый вывод `<img src=x onerror=alert(1)>` без создания DOM-элемента `<img>` и без вызова `alert`.
  2. Проверить `[data-testid="headroom-narrow"]` с длинной неразрывной строкой `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA` внутри `.demo-headroom-page__narrow` (`max-width: 240px`).
  3. Убедиться, что `scrollWidth <= clientWidth` у узкого скроллера и нет горизонтального переполнения.
- **Ожидаемый результат**: Unicode и эмодзи отображаются без искажений, XSS-строка полностью экранирована, неразрывная строка переносится в пределах `240px`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

---

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптивность на десктопе (`1440×900`) и планшете (`768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Страница `http://localhost:3000/component-headroom`.
- **Шаги**:
  1. Проверить макет на `1440×900` и переключить вьюпорт на `768×1024`.
  2. Проверить отсутствие горизонтального скролла (`documentElement.scrollWidth <= window.innerWidth`).
  3. Выполнить прокрутку в `[data-testid="headroom-disappears-scroller"]` на ширине `768px`.
- **Ожидаемый результат**: Все скролл-контейнеры и липкие шапки адаптируются по ширине без горизонтального переполнения и обрезания контролов.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Адаптивность на мобильных вьюпортах (`375×812` и `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Страница `http://localhost:3000/component-headroom`.
- **Шаги**:
  1. Установить вьюпорт `375×812`, затем `320×568`.
  2. Проверить ширину элементов `D1Headroom` (`max-width: 100%`, `min-width: 0`) и отсутствие горизонтального переполнения.
  3. Нажать `[data-testid="btn-transform-scroll-120"]` на мобильном экране и проверить `--d1-headroom-sys-percent: 1`.
- **Ожидаемый результат**: На мобильных ширинах `375px` и `320px` нет горизонтального скролла, заголовки переносятся корректно, интерактивные кнопки и расчёт прокрутки работают штатно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

---

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантика, ARIA-атрибуты и клавиатурная прокрутка региона
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Группа `Polymorphic Tag & Accessibility (ARIA)`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить `role="banner"` и `aria-label="Site sticky header"` у `[data-testid="headroom-tag-header"]`, а также `aria-label` у `nav`, `div[role="region"]` и `section`.
  2. Перевести фокус клавишей `Tab` на `[data-testid="headroom-tag-reactive-scroller"]` (`tabindex="0"`, `role="region"`).
  3. Нажать клавиши `ArrowDown` / `PageDown` и убедиться в прокрутке контейнера и обновлении `data-headroom="sticky"` у `[data-testid="headroom-tag-reactive"]`.
- **Ожидаемый результат**: Семантические теги и ARIA-атрибуты соответствуют WAI-ARIA, сфокусированный скролл-регион управляется с клавиатуры и корректно активирует `D1Headroom`.
- **Тип доказательства**: `Console/Log`

---

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Чистота консоли, события `useDemoEvent` и отсутствие `[Vue warn]`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Включён сбор `console` и `pageerror` на протяжении всего тестового прогона.
- **Шаги**:
  1. Выполнить сценарии прокрутки, смены порогов/тегов, `defineExpose` и `v-if` размонтирования.
  2. Проверить логи `Event: headroom-scroll` и `Event: headroom-sticky` от `useDemoEvent`.
  3. Проверить массивы `console.error`, `pageerror` и `[Vue warn]`.
- **Ожидаемый результат**: `0` `console.error`, `0` `pageerror`, `0` `[Vue warn]`, события логируются с полным payload `HeadroomEventItem`.
- **Тип доказательства**: `Console/Log`
