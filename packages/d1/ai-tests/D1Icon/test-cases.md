# Спецификация тест-кейсов: D1Icon

- **Сущность**: `D1Icon`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Icon`, `packages/constructor/src/constructors/Icon`, `packages/demo/src/pages/components/DemoIconPage.vue`
- **Целевой URL**: `http://localhost:3000/component-icon`
- **Референсные материалы**: `None`
- **Последняя проверка / обновление**: `2026-11-14`
- **Всего тест-кейсов**: `12`

---

## 1. Матрица покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 3 | P0, P1 | Размеры (`auto`–`9xl`), формы/скругления, палитры, `overlay`, `inverse` |
| **Интерактивность и контракт** | `INT` | 3 | P0, P1 | Переключение `active`/`iconActive`, `skeleton`, `dynamic`, `expose`, события |
| **Границы и краевые случаи** | `BND` | 2 | P1, P2 | Пустые источники (`""`, `null`, `undefined`), `dir="rtl"` с `dir`/`turn` |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1, P2 | Десктоп (`1440×900`) и мобильный вьюпорт (`375×812`) без переполнения |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `aria-hidden="true"` для статичных, `role`/`aria-label`/`aria-checked`/`tabindex` для `dynamic` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие `console.error`, `[Vue warn]` и необработанных исключений |

---

## 2. Детальные тест-кейсы

### [TC-VIS-001] Рендеринг шкалы размеров D1Icon (`auto`, `x`–`9xl`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти секцию `Sizes (auto, x, xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl)`.
  2. Проверить вычисленные размеры (`width`, `height`) и видимость всех 15 иконок.
- **Ожидаемый результат**: Все иконки отрендерены, размеры монотонно возрастают, наложений и обрезаний нет.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

### [TC-VIS-002] Формы и скругления (`square`, `circle`, `rect`, `rounded`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти секцию `Shapes & Corner Rounding`.
  2. Проверить применение классов `--rounded--*` и `border-radius` для `square`, `circle`, `rect`.
- **Ожидаемый результат**: Иконки корректно отображают заданную геометрию и радиусы скругления.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

### [TC-VIS-003] Палитры, семантические цвета и инверсная поверхность
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти секцию `Palettes, Semantic Colors & Surfaces`.
  2. Проверить отображение `asPalette`, `overlay`, `success`, `error`, `inverse`.
- **Ожидаемый результат**: Цвета палитр и статусов контрастны, включая тёмный блок `.demo-icon-page__inverse-surface`.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

### [TC-INT-001] Переключение двойной иконки (`active` + `iconActive`) и анимации
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти секцию `States, Dual-Icon Switching & Animations`.
  2. Нажать кнопку `Toggle Active State`.
  3. Проверить изменение `Active` с `false` на `true` и переключение видимости основной/активной иконки.
- **Ожидаемый результат**: Активная иконка отображается при `active=true`, классы `--hide` переключаются корректно.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-INT-001.png`)

### [TC-INT-002] Состояние загрузки скелетона (`D1Skeleton` + `isSkeleton`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти секцию `Skeleton Loading (D1Skeleton + isSkeleton)`.
  2. Проверить наличие классов скелетона при `Skeleton Active: true`.
  3. Нажать `Toggle Skeleton` и проверить снятие состояния скелетона.
- **Ожидаемый результат**: При активном скелетоне отображается placeholder без дублирования DOM; при выключении отображаются реальные иконки.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-INT-002.png`)

### [TC-INT-003] События (`@click`, `@click-lite`, `@load`) и методы `expose`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти секцию `Events & Expose Methods`.
  2. Нажать `Toggle Active`, затем кликнуть по управляемой иконке `Controlled interactive icon`.
  3. Нажать `Bookmark Icons` и `Image Sources`, проверить обновление `Expose State` (`isActive()`, `getValue()`, `getDetail()`) и `Last Event`.
- **Ожидаемый результат**: `isActive()` отражает `true`/`false`, `getValue()` и `getDetail()` обновляются, события `click`/`click-lite`/`load` фиксируются.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-INT-003.png`)

### [TC-BND-001] Трансформации и направление RTL (`turn`, `dir`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти секцию `Transformations & Direction (turn, dir in LTR and RTL)`.
  2. Проверить наличие классов `--turn`, `--dir` и визуальное отражение/поворот в контейнерах `dir="ltr"` и `dir="rtl"`.
- **Ожидаемый результат**: Иконки корректно поворачиваются (`turn`) и зеркалируются в `dir="rtl"`.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-BND-001.png`)

### [TC-BND-002] Пустые источники (`""`, `null`, `undefined`) и `active`-only иконка
- **Приоритет**: `P2 (Medium)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти секцию `Empty Sources & Active-Only Icons`.
  2. Проверить, что компоненты не падают и корректно рендерятся.
- **Ожидаемый результат**: Все 5 экземпляров рендерятся без ошибок; `iconActive` с `active` отображает активную иконку.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-BND-002.png`)

### [TC-RSP-001] Десктопный вьюпорт (`1440×900`) — отсутствие горизонтального переполнения
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, установить вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить `document.documentElement.scrollWidth <= window.innerWidth`.
  2. Проверить отсутствие обрезания `D1Icon` внутри контейнеров.
- **Ожидаемый результат**: Горизонтальное переполнение отсутствует.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### [TC-RSP-002] Мобильный вьюпорт (`375×812`) — адаптивность и перенос строк
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, установить вьюпорт `375×812`.
- **Шаги теста**:
  1. Проверить перенос иконок внутри `DemoFlex` и отсутствие горизонтального переполнения самой страницы.
- **Ожидаемый результат**: Элементы `D1Icon` переносятся корректно, вёрстка не ломается.
- **Тип подтверждения**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### [TC-A11Y-001] Доступность (`aria-hidden`, `role`, `aria-label`, `aria-checked`, `tabindex`, `disabled`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить декоративную иконку (без `dynamic`): наличие `aria-hidden="true"`.
  2. В секции `Interactive Mode, Navigation & Accessibility` проверить атрибуты `role="button"`, `role="switch"`, `aria-label`, `tabindex="0"`, `aria-disabled="true"` у `disabled`, а также тег `<a>` для `href`/`to`.
- **Ожидаемый результат**: Все ARIA-атрибуты и роли соответствуют контракту `Icon.ts`.
- **Тип подтверждения**: `DOM/Console` (без скриншота)

### [TC-LOG-001] Отсутствие ошибок консоли и предупреждений Vue
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, подключить сбор логов консоли и `pageerror`.
- **Шаги теста**:
  1. Выполнить загрузку страницы и все интерактивные сценарии (`TC-INT-001`, `TC-INT-002`, `TC-INT-003`).
  2. Проверить список ошибок консоли и необработанных исключений.
- **Ожидаемый результат**: `0` ошибок `console.error`, `0` `pageerror`, `0` предупреждений `[Vue warn]`.
- **Тип подтверждения**: `Console/Log`
