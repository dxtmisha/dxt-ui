# Спецификация тест-кейсов: D1Breadcrumbs

- **Сущность**: `D1Breadcrumbs`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Breadcrumbs` (`packages/constructor/src/constructors/Breadcrumbs`, `packages/demo/src/pages/components/DemoBreadcrumbsPage.vue`)
- **Целевой URL**: `http://localhost:3000/component-breadcrumbs`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `14`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Приоритеты | Область проверки |
| :--- | :--- | :---: | :--- | :--- |
| **Визуальное соответствие** | `VIS` | 2 | P0, P1 | Базовая цепочка (`to` объект/строка, `href`), иконки (`string`/объект/`null`), состояния и скелетон (`isSkeleton`) |
| **Интерактивность и функции** | `INT` | 5 | P0, P1 | События `@click`/`@click-lite`, блокировка `disabled`/`readonly`, `textBreadcrumb` (строка и функция), `itemAttrs` и динамическое изменение `list`, `v-if` mount/unmount |
| **Границы и крайние случаи** | `BND` | 3 | P1 | Пустые массивы и пустой компонент, числа (`0`, `-5`, `2.5`), Unicode/XSS, длинный и неразрывный текст в узком `DemoBox` |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1 | Десктоп (`1440×900`), планшет (`768×1024`) и мобильный (`375×812` / `320×568`) |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | Семантический `<nav aria-label="...">`, `aria-current="page"`, `aria-disabled="true"` и `role="link"` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие ошибок консоли и `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуальное соответствие (`VIS`)

#### [TC-VIS-001] Базовая цепочка навигации, иконки и автоматический `readonly` последнего элемента
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуальное соответствие`
- **Предусловия**: Открыть `http://localhost:3000/component-breadcrumbs`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить `[data-testid="demo-breadcrumbs-basic"]`, `[data-testid="demo-breadcrumbs-icons"]` и `[data-testid="demo-breadcrumbs-states"]`.
- **Ожидаемый результат**: Элементы рендерятся внутри `<nav class="d1-breadcrumbs">`; поддерживаются `to` объект/строка, `href`, строковая и объектная иконка, `:icon="null"`; последний шаг автоматически становится `<span aria-current="page">` без разделителя.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Состояние скелетона (`isSkeleton` внутри `D1Skeleton`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуальное соответствие`
- **Предусловия**: Открыта группа `Skeleton Loading State` при `isSkeletonActive = true`.
- **Шаги**:
  1. Проверить `[data-testid="demo-breadcrumbs-skeleton"]` и нажать `[data-testid="demo-breadcrumbs-skeleton-toggle"]`.
- **Ожидаемый результат**: При активном скелетоне элементы списка получают `.d1-skeleton__textVariant` на метках и `.d1-skeleton__backgroundVariant` на иконках; при выключении отображается реальный контент.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

### 2.2 Интерактивность и функции (`INT`)

#### [TC-INT-001] Проброс событий `@click` и `@click-lite`, сериализация payload и блокировка `disabled`/`readonly`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `Events (@click & @click-lite) & Blocked Actions`.
- **Шаги**:
  1. Нажать на `Click Step 1`, затем `Click Step 2 (index)`, затем на `Disabled Step`, `Readonly Step` и `Current Page`.
- **Ожидаемый результат**: После первых двух кликов `clickCount === 2`, `clickLiteCount === 2`, `eventName === "clickLite"`, `eventPayload` содержит `index`-значение `"step_index_2"`; клики по `disabled` и `readonly` шагам не увеличивают счётчики.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Динамическое обновление локализованной метки ориентира `textBreadcrumb` (строка и функция)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта первая группа.
- **Шаги**:
  1. Нажать `[data-testid="demo-breadcrumbs-label-custom"]`, затем `[data-testid="demo-breadcrumbs-label-function"]`.
- **Ожидаемый результат**: Атрибут `aria-label` на `<nav>` реактивно меняется с `"Breadcrumb"` на `"Site Path"`, а затем на `"Dynamic Function Breadcrumb"`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Интерактивный шаг возврата (`back: true`, `readonly: false`) на одиночной цепочке
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `Icons, States & Back Mode`.
- **Шаги**:
  1. Проверить элементы внутри `[data-testid="demo-breadcrumbs-back"]` и `[data-testid="demo-breadcrumbs-states"]`.
- **Ожидаемый результат**: Одиночный шаг `Back to Catalog` с `readonly: false` сохраняет тег `A` и левую стрелку `chevron_left`, промежуточный `Explicit Readonly` получает `<span aria-current="page">`, а `Disabled Item` получает `aria-disabled="true"`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Общие `itemAttrs` и динамическое добавление/удаление шагов `list`
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `Shared itemAttrs & Dynamic List Mutations`.
- **Шаги**:
  1. Нажать `[data-testid="demo-breadcrumbs-toggle-arrows"]`, затем `[data-testid="demo-breadcrumbs-add-step"]`, `[data-testid="demo-breadcrumbs-remove-step"]`, `[data-testid="demo-breadcrumbs-reset-trail"]`.
- **Ожидаемый результат**: Стрелки всех шагов меняются на `arrow_forward` через `itemAttrs`; при добавлении шага прежний последний шаг становится активной ссылкой `<a>`, а новый последний — `<span aria-current="page">`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

#### [TC-INT-005] Жизненный цикл: условное монтирование и размонтирование (`v-if`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `Lifecycle & Conditional Mounting (v-if)`.
- **Шаги**:
  1. Нажать `[data-testid="demo-breadcrumbs-mount-toggle"]` дважды.
- **Ожидаемый результат**: `<nav>` удаляется и повторно монтируется в DOM без ошибок.
- **Тип доказательства**: `Console/Log`

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Пустые входы (`[]`, без `list`), числовые значения (`0`, `-5`, `2.5`) и геометрия
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыта группа `Boundary, Edge Cases & Narrow Container`.
- **Шаги**:
  1. Проверить `[data-testid="demo-breadcrumbs-empty-component"]`, `[data-testid="demo-breadcrumbs-empty-list"]` и `[data-testid="demo-breadcrumbs-boundary"]`.
- **Ожидаемый результат**: Пустые цепочки рендерят `<nav>` без ошибок; числа `0`, `-5`, `2.5` и `"A"` отображаются явно; пустая и пробельная метки не вызывают падения.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Unicode, эмодзи и безопасное экранирование XSS-строки
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыта группа `Boundary, Edge Cases & Narrow Container`.
- **Шаги**:
  1. Проверить последние элементы `[data-testid="demo-breadcrumbs-boundary"]`.
- **Ожидаемый результат**: Строка `Café & Résumé — 日本語 🚀` и строка `<img src=x onerror=alert(1)>` отображаются как безопасный текст без выполнения кода.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

#### [TC-BND-003] Длинные и неразрывные сегменты в узком контейнере (`max-width: 260px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыта группа `Boundary, Edge Cases & Narrow Container`.
- **Шаги**:
  1. Проверить перенос элементов внутри `[data-testid="demo-breadcrumbs-narrow"]`.
- **Ожидаемый результат**: Цепочка переносится по строкам за счёт `flex-wrap: wrap` и не вызывает переполнения страницы.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

### 2.4 Адаптивность (`RSP`)

#### [TC-RSP-001] Планшетный вьюпорт (`768×1024`) без переполнения
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность`
- **Предусловия**: Вьюпорт `768×1024`.
- **Шаги**:
  1. Проверить `flex-wrap: wrap` и отсутствие горизонтального скролла.
- **Ожидаемый результат**: `scrollWidth <= innerWidth`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Мобильный экран (`375×812` и `320×568`) без горизонтального переполнения
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность`
- **Предусловия**: Вьюпорт `375×812` и `320×568`.
- **Шаги**:
  1. Проверить перенос элементов цепочки и отсутствие горизонтального скролла.
- **Ожидаемый результат**: `scrollWidth <= innerWidth`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Проверка WAI-ARIA ориентира `<nav>` и атрибутов шагов
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность`
- **Предусловия**: Открыта страница `http://localhost:3000/component-breadcrumbs`.
- **Шаги**:
  1. Проверить тег `NAV`, `aria-label`, `aria-current="page"`, `aria-disabled="true"` и `role="link"` + `tabindex="0"`.
- **Ожидаемый результат**: Все цепочки рендерятся как `NAV` с осмысленным `aria-label`, интерактивные action-элементы доступны с клавиатуры.
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
