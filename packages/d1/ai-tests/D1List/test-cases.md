# Спецификация тест-кейсов: D1List

- **Сущность**: `D1List`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/List` (`packages/constructor/src/constructors/List`, `packages/demo/src/pages/components/DemoListPage.vue`)
- **Целевой URL**: `http://localhost:3000/component-list`
- **Справочные материалы**: `None`
- **Последняя проверка / обновление**: `2026-11-22`
- **Всего тест-кейсов**: `10`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 2 | P0, P1 | Базовый рендеринг, `axis` (`y`/`x`), `divider`, `selectionStyle`, `group`/`menu`/`subtitle`/`line`/`space`/`html`, `lite`, `disabled` |
| **Интерактивность и функционал** | `INT` | 4 | P0, P1 | Одиночный и множественный `v-model:selected` (`max=2`), `keyLabel`/`keyValue`, раскрытие `group`/`menu`, `showSearch`/`filterMode`, `lazy`/`lazyMargin`/`lazyCacheHeight`, `roleItem`/`item*Attrs`, `expose` |
| **Границы и крайние случаи** | `BND` | 1 | P1 | Пустой результат поиска (`textNotFound` / `.d1-list__none`), блокировка `disabled` элементов и списков |
| **Адаптивность и viewport** | `RSP` | 1 | P1 | Десктоп (`1440×900`), планшет (`768×1024`), мобильные (`375×812`, `320×568`), отсутствие горизонтального переполнения |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `role="listbox"`, `role="option"`, `role="separator"`, `aria-selected`, `aria-disabled`, `aria-live="polite"`, клавиатурный фокус |
| **Консоль и рантайм** | `LOG` | 1 | P0 | События `@click`/`@click-lite`, `0` ошибок `console.error`, `pageerror`, `[Vue warn]` и сетевых ошибок |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и токены (`VIS`)

#### [TC-VIS-001] Базовый рендеринг `D1List`, `axis`, `divider` и `selectionStyle`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и токены`
- **Предусловия**: Открыть `http://localhost:3000/component-list`, viewport `1440×900`.
- **Шаги теста**:
  1. Проверить секции `Basic & Selection`, `Dividers & Selection Styles` и `Axis Layout`.
  2. Проверить наличие модификаторов `.d1-list--axis--y`, `.d1-list--axis--x`, `.d1-list--divider`.
  3. Проверить размеры и отсутствие наложения или обрезания элементов списка.
