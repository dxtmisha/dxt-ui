# Спецификация тест-кейсов: D1Mask

- **Сущность**: `D1Mask`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Mask` (`packages/constructor/src/constructors/Mask`, `packages/demo/src/pages/components/DemoMaskPage.vue`)
- **Целевой URL**: `http://localhost:3000/component-mask`
- **Справочные материалы**: `None`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `13`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 3 | P0, P1 | Базовый рендеринг, видимость (`visible`, `visiblePartly`), выравнивание (`align`, `dir` `ltr`/`rtl`), `special`, 13 типов дат/времени и числовые/валютные маски |
| **Интерактивность и функционал** | `INT` | 5 | P0, P1 | Ввод с клавиатуры и `Backspace`, валидация (`pattern` строка/функция, `check`), `fullOnly`, заблокированные состояния (`disabled`, `readonly`), интеграция с `<form>` (`submit`/`reset`/`checkValidity`), `expose` (`getValue`, `getValueBasic`, `setValue`, `clear`), жизненный цикл `v-if` |
| **Границы и крайние случаи** | `BND` | 2 | P1 | Числовой `value={0}`, скрытое поле `name`, `rubber`, `groupSave`, пустые/`"   "`/`undefined` значения, Unicode/вьетнамский/кириллица/Emoji, XSS, узкий контейнер `240px` и синхронизация `scrollLeft` |
| **Адаптивность и viewport** | `RSP` | 1 | P1 | Десктоп (`1440×900`), планшет (`768×1024`), мобильные (`375×812`, `320×568`) |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `aria-hidden="true"` на `.d1-mask__character`, `inputAttrs` (`aria-label`, `aria-describedby`, `inputMode`), фокус |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Все 11 событий (`focus`, `blur`, `keydown`, `keyup`, `beforeinput`, `input`, `inputLite`, `change`, `changeLite`, `paste`, `reset`) с payload, `0` ошибок и `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и токены (`VIS`)

#### [TC-VIS-001] Базовый рендеринг стандартной и мульти-шаблонной масок
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и токены`
- **Предусловия**: Открыть `http://localhost:3000/component-mask`, viewport `1440×900`, светлая тема.
- **Шаги теста**:
  1. Найти группу `Standard & Multi-Pattern Masks`.
  2. Проверить DOM и размеры `.d1-mask`, `.d1-mask__input`, `.d1-mask__character`, `.d1-mask__character__item`.
