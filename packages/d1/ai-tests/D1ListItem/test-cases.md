# Спецификация тест-кейсов: D1ListItem

- **Сущность**: `D1ListItem`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/ListItem` (`packages/constructor/src/constructors/ListItem`, `packages/demo/src/pages/components/DemoListItemPage.vue`)
- **Целевой URL**: `http://localhost:3000/component-list-item`
- **Справочные материалы**: `None`
- **Последняя проверка / обновление**: `2026-11-17`
- **Всего тест-кейсов**: `9`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 3 | P0, P1 | Базовая разметка, состояния, `loading`/`skeleton`, размеры, палитры, `fill`, `divider`, `selectionStyle`, `controlPosition` |
| **Интерактивность и функционал** | `INT` | 2 | P0, P1 | Переключение `checkbox`/`radio` по клику, `highlight` и `filterMode`, события `click`/`clickLite`, `expose` (`getValue`, `getDetail`) |
| **Границы и крайние случаи** | `BND` | 1 | P1 | Числовой `0`, все 8 слотов, теги и ссылки (`button`, `href`, `to`) |
| **Адаптивность и viewport** | `RSP` | 1 | P1 | Десктоп (`1440×900`), планшет (`768×1024`), мобильные (`375×812`, `320×568`), медиа-переключение `controlPosition="autoMd"` |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `role`, `aria-selected`, `aria-checked`, `aria-disabled`, `aria-hidden` на `captionDecorative`, клавиатурная активация `Enter` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | `0` ошибок `console.error`, `pageerror`, `[Vue warn]` и сетевых сбоев |

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
  3. Проверить размеры и отсутствие наложения элементов.
- **Ожидаемый результат**: Все текстовые слои, ведущие/замыкающие иконки (`iconAlign`, `iconTop`) и бейджи отображаются корректно в соответствии с токенами дизайна без перекрытий.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Состояния (`focus`, `open`, `selected`, `disabled`, `loading`, `skeleton`), размеры, палитры и `fill`
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и токены`
- **Предусловия**: Прокрутить к группам `States`, `Skeleton`, `Sizes, Dense & Dividers`, `Palettes & Custom Fill`.
- **Шаги теста**:
  1. Проверить классы модификаторов `.d1-listItem--focus`, `.d1-listItem--open`, `.d1-listItem--selected`, `.d1-listItem--selectedChild`, `.d1-listItem--readonly`, `.d1-listItem--disabled`.
  2. Проверить `.d1-listItem__loading` при `loading` и `.d1-skeleton__textVariant` при `is-skeleton`.
  3. Проверить размеры (`sm`, `md`, `lg`), `dense`, `divider` (`border-top-style: solid`) и кастомный `fill` (`--d1-listItem-sys-fill`).
- **Ожидаемый результат**: Все состояния, скелетоны, размеры, разделители, палитры и кастомные фоновые заливки корректно применяют соответствующие классы и CSS-переменные.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Стили выбора (`checkbox`, `radio`, `checkmark`) и позиции контрола (`controlPosition`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и токены`
- **Предусловия**: Прокрутить к группе `Selection Styles & Control Position`.
- **Шаги теста**:
  1. Проверить отображение контролов внутри `.d1-listItem__control` для `checkbox`, `radio`, `checkmark` (выбранный и невыбранный).
  2. Проверить вычисленный CSS `order` у `.d1-listItem__control` для `controlPosition="start"` (`order: 4`) и `controlPosition="end"` (`order: 28`).
- **Ожидаемый результат**: Элементы выбора отображаются корректно и меняют порядок расположения (`order`) согласно `controlPosition`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

### 2.2 Интерактивность и функционал (`INT`)

#### [TC-INT-001] Переключение `checkbox`/`radio`, подсветка `highlight` и фильтрация `filterMode`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секции `Selection Styles & Control Position` и `Highlight & Filter Mode`.
- **Шаги теста**:
  1. Кликнуть по `Selection Checkbox` и `Selection Radio Beta`, проверить обновление состояния выбора.
  2. В секции `Highlight & Filter Mode` проверить подсветку `.d1-listItem__highlight` для запроса `app` (`Apple Juice`, `Pineapple`, `Match by value (apple)`), затем переключить запрос на `ban` и `Clear Query`, а также отключить `filterMode`.
- **Ожидаемый результат**: Элементы выбора переключаются по клику; при активном `filterMode` несовпадающие элементы скрываются, а совпадающие подсвечивают подстроку внутри `.d1-listItem__highlight`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] События `click` / `clickLite` и методы `expose` (`getValue`, `getDetail`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Прокрутить к группе `Events & Expose`.
- **Шаги теста**:
  1. Кликнуть по `Interactive ListItem` и проверить отображение события `clickLite` / `click` в `DemoValue`.
  2. Нажать кнопку `Read Expose Methods` и проверить результат `getValue()` и `getDetail()` в `DemoValue`.
- **Ожидаемый результат**: События регистрируются с полезной нагрузкой `value` и `detail`; `expose` возвращает `"list-item-value"` и `{"source":"demo"}`.
- **Тип доказательства**: `Console/Log`

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Нулевые значения (`0`), проекция всех 8 слотов, кастомные теги и ссылки
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Группы `Basic & Data Formats`, `Slots`, `Tags, Links & ARIA Roles`.
- **Шаги теста**:
  1. Проверить элемент с `:label="0" :caption="0" :description="0" :badge="0"`.
  2. Проверить наличие содержимого всех 8 слотов (`leading`, `prefix`, `default`, `caption`, `suffix`, `description`, `body`, `trailing`) в группе `Slots`.
  3. Проверить рендеринг `<button>` и `<a>` (`href` и `to`) в группе `Tags, Links & ARIA Roles`.
- **Ожидаемый результат**: Значение `0` отображается во всех текстовых слоях и бейдже; все 8 слотов и семантические теги (`button`, `a`) рендерятся корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

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

#### [TC-A11Y-001] WAI-ARIA атрибуты и клавиатурная активация `Enter`
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность (A11y)`
- **Предусловия**: Группы `Basic & Data Formats`, `States`, `Tags, Links & ARIA Roles`, `Events & Expose`.
- **Шаги теста**:
  1. Проверить `aria-hidden="true"` у `caption-decorative`, `aria-disabled="true"` у `disabled` и `loading`, а также `role="option"` + `aria-selected="true"`, `role="menuitemradio"` + `aria-checked="true"`, `role="menuitemcheckbox"` + `aria-checked="false"`.
  2. Сфокусировать `Interactive ListItem` и нажать `Enter`, проверив срабатывание события клика.
- **Ожидаемый результат**: Все ARIA-атрибуты соответствуют спецификации WAI-ARIA, нажатие `Enter` активирует элемент и вызывает событие.
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