- **Ожидаемый результат**: Все списки и их пункты отображаются чётко, в горизонтальном режиме (`axis="x"`) элементы выстроены в строку, разделители и индикаторы выбора (`checkbox`, `checkmark`, `radio`) отрисованы без артефактов.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Специальные типы элементов (`group`, `menu`, `subtitle`, `line`, `space`, `html`), `lite` и `disabled`
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и токены`
- **Предусловия**: Секции `Item Types, Groups, Menus & HTML Slot` и `Lite Mode & Disabled`, viewport `1440×900`.
- **Шаги теста**:
  1. Проверить рендеринг `.d1-list__subtitle`, `.d1-list__line`, `.d1-list__space`, `.d1-list__html` (содержимое слота `Custom HTML Slot Content` и inline HTML `Inline HTML Item`), управляющих элементов `Workspace Group` и `More Menu`.
  2. Проверить секцию `Lite Mode & Disabled`: список с `lite` и неактивный список `disabled`.
- **Ожидаемый результат**: Все структурные подклассы и слот отображаются корректно, `disabled`-список визуально приглушён.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

### 2.2 Интерактивность и функционал (`INT`)

#### [TC-INT-001] Синхронизация `v-model:selected`, `Record` / `Custom Keys` и раскрытие `group` / `menu`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секции `Basic & Selection`, `Record List & Custom Keys`, `Item Types, Groups, Menus & HTML Slot`.
- **Шаги теста**:
  1. Кликнуть по пункту `Edit` в первом списке и проверить обновление `DemoValue` `selected (single)`.
  2. Кликнуть по пункту `Delete` во втором списке (`max=2`, `selected=['play', 'edit']`) и убедиться, что ограничение `max=2` сохраняется.
  3. Кликнуть по `Custom Key Three` в списке с `key-label="title"` / `key-value="code"` и проверить обновление `selectedCustomKey` на `k3`.
  4. Кликнуть по `Workspace Group` и убедиться в раскрытии вложенных пунктов `Projects` и `Templates`.
- **Ожидаемый результат**: Модель `v-model:selected` и кастомные ключи синхронизируются мгновенно, группа плавно раскрывает дочерние пункты.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Живой поиск, фильтрация (`show-search`, `filter-mode`) и подсветка (`highlight`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секция `Search, Filter Mode & Highlight`.
- **Шаги теста**:
  1. Проверить статическую подсветку `highlight="exam"` во втором списке.
  2. Ввести `"ex"` в поле поиска первого списка (`input[data-menu-control="1"]`).
  3. Проверить появление классов `.d1-list--searchActive` / `.d1-list--highlightActive` и подсветку совпадений.
- **Ожидаемый результат**: Совпадающие пункты подсвечиваются, несовпадающие скрываются в `filter-mode`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Проверка публичных методов `expose`
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секция `Expose & Events`.
- **Шаги теста**:
  1. Нажать кнопку `Read Expose State`.
  2. Проверить обновлённое значение `DemoValue` `expose`.
- **Ожидаемый результат**: Выводятся актуальные `isSelected=true`, `names=["Play"]`, `values=["play"]`.
- **Тип доказательства**: `Console/Log` (Скриншот не требуется)

#### [TC-INT-004] Ленивый рендеринг (`lazy`, `lazyMargin`, `lazyCacheHeight`) и кастомные роли/атрибуты (`roleItem`, `item*Attrs`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секция `Lazy Rendering & Custom Roles`, viewport `1440×900`.
- **Шаги теста**:
  1. Прокрутить страницу к секции `Lazy Rendering & Custom Roles` и дождаться активации `IntersectionObserver`.
  2. Проверить рендеринг 12 элементов в списке с `lazy`, `lazy-margin="64px 0px"`, `lazy-cache-height`.
  3. Проверить во втором списке секции наличие `role="menu"`, `role="menuitem"`, а также атрибутов `data-demo-item="true"`, `data-demo-group="true"`, `data-demo-menu="true"`, `data-demo-mgmt="true"`.
- **Ожидаемый результат**: Ленивые элементы списка корректно активируются при попадании во viewport, а кастомные роли и `item*Attrs` применяются к соответствующим узлам без перезаписи служебных ролей.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

### 2.3 Граничные случаи и крайние сценарии (`BND`)

#### [TC-BND-001] Состояние «Ничего не найдено» (`.d1-list__none`) и блокировка `disabled`
- **Приоритет**: `P1 (High)`
- **Категория**: `Границы и крайние случаи`
- **Предусловия**: Секции `Search, Filter Mode & Highlight` и `Basic & Selection`.
- **Шаги теста**:
  1. Ввести в поле поиска несуществующую строку `"zzzzzz"`.
  2. Убедиться, что элемент `.d1-list__none` отображает текст `No matching items`.
  3. Попытаться кликнуть по пункту `Settings` (`disabled: true`) и убедиться, что `selected` не изменился.
- **Ожидаемый результат**: Отображается сообщение `No matching items`, а `disabled`-элемент игнорирует клики.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

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

#### [TC-A11Y-001] WAI-ARIA атрибуты и клавиатурная доступность
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность (A11y)`
- **Предусловия**: Страница `http://localhost:3000/component-list`, viewport `1440×900`.
- **Шаги теста**:
  1. Проверить `role="listbox"`, `role="option"`, `role="separator"`, `aria-selected`, `aria-disabled="true"`, `aria-multiselectable="true"`, `aria-live="polite"`.
  2. Установить фокус на `D1List` через `Tab` и проверить наличие фокуса и отсутствие ловушки фокуса.
- **Ожидаемый результат**: Все ARIA-атрибуты соответствуют WAI-ARIA Listbox паттерну, клавиатурный фокус перемещается предсказуемо.
- **Тип доказательства**: `Console/Log` (Скриншот не требуется)

### 2.6 Логи и консоль (`LOG`)

#### [TC-LOG-001] События `@click` / `@click-lite` и отсутствие ошибок консоли/сети
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль и рантайм`
- **Предусловия**: Открыть страницу с очищенным логом консоли и сетевых запросов.
- **Шаги теста**:
  1. Кликнуть по пункту `Edit` в секции `Expose & Events`.
  2. Проверить отображение события в `lastEvent`.
  3. Проверить собранные за весь прогон `consoleErrors`, `vueWarnings`, `pageErrors`, `failedRequests`.
- **Ожидаемый результат**: События фиксируются в UI, `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`, `failedRequests: []`.
- **Тип доказательства**: `Console/Log` (Скриншот не требуется)
