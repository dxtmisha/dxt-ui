# Спецификация тест-кейсов: D1FieldLabel

- **Сущность**: `D1FieldLabel`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/FieldLabel`, `packages/constructor/src/constructors/FieldLabel`
- **Целевой URL**: `http://localhost:3000/component-field-label`
- **Справочные материалы**: `None`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `13`

---

## 1. Матрица покрытия

| Категория | Код | Количество | Приоритеты | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 3 | P0, P1 | Базовый рендер (`label`, `required`, числовой `label`), счётчики (`counterShow`, `counterTemplate`, `fieldCounterAttrs`), состояния `loading` и `isSkeleton` |
| **Интерактивность и функциональность** | `INT` | 4 | P0, P1 | Интерактивный Playground (`label`, `required`, `loading`, `isSkeleton`, `counterShow`, инкремент, слот `#label`), переход фокуса по `for`, сохранение `Progress`, жизненный цикл (`Toggle Mount`) |
| **Граничные значения и краевые случаи** | `BND` | 3 | P1 | Пустой/пробельный/`undefined` `label` (размонтирование корня), числа `0`/`-42`/`3.14`/`"A"`, длинный/неразрывный текст в узком контейнере (`240px`), мультиязычность (VN/RU/Emoji/RTL) и XSS-экранирование |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Вьюпорты `1440×900`, `768×1024`, `375×812`, `320×568` — перенос строки, выравнивание счётчика справа, отсутствие переполнения |
| **Доступность (A11y)** | `A11Y` | 1 | P0 | Семантический тег `<label>`, атрибуты `for`, `id` (`labelId`, `counterId`), `aria-hidden="true"` на звёздочке `.d1-fieldLabel__required`, связка `aria-labelledby` / `aria-describedby` / `aria-required` |
| **Консоль и стабильность рантайма** | `LOG` | 1 | P0 | Отсутствие ошибок консоли, `pageerror` и `[Vue warn]` при загрузке страницы и всех интерактивных переключениях |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендер текстового/числового `label`, `required` и связки `for`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-field-label` во вьюпорте `1440×900`, тема `Light`.
- **Шаги**:
  1. Найти секцию `Basic Usage & For Binding`.
  2. Проверить рендер корневых элементов `<label class="d1-fieldLabel">`, дочернего `<span class="d1-fieldLabel__label">` и `<span class="d1-fieldLabel__required">*</span>`.
  3. Измерить `getBoundingClientRect()` и `getComputedStyle()` (`display: flex`, шрифт, цвет звёздочки).
- **Ожидаемый результат**: Все 4 варианта отрендерены корректно без обрезания и наложения: `"Username"`, `"42"`, `"Email Address *"` и `"Click to focus input *"` с полем ввода ниже.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Варианты счётчика символов и слота `#label`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-field-label`, вьюпорт `1440×900`.
- **Шаги**:
  1. Найти секции `Counter & Limits` и `Slots`.
  2. Проверить наличие счётчиков при `counterShow=true` (`42 / 100`, `0 / 50`, `92 of 100 chars`, `12 / 30` с классом `demo-field-label-page__counter-custom`, счётчик без текста метки `15 / 80`) и отсутствие счётчика при `counterShow=false`.
  3. Проверить совместное отображение `label` и слота `#label` со звёздочкой и счётчиком.
- **Ожидаемый результат**: Метка занимает гибкую ширину (`flex-grow`), счётчик выровнен по правому краю (`justify-content: flex-end`), при `counterShow=false` элемент счётчика не рендерится, слот `#label` рендерится корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Состояния `loading` (boolean / object) и `isSkeleton`
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-field-label`, вьюпорт `1440×900`.
- **Шаги**:
  1. Найти секцию `Loading & Skeleton`.
  2. Проверить рендер индикатора `.d1-progress` при `loading` (boolean и object) и совместный рендер `loading + required + counterShow`.
  3. Проверить наличие класса `d1-skeleton__textVariant` на корневом `<label>` и `__label` при `is-skeleton` (внутри `<D1Skeleton :active="true">` и автономно).
- **Ожидаемый результат**: Индикатор загрузки выровнен без перекрытия текста/счётчика, скелетон корректно применяет класс `d1-skeleton__textVariant`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Интерактивный Playground: переключение `label`, `required`, `counterShow` и слота `#label`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть секцию `Interactive Controls` на `http://localhost:3000/component-field-label`.
- **Шаги**:
  1. В блоке `[data-testid="interactive-preview"]` нажать последовательно `Counter +10`, `Toggle Required`, `Toggle Counter`, `Toggle Slot`, затем `Toggle Label`.
  2. Проверить состояние DOM и JSON-сводку после переключений, включая полное размонтирование `<label>` при пустом `label` и выключенных `counterShow`/`loading` без слота.
- **Ожидаемый результат**: DOM мгновенно синхронизируется с кнопками, звёздочка и счётчик появляются/исчезают, слот подменяет текст, а при одновременном выключении всех источников контента корневой `<label>` размонтируется.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Интерактивный Playground: переключение `loading` и `isSkeleton`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Секция `Interactive Controls`, начальное состояние восстановлено (`label="Profile Name"`, `counterShow=true`).
- **Шаги**:
  1. Нажать `Toggle Loading` (включить) — проверить появление индикатора прогресса в DOM.
  2. Нажать `Toggle Loading` повторно (выключить) — проверить сохранение смонтированного узла `.d1-progress` со скрытым состоянием (`visible=false`) без пересоздания.
  3. Нажать `Toggle Skeleton` — проверить добавление/снятие `d1-skeleton__textVariant`.
