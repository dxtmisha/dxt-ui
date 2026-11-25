# Спецификация тест-кейсов: `D1Radio`

- **Сущность**: `D1Radio` (`Radio`)
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Radio` (конструктор: `packages/constructor/src/constructors/Radio`)
- **Целевой URL**: `http://localhost:3000/component-radio`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `19`

---

## 1. Матрица покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 4 | P0, P1 | Базовый рендеринг, `required`, описания и сообщения (`helperMessage`, `warning`, `warningMessage`, `validationMessage`, `fieldMessageAttrs`), макет (`block`/`itemCenter`/все 5 `container`/все 6 `adaptive`), состояния (`disabled`/`readonly`/`focus`/`indeterminate`/`loading`/`isSkeleton`), все 24 `palette`, иконки (`iconCheckbox`, `iconIndeterminate`, `null`) и слоты |
| **Интерактив и функциональность** | `INT` | 6 | P0, P1 | Переключение `v-model`, группа `v-model:selected` / `v-model:modelSelected` + `valueVariant`, динамические переключатели состояний, блокировка в `disabled`/`readonly`/`loading`, методы `expose` (`setValue`, `clear`, `isChanged`, `checkValidity`, `getValidationMessage`), интеграция с `<form>` (`submit`/`reset`) |
| **Границы и крайние случаи** | `BND` | 4 | P1, P2 | Числовой `0`, `-42`, `3.14` в `label`/`description`/`valueVariant`, пустые/пробельные строки, `hasHtmlCode` и `forceShowMessage`, многоязычие и XSS, длинный и неразрывный текст в узком контейнере `240px` |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1, P2 | Планшет (`768×1024`) и мобильный (`375×812`, `320×568`), переключение `adaptive="rightSm"` и отсутствие горизонтального переполнения |
| **Доступность (A11y)** | `A11Y` | 2 | P1, P2 | `aria-labelledby`, `aria-describedby`, явные `labelId`/`descriptionId`/`helperId`, `tabindex`, `inputAttrs`, `aria-invalid`, `aria-readonly`, клавиатурная навигация (`Tab`, `Space`, `Arrow`) |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Все события (`update:modelValue`, `update:value`, `update:selected`, `update:modelSelected`, `input`, `inputLite`, `change`, `changeLite`, `focus`, `blur`), жизненный цикл `v-if`, `0` ошибок консоли и `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовые состояния, группа `Basic Group`, `required`, описание и сообщения (`helperMessage`, `warningMessage`, `validationMessage`, `fieldMessageAttrs`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`, светлая тема.
- **Шаги теста**:
  1. Прокрутить к группам `Basic & v-model Controls`, `Basic Group (v-model:selected & v-model:modelSelected)` и `Appearances & Validation`.
  2. Проверить визуальное состояние выбранной и невыбранной радиокнопки, `required` (красная `*` после метки), `description`, `helperMessage`, `warning` + `warningMessage`, `validationMessage` и `fieldMessageAttrs`.
