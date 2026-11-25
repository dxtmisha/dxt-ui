# Спецификация тест-кейсов: D1FieldMessage

- **Сущность**: `D1FieldMessage`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/FieldMessage` (`packages/constructor/src/constructors/FieldMessage`)
- **Целевой URL**: `http://localhost:3000/component-field-message`
- **Справочные материалы**: `Отсутствуют`
- **Дата последней проверки / обновления**: `2026-11-25`
- **Всего тест-кейсов**: `12`

---

## 1. Матрица покрытия

| Категория | Код | Количество | Приоритеты | Область фокуса |
| :--- | :--- | :---: | :--- | :--- |
| **Визуал и токены** | `VIS` | 3 | P0, P1 | Базовый рендеринг, приоритет `--validation` > `--warning` > `info`, цвет `--warning` на тексте и `D1FieldCounter`, `is-skeleton`, тёмная тема |
| **Интерактивность и функциональность** | `INT` | 4 | P0, P1 | Реактивные переключения (`Interactive Controls`), `disabled`/`forceShow`, `hasHtmlCode`, слоты `#helper`/`#warning`/`#validation` с scoped-привязками, жизненный цикл (`Toggle Mount`) |
| **Граничные значения и краевые случаи** | `BND` | 2 | P1, P2 | Пустые/пробельные/`undefined` строки, `"A"`, `"0"`, `counter: 0`, длинный/неразрывный текст в `240px`, XSS, Unicode/Emoji, RTL |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Отображение и перенос на разрешениях `1440×900`, `768×1024`, `375×812`, `320×568` |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `role="alert"` только на ошибке, `helperId`/`warningId`/`validationId`/`counterId` и `aria-describedby` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие `console.error`, `pageerror` и `[Vue warn]` при всех сценариях |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг `helperMessage`, `warningMessage`, `validationMessage` и CSS-приоритета состояний
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-field-message`, вьюпорт `1440×900`, светлая тема (`Light`).
- **Шаги**:
  1. Найти секцию `Helper, Warning, Validation & Priority`.
  2. Проверить вычисленные стили и классы `.d1-fieldMessage`, `.d1-fieldMessage--warning`, `.d1-fieldMessage--validation`, `.d1-fieldMessage__info`, `.d1-fieldMessage__warning` и `.d1-fieldMessage__error`.
  3. Убедиться, что при одновременном наличии `helperMessage` и `warningMessage` скрыт `.d1-fieldMessage__info` (`display: none`), а `.d1-fieldMessage__warning` виден в цвете предупреждения.
  4. Убедиться, что при одновременном наличии `helperMessage`, `warningMessage` и `validationMessage` скрыты и `__info`, и `__warning` (`display: none`), а `__error` отображается с цветом ошибки (приоритет `--validation` > `--warning` > `info`).
- **Ожидаемый результат**: Компонент рендерится с корректными отступами, типографикой, цветами токенов и без наложения текста.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Состояние `is-skeleton` и интеграция с `D1FieldCounter` (включая цвет в `--warning` и `--validation`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-field-message`, вьюпорт `1440×900`.
- **Шаги**:
  1. Найти секции `Counter Integration` и `Skeleton`.
  2. Проверить выравнивание текста сообщения слева и счётчика справа (`.d1-fieldMessage__fieldCounter`).
  3. Проверить, что в карточке `warningMessage + counter` модификатор `.d1-fieldMessage--warning` окрашивает и текст предупреждения, и `D1FieldCounter` в цвет токена warning (аналогично `--validation`).
  4. Проверить наличие класса `d1-skeleton__textVariant` на `.d1-fieldMessage__info` и корректное отображение внутри `D1Skeleton`.
