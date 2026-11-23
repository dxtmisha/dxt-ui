# Отчёт о визуальном и функциональном тестировании: D1MenuCountry

## 1. Итоговое резюме

- **Компонент:** `D1MenuCountry` (`@dxtmisha/d1`)
- **Исходный код:** [`MenuCountry`](packages/d1/src/components/Ui/MenuCountry) ([`constructor`](packages/constructor/src/constructors/MenuCountry), [`demo`](packages/demo/src/pages/components/DemoMenuCountryPage.vue))
- **Демо / целевой URL:** `http://localhost:3000/component-menu-country`
- **Материалы:** `None`
- **Дата тестирования (UTC):** `2026-11-22T17:17:45Z`
- **Окружение:** `Headless Chrome (Puppeteer / CDP, Desktop 1440x900, Tablet 768x1024, Mobile 375x812 / 320x568)`
- **Покрытие тест-кейсов:** 11 / 11 (`100%`)
- **Итог:** **11 ✅, 0 ⚠️, 0 ❌** (`✅` пройдено, `⚠️` предупреждение, `❌` провалено) — компонент `D1MenuCountry` корректно отображает списки стран с флагами и национальными названиями, форматирует телефонные коды (`show-phone-code`) и группирует альтернативные подкоды (`DO`, `VA`), фильтрует страны (`list`), переключает язык (`language`), поддерживает прямые пропсы поиска (`show-search`, `filter-mode`, `highlight-length-start`), `v-model:model-selected`, `disable-focus-return`, встроенный режим (`embedded`), все 5 слотов, `expose`-API, WAI-ARIA и адаптивность при нулевом уровне ошибок и предупреждений в консоли.

---

## 2. Базовая матрица

### 2.1 Визуальное соответствие (`VIS`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-VIS-001` | Базовый рендеринг, флаги стран и телефонные коды (`show-phone-code`) | ✅ | Открытое окно `324×562px` отобразило `9` стран (включая группы альтернативных кодов `Dominican Republic` и `Vatican City`, а также `France +33`, `Germany +49`, `Japan +81`, `Russia +7`, `United Kingdom +44`, `United States +1`, `Vietnam +84`) с прямоугольными флагами (`hasFlags: true`, `flagCount: 24`) и `role="listbox"` без наложений. | ![TC-VIS-001](./screenshots/TC-VIS-001.png) |
| `TC-VIS-002` | Встроенное меню с поиском (`embedded` + `showSearch` через `menu-attrs`) | ✅ | Встроенное меню `.d1-menuCountry` (`1246×446px` в `DemoBox`) отобразило строку поиска и `8` пунктов стран с флагами и телефонными кодами. | ![TC-VIS-002](./screenshots/TC-VIS-002.png) |
| `TC-VIS-003` | Пользовательские слоты (`control`, `title`, `contextTop`, `contextBottom`, `footer`) | ✅ | Все 5 слотов (`Choose Country (title slot)`, `Top Context Hint (contextTop)`, поиск и список, `Bottom Context Hint (contextBottom)`, `ISO 3166-1 Country List (footer)`) отрисованы в верном порядке без перекрытий. | ![TC-VIS-003](./screenshots/TC-VIS-003.png) |

