# Спецификация тест-кейсов: D1FieldMessage

- **Сущность**: `D1FieldMessage`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/FieldMessage` (`packages/constructor/src/constructors/FieldMessage`)
- **Целевой URL**: `http://localhost:3000/component-field-message`
- **Справочные материалы**: `Отсутствуют`
- **Дата последней проверки / обновления**: `2026-11-16`
- **Всего тест-кейсов**: `11`

---

## 1. Обзорная матрица покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :---: | :--- | :--- |
| **Визуал и токены** | `VIS` | 3 | P0, P1 | Базовый рендеринг, приоритет `--validation`, `is-skeleton`, `D1FieldCounter`, тёмная тема |
| **Интерактивность и функционал** | `INT` | 3 | P0, P1 | Реактивные переключения, `disabled`/`forceShow`, `hasHtmlCode`, слоты `#helper`/`#validation` |
| **Границы и крайние случаи** | `BND` | 2 | P1, P2 | Пустые и пробельные строки, `counter: 0`, длинный/неразрывный текст, XSS, Unicode, RTL |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Отображение и перенос на разрешениях `1440×900`, `768×1024`, `375×812`, `320×568` |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `role="alert"`, `helperId`/`validationId`/`counterId` и `aria-describedby` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие `console.error`, `pageerror` и `[Vue warn]` при всех сценариях |

---

## 2. Подробные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг helperMessage, validationMessage и приоритета валидации
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-field-message`, вьюпорт `1440×900`, светлая тема (`Light`).
- **Шаги тестирования**:
  1. Найти секцию `Helper, Validation & ARIA Binding`.
  2. Проверить вычисленные стили, классы `.d1-fieldMessage`, `.d1-fieldMessage--validation`, `.d1-fieldMessage__info` и `.d1-fieldMessage__error`.
  3. Убедиться, что при одновременном наличии `helperMessage` и `validationMessage` элемент `.d1-fieldMessage__info` скрыт (`display: none`), а `.d1-fieldMessage__error` отображается с цветом ошибки.
- **Ожидаемый результат**: Компонент рендерится с корректными отступами, типографикой, цветами токенов и без наложения текста.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Состояние `is-skeleton` и интеграция с `D1FieldCounter`
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-field-message`, вьюпорт `1440×900`.
- **Шаги тестирования**:
  1. Найти секции `Counter Integration` и `Skeleton`.
  2. Проверить выравнивание текста сообщения слева и счётчика справа (`.d1-fieldMessage__fieldCounter`).
  3. Проверить наличие класса `d1-skeleton__textVariant` на `.d1-fieldMessage__info` и корректное отображение внутри `D1Skeleton`.
