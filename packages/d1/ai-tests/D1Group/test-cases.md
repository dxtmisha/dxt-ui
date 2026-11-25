# Спецификация тест-кейсов: D1Group

- **Сущность**: `D1Group`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Group` (`packages/constructor/src/constructors/Group`, `packages/constructor/src/constructors/Block`, `packages/demo/src/pages/components/DemoGroupPage.vue`)
- **Целевой URL**: `http://localhost:3000/component-group`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `14`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Приоритеты | Область проверки |
| :--- | :--- | :--- | :--- | :--- |
| **Визуальное соответствие** | `VIS` | 3 | P0, P1 | Полная анатомия (`headline`, `header`, `description`, `default`) и иерархия по умолчанию (`div`, `h4`), все 6 слотов, составная интеграция с `D1Badge`, `D1Bleed`, `D1Alert` |
| **Интерактивность и функции** | `INT` | 4 | P0, P1 | Переключение `tag` и `tagHeader`, модификаторы иконки (`iconTurn`, `iconHide`, `iconDir`, `iconPalette`, `selected`) + объектная/`null` иконка + `captionDecorative` + `iconAttrs` + `headerAttrs`, каскадный контекст `area` (`group`), монтирование `v-if` |
| **Границы и крайние случаи** | `BND` | 3 | P1 | Пустой `<D1Group/>`, пробелы и группа без `.d1-group__body`, числовой `0` / `-42` / `99.95` / `-12.5`, одиночные символы, длинные неразрывные строки, Unicode/XSS, узкий `DemoBox` (`260px`) |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1 | Десктоп (`1440×900`), планшет (`768×1024`) и мобильный (`375×812` / `320×568`) |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `role="region"`, `labelId`, `descriptionId`, связь `aria-labelledby` (включая fallback `headerAttrs.labelId`) и `aria-describedby` с DOM `id`, фокус с клавиатуры |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие ошибок консоли и `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуальное соответствие (`VIS`)

#### [TC-VIS-001] Полная анатомия группы (`headline`, `header`, `description`, `default`) и иерархия по умолчанию (`div` и `h4`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуальное соответствие`
- **Предусловия**: Открыть `http://localhost:3000/component-group`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить `[data-testid="demo-group-full"]`.
  2. Убедиться, что корневой тег — `DIV`, а заголовок шапки — `H4`, и проверить отступы токенов (`d1-group`).
