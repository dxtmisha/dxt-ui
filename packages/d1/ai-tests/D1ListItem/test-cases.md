# Спецификация тест-кейсов: D1ListItem

- **Сущность**: `D1ListItem`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/ListItem` (`packages/constructor/src/constructors/ListItem`, `packages/demo/src/pages/components/DemoListItemPage.vue`)
- **Целевой URL**: `http://localhost:3000/component-list-item`
- **Справочные материалы**: `None`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `12`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 3 | P0, P1 | Базовая разметка, состояния, `loading`/`skeleton`, размеры, все 24 `palette`, `fill`, `divider`, `selectionStyle`, все 7 `controlPosition` |
| **Интерактивность и функционал** | `INT` | 4 | P0, P1 | Динамические состояния, блокировка `disabled`/`readonly`/`loading`, `checkbox`/`radio`, `highlight` и `filterMode`, события `click`/`clickLite`, `expose` (`getValue`, `getDetail`), ленивый рендеринг `lazy`/`lazyCacheHeight`, жизненный цикл `v-if` |
| **Границы и крайние случаи** | `BND` | 2 | P1 | Нулевой `0`, пустые/пробельные/`undefined` значения, все 8 слотов, пользовательские ID, теги (`button`, `div`, `span`, `li`, `a`), длинный/неразрывный текст, Unicode/кириллица/вьетнамский/Emoji, XSS, узкий контейнер `240px` |
| **Адаптивность и viewport** | `RSP` | 1 | P1 | Десктоп (`1440×900`), планшет (`768×1024`), мобильные (`375×812`, `320×568`), медиа-переключение `controlPosition` (`autoSm`–`auto2xl`) |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `role` (`option`, `menuitem`, `menuitemradio`, `menuitemcheckbox`), `aria-selected`, `aria-checked`, `aria-disabled`, `aria-hidden` на `captionDecorative`, клавиатурная активация `Enter`/`Space` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | События `click`/`clickLite` с payload, `0` ошибок `console.error`, `pageerror`, `[Vue warn]` и сетевых сбоев |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и токены (`VIS`)

#### [TC-VIS-001] Базовый рендеринг, текстовые слои, иконки и бейджи
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и токены`
- **Предусловия**: Открыть `http://localhost:3000/component-list-item`, viewport `1440×900`.
- **Шаги теста**:
  1. Найти группы `Basic & Data Formats`, `Icons & Alignment`, `Badges`.
  2. Проверить наличие подклассов `.d1-listItem__body`, `.d1-listItem__context`, `.d1-listItem__prefix`, `.d1-listItem__label`, `.d1-listItem__caption`, `.d1-listItem__suffix`, `.d1-listItem__description`, `.d1-listItem__icon`, `.d1-listItem__trailing`, `.d1-listItem__badge`.
  3. Проверить размеры и отсутствие наложения элементов при `iconAlign="center|edge"`, `iconTop`, `iconTurn`, `iconDir`, `badgeDot` и `badgeAttrs`.
- **Ожидаемый результат**: Все текстовые слои, ведущие/замыкающие иконки и бейджи отображаются корректно в соответствии с токенами дизайна без перекрытий.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Состояния, скелетон, размеры, все 24 палитры и кастомный `fill`
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и токены`
- **Предусловия**: Прокрутить к группам `States & Blocked Guards`, `Skeleton`, `Sizes, Dense & Dividers`, `Palettes & Custom Fill`.
- **Шаги теста**:
  1. Проверить классы модификаторов `.d1-listItem--focus`, `.d1-listItem--open`, `.d1-listItem--selected`, `.d1-listItem--selectedChild`, `.d1-listItem--readonly`, `.d1-listItem--disabled`.
  2. Проверить `.d1-listItem__loading` при `loading` и `.d1-skeleton__textVariant` при `is-skeleton`, а также переключение кнопки `isSkeleton: true/false`.
  3. Проверить размеры (`sm`, `md`, `lg`), `dense`, `divider` (`border-top-style: solid`), все 24 значения `palette` (`red`–`white`) и кастомный `fill` (`--d1-listItem-sys-fill`).
- **Ожидаемый результат**: Все состояния, скелетоны, размеры, разделители, все 24 палитры и кастомные заливки корректно применяют соответствующие классы и CSS-переменные.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Стили выбора (`none`, `checkbox`, `radio`, `checkmark`) и все позиции контрола (`controlPosition`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и токены`
- **Предусловия**: Прокрутить к группе `Selection Styles & Control Position`.
- **Шаги теста**:
  1. Проверить отображение контролов внутри `.d1-listItem__control` для `none`, `checkbox`, `radio`, `checkmark` (выбранный и невыбранный).
  2. Проверить вычисленный CSS `order` у `.d1-listItem__control` для всех 7 вариантов `controlPosition`: `start`, `end`, `autoSm`, `autoMd`, `autoLg`, `autoXl`, `auto2xl`.
