# Спецификация тест-кейсов: D1Checkbox

- **Сущность**: `D1Checkbox` (`Checkbox`)
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Checkbox`, `packages/constructor/src/constructors/Checkbox`, `packages/demo/src/pages/components/DemoCheckboxPage.vue`
- **Целевой URL**: `http://localhost:3000/component-checkbox`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `19`

---

## 1. Матрица покрытия

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуальное соответствие и дизайн-система** | `VIS` | 4 | P0, P1 | Базовый вид, `indeterminate`, `required`, сообщения, `block`/`itemCenter`, все 5 `container`, все 6 `adaptive`, все 24 `palette`, иконки и слоты, `isSkeleton` |
| **Интерактивность и функциональный контракт** | `INT` | 6 | P0, P1 | `v-model` и кнопки управления, `v-model:selected` и `v-model:modelSelected`, переключатели состояний, блокировка `disabled`/`readonly`/`loading`, `expose`, `<form>` и `v-if` |
| **Граничные значения и краевые случаи** | `BND` | 4 | P1, P2 | Пустые/пробельные метки, `0`/`-42`/`3.14`/`"A"`, `hasHtmlCode` и `forceShowMessage`, Unicode/эмодзи, XSS, длинный текст и узкий `DemoBox` |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1, P2 | Десктоп (`1440×900`), планшет (`768×1024`), мобильный (`375×812`, `320×568`), перестроение `adaptive="rightSm"` |
| **Доступность** | `A11Y` | 2 | P1, P2 | `aria-labelledby`, `aria-describedby`, `aria-invalid`, `aria-readonly`, `aria-hidden`, явные ID, клавиатурное переключение `Tab` + `Space` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Полный набор событий (`update:modelValue`, `input`, `inputLite`, `change`, `changeLite`, `focus`, `blur`) и `0` ошибок/предупреждений |

---

## 2. Детальные тест-кейсы

### 2.1 Визуальное соответствие и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовые состояния, `indeterminate`, `required` и сообщения (`helperMessage`, `warningMessage`, `validationMessage`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`, светлая тема.
- **Шаги**:
  1. Проверить группы `Basic & v-model Controls`, `Indeterminate` и `Appearances & Messages`.
  2. Проверить отображение иконок `check` и `remove`, красной `*` у `required`, а также вспомогательных, предупреждающих (`warning`) и валидационных сообщений и `fieldMessageAttrs`.
