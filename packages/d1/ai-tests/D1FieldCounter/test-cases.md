# Спецификация тест-кейсов: D1FieldCounter

- **Сущность**: `D1FieldCounter`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/FieldCounter`, `packages/constructor/src/constructors/FieldCounter`
- **Целевой URL**: `http://localhost:3000/component-field-counter`
- **Справочные материалы**: `None`
- **Последняя проверка / обновление**: `2026-11-16`
- **Всего тест-кейсов**: `10`

---

## 1. Матрица покрытия

| Категория | Код | Количество | Приоритеты | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 2 | P0, P1 | Базовый рендер (`counter`, `maxlength`, строковые/нулевые значения), пользовательские шаблоны (`template` с текстом и HTML), стили `.d1-fieldCounter` |
| **Интерактивность и функциональность** | `INT` | 3 | P0, P1 | Условное монтирование/размонтирование, динамическое обновление счётчика, активация ARIA live-текста при достижении `maxlengthOnce` и превышении лимита |
| **Граничные значения и краевые случаи** | `BND` | 2 | P1 | Нулевые значения (`0`, `0 / 100`), отсутствие `counter` при наличии `maxlength`, превышение лимита (`110 / 100`), строковый `maxlengthOnce` |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Вьюпорты `1440×900`, `768×1024`, `375×812`, `320×568` — отсутствие горизонтального переполнения и обрезания текста |
| **Доступность (A11y)** | `A11Y` | 1 | P0 | Явный `id`, скрытый live-элемент `.d1-fieldCounter__aria` (`aria-live="polite"`, дочерний `<span role="img" aria-label="...">`), пороговые тексты `textCharacterRemaining` и `textCharacterLimit` |
| **Консоль и стабильность рантайма** | `LOG` | 1 | P0 | Отсутствие ошибок консоли, `pageerror` и `[Vue warn]` при загрузке страницы и всех интерактивных кликах |

---

## 2. Детальные тест-кейсы

### [TC-VIS-001] Базовый рендер числовых, строковых и частичных комбинаций `counter` / `maxlength`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-field-counter` во вьюпорте `1440×900`.
- **Шаги**:
  1. Проверить группу `Basic Display` (6 вариантов: числовые `42 / 100`, строковые `75 / 200`, только `42`, `0 / 100`, `0`, только `maxlength="50"` -> `0 / 50`).
  2. Измерить `getBoundingClientRect()` и `window.getComputedStyle()` корневых `.d1-field-counter`.
