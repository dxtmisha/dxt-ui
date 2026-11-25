# Спецификация тест-кейсов: D1BreadcrumbItem

- **Сущность**: `D1BreadcrumbItem`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/BreadcrumbItem` (`packages/constructor/src/constructors/BreadcrumbItem`, `packages/demo/src/pages/components/DemoBreadcrumbItemPage.vue`)
- **Целевой URL**: `http://localhost:3000/component-breadcrumb-item`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `16`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Приоритеты | Область проверки |
| :--- | :--- | :---: | :--- | :--- |
| **Визуальное соответствие** | `VIS` | 3 | P0, P1 | Навигационные форматы (`href`, `to`, action, `index`), иконки (string/object/`null`), стрелки и скелетон (`isSkeleton`) |
| **Интерактивность и функции** | `INT` | 5 | P0, P1 | События `@click`/`@click-lite` и `useDemoEvent`, блокировка `disabled`/`readonly`, переключение `back`, `expose` (`getValue`, `getDetail`), `v-if` mount/unmount |
| **Границы и крайние случаи** | `BND` | 3 | P1 | Пустые/пробельные значения, числа (`0`, `-42`, `3.14`), слот `#default` со scoped-привязками, Unicode/XSS-экранирование, длинный и неразрывный текст в узком `DemoBox` |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1 | Десктоп (`1440×900`), планшет (`768×1024`) и мобильный (`375×812` / `320×568`) |
| **Доступность (A11y)** | `A11Y` | 2 | P1 | `aria-current="page"`, `aria-disabled="true"`, `role="link"` + `tabindex="0"`, `labelId`, `aria-label`, `aria-hidden="true"` у стрелок и активация с клавиатуры (`Enter`) |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие ошибок консоли и `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуальное соответствие (`VIS`)

#### [TC-VIS-001] Состояния навигационной крошки (`href`, `to` строка/объект, action, `index`, `disabled`, `readonly`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуальное соответствие`
- **Предусловия**: Открыть `http://localhost:3000/component-breadcrumb-item`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить рендеринг групп `Navigation & Link Formats` и `States & Interactive Toggles`.
- **Ожидаемый результат**: Элементы с `href`, `to` (строка и `{ name: 'home' }`), `value`/`index` и `disabled` рендерятся как `<a>` со стрелкой-разделителем `chevron_right`; `readonly` — как `<span>` без разделителя.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Состояние загрузки скелетона (`isSkeleton` внутри `D1Skeleton`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуальное соответствие`
- **Предусловия**: Открыта группа `Skeleton Loading State` при `isSkeletonActive = true`.
- **Шаги**:
  1. Проверить классы скелетона у метки и ведущей иконки на `[data-testid="demo-crumb-skeleton-1"]` и `[data-testid="demo-crumb-skeleton-2"]`, затем нажать `Toggle Skeleton`.
- **Ожидаемый результат**: При `active="true"` отображаются классы скелетона `.d1-skeleton__textVariant` и скелетон иконки; при отключении отображается реальный контент.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Форматы иконок (строка, объект, `null`) и пользовательские стрелки
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуальное соответствие`
- **Предусловия**: Открыта группа `Icons (String, Object, Null) & Custom Arrows`.
- **Шаги**:
  1. Проверить `[data-testid="demo-crumb-icon-string"]`, `[data-testid="demo-crumb-icon-object"]`, `[data-testid="demo-crumb-icon-null"]` и `[data-testid="demo-crumb-custom-arrow"]`.
- **Ожидаемый результат**: Иконка отображается для строки и объекта `{ icon: 'star', turn: true }`, отсутствует при `:icon="null"`, а разделитель рендерит `arrow_forward`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

### 2.2 Интерактивность и функции (`INT`)

#### [TC-INT-001] Обработка событий `@click` и `@click-lite`, сериализация payload и блокировка при `disabled`/`readonly`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `Events & Blocked Actions`.
- **Шаги**:
  1. Нажать на `[data-testid="demo-crumb-event-trigger"]`, затем на `[data-testid="demo-crumb-event-disabled"]` и `[data-testid="demo-crumb-event-readonly"]`.
- **Ожидаемый результат**: `clickCount === 1`, `clickLiteCount === 1`, `eventName === "clickLite"`, `eventPayload` содержит `{"type":"click","value":"event-item","detail":{"source":"events-group"}}`; клики по `disabled` и `readonly` игнорируются.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Режим обратной навигации (`back`) и порядок CSS Flexbox (`order`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `States & Interactive Toggles`.
- **Шаги**:
  1. Нажать `[data-testid="demo-crumb-toggle-back"]` и проверить `[data-testid="demo-crumb-reactive"]` и `[data-testid="demo-crumb-custom-arrow"]`.
- **Ожидаемый результат**: Разделитель переключается на левую стрелку (`chevron_left` / `arrow_back`) с `order: 2`, а ведущая иконка смещается на `order: 6`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Динамическое переключение `disabled` и `readonly` (`<a>` -> `<span aria-current="page">`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `States & Interactive Toggles`.
- **Шаги**:
  1. Нажать `[data-testid="demo-crumb-toggle-disabled"]`, затем `[data-testid="demo-crumb-toggle-readonly"]` и проверить `[data-testid="demo-crumb-reactive"]`.
- **Ожидаемый результат**: При `readonly` тег корня меняется с `A` на `SPAN`, добавляется `aria-current="page"`, а стрелка-разделитель удаляется из DOM.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Программные методы `defineExpose` (`getValue`, `getDetail`) после реактивного обновления (`nextTick`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `Programmatic Expose (getValue & getDetail)`.
- **Шаги**:
  1. Нажать `[data-testid="demo-crumb-expose-read"]`, затем `[data-testid="demo-crumb-expose-update"]` и `[data-testid="demo-crumb-expose-reset"]`.
- **Ожидаемый результат**: `exposedSnapshot` последовательно отображает `{"value":"initial-step","detail":{"section":"catalog","step":1}}`, затем `{"value":"updated-step","detail":{"section":"checkout","step":2}}`, затем возвращается к исходному значению.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

#### [TC-INT-005] Жизненный цикл: условное монтирование и размонтирование (`v-if`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `Lifecycle & Conditional Mounting (v-if)`.
- **Шаги**:
  1. Нажать `[data-testid="demo-crumb-mount-toggle"]` для размонтирования, затем повторно для монтирования `[data-testid="demo-crumb-conditional"]`.
- **Ожидаемый результат**: Элемент корректно удаляется из DOM при `isMounted = false` и повторно рендерится без ошибок консоли при `isMounted = true`.
- **Тип доказательства**: `Console/Log`

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Пользовательские стрелки, слот `#default`, числовые значения (`0`, `-42`, `3.14`) и геометрия
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыта группа `Data Types & Slots (#default)`.
- **Шаги**:
  1. Проверить `[data-testid="demo-crumb-zero"]`, `[data-testid="demo-crumb-negative"]`, `[data-testid="demo-crumb-decimal"]`, `[data-testid="demo-crumb-single-char"]`, `[data-testid="demo-crumb-slot"]`, `[data-testid="demo-crumb-label-and-slot"]`.
- **Ожидаемый результат**: Числа `0`, `-42`, `3.14` и `"A"` отображаются явно без потери текста; слот `#default` рендерит контент и scoped-привязку; непустые элементы имеют ненулевую геометрию.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Пустые/пробельные входы, Unicode и экранирование XSS-строки
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыта группа `Boundary, Edge Cases & Narrow Container`.
- **Шаги**:
  1. Проверить `[data-testid="demo-crumb-empty-component"]`, `[data-testid="demo-crumb-empty-string"]`, `[data-testid="demo-crumb-whitespace"]`, `[data-testid="demo-crumb-unicode"]`, `[data-testid="demo-crumb-xss"]`.
- **Ожидаемый результат**: Пустые значения не вызывают сбоев рендера; Unicode и эмодзи отображаются корректно; строка `<img src=x onerror=alert(1)>` отображается как безопасный текст без внедрения HTML/JS.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

#### [TC-BND-003] Длинный и неразрывный текст в узком контейнере (`max-width: 220px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыта группа `Boundary, Edge Cases & Narrow Container`.
- **Шаги**:
  1. Проверить `[data-testid="demo-crumb-long"]` и `[data-testid="demo-crumb-unbroken"]` внутри `.demo-breadcrumb-item-page__narrow`.
- **Ожидаемый результат**: Текст не ломает макет страницы и не вызывает неожиданного горизонтального скролла окна.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

### 2.4 Адаптивность (`RSP`)

#### [TC-RSP-001] Планшетный вьюпорт (`768×1024`) без переполнения
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность`
- **Предусловия**: Вьюпорт `768×1024`.
- **Шаги**:
  1. Проверить перенос гибких контейнеров и отсутствие горизонтального скролла.
- **Ожидаемый результат**: `scrollWidth <= innerWidth`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Мобильный экран (`375×812` и `320×568`) без горизонтального переполнения
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность`
- **Предусловия**: Вьюпорт `375×812` и `320×568`.
- **Шаги**:
  1. Проверить отображение элементов и отсутствие горизонтального скролла.
- **Ожидаемый результат**: `scrollWidth <= innerWidth`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Проверка WAI-ARIA контрактов (`aria-current`, `aria-disabled`, `role="link"`, `labelId`, `aria-hidden`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность`
- **Предусловия**: Открыта страница `http://localhost:3000/component-breadcrumb-item`.
- **Шаги**:
  1. Проверить атрибуты на `demo-crumb-href`, `demo-crumb-a11y-id`, `demo-crumb-a11y-role`, `demo-crumb-disabled`, `demo-crumb-a11y-current` и `.d1-breadcrumbItem__iconArrow`.
- **Ожидаемый результат**: `href`-ссылка не имеет избыточного `role`; `demo-crumb-a11y-id` содержит `aria-label` и внутренний `#demo-crumb-custom-label-id`; action-ссылка имеет `role="link"` + `tabindex="0"`; `disabled` имеет `aria-disabled="true"`; `readonly` имеет `aria-current="page"`; все разделители имеют `aria-hidden="true"`.
- **Тип доказательства**: `Console/Log`

#### [TC-A11Y-002] Клавиатурная навигация (`Tab` и активация по `Enter`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность`
- **Предусловия**: Открыта группа `Accessibility (WAI-ARIA & Keyboard)`.
- **Шаги**:
  1. Перевести фокус на `[data-testid="demo-crumb-a11y-role"]` и нажать `Enter`.
- **Ожидаемый результат**: Срабатывают события `click` и `clickLite` с `value: "keyboard-link"`, отображается `:focus-visible`.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Чистота консоли браузера и отсутствие `[Vue warn]`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль и рантайм`
- **Предусловия**: Все сценарии выполнены.
- **Шаги**:
  1. Проверить `consoleErrors`, `vueWarnings`, `pageErrors`.
- **Ожидаемый результат**: `[]`, `[]`, `[]`.
- **Тип доказательства**: `Console/Log`
