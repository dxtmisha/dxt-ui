# Спецификация тест-кейсов: D1List

- **Сущность**: `D1List`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/List` (`packages/constructor/src/constructors/List`, `packages/demo/src/pages/components/DemoListPage.vue`)
- **Целевой URL**: `http://localhost:3000/component-list`
- **Справочные материалы**: `None`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `12`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | `2` | `P0`, `P1` | Базовый рендеринг, `axis` (`y`/`x`), `divider`, `tag` (`div`/`button`/`a`/`span`), `selectionStyle` (`none`/`checkmark`/`checkbox`/`radio`), `group`/`menu`/`subtitle`/`line`/`space`/`html`, `lite`, `isSkeleton`, `disabled` |
| **Интерактивность и функционал** | `INT` | `4` | `P0`, `P1` | Одиночный и множественный `selected` (`max=2`), `focus`, `Record`/`keyLabel`/`keyValue`, `showSearch`/`filterMode`/`highlight`, все методы `expose`, `lazy`, `roleItem`/`item*Attrs`, жизненный цикл `v-if` |
| **Границы и крайние случаи** | `BND` | `2` | `P1` | Состояние `.d1-list__none`, пустые `[]`/`undefined`, блокировка `disabled`, `0`/`""`/`"   "`/`"A"`, узкий контейнер `240px` (`.demo-list-page__narrow`), Unicode/Emoji, XSS |
| **Адаптивность и viewport** | `RSP` | `1` | `P1` | Десктоп (`1440×900`), планшет (`768×1024`), мобильные (`375×812`, `320×568`), отсутствие горизонтального переполнения |
| **Доступность (A11y)** | `A11Y` | `2` | `P1` | WAI-ARIA (`listbox`/`menu`, `option`/`menuitem`, `separator`, `aria-selected`, `aria-disabled`, `aria-multiselectable`, `aria-live`), клавиатурная навигация `control` (`Arrow`/`Home`/`End`/`Enter`/`Space`/`Escape`) |
| **Консоль и рантайм** | `LOG` | `1` | `P0` | События `@click`, `@click-lite`, `@close` с payload, `0` ошибок `console.error`, `pageerror`, `[Vue warn]` и сетевых ошибок |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и токены (`VIS`)

#### [TC-VIS-001] Базовый рендеринг `D1List`, `axis`, `divider`, `tag` и `selectionStyle`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и токены`
- **Предусловия**: Открыть `http://localhost:3000/component-list`, viewport `1440×900`.
- **Шаги теста**:
  1. Проверить секции `Basic & Selection (Single & Multiple)`, `Selection Styles, Dividers & Tags` и `Axis Layout (y & x)`.
  2. Проверить наличие модификаторов `.d1-list--axis--y`, `.d1-list--axis--x`, `.d1-list--divider`, а также рендеринг всех `selectionStyle` (`none`, `checkmark`, `checkbox`, `radio`) и тегов (`div`, `button`, `a`, `span`).
  3. Проверить размеры и отсутствие наложения или обрезания элементов списка.