- **Ожидаемый результат**: Все состояния и сообщения отображаются с корректными токенами цвета, отступами и без наложения.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Макет, все 5 `container` (`rightSm`–`right2xl`) и все 6 `adaptive` (`rightAlways`–`right2xl`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги**:
  1. Прокрутить к группам `Layout & Container (All 5)` и `Adaptive (All 6)`.
  2. Проверить `block` vs `:block="false"`, `itemCenter` vs `:itemCenter="false"`, все 5 вариантов `container` внутри `DemoBox container` и все 6 вариантов `adaptive`.
- **Ожидаемый результат**: `block` растягивается на всю ширину, `itemCenter` центрирует индикатор по вертикали, при `adaptive="rightAlways"` индикатор располагается справа.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Состояния (`disabled`, `readonly`, `focus`, `loading`) и `isSkeleton` внутри `D1Skeleton`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги**:
  1. Прокрутить к группам `States & Interactive Toggles` и `Skeleton`.
  2. Проверить классы `.d1-checkbox--disabled`, `.d1-checkbox--focus`, спиннер `.d1-progress` при `loading` (булево и объект) и `.d1-skeleton__text` / `.d1-skeleton__background` в `D1Skeleton`.
- **Ожидаемый результат**: Все визуальные состояния и скелетон рендерятся корректно без дублирования DOM.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Все 24 палитры (`palette`), кастомные иконки (`iconCheckbox`, `iconIndeterminate`, `null`) и слоты (`#default`, `#description`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги**:
  1. Прокрутить к группам `Palettes (All 24)`, `Icons` и `Slots`.
  2. Проверить применение всех 24 классов `d1-palette--*`, иконок строкой/объектом/`null` и слотов `#default`/`#description`.
- **Ожидаемый результат**: Все 24 палитры окрашивают отмеченный индикатор, кастомные иконки отображаются корректно, `null` скрывает иконку, слоты рендерят переданную разметку.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

### 2.2 Интерактивность и функциональный контракт (`INT`)

#### [TC-INT-001] Двусторонняя привязка `v-model` и программные кнопки управления
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, группа `Basic & v-model Controls`.
- **Шаги**:
  1. Кликнуть по чекбоксу `Default`, затем воспользоваться кнопками `Set True`, `Set False`, `Toggle`.
  2. Проверить синхронизацию `input.checked` и `DemoValue` (`Default Value`).
- **Ожидаемый результат**: Состояние чекбокса и `DemoValue` синхронно меняются при пользовательском клике и нажатии кнопок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Синхронизация `v-model:selected`, `v-model:modelSelected` и `valueVariant`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, группа `Selected & Value Variant`.
- **Шаги**:
  1. Кликнуть по `Option Beta` и проверить обновление `v-model:selected` на `"beta"` и снятие `Option Alpha`.
  2. Нажать кнопки `Select Alpha`, `Clear Variant`, а также переключить `ModelSelected Second`.
- **Ожидаемый результат**: Оба режима (`v-model:selected` и `v-model:modelSelected`) корректно синхронизируют группу чекбоксов с `valueVariant`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Динамические переключатели состояний и жизненный цикл `v-if`
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, группы `States & Interactive Toggles` и `Lifecycle & Conditional Mount`.
- **Шаги**:
  1. Нажать кнопки `Toggle Checked`, `Toggle Disabled`, `Toggle Readonly`, `Toggle Loading`, `Toggle Indeterminate`, `Toggle Skeleton`.
  2. Нажать `Toggle Mount` дважды в группе `Lifecycle & Conditional Mount`.
- **Ожидаемый результат**: Флаги в `State Flags` и вид `Dynamic Target Checkbox` обновляются мгновенно; `v-if` корректно удаляет и заново монтирует компонент.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Блокировка интерактивности в режимах `disabled`, `readonly` и `loading` (`Blocked & Guarded Actions`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, группа `Blocked & Guarded Actions`.
- **Шаги**:
  1. Проверить исходный `Blocked Trigger Count` (`0`).
  2. Попытаться кликнуть по чекбоксам `Blocked Disabled`, `Blocked Readonly` и `Blocked Loading`.
- **Ожидаемый результат**: `input.checked` не изменяется ни у одного из них, события `@input`/`@change` не срабатывают, счётчик остаётся `0`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-005] Программное управление через `expose` (`setValue`, `clear`, `isChanged`, `checkValidity`, `getValidationMessage`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, группа `Expose & Validation`.
- **Шаги**:
  1. Нажать `Check Validity` (проверить `valid: false`), затем `Set True` (`value: true, valid: true`), затем `Set False` (`valid: false, message: "Custom required validation message"`), затем `Clear`.
- **Ожидаемый результат**: `Expose Output` точно отражает возвращаемые значения `getValue()`, `isChanged()`, `checkValidity()` и `getValidationMessage()`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-005.png`)

#### [TC-INT-006] Интеграция с формой (`<form>`, `submit`, `reset`, `required`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функциональный контракт`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, группа `Form Integration`.
- **Шаги**:
  1. Отметить чекбокс `I accept the terms and conditions` и нажать `Submit Form`.
  2. Нажать `Reset Form` и проверить сброс состояния.
- **Ожидаемый результат**: `Form Status` отображает `"Form submitted (valid)"` после отправки и `"Form reset"` со снятой отметкой после сброса.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-006.png`)

### 2.3 Граничные значения и краевые случаи (`BND`)

#### [TC-BND-001] Пустые/пробельные метки и числовые значения (`0`, `-42`, `3.14`, `"A"`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные значения и краевые случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, группа `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить рендер чекбоксов с `""`, `"   "`, `:label="0"`/`:description="0"`, `-42`, `3.14` и `"A"`.
- **Ожидаемый результат**: Числа `0`, `-42`, `3.14` и `"A"` отображаются в DOM, пустые и пробельные метки не ломают макет.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-002] `hasHtmlCode` и `forceShowMessage` при `disabled`
- **Приоритет**: `P2 (Medium)`
- **Категория**: `Граничные значения и краевые случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, группа `Appearances & Messages`.
- **Шаги**:
  1. Проверить наличие HTML-тега `<strong>strong</strong>` в сообщении у `HTML Helper Message`.
  2. Проверить видимость сообщения `"Visible even when disabled"` у `Disabled with forceShowMessage`.
- **Ожидаемый результат**: HTML-разметка применяется при `hasHtmlCode`, а сообщение остаётся видимым при `disabled + forceShowMessage`.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-003] Unicode, вьетнамский/кириллица/эмодзи и экранирование XSS (`<img src=x onerror=alert(1)>`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные значения и краевые случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, группа `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить корректный рендер `"Tiếng Việt / Кириллица / 🚀 & <>"`.
  2. Проверить, что `"<img src=x onerror=alert(1)>"` и `"<script>alert('xss')</script>"` отображаются только как экранированный текст.
- **Ожидаемый результат**: Unicode отображается корректно, инъекции HTML/JS не выполняются.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

#### [TC-BND-004] Длинный текст и неразрывная строка в узком `DemoBox`
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные значения и краевые случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, группа `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить `scrollWidth <= clientWidth + 1` для всех `.d1-checkbox` и `.d1-checkbox__label`, включая узкий `.demo-checkbox-page__narrow` (`max-width: 220px`) с `"AAAA...AAAA"`.
- **Ожидаемый результат**: Все чекбоксы и длинные неразрывные строки корректно помещаются в контейнеры без горизонтального переполнения.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-004.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Отображение на десктопе (`1440×900`) и планшете (`768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Проверить страницу при `1440×900` и `768×1024`.
- **Шаги**:
  1. Проверить `document.documentElement.scrollWidth <= window.innerWidth` и перенос элементов палитр (`.demo-checkbox-page__palettes`).
- **Ожидаемый результат**: Горизонтальное переполнение отсутствует (`hasOverflow: false`), элементы адаптируются плавно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Отображение на мобильном экране (`375×812` и `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Изменить размер вьюпорта на `375×812`, затем на `320×568`.
- **Шаги**:
  1. Проверить отсутствие горизонтального переполнения на странице и перестроение `adaptive="rightSm"` (`order: 4` при `<640px`).
- **Ожидаемый результат**: На `375px` и `320px` `hasOverflow: false`, `adaptive="rightSm"` перемещает индикатор вправо.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантика HTML, WAI-ARIA атрибуты и явные идентификаторы
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить `<label>` (`aria-labelledby`, `aria-describedby`), `aria-hidden="true"` на `.d1-checkbox__item`, `aria-invalid="true"` при `validationMessage`, `aria-readonly="true"` при `readonly`.
  2. Проверить явные `labelId`, `descriptionId`, `helperId` и `aria-label` через `inputAttrs` в группе `Accessibility (ARIA & Attributes)`.
- **Ожидаемый результат**: Все ARIA-ссылки и атрибуты полностью соответствуют контракту WAI-ARIA.
- **Тип доказательства**: `Console/Log`

#### [TC-A11Y-002] Клавиатурная навигация (`Tab` и `Space`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги**:
  1. Установить фокус на нативный `<input type="checkbox">` первого чекбокса `Default`.
  2. Нажать `Space` и проверить переключение `checked` и `DemoValue`.
- **Ожидаемый результат**: Клавиша `Space` переключает чекбокс и обновляет `v-model`.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Генерация событий (`update:modelValue`, `input`, `change`, `focus`, `blur`) и чистота консоли
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль и рантайм`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, очистить буфер сообщений консоли.
- **Шаги**:
  1. Сфокусировать, кликнуть и снять фокус с чекбокса `Event Tracker` в группе `Events`.
  2. Проверить обновление `Event Name` и `Event Payload` (включая `detail: { source: "demo-checkbox" }`) и собрать все `console.error`, `pageerror` и `[Vue warn]` за сессию.
- **Ожидаемый результат**: События фиксируются с ожидаемым payload, `consoleErrors: []`, `pageErrors: []`, `vueWarnings: []`.
- **Тип доказательства**: `Console/Log`
