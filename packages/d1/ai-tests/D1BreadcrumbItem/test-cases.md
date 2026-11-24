# Спецификация тест-кейсов: D1BreadcrumbItem

- **Сущность**: `D1BreadcrumbItem`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/BreadcrumbItem` (`packages/constructor/src/constructors/BreadcrumbItem`, `packages/demo/src/pages/components/DemoBreadcrumbItemPage.vue`)
- **Целевой URL**: `http://localhost:3000/component-breadcrumb-item`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-24`
- **Всего тест-кейсов**: `10`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Приоритеты | Область проверки |
| :--- | :--- | :---: | :--- | :--- |
| **Визуальное соответствие** | `VIS` | 2 | P0, P1 | Шаги цепочки (`href`, action, `disabled`, `readonly`) и скелетон загрузки (`isSkeleton`) |
| **Интерактивность и функции** | `INT` | 3 | P0, P1 | Клик + `expose` (`getValue`, `getDetail`), блокировка при `disabled`, переключение `readonly` и `back` |
| **Границы и крайние случаи** | `BND` | 1 | P1 | Пользовательские стрелки, слот `#default`, числовой `0` (`label: 0`, `value: 0`) и ненулевая геометрия |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1 | Десктоп (`1440×900`), планшет (`768×1024`) и мобильный (`375×812` / `320×568`) |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `aria-current="page"`, `aria-disabled="true"`, `role="link"` + `tabindex="0"`, `aria-hidden="true"` у разделителя |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие ошибок консоли и `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуальное соответствие (`VIS`)

#### [TC-VIS-001] Состояния навигационной крошки (`href`, интерактивное действие, `disabled`, `readonly`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуальное соответствие`
- **Предусловия**: Открыть `http://localhost:3000/component-breadcrumb-item`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить рендеринг первой группы (`Home`, `Products`, `Archived`, `Workstations`).
- **Ожидаемый результат**: Первые три элемента рендерятся как `<a>` со стрелкой-разделителем `chevron_right`, последний `readonly` — как `<span>` без разделителя.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Состояние загрузки скелетона (`isSkeleton` внутри `D1Skeleton`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуальное соответствие`
- **Предусловия**: Открыта группа `Skeleton Loading State` при `isLoading = true`.
- **Шаги**:
  1. Проверить классы скелетона у метки и ведущей иконки, затем переключить `Toggle Skeleton`.
- **Ожидаемый результат**: При `active="true"` отображаются скелетон-плашки `.d1-skeleton__textVariant` и скелетон иконки; при отключении отображается реальный контент.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

### 2.2 Интерактивность и функции (`INT`)

#### [TC-INT-001] Обработка клика, передача `value`/`detail` и чтение `expose` (`getValue`, `getDetail`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта первая группа.
- **Шаги**:
  1. Нажать на `[data-testid="demo-crumb-action"]`, затем на `[data-testid="demo-crumb-disabled"]`.
- **Ожидаемый результат**: `clickCount` увеличивается ровно до `1`, `lastPayload.value === "products"`, `exposedInfo` возвращает `{ value: "products", detail: { category: "hardware" } }`; клик по `disabled` игнорируется.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Режим обратной навигации (`back`) и порядок CSS Flexbox (`order`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `Interactive State Toggles`.
- **Шаги**:
  1. Включить `Toggle Back Mode` и проверить `[data-testid="demo-crumb-reactive"]` и `[data-testid="demo-crumb-custom-arrow"]`.
- **Ожидаемый результат**: Разделитель переключается на левую стрелку (`chevron_left` / `arrow_back`) с `order: 2`, а ведущая иконка смещается на `order: 6`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Динамическое переключение `disabled` и `readonly` (`<a>` -> `<span aria-current="page">`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `Interactive State Toggles`.
- **Шаги**:
  1. Нажать `Toggle Disabled`, затем `Toggle Readonly` на `[data-testid="demo-crumb-reactive"]`.
- **Ожидаемый результат**: При `readonly` тег корня меняется с `A` на `SPAN`, добавляется `aria-current="page"`, а стрелка-разделитель удаляется из DOM.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Пользовательские стрелки, слот `#default`, числовой `0` и геометрия
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыта группа `Custom Arrow Icons, Default Slot & Numeric Zero`.
- **Шаги**:
  1. Проверить `[data-testid="demo-crumb-slot"]`, `[data-testid="demo-crumb-zero"]` и размеры всех `.d1-breadcrumbItem`.
- **Ожидаемый результат**: Слот рендерит `Release Notes (v2.4)`, числовой `0` отображается без потери текста, все элементы имеют ненулевые размеры.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

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

#### [TC-A11Y-001] Проверка WAI-ARIA контрактов (`aria-current`, `aria-disabled`, `role="link"`, `aria-hidden`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность`
- **Предусловия**: Открыта страница `http://localhost:3000/component-breadcrumb-item`.
- **Шаги**:
  1. Проверить атрибуты на `demo-crumb-href`, `demo-crumb-action`, `demo-crumb-disabled`, `demo-crumb-readonly` и `.d1-breadcrumbItem__iconArrow`.
- **Ожидаемый результат**: `href`-ссылка не имеет избыточного `role`, action-ссылка имеет `role="link"` + `tabindex="0"`, `disabled` имеет `aria-disabled="true"`, `readonly` имеет `aria-current="page"`, все разделители имеют `aria-hidden="true"`.
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