- **Ожидаемый результат**: Счётчик и текст выровнены без наложения, цвет `--warning` распространяется на счётчик, скелетон-состояние отображается корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Проверка отображения в тёмной теме (`Dark`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-field-message`, вьюпорт `1440×900`, переключить тему на `Dark` (класс `d1-dark`).
- **Шаги**:
  1. Активировать тёмную палитру на странице.
  2. Проверить контраст и цвета текста для `helperMessage`, `warningMessage` и `validationMessage`.
- **Ожидаемый результат**: Цвета текста, предупреждений и ошибок валидации адаптируются к тёмной теме и остаются читаемыми.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Интерактивное переключение пропсов и слотов в группе `Interactive Controls`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-field-message`, найти блок `Interactive Controls`.
- **Шаги**:
  1. Последовательно нажимать кнопки: `Toggle Warning`, `Toggle Validation`, `Toggle Disabled`, `Toggle Force Show`, `Toggle HTML`, `Toggle Skeleton`, `Counter +10`, `Toggle Counter`, `Toggle Slots`, `Toggle Helper`.
  2. После каждого нажатия проверять обновление DOM внутри `[data-testid="interactive-preview"]` и JSON-состояния `State`, включая переключение приоритета `helper` -> `warning` -> `validation`.
- **Ожидаемый результат**: Все состояния переключаются реактивно, классы и дочерние элементы обновляются без задержек и ошибок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Проверка `disabled`, `forceShow` и режима `hasHtmlCode`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти секции `Disabled & Force Show` и `HTML Code & Security`.
- **Шаги**:
  1. Проверить `[data-testid="disabled-hidden-probe"]` — убедиться, что `.d1-fieldMessage` отсутствует в DOM при `disabled` без `forceShow`.
  2. Проверить наличие `.d1-fieldMessage` в карточках с `disabled` + `forceShow` (для helper, warning и validation).
  3. Проверить, что при `hasHtmlCode=false` HTML-теги выводятся как текст, а при `hasHtmlCode=true` рендерятся теги `<strong>`, `<em>`, `<b>` (включая `warningMessage`).
- **Ожидаемый результат**: Логика скрытия/принудительного отображения и безопасный HTML-рендеринг работают строго по контракту.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Проверка именованных и scoped-слотов `#helper`, `#warning` и `#validation`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти секцию `Slots & Scoped Bindings`.
- **Шаги**:
  1. Проверить рендеринг слотов `#helper`, `#warning` и `#validation` без строковых пропсов.
  2. Проверить scoped-слоты с прокинутыми `{ message, helperMessage, warningMessage, validationMessage }` при наличии `hasHtmlCode: true`.
- **Ожидаемый результат**: Слоты корректно проецируются в `.d1-fieldMessage__info`, `.d1-fieldMessage__warning` и `.d1-fieldMessage__error`, отображая все 4 поля контекста слота.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Условное монтирование и размонтирование (`Lifecycle & Conditional Mount`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти секцию `Lifecycle & Conditional Mount`.
- **Шаги**:
  1. Нажать кнопку `Toggle Mount` (скрыть) — убедиться, что компонент удаляется из DOM и `Mounted: false`.
  2. Нажать `Toggle Mount` повторно — убедиться, что `D1FieldMessage` корректно пересоздаётся.
- **Ожидаемый результат**: Жизненный цикл монтирования/размонтирования проходит чисто без ошибок.
- **Тип доказательства**: `Console/Log`

### 2.3 Граничные значения и краевые случаи (`BND`)

#### [TC-BND-001] Пустые/пробельные/`undefined` строки, `"A"`, `"0"`, `counter: 0` и узкий контейнер (`240px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Найти секции `Counter Integration` и `Boundary & Multilingual`.
- **Шаги**:
  1. Проверить `[data-testid="empty-probe"]` — убедиться, что пустые, пробельные и `undefined` значения не создают `.d1-fieldMessage` в DOM.
  2. Проверить карточку с `:counter="0"`, `"A"` и строкой `"0"` в сообщении.
  3. Проверить ограниченные контейнеры `.demo-field-message-page__narrow` (`240px`) с длинным текстом и неразрывной строкой `AAAA...`.
- **Ожидаемый результат**: Пробельные значения скрываются, `0` не отбрасывается как falsy, длинные и неразрывные строки переносятся внутри `240px` без переполнения.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Многоязычность, Unicode/Emoji, защита от XSS и RTL (`dir="rtl"`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Найти секции `HTML Code & Security` и `Boundary & Multilingual`.
- **Шаги**:
  1. Проверить отсутствие `<img>` внутри карточек с `<img src=x onerror=alert(1)>` при `hasHtmlCode=false`.
  2. Проверить отображение кириллицы, вьетнамской диакритики (`Tiếng Việt`) и Emoji (`🚀🔥✨🔒`).
  3. Проверить блок `dir="rtl"` с арабским текстом и счётчиком.
- **Ожидаемый результат**: XSS экранирован как текст, Unicode-символы отображаются без искажений, RTL-выравнивание корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптация на разрешениях `1440×900`, `768×1024`, `375×812` и `320×568`
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Открыть `http://localhost:3000/component-field-message`.
- **Шаги**:
  1. Изменить размер вьюпорта последовательно на `1440×900`, `768×1024`, `375×812` и `320×568`.
  2. Измерить ширину всех `.d1-fieldMessage` относительно их контейнеров и проверить отсутствие горизонтального выхода за границы компонента.
- **Ожидаемый результат**: Компонент корректно переносит текст и умещается внутри контейнера на всех разрешениях.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Проверка ARIA-атрибутов (`role="alert"`, `id` и `aria-describedby`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility`
- **Предусловия**: Открыть `http://localhost:3000/component-field-message`, секция `Accessibility (ARIA & Live Regions)`.
- **Шаги**:
  1. Проверить наличие `role="alert"` на каждом `.d1-fieldMessage__error` и его отсутствие на `.d1-fieldMessage__warning`.
  2. Проверить совпадение `aria-describedby` на `#demo-field-message-input` с реальными `id` элементов `#demo-field-message-helper`, `#demo-field-message-warning` и `#demo-field-message-validation` в DOM.
  3. Проверить передачу `counter-id="demo-field-message-counter-id"` в DOM счётчика.
- **Ожидаемый результат**: Все ARIA-связи и роли валидны и соответствуют стандарту WAI-ARIA.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Отсутствие ошибок консоли, исключений страницы и предупреждений Vue
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Подключить перехватчики `console` и `pageerror` до навигации на `http://localhost:3000/component-field-message`.
- **Шаги**:
  1. Пройти все проверки `VIS`, `INT`, `BND`, `RSP` и `A11Y`.
  2. Собрать все сообщения `console.error`, `console.warn` (`[Vue warn]`) и `pageerror`.
- **Ожидаемый результат**: `0` ошибок консоли, `0` необработанных исключений и `0` предупреждений Vue.
- **Тип доказательства**: `Console/Log`
