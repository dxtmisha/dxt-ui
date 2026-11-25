# Спецификация тест-кейсов: D1Dropzone

- **Сущность:** `D1Dropzone`
- **Путь к исходному коду:** `packages/d1/src/components/Ui/Dropzone` (`packages/constructor/src/constructors/Dropzone`)
- **Целевой URL:** `http://localhost:3000/component-dropzone`
- **Справочные материалы:** `Нет`
- **Последняя проверка / обновление:** `2026-11-25`
- **Всего тест-кейсов:** `12`

---

## 1. Матрица покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуальное соответствие и токены** | `VIS` | 3 | P0, P1 | Иконка/метка/описание, модификаторы иконки (`iconTurn`/`iconHide`/`iconDir`/`iconPalette`/`selected`/`iconAttrs`/`null`), состояния `disabled`/`readonly`/`isSkeleton`, слоты `#default`/`#description` |
| **Интерактивность и функциональность** | `INT` | 4 | P0, P1 | Выбор файлов (`v-model:files`, `v-model:modelFiles`), события (`input`, `inputLite`, `change`, `changeLite`, `update:files`, `update:modelFiles`), методы `open()`/`clear()` и `dragenter`/`dragleave`, динамические переключатели, блокировка `disabled`/`readonly`, форма, `v-if` |
| **Границы и крайние случаи** | `BND` | 2 | P1, P2 | Дефолтный текст `TextInclude`, `textDropzone` (строка и функция), `inputAttrs`, `""`/`"   "`/`0`/`-42`/`3.14`, длинный текст, неразрывная строка в `240px`, Unicode/Emoji, XSS |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) |
| **Доступность (A11y)** | `A11Y` | 1 | P0 | Корневой `<label>`, `aria-labelledby`/`aria-describedby` (`labelId`/`descriptionId`), `aria-disabled`/`aria-readonly`, `focus`/`blur` и `Tab` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие `console.error`, `pageerror` и `[Vue warn]` |

---

## 2. Подробные тест-кейсы

### 2.1 Визуальное соответствие и дизайн-система (`VIS`)

#### [TC-VIS-001] Метка, описание и конфигурации иконки
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Визуальное соответствие`
- **Предусловия:** Открыть `http://localhost:3000/component-dropzone`, вьюпорт `1440×900`, светлая тема.
- **Шаги тестирования:**
  1. Проверить группу `Label, Description & Icon Configurations`.
  2. Сравнить отображение строковой `icon`, объектной `icon`, модификаторов `iconTurn`, `iconDir`, `iconPalette`, `selected`, `iconAttrs`, скрытой `iconHide` и `:icon="null"`.
- **Ожидаемый результат:** Иконки, заголовки и описания корректно отцентрированы внутри пунктирной рамки; при `iconHide` и `:icon="null"` иконка не отображается; при `iconTurn` применен поворот.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Состояния `disabled`, `readonly` и `is-skeleton`
- **Приоритет:** `P1 (High)`
- **Категория:** `Визуальное соответствие`
- **Предусловия:** Открыта группа `States & Dynamic Toggles`.
- **Шаги тестирования:**
  1. Проверить визуальное приглушение `disabled`, отображение `readonly` и состояние `is-skeleton` внутри `D1Skeleton`.
- **Ожидаемый результат:** Все три состояния визуально различимы и соответствуют дизайн-токенам без смещения макета.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Слоты (`#default`, `#description`) и фолбэк `textDropzone`
- **Приоритет:** `P1 (High)`
- **Категория:** `Визуальное соответствие`
- **Предусловия:** Открыты группы `Basic & Default Fallback Text` и `Slots (default & description)`.
- **Шаги тестирования:**
  1. Проверить рендеринг `#default` и `#description`, приоритет `#default` над `label` и фолбэк `textDropzone` (строка и функция).
- **Ожидаемый результат:** Слоты отображаются без дублирования текста, строковый и функциональный `textDropzone` корректно выводятся при отсутствии `label` и `#default`.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-VIS-003.png`)

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Выбор файла, `v-model:files`, `v-model:modelFiles` и события `emits`
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Интерактивность`
- **Предусловия:** Открыты группы `Single, Multiple & Two-Way Bindings` и `Events, inputAttrs & Exposed Controls`.
- **Шаги тестирования:**
  1. Загрузить тестовый файл в `[data-testid="demo-dropzone-input"]`.
  2. Проверить обновление `Controlled Files`, `Event Name` и `Event Payload` (`update:files`, `update:modelFiles`, `input`, `inputLite`, `change`, `changeLite`).
  3. Протестировать очистку через кнопки `Clear Single` / `Clear Multiple` / `Clear ModelFiles`.
