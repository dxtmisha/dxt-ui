# Спецификация тест-кейсов: D1Image

- **Сущность**: `D1Image`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Image`, `packages/constructor/src/constructors/Image`, `packages/demo/src/pages/components/DemoImagePage.vue`
- **Целевой URL**: `http://localhost:3000/component-image`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `15`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область проверки |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 4 | P0, P1 | Источники (URL, PDF, Binary, Material/Public иконки, флаги, HEX-цвета), `size` (`auto`, `contain`, `cover`), `coordinator`, `x`/`y`, `tagImg`, `<picture>`, `srcset` |
| **Интерактив и функционал** | `INT` | 4 | P0, P1 | Переключение источников, `expose` (`getType()`, `getData()`), событие `@load`, интерактивные переключатели `turn`/`disabled`/`hide`/`static`/`tagImg`/`size`, `adaptive` и `v-if` lifecycle |
| **Граничные значения** | `BND` | 3 | P1, P2 | Пустые/пробельные/`null`/`undefined`/`"image:   "` источники, нулевые координаты (`x: 0, y: 0`), `coordinator: null`, Unicode/XSS в `alt` и узкий контейнер `240px` |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1, P2 | Отображение `<picture>`/`srcset` и `adaptive` масштабирования на Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | Атрибуты `role="img"`, `aria-label` при наличии `alt`, `aria-hidden="true"` при отсутствии `alt`, `translate="no"` |
| **Консоль и стабильность** | `LOG` | 1 | P0 | Отсутствие `console.error`, необработанных исключений и предупреждений `[Vue warn]` при загрузке и взаимодействии |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Рендеринг базовых источников (URL, `image:`, PDF, Binary `Uint8Array`/`ArrayBuffer`/`File`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-image`, вьюпорт `1440×900`, светлая тема.
- **Шаги**:
  1. Проверить секции `Basic & Source Types` и `Binary & File Sources`.
  2. Убедиться, что фоновые изображения, `<object>` для PDF и `<img>` / `<span>` для `Uint8Array`, `ArrayBuffer`, `File` имеют ненулевые размеры и корректные `background-image` / `src` / `data`.
- **Ожидаемый результат**: Все типы источников корректно отображаются без обрезания и наложения.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Рендеринг иконок Material, публичных иконок, флагов и HEX-цветов
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Страница `http://localhost:3000/component-image`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить секции `Material & Public Icons` и `Country Flags & Solid Colors`.
  2. Проверить классы шрифтов (`material-icons`, `material-symbols-outlined`, `material-symbols-rounded`, `material-symbols-sharp`, `material-icons-two-tone`), `mask-image` для `@star`, `ui-sys-flags` для сжатых флагов и `background-color` для `#HEX`.
- **Ожидаемый результат**: Все иконки, флаги и цветовые блоки отображаются с корректными стилями и классами.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Режимы размера (`size`), позиционирование (`x`, `y`, `coordinator`) и визуальные состояния (`turn`, `disabled`, `hide`, `static`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Страница `http://localhost:3000/component-image`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить секции `Sizes & Fits`, `Position & Coordinator` и `Visual States & Interactive Toggles`.
  2. Проверить вычисленные стили `background-size`, `background-position-x`/`y`, `object-fit`/`object-position`, трансформацию `turn`, фильтр `disabled`, скрытие `hide`.
- **Ожидаемый результат**: Все модификаторы и стили позиционирования применяются в соответствии с токенами D1.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Семантические теги `<img>` (`tagImg`), `<picture>` и `srcset`
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Страница `http://localhost:3000/component-image`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить секцию `Semantic img, picture, srcset, Priority & Lazy Loading`.
  2. Проверить наличие тегов `<img>`, `<picture>` с `<source>` (медиа-запросы, `srcset`), атрибуты `decoding`, `fetchpriority`, `loading="lazy"`.
- **Ожидаемый результат**: Теги `<img>` и `<picture>` сформированы корректно, изображения загружаются.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

### 2.2 Интерактив и функционал (`INT`)

#### [TC-INT-001] Реактивное переключение источников, проверка `expose` и события `@load`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактив и функционал`
- **Предусловия**: Страница `http://localhost:3000/component-image`, секция `Events & Control via Expose Methods`.
- **Шаги**:
  1. Нажать последовательно кнопки `Image 2`, `Icon`, `Flag`, `Color`, `Uint8Array`, `Clear`, `Image 1` и `Read Expose`.
  2. Проверить обновление блоков `Expose State`, `Expose Snapshot` (`getType()`, `getData()`), `Last Event` и `Event Payload`.
- **Ожидаемый результат**: Тип и данные `expose` обновляются при каждом переключении, событие `@load` срабатывает для загружаемых источников.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Адаптивное масштабирование групп изображений (`adaptive`, `adaptiveGroup`, `adaptiveAlways`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактив и функционал`
- **Предусловия**: Страница `http://localhost:3000/component-image`, секция `Adaptive Scaling`.
- **Шаги**:
  1. Проверить элементы с `adaptive` и `adaptiveGroup` (`phones-x`, `phones-y`, `tablets-xy`, `phones-state`).
  2. Убедиться, что вычисленные `background-size` или размеры `<img>` согласованы внутри группы.
- **Ожидаемый результат**: Адаптивное масштабирование рассчитывается корректно без `NaN` или нулевых размеров.
- **Тип подтверждения**: `Console/Log`

#### [TC-INT-003] Интерактивные переключатели состояний (`turn`, `disabled`, `hide`, `static`, `tagImg`, `size`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактив и функционал`
- **Предусловия**: Страница `http://localhost:3000/component-image`, секция `Visual States & Interactive Toggles`.
- **Шаги**:
  1. Последовательно нажать `Toggle Turn`, `Toggle Disabled`, `Toggle Hide`, `Toggle Static`, `Toggle TagImg`, `Size: auto`, `Size: contain`, `Size: cover` для `[data-testid="demo-image-dynamic"]`.
- **Ожидаемый результат**: Классы `.d1-image--turn`, `.d1-image--disabled`, `.d1-image--hide`, `.d1-image--static`, `.d1-image--size--*` и тег `<span>`/`<img>` переключаются реактивно.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Условное монтирование и очистка observers (`v-if`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактив и функционал`
- **Предусловия**: Открыта группа `Lifecycle & Conditional Mount`.
- **Шаги**:
  1. Нажать `Toggle Mount`, убедиться, что `[data-testid="demo-image-lifecycle"]` (с `lazy` и `adaptive`) удалён из DOM без ошибок.
  2. Повторно нажать `Toggle Mount` и проверить повторное подключение.
- **Ожидаемый результат**: Наблюдатели `ImageLazy` и `ImageAdaptiveItem` корректно очищаются при размонтировании и восстанавливаются при монтировании.
- **Тип подтверждения**: `Console/Log`

### 2.3 Граничные значения (`BND`)

#### [TC-BND-001] Пустые, пробельные и nullish источники (без `value`, `""`, `"   "`, `null`, `undefined`, `"image:   "`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные значения`
- **Предусловия**: Страница `http://localhost:3000/component-image`, секция `Boundary, Accessibility & Narrow Container`.
- **Шаги**:
  1. Проверить DOM элементов `[data-testid="demo-image-empty-omitted"]`, `demo-image-empty-string`, `demo-image-whitespace`, `demo-image-null`, `demo-image-undefined`, а также `value="image:   "`.
- **Ожидаемый результат**: Компоненты не вызывают ошибок рендера и не отображают битых изображений.
- **Тип подтверждения**: `Console/Log`

#### [TC-BND-002] Нулевые координаты (`x: 0, y: 0`) и `coordinator: null`
- **Приоритет**: `P2 (Medium)`
- **Категория**: `Граничные значения`
- **Предусловия**: Страница `http://localhost:3000/component-image`, элемент `Numeric zero position`.
- **Шаги**:
  1. Проверить элемент с `:x="0"`, `:y="0"`, `:coordinator="null"`, `tagImg`.
- **Ожидаемый результат**: Значение `0` не теряется как falsy-значение, `object-position` выставляется корректно.
- **Тип подтверждения**: `Console/Log`

#### [TC-BND-003] Unicode/эмодзи, XSS-строка в `alt` и узкий контейнер (`max-width: 240px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные значения`
- **Предусловия**: Страница `http://localhost:3000/component-image`, секция `Boundary, Accessibility & Narrow Container`.
- **Шаги**:
  1. Проверить `[data-testid="demo-image-unicode-alt"]`, `[data-testid="demo-image-xss-alt"]` и `[data-testid="demo-image-narrow"]` внутри `.demo-image-page__narrow` (`max-width: 240px`).
- **Ожидаемый результат**: XSS-строка в `alt` экранирована как атрибут (`img[onerror]` не создаётся), узкий контейнер не выходит за пределы `240px`.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-BND-003.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптивность на планшете (`768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Страница `http://localhost:3000/component-image`.
- **Шаги**:
  1. Изменить размер вьюпорта на `768×1024`.
  2. Проверить отображение `<picture>`, адаптивных изображений и отсутствие горизонтального переполнения.
- **Ожидаемый результат**: Компоненты `D1Image` корректно вписываются в контейнеры без артефактов.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Адаптивность на мобильном устройстве (`375×812` и `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Страница `http://localhost:3000/component-image`.
- **Шаги**:
  1. Изменить размер вьюпорта на `375×812` и `320×568`.
  2. Проверить отображение компонентов `D1Image`, переключение `<picture>` брейкпоинтов и отсутствие поломок вёрстки компонентов.
- **Ожидаемый результат**: Компоненты `D1Image` адаптируются корректно на узком экране.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Проверка WAI-ARIA атрибутов (`role`, `aria-label`, `aria-hidden`, `translate`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность (A11y)`
- **Предусловия**: Страница `http://localhost:3000/component-image`.
- **Шаги**:
  1. Проверить элементы с `alt` (например, `alt="Home navigation"`, `alt="Example image"`, `[data-testid="demo-image-unicode-alt"]`).
  2. Проверить декоративные элементы без `alt`.
- **Ожидаемый результат**: Элементы с `alt` имеют `role="img"` и `aria-label` (или `alt` на `<img>`), декоративные элементы скрыты от скринридеров (`aria-hidden="true"`), присутствует `translate="no"`.
- **Тип подтверждения**: `Console/Log`

### 2.6 Логи и консоль (`LOG`)

#### [TC-LOG-001] Отсутствие ошибок в консоли и предупреждений Vue
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Логи и консоль`
- **Предусловия**: Открыть `http://localhost:3000/component-image`, очистить лог консоли.
- **Шаги**:
  1. Прокрутить страницу, переключить все кнопки в секциях `Events & Control via Expose Methods`, `Visual States & Interactive Toggles` и `Lifecycle & Conditional Mount`, изменить вьюпорт.
  2. Проверить сообщения консоли браузера.
- **Ожидаемый результат**: `0` ошибок `console.error`, `0` необработанных исключений, `0` предупреждений `[Vue warn]`.
- **Тип подтверждения**: `Console/Log`
