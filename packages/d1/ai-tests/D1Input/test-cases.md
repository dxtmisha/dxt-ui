# Спецификация тест-кейсов: D1Input

- **Сущность**: `D1Input`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Input`, `packages/constructor/src/constructors/Input`, `packages/demo/src/pages/components/DemoInputPage.vue`
- **Целевой URL**: `http://localhost:3000/component-input`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `21`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Количество | Распределение приоритетов | Область проверки |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 4 | P0, P1 | Оформление (`classic`–`basic`), `isValue`, размеры, выравнивание, состояния, иконки/модификаторы, загрузка, скелетон, пропсы и слоты |
| **Интерактивность и функционал** | `INT` | 11 | P0, P1 | Все 16 `type`, `v-model` кнопки, `datalist`, маски, стрелки, валидация, `match`, динамические переключатели состояний, блокировка действий, `<form>` submit/reset, `expose` API и `v-if` lifecycle |
| **Границы и крайние случаи** | `BND` | 3 | P1 | Пустые/`undefined`/пробельные значения, числовые `0`/`-42`/`3.14`, одиночный символ, длинный текст, узкий контейнер `max-width: 240px`, Unicode/emoji, XSS |
| **Адаптивность и viewport** | `RSP` | 1 | P1 | Desktop (`1440×900`), Laptop (`1024×768`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | Связь `label`/`for`, ARIA-атрибуты (`aria-label` без видимой метки), `tabindex`, `caption-decorative`, навигация `Tab` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | События `update:*`/`input*`/`change*`/`focus`/`blur` и payload, `0` ошибок JS, `[Vue warn]` и HTTP `>= 400` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Варианты внешнего вида, ширина, `block`, `isValue` и палитра
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-input`, viewport `1440×900`, тема `Light`.
- **Шаги тестирования**:
  1. Найти группу `Appearances & Layout`.
  2. Проверить рендеринг `classic`, `filled`, `outlined`, `tonal`, `boxed`, `basic`, `width="240px"`, `block`, `:field-attrs="{ palette: 'blue' }"` и `is-value`.
  3. Измерить ширину `width="240px"` и визуально проверить корректность рамок, отступов и переключение темы `Dark` (`prefers-color-scheme: dark`).
- **Ожидаемый результат**: Все 10 вариантов корректно отрисованы без обрезания рамок и перекрытия текста; ширина элемента с `width="240px"` равна `240px`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Размеры и выравнивание текста
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-input`, viewport `1440×900`.
- **Шаги тестирования**:
  1. Найти группу `Sizes & Alignments`.
  2. Измерить высоту `.d1-field__body` для `sm`, `md`, `lg`, `display`.
  3. Проверить вычисленный стиль `text-align` на `<input>` для `align="left"`, `align="center"`, `align="right"`.
- **Ожидаемый результат**: Высоты возрастают (`sm < md < lg < display`), а `text-align` соответствует `left`, `center`, `right`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Иконки, индикаторы загрузки (`loading`), пропсы и слоты (`#leading` scoped, `#trailing`, `#prefix`, `#suffix`, `#caption`, `#label`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-input`, viewport `1440×900`.
- **Шаги тестирования**:
  1. Проверить группы `Icons, Cancel & Loading` и `Prefix, Suffix, Caption Props & Slots`.
  2. Убедиться в отображении `icon`, `icon-trailing`, `icon-hide`, `icon-trailing-palette`/`dir-only`/`turn-only`, `loading`, пропсов `prefix`/`suffix`/`caption` и всех 6 слотов (включая scoped binding `{ id }` в `#leading`).
- **Ожидаемый результат**: Иконки, спиннер/линейный прогресс, пропсы и все слоты видимы, выровнены и не перекрывают текст ввода.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Статические состояния (`disabled`, `readonly`, `focus`, `selected`, `is-skeleton`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-input`, viewport `1440×900`.
- **Шаги тестирования**:
  1. Найти группу `States, Interactive Toggles & Skeleton`.
  2. Проверить атрибуты и визуальное состояние `disabled`, `readonly`, `focus`, `selected`, а также скелетон-заглушку `is-skeleton` внутри `D1Skeleton`.
- **Ожидаемый результат**: `disabled` и `readonly` недоступны для редактирования, `focus`/`selected` выделены визуально, `is-skeleton` отображает активный скелетон.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

---

### 2.2 Интерактивность и функционал (`INT`)

#### [TC-INT-001] Работа с типом `text`, программными кнопками `v-model`, `datalist` (`list`) и `search`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Type: Text & v-model Controls` ввести текст в `Controlled Text`, затем нажать `Set Sample`, `Clear`, `Reset` и проверить обновление `DemoValue`.
  2. Проверить `list="demo-input-datalist"`, атрибуты `autocomplete`/`autocapitalize`/`autocorrect`/`spellcheck`/`enterkeyhint` и `has-html-code` в `helper-message` (при экранированном `value="<b>Plain</b>"`).
  3. В группе `Type: Search` проверить ввод и нажатие на кнопку очистки `cancel="always"`.
- **Ожидаемый результат**: Значения реактивно обновляют `v-model` и `DemoValue`; кнопка очистки обнуляет значение; HTML в `helper-message` рендерится как разметка, а в `value` — как текст.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Работа с типом `password` (`textShow`, `textHide`, `match`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Type: Password` нажать кнопку переключения видимости у `Password` (`Show password` -> `Hide password`).
  2. Проверить ошибку `"Passwords must match"` на `Confirm Password (Match)`, затем ввести `"Secret123"`.
  3. Проверить кастомные иконки `icon-visibility`/`icon-visibility-off` и подписи `Reveal`/`Conceal`.
- **Ожидаемый результат**: Тип `<input>` переключается `password` <-> `text` с обновлением `aria-label`; ошибка `Passwords must match` исчезает при совпадении значений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Работа с типом `number` и стрелками (`arrow`, `step`, `arrowStep`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Type: Number & Arrows` проверить ввод в `Standard Number`.
  2. Нажать кнопку увеличения у `Arrow Stepper (step 5)` и `Arrow Carousel (left)` и проверить обновление `DemoValue`.
  3. Убедиться в отсутствии кнопок стрелок у `Arrow None`.
- **Ожидаемый результат**: Значение увеличивается с учётом `step`/`arrow-step` и ограничений `min`/`max`; у `Arrow None` стрелки отсутствуют.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Работа с типами `number-format` и `currency`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группах `Type: Number Format` и `Type: Currency` проверить исходное форматирование для локалей `en-US` и `ru-RU`, `fraction`, валют `USD`/`EUR`/`RUB` и флага `currency-hide`.
  2. Ввести новые цифры в `Formatted (en-US, 2 decimals)` и `Currency USD (en-US)` и проверить синхронизацию `DemoValue`.
- **Ожидаемый результат**: Числа и валюты форматируются согласно локали; `currency-hide` скрывает символ валюты; ввод пересчитывает модель.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

#### [TC-INT-005] Работа с `email`, `url`, `tel`, датой/временем и `checkbox`/`radio`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Types: Email, URL & Tel` проверить ввод для `email`, `url`, `tel`.
  2. В группе `Types: Date & Time` проверить `date`, `datetime`, `year-month`, `time`, `hour-minute`.
  3. В группе `Types: Checkbox & Radio (Fallback to Text)` проверить, что `type="checkbox"` и `type="radio"` приводятся к `type="text"`.
- **Ожидаемый результат**: Все типы корректно отображаются, принимают ввод и обновляют `DemoValue`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-005.png`)

#### [TC-INT-006] Работа с масками (`mask`, `maskVisible`, `maskNone`, `maskAttrs`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Masks` проверить `Phone Mask`, ввести новый номер и убедиться в обновлении `DemoValue`.
  2. Проверить отсутствие оверлея `.d1-mask__view` при `:mask-visible="false"`.
  3. Проверить свободный ввод при `mask-none` и кастомный символ при `mask-attrs="{ view: '0', groupSave: false }"`.
- **Ожидаемый результат**: Маска форматирует ввод и синхронизирует `v-model`; `mask-visible="false"` скрывает оверлей; `mask-none` отключает маску.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-006.png`)

#### [TC-INT-007] Валидация (`required`, `pattern`, `validationCode`, `forceShowMessage`), `warning` и счётчики
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Validation, Counter & Warning` проверить счётчики `2 / 12` и `8 / 20` (`counter`), сообщения `Only Latin letters allowed`, `Must contain digits only`, `Server validation failed`, `Caps Lock may be active` и приоритет `Validation takes priority`.
  2. Ввести `"Abc"` в `Pattern Letters Only` и убедиться в исчезновении ошибки.
- **Ожидаемый результат**: Ошибки валидации, предупреждения (с приоритетом валидации) и счётчики отображаются корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-007.png`)

#### [TC-INT-008] Программный `expose` API (`value`, `getValue`, `setValue`, `clear`, `isChanged`, `checkValidity`, `getValidationMessage`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Exposed API` нажать `Read Values`, `setValue('Preset Value')`, `clear()` и снова `Read Values`.
- **Ожидаемый результат**: `Read Values` читает `value=Initial, valid=true, changed=true`; `setValue` устанавливает `"Preset Value"`; `clear()` очищает поле и при `required` переводит `checkValidity()` в `false`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-009] Динамические переключатели состояний (`disabled`, `readonly`, `loading`, `is-skeleton`, `focus`, `selected`, `warning`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыта группа `States, Interactive Toggles & Skeleton`.
- **Шаги тестирования**:
  1. Нажать кнопки `Toggle Skeleton`, `Toggle Disabled`, `Toggle Readonly`, `Toggle Loading`, `Toggle Focus`, `Toggle Selected`, `Toggle Warning` для `[data-testid="demo-input-dynamic"]`.
- **Ожидаемый результат**: `Dynamic Flags` и классы/атрибуты состояния на компоненте синхронно обновляются при каждом клике.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-009.png`)

#### [TC-INT-010] Блокировка ввода при `disabled`, `readonly`, `loading` и условное монтирование `v-if`
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыты группы `Blocked & Guarded Actions` и `Lifecycle & Conditional Mount`.
- **Шаги тестирования**:
  1. Попытаться ввести текст в поля `Blocked Disabled`, `Blocked Readonly`, `Blocked Loading` и проверить `Blocked Trigger Count`.
  2. Нажать `Toggle Mount` дважды в группе `Lifecycle & Conditional Mount` и проверить `Mounted`.
- **Ожидаемый результат**: `Blocked Trigger Count` остаётся `0`, заблокированные поля не изменяются; `v-if` корректно удаляет и восстанавливает `[data-testid="demo-input-lifecycle"]`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-011] Интеграция с `<form>` (`form`, `required`, `minlength`, `submit`, `reset`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыта группа `Form Integration`.
- **Шаги тестирования**:
  1. Нажать `Submit Form` с пустым полем `Username` и проверить нативную/кастомную блокировку отправки.
  2. Ввести `"alice"`, нажать `Submit Form`, затем `Reset Form` и проверить `Form Status`.
- **Ожидаемый результат**: При валидном значении `Form Status` отображает `"Form submitted (alice)"`, при `Reset Form` значение очищается и статус сбрасывается на `"Form reset"`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-011.png`)

---

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Пустые значения (`""`, `"   "`, `undefined`), одиночный символ и числовые границы (`0`, `-42`, `3.14`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. Проверить `Empty Text`/`Empty String` (`""`), `Whitespace Value` (`"   "`), `Null Value` (`undefined`), `Single Character` (`"A"`).
  2. Проверить `Numeric Zero` (`0`), `Negative Number` (`-42`), `Decimal Number` (`3.14`).
- **Ожидаемый результат**: Ноль отображается как `"0"` с активным классом `--isValue`; отрицательные, дробные и пустые значения корректно отрисованы без смещения макета.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Длинный текст, узкий контейнер (`max-width: 240px`), Unicode/эмодзи и экранирование XSS
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Boundary & Edge Cases` проверить ширину `.demo-input-page__narrow` (`max-width: 240px`) с `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`, `Long Multi-Sentence Text`, `"Привет / Học tiếng Việt 🚀✨"` и `"<img src=x onerror=alert(1)>"`.
  2. Проверить отсутствие срабатывания скрипта и инъекций DOM (`img[onerror]` не создаётся).
- **Ожидаемый результат**: Узкий контейнер не выходит за пределы `240px`, Unicode/эмодзи читаемы, XSS-строка отображается строго как текст внутри `input.value`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

#### [TC-BND-003] Сохранение границ поля с `prefix`/`suffix`/`caption` и длинной меткой
- **Приоритет**: `P2 (Medium)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыта группа `Prefix, Suffix, Caption Props & Slots`.
- **Шаги тестирования**:
  1. Проверить отсутствие наложений `prefix`/`suffix` и текста внутри `<input>`.
- **Ожидаемый результат**: Префикс, суффикс, подпись и значение ввода выровнены без перекрытия.
- **Тип доказательства**: `Console/Log`

---

### 2.4 Адаптивность и viewport (`RSP`)

#### [TC-RSP-001] Многоэкранная адаптация (`1440×900`, `1024×768`, `768×1024`, `375×812`, `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и viewport`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. Изменить viewport поочерёдно на `1440×900`, `1024×768`, `768×1024`, `375×812`, `320×568`.
  2. На каждом разрешении проверить `document.documentElement.scrollWidth <= window.innerWidth` и отсутствие обрезания инпутов.
- **Ожидаемый результат**: Отсутствует горизонтальный скролл (`overflowX: false`) на всех 5 разрешениях; поля корректно перестраиваются.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

---

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантика `label`/`for`, ARIA-атрибуты, пользовательские атрибуты и `Tab`
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. Проверить все `<input>` внутри `.d1-input` на наличие связанного `<label for>` или `aria-label` (включая `Standalone input without visible label`).
  2. Проверить `aria-invalid`, `required`, `id`, `name`, `tabindex`, `field-attrs`, `input-attrs`, `field-label-attrs`, `field-message-attrs`, `field-counter-attrs` и навигацию клавишей `Tab`.
- **Ожидаемый результат**: 100% инпутов доступны по `Tab` и имеют метку; пропсы атрибутов проброшены на соответствующие DOM-узлы.
- **Тип доказательства**: `Console/Log`

---

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] События (`focus`, `blur`, `update:*`, `input*`, `change*`) с payload и чистота консоли/сети
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль и рантайм`
- **Предусловия**: Открыть `http://localhost:3000/component-input`, очистить счётчики событий и логов.
- **Шаги тестирования**:
  1. В группе `Events` сфокусироваться на `Event Tracker`, ввести текст `"Test"` и снять фокус.
  2. Проверить обновление `Event Name` и `Event Payload` (включая `focus`, `update:value`/`update:modelValue`, `input`/`inputLite`, `change`/`changeLite`, `blur`) и собрать все `console.error`, `[Vue warn]` (включая гидратацию), `pageerror` и HTTP-статусы `>= 400` за всё время прогона.
- **Ожидаемый результат**: Все события и их payload фиксируются корректно; зафиксировано `0` ошибок консоли, `0` предупреждений гидратации Vue, `0` исключений и `0` HTTP-ошибок.
- **Тип доказательства**: `Console/Log`