- **Ожидаемый результат**: Маска рендерится с ненулевой геометрией; пустая маска показывает плейсхолдеры `--placeholder`, заполненная — класс `--value` и символы `--standard`/`--special` без наложений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Видимость (`visible`, `visiblePartly`), выравнивание (`align`) и направление (`dir` `ltr`/`rtl`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и токены`
- **Предусловия**: Прокрутить к группе `Visibility, Alignment & Direction`.
- **Шаги теста**:
  1. Проверить модификаторы `.d1-mask--visible`, `.d1-mask--visiblePartly`, `.d1-mask--align--left|center|right`, `.d1-mask--dir--ltr|rtl` и `.d1-mask--end`.
  2. Сравнить вычисленные значения `opacity` и `text-align`.
- **Ожидаемый результат**: При `visible=false` плейсхолдер скрыт (`opacity: 0`), при `visiblePartly=true` видна часть маски, при `align`/`dir="ltr"`/`dir="rtl"` выравнивание и модификатор `--end` применяются корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Спецсимволы, типы дат/времени и числовые/валютные маски
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и токены`
- **Предусловия**: Прокрутить к группам `Special Characters, Rubber Groups & Matching`, `Date & Time Masks` и `Number & Currency Masks`.
- **Шаги теста**:
  1. Проверить отображение кастомных символов (`view="0"`, `specialGroups`), типов `date`/`datetime`/`hour-minute`, `number`/`number-format`/`currency` (включая `currencyHide`).
- **Ожидаемый результат**: Все 13 типов дат/времени и числовые/валютные маски отображаются с корректными разделителями и классами `--end` для форматированных чисел/валют.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

---

### 2.2 Интерактивность и функционал (`INT`)

#### [TC-INT-001] Ввод с клавиатуры, кнопки управления значением и `Backspace`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Группа `Standard & Multi-Pattern Masks`.
- **Шаги теста**:
  1. Сфокусировать `input[aria-label="Empty phone mask"]` и ввести цифры `900123`.
  2. Проверить отформатированное значение и классы `--special` / `--standard`, нажать `Backspace`.
  3. Нажать `Set Sample Phone` и `Clear Phone` для проверки программного обновления `Phone mask with value`.
- **Ожидаемый результат**: Литералы `+7 (`, `) `, `-` подставляются автоматически, `Backspace` удаляет символ без поломки маски, а кнопки синхронизируют значение маски.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Валидация (`pattern` строка и функция, `check`) и режим `fullOnly`
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Прокрутить к группе `Validation & Full-Only Mode`.
- **Шаги теста**:
  1. Проверить класс `.d1-mask__character__item--error` на маске с `pattern="[6-9]{3}"` и значением `123`, а также валидацию функционального `pattern` (`dynamicPattern`).
  2. Ввести 2 цифры в поле `fullOnly=true`, проверить пустоту `DemoValue`, затем довести до 4 цифр.
- **Ожидаемый результат**: Невалидные символы подсвечиваются классом `--error`, функциональный `pattern` работает, а `fullOnly` передаёт значение наружу только при полном заполнении маски.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Блокированные состояния (`disabled` и `readonly`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Прокрутить к группе `Blocked States (Disabled & Readonly)`.
- **Шаги теста**:
  1. Попытаться сфокусироваться и ввести символы в `input[aria-label="Disabled mask input"]` (`disabled`).
  2. Сфокусировать `input[aria-label="Readonly mask input"]` (`readOnly`) и попытаться ввести символы или удалить их клавишей `Backspace`.
- **Ожидаемый результат**: Поле `disabled` не принимает фокус и ввод; поле `readonly` не позволяет изменить текущее значение `654-321`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Интеграция с `<form>` (`required`, `submit`, `reset`, `FormData`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Прокрутить к группе `Form Integration & Validation`.
- **Шаги теста**:
  1. Нажать `Submit Form` при пустом поле `Account code` (`required: true`) и проверить нативную валидацию формы (`checkValidity() === false`).
  2. Ввести `123456` и нажать `Submit Form`; проверить `formStatus: Submitted (valid)` и `formData` (`{"account-code":"123-456"}`).
  3. Нажать `Reset Form` и проверить сброс к `formStatus: Reset` и пустому `formValue`.
- **Ожидаемый результат**: `<form>` корректно валидирует обязательное поле, передаёт отформатированное значение в `FormData` через скрытый `input[name="account-code"]` и сбрасывает состояние по `Reset Form`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

#### [TC-INT-005] Программный `expose` API и жизненный цикл `v-if`
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Группы `Exposed API Controls` и `Lifecycle (Mount / Unmount)`.
- **Шаги теста**:
  1. Нажать `Read Values` (`123-`), затем `Set 987654` (`987-654`), `Set Empty` (`""`) и `Clear` (сброс к `valueDefault="000"`).
  2. В группе `Lifecycle (Mount / Unmount)` нажать `Unmount Mask` и затем `Mount Mask`.
- **Ожидаемый результат**: Методы `expose` (`getValue`, `getValueBasic`, `setValue`, `clear`) корректно читают, обновляют и сбрасывают значение маски; `Unmount`/`Mount` не вызывают ошибок и утечек `requestAnimationFrame`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-005.png`)

---

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Числовой `0`, пустые значения, `rubber`, `groupSave`, Unicode и XSS
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Проверить `Numeric zero mask`, `Rubber mask`, `Group save` и группу `Boundary & Edge Cases`.
- **Шаги теста**:
  1. Убедиться, что маска с `:value="0"` и `:value-default="0"` отображает `0` и имеет класс `.d1-mask--value`.
  2. Проверить корректный рендер масок с `value=""`, `value="   "` и `:value="undefined"`.
  3. Проверить отображение резиновой маски `value="12-34"`, вариантов `groupSave`, строки Unicode (`"Học tiếng Việt / Привет 🚀🔥✨"`) и XSS-строки (`"<img src=x onerror=alert(1)>"`) без выполнения скрипта.
- **Ожидаемый результат**: Ноль `0` не теряется как falsy-значение, пустые/неопределённые значения не ломают маску, Unicode отображается корректно, а XSS-строка экранирована.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Обрезка визуального оверлея (`240px`) и синхронизация прокрутки (`MaskScroll`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Найти длинную маску `input[aria-label="Overflow clipped long mask"]` внутри узкого контейнера `.demo-mask-page__narrow` (`max-width: 240px`).
- **Шаги теста**:
  1. Проверить вычисленные стили `.d1-mask__character` (`overflow: hidden`, `white-space: nowrap`, `max-width: 100%`) и геометрию (`rect.width <= 240`).
  2. Прокрутить `input.scrollLeft` и отправить событие `scroll`.
  3. Проверить синхронизацию `character.scrollLeft === input.scrollLeft`.
- **Ожидаемый результат**: Визуальный слой символов не выходит за пределы узкого контейнера (`<= 240px`), а его горизонтальная прокрутка синхронно следует за нативным `<input>`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

---

### 2.4 Адаптивность и viewport (`RSP`)

#### [TC-RSP-001] Адаптация `D1Mask` на десктопе, планшете и мобильных устройствах
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и viewport`
- **Предусловия**: Открыть `http://localhost:3000/component-mask`.
- **Шаги теста**:
  1. Проверить ширину и геометрию элементов `.d1-mask` на `1440×900`, `768×1024`, `375×812` и `320×568`.
  2. Убедиться, что слои `.d1-mask__input` и `.d1-mask__character` совпадают по координатам и не выходят за пределы контейнера.
- **Ожидаемый результат**: Компонент не вызывает горизонтального переполнения и сохраняет точное наложение `input` поверх `character`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

---

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантика, ARIA-атрибуты и навигация с клавиатуры
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-mask`, группа `Accessibility (A11y)`.
- **Шаги теста**:
  1. Проверить `aria-hidden="true"` на `.d1-mask__character` и `pointer-events: none`.
  2. Проверить проброс `aria-label`, `aria-describedby="demo-mask-a11y-hint"` и `inputMode="numeric"` из `inputAttrs` на `<input>`.
  3. Перевести фокус на `.d1-mask__input` через `Tab` и проверить `document.activeElement`.
- **Ожидаемый результат**: Декоративный слой символов скрыт от скринридеров, нативный `<input>` доступен с клавиатуры и сохраняет переданные ARIA-атрибуты.
- **Тип доказательства**: `Console/Log`

---

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Все 11 событий маски и отсутствие ошибок в консоли
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль и рантайм`
- **Предусловия**: Очистить буфер сообщений консоли и прокрутить к группе `Events`.
- **Шаги теста**:
  1. Выполнить фокус, ввод цифр, вставку (`paste`), `change` и потерю фокуса на поле `Events tracker mask`, а также сброс через кнопку в `Exposed API Controls`.
  2. Проверить обновление `DemoValue` (`event`, `payload`) и собрать все `console.error`, `pageerror` и `[Vue warn]`.
- **Ожидаемый результат**: События (`focus`, `blur`, `keydown`, `keyup`, `beforeinput`, `input`, `inputLite`, `change`, `changeLite`, `paste`, `reset`) срабатывают с корректным payload; в консоли `0` ошибок и `0` предупреждений Vue.
- **Тип доказательства**: `Console/Log`
