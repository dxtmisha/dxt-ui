# Спецификация тест-кейсов: `D1Checkbox`

- **Сущность**: `D1Checkbox` (`Checkbox`)
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Checkbox` (конструктор: `packages/constructor/src/constructors/Checkbox`)
- **Целевой URL**: `http://localhost:3000/component-checkbox`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-16`
- **Всего тест-кейсов**: `16`

---

## 1. Матрица покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 4 | P0, P1 | Базовый рендеринг, `indeterminate`, `required`, макет (`block`/`itemCenter`/`container`/`adaptive`), состояния (`disabled`/`readonly`/`focus`/`loading`/`isSkeleton`), палитры, иконки и слоты |
| **Интерактив и функциональность** | `INT` | 4 | P0, P1 | Переключение `v-model`, группа `selected` + `valueVariant`, блокировка в `disabled`/`readonly`, методы `expose` (`setValue`, `clear`, `checkValidity`) |
| **Границы и крайние случаи** | `BND` | 3 | P1, P2 | Числовой `0` в `label`/`description`, `hasHtmlCode` и `forceShowMessage`, проверка переполнения по всем элементам |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1, P2 | Планшет (`768×1024`) и мобильный (`375×812`, `320×568`), переключение `adaptive` и отсутствие горизонтального переполнения |
| **Доступность (A11y)** | `A11Y` | 2 | P1, P2 | `aria-labelledby`, `aria-describedby`, `aria-invalid`, `aria-hidden="true"`, клавиатурная активация (`Tab`, `Space`) |
| **Консоль и рантайм** | `LOG` | 1 | P0 | События `input`/`inputLite`/`change`/`changeLite`, `0` ошибок консоли и `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовые состояния, обязательность (`required`), описание и сообщения (`helperMessage`, `validationMessage`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`, светлая тема.
- **Шаги теста**:
  1. Прокрутить к группам `Basic`, `Indeterminate`, `Appearances & Validation`.
  2. Проверить визуальное состояние отмеченного, неотмеченного, `indeterminate`, `required` (красная `*` после метки), `description`, `helperMessage` и `validationMessage`.