- **Ожидаемый результат:** Имена файлов отображаются в `DemoValue`, все соответствующие события и их payload зафиксированы.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Программные методы `clear()`, `open()` и события `dragenter`/`dragleave`/`drop`
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Интерактивность`
- **Предусловия:** После выбора файла в `TC-INT-001`.
- **Шаги тестирования:**
  1. Нажать `Clear Files` и проверить сброс модели до `No files selected`.
  2. Отправить `dragenter`, затем `dragleave` и `drop` на инпут; проверить добавление и снятие класса `.d1-dropzone--enter`.
- **Ожидаемый результат:** Метод `clear()` сбрасывает input и модель; `.d1-dropzone--enter` добавляется на `dragenter` и снимается на `dragleave`/`drop`.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Динамические переключатели пропов и жизненный цикл `v-if`
- **Приоритет:** `P1 (High)`
- **Категория:** `Интерактивность`
- **Предусловия:** Открыты группы `States & Dynamic Toggles` и `Lifecycle & Conditional Mount`.
- **Шаги тестирования:**
  1. Последовательно нажать `Toggle Disabled`, `Toggle Readonly`, `Toggle Skeleton`, `Toggle Multiple`, `Toggle Icon Turn`, `Toggle Icon Hide`, `Toggle Selected`.
  2. Нажать `Toggle Mount` дважды и проверить размонтирование и повторное монтирование `D1Dropzone`.
- **Ожидаемый результат:** Все классы и атрибуты целевого `D1Dropzone` обновляются реактивно; размонтирование и повторное монтирование происходят без ошибок.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Блокировка `disabled`/`readonly` и интеграция с `<form>`
- **Приоритет:** `P1 (High)`
- **Категория:** `Интерактивность`
- **Предусловия:** Открыты группы `Blocked & Guarded Actions` и `Form Integration`.
- **Шаги тестирования:**
  1. Нажать `Attempt Disabled open()` и `Attempt Readonly open()`, а также отправить `dragenter` на заблокированные зоны.
  2. Проверить значение `Blocked Trigger Count` и отсутствие `.d1-dropzone--enter`.
  3. Проверить отправку и сброс формы `#demo-dropzone-form`.
- **Ожидаемый результат:** `Blocked Trigger Count` остаётся `0`, `.d1-dropzone--enter` не добавляется; форма корректно обрабатывает submit и reset.
- **Тип подтверждения:** `Console/Log`

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Дефолтный текст из `TextInclude` и проброс `inputAttrs`
- **Приоритет:** `P1 (High)`
- **Категория:** `Граничные случаи`
- **Предусловия:** Страница загружена.
- **Шаги тестирования:**
  1. Проверить ненулевую геометрию всех экземпляров `D1Dropzone`, отображение дефолтного текста без пропов и проброс `data-testid="demo-dropzone-input"` / `name` через `inputAttrs`.
- **Ожидаемый результат:** Все зоны и скрытые `<input type="file">` имеют корректную геометрию и атрибуты `inputAttrs`.
- **Тип подтверждения:** `Console/Log`

#### [TC-BND-002] Граничные значения, узкий контейнер `240px`, Unicode и XSS
- **Приоритет:** `P1 (High)`
- **Категория:** `Граничные случаи`
- **Предусловия:** Открыта группа `Boundary & Edge Cases`.
- **Шаги тестирования:**
  1. Проверить рендеринг `label=""`, `label="   "`, `:label="0"`, `:description="0"`, `:label="-42"`, `:description="3.14"`, одиночного символа `"A"`, длинного текста, вьетнамского/кириллицы/Emoji и строки `<img src=x onerror=alert(1)>`.
  2. Проверить контейнер `.demo-dropzone-page__narrow` (`max-width: 240px`) с неразрывной строкой `AAAA...`.
- **Ожидаемый результат:** `0` отображается как текст, XSS-строка выводится экранированным текстом без выполнения скрипта, пустой/пробельный `label` падает на фолбэк, узкий контейнер не ломает макет.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-BND-002.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Вьюпорты `1440×900`, `768×1024`, `375×812`, `320×568`
- **Приоритет:** `P1 (High)`
- **Категория:** `Адаптивность`
- **Предусловия:** Страница загружена.
- **Шаги тестирования:**
  1. Проверить `document.documentElement.scrollWidth <= window.innerWidth` и границы `.d1-dropzone` на `1440×900`, `768×1024`, `375×812`, `320×568`.
- **Ожидаемый результат:** Горизонтальное переполнение отсутствует на всех разрешениях.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантика `<label>`, ARIA-идентификаторы, состояния и фокус
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Доступность`
- **Предусловия:** Открыта группа `Accessibility (ARIA & Keyboard)`.
- **Шаги тестирования:**
  1. Проверить корневой тег `LABEL`, `aria-labelledby="demo-dropzone-a11y-label"`, `aria-describedby="demo-dropzone-a11y-desc"` и существование соответствующих элементов в DOM.
  2. Проверить `aria-disabled="true"` у `disabled` и `aria-readonly="true"` у `readonly`, а также отсутствие ложных ARIA-атрибутов в обычном состоянии.
  3. Сфокусировать `<input type="file">` через `Tab` и проверить события `focus` / `blur`.
- **Ожидаемый результат:** Все ARIA-связи валидны, состояния корректны, клавиатурный фокус и события `focus`/`blur` работают.
- **Тип подтверждения:** `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Проверка консоли, исключений и сетевых запросов
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Консоль и рантайм`
- **Предусловия:** Выполнены все сценарии `VIS`, `INT`, `BND`, `RSP`, `A11Y`.
- **Шаги тестирования:**
  1. Проверить `console.error`, `[Vue warn]`, `pageerror`, `failedRequests`.
- **Ожидаемый результат:** Все списки ошибок и предупреждений пусты.
- **Тип подтверждения:** `Console/Log`
