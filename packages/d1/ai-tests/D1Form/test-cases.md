# Спецификация тест-кейсов: D1Form

- **Сущность**: `D1Form`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Form` (`packages/constructor/src/constructors/Form`)
- **Целевой URL**: `http://localhost:3000/component-form`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `13`

---

## 1. Матрица покрытия

| Категория | Код | Количество | Приоритеты | Область фокуса |
| :--- | :--- | :---: | :--- | :--- |
| **Визуал и токены** | `VIS` | 2 | P0, P1 | Полная кастомная форма со слотами (`header`/`default`/`footer`) и нативный режим (`native=true`) |
| **Интерактивность и функциональность** | `INT` | 5 | P0, P1 | Методы `defineExpose` (`checkValidity`, `set`, `getValues`, `setValues`, `setValuesAll`, `reset`, `submit`), нативная форма, однонаправленный проп `:value` (`@update:value`), валидация invalid -> valid -> reset, жизненный цикл `v-if` |
| **Границы и крайние случаи** | `BND` | 2 | P1 | Проброс HTML-атрибутов (`action`, `method`, `enctype`, `target`, `autocomplete`, `novalidate`), пустая форма, `""`/`"   "`/`0`/Unicode/XSS и узкий контейнер (`240px`) |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) |
| **Доступность (A11Y)** | `A11Y` | 1 | P0 | Семантический тег `<form>`, `aria-label`, `<fieldset>`/`<legend>`, наличие `novalidate`, слоты `#header`/`#footer`, отправка по `Enter` |
| **Консоль и рантайм** | `LOG` | 2 | P0 | Полное отслеживание всех событий `FormEmits` (`update:modelValue`, `update:value`, `input`, `inputLite`, `inputValues`, `change`, `changeLite`, `changeValues`, `reset`, `submit`) и отсутствие ошибок консоли/`[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Полная кастомная форма (`v-model` и слоты)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-form`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить отображение всех полей формы (`D1Input`, `D1InputImage`, `D1InputPhone`, `D1InputSocial`, `D1Textarea`, `D1Select`, `D1SliderField`, `D1Switch`, `D1Radio`, `D1MenuButton`, `D1MenuChip`, `D1Checkbox`), слотов `#header`/`#footer` и панели состояния.
- **Ожидаемый результат**: Все элементы формы и слоты отображаются ровно без наложений и клиппинга.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Нативный режим (`native=true`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыта группа `Native HTML Form Elements (native=true)`.
- **Шаги**:
  1. Проверить отображение нативных `<input>`, `<select>`, `<textarea>`, `checkbox` и `radio`.
- **Ожидаемый результат**: Нативные элементы управления корректно синхронизированы с начальными значениями `v-model`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Экспонированные методы (`checkValidity`, `set`, `getValues`, `setValues`, `setValuesAll`, `reset`, `submit`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыта основная форма.
- **Шаги**:
  1. Нажать последовательно `Check Validity`, `Set Username`, `Get Values`, `Fill Sample Data`, `Expose Reset`, `Programmatic Submit` и `Clear Form`.
  2. Проверить значения в `Events & Status` (`Validity Status`, `getValues() Snapshot`, `Last Triggered Event`, `Event Payload`) и `Current Form Values (v-model)`.
- **Ожидаемый результат**: `checkValidity()` возвращает `true`, `set('username', 'updated_user')` обновляет поле, `setValues()` заполняет `alice_wonder`, `reset()` восстанавливает исходные значения, `submit()` вызывает `submit` без перезагрузки страницы, `setValuesAll({})` очищает форму.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Программное заполнение, отправка и сброс нативной формы (`native=true`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыта группа `Native HTML Form Elements (native=true)`.
- **Шаги**:
  1. Нажать `Fill Native` и проверить синхронизацию `input[name="title"]`, `select`, `textarea`, `checkbox` и `radio`.
  2. Нажать `Submit Native` и проверить срабатывание события без перезагрузки страницы.
  3. Нажать `Reset Native` и убедиться в восстановлении исходных нативных значений.
- **Ожидаемый результат**: Все нативные контролы обновляются до `"Updated Native Title"` и сбрасываются к начальному состоянию.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Управляемый проп `:value` и событие `@update:value`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти группу `Controlled :value & Form Attributes`.
- **Шаги**:
  1. Нажать `Apply :value Prop` и затем `Read getValues()`.
  2. Проверить обновление полей `coupon` (`WELCOME50`) и `region` (`eu`).
- **Ожидаемый результат**: Наблюдатель за `props.value` в `FormValue` синхронизирует дочерние поля формы, `getValues()` возвращает `{ coupon: 'WELCOME50', region: 'eu' }`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Поток валидации (`invalid` -> `valid` -> `reset`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти группу `Validation & Invalid State Flow`, поле `requiredCode` пустое.
- **Шаги**:
  1. Нажать `Check Validation` — проверить `valid=false`.
  2. Нажать `Fill Valid Code` — проверить `valid=true` и `requiredCode="VALID-2026"`.
  3. Нажать `Reset to Initial` — проверить возврат к `valid=false` и пустому значению.
- **Ожидаемый результат**: `checkValidity()` точно отражает статус обязательного поля, `reset()` возвращает начальное состояние.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

#### [TC-INT-005] Условное монтирование и очистка наблюдателей (`Lifecycle & Conditional Mount`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти секцию `Lifecycle & Conditional Mount`.
- **Шаги**:
  1. Нажать `Toggle Mount` (размонтировать форму) и повторно нажать `Toggle Mount` (смонтировать).
- **Ожидаемый результат**: Форма чисто размонтируется (`onUnmounted`) и повторно монтируется (`onMounted`) без предупреждений и ошибок.
- **Тип доказательства**: `Console/Log`

### 2.3 Граничные значения и краевые случаи (`BND`)

#### [TC-BND-001] HTML-атрибуты формы (`action`, `method`, `enctype`, `target`, `autocomplete`, `novalidate`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Страница загружена.
- **Шаги**:
  1. Проверить атрибуты основной формы `form.d1-form` (`action="/api/demo-submit"`, `method="post"`, `enctype="multipart/form-data"`, `target="_self"`, `autocomplete="on"`, `novalidate`).
  2. Проверить `[data-testid="controlled-attributes-form"]` (`method="get"`, `enctype="application/x-www-form-urlencoded"`, `target="_blank"`, `autocomplete="off"`).
- **Ожидаемый результат**: Все HTML-атрибуты корректно переданы на корневой `<form>`.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-002] Пустая форма, нулевые/пустые значения, Unicode, XSS и узкий контейнер (`240px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Найти группу `Boundary & Edge Cases`.
- **Шаги**:
  1. Проверить `[data-testid="empty-form-probe"]` — убедиться в рендере пустого `<form class="d1-form" novalidate>` без ошибок.
  2. Проверить поля внутри `.demo-form-page__narrow` (`max-width: 240px`): `""`, `"   "`, `0`, `"Tiếng Việt / Кириллица / 🚀🔥✨"`, `"<img src=x onerror=alert(1)>"`, `"AAAA..."`.
- **Ожидаемый результат**: Форма и поля не выходят за ширину `240px`, значение `0` сохраняется, XSS-строка экранирована как текст.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Вьюпорты Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Страница загружена.
- **Шаги**:
  1. Проверить `scrollWidth <= innerWidth` и отсутствие наложений на `1440×900`, `768×1024`, `375×812` и `320×568`.
- **Ожидаемый результат**: Переполнение отсутствует на всех разрешениях.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантика `<form>`, `aria-label`, `<fieldset>`/`<legend>`, `novalidate` и слоты `#header`/`#footer`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Найти основную форму и группу `Accessibility (ARIA & Semantics)`.
- **Шаги**:
  1. Проверить наличие тегов `<form class="d1-form">` с атрибутом `novalidate`.
  2. Проверить наличие `aria-label="Accessible contact preferences form"`, `<fieldset>`/`<legend>` и видимость слотов `#header` и `#footer`.
  3. Перевести фокус на поле `Contact Email` и нажать `Enter` (или активировать `Keyboard Submit` через `Tab` + `Enter`).
- **Ожидаемый результат**: Семантическая структура валидна, отправка формы с клавиатуры срабатывает корректно.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Отслеживание всех событий `FormEmits` и их payload
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Страница загружена, открыть панель `Events & Status`.
- **Шаги**:
  1. Ввести текст в поле `Username`, изменить `Switch`, нажать `Submit Form`, нажать `Reset Form`.
  2. Проверить обновление `Last Triggered Event`, `Event Payload` и логов `Event: ...` в консоли браузера (`input`, `inputLite`, `inputValues`, `change`, `changeLite`, `changeValues`, `update:modelValue`, `submit`, `reset`).
- **Ожидаемый результат**: Все события `FormEmits` срабатывают с корректными аргументами без ошибок.
- **Тип доказательства**: `Console/Log`

#### [TC-LOG-002] Проверка отсутствия ошибок консоли, `[Vue warn]` и сетевых сбоев
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Выполнены все проверки.
- **Шаги**:
  1. Проверить `consoleError`, `[Vue warn]`, `pageerror`, `failedRequests`.
- **Ожидаемый результат**: Все списки пусты.
- **Тип доказательства**: `Console/Log`
