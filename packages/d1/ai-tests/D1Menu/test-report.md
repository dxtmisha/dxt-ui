# Отчёт о визуальном и функциональном тестировании: D1Menu

## 1. Итоговое резюме

- **Компонент:** `D1Menu` (`@dxtmisha/d1`)
- **Исходный код:** [`Menu`](packages/d1/src/components/Ui/Menu) ([`constructor`](packages/constructor/src/constructors/Menu), [`demo`](packages/demo/src/pages/components/DemoMenuPage.vue))
- **Демо / целевой URL:** `http://localhost:3000/component-menu`
- **Материалы:** `None`
- **Дата тестирования (UTC):** `2026-11-18T06:26:17Z`
- **Окружение:** `Headless Chrome (Puppeteer / CDP, Desktop 1440x900, Tablet 768x1024, Mobile 375x812 / 320x568)`
- **Покрытие тест-кейсов:** 15 / 15 (`100%`)
- **Итог:** **15 ✅, 0 ⚠️, 0 ❌** (`✅` пройдено, `⚠️` предупреждение, `❌` провалено) — компонент `D1Menu` корректно рендерит всплывающие и встроенные (`embedded`) меню, панель `Bars` (`barsAdaptive="showAlways"`), проброс `listAttrs`/`itemAttrs`/`barsAttrs`, пользовательские слоты, поиск/подсветку, кэшируемую `ajax`-загрузку, `expose`-API, WAI-ARIA атрибуты, большие списки (`60` элементов) и все конфигурации `512` смешанных элементов (`±liteThreshold` × `±lazy`, включая `lazyMargin="128px 0px"` и `:lazy-cache-height="false"`) при нулевом уровне ошибок и предупреждений в консоли.

---

## 2. Базовая матрица

### 2.1 Визуальный рендеринг (`VIS`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-VIS-001` | Базовый рендеринг, `embedded`, `selectionStyle`, `listAttrs`/`itemAttrs` и смещение `indent` | ✅ | Встроенное меню `.d1-menu` (`1246×182px`, `4` пункта) и открытое всплывающее меню (`134×182px`, `4` пункта, `33` DOM-узла, `data-demo-list="true"`, `data-demo-item="true"`) отрисованы без обрезания и наложения. | ![TC-VIS-001](./screenshots/TC-VIS-001.png) |
| `TC-VIS-002` | Панель `Bars` (`barsAdaptive`, `barsAttrs`), `hideList` и пользовательские слоты | ✅ | Панель `.d1-menu__bars` (`data-demo-bars="true"`) отображается со стилем `display: flex` (`height: 66px`) и текстом заголовка/описания/кнопок; при `hideList` элемент `.d1-menu__list` отсутствует (`hasList: false`); слоты `#title`, `#contextTop`, `#contextBottom`, `#footer` отрисованы. | ![TC-VIS-002](./screenshots/TC-VIS-002.png) |
| `TC-VIS-003` | Большой список (60 элементов, без иконок) | ✅ | Окно `231×756px` в границах viewport, `60` пунктов (`144` DOM-узла; по умолчанию `lazy: true` — `16` видимых / `44` скрытых), клик по `Plain Item 55` обновил `largePlain: plain-55`. | ![TC-VIS-003](./screenshots/TC-VIS-003.png) |
| `TC-VIS-004` | Большой список с векторными иконками (60 элементов) | ✅ | Окно `231×756px`, `60` пунктов (`176` DOM-узлов, `16` видимых / `44` скрытых), векторные иконки без смещений, выбор `Icon Item 45` обновил `largeIcons: icon-45`. | ![TC-VIS-004](./screenshots/TC-VIS-004.png) |
| `TC-VIS-005` | Большой список с иконками в виде картинок (60 элементов) | ✅ | Окно `231×756px`, `60` пунктов (`176` DOM-узлов, `16` видимых / `44` скрытых) с цветными SVG-картинками без сетевых ошибок, выбор `Picture Item 50` обновил `largePictures: picture-50`. | ![TC-VIS-005](./screenshots/TC-VIS-005.png) |
| `TC-VIS-006` | Смешанный большой список (`512` элементов: иконки, картинки, обычный текст) и замер производительности | ✅ | Окно `278×756px`, `512` пунктов (`3400` DOM-узлов без `lazy`), открытие+рендер `465.1 ms`, скролл 50% `153.6 ms`, поиск `"500"` -> `195.3 ms` (`1` пункт, `29` DOM-узлов), выбор `mixed-500` (`207.8 ms`). | ![TC-VIS-006](./screenshots/TC-VIS-006.png) |
| `TC-VIS-007` | Смешанный большой список (`512` элементов) в режиме `lazy` (`ListItemLazy`, `lazyMargin`, `lazyCacheHeight`) | ✅ | Окно `269×756px`, активны `16` строк / скрыты `496` (`622` DOM-узла вместо `3400`); при `lazy: true` (по умолчанию): открытие `394.9 ms`, поиск `"500"` -> `186.5 ms`; при `lazy-margin="128px 0px"` и `:lazy-cache-height="false"`: открытие `383.4 ms`, поиск `"500"` -> `185.0 ms`, выбор `mixed-500` (`206.8–208.1 ms`). | ![TC-VIS-007](./screenshots/TC-VIS-007.png) |
| `TC-VIS-008` | Смешанный список `512` без упрощённой подгрузки (`:lite-threshold="0"`) | ✅ | Без `lite` и без `lazy`: `3400` DOM-узлов, открытие `446.0 ms`, поиск `"500"` -> `198.4 ms`; без `lite` с `lazy`: `622` DOM-узла (`16` видимых / `496` скрытых), открытие `373.6 ms`, поиск `191.2 ms`, выбор `mixed-500` (`207.3–208.0 ms`). | ![TC-VIS-008](./screenshots/TC-VIS-008.png) |