- **Ожидаемый результат**: Все варианты отображаются корректно без смещений; отмеченный чекбокс показывает иконку `check`, `indeterminate` — иконку `remove`, `required` добавляет `*`, `validationMessage` отображается цветом ошибки.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Макет и адаптивные модификаторы (`block`, `itemCenter`, `container`, `adaptive`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группам `Layout & Container` и `Adaptive`.
  2. Проверить ширину элементов `block` vs `:block="false"`, выравнивание `itemCenter` vs `:itemCenter="false"` при многострочном описании, `DemoBox container` и `adaptive="rightAlways"` (`order` элемента `.d1-checkbox__item` и `.d1-checkbox__info`).
- **Ожидаемый результат**: `block` занимает всю ширину (`display: flex`), `:block="false"` — ширину контента; при `adaptive="rightAlways"` индикатор чекбокса располагается справа (`order: 4`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Состояния `disabled`, `readonly`, `focus`, `loading` и `isSkeleton`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группам `States` и `Skeleton`.
  2. Проверить классы `.d1-checkbox--disabled`, `.d1-checkbox--focus`, наличие `.d1-progress` при `loading` (булево и объект) и `.d1-skeleton__text` / `.d1-skeleton__background` при `isSkeleton`.
- **Ожидаемый результат**: `disabled` снижает непрозрачность, `focus` подсвечивает индикатор, `loading` отображает спиннер и скрывает иконку, `isSkeleton` применяет скелетон-классы без дублирования DOM.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Палитры (`palette`), кастомные иконки (`iconCheckbox`, `iconIndeterminate`, `null`) и слоты (`#default`, `#description`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группам `Palettes`, `Icons` и `Slots`.
  2. Проверить применение `d1-palette--red`/`green`/`blue`, иконки строкой/объектом/`null` и рендеринг `<strong>Custom Label Slot</strong>` и `<em>Custom Description Slot</em>`.
- **Ожидаемый результат**: Цвета палитр применяются к отмеченным чекбоксам, кастомные иконки рендерятся корректно, `null` скрывает иконку, слоты отображаются с HTML-тегами.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

### 2.2 Интерактивность и управление состоянием (`INT`)

#### [TC-INT-001] Двусторонняя привязка `v-model`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти первый чекбокс `Default` в группе `Basic` и связанный `DemoValue`.
  2. Кликнуть по чекбоксу, проверить изменение `DemoValue` (`false` -> `true`) и `input.checked === true`.
  3. Кликнуть повторно и проверить возврат (`true` -> `false`) и `input.checked === false`.
- **Ожидаемый результат**: Значение `v-model` и состояние `input.checked` синхронно переключаются `false -> true -> false`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Синхронизация `v-model:selected` и `valueVariant`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Selected & Value Variant`.
  2. Проверить, что `Option Alpha` отмечен (`selected === 'alpha'`), а `Option Beta` не отмечен.
  3. Кликнуть по `Option Beta` и проверить обновление `DemoValue` на `"beta"` и снятие отметки с `Option Alpha`.
- **Ожидаемый результат**: Выбор `Option Beta` синхронизирует `selected` в `"beta"` и автоматически сбрасывает `Option Alpha`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Блокировка интерактивности в режимах `disabled` и `readonly`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Попытаться кликнуть по чекбоксам `Disabled` и `Readonly` в группе `States`.
  2. Проверить свойства `input.checked`, `input.disabled` и `input.readOnly`.
- **Ожидаемый результат**: Ни `Disabled`, ни `Readonly` не меняют `input.checked` при клике.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Программное управление через `expose` (`setValue`, `clear`, `checkValidity`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Expose & Validation`.
  2. Нажать `Check Validity` (ожидается `valid: false`), затем `Set True` (`value: true, valid: true`), затем `Set False` (`value: false, valid: false`), затем `Clear` (`value: undefined, valid: false`).
- **Ожидаемый результат**: `DemoValue` точно отражает результаты всех методов `expose`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

### 2.3 Граничные случаи (`BND`)

#### [TC-BND-001] Числовой ноль (`:label="0"`, `:description="0"`) и `modelValue: false`
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти третий чекбокс в группе `Basic` с `:label="0"` и `:description="0"`.
  2. Проверить текстовое содержимое `.d1-checkbox__label` и `.d1-checkbox__description`.
- **Ожидаемый результат**: Метка отображает `"0"`, описание отображает `"0"`, `input.checked === false`.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-002] `hasHtmlCode` и `forceShowMessage` при `disabled`
- **Приоритет**: `P2 (Medium)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить `HTML Helper Message` в группе `Appearances & Validation` на наличие `<strong>strong</strong>`.
  2. Проверить `Disabled with forceShowMessage` на видимость сообщения `"Visible even when disabled"`.
- **Ожидаемый результат**: HTML-тег `<strong>` отрендерен внутри сообщения, а при `disabled + forceShowMessage` вспомогательное сообщение видимо.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-003] Проверка переполнения текста и выравнивания по всем чекбоксам страницы
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить `scrollWidth <= clientWidth + 1` для всех `.d1-checkbox` и `.d1-checkbox__label` на странице.
- **Ожидаемый результат**: Все чекбоксы помещаются в свои контейнеры без обрезания и горизонтального переполнения.
- **Тип доказательства**: `Console/Log`

### 2.4 Адаптивность (`RSP`)

#### [TC-RSP-001] Отображение на планшете (`768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Изменить размер вьюпорта на `768×1024`.
- **Шаги теста**:
  1. Проверить `document.documentElement.scrollWidth <= window.innerWidth` и видимость элементов `D1Checkbox`.
- **Ожидаемый результат**: Горизонтальное переполнение отсутствует (`hasOverflow: false`), макет сохраняет целостность.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Отображение на мобильном экране (`375×812` и `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Изменить размер вьюпорта на `375×812`, затем на `320×568`.
- **Шаги теста**:
  1. Проверить горизонтальное переполнение на странице и перестроение `adaptive="rightSm"` (`order: 4` на `<640px`).
- **Ожидаемый результат**: На обоих мобильных размерах `hasOverflow: false`, на `<640px` `adaptive="rightSm"` перемещает индикатор чекбокса вправо.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантика HTML и WAI-ARIA атрибуты
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить корневой `<label>` (наличие `aria-labelledby` и `aria-describedby`, указывающих на реальные DOM ID), `aria-hidden="true"` на `.d1-checkbox__item`, и `aria-invalid="true"` на чекбоксе с `validationMessage`.
- **Ожидаемый результат**: Все ARIA-ссылки валидны, декоративный индикатор скрыт от скринридеров, ошибка валидации помечена `aria-invalid="true"`.
- **Тип доказательства**: `Console/Log`

#### [TC-A11Y-002] Клавиатурная навигация (`Tab` и `Space`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Установить фокус на нативный `<input type="checkbox">` первого чекбокса `Default`.
  2. Нажать клавишу `Space` и проверить изменение `checked` и `DemoValue`.
- **Ожидаемый результат**: Клавиша `Space` переключает состояние чекбокса и обновляет модель.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Генерация событий и чистота консоли
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Открыть `http://localhost:3000/component-checkbox`, очистить буфер сообщений консоли.
- **Шаги теста**:
  1. Кликнуть чекбокс `Event Tracker` в группе `Events`.
  2. Проверить отображение события в `DemoValue` и собрать все `console.error`, `pageerror` и `[Vue warn]` за всю сессию тестирования.
- **Ожидаемый результат**: `DemoValue` фиксирует события (`changeLite`), `consoleErrors: []`, `pageErrors: []`, `vueWarnings: []`.
- **Тип доказательства**: `Console/Log`