- **Ожидаемый результат**: Все варианты отображаются корректно без смещений; выбранная радиокнопка показывает внутреннюю точку (`radio_button_unchecked`), `required` добавляет `*`, `warningMessage` отображается цветом предупреждения, `validationMessage` отображается цветом ошибки.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Макет и адаптивные модификаторы (`block`, `itemCenter`, все 5 `container`, все 6 `adaptive`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группам `Layout & Container (All 5)` и `Adaptive (All 6)`.
  2. Проверить ширину элементов `block` vs `:block="false"`, выравнивание `itemCenter` vs `:itemCenter="false"` при многострочном описании, все 5 вариантов `container` (`rightSm`..`right2xl`) и все 6 вариантов `adaptive` (`rightAlways`..`right2xl`).
- **Ожидаемый результат**: `block` занимает всю ширину, `:block="false"` — ширину контента; при `adaptive="rightAlways"` индикатор радиокнопки располагается справа (`order: 4`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Состояния `disabled`, `readonly`, `focus`, `indeterminate`, `loading` и `isSkeleton`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группам `States & Interactive Toggles` и `Skeleton`.
  2. Проверить классы `.d1-radio--disabled`, `.d1-radio--focus`, состояние `indeterminate`, наличие `.d1-progress` при `loading` (`boolean` и объект) и `.d1-skeleton__text` / `.d1-skeleton__background` при `isSkeleton`.
- **Ожидаемый результат**: `disabled` снижает непрозрачность, `focus` подсвечивает индикатор, `indeterminate` отображает иконку `remove`, `loading` отображает спиннер и скрывает иконку, `isSkeleton` применяет скелетон-классы без дублирования DOM.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Все 24 палитры (`palette`), кастомные иконки (`iconCheckbox`, `iconIndeterminate`, `null`) и слоты (`#default`, `#description`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группам `Palettes (All 24)`, `Icons` и `Slots`.
  2. Проверить применение всех 24 классов `d1-palette--*`, кастомные иконки `iconCheckbox` (строкой/объектом/`null`) и `iconIndeterminate`, а также рендеринг `<strong>Custom Label Slot</strong>` и `<em>Custom Description Slot</em>`.
- **Ожидаемый результат**: Цвета всех 24 палитр применяются к выбранным радиокнопкам, кастомные иконки рендерятся корректно, `null` скрывает иконку, слоты отображаются с HTML-тегами.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

### 2.2 Интерактивность и управление состоянием (`INT`)

#### [TC-INT-001] Автономная двусторонняя привязка `v-model` и кнопки мутации
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти `Default standalone` в группе `Basic & v-model Controls` и связанный `DemoValue`.
  2. Кликнуть по радиокнопке, проверить `DemoValue` (`false` -> `true`) и `input.checked === true`, затем нажать `Set False` и `Set True`.
- **Ожидаемый результат**: Значение `v-model` и состояние `input.checked` синхронно обновляются при клике и программных действиях.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Синхронизация группы `v-model:selected` и `v-model:modelSelected` с `valueVariant`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Basic Group (v-model:selected & v-model:modelSelected)`.
  2. Проверить начальный выбор `Space Exploration` (`selected === 'space'`), кликнуть `Ocean Exploration` и проверить переключение отметки и `DemoValue` (`"ocean"`).
  3. Проверить кнопки `Select Space`, `Select Ocean`, `Select Forest` и переключение пары `ModelSelected Alpha` / `ModelSelected Beta`.
- **Ожидаемый результат**: Выбор в группе синхронизирует модель и автоматически снимает отметку с предыдущего варианта.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Блокировка интерактивности в режимах `disabled`, `readonly` и `loading`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Blocked & Guarded Actions`.
  2. Попытаться кликнуть по `Blocked Disabled`, `Blocked Readonly` и `Blocked Loading`.
  3. Проверить значение `Blocked Trigger Count` и свойства `input.disabled`, `input.readOnly`, `aria-readonly`.
- **Ожидаемый результат**: Счётчик событий остаётся `0`, состояние `input.checked` не изменяется.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Динамическое переключение состояний через локальные кнопки
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. В группе `States & Interactive Toggles` нажать по очереди `Toggle Skeleton`, `Toggle Checked`, `Toggle Disabled`, `Toggle Readonly`, `Toggle Loading`, `Toggle Indeterminate`.
  2. Проверить обновление DOM-классов на `Dynamic Target Radio` и значений в `DemoValue`.
- **Ожидаемый результат**: Все состояния переключаются корректно в реальном времени без рассинхронизации.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-005] Программное управление через `expose` (`setValue`, `clear`, `isChanged`, `checkValidity`, `getValidationMessage`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Expose & Validation`.
  2. Нажать `Check Validity` (ожидается `valid: false` и сообщение из `validationCode`), затем `Set True` (`value: true, changed: true, valid: true`), затем `Set False`, затем `Clear` (`value: undefined, valid: false`).
- **Ожидаемый результат**: `DemoValue` точно отражает возвращаемые значения всех методов `expose`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-005.png`)

#### [TC-INT-006] Интеграция с нативной `<form>` (`submit` и `reset`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Form Integration`.
  2. Попытаться отправить форму без выбора (проверить `required`-валидацию), затем выбрать `Express Delivery` и нажать `Submit Form`.
  3. Нажать `Reset Form` и проверить сброс состояния и статуса формы.
- **Ожидаемый результат**: Форма валидирует обязательный выбор, отправляет выбранное значение `express` и сбрасывается при нажатии `Reset Form`.
- **Тип доказательства**: `Console/Log`

### 2.3 Граничные случаи (`BND`)

#### [TC-BND-001] Числовые границы (`0`, `-42`, `3.14` в `label`, `description`, `valueVariant`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. В группе `Boundary & Edge Cases` найти радиокнопку с `:label="0"`, `:description="0"`, `:value-variant="0"`, а также `-42` и `3.14`.
  2. Проверить отображение `"0"`, `"-42"`, `"3.14"` и `input.checked === true` для выбранного `"0"`.
- **Ожидаемый результат**: Числовой `0` отображается корректно в метке, описании и `valueVariant`, не отбрасываясь как falsy.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-002] Пустые/пробельные метки, `hasHtmlCode`, `forceShowMessage`, многоязычие и XSS
- **Приоритет**: `P2 (Medium)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить радиокнопки с `label=""`, `label="   "`, `Tiếng Việt / Кириллица / 🚀 & <>` и `<img src=x onerror=alert(1)>`.
  2. Проверить `<strong>` в `hasHtmlCode` и видимость сообщения в `Disabled with forceShowMessage`.
- **Ожидаемый результат**: XSS-строки экранированы как текст, `<strong>` рендерится только при `hasHtmlCode`, `forceShowMessage` показывает сообщение при `disabled`.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-003] Длинный и неразрывный текст в узком контейнере (`max-width: 240px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить радиокнопки с длинным многопредложным текстом и неразрывной строкой `AAAA...` внутри `.demo-radio-page__narrow` (`max-width: 240px`).
  2. Проверить `scrollWidth <= clientWidth` у всех экземпляров `.d1-radio` на странице.
- **Ожидаемый результат**: Текст корректно переносится (`overflow-wrap: anywhere`), горизонтальное переполнение отсутствует (`overflowCount === 0`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

### 2.4 Адаптивность (`RSP`)

#### [TC-RSP-001] Отображение на планшете (`768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Установить вьюпорт `768×1024`.
- **Шаги теста**:
  1. Проверить `document.documentElement.scrollWidth <= window.innerWidth`.
  2. Оценить геометрию элементов `D1Radio` на планшетном вьюпорте.
- **Ожидаемый результат**: Горизонтальное переполнение отсутствует; все элементы корректно переносятся и выравниваются.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Отображение на мобильном экране (`375×812` и `320×568`) и срабатывание `adaptive="rightSm"`
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Установить вьюпорты `375×812` и `320×568`.
- **Шаги теста**:
  1. Проверить отсутствие горизонтального переполнения на `375×812` и `320×568`.
  2. Проверить вычисленный CSS `order` у `.d1-radio__item` в элементе `Adaptive (rightSm)`.
- **Ожидаемый результат**: Горизонтальное переполнение отсутствует; на мобильной ширине `adaptive="rightSm"` переносит индикатор радиокнопки вправо (`order: 4`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантика HTML, WAI-ARIA атрибуты и явные идентификаторы (`labelId`, `descriptionId`, `helperId`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Accessibility (ARIA & Attributes)`.
  2. Проверить привязку `aria-labelledby` и `aria-describedby` к явным ID (`demo-radio-label-id`, `demo-radio-desc-id`, `demo-radio-helper-id`), а также `aria-label` через `inputAttrs`, `aria-hidden="true"` у `.d1-radio__item`, `aria-invalid="true"` при ошибке и `aria-readonly="true"` при `readonly`.
- **Ожидаемый результат**: Все ARIA-атрибуты валидны и корректно связывают элемент управления с меткой, описанием и состоянием ошибки.
- **Тип доказательства**: `Console/Log`

#### [TC-A11Y-002] Клавиатурная навигация (`Tab`, `Space` и стрелки в группе)
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Сфокусировать радиокнопку в группе `Basic Group` клавишей `Tab`, нажать `Space` и `ArrowDown`.
  2. Проверить изменение `checked` и синхронизацию `DemoValue`.
- **Ожидаемый результат**: Нажатие `Space` и стрелок на сфокусированном `<input type="radio">` переключает выбор и обновляет модель.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Все события, жизненный цикл (`v-if`) и чистота консоли
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, очистить консоль.
- **Шаги теста**:
  1. Сфокусировать, кликнуть и снять фокус с `Event Tracker (v-model)` в группе `Events`, проверив `Event Name` и `Event Payload` (`focus`, `input`, `inputLite`, `change`, `changeLite`, `update:modelValue`, `update:value`, `update:selected`, `update:modelSelected`, `blur`).
  2. Переключить кнопку `Toggle Mount` в группе `Lifecycle & Conditional Mount`.
  3. Проверить консоль на наличие ошибок и предупреждений.
- **Ожидаемый результат**: События и полезные нагрузки (`detail`) фиксируются без сбоев; `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`.
- **Тип доказательства**: `Console/Log`
