# Спецификация тест-кейсов: D1CarouselPagination

- **Сущность**: `D1CarouselPagination`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/CarouselPagination`, `packages/constructor/src/constructors/CarouselPagination`, `packages/demo/src/pages/components/DemoCarouselPaginationPage.vue`
- **Целевой URL**: `http://localhost:3000/component-carousel-pagination`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `12`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Приоритеты | Фокус проверки |
| :--- | :--- | :---: | :--- | :--- |
| **Визуальное соответствие и токены** | `VIS` | 2 | P0, P1 | Все 5 типов (`bullets`, `dots`, `lines`, `fraction`, `progressbar`), все 24 палитры, `vertical`, `dynamic`, кастомные слоты (`#item`, `#fraction`, `#progress`) |
| **Интерактивность и функционал** | `INT` | 4 | P0, P1 | Клик по буллетам и `v-model:selected` / `v-model:modelSelected`, динамическое окно (`dynamic`), полный `expose` API (`next`, `previous`, `set`, `getSelected`, `getCount`), все события (`change`, `click`, `clickLite`, `update:selected`, `update:modelSelected`) с payload, `control=false`, `v-if` |
| **Границы и крайние случаи** | `BND` | 2 | P1 | `count=1` с `hideIfOne=true`/`false`, `count=0`, отрицательный `count=-2`, `selected=0`, дробные числа (`count=4.9`, `selected=2.8`), строковые числа (`count="12"`, `visible="5"`), XSS и Unicode в `template`, узкий `DemoBox` |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1 | Планшет (`768×1024`) и мобильный (`375×812` / `320×568`) без горизонтального переполнения |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `role="tablist"`/`tab`/`progressbar`, `aria-orientation`, `aria-label` (через `textPagination` строкой и функцией), `aria-selected`, `aria-valuenow`, клавиатурная навигация (`ArrowRight`, `ArrowLeft`, `End`, `Home`) |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие ошибок консоли, `[Vue warn]` и необработанных исключений |

---

## 2. Детальные тест-кейсы

### 2.1 Визуальное соответствие и дизайн-система (`VIS`)

#### [TC-VIS-001] Все 5 типов отображения (`bullets`, `dots`, `lines`, `fraction`, `progressbar`) и все 24 палитры
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-carousel-pagination`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить рендеринг всех 5 типов пагинации в секции `Types (All 5: Bullets, Dots, Lines, Fraction, Progressbar)` и всех 24 палитр в секции `Palettes (All 24)`.
  2. Проверить наличие модификаторов `.d1-carouselPagination--type--*`, `.d1-palette--*`, текста дроби (`Slide 2 of 6`) и полосы прогресса (`--d1-carouselPagination-sys-percent`).
- **Ожидаемый результат**: Все типы индикаторов и все 24 палитры отображаются визуально корректно с ненулевой геометрией.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Вертикальная ориентация (`vertical`), динамический режим (`dynamic`) и слоты (`#item`, `#fraction`, `#progress`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Страница загружена, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить `.d1-carouselPagination--vertical`, `.d1-carouselPagination--dynamic` и кастомные слоты `#item`, `#fraction`, `#progress` (включая все scoped-переменные: `index`, `item.selected`, `active`, `total`, `text`, `percent`).
- **Ожидаемый результат**: Вертикальные, динамические варианты и пользовательские слоты отображаются без искажений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

### 2.2 Интерактивность и функциональный контракт (`INT`)

#### [TC-INT-001] Клик по индикатору и синхронизация `v-model:selected` / `v-model:modelSelected`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: Открыты секции `Types` и `Two-Way Binding (v-model:modelSelected) & textPagination`.
- **Шаги**:
  1. Кликнуть по 4-му буллету в первом блоке (`bullets`) и проверить `aria-selected="true"`.
  2. В секции `v-model:modelSelected` нажать `Set modelSelected = 5`, затем `Reset modelSelected = 1` и проверить обновление `DemoValue`.
- **Ожидаемый результат**: Оба режима `v-model` двусторонне синхронизированы с активным слайдом.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Динамическое скользящее окно (`dynamic`, `count="12"`, `visible="5"`) и блокировка при `control=false`
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: Секции `Dynamic Window` и `Vertical Orientation & Non-Interactive Guard` открыты.
- **Шаги**:
  1. Нажать `Last (12)` и `First (1)` в динамическом режиме, проверить смещение окна видимых буллетов.
  2. Кликнуть по элементу в блоке `Read-only (control=false)` и проверить `Blocked Selected` в `DemoValue`.