- **Ожидаемый результат**: Состояния `loading` и `isSkeleton` корректно переключаются в обе стороны без ошибок и артефактов верстки.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Фокусировка связанного `<input>` при клике на `<label for="...">`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти `<label for="demo-field-label-target">` в секции `Basic Usage & For Binding`.
- **Шаги**:
  1. Кликнуть по элементу `<label for="demo-field-label-target">`.
  2. Проверить `document.activeElement.id`.
- **Ожидаемый результат**: Активным элементом (`document.activeElement`) становится `input#demo-field-label-target`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Условное монтирование и размонтирование (`Lifecycle & Conditional Mount`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти секцию `Lifecycle & Conditional Mount`.
- **Шаги**:
  1. Нажать кнопку `Toggle Mount` (размонтировать) — убедиться, что `D1FieldLabel` с `loading` и счётчиком удалён из DOM и `Mounted: false`.
  2. Нажать кнопку `Toggle Mount` повторно (смонтировать) — убедиться, что компонент корректно восстанавливается.
- **Ожидаемый результат**: Монтирование и размонтирование через `v-if` выполняются без утечек и ошибок.
- **Тип доказательства**: `Console/Log`

### 2.3 Граничные значения и краевые случаи (`BND`)

#### [TC-BND-001] Пустой, пробельный и `undefined` `label`, а также числовые границы (`0`, `-42`, `3.14`, `"A"`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundary & Edge Cases`
- **Предусловия**: Найти секцию `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить наличие `.d1-fieldLabel` внутри `[data-testid="empty-probe"]`, `[data-testid="whitespace-probe"]` и `[data-testid="undefined-probe"]`.
  2. Проверить рендер числовых меток `:label="0"`, `:label="-42"`, `:label="3.14"` и односимвольной `"A"`.
- **Ожидаемый результат**: Для пустых/`undefined`/пробельных меток без счётчика корневой `.d1-fieldLabel` отсутствует в DOM (`null`), а число `0` (и `-42`, `3.14`, `"A"`) отображается явно.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-002] Длинный и неразрывный текст в узком контейнере (`240px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundary & Edge Cases`
- **Предусловия**: Найти блоки `.demo-field-label-page__narrow` (`max-width: 240px`) в секции `Boundary & Edge Cases`.
- **Шаги**:
  1. Измерить `getBoundingClientRect()` у `.d1-fieldLabel`, `__label` и `.d1-fieldCounter` внутри ширины `240px`.
  2. Проверить перенос слов и неразрывной строки `AAAA...` с `overflow-wrap: anywhere` без перекрытия счётчика.
- **Ожидаемый результат**: Многословный и неразрывный текст переносятся корректно внутри `240px` (`scrollWidth <= clientWidth`), не перекрывая счётчик.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

#### [TC-BND-003] Мультиязычный ввод (VN/RU/Emoji), RTL (`dir="rtl"`) и XSS-экранирование
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundary & Edge Cases`
- **Предусловия**: Найти соответствующие карточки в секции `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить корректный рендер диакритики и кириллицы (`"Tiếng Việt / Кириллица / 🚀🔥✨"`).
  2. Проверить зеркальный flex-поток в контейнере `dir="rtl"` (`"اسم المستخدم المطلوب"`).
  3. Убедиться, что строка `"<img src=x onerror=alert(1)>"` отрендерена как текст, без создания тега `<img>`.
- **Ожидаемый результат**: Все символы отображаются без искажений, RTL располагает метку справа и счётчик слева, XSS-полезная нагрузка полностью экранирована.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Проверка адаптивности на вьюпортах `1440×900`, `768×1024`, `375×812` и `320×568`
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Открыть `http://localhost:3000/component-field-label`.
- **Шаги**:
  1. Последовательно переключить размер окна браузера на `1440×900`, `768×1024`, `375×812` и `320×568`.
  2. Проверить отсутствие обрезания и наложения внутри `.d1-fieldLabel`.
  3. Сделать скриншот мобильного вьюпорта `375×812`.
- **Ожидаемый результат**: Компонент корректно подстраивается под ширину контейнера, текст метки и счётчик сохраняют читаемость на всех разрешениях.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантика `<label>`, `for`, `id`, `aria-hidden` на звёздочке и `aria-labelledby`/`aria-describedby`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-field-label`.
- **Шаги**:
  1. Проверить тег корневого элемента (`LABEL`), наличие `for="demo-field-label-target"` и `id="demo-field-label-heading"` в базовом блоке, а также `demo-field-label-a11y-heading` / `demo-field-label-a11y-counter` в секции `Accessibility (ARIA & Semantics)`.
  2. Проверить `aria-hidden="true"` у всех `.d1-fieldLabel__required`.
  3. Проверить `id="demo-field-label-counter-custom"` у счётчика в карточке `Custom Template & Threshold`.
- **Ожидаемый результат**: Все ARIA- и HTML-атрибуты соответствуют спецификации, декоративный `*` скрыт от скринридеров.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и стабильность рантайма (`LOG`)

#### [TC-LOG-001] Отсутствие ошибок консоли, исключений `pageerror` и `[Vue warn]`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Подключить перехватчики `console` и `pageerror` до перехода на `http://localhost:3000/component-field-label`.
- **Шаги**:
  1. Загрузить страницу и пройти все интерактивные клики и смену вьюпортов.
  2. Собрать массивы `consoleErrors`, `vueWarnings` и `pageErrors`.
- **Ожидаемый результат**: `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`.
- **Тип доказательства**: `Console/Log`