### 2.2 Интерактивность и управление состоянием (`INT`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-INT-001` | Выбор элементов, `Record`, `keyLabel`/`keyValue`, `max=2`, `autoClose` и `persistent` | ✅ | Выбор обновил `basic: edit` (окно закрылось, `afterBasicOpen: 0`), `record: Record Gamma`, `customKey: k3`; `max=2` сохранил `["play", "edit"]`; при `autoClose: false` выбор обновил `autoClose: edit` и окно осталось открытым (`autoCloseStillOpen: 1`). | ![TC-INT-001](./screenshots/TC-INT-001.png) |
| `TC-INT-002` | Поиск, подсветка, `liteThreshold`, `ajax` + `cache` и навигация `previous`/`next` | ✅ | Поиск по `"ch"` отфильтровал список до `["Cherry"]`; `highlight="exam"` создал `2` подсвеченных совпадения; `ajax` + `cache` загрузил пункты с `fetchCount: 1` после 2 открытий; `Next`/`Previous` обновили `selectedNav: color4` при `step: 2`. | ![TC-INT-002](./screenshots/TC-INT-002.png) |
| `TC-INT-003` | Программное управление `expose` и `inDom` | ✅ | После открытия и закрытия `SSR inDom: true` окно остаётся в DOM (`totalWindows: 2`, `inDom: edit`); `toOpen()`/`Read Expose` вернули `id=window--ui-10106, open=true, isSelected=true, values=["edit"], names=["Edit"], loading=false`, после `next()` + `toClose()` — `open=false, values=["settings"], names=["Settings"]`. | — |

### 2.3 Граничные случаи и крайние сценарии (`BND`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-BND-001` | Блокировка `disabled`, отключённый пункт и пустой поиск | ✅ | Клик по `Disabled Menu` не открыл окно (`disabledOpenCount: 0`); клик по отключённому пункту `Settings` в `embedded` сохранил `embedded: play`; поиск `"zzzzzz"` отобразил `.d1-list__none` с текстом `"Nothing found"` (`itemsCount: 0`). | ![TC-BND-001](./screenshots/TC-BND-001.png) |

