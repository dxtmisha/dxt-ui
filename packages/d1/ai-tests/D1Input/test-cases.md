# Спецификация тест-кейсов: D1Input

- **Сущность**: `D1Input`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Input`, `packages/constructor/src/constructors/Input`, `packages/demo/src/pages/components/DemoInputPage.vue`
- **Целевой URL**: `http://localhost:3000/component-input`
- **Справочные материалы**: `None`
- **Дата последнего обновления**: `2026-11-16`
- **Всего тест-кейсов**: `17`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Количество | Распределение приоритетов | Область проверки |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 4 | P0, P1 | Оформление, размеры, выравнивание, состояния, иконки, загрузка, скелетон, слоты |
| **Интерактивность и функционал** | `INT` | 8 | P0, P1 | Индивидуальная работа всех 16 `type`, маски, стрелки, валидация, `match`, `expose` API |
| **Границы и крайние случаи** | `BND` | 2 | P1 | Пустые значения, пробелы, числовой `0`, длинный неразрывный текст, Unicode/emoji, XSS |
| **Адаптивность и viewport** | `RSP` | 1 | P1 | Desktop (`1440×900`), Laptop (`1024×768`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | Связь `label`/`for`, ARIA-атрибуты, `tabindex`, `caption-decorative`, навигация `Tab` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | События `update:*`/`input*`/`change*`, `0` ошибок JS, `[Vue warn]` и HTTP `>= 400` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Варианты внешнего вида, ширина, `block` и палитра
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-input`, viewport `1440×900`, тема `Light`.
- **Шаги тестирования**:
  1. Найти группу `Appearances & Layout`.
  2. Проверить рендеринг `classic`, `filled`, `outlined`, `tonal`, `boxed`, `basic`, `width="240px"`, `block` и `:field-attrs="{ palette: 'blue' }"`.
  3. Измерить ширину `width="240px"` и визуально проверить корректность рамок, отступов и переключение темы `Dark` (`prefers-color-scheme: dark`).
- **Ожидаемый результат**: Все 9 вариантов корректно отрисованы без обрезания рамок и перекрытия текста; ширина элемента с `width="240px"` равна `240px`.
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

#### [TC-VIS-003] Иконки, индикаторы загрузки (`loading`) и слоты
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-input`, viewport `1440×900`.
- **Шаги тестирования**:
  1. Проверить группы `Icons, Cancel & Loading` и `Slots & Attributes`.
  2. Убедиться в отображении `icon` (строка и объект `{ icon, size }`), `icon-trailing`, `icon-attrs`, `loading` (`boolean` и `{ linear: true }`) и слотов `#leading`, `#trailing`, `#prefix`, `#suffix`, `#caption`, `#label`.
- **Ожидаемый результат**: Иконки, спиннер/линейный прогресс и все 6 слотов видимы, выровнены и не перекрывают текст ввода.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Состояния (`disabled`, `readonly`, `focus`, `selected`, `is-skeleton`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-input`, viewport `1440×900`.
- **Шаги тестирования**:
  1. Найти группу `States & Skeleton`.
  2. Проверить атрибуты и визуальное состояние `disabled`, `readonly`, `focus`, `selected`, а также скелетон-заглушку `is-skeleton` внутри `D1Skeleton`.
- **Ожидаемый результат**: `disabled` и `readonly` недоступны для редактирования, `focus`/`selected` выделены визуально, `is-skeleton` отображает активный скелетон.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

---

### 2.2 Интерактивность и функционал (`INT`)

#### [TC-INT-001] Индивидуальная работа с типом `text` и `search`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Type: Text` ввести текст в `Controlled Text` и `Empty Text`, проверить реактивное обновление `DemoValue`, а также атрибуты `autocomplete`, `autocapitalize`, `autocorrect`, `spellcheck`, `enterkeyhint`, `has-html-code`.
  2. В группе `Type: Search` проверить ввод и нажатие на кнопку очистки `cancel="always"`.
- **Ожидаемый результат**: Введённые значения реактивно обновляют `v-model` и `DemoValue`; кнопка очистки в `Type: Search` обнуляет значение; HTML в `has-html-code` отображается как текст.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Индивидуальная работа с типом `password` (`textShow`, `textHide`, `match`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Type: Password` нажать на кнопку переключения видимости у поля `Password` (`Show password` -> `Hide password`).
  2. Проверить наличие ошибки несовпадения `"Passwords must match"` на `Confirm Password (Match)`, затем ввести совпадающий пароль `"Secret123"`.
  3. Проверить кастомные иконки `icon-visibility`/`icon-visibility-off` и подписи `Reveal`/`Conceal`.
- **Ожидаемый результат**: Тип `<input>` переключается `password` <-> `text` с обновлением `aria-label`; ошибка `Passwords must match` исчезает при совпадении значений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Индивидуальная работа с типом `number` и стрелками (`arrow`, `step`, `arrowStep`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Type: Number & Arrows` проверить ввод в `Standard Number`.
  2. Нажать на кнопку `next` у `Arrow Stepper (step 5)` и `Arrow Carousel (left)` и проверить обновление `DemoValue`.
  3. Убедиться в отсутствии кнопок стрелок у `Arrow None`.
- **Ожидаемый результат**: Значение увеличивается с учётом `step`/`arrow-step` и ограничений `min`/`max`; у `Arrow None` управляющие стрелки отсутствуют.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Индивидуальная работа с типами `number-format` и `currency`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группах `Type: Number Format` и `Type: Currency` проверить исходное форматирование для локалей `en-US` и `ru-RU`, дробной части `fraction` (`2`, `3`, `true`, `0`), валют `USD`, `EUR`, `RUB` и флага `currency-hide`.
  2. Ввести новые цифры в поля `Formatted (en-US, 2 decimals)` и `Currency USD (en-US)` и проверить синхронизацию `DemoValue`.
- **Ожидаемый результат**: Числа и валюты форматируются с разделителями тысяч и символом валюты согласно локали; `currency-hide` скрывает символ валюты; ввод пересчитывает модель.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

#### [TC-INT-005] Индивидуальная работа с `email`, `url`, `tel`, датой/временем и `checkbox`/`radio`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Types: Email, URL & Tel` проверить ввод и обновление `DemoValue` для `email`, `url`, `tel`.
  2. В группе `Types: Date & Time` проверить `date`, `datetime`, `year-month`, `time`, `hour-minute` и ввод цифр в дату/время.
  3. В группе `Types: Checkbox & Radio (Fallback to Text)` проверить, что передача `type="checkbox"` и `type="radio"` игнорируется и рендерится текстовое поле `type="text"`.
- **Ожидаемый результат**: Типы `email`, `url`, `tel`, `date`/`datetime`/`year-month`/`time`/`hour-minute` корректно отображаются, принимают ввод и обновляют `DemoValue` (для `date` строго в формате `YYYY-MM-DD`), а `type="checkbox"` и `type="radio"` приводятся к `type="text"`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-005.png`)

#### [TC-INT-006] Индивидуальная работа с масками (`mask`, `maskVisible`, `maskNone`, `maskAttrs`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Masks` проверить `Phone Mask`, ввести новый номер и убедиться в обновлении `DemoValue`.
  2. Проверить отсутствие оверлея заполнителей `.d1-mask__view` при `:mask-visible="false"`.
  3. Проверить свободный ввод при `mask-none` и кастомный символ заполнения при `mask-attrs="{ view: '0', groupSave: false }"`.
- **Ожидаемый результат**: Маска форматирует ввод и синхронизирует `v-model`; `mask-visible="false"` скрывает оверлей; `mask-none` отключает маску.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-006.png`)

#### [TC-INT-007] Валидация (`required`, `pattern`, `validationCode`, `forceShowMessage`) и счётчики
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Validation & Counter` проверить отображение счётчика `2 / 12`, сообщения `Only Latin letters allowed` (объектный `validation-code`), `Must contain digits only` (строковый `validation-code`) и принудительной ошибки `Server validation failed` (`force-show-message`).
  2. Ввести валидные латинские буквы `"Abc"` в `Pattern Letters Only` и убедиться в исчезновении ошибки.
- **Ожидаемый результат**: Ошибки валидации и счётчики отображаются корректно; после ввода корректного значения по `pattern` ошибка исчезает.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-007.png`)

#### [TC-INT-008] Программный `expose` API (`getValue`, `setValue`, `clear`, `checkValidity`, `getValidationMessage`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Exposed API` нажать последовательно кнопки `Read Values`, `setValue('Preset Value')`, `clear()` и снова `Read Values`.
  2. Зафиксировать текст вывода `DemoValue` после каждого действия.
- **Ожидаемый результат**: `Read Values` читает `value=Initial, valid=true`; `setValue` устанавливает `"Preset Value"`; `clear()` очищает поле и при `required` переводит `checkValidity()` в `false`.
- **Тип доказательства**: `Console/Log`

---

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Пустые значения, пробелы и числовой ноль `0`
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. Проверить `Empty Text` (`""`), `Whitespace Value` (`"   "`) и `Numeric Zero` (`0`, `type="number"`).
  2. Убедиться, что при `0` отображается `"0"` и класс состояния заполненности (`--isValue`) активен.
- **Ожидаемый результат**: Ноль не трактуется как пустое falsy-значение; пустое и пробельное поля корректно отрисованы без смещения макета.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Длинный неразрывный текст, Unicode/эмодзи и экранирование XSS
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. В группе `Boundary Cases` проверить ширину контейнера `Long Unbroken Text` (`width="240px"`), отображение `"Привет / Học tiếng Việt 🚀✨"` и `"<img src=x onerror=alert(1)>"`.
  2. Проверить отсутствие срабатывания скрипта и инъекций DOM (`img[onerror]` не создаётся).
- **Ожидаемый результат**: Длинная строка остаётся внутри 240px, Unicode/эмодзи читаемы, XSS-строка отображается строго как текст внутри `input.value`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

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
- **Категория**: `Доступность (A11Y)`
- **Предусловия**: Открыть `http://localhost:3000/component-input`.
- **Шаги тестирования**:
  1. Проверить все `<input>` внутри `.d1-input` на наличие связанного `<label for>` или `aria-label`/`aria-labelledby`.
  2. Проверить `aria-invalid`, `required`, пользовательские `id`, `name`, `tabindex`, `field-attrs`, `input-attrs`, `field-label-attrs`, `field-message-attrs`, `field-counter-attrs` и навигацию клавишей `Tab`.
- **Ожидаемый результат**: 100% инпутов доступны по `Tab` и имеют метку; пропсы атрибутов проброшены на соответствующие DOM-узлы.
- **Тип доказательства**: `Console/Log`

---

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] События (`update:*`, `input*`, `change*`) и чистота консоли/сети
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль и рантайм`
- **Предусловия**: Открыть `http://localhost:3000/component-input`, очистить счётчики событий и логов.
- **Шаги тестирования**:
  1. В группе `Events` ввести текст `"Test"` и снять фокус с `Event Tracker`.
  2. Проверить обновление `DemoValue` и собрать все `console.error`, `[Vue warn]` (включая гидратацию), `pageerror` и HTTP-статусы `>= 400` за всё время прогона.
- **Ожидаемый результат**: События фиксируются корректно; зафиксировано `0` ошибок консоли, `0` предупреждений гидратации Vue, `0` исключений и `0` HTTP-ошибок.
- **Тип доказательства**: `Console/Log`