- **Ожидаемый результат**: Элементы выбора отображаются корректно и меняют порядок расположения (`order`) согласно `controlPosition`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

### 2.2 Интерактивность и функционал (`INT`)

#### [TC-INT-001] Переключение `checkbox`/`radio`, динамические состояния и блокировка кликов
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секции `States & Blocked Guards` и `Selection Styles & Control Position`.
- **Шаги теста**:
  1. Кликнуть по `Readonly (guarded)`, `Disabled (guarded)` и `Loading Boolean (guarded)`; проверить, что `blockedTriggerCount` остаётся `0`.
  2. Переключить кнопки `focus`, `open`, `selected`, `disabled`, `readonly`, `loading` для `Dynamic Controlled Item` и проверить обновление классов.
  3. Кликнуть по `Selection Checkbox` и `Selection Radio Beta`, проверить обновление состояния выбора.
- **Ожидаемый результат**: Заблокированные состояния предотвращают срабатывание кликов; динамические состояния и контролы выбора корректно обновляются.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Подсветка `highlight` и режим фильтрации `filterMode`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секция `Highlight & Filter Mode`.
- **Шаги теста**:
  1. Проверить подсветку `.d1-listItem__highlight` для запроса `app` (`Apple Juice`, `Pineapple`, `Match by value (apple)`, `Match by search metadata`).
  2. Переключить запрос на `ban`, `a` (короче порога) и `Clear Query`, а также переключить кнопку `filterMode: true/false`.