- **Ожидаемый результат**: Счётчик и текст выровнены без наложения; скелетон-состояние отображается корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Проверка отображения в тёмной теме (`Dark`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-field-message`, вьюпорт `1440×900`, переключить тему на `Dark` (класс `d1-theme-dark` / `prefers-color-scheme: dark`).
- **Шаги тестирования**:
  1. Активировать тёмную палитру на странице.
  2. Проверить контраст и цвета текста для `helperMessage` и `validationMessage`.
- **Ожидаемый результат**: Цвета текста и ошибок валидации адаптируются к тёмной теме и остаются читаемыми.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

### 2.2 Интерактивность и функционал (`INT`)

#### [TC-INT-001] Интерактивное переключение пропсов и слотов в группе `Interactive Controls`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-field-message`, найти блок `Interactive Controls`.
- **Шаги тестирования**:
  1. Последовательно нажимать кнопки: `Toggle Validation`, `Toggle Disabled`, `Toggle Force Show`, `Toggle HTML`, `Toggle Skeleton`, `Counter +10`, `Toggle Counter`, `Toggle Slots`, `Toggle Helper`.
  2. После каждого нажатия проверять обновление DOM внутри `[data-testid="interactive-preview"]` и JSON-состояния `State`.
- **Ожидаемый результат**: Все состояния переключаются реактивно, классы и дочерние элементы обновляются без задержек и ошибок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Проверка `disabled`, `forceShow` и режима `hasHtmlCode`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти секции `Disabled & Force Show` и `HTML Code & Security`.
- **Шаги тестирования**:
  1. Проверить `[data-testid="disabled-hidden-probe"]` — убедиться, что `.d1-fieldMessage` отсутствует в DOM при `disabled` без `forceShow`.
  2. Проверить наличие `.d1-fieldMessage` в карточках с `disabled` + `forceShow`.
  3. Проверить, что при `hasHtmlCode=false` HTML-теги выводятся как текст, а при `hasHtmlCode=true` рендерятся теги `<strong>`, `<em>`, `<b>`.
- **Ожидаемый результат**: Логика скрытия/принудительного отображения и безопасный HTML-рендеринг работают строго по контракту.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Проверка именованных и scoped-слотов `#helper` и `#validation`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти секцию `Slots`.
- **Шаги тестирования**:
  1. Проверить рендеринг слотов `#helper` и `#validation` без строковых пропсов.
  2. Проверить scoped-слоты с прокинутыми `{ helperMessage, validationMessage }` при наличии `hasHtmlCode: true`.
- **Ожидаемый результат**: Слоты корректно проецируются в `.d1-fieldMessage__info` и `.d1-fieldMessage__error`, получая актуальные данные слота.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Пустые/пробельные строки, `counter: 0` и переполнение длинным текстом
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Найти секции `Counter Integration` и `Boundary & Multilingual`.
- **Шаги тестирования**:
  1. Проверить `[data-testid="empty-probe"]` — убедиться, что пустая и пробельная строки не создают `.d1-fieldMessage` в DOM.
  2. Проверить карточку с `:counter="0"` — убедиться, что отображается `0 / 50`.
  3. Проверить ограниченные контейнеры `280px` с длинным текстом и неразрывной строкой `AAAA...`.
- **Ожидаемый результат**: Пробельные значения скрываются, `0` не отбрасывается как falsy, длинные строки не ломают ширину родителя.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Многоязычность, Unicode/Emoji, защита от XSS и RTL (`dir="rtl"`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Найти секции `HTML Code & Security` и `Boundary & Multilingual`.
- **Шаги тестирования**:
  1. Проверить отсутствие `<img>` внутри карточки с `<img src=x onerror=alert(1)>` при `hasHtmlCode=false`.
  2. Проверить отображение кириллицы, вьетнамской диакритики (`Học tiếng Việt`) и Emoji (`🚀`, `🔒`).
  3. Проверить блок `dir="rtl"` с арабским текстом и счётчиком.
- **Ожидаемый результат**: XSS экранирован как текст, Unicode-символы отображаются без искажений, RTL-выравнивание корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптация на разрешениях `1440×900`, `768×1024`, `375×812` и `320×568`
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Открыть `http://localhost:3000/component-field-message`.
- **Шаги тестирования**:
  1. Изменить размер вьюпорта последовательно на `1440×900`, `768×1024`, `375×812` и `320×568`.
  2. Измерить ширину всех `.d1-fieldMessage` относительно их контейнеров и проверить отсутствие горизонтального выхода за границы компонента.
- **Ожидаемый результат**: Компонент корректно переносит текст и умещается внутри контейнера на всех разрешениях.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Проверка ARIA-атрибутов (`role="alert"`, `id` и `aria-describedby`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility`
- **Предусловия**: Открыть `http://localhost:3000/component-field-message`, секция `Helper, Validation & ARIA Binding`.
- **Шаги тестирования**:
  1. Проверить наличие `role="alert"` на каждом `.d1-fieldMessage__error`.
  2. Проверить совпадение `aria-describedby` на `#demo-field-message-input` с `id` элементов `#demo-field-message-helper` и `#demo-field-message-validation`.
  3. Проверить передачу `counter-id="demo-field-message-counter-id"` в DOM счётчика.
- **Ожидаемый результат**: Все ARIA-связи и роли валидны и соответствуют стандарту WAI-ARIA.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Отсутствие ошибок консоли, исключений страницы и предупреждений Vue
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Подключить перехватчики `console` и `pageerror` до навигации на `http://localhost:3000/component-field-message`.
- **Шаги тестирования**:
  1. Пройти все проверки `VIS`, `INT`, `BND`, `RSP` и `A11Y`.
  2. Собрать все сообщения `console.error`, `console.warn` (`[Vue warn]`) и `pageerror`.
- **Ожидаемый результат**: `0` ошибок консоли, `0` необработанных исключений и `0` предупреждений Vue.
- **Тип доказательства**: `Console/Log`
