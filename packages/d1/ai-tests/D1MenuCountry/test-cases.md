# Спецификация тест-кейсов: D1MenuCountry

- **Сущность**: `D1MenuCountry`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/MenuCountry` (`packages/constructor/src/constructors/MenuCountry`, `packages/demo/src/pages/components/DemoMenuCountryPage.vue`)
- **Целевой URL**: `http://localhost:3000/component-menu-country`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `13`

---

## 1. Матрица покрытия

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :---: | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 3 | P0, P1 | Базовый список стран, `show-phone-code` (включая группы альтернативных кодов `DO`/`VA`), `embedded` с поиском, все 5 слотов и scoped bindings |
| **Интерактивность и функциональность** | `INT` | 5 | P0, P1 | Выбор (`v-model:selected` / `v-model:model-selected`), программные мутации `v-model`, фильтрация `list`, `language`, `is-selected-by-value`, множественный выбор, поиск (`show-search`, `filter-mode`, `highlight-length-start`), `disable-focus-return`, все методы `defineExpose`, жизненный цикл `v-if` |
| **Границы и крайние случаи** | `BND` | 2 | P1 | Блокировка `disabled`, пустой `list=[]`, `""`/`"   "`/`undefined`, неизвестные коды (`ZZ`/`XX`), Unicode/XSS в `highlight` и заголовке, узкий контейнер (`240px`) |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Проверка на Desktop `1440×900`, Tablet `768×1024`, Mobile `375×812` и `320×568` |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | WAI-ARIA (`roleList="listbox"`, `roleItem="option"`, `aria-label`, `aria-haspopup`, `aria-expanded`) и навигация клавиатурой (`Enter`, `Space`, `ArrowDown`, `Escape`) |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Полное отслеживание событий (`click`, `clickLite`, `update:selected`, `update:modelSelected`, `updateValue`, `window`) и отсутствие ошибок консоли/`[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг, флаги стран и телефонные коды (`show-phone-code`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыта страница `http://localhost:3000/component-menu-country`, разрешение `1440×900`, светлая тема.
- **Шаги**:
  1. Открыть меню в группе `Basic Usage (Default List)` и проверить отображение флагов и названий стран.
  2. Открыть меню в группе `Phone Dial Codes & Alternative Code Groups (show-phone-code)` и проверить отображение телефонных кодов (`+84`, `+7`, `+1` и т.д.).