- **Ожидаемый результат**: При активном `filterMode` несовпадающие элементы скрываются, а совпадающие подсвечивают подстроку внутри `.d1-listItem__highlight`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] События `click`/`clickLite` и методы `expose` (`getValue`, `getDetail`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Прокрутить к группе `Events & Expose`.
- **Шаги теста**:
  1. Кликнуть по `Interactive ListItem` и проверить отображение события `clickLite`/`click` и JSON-полезной нагрузки в `DemoValue` (`event`, `payload`).
  2. Нажать кнопку `Read Expose Methods` и проверить результат `getValue()` и `getDetail()` в `DemoValue`.
- **Ожидаемый результат**: События регистрируются с полезной нагрузкой `value` и `detail`; `expose` возвращает `"list-item-value"` и `{"source":"demo"}`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Ленивый рендеринг (`lazy`, `lazyMargin`, `lazyCacheHeight`) и жизненный цикл `v-if`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Прокрутить к группам `Lazy Rendering` и `Lifecycle (Mount / Unmount)`.
- **Шаги теста**:
  1. Проверить начальное состояние в `.demo-list-item-page__lazy`: видимые элементы имеют `.d1-listItem--lazy--visible`, нижние вне видимости — `.d1-listItem--lazy--hidden` без `.d1-listItem__label`.
  2. Прокрутить контейнер до конца, проверить появление нижних элементов и сохранение `contain-intrinsic-height` у ушедших верхних элементов; затем переключить `lazyCacheHeight: false` и `lazy: false`.
  3. В группе `Lifecycle (Mount / Unmount)` нажать `Unmount Item` и повторно `Mount Item`.
- **Ожидаемый результат**: Внеэкранные элементы откладывают рендеринг, сохраняют измеренную высоту при выходе из видимости, корректно реагируют на отключение `lazy`/`lazyCacheHeight` и чисто размонтируются/монтируются без ошибок наблюдателя.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Нулевой `0`, пустые значения, все 8 слотов, пользовательские ID и теги
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Группы `Basic & Data Formats`, `Slots`, `Tags & Links`, `Accessibility (A11y)`.
- **Шаги теста**:
  1. Проверить элемент с `:label="0" :caption="0" :description="0" :badge="0"`.
  2. Проверить наличие содержимого всех 8 слотов (`leading`, `prefix`, `default`, `caption`, `suffix`, `description`, `body`, `trailing`) в группе `Slots`.
  3. Проверить пользовательские ID (`#demo-list-item-label-id`, `#demo-list-item-prefix-id`, `#demo-list-item-suffix-id`, `#demo-list-item-description-id`) и рендеринг тегов `button`, `div`, `span`, `li`, `a` (`href` и `to`).
- **Ожидаемый результат**: Значение `0` отображается во всех текстовых слоях и бейдже; все 8 слотов, пользовательские ID и семантические теги рендерятся корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Длинный/неразрывный текст, Unicode, XSS и узкий контейнер `240px`
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Прокрутить к группе `Boundary & Edge Cases`.
- **Шаги теста**:
  1. Проверить рендеринг `label=""`, `label="   "`, `:label="undefined"`, `label="A"`, длинного многострочного текста и неразрывной строки `"AAA..."`.
  2. Проверить отображение вьетнамских диакритик, кириллицы и эмодзи (`"Học tiếng Việt / Привет мир 🚀🔥✨"`), а также безопасное экранирование XSS-строки `"<img src=x onerror=alert(1)>"` как обычного текста.
  3. Проверить ширину и перенос текста внутри `.demo-list-item-page__narrow` (`max-width: 240px`).
- **Ожидаемый результат**: Неразрывный и длинный текст не ломает границы узкого контейнера (`<= 240px`), XSS-строка экранирована без выполнения скриптов, Unicode-символы отображаются без искажений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

### 2.4 Адаптивность и viewport (`RSP`)

#### [TC-RSP-001] Адаптация `D1ListItem` на десктопе, планшете и мобильных устройствах
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и viewport`
- **Предусловия**: Страница `http://localhost:3000/component-list-item`.
- **Шаги теста**:
  1. Проверить ширину и отсутствие горизонтального переполнения у `.d1-listItem` на `1440×900`, `768×1024`, `375×812` и `320×568`.
  2. Проверить переключение CSS `order` у `.d1-listItem__control` для `controlPosition="autoMd"` на `375×812` (`order: 28`) и на `768×1024` / `1440×900` (`order: 4`).
- **Ожидаемый результат**: На всех разрешениях компоненты адаптируются к контейнеру без горизонтального переполнения, а `controlPosition="autoMd"` корректно меняет порядок контрола на брейкпоинте `768px`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] WAI-ARIA атрибуты и клавиатурная активация `Enter`/`Space`
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность (A11y)`
- **Предусловия**: Группы `Basic & Data Formats`, `States & Blocked Guards`, `Accessibility (A11y)`.
- **Шаги теста**:
  1. Проверить `aria-hidden="true"` у `caption-decorative`, `aria-disabled="true"` у `disabled` и `loading`, а также `role="option"` + `aria-selected="true"`, `role="menuitem"`, `role="menuitemradio"` + `aria-checked="true"`, `role="menuitemcheckbox"` + `aria-checked="false"`.
  2. Сфокусировать `Keyboard Focusable Item` (`tabindex="0"`) и нажать `Enter` и `Space`, проверив инкремент `keyboardActivationCount`.
- **Ожидаемый результат**: Все ARIA-атрибуты соответствуют спецификации WAI-ARIA, нажатие `Enter` и `Space` активирует элемент и увеличивает счётчик.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Отсутствие ошибок консоли, исключений страницы и `[Vue warn]`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль и рантайм`
- **Предусловия**: Подписаться на `console`, `pageerror`, `requestfailed`/`response` до перехода на `http://localhost:3000/component-list-item`.
- **Шаги теста**:
  1. Выполнить все сценарии `VIS`, `INT`, `BND`, `RSP`, `A11Y`.
  2. Проверить собранные массивы `consoleErrors`, `vueWarnings`, `pageErrors`, `httpErrors`.
- **Ожидаемый результат**: Все массивы ошибок и предупреждений пусты (`0` ошибок и `[Vue warn]`).
- **Тип доказательства**: `Console/Log`