### 2.2 Интерактивность и управление состоянием (`INT`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-INT-001` | Фильтрация списка `list`, выбор страны (`v-model:selected`) и локализация `language` | ✅ | Переключение на `North America (3)` отфильтровало список до `3` стран (`Canada`, `Mexico`, `United States`), выбор обновил `selected: CA`; смена `language="ru"` локализовала `6` названий (`Великобритания`, `Вьетнам`, `Германия`, `Россия`, `Соединенные Штаты`, `Франция`). | ![TC-INT-001](./screenshots/TC-INT-001.png) |
| `TC-INT-002` | Режимы выбора (`is-selected-by-value`, массив) и поиск во встроенном меню | ✅ | Режим `Array Highlight` сохранил выделение `["US", "VN"]`; ввод `"Viet"` во встроенном поиске отфильтровал список до `1` элемента (`Vietnam`) и выбор обновил `selectedEmbedded: VN`. | — |
| `TC-INT-003` | Программное управление через `expose` API (`toOpen`, `toClose`, `toggle`, `previous`, `next`) | ✅ | Вызовы `toOpen()`, `next()`, `Check Expose` и `toClose()` обновили `selectedExpose: VN` и вернули `id=window--ui-10069, open=false, selected=true, values=["VN"], names=["Vietnam"]`. | — |
| `TC-INT-004` | Группы альтернативных кодов (`DO`/`VA`), прямые пропсы поиска (`show-search`, `filter-mode`, `highlight-length-start`), `v-model:model-selected` и `disable-focus-return` | ✅ | Раскрытие группы `Dominican Republic` показало `3` подкода (`+1-809`, `+1-829`, `+1-849`), выбор обновил `selected: DO-1-829`; поиск `"1829"` без дефиса нашёл `[data-value="DO-1-829"]` (`+1-829`); `:show-search="false"` скрыл поле ввода (`hasSearchInput: false`); `v-model:model-selected` инициализировался с `United Kingdom` (`GB`) и обновился до `Vietnam` (`VN`); `disable-focus-return` оставил фокус на `BODY` после выбора. | ![TC-INT-004](./screenshots/TC-INT-004.png) |

### 2.3 Границы и крайние сценарии (`BND`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-BND-001` | Состояние `disabled`, пустой список `list=[]` и пустой результат поиска | ✅ | Клик по `disabled`-триггеру не открыл окно (`isDisabled: true`, `openWindowsCount: 0`); при `list=[]` элементов `0` (`emptyListCount: 0`); поиск `"zzzzzz"` отобразил `.d1-list__none` с текстом `"Nothing found"`. | ![TC-BND-001](./screenshots/TC-BND-001.png) |

### 2.4 Адаптивность (`RSP`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-RSP-001` | Адаптивность на разрешениях `1440×900`, `768×1024`, `375×812`, `320×568` | ✅ | На всех 4 разрешениях горизонтальный скролл отсутствует (`scrollWidth === innerWidth`, `overflow: false`); открытое на `375×812` меню (`270×740px`, `x: 12`, `y: 36`, `fits: true`) полностью помещается в viewport. | ![TC-RSP-001](./screenshots/TC-RSP-001.png) |

### 2.5 Доступность (`A11Y`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-A11Y-001` | WAI-ARIA атрибуты и клавиатурное управление | ✅ | Зафиксированы `aria-haspopup="listbox"`, переключение `aria-expanded` (`"false"` → `"true"` по `Enter` → `"false"` по `Escape`), роль `listbox` и `247` элементов `role="option"`. | — |

### 2.6 Логи и консоль (`LOG`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-LOG-001` | События (`click`, `updateValue`, `window`) и отсутствие ошибок/предупреждений в консоли | ✅ | Выбор страны в группе событий обновил `selectedExpose: GB`, зафиксировано событие `window`; `consoleErrors`: `[]`, `vueWarnings`: `[]`, `pageErrors`: `[]`. | — |

---

## 3. AI-аудит и рекомендации

1. **Выявленный и устранённый дефект Vue 3 Boolean-приведения (`v-model:model-selected`)**: При визуальном тестировании обнаружено, что поскольку `ListSelectedList` включает `boolean`, Vue 3 приводит непереданный пропс `selected` к `false`, из-за чего `this.props.selected ?? this.props.modelSelected` возвращал `false` вместо `modelSelected`. Исправлено в `MenuCountry.ts` (`this.props.modelSelected ?? (this.props.selected !== false ? this.props.selected : undefined)`), покрыто модульным тестом и повторно подтверждено в браузере (`United Kingdom` → `Vietnam`).
2. **Поиск по альтернативным кодам без дефисов (`MenuCountryList`)**: Группы альтернативных кодов (`DO`, `VA`) и индексация вариантов с дефисом и без (`+1-829` / `+1829`) корректно интегрируются с прямыми пропсами `show-search`, `filter-mode` и `highlight-length-start` без необходимости проброса через `menu-attrs`.
3. **Производительность и ленивый рендеринг (`247` стран)**: Полный список стран открывается мгновенно без лагов и предупреждений консоли на desktop и mobile (`375×812`) благодаря ленивой инициализации `MenuCountryList.flagList` и `ListItemLazy` в `D1List`.
