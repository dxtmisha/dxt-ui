# Спецификация тест-кейсов: D1NavigationRailItem

- **Сущность**: `D1NavigationRailItem`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/NavigationRailItem` (`packages/constructor/src/constructors/NavigationRailItem`, `packages/demo/src/pages/components/DemoNavigationRailItemPage.vue`)
- **Целевой URL**: `http://localhost:3000/component-navigation-rail-item`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-26`
- **Всего тест-кейсов**: `6`

---

## 1. Матрица покрытия

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :---: | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 1 | P0 | Иконки, бейджи, точки, 24 палитры, `divider`, теги/ссылки |
| **Интерактивность и функциональность** | `INT` | 1 | P0 | Состояния (`focus`/`open`/`selected`/`disabled`/`loading`/`skeleton`), `v-if` |
| **Границы и крайние случаи** | `BND` | 1 | P1 | `0`, пустые/длинные/неразрывные строки, Unicode/XSS, узкий `96px` контейнер |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Десктоп `1440×900`, планшет `768×1024`, мобильные `375×812` и `320×568` |
| **Доступность (A11Y)** | `A11Y` | 1 | P1 | Роли `option`/`menuitem`/`tab`/`button`, `aria-label`, `tabindex` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие ошибок консоли, `[Vue warn]` и исключений |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Первичный рендеринг элементов панели навигации и бейджей
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыта страница `http://localhost:3000/component-navigation-rail-item`, разрешение `1440×900`.
- **Шаги**:
  1. Проверить рендер 13 групп и 102 экземпляров `.d1-navigationRailItem`.
- **Ожидаемый результат**: Все 102 элемента видимы, иконки и компактные бейджи (`size: 'sm'`) выровнены корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Состояния, слоты и жизненный цикл `v-if`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыта страница `http://localhost:3000/component-navigation-rail-item`.
- **Шаги**:
  1. Проверить состояния `focus`, `open`, `selected`, `selectedChild`, `readonly`, `disabled`, `loading`, `is-skeleton`.
  2. Выполнить `Unmount` / `Mount` в группе `Lifecycle`.
- **Ожидаемый результат**: Все состояния и `v-if` переключение работают без ошибок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Перенос длинного неразрывного текста в узком контейнере (`96px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Прокрутка к группе `Boundary` на `http://localhost:3000/component-navigation-rail-item`.
- **Шаги**:
  1. Проверить отображение `0`, длинных и неразрывных строк (`64` символа `'A'`) и XSS-текста.
- **Ожидаемый результат**: Благодаря `min-width: 0; max-width: 100%; overflow-wrap: anywhere` на `.d1-navigationRailItem` и `__label` текст переносится без переполнения.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Проверка адаптивности на `1440×900`, `768×1024`, `375×812`, `320×568`
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Открыта страница `http://localhost:3000/component-navigation-rail-item`.
- **Шаги**:
  1. Проверить `scrollWidth`, `innerWidth` и `.d1-navigationRailItem` на 4 разрешениях.
- **Ожидаемый результат**: На всех 4 разрешениях `scrollWidth === innerWidth` и `overflowingSelf === 0`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Роли WAI-ARIA и фокусируемость
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility`
- **Предусловия**: Открыта страница `http://localhost:3000/component-navigation-rail-item`.
- **Шаги**:
  1. Проверить роли (`option`, `menuitem`, `tab`, `button`), `aria-label` и фокусируемость.
- **Ожидаемый результат**: Все 4 роли и `aria-label` присутствуют, 102 элемента фокусируемы.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Контроль ошибок консоли и предупреждений Vue
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Открыта страница `http://localhost:3000/component-navigation-rail-item`.
- **Шаги**:
  1. Проверить журналы консоли и сетевые запросы.
- **Ожидаемый результат**: `0` ошибок консоли, `0` `[Vue warn]`, `0` исключений и HTTP-ошибок.
- **Тип доказательства**: `Console/Log`
