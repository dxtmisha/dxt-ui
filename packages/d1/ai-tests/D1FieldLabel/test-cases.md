# Спецификация тест-кейсов: D1FieldLabel

- **Сущность**: `D1FieldLabel`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/FieldLabel`, `packages/constructor/src/constructors/FieldLabel`
- **Целевой URL**: `http://localhost:3000/component-field-label`
- **Справочные материалы**: `None`
- **Последняя проверка / обновление**: `2026-11-16`
- **Всего тест-кейсов**: `12`

---

## 1. Матрица покрытия

| Категория | Код | Количество | Приоритеты | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 3 | P0, P1 | Базовый рендер (`label`, `required`, числовой `label`), счётчики (`counterShow`, `counterTemplate`, `fieldCounterAttrs`), состояния `loading` и `isSkeleton` |
| **Интерактивность и функциональность** | `INT` | 3 | P0, P1 | Интерактивный Playground (переключение `label`, `required`, `loading`, `isSkeleton`, `counterShow`, инкремент, слот `#label`), переход фокуса по `for`, сохранение `Progress` после первой загрузки |
| **Граничные значения и краевые случаи** | `BND` | 3 | P1 | Пустой/отсутствующий `label` (размонтирование корня), длинный/неразрывный текст в узком контейнере (`280px`), мультиязычность (VN/RU/Emoji/RTL) и XSS-экранирование |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Вьюпорты `1440×900`, `768×1024`, `375×812`, `320×568` — перенос строки, выравнивание счётчика справа, отсутствие переполнения |
| **Доступность (A11y)** | `A11Y` | 1 | P0 | Семантический тег `<label>`, атрибуты `for`, `id` (`labelId`, `counterId`), `aria-hidden="true"` на звёздочке `.d1-fieldLabel__required`, фокус целевого `<input>` при клике |
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
  2. Проверить наличие счётчиков при `counterShow=true` (`42 / 100`, `0 / 50`, `92 of 100 chars`, `12 / 30` с классом `demo-field-label__counter-custom`, счётчик без текста метки `15 / 80`) и отсутствие счётчика при `counterShow=false`.
  3. Проверить приоритет слота `#label` над пропом `label` и совместное отображение со звёздочкой и счётчиком.
- **Ожидаемый результат**: Метка занимает гибкую ширину (`flex-grow`), счётчик выровнен по правому краю (`justify-content: flex-end`), при `counterShow=false` элемент счётчика не рендерится, слот `#label` перекрывает текстовый проп.
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

### 2.3 Граничные значения и краевые случаи (`BND`)

#### [TC-BND-001] Пустой `label` при отсутствии счётчика и загрузки (`[data-testid="empty-probe"]`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundary & Edge Cases`
- **Предусловия**: Найти `[data-testid="empty-probe"]` в секции `Boundary & Multilingual`.
- **Шаги**:
  1. Проверить количество потомков и наличие `.d1-fieldLabel` внутри `[data-testid="empty-probe"]`.
- **Ожидаемый результат**: Корневой элемент `.d1-fieldLabel` отсутствует в DOM (`null`), высота обёртки равна `0px`.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-002] Длинный и неразрывный текст в ограниченном контейнере (`280px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundary & Edge Cases`
- **Предусловия**: Найти блоки `.demo-field-label__constrained` в секции `Boundary & Multilingual`.
- **Шаги**:
  1. Измерить `getBoundingClientRect()` у `.d1-fieldLabel`, `__label` и `.d1-fieldCounter` внутри ширины `280px`.
  2. Проверить перенос слов, ширину счётчика и наличие/величину горизонтального переполнения.
- **Ожидаемый результат**: Многословный текст переносится корректно, не перекрывая счётчик; зафиксировать поведение неразрывной строки без пробелов (`scrollWidth` vs `clientWidth`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

#### [TC-BND-003] Мультиязычный ввод (VN/RU/Emoji), RTL (`dir="rtl"`) и XSS-экранирование
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundary & Edge Cases`
- **Предусловия**: Найти соответствующие карточки в секции `Boundary & Multilingual`.
- **Шаги**:
  1. Проверить корректный рендер диакритики (`"Học tiếng Việt — Метка поля 🚀✨"`).
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
  2. Проверить отсутствие обрезания и наложения внутри `.d1-fieldLabel` (исключая специально ограниченную карточку с неразрывной строкой).
  3. Сделать скриншот мобильного вьюпорта `375×812`.
- **Ожидаемый результат**: Компонент корректно подстраивается под ширину контейнера, текст метки и счётчик сохраняют читаемость на всех разрешениях.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантика `<label>`, `for`, `id`, `aria-hidden` на звёздочке и `counterId`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-field-label`.
- **Шаги**:
  1. Проверить тег корневого элемента (`LABEL`), наличие `for="demo-field-label-target"` и `id="demo-field-label-heading"` на `.d1-fieldLabel__label`.
  2. Проверить `aria-hidden="true"` у всех `.d1-fieldLabel__required`.
  3. Проверить `id="demo-field-label-counter-custom"` у счётчика в карточке `Custom Template & Threshold`.
- **Ожидаемый результат**: Все ARIA- и HTML-атрибуты соответствуют спецификации, декоративный `*` скрыт от скринридеров.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и стабильность рантайма (`LOG`)

#### [TC-LOG-001] Отсутствие ошибок консоли, исключений `pageerror` и `[Vue warn]`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Подписаться на события `console` и `pageerror` до перехода на `http://localhost:3000/component-field-label`.
- **Шаги**:
  1. Загрузить страницу и пройти все интерактивные клики и смену вьюпортов.
  2. Собрать массивы `consoleErrors`, `vueWarnings` и `pageErrors`.
- **Ожидаемый результат**: `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`.
- **Тип доказательства**: `Console/Log`
