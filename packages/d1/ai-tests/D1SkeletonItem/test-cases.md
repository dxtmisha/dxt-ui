# Спецификация тест-кейсов: D1SkeletonItem

- **Сущность**: `D1SkeletonItem`
- **Путь к исходному коду**: `packages/constructor/src/constructors/SkeletonItem`, `packages/d1/src/components/Ui/SkeletonItem`, `packages/demo/src/pages/components/DemoSkeletonItemPage.vue`
- **Целевой URL**: `http://localhost:3000/component-skeleton-item`
- **Справочные материалы**: Нет
- **Последняя проверка / обновление**: `2026-11-26`
- **Всего тест-кейсов**: `6`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Приоритеты | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 1 | P0 | Все 6 токенов (`text`, `textVariant`, `background`, `backgroundVariant`, `border`, `borderVariant`), HTML и компонентные теги |
| **Интерактивность и функциональность** | `INT` | 1 | P0 | Переключение `active`, динамические `length`/`label`, `itemAttrs.onClick`, функциональный и объектный `tag`-компонент, `mount/unmount` |
| **Границы и крайние случаи** | `BND` | 1 | P1 | `:label="0"`, `:length="0"`, пустой `label=""`, защита от XSS (`label` и `length`), Unicode, длинная строка |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) |
| **Доступность (A11Y)** | `A11Y` | 1 | P1 | Автоматический `aria-hidden="true"` на декоративной генерации `#`, снятие при `aria-label`, проброс `role` через `itemAttrs` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие ошибок консоли, SSR hydration warnings, Vue-предупреждений и сетевых сбоев |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Рендеринг всех 6 токенов скелетона, тегов и компонентных обёрток
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton-item`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить наличие всех 6 классов `.d1-skeleton__text`, `__textVariant`, `__background`, `__backgroundVariant`, `__border`, `__borderVariant`.
  2. Проверить рендер `h4`, `span`, `p`, `D1Button`, `section` (`ObjectCardTag`) и `article` (`FunctionalBadgeTag`).
- **Ожидаемый результат**: Все 6 модификаторов и полиморфные теги рендерятся корректно без визуальных артефактов.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Переключение `active`, форматов `length`/`label`, `itemAttrs.onClick` и `mount/unmount`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функциональность`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton-item`, вьюпорт `1440×900`.
- **Шаги**:
  1. Нажать `Toggle Skeleton Active`, проверить снятие/возврат `.d1-skeleton--active`.
  2. Нажать `Length = 4`, `Range [2, 6]`, `String Length`, `Label = 0`, `Label = 'Static'` и проверить обновление `[data-testid="dynamic-skeleton-item"]`.
  3. Кликнуть по `Clickable Item with itemAttrs` — проверить инкремент `itemAttrs Click Count`.
  4. Переключить `Toggle Mount`.
- **Ожидаемый результат**: Все переключения работают реактивно, обработчик из `itemAttrs` вызывается, `Label = 0` выводит `"0"`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Экранирование XSS в `label` и `length`, числовой `0`, пустые значения и Unicode
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton-item`, группа `Boundary, Edge Cases`.
- **Шаги**:
  1. Проверить отсутствие вставленных тегов `<img>` и `<script>` из XSS-строк.
  2. Проверить корректное отображение кириллицы, вьетнамской диакритики, CJK и emoji.
- **Ожидаемый результат**: XSS-строки отображаются как обычный текст, длинная строка переносится в узком контейнере.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Проверка адаптивности на `1440×900`, `768×1024`, `375×812`, `320×568`
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton-item`.
- **Шаги**:
  1. Проверить отсутствие горизонтального переполнения на 4 вьюпортах.
- **Ожидаемый результат**: `scrollWidth <= innerWidth` на всех 4 разрешениях.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Проверка `aria-hidden="true"` для декоративных `#`, приоритет `aria-label` и `role="status"`
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton-item`.
- **Шаги**:
  1. Проверить `[data-testid="decorative-a11y"]` -> `aria-hidden="true"`.
  2. Проверить `[data-testid="labelled-a11y"]` -> `aria-label="Accessible loading heading"`, отсутствие `aria-hidden`.
  3. Проверить `[data-custom="skeleton-attr"]` -> `role="status"`.
- **Ожидаемый результат**: Декоративные заглушки скрыты от скринридеров, явные ARIA-атрибуты сохраняются.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Мониторинг ошибок консоли, предупреждений гидрации SSR/Vue и сети
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль и рантайм`
- **Предусловия**: Собрать все логи со старта SSR-загрузки страницы и после всех кликов.
- **Шаги**:
  1. Проверить `consoleErrors`, `vueWarnings`, `pageErrors`, `networkErrors`.
- **Ожидаемый результат**: Все счётчики равны `0`, предупреждения гидрации полностью отсутствуют.
- **Тип доказательства**: `Console/Log`