- **Ожидаемый результат**: Пункты списка содержат флаги, названия и отформатированные коды `+<code>` без обрезаний и наложений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Встроенное меню с поиском (`embedded` + `showSearch` через `menu-attrs`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыта страница `http://localhost:3000/component-menu-country`, разрешение `1440×900`.
- **Шаги**:
  1. Прокрутить страницу к группе `Embedded & Search (menu-attrs)`.
  2. Проверить наличие класса `.d1-menuCountry` / `.d1-menu`, поля поиска, флагов и телефонных кодов.
- **Ожидаемый результат**: Встроенное меню отображается корректно в контейнере `DemoBox` с активным поиском и кодами стран.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Пользовательские слоты и scoped bindings (`control`, `title`, `contextTop`, `contextBottom`, `footer`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыта страница `http://localhost:3000/component-menu-country`, разрешение `1440×900`.
- **Шаги**:
  1. Открыть меню в группе `Slots & Scoped Bindings (control, title, contextTop, contextBottom, footer)`.
  2. Проверить рендеринг всех пяти слотов, scoped-привязок (`open`, `isSelected`, `selectedNames`, `selectedValues`) и кнопки закрытия с `classesWindow.close`.
- **Ожидаемый результат**: Все слоты (`title`, `contextTop`, список, `contextBottom`, `footer`) отрисованы в правильном порядке без перекрытий, кнопка `Done` закрывает меню.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

---

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Фильтрация списка `list`, выбор страны (`v-model:selected`), мутация `v-model` и локализация `language`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыта страница `http://localhost:3000/component-menu-country`, разрешение `1440×900`.
- **Шаги**:
  1. В группе `Filtered List (list)` переключиться на `North America (3)`, открыть меню и выбрать страну `Canada` (`CA`).
  2. В группе `Language Localization (language)` переключить язык на `ru` и открыть меню, проверив переведённые названия стран.
  3. В группе `Programmatic v-model Mutation` нажать `Set VN`, `Set JP`, `Clear Selection` и проверить обновление триггера и `DemoValue`.
- **Ожидаемый результат**: Список фильтруется ровно до 3 стран (`US`, `CA`, `MX`), выбор обновляет `selected: "CA"`, смена `language` меняет локализацию, а программные мутации синхронно обновляют отображаемую страну.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Режимы выбора (`is-selected-by-value`, множественный выбор) и поиск во встроенном меню
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыта страница `http://localhost:3000/component-menu-country`.
- **Шаги**:
  1. В группе `Selection Modes` проверить выбор по значению (`is-selected-by-value`), выбор по ключу (`:is-selected-by-value="false"`), множественный выбор (`max: 3`, `selectionStyle: 'checkbox'`) и `v-model:model-selected`.
  2. В группе `Embedded & Search` ввести текст `"Viet"` в поле поиска и выбрать отфильтрованный пункт.
- **Ожидаемый результат**: Модели `selectedByValue`, `selectedByKey`, `selectedMultiple` (`max: 3`) и `selectedModelSelected` обновляются корректно; поиск во встроенном меню фильтрует до `Vietnam` и обновляет `selectedEmbedded: "VN"`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-003] Полный API `defineExpose` (`toOpen`, `toClose`, `setOpen`, `toggle`, `previous`, `next`, `Check Expose`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыта страница `http://localhost:3000/component-menu-country`.
- **Шаги**:
  1. В группе `Events & Expose API` нажать `toOpen()`, `toClose()`, `setOpen(true)`, `setOpen(false)`, `toggle()`, `next()`, `previous()`, `Check Expose`.
- **Ожидаемый результат**: Окно программно открывается/закрывается через все методы, `next()`/`previous()` переключают выбранную страну, а `Check Expose` отображает актуальные `id`, `open`, `hasControl`, `hasMenuElement`, `loading`, `selected`, `listCount`, `values`, `names`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Группы альтернативных кодов (`DO`/`VA`), прямые пропсы поиска и `disable-focus-return`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыта страница `http://localhost:3000/component-menu-country`, разрешение `1440×900`.
- **Шаги**:
  1. В группе `Phone Dial Codes & Alternative Code Groups` открыть меню, раскрыть группу `Dominican Republic` (`DO`) и выбрать альтернативный подкод `+1-829` (`DO-1-829`).
  2. В группе `Search Options & Focus Control` открыть меню `Filter Search (min 2)`, ввести `"1829"` и проверить нахождение подкода `+1-829`.
  3. Открыть меню `No Search` (`:show-search="false"`) и убедиться в отсутствии поля поиска.
  4. Открыть и закрыть меню `Disable Focus Return` (`disable-focus-return`) и проверить, что фокус не возвращается на триггер.
- **Ожидаемый результат**: Группы альтернативных кодов раскрываются и выбираются; поиск по `"1829"` находит `+1-829`; `:show-search="false"` скрывает поиск; `disable-focus-return` предотвращает возврат фокуса.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

#### [TC-INT-005] SSR/DOM жизненный цикл (`inDom: true` и условное монтирование `v-if`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыта группа `SSR & DOM Lifecycle (in-dom & Conditional Mount)`.
- **Шаги**:
  1. Проверить наличие в DOM элементов закрытого окна для `In-DOM Menu` (`windowAttrs: { inDom: true }`).
  2. Нажать `Unmount MenuCountry` и затем `Mount MenuCountry`, проверяя переключение `isLifecycleMounted` и работоспособность смонтированного меню.
- **Ожидаемый результат**: `inDom: true` сохраняет содержимое меню в DOM, а условное размонтирование/монтирование `v-if` проходит без ошибок и предупреждений.
- **Тип доказательства**: `Console/Log`

---

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Состояние `disabled`, пустой `list=[]` и пустой результат поиска
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыта страница `http://localhost:3000/component-menu-country`.
- **Шаги**:
  1. Попытаться нажать триггер в группе `Disabled State`.
  2. В группе `Filtered List (list)` нажать `Empty List` и открыть меню.
  3. В группе `Embedded & Search` ввести `"zzzzzz"`.
- **Ожидаемый результат**: Отключённое меню не открывается; при `list=[]` и пустом поиске компонент не падает и корректно отображает пустое состояние.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Пустые/пробельные/undefined значения, неизвестные коды (`ZZ`/`XX`), Unicode, XSS и узкий контейнер (`240px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыта группа `Boundary & Edge Cases (Empty, Nullish, Unknown Codes, Unicode, XSS, Narrow)`.
- **Шаги**:
  1. Проверить триггеры с `selected=""`, `selected="   "`, `selected=undefined` и неизвестными кодами `['ZZ', 'XX', 'US', 'VN']`.
  2. Нажать `Highlight XSS` и `Highlight Unicode`, проверив безопасный рендеринг `<img src=x onerror=alert(1)>` как текста (без выполнения скрипта) и корректное отображение кириллицы/вьетнамских диакритик/эмодзи.
  3. Проверить встроенное меню внутри `.demo-menu-country-page__narrow` (`max-width: 240px`) с длинной неразрывной строкой `AAAA...` в слоте `#title`.
- **Ожидаемый результат**: Значения обрабатываются безопасно, XSS экранируется как текст, узкий контейнер `240px` не ломает вёрстку (`scrollWidth <= 240` или аккуратный перенос).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

---

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптивность на разрешениях `1440×900`, `768×1024`, `375×812`, `320×568`
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Открыта страница `http://localhost:3000/component-menu-country`.
- **Шаги**:
  1. Проверить `scrollWidth <= innerWidth` и геометрию встроенного и всплывающего `D1MenuCountry` на `1440×900`, `768×1024`, `375×812` и `320×568`.
- **Ожидаемый результат**: Отсутствует горизонтальный перелив страницы, открытое меню умещается в пределах экрана на мобильных разрешениях.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

---

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] WAI-ARIA атрибуты и клавиатурное управление (`Enter`, `Space`, `ArrowDown`, `Escape`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Открыты группы `Basic Usage` и `Accessibility (WAI-ARIA & Keyboard Navigation)`.
- **Шаги**:
  1. Сфокусироваться на триггере с `aria-label="Accessible country selector"`, нажать `Enter` для открытия меню, проверить `aria-haspopup`, `aria-expanded="true"`, `role="listbox"` и `role="option"`.
  2. Перемещаться по пунктам стрелками `ArrowDown` / `ArrowUp`, затем нажать `Escape` и проверить закрытие и возврат фокуса на триггер.
- **Ожидаемый результат**: ARIA-атрибуты соответствуют WAI-ARIA, клавиатурная навигация, закрытие по `Escape` и возврат фокуса работают корректно.
- **Тип доказательства**: `Console/Log`

---

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] События (`click`, `clickLite`, `update:selected`, `update:modelSelected`, `updateValue`, `window`) и чистота консоли
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Очищен журнал консоли браузера перед прогоном сценариев.
- **Шаги**:
  1. Открыть меню и выбрать элемент в группе `Events & Expose API`, отслеживая `eventName`, `eventPayload`, `windowOpen`.
  2. Проверить весь журнал консоли, Vue-предупреждений и ошибок страницы за сессию.
- **Ожидаемый результат**: Все заявленные события `MenuCountryEmits` эмитятся с корректными payload; `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`.
- **Тип доказательства**: `Console/Log`
