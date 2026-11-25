# Спецификация тест-кейсов: D1HorizontalScroll

- **Сущность**: `D1HorizontalScroll`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/HorizontalScroll`, `packages/constructor/src/constructors/HorizontalScroll`
- **Целевой URL**: `http://localhost:3000/component-horizontal-scroll`
- **Справочные материалы**: `Отсутствуют`
- **Последнее обновление**: `2026-11-25`
- **Всего тест-кейсов**: `10`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область внимания |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 3 | P0, P1 | Grid-раскладка, `align`, `bleed`, полиморфные теги, тёмная тема |
| **Интерактив и функциональность** | `INT` | 2 | P0, P1 | `expose.toSelected()`, прокрутка к выбранному элементу, `v-if` цикл жизни |
| **Границы и краевые случаи** | `BND` | 1 | P1 | Пустой слот, длинные неразрывные строки, Unicode, узкий контейнер |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1 | Десктоп (`1440×900`), планшет (`768×1024`), мобильные (`375×812`, `320×568`) |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `role="region"`, `aria-label`, `tabindex="0"` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие ошибок консоли, `pageerror`, `[Vue warn]` и сетевых ошибок |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг и горизонтальная grid-раскладка
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-horizontal-scroll`, вьюпорт `1440×900`, тема `Light`.
- **Шаги**:
  1. Найти `[data-testid="hs-basic"]`.
  2. Проверить вычисленные стили `display`, `gridAutoFlow`, `overflowX` и классы дочерних элементов.
- **Ожидаемый результат**: `display: grid`, `grid-auto-flow: column`, `overflow-x: auto`, присутствуют классы `d1-horizontalScroll__item` и `d1-horizontalScroll__item--selected`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Варианты выравнивания (`align`) и режим `bleed`
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-horizontal-scroll`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить `[data-testid="hs-align-left"]`, `hs-align-center`, `hs-align-right`, `hs-align-block`.
  2. Проверить классы и CSS-переменную `--d1-horizontalScroll-sys-bleed` у `hs-bleed-true` и `hs-bleed-false`.
- **Ожидаемый результат**: `justify-content` соответствует режимам `align`, модификатор `d1-horizontalScroll--bleed` применяется только при `bleed: true`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Полиморфные теги (`section`, `nav`, `ul`) и тёмная тема
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Включить `prefers-color-scheme: dark`.
- **Шаги**:
  1. Проверить теги `hs-tag-section`, `hs-tag-nav`, `hs-tag-ul`.
  2. Сделать снимок элемента в тёмной теме.
- **Ожидаемый результат**: Рендерятся семантические теги `SECTION`, `NAV`, `UL`, контрастность сохранена.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Программный вызов `expose.toSelected()` и инспекция `getElement()`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Контейнер `[data-testid="hs-expose"]` имеет горизонтальное переполнение (`scrollWidth > clientWidth`).
- **Шаги**:
  1. Нажать кнопку `[data-testid="hs-to-selected-btn"]`.
  2. Проверить значение `scrollLeft` и вывод `<DemoValue>`.
- **Ожидаемый результат**: `scrollLeft > 0`, контейнер прокручен к выбранному элементу `Selected #11`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Жизненный цикл `v-if` (размонтирование и повторное монтирование)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Компонент `[data-testid="hs-lifecycle"]` смонтирован.
- **Шаги**:
  1. Нажать `[data-testid="hs-toggle-mount"]` для размонтирования.
  2. Нажать `[data-testid="hs-toggle-mount"]` для повторного монтирования.
- **Ожидаемый результат**: Элемент корректно удаляется из DOM и восстанавливается без ошибок.
- **Тип доказательства**: `Console/Log`

### 2.3 Границы и краевые случаи (`BND`)

#### [TC-BND-001] Пустой слот, неразрывный текст, Unicode и узкий контейнер (`260px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Страница открыта в десктопном вьюпорте.
- **Шаги**:
  1. Проверить наличие `[data-testid="hs-empty"]`.
  2. Проверить геометрию `.demo-horizontal-scroll-page__narrow` и `[data-testid="hs-narrow"]`.
- **Ожидаемый результат**: Внешний блок `narrow` не расширяется за пределы `260px` (`scrollWidth === clientWidth`), а внутренний скроллер прокручивает длинный контент.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

### 2.4 Адаптивность (`RSP`)

#### [TC-RSP-001] Десктоп (`1440×900`) и планшет (`768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Изменить размер вьюпорта на `1440×900` и `768×1024`.
- **Шаги**: Проверить `document.documentElement.scrollWidth <= window.innerWidth`.
- **Ожидаемый результат**: Горизонтальный скролл документа отсутствует (`overflowX: false`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Мобильные вьюпорты (`375×812` и `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Изменить размер вьюпорта на `375×812` и `320×568`.
- **Шаги**: Проверить `document.documentElement.scrollWidth <= window.innerWidth`.
- **Ожидаемый результат**: Горизонтальный скролл документа отсутствует (`overflowX: false`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантика региона и доступ с клавиатуры
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility`
- **Предусловия**: Элемент `[data-testid="hs-a11y"]` на странице.
- **Шаги**: Проверить атрибуты `role`, `aria-label`, `tabindex`.
- **Ожидаемый результат**: Присутствуют `role="region"`, `aria-label="Featured items rail"`, `tabindex="0"`.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Чистота консоли, отсутствие Vue-предупреждений и сетевых сбоев
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Собрать все события `console`, `pageerror`, `response` за время прогона.
- **Шаги**: Проверить списки ошибок и предупреждений.
- **Ожидаемый результат**: `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`, `failedRequests: []`.
- **Тип доказательства**: `Console/Log`
