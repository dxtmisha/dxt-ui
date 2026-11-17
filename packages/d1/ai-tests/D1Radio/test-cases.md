# Спецификация тест-кейсов: `D1Radio`

- **Сущность**: `D1Radio` (`Radio`)
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Radio` (конструктор: `packages/constructor/src/constructors/Radio`)
- **Целевой URL**: `http://localhost:3000/component-radio`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-17`
- **Всего тест-кейсов**: `16`

---

## 1. Матрица покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 4 | P0, P1 | Базовый рендеринг, `required`, описания и сообщения, макет (`block`/`itemCenter`/`container`/`adaptive`), состояния (`disabled`/`readonly`/`focus`/`loading`/`isSkeleton`), палитры, иконки и слоты |
| **Интерактив и функциональность** | `INT` | 4 | P0, P1 | Переключение `v-model`, группа `v-model:selected` + `valueVariant`, блокировка в `disabled`/`readonly`, методы `expose` (`setValue`, `clear`, `checkValidity`) |
| **Границы и крайние случаи** | `BND` | 3 | P1, P2 | Числовой `0` в `label`, `description` и `valueVariant`, `hasHtmlCode` и `forceShowMessage`, проверка переполнения по всем элементам |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1, P2 | Планшет (`768×1024`) и мобильный (`375×812`, `320×568`), переключение `adaptive="rightSm"` и отсутствие горизонтального переполнения |
| **Доступность (A11y)** | `A11Y` | 2 | P1, P2 | `aria-labelledby`, `aria-describedby`, `aria-invalid`, `aria-readonly`, `aria-hidden="true"`, клавиатурная активация (`Tab`, `Space`) |
| **Консоль и рантайм** | `LOG` | 1 | P0 | События `input`/`inputLite`/`change`/`changeLite`, `0` ошибок консоли и `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовые состояния, группа `Basic Group`, `required`, описание и сообщения (`helperMessage`, `validationMessage`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`, светлая тема.
- **Шаги теста**:
  1. Прокрутить к группам `Basic`, `Basic Group` и `Appearances & Validation`.
  2. Проверить визуальное состояние выбранной и невыбранной радиокнопки, `required` (красная `*` после метки), `description`, `helperMessage` и `validationMessage`.