- **Ожидаемый результат**: Все списки и их пункты отображаются чётко, в горизонтальном режиме (`axis="x"`) элементы выстроены в строку, разделители, теги и индикаторы выбора отрисованы без артефактов.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Специальные типы элементов (`group`, `menu`, `subtitle`, `line`, `space`, `html`), `lite`, `isSkeleton` и `disabled`
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и токены`
- **Предусловия**: Секции `Item Types, Groups, Menus & HTML Slot` и `Lite Mode, Skeleton & Blocked States`, viewport `1440×900`.
- **Шаги теста**:
  1. Проверить рендеринг `.d1-list__subtitle`, `.d1-list__line`, `.d1-list__space`, `.d1-list__html` (слот `Custom HTML Slot Content` и inline HTML `Inline HTML Item`), активных и `disabled` управляющих элементов `group` и `menu`.
  2. Проверить секцию `Lite Mode, Skeleton & Blocked States`: список `lite`, скелетон (`D1Skeleton` + `item-attrs="{ isSkeleton: true }"`) и неактивный список `disabled`.
- **Ожидаемый результат**: Все структурные подклассы, слоты, скелетон и приглушение `disabled` отображаются корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

### 2.2 Интерактивность и функционал (`INT`)

#### [TC-INT-001] Синхронизация `selected`, `focus`, `Record` / `Custom Keys` и раскрытие `group` / `menu`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секции `Basic & Selection (Single & Multiple)`, `Record List & Custom Keys`, `Item Types, Groups, Menus & HTML Slot`.
- **Шаги теста**:
  1. Нажать кнопки `Select Edit`, `Focus Play`, `Clear Single`, затем кликнуть по пункту `Delete` в первом списке и проверить обновление `DemoValue`.
  2. Кликнуть по пункту `Delete` во втором списке (`max=2`, `selected=['play', 'edit']`) и убедиться, что ограничение `max=2` сохраняется, затем нажать `Clear Multiple`.
  3. Кликнуть по `Custom Key Three` в списке с `key-label="title"` / `key-value="code"` и проверить обновление `selectedCustomKey` на `key-3`.
  4. Кликнуть по `Workspace Group` и `More Menu` и убедиться в раскрытии вложенных пунктов (и блокировке `Disabled Group` / `Disabled Menu`).
- **Ожидаемый результат**: Выбор, фокус, `max=2`, кастомные ключи и раскрытие групп/меню работают синхронно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Живой поиск, фильтрация (`show-search`, `filter-mode`) и динамическая подсветка (`highlight`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секция `Search, Filter Mode & Highlight`.
- **Шаги теста**:
  1. Нажать кнопки `Highlight 'exam'`, `Highlight 'exp'` и `Clear Highlight` во втором списке, проверяя обновление подсветки (`highlightLengthStart=3`).
  2. Ввести `"ex"` в поле поиска первого списка (`input[data-menu-control="1"]`).
  3. Проверить появление классов `.d1-list--searchActive` / `.d1-list--highlightActive` и подсветку совпадений.
- **Ожидаемый результат**: Совпадающие пункты подсвечиваются динамически, несовпадающие скрываются в `filter-mode`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Проверка всех методов `expose` и динамического переключения `lite`
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секции `Expose & Events` и `Lite Mode, Skeleton & Blocked States`.
- **Шаги теста**:
  1. Нажать кнопку `Read Expose State` при выбранном `play`, затем нажать `Select Edit` и `Clear Selection`, повторно нажимая `Read Expose State`.
  2. Проверить все 4 поля JSON-ответа (`isSelected`, `selectedList`, `selectedNames`, `selectedValues`).
  3. В секции `Lite Mode` нажать `Disable Lite Mode` и убедиться в переходе из укороченного списка к полному.
- **Ожидаемый результат**: Все 4 метода `expose` возвращают точные данные после мутаций, а переключение `lite` корректно меняет отображение элементов.
- **Тип доказательства**: `Console/Log` (Скриншот не требуется)

#### [TC-INT-004] Ленивый рендеринг (`lazy`), кастомные роли/атрибуты (`roleItem`, `item*Attrs`) и жизненный цикл (`v-if`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секции `Lazy Rendering & Custom Roles` и `Lifecycle & Conditional Mount`, viewport `1440×900`.
- **Шаги теста**:
  1. Прокрутить страницу к секции `Lazy Rendering & Custom Roles` и дождаться активации `IntersectionObserver` для 12 элементов `lazy`.
  2. Проверить наличие `role="menu"`, `role="menuitem"`, а также атрибутов `data-demo-item="true"`, `data-demo-group="true"`, `data-demo-menu="true"`, `data-demo-mgmt="true"`.
  3. В секции `Lifecycle & Conditional Mount` дважды нажать `Toggle Mount`, проверяя чистое размонтирование и повторное монтирование `D1List`.
- **Ожидаемый результат**: Ленивые элементы списка активируются при прокрутке, кастомные роли и `item*Attrs` применяются корректно, `v-if` переключение не вызывает ошибок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

### 2.3 Граничные случаи и крайние сценарии (`BND`)

#### [TC-BND-001] Состояние «Ничего не найдено» (`.d1-list__none`), пустые списки (`[]`, `undefined`) и блокировка `disabled`
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Секции `Search, Filter Mode & Highlight`, `Lite Mode, Skeleton & Blocked States` и `Boundary & Edge Cases`.
- **Шаги теста**:
  1. Ввести в поле поиска несуществующую строку `"zzzzzz"` и проверить `.d1-list__none` с текстом `No matching items`.
  2. Проверить пустые списки `:list="[]"` (`Empty list fallback` при `filter-mode`) и `:list="undefined"`.
  3. Попытаться кликнуть по `Settings` (`disabled: true`) и по списку `disabled` (проверить `Blocked Click Count === 0`).
- **Ожидаемый результат**: Отображаются fallback-сообщения, а `disabled`-элементы и списки полностью блокируют клики.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Граничные значения (`0`, `""`, `"   "`, `"A"`), узкий контейнер `240px`, Unicode и XSS
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Секция `Boundary & Edge Cases`.
- **Шаги теста**:
  1. Проверить рендеринг пункта с `label: 0, value: 0` (число `0` отображается и выбрано), пустой строки `""`, пробелов `"   "`, `"A"`, `"Tiếng Việt / Кириллица / 🚀"` и XSS-строк (`"<img src=x onerror=alert(1)>"`, `"<svg onload=alert(1)>"`) как текста.
  2. В узком контейнере `.demo-list-page__narrow` (`max-width: 240px`) проверить перенос длинного текста и строки `AAAA...` без горизонтального переполнения.
- **Ожидаемый результат**: Ноль и спецсимволы отображаются корректно, XSS не выполняется, узкий контейнер `240px` не выходит за границы.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

### 2.4 Адаптивность (`RSP`)

#### [TC-RSP-001] Адаптация `D1List` на `1440×900`, `768×1024`, `375×812` и `320×568`
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и viewport`
- **Предусловия**: Страница `http://localhost:3000/component-list`.
- **Шаги теста**:
  1. Последовательно изменить размер viewport: `1440×900`, `768×1024`, `375×812`, `320×568`.
  2. На каждом разрешении проверить ширину каждого экземпляра `.d1-list` и отсутствие выхода контента за пределы собственного контейнера.