- **Ожидаемый результат**: Динамическое окно пересчитывает видимые элементы и их масштаб, а при `control=false` клики не меняют `Blocked Selected` (`2`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Методы Expose API (`next()`, `previous()`, `set(4)`, `getSelected()`, `getCount()`) и события (`change`, `click`, `clickLite`, `update:selected`, `update:modelSelected`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: В секции `Events & Expose Methods` изначально выбран слайд `1`.
- **Шаги**:
  1. Нажать `next()`, затем `set(4)`, затем `previous()`, проверяя `Expose Output` (`selected` и `count`) и `Event Name` / `Event Payload`.
  2. Кликнуть по 5-му буллету и проверить фиксацию `click` / `clickLite` / `change` / `update:selected` в `DemoValue`.
- **Ожидаемый результат**: Все методы `expose` обновляют состояние (`selected: 3`, `count: 5`), а события эмитируются с корректным payload.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Условное монтирование и размонтирование (`v-if`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: Открыта секция `Lifecycle & Conditional Mount`.
- **Шаги**:
  1. Нажать `Toggle Mount`, убедиться в удалении элемента из DOM (`Mounted: false`), затем нажать снова (`Mounted: true`).
- **Ожидаемый результат**: Жизненный цикл и очистка наблюдателей проходят без ошибок консоли.
- **Тип доказательства**: `Console/Log`

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Скрытие при одном слайде (`hideIfOne`), `count=0` и `count=1`
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Секция `Boundary & Edge Cases` загружена.
- **Шаги**:
  1. Проверить, что вариант `count=1, hideIfOne=true` не рендерится в DOM, `count=1, hideIfOne=false` отображается, а `count=0` не вызывает ошибок.
- **Ожидаемый результат**: Граничные значения `0` и `1` обрабатываются корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Отрицательные/дробные числа (`count=-2`, `selected=0`, `4.9`/`2.8`), XSS в `template` и узкий `DemoBox`
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Секция `Boundary & Edge Cases` загружена.
- **Шаги**:
  1. Проверить `count=-2, selected=0`, `count=4.9, selected=2.8` (нормализация `2 / 4`).
  2. Проверить экранирование `<img src=x onerror=alert(1)>` в `template` и размещение пагинации внутри узкого `DemoBox`.
- **Ожидаемый результат**: Некорректные числа безопасно нормализуются, XSS-строка выводится как текст, верстка узкого контейнера не ломается.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Планшетный вьюпорт (`768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Установить вьюпорт `768×1024`.
- **Шаги**:
  1. Проверить отсутствие горизонтального переполнения страницы и корректность размеров индикаторов.
- **Ожидаемый результат**: `scrollWidth <= innerWidth`, индикаторы отображаются без искажений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Мобильный вьюпорт (`375×812` и `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Установить вьюпорт `375×812` и `320×568`.
- **Шаги**:
  1. Проверить отображение всех режимов пагинации на узком экране.
- **Ожидаемый результат**: Компонент корректно помещается в контейнер без поломки вёрстки.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] WAI-ARIA атрибуты, `textPagination` и клавиатурная навигация (`ArrowRight`, `ArrowLeft`, `End`, `Home`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность`
- **Предусловия**: Страница загружена.
- **Шаги**:
  1. Проверить `role="tablist"`, `aria-orientation="horizontal"`/`"vertical"`, `role="tab"`, `aria-selected` в `bullets`, `aria-label="Carousel slide navigation"` (из функции `textPagination`) и `aria-label="Custom navigation pagination"`, а также `role="progressbar"`, `aria-valuenow`, `aria-valuemax` в `progressbar`.
  2. Отправить `ArrowRight`, `End`, `Home` на буллетах и проверить переключение активного слайда и перемещение фокуса.
- **Ожидаемый результат**: Клавиатурное управление работает корректно, ARIA-роли и `aria-label` соответствуют WAI-ARIA.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Чистота консоли браузера и отсутствие `[Vue warn]`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль и рантайм`
- **Предусловия**: Отслеживать консоль и ошибки страницы в течение всего прогона.
- **Шаги**:
  1. Проверить `consoleErrors`, `vueWarnings`, `pageErrors`.
- **Ожидаемый результат**: `0` ошибок консоли, `0` `[Vue warn]`, `0` необработанных исключений.
- **Тип доказательства**: `Console/Log`