### 2.4 Адаптивность (`RSP`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-RSP-001` | Адаптивность всплывающего и встроенного меню на разных разрешениях | ✅ | На всех проверенных разрешениях (`1440×900`, `768×1024`, `375×812`, `320×568`) переполнение отсутствует (`scrollWidth === innerWidth`, `overflow: false`); открытое на `375×812` меню полностью умещается в viewport. | ![TC-RSP-001](./screenshots/TC-RSP-001.png) |

### 2.5 Доступность (`A11Y`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-A11Y-001` | WAI-ARIA атрибуты и клавиатурное управление | ✅ | На триггере зафиксированы `aria-haspopup="listbox"` и переключение `aria-expanded` (`"false"` → `"true"`) при открытии клавишей `Enter`; у окна `role="menu"`, у списка `role="listbox"`, у пункта `role="option"`. | — |

### 2.6 Логи и консоль (`LOG`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-LOG-001` | События (`@click`, `@click-lite`, `@click-slot`, `@update-value`, `@bars`, `@window`) и чистота консоли | ✅ | После клика по элементу с `data-value` в `#contextBottom` зафиксировано событие `clickSlot`, в `Expose & Events` — `window` (`consoleLogsCount: 8`); `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`. | — |

---

## 3. Замеры производительности (Headless Chrome CDP, viewport `1440×900`)

| Вариант списка (`512` элементов) | DOM-узлов окна | Открытие + стабилизация (с ожиданием 250ms) | Скролл 50% (+150ms) | Поиск `"500"` (+150ms) | Выбор `mixed-500` (+200ms) | Ошибки / Warn |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| `Mixed 512 (Icons & Pictures)` (без `lazy`) | `3400` (`512` видимых) | `465.1 ms` | `153.6 ms` | `195.3 ms` | `207.8 ms` | `0 / 0` |
| `Mixed 512 (No Lite)` (`:lite-threshold="0"`, без `lazy`) | `3400` (`512` видимых) | `446.0 ms` | `153.8 ms` | `198.4 ms` | `205.0 ms` | `0 / 0` |
| `Mixed 512 (Lazy)` (`lazy: true`, `lazyCacheHeight: true`) | `622` (`16` видимых / `496` скрытых) | `394.9 ms` | `153.4 ms` | `186.5 ms` | `206.8 ms` | `0 / 0` |
| `Mixed 512 (Lazy, Custom Margin)` (`lazyMargin: "128px 0px"`, `:lazy-cache-height="false"`) | `622` (`16` видимых / `496` скрытых) | `383.4 ms` | `152.8 ms` | `185.0 ms` | `208.1 ms` | `0 / 0` |
| `Mixed 512 (No Lite, Lazy)` (`:lite-threshold="0"`, `lazy: true`) | `622` (`16` видимых / `496` скрытых) | **`373.6 ms`** | `153.2 ms` | `191.2 ms` | `208.0 ms` | `0 / 0` |

## 4. AI-аудит и рекомендации

1. **Проброс атрибутов и ленивый рендеринг (`listAttrs`, `itemAttrs`, `barsAttrs`, `lazyMargin`, `lazyCacheHeight`):** Подтверждена корректная передача `data-demo-list`, `data-demo-item` и `data-demo-bars` в DOM, а также работа `lazy` на 512 элементах (снижение числа DOM-узлов с `3400` до `622` при неизменной логике фильтрации и выбора).
2. **Семантика `inDom` и `Record` в демо:** Свойство `inDom: true` (в `WindowOpen.ts`) сохраняет окно в DOM после первого открытия (`first.value === true`), а `ListDataRef` для `Record`-объекта без явного поля `value` использует `label` как значение элемента. Поведение согласовано с контрактом `Window` и `ListDataRef`.
3. **Чистота рантайма и адаптивность:** За весь прогон 15 тест-кейсов на 4 разрешениях (`1440×900`, `768×1024`, `375×812`, `320×568`) зафиксировано `0` ошибок консоли, `0` исключений страницы, `0` предупреждений Vue и отсутствие горизонтального переполнения.