- **Ожидаемый результат**: Корректно отображаются `.d1-group__headline`, `.d1-group__header` (с иконкой, заголовком `h4` и подписью), `.d1-group__description` и основной контент без обрезания и наложений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Рендеринг слотовой группы без пропсов (`#headline`, `#label`, `#caption`, `#trailing`, `#description`, `#default`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуальное соответствие`
- **Предусловия**: Открыта группа `All Slots`.
- **Шаги**:
  1. Проверить `[data-testid="demo-group-slots"]`.
  2. Нажать кнопку `Edit` в слоте `#trailing` и проверить инкремент `actionClicks` в `DemoValue`.
- **Ожидаемый результат**: Все 6 слотов отображаются корректно, кнопка в `#trailing` реагирует на клик.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Составная интеграция с `D1Badge`, `D1Bleed` и `D1Alert`
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуальное соответствие`
- **Предусловия**: Открыта группа `Compound Integrations`.
- **Шаги**:
  1. Проверить отображение `D1Badge` в слоте `#trailing` и `D1Alert` внутри `D1Bleed` в основном слоте `[data-testid="demo-group-compound"]`.
- **Ожидаемый результат**: Все вложенные компоненты корректно выровнены и стилизованы без наложений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

---

### 2.2 Интерактивность и функции (`INT`)

#### [TC-INT-001] Реактивное переключение корневого `tag` и тега заголовка `tagHeader`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `Polymorphic Root Tag & Header Heading Level`.
- **Шаги**:
  1. Проверить начальные значения по умолчанию (`rootTag: "div"`, `headerTag: "h4"`).
  2. Переключить корневой тег на `section`, `article`, `aside`, `div` и `tagHeader` на `h1`, `h2`, `h3`, `h5`, `h6`, `h4`.
- **Ожидаемый результат**: `tagName` корня `[data-testid="demo-group-reactive-tags"]` и `#demo-group-custom-label-id` синхронно обновляются и соответствуют `DemoValue`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Модификаторы иконки (`iconTurn`, `iconHide`, `iconDir`, `iconPalette`, `selected`), `captionDecorative`, объект/`null`, RTL, `iconAttrs` и `headerAttrs`
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `Icons, States, Decorative Caption & headerAttrs`.
- **Шаги**:
  1. Нажать `Toggle Icon Turn`, `Toggle Icon Hide`, `Toggle Icon Dir`, `Toggle Icon Palette`, `Toggle Selected` и `Toggle Decorative Caption`.
  2. Проверить классы `.d1-group__header`, `.demo-group-header-extra`, `[data-group-icon="repo"]`, `.d1-icon--turn`, скрытие иконки, палитру и RTL-отражение в `[data-testid="demo-group-icon-rtl"]`, смену активной иконки (`star` <-> `favorite`) в `[data-testid="demo-group-icon-object"]`, режим `captionDecorative` и отсутствие иконки в `[data-testid="demo-group-icon-null"]`.
- **Ожидаемый результат**: Все состояния иконки и декоративной подписи управляются реактивно, `iconAttrs` и `headerAttrs` неразрушающе объединяются со свойствами шапки.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Каскадный контекст `area` (`#header` в шапке и `#group`/`#compact` в теле)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `Cascading Area Context`.
- **Шаги**:
  1. Убедиться, что по умолчанию в `[data-testid="demo-group-trailing-area"]` активен `#header`, а в `[data-testid="demo-group-body-area"]` — `#group`.
  2. Переключить `area = compact` и обратно `area = group`.
- **Ожидаемый результат**: В `#trailing` сохраняется контекст `#header`, а в основном слоте реактивно переключается `#compact` / `#group`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Условное монтирование и размонтирование (`v-if`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функции`
- **Предусловия**: Открыта группа `SSR & Lifecycle`.
- **Шаги**:
  1. Нажать `Unmount Group` и проверить удаление `[data-testid="demo-group-lifecycle"]` из DOM и значение `Mounted: false`.
  2. Нажать `Mount Group` и убедиться в корректном восстановлении компонента.
- **Ожидаемый результат**: Монтирование и размонтирование проходят без ошибок и предупреждений.
- **Тип доказательства**: `Console/Log`

---

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Отсутствие `.d1-group__body` при пустой/пробельной шапке и пустом `<D1Group/>`
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыта группа `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить отсутствие `.d1-group__body` в `[data-testid="demo-group-body-only"]` и `[data-testid="demo-group-whitespace"]`, а также наличие класса `.demo-group-custom`.
  2. Проверить рендеринг пустого `[data-testid="demo-group-empty"]` без ошибок.
- **Ожидаемый результат**: Обёртка `.d1-group__body` не создаётся для пустых и пробельных пропсов; пустой компонент безопасен.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Поддержка числового `0`, отрицательных/дробных чисел и одиночных символов
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыта группа `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить вывод `"0"` во всех 4 зонах `[data-testid="demo-group-zero"]`.
  2. Проверить отображение `-42`, `"A"`, `99.95`, `-12.5` в `[data-testid="demo-group-numeric"]` и ненулевую геометрию всех заполненных `.d1-group`.
- **Ожидаемый результат**: Числовые (`0`, отрицательные, дробные) и однобуквенные значения отображаются корректно.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-003] Длинные неразрывные строки, Unicode, экранирование XSS и узкий контейнер `.demo-group-page__narrow` (`260px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыта группа `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить перенос длинной неразрывной строки (`SuperLongUnbroken...`) и отображение `Unicode • Tiếng Việt • Кириллица 🚀` в `[data-testid="demo-group-unicode-xss"]`.
  2. Проверить экранирование `<script>alert('xss')</script>` и `<img src=x onerror=alert(1)>`, а также перенос текста в узком контейнере `.demo-group-page__narrow` (`max-width: 260px`) с `[data-testid="demo-group-narrow"]`.
- **Ожидаемый результат**: Текст корректно переносится в узком контейнере без горизонтального переполнения, XSS-строки отображаются как текст и не исполняются.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

---

### 2.4 Адаптивность (`RSP`)

#### [TC-RSP-001] Планшетный вьюпорт (`768×1024`) без переполнения
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность`
- **Предусловия**: Вьюпорт `768×1024`.
- **Шаги**:
  1. Проверить компоновку всех секций `D1Group` и отсутствие горизонтального скролла.
- **Ожидаемый результат**: `scrollWidth <= innerWidth`, элементы шапки и описания корректно перестраиваются.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Мобильный экран (`375×812` и `320×568`) без горизонтального переполнения
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность`
- **Предусловия**: Вьюпорт `375×812` и `320×568`.
- **Шаги**:
  1. Проверить перенос текста, длинных заголовков и отсутствие горизонтального скролла на обоих мобильных разрешениях.
- **Ожидаемый результат**: `scrollWidth <= innerWidth`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

---

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Сквозная проверка `role="region"`, `labelId`, `descriptionId`, `aria-labelledby`, `aria-describedby` и порядка фокуса
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность`
- **Предусловия**: Открыта страница `http://localhost:3000/component-group`.
- **Шаги**:
  1. Проверить `[data-testid="demo-group-a11y"]`: `role="region"`, `aria-labelledby="demo-group-a11y-label"`, `aria-describedby="demo-group-a11y-desc"` и их соответствие реальным DOM-узлам по `id`.
  2. Проверить `[data-testid="demo-group-a11y-header-attrs"]`: fallback `aria-labelledby="demo-group-header-attrs-id"` из `headerAttrs.labelId`.
  3. Проверить отсутствие лишних ARIA-атрибутов на `[data-testid="demo-group-body-only"]` и последовательность перехода по `Tab` между кнопками `Header Action` и `Body Action`.
- **Ожидаемый результат**: Все ARIA-ссылки указывают на существующие элементы заголовка и описания; фокус перемещается последовательно.
- **Тип доказательства**: `Console/Log`

---

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Чистота консоли браузера и отсутствие `[Vue warn]`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль и рантайм`
- **Предусловия**: Все сценарии выполнены.
- **Шаги**:
  1. Проверить `consoleErrors`, `vueWarnings`, `pageErrors`.
- **Ожидаемый результат**: `[]`, `[]`, `[]`.
- **Тип доказательства**: `Console/Log`