- **Ожидаемый результат**: Все 6 экземпляров отрендерены как `<span>` с классом `d1-field-counter`, ненулевыми габаритами и ожидаемым текстом (`42 / 100`, `75 / 200`, `42`, `0 / 100`, `0`, `0 / 50`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

### [TC-VIS-002] Пользовательские шаблоны (`template`), HTML-разметка и явный `id`
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-field-counter`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить группу `Custom Templates & ID` (`[c] of [m]`, `[c]/[m]`, `<b>[c]</b> / <i>[m]</i> chars`, `Entered: [c] chars`, явный `id="demo-field-counter-custom-id"`).
  2. Проверить наличие дочерних тегов `<b>` и `<i>` внутри HTML-шаблона.
- **Ожидаемый результат**: Плейсхолдеры `[c]` и `[m]` корректно интерполируются, HTML-теги рендерятся в DOM без экранирования, `id="demo-field-counter-custom-id"` установлен на корневом элементе.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

### [TC-INT-001] Условное монтирование при отсутствии и появлении пропов (`is()`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Страница `http://localhost:3000/component-field-counter`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить содержимое `#demo-counter-empty-wrapper` до нажатия кнопки `Provide Counter Prop`.
  2. Нажать кнопку `Provide Counter Prop` и повторно проверить `#demo-counter-empty-wrapper`.
  3. Нажать кнопку `Hide Props` и убедиться в размонтировании счётчика.
- **Ожидаемый результат**: При `undefined` пропах `.d1-field-counter` отсутствует в DOM (`null`); после клика монтируется текст `5 / 20`; после повторного клика снова размонтируется.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

### [TC-INT-002] Интерактивное изменение счётчика и порог `maxlengthOnce` в Playground
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Страница `http://localhost:3000/component-field-counter`, вьюпорт `1440×900`.
- **Шаги**:
  1. Нажать `+10` (значение `50`), затем `Near Limit (92)` на интерактивном стенде `#demo-counter-interactive`.
  2. Проверить видимый текст счётчика и содержимое скрытого ARIA-элемента до и после достижения порога (`remaining = 8 <= 15`).
- **Ожидаемый результат**: Видимый текст обновляется на `Characters: 50 of 100` и далее `Characters: 92 of 100`; в безопасной зоне ARIA live-текст пустой, а при `92` содержит `Remaining 8 characters`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

### [TC-INT-003] Достижение и превышение лимита в Interactive Playground
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Страница `http://localhost:3000/component-field-counter`, вьюпорт `1440×900`.
- **Шаги**:
  1. Нажать кнопку `At Limit (100)`, затем `Exceed (105)`, затем `Reset (0)`.
  2. Проверить текст счётчика и содержимое ARIA live-области на каждом шаге.
- **Ожидаемый результат**: При `100` и `105` ARIA-область содержит `Character limit exceeded`, видимый текст отражает `Characters: 100 of 100` и `Characters: 105 of 100`, а после `Reset (0)` счётчик возвращается к `Characters: 0 of 100` с пустой ARIA-областью.
- **Тип доказательства**: `Both` (`./screenshots/TC-INT-003.png`)

### [TC-BND-001] Граничные значения порога (`10%`, `15`, `'30'`) и превышения (`110 / 100`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundary & Edge Cases`
- **Предусловия**: Страница `http://localhost:3000/component-field-counter`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить элементы `#demo-counter-default-threshold`, `#demo-counter-custom-remaining`, `#demo-counter-custom-limit`, `#demo-counter-exceeded`.
  2. Измерить текст основного `<span>` и скрытой ARIA-области каждого примера.
- **Ожидаемый результат**: `92 / 100` активирует стандартный текст остатка (`Remaining 8 characters`), `88 / 100` с `maxlengthOnce=15` выводит `Only 12 chars left`, `100 / 100` выводит `Limit reached!`, `110 / 100` выводит `Maximum characters exceeded` без переполнения макета.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

### [TC-BND-002] Нулевой `counter` и отсутствие `counter` при заданном `maxlength`
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundary & Edge Cases`
- **Предусловия**: Страница `http://localhost:3000/component-field-counter`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить DOM-текст экземпляров `Zero Counter with Maxlength`, `Zero Counter Only`, `Maxlength Only`.
- **Ожидаемый результат**: Значения `0 / 100`, `0`, `0 / 50` рендерятся корректно (ноль не отбрасывается как пустое значение).
- **Тип доказательства**: `Console/Log`

### [TC-RSP-001] Адаптивность на десктопе, планшете и мобильных вьюпортах
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsiveness`
- **Предусловия**: Открыть `http://localhost:3000/component-field-counter`.
- **Шаги**:
  1. Проверить макет и `document.documentElement.scrollWidth <= window.innerWidth` при ширинах `1440×900`, `768×1024`, `375×812`, `320×568`.
  2. Проверить видимость и отсутствие обрезания `.d1-fieldCounter` на `320×568`.
- **Ожидаемый результат**: Горизонтальная прокрутка отсутствует (`scrollWidth <= innerWidth`) на всех 4 разрешениях, элементы счётчика не сжимаются в нулевую ширину и не выходят за пределы контейнера.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### [TC-A11Y-001] ARIA live-регион, атрибуты доступности и визуальное скрытие `.d1-fieldCounter__aria`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Страница `http://localhost:3000/component-field-counter`, вьюпорт `1440×900`.
- **Шаги**:
  1. Найти соседний live-элемент `.d1-fieldCounter__aria` после `#demo-counter-custom-remaining` и `#demo-counter-interactive`.
  2. Проверить атрибуты `aria-live`, `role`, `aria-label` на дочернем `<span>` и вычисленные стили скрытия (`position: absolute`, нулевые габариты).
- **Ожидаемый результат**: Элемент `.d1-fieldCounter__aria` имеет `aria-live="polite"`, `position: absolute`, `width: 0px`, `height: 0px`, а дочерний `<span role="img" aria-label="...">` содержит актуальное сообщение для скринридера.
- **Тип доказательства**: `Console/Log`

### [TC-LOG-001] Чистота консоли, отсутствие `[Vue warn]` и ошибок runtime
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Подписаться на события `console` и `pageerror` до загрузки `http://localhost:3000/component-field-counter`.
- **Шаги**:
  1. Загрузить страницу и выполнить весь цикл интерактивных кликов (`Provide Counter Prop`, `Hide Props`, `-10`, `+10`, `Near Limit`, `At Limit`, `Exceed`, `Reset`).
  2. Проверить собранные логи консоли и ошибки страницы.
- **Ожидаемый результат**: `0` ошибок консоли, `0` необработанных `pageerror`, `0` предупреждений `[Vue warn]`.
- **Тип доказательства**: `Console/Log`