- **Ожидаемый результат**: Элементы `D1List` корректно помещаются в выделенный контейнер на десктопе, планшете и мобильных экранах.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] WAI-ARIA атрибуты списка и элементов
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность (A11y)`
- **Предусловия**: Страница `http://localhost:3000/component-list`, viewport `1440×900`.
- **Шаги теста**:
  1. Проверить `role="listbox"`, `role="option"`, `role="separator"`, `aria-selected`, `aria-disabled="true"`, `aria-multiselectable="true"`, `aria-live="polite"`, `aria-label="Accessible action list"`.
  2. Проверить установку фокуса на `D1List` через `Tab` и отсутствие ловушки фокуса.
- **Ожидаемый результат**: Все ARIA-атрибуты соответствуют WAI-ARIA Listbox/Menu паттерну, клавиатурный фокус перемещается предсказуемо.
- **Тип доказательства**: `Console/Log` (Скриншот не требуется)

#### [TC-A11Y-002] Клавиатурная навигация в режиме `control` (`ArrowDown`, `ArrowUp`, `Home`, `End`, `Enter`, `Escape`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность (A11y)`
- **Предусловия**: Секция `Accessibility & Keyboard Control`.
- **Шаги теста**:
  1. Нажать кнопку `Enable Keyboard Control` (`control=true`).
  2. Последовательно нажимать `ArrowDown`, `End`, `Home`, `ArrowUp`, затем `Enter` для выбора пункта `Edit` (`keyboardSelected`) и `Escape` для закрытия (`@close`).
- **Ожидаемый результат**: Фокус перемещается по активным элементам списка, `Enter` выбирает элемент, `Escape` испускает событие `@close` и сбрасывает `control`.
- **Тип доказательства**: `Console/Log` (Скриншот не требуется)

### 2.6 Логи и консоль (`LOG`)

#### [TC-LOG-001] События `@click`, `@click-lite`, `@close` с payload и отсутствие ошибок консоли/сети
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль и рантайм`
- **Предусловия**: Открыть страницу с очищенным логом консоли и сетевых запросов.
- **Шаги теста**:
  1. Кликнуть по пункту `Edit` в секции `Expose & Events` и проверить `eventName` и `eventPayload` (`value: 'edit'`).
  2. Активировать `control` в секции `Accessibility & Keyboard Control` и нажать `Escape`, проверив фиксацию события `close`.
  3. Проверить собранные за весь прогон `consoleErrors`, `vueWarnings`, `pageErrors`, `failedRequests`.
- **Ожидаемый результат**: События и их payload фиксируются в UI, `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`, `failedRequests: []`.
- **Тип доказательства**: `Console/Log` (Скриншот не требуется)
