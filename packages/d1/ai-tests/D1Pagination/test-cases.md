# Спецификация тест-кейсов: D1Pagination

- **Сущность**: `D1Pagination`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Pagination`, `packages/constructor/src/constructors/Pagination`, `packages/demo/src/pages/components/DemoPaginationPage.vue`
- **Целевой URL**: `http://localhost:3000/component-pagination`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `12`

---

## 1. Матрица покрытия

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :---: | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 3 | P0, P1 | Базовая пагинация, `showEnds` / `visible` / `ends` / `ellipsis`, минимальный режим, слоты (`#leading`, `#info`, `#trailing`), кастомные иконки, `*Attrs`, текстовые оверрайды и `TextValue`-функции |
| **Интерактивность и функциональность** | `INT` | 4 | P0, P1 | `v-model:value` / `v-model:rows`, `v-model` (`modelValue`) / `v-model:model-rows`, `showMore` / `showMorePrev`, адаптивные токены (`adaptive`, `adaptiveMore`, `adaptiveMorePrev` включая `lineXl`), условный `v-if` lifecycle |
| **Границы и крайние случаи** | `BND` | 2 | P1 | Строковые пропсы (`"3"`, `"120"`), пробелы `""`/`"   "`, `0` (`value=0`, `count=0`, `rows=0`, `visible=0`, `ends=0`, `menuRows=[]`), `hideIfOne`, `count="100000"`, Unicode, XSS в `ellipsis`/`textInfo`/`textMore`, узкий контейнер (`240px`) |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) и `dir="rtl"` |
| **Доступность (A11y)** | `A11Y` | 1 | P0 | `role="navigation"`, `aria-label`, `aria-current="page"`, `aria-hidden="true"` на многоточии и направленная навигация клавиатурой (`FocusDirectionInclude`: `Tab`, `ArrowRight`/`ArrowLeft`, `Enter`) |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Полное отслеживание `PaginationEmits` (`click`, `clickLite`, `update:value`, `update:modelValue`, `update:rows`, `update:modelRows`, `more`, `moreLite`, `morePrev`, `morePrevLite`, `rows`, `rowsLite`) и чистота консоли |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовая пагинация и навигационные опции (`visible`, `ends`, `ellipsis`, `showArrows`, `showFirstLast`, `showRowsPerPageLabel`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-pagination`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить `[data-testid="demo-pagination-basic"]`: активная страница `2`, диапазон `11-20 of 100`, селектор лимита `10`, кнопки навигации.
  2. Проверить `[data-testid="demo-pagination-ends"]` (`visible=5`, `ends=2`, `ellipsis="•••"`, `show-ends`) и `[data-testid="demo-pagination-minimal"]` (`showArrows=false`, `showFirstLast=false`, `showRowsPerPageLabel=false`).
- **Ожидаемый результат**: Кнопки страниц, разделитель `•••` и меню строк отображаются ровно без обрезаний и наложений; отключённые опции скрывают соответствующие элементы.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Слоты (`#leading`, `#info`, `#trailing`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Группа `Slots (leading, info, trailing)`.
- **Шаги**:
  1. Найти `[data-testid="demo-pagination-slots"]`.
  2. Проверить наличие `[data-testid="demo-pagination-slot-leading"]`, `[data-testid="demo-pagination-slot-info"]` и `[data-testid="demo-pagination-slot-trailing"]`.
- **Ожидаемый результат**: Все три слота отображаются в корректном порядке до, посередине и после панели страниц.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Кастомные иконки, проброс атрибутов (`*Attrs`) и текстовые оверрайды (строки и функции)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Группа `Custom Icons, Attribute Forwarding & Text Overrides`.
- **Шаги**:
  1. Найти `[data-testid="demo-pagination-custom"]`.
  2. Проверить отображение иконок (строковых и объектных), стили кнопок (`buttonAttrs`, `buttonMoreAttrs`, `buttonMorePrevAttrs`, `buttonMenuAttrs`), `textFirst="Start"`, `textLast="End"`, `textPrevious="Prev"`, `textNext="Next"`, `textMore` как функции (`"Load via function"`) и `textInfo` как функции (`"Range 31-45 of 90"`).
- **Ожидаемый результат**: Все кастомные иконки, атрибуты кнопок/меню и строковые/функциональные тексты применяются без ошибок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

---

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Двусторонняя привязка (`v-model:value`/`v-model:rows` и `v-model`/`v-model:model-rows`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группы `Basic & Two-Way Binding` и `Model Aliases (v-model & v-model:model-rows)`.
- **Шаги**:
  1. Нажать `Go to Page 5`, `Set Rows to 20`, затем `Reset` и проверить `[data-testid="demo-pagination-basic-value"]` и активную кнопку с `aria-current="page"`.
  2. Выбрать количество строк через выпадающее меню и кликнуть по номеру страницы.
  3. В группе `Model Aliases` нажать `Set modelValue = 4` и `Set modelRows = 50`, проверяя `[data-testid="demo-pagination-model-alias-value"]`.
- **Ожидаемый результат**: Обе пары моделей (`value`/`rows` и `modelValue`/`modelRows`) двусторонне синхронизированы.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-002] Кнопки инкрементальной подгрузки (`showMore` и `showMorePrev`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `Show More & Show Previous Loaders`.
- **Шаги**:
  1. Нажать кнопку подгрузки предыдущих элементов в `[data-testid="demo-pagination-show-more-prev"]` и проверить уменьшение `morePrevPage` (`4 -> 3`).
  2. Нажать кнопку подгрузки следующих элементов в `[data-testid="demo-pagination-show-more"]` и проверить увеличение `morePage` (`3 -> 4`).
- **Ожидаемый результат**: Счётчики страниц обновляются корректно через `@more-prev-lite` и `@more-lite`, а кнопки скрываются при достижении границ.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-003] Переключение адаптивных токенов (`adaptive`, `adaptiveMore`, `adaptiveMorePrev`, включая `lineXl`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `Adaptive Layout Tokens`.
- **Шаги**:
  1. Последовательно нажать кнопки `lineAlways`, `lineSm`, `lineMd`, `lineLg`, `lineXl`, `line2xl`.
  2. Проверить обновление классов `.d1-pagination--adaptive--*`, `.d1-pagination--adaptiveMore--*`, `.d1-pagination--adaptiveMorePrev--*` и значения `DemoValue`.
- **Ожидаемый результат**: Модификаторы адаптивности переключаются синхронно без визуальных сбоев.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Условное монтирование и очистка (`v-if`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `DOM Lifecycle (Conditional v-if Mount & Unmount)`.
- **Шаги**:
  1. Нажать `Unmount Pagination` и убедиться, что `[data-testid="demo-pagination-lifecycle"]` удалён из DOM.
  2. Нажать `Mount Pagination` и убедиться в повторном монтировании без ошибок.
- **Ожидаемый результат**: Наблюдатели `PaginationPage` и слушатели `FocusDirectionInclude` корректно очищаются при размонтировании и восстанавливаются при монтировании.
- **Тип доказательства**: `Console/Log`

---

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Строковые пропсы, `hideIfOne`, `0` и пустые массивы (`menuRows=[]`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Группа `String Inputs & Boundary States`.
- **Шаги**:
  1. Проверить `[data-testid="demo-pagination-string-inputs"]` (`value="3"`, `count="120"`, `rows="15"` -> диапазон `31-45 of 120`).
  2. Нажать `Toggle` (`hideIfOne`) и проверить появление/скрытие `[data-testid="demo-pagination-single-page"]`.
  3. Проверить `[data-testid="demo-pagination-empty-zero"]` (`value=0`, `count=0`, `rows=0`, `visible=0`, `ends=0`, `menuRows=[]`, `hideIfOne=false` -> `0-0 of 0`, навигационные кнопки `disabled`).
- **Ожидаемый результат**: Числовые и строковые граничные значения нормализуются безопасно, `hideIfOne` управляет рендером одной страницы, `count=0` не вызывает деления на ноль или ошибок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Пробельные строки, `count="100000"`, Unicode, XSS и узкий контейнер (`240px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Группа `String Inputs & Boundary States`.
- **Шаги**:
  1. Проверить `[data-testid="demo-pagination-whitespace-large"]` (`value="   "`, `rows=""`, `count="100000"`, XSS в `ellipsis`/`textInfo`, Unicode/эмодзи в `textMore`).
  2. Проверить `[data-testid="demo-pagination-narrow"]` внутри `.demo-pagination-page__narrow` (`max-width: 240px`) с длинной неразрывной строкой `AAAA...`.
- **Ожидаемый результат**: Пробельные/пустые значения откатываются к безопасным значениям по умолчанию (`1`), `<img src=x onerror=alert(1)>` отображается только как экранированный текст, узкий контейнер переносит элементы без поломки страницы.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

---

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптивность на `1440×900`, `768×1024`, `375×812`, `320×568` и режим `dir="rtl"`
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Страница `http://localhost:3000/component-pagination`.
- **Шаги**:
  1. В группе `Basic` переключить `Toggle RTL` и проверить отображение с `dir="rtl"`.
  2. Проверить `scrollWidth <= innerWidth` и перестройку пагинации на `1440×900`, `768×1024`, `375×812` и `320×568`.
- **Ожидаемый результат**: `0px` горизонтального переполнения страницы, `dir="rtl"` корректно отражает макет без ошибок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

---

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] ARIA-ориентир навигации, `aria-current="page"` и направленная клавиатурная навигация (`FocusDirectionInclude`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Группы `Basic` и `Accessibility`.
- **Шаги**:
  1. Проверить у `[data-testid="demo-pagination-a11y"]` атрибуты `role="navigation"`, `aria-label="Search results pagination"`, `tabindex="0"`, у активной страницы `aria-current="page"`, а у многоточий `aria-hidden="true"`.
  2. Установить фокус на контейнер пагинации, проверить `aria-activedescendant`, нажать `ArrowRight`, затем `Enter` на `[data-testid="demo-pagination-basic"]` и убедиться в переключении страницы (`page=3`), затем перевести фокус наружу (`blur`) и проверить снятие класса фокуса.
- **Ожидаемый результат**: Семантика и клавиатурная навигация стрелками и `Enter` работают корректно.
- **Тип доказательства**: `Console/Log`

---

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Отслеживание всех событий `PaginationEmits` и чистота консоли
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Группа `Events`, журнал консоли очищен.
- **Шаги**:
  1. В `[data-testid="demo-pagination-events"]` кликнуть по кнопке страницы (`click`, `clickLite`, `update:value`, `update:modelValue`), по кнопкам `Show more` (`more`, `moreLite`), `Show previous` (`morePrev`, `morePrevLite`) и выбрать значение в меню строк (`rows`, `rowsLite`, `update:rows`, `update:modelRows`).
  2. Проверить отображение `eventName`, `lastPayload`, а также `consoleErrors`, `vueWarnings`, `pageErrors`.
- **Ожидаемый результат**: Все 12 событий `PaginationEmits` срабатывают с ожидаемыми значениями; `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`.
- **Тип доказательства**: `Console/Log`