- **Ожидаемый результат**: Все варианты отображаются корректно без смещений; выбранная радиокнопка показывает внутреннюю точку (`radio_button_unchecked`), `required` добавляет `*`, `validationMessage` отображается цветом ошибки.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Макет и адаптивные модификаторы (`block`, `itemCenter`, `container`, `adaptive`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группам `Layout & Container` и `Adaptive`.
  2. Проверить ширину элементов `block` vs `:block="false"`, выравнивание `itemCenter` vs `:itemCenter="false"` при многострочном описании, `DemoBox container` и `adaptive="rightAlways"` (`order` элемента `.d1-radio__item`).
- **Ожидаемый результат**: `block` занимает всю ширину (`display: flex`), `:block="false"` — ширину контента; при `adaptive="rightAlways"` индикатор радиокнопки располагается справа (`order: 4`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Состояния `disabled`, `readonly`, `focus`, `loading` и `isSkeleton`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группам `States` и `Skeleton`.
  2. Проверить классы `.d1-radio--disabled`, `.d1-radio--focus`, наличие `.d1-progress` при `loading` (`boolean` и объект) и `.d1-skeleton__text` / `.d1-skeleton__background` при `isSkeleton`.
- **Ожидаемый результат**: `disabled` снижает непрозрачность, `focus` подсвечивает индикатор, `loading` отображает спиннер и скрывает иконку, `isSkeleton` применяет скелетон-классы без дублирования DOM.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Палитры (`palette`), кастомные иконки (`iconCheckbox`, `null`) и слоты (`#default`, `#description`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группам `Palettes`, `Icons` и `Slots`.
  2. Проверить применение `d1-palette--red`/`green`/`blue`, иконки строкой/объектом/`null` и рендеринг `<strong>Custom Label Slot</strong>` и `<em>Custom Description Slot</em>`.
- **Ожидаемый результат**: Цвета палитр применяются к выбранным радиокнопкам, кастомные иконки рендерятся корректно, `null` скрывает иконку, слоты отображаются с HTML-тегами.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

### 2.2 Интерактивность и управление состоянием (`INT`)

#### [TC-INT-001] Автономная двусторонняя привязка `v-model`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти первую радиокнопку `Default standalone` в группе `Basic` и связанный `DemoValue`.
  2. Кликнуть по радиокнопке, проверить изменение `DemoValue` (`false` -> `true`) и `input.checked === true`.
- **Ожидаемый результат**: Значение `v-model` и состояние `input.checked` синхронно обновляются до `true`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Синхронизация группы `v-model:selected` и `valueVariant`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Basic Group`.
  2. Проверить, что выбран вариант `Space Exploration` (`selected === 'space'`).
  3. Кликнуть по `Ocean Exploration` и проверить обновление `DemoValue` на `"ocean"` и переключение отметки с `Space Exploration` на `Ocean Exploration`.
- **Ожидаемый результат**: Выбор `Ocean Exploration` синхронизирует `selected` в `"ocean"` и автоматически снимает отметку с `Space Exploration`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Блокировка интерактивности в режимах `disabled` и `readonly`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Попытаться кликнуть по радиокнопкам `Disabled` и `Readonly` в группе `States`.
  2. Проверить свойства `input.checked`, `input.disabled`, `input.readOnly` и `aria-readonly`.
- **Ожидаемый результат**: Ни `Disabled`, ни `Readonly` не меняют `input.checked` при клике.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Программное управление через `expose` (`setValue`, `clear`, `checkValidity`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Expose & Validation`.
  2. Нажать `Check Validity` (ожидается `valid: false`), затем `Set True` (`value: true, valid: true`), затем `Set False` (`value: false, valid: false`), затем `Clear` (`value: undefined, valid: false`).
- **Ожидаемый результат**: `DemoValue` точно отражает результаты всех методов `expose`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

### 2.3 Граничные случаи (`BND`)

#### [TC-BND-001] Числовой ноль (`:label="0"`, `:description="0"`, `:value-variant="0"`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти третью радиокнопку в группе `Basic` с `:label="0"`, `:description="0"` и `:value-variant="0"`.
  2. Проверить отображение текста `"0"` в метке и описании, а также `input.checked === true` и `input.value === '0'`.
- **Ожидаемый результат**: Числовой `0` отображается корректно в метке, описании и `valueVariant`, без отбрасывания как falsy.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-002] HTML-сообщение (`hasHtmlCode`) и `forceShowMessage` при `disabled`
- **Приоритет**: `P2 (Medium)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить рендеринг HTML-тега `<strong>` в `HTML Helper Message` (`hasHtmlCode`).
  2. Проверить видимость сообщения в `Disabled with forceShowMessage`.
- **Ожидаемый результат**: `<strong>` рендерится как DOM-элемент, а `forceShowMessage` отображает вспомогательный текст даже при `disabled`.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-003] Проверка переполнения текста и выравнивания по всем элементам `D1Radio`
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить `scrollWidth <= clientWidth` у всех экземпляров `.d1-radio` на странице.
- **Ожидаемый результат**: Переполнение текста и выход дочерних элементов за границы отсутствуют (`overflowCount === 0`).
- **Тип доказательства**: `Console/Log`

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

#### [TC-A11Y-001] Семантика HTML и WAI-ARIA атрибуты
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить привязку `aria-labelledby` и `aria-describedby` к существующим ID метки и описания.
  2. Проверить `aria-hidden="true"` у `.d1-radio__item`, `aria-invalid="true"` при `validationMessage` и `aria-readonly="true"` при `readonly`.
- **Ожидаемый результат**: Все ARIA-атрибуты валидны и корректно связывают элемент управления с меткой, описанием и состоянием ошибки.
- **Тип доказательства**: `Console/Log`

#### [TC-A11Y-002] Клавиатурная навигация (`Tab` и `Space`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Сфокусировать радиокнопку в группе `Basic Group` и нажать `Space`.
  2. Проверить изменение `checked` и синхронизацию `DemoValue`.
- **Ожидаемый результат**: Нажатие `Space` на сфокусированном `<input type="radio">` выбирает вариант и обновляет модель.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Генерация событий (`input`, `inputLite`, `change`, `changeLite`) и чистота консоли
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Открыть `http://localhost:3000/component-radio`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Кликнуть по радиокнопке `Event Tracker` в группе `Events`.
  2. Проверить отображение имени события в `DemoValue` и список сообщений консоли / ошибок страницы.
- **Ожидаемый результат**: Зафиксирована генерация событий (`changeLite`), `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`.
- **Тип доказательства**: `Console/Log`
