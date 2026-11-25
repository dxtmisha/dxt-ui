# Спецификация тест-кейсов: D1FormattedUnit

- **Сущность**: `D1FormattedUnit`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/FormattedUnit` (`packages/constructor/src/constructors/FormattedUnit`)
- **Целевой URL**: `http://localhost:3000/component-formatted-unit`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `10`

---

## 1. Матрица покрытия

| Категория | Код | Количество | Приоритеты | Область фокуса |
| :--- | :--- | :---: | :--- | :--- |
| **Визуал и токены** | `VIS` | 2 | P0, P1 | Конвертация метрических величин в традиционные (`en-US`) и метрические (`ru-RU`, `de-DE`, `vi-VN`), все 13 единиц `GeoUnit`, локаль по умолчанию (`GeoRef`), RTL (`ar-SA`) и флаг `formatting` |
| **Интерактивность и функциональность** | `INT` | 2 | P0, P1 | Реактивное переключение значения (`0`, `-40`, `1000`, `''`), единицы (`Switch Unit`), локали (`Switch Locale`) и `Toggle Formatting`, жизненный цикл (`Toggle Mount`) |
| **Граничные значения и краевые случаи** | `BND` | 3 | P0, P1 | Нулевые значения (`0`, `-0`, `'0'`, `' 0 '`), отрицательные/десятичные (`-25`, `12.345`), пустые/`undefined` (`""`, `"   "`, `undefined`), `NaN`/`Infinity`/`-Infinity`, неизвестная единица (`unknown-unit`), Unicode/XSS и узкий контейнер (`240px`) |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) |
| **Доступность (A11Y)** | `A11Y` | 1 | P1 | Строчный тег `<span>` (`.d1-formattedUnit`), атрибуты `aria-label` и `lang` в контексте предложения (`Accessibility & Inline Context`) |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие ошибок консоли и предупреждений Vue |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовые конвертации (`celsius`, `kilometer`, `gram`, `kilogram`, `liter`) и локали (`en-US`, `ru-RU`, `de-DE`, `vi-VN`, `GeoRef`, RTL)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-formatted-unit`, вьюпорт `1440×900`.
- **Шаги**:
  1. Найти группу `Basic Conversions & Locales`.
  2. Проверить конвертацию в `en-US`: `25` `celsius` → `°F`, `10` `kilometer` → `mi`, `500` `gram` → `oz`, `75.5` `kilogram` → `lb`, `4` `liter` → `gal`.
  3. Проверить отображение без конвертации в метрических локалях `ru-RU`, `de-DE`, `vi-VN`, строкового значения `'42.5'`, экземпляра без `language` (глобальный `GeoRef`) и блока `dir="rtl"` с `ar-SA`.
- **Ожидаемый результат**: Значения в `en-US` автоматически конвертируются в американскую систему мер, в метрических локалях остаются метрическими, строковые и RTL-экземпляры отображаются без искажений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Все 13 единиц измерения `GeoUnit` и режим `formatting` (`true` / по умолчанию / `false`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыты группы `All 13 Supported GeoUnit Units` и `Formatting Flag (Default vs Raw)`.
- **Шаги**:
  1. Проверить рендер всех 13 поддерживаемых единиц: `millimeter`, `centimeter`, `meter`, `kilometer`, `square-meter`, `hectare`, `gram`, `kilogram`, `tonne`, `milliliter`, `liter`, `celsius`, `kilometer-per-hour` (включая текстовые fallback-метки `m²` / `sq ft`, `t` / `tn`).
  2. В группе `Formatting Flag (Default vs Raw)` сравнить рендер с опущенным `formatting`, `:formatting="true"` и `:formatting="false"` (`100` и `'36.6'`).
- **Ожидаемый результат**: Все 13 единиц корректно форматируются; при опущенном `formatting` поведение совпадает с `:formatting="true"`, а при `:formatting="false"` выводится необработанное исходное значение (`100`, `36.6`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Реактивное обновление значения, единицы измерения, локали и флага `formatting`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыта группа `Reactive Controls`, начальное состояние `100 (en-US, unit=kilometer, formatting=true)`.
- **Шаги**:
  1. Последовательно нажать `Set 0`, `Set -40`, `Set 1000`, `Switch Unit`, `Switch Locale`, `Toggle Formatting`, `Clear`.
  2. Наблюдать изменение текста внутри `[data-testid="demo-formatted-unit-reactive"]` и строки состояния `State`.
- **Ожидаемый результат**: Вывод мгновенно пересчитывается и переформатируется при каждом нажатии без задержек и ошибок, при `Toggle Formatting` отображается сырое значение, при `Clear` отображается пустая строка.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Условное монтирование и размонтирование (`Lifecycle & Conditional Mount`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти группу `Lifecycle & Conditional Mount`.
- **Шаги**:
  1. Нажать кнопку `Toggle Mount` (размонтировать) — убедиться, что `Mounted: false` и контейнер с `D1FormattedUnit` удалён из DOM.
  2. Нажать `Toggle Mount` повторно — убедиться в корректном повторном рендере `100` `kilometer` в `en-US` (`Mounted: true`).
- **Ожидаемый результат**: Компонент чисто размонтируется и монтируется заново без утечек и предупреждений.
- **Тип доказательства**: `Console/Log`

### 2.3 Граничные значения и краевые случаи (`BND`)

#### [TC-BND-001] Нулевые, отрицательные и десятичные значения (`0`, `-0`, `'0'`, `' 0 '`, `-25`, `12.345`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыта группа `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить отображение `0` (`celsius` → `32°F`), `-0` (`kilogram`), `'0'` (`liter`), `' 0 '` (`gram`), `-25` (`celsius` → `-13°F`) и `12.345` (`kilometer`, `de-DE`).
- **Ожидаемый результат**: Все нулевые варианты обрабатываются как валидные числа (не отбрасываются как пустые), отрицательные температуры и десятичные числа форматируются корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Пустые, неопределённые, неконечные значения и неизвестная единица (`""`, `"   "`, `undefined`, `NaN`, `Infinity`, `-Infinity`, `unknown-unit`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыта группа `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить `[data-testid="empty-string-probe"]`, `[data-testid="whitespace-probe"]`, `[data-testid="undefined-probe"]`.
  2. Проверить рендер `Number.NaN`, `Number.POSITIVE_INFINITY`, `Number.NEGATIVE_INFINITY` и `unit="unknown-unit"` со значением `42`.
- **Ожидаемый результат**: Пустые/`undefined` значения возвращают исходную/пустую строку без исключений, `NaN`/`Infinity`/`-Infinity` не конвертируются как числа и выводятся как строка, для `unknown-unit` возвращается исходное значение `'42'`.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-003] Unicode/Emoji, XSS-экранирование и узкий контейнер (`240px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыта группа `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить рендер строки `"Tiếng Việt / Кириллица 🚀"` (`formatting: false`) и отсутствие тега `<img>` в DOM для `"<img src=x onerror=alert(1)>"` (`formatting: false`).
  2. Проверить `.demo-formatted-unit-page__narrow` (`max-width: 240px`) со строкой `"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"`.
- **Ожидаемый результат**: XSS-строка экранирована как безопасный текст, Unicode/Emoji отображаются корректно, узкий контейнер переносит текст без горизонтального переполнения.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Вьюпорты Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Страница загружена.
- **Шаги**:
  1. Проверить `document.documentElement.scrollWidth <= window.innerWidth` на разрешениях `1440×900`, `768×1024`, `375×812` и `320×568`.
- **Ожидаемый результат**: Горизонтальное переполнение и наложение элементов отсутствуют на всех разрешениях.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантический строчный тег `<span>`, `aria-label` и `lang`
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Страница загружена, проверить группу `Accessibility & Inline Context`.
- **Шаги**:
  1. Проверить тег всех экземпляров `.d1-formattedUnit` (строго `SPAN`).
  2. Проверить наличие `aria-label="180 degrees Celsius, converted to 356 degrees Fahrenheit"` и `lang="en-US"` внутри строчного абзаца `<p>`.
- **Ожидаемый результат**: Все экземпляры рендерятся как `<span>` без разрыва строчного контекста, атрибуты `aria-label` и `lang` присутствуют на корневом элементе.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Проверка консоли и сетевых запросов
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Выполнены все интерактивные сценарии на странице.
- **Шаги**:
  1. Проверить списки `console.error`, `[Vue warn]`, `pageerror` и `failedRequests`.
- **Ожидаемый результат**: Все списки пусты, ошибки и предупреждения отсутствуют.
- **Тип доказательства**: `Console/Log`
