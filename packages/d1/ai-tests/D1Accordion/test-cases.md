# Спецификация тест-кейсов: D1Accordion

- **Сущность**: `D1Accordion`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Accordion`, `packages/constructor/src/constructors/Accordion`
- **Целевой URL**: `http://localhost:3000/component-accordion`
- **Справочные материалы (`materials/`)**: `Отсутствуют`
- **Последняя проверка / обновление**: `2026-11-23`
- **Всего тест-кейсов**: `17`

---

## 1. Матрица покрытия (Overview)

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 4 | P0, P1 | Базовый рендеринг, числовые значения, `divider`, `icon` / `iconArrowDown`, `cellAttrs`, слоты |
| **Интерактивность и функционал** | `INT` | 6 | P0, P1 | Клик, `open`, `disabled` / `loading` / `isSkeleton`, `v-model`, `expose`, `clickOpen`, `autoClose`, `motionTransformAttrs`, события |
| **Граничные случаи и устойчивость** | `BND` | 2 | P1 | Быстрые повторные клики, SSR-гидратация `:open="true"` и `inDom` |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) |
| **Доступность (A11y)** | `A11Y` | 2 | P1 | `aria-labelledby`, `aria-describedby`, `labelId` / `descriptionId`, `aria-expanded`, `Enter` / `Space` / `Escape` |
| **Консоль и стабильность runtime** | `LOG` | 1 | P0 | Отсутствие `console.error`, `pageerror`, `[Vue warn]` и сетевых ошибок (HTTP >= 400) |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг, числовые пропсы и заголовок без описания
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-accordion`, вьюпорт `1440×900`, светлая тема.
- **Шаги теста**:
  1. Дождаться полной загрузки страницы и гидратации Vue-приложения.
  2. Найти группу `Basic & Data Formats` и проверить рендеринг трёх вариантов: строка `label + description`, только `label`, числовые `:label="2048"` и `:description="99999"`.
  3. Проверить bounding box элементов `.d1-accordion` и `.d1-accordion__head`, отсутствие нулевых размеров и клиппинга текста.
- **Ожидаемый результат**: Все три экземпляра корректно отрендерены, числовые `2048` и `99999` отображаются как текст, переполнений и наложений нет.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Разделительная линия (`divider: true` и `divider: false`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-accordion`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти группу `Dividers` с элементами `With Divider (Default)` (`:divider="true"`) и `Without Divider` (`:divider="false"`).
  2. Проверить классы `.d1-accordion--divider` и атрибут `data-divider="divider"`.
  3. Проверить вычисленные стили `borderTopWidth` и `borderTopStyle` для соседних элементов с разделителем и при `divider: false`.
- **Ожидаемый результат**: Элемент с `divider: true` имеет класс `.d1-accordion--divider` и `data-divider="divider"` (а у `With Divider` в сочетании с предыдущим аккордеоном — `border-top-style: solid` между соседними разделителями), элемент с `divider: false` не имеет ни класса `.d1-accordion--divider`, ни верхней границы от селектора соседства.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Кастомизация иконок (`icon`, `iconArrowDown`, `null`) и анимация стрелки
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Найти группу `Icons & Arrow Customization` при вьюпорте `1440×900`.
- **Шаги теста**:
  1. Проверить отображение строковой иконки (`settings`), объектной иконки (`favorite` с `palette: 'error'`), кастомной стрелки (`expand_circle_down`), объектной стрелки (`expand_circle_down` + `palette: 'primary'`) и скрытых иконок (`:icon="null"`, `:iconArrowDown="null"`).
  2. Кликнуть по элементу `Custom Trailing Arrow Indicator` и проверить изменение стиля/класса поворота иконки при открытии.
- **Ожидаемый результат**: Иконки рендерятся согласно конфигурации, вариант с `null` не отображает ни ведущую иконку, ни стрелку раскрытия; стрелка поворачивается при открытии.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Палитры `cellAttrs` и пользовательские слоты (`#label`, `#caption`, `#description`, `#trailing`, `#body`, `#default`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Найти группы `Custom Slots` и `Header Styling & Metadata via cellAttrs` при вьюпорте `1440×900`.
- **Шаги теста**:
  1. Проверить рендеринг слотов `#label`, `#caption`, `#description`, `#trailing` (`D1Badge`), `#body` в шапке и scoped-слота `#default="{ isOpen, isShow }"` после клика.
  2. Проверить заголовки с `cellAttrs` (`palette: 'primary' | 'secondary' | 'tertiary'`, `caption`).
- **Ожидаемый результат**: Все слоты отображаются на своих позициях без наложений, scoped-значения `isOpen`/`isShow` отражаются в раскрытом теле, палитры заголовков визуально различимы.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

---

### 2.2 Интерактивность и функционал (`INT`)

#### [TC-INT-001] Переключение по клику (`open: false` -> `open`) и начальное открытие (`:open="true"`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти группу `States` при вьюпорте `1440×900`.
- **Шаги теста**:
  1. Проверить, что `Closed State (Default)` имеет `data-open="none"`, а `Pre-Opened State` имеет `data-open="open"` и видимое тело.
  2. Кликнуть по заголовку `Closed State (Default)`, убедиться в переходе в `data-open="open"` и появлении текста тела.
  3. Повторно кликнуть по заголовку и проверить закрытие (`data-open="none"`).
- **Ожидаемый результат**: Переключение по клику работает предсказуемо, предоткрытый аккордеон открыт сразу после загрузки.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Состояния заголовка через `cellAttrs` (`disabled`, `loading`, `isSkeleton`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти элементы `Disabled State`, `Loading State`, `Skeleton Loading State` в группе `States`.
- **Шаги теста**:
  1. Попытаться кликнуть по `Disabled State` (`:cellAttrs="{ disabled: true }"`) и проверить `data-open` и `pointer-events` / класс disabled.
  2. Проверить наличие индикатора прогресса у `Loading State` (`:cellAttrs="{ loading: true }"`).
  3. Проверить классы скелетона у `Skeleton Loading State` (`:cellAttrs="{ isSkeleton: true }"`).
- **Ожидаемый результат**: Отключённый аккордеон не раскрывается по клику; состояния загрузки и скелетона отображаются корректно без смещения разметки.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Двусторонняя синхронизация `v-model:open` и `v-model:model-open`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти группу `V-Model Control`.
- **Шаги теста**:
  1. Нажать кнопку `Open Panel` для `v-model:open` и проверить `data-open="open"` + значение `DemoValue` (`true`).
  2. Кликнуть по заголовку `Two-Way Bound Accordion (v-model:open)` и убедиться, что `DemoValue` вернулся в `false`.
  3. Повторить проверку для `Two-Way Bound Accordion (v-model:model-open)` с кнопкой `Open Model Panel` и заголовком.
- **Ожидаемый результат**: Обе модели (`v-model:open` и `v-model:model-open`) синхронизируются в обе стороны.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Программное управление через `expose` (`toOpen`, `toClose`, `toggle`, `setOpen`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти группу `Programmatic Control (Expose Methods)`.
- **Шаги теста**:
  1. Проверить начальный статус `getOpen(): false, isShow(): false, hasMotionElement: true`.
  2. Последовательно нажать кнопки `toOpen()`, `toClose()`, `toggle()`, `setOpen(true)`, `setOpen(false)` и проверить изменение `data-open` и текста `DemoValue`.
- **Ожидаемый результат**: Все методы `expose` корректно управляют состоянием аккордеона и возвращают актуальные значения.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-005] Параметры `clickOpen: false`, `autoClose: false` и `motionTransformAttrs`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти группу `DOM, Accessibility & Lifecycle`.
- **Шаги теста**:
  1. Убедиться, что при закрытом `In-DOM when Closed (motionTransformAttrs.inDom)` элемент тела уже присутствует в DOM.
  2. Проверить, что у `Custom Body Tag & Instant Toggle` элемент `.d1-motionTransform__body` имеет тег `DIV` (а не `SECTION`) и раскрывается без задержки анимации.
  3. Открыть `Disabled Auto-Close (autoClose: false)`, затем кликнуть в пустую область страницы и убедиться, что аккордеон остался открытым.
  4. Кликнуть по заголовку `Non-Clickable Header (clickOpen: false)` — убедиться, что состояние не изменилось; нажать кнопку `Open Programmatic` и проверить открытие.
- **Ожидаемый результат**: Все параметры жизненного цикла и `motionTransformAttrs` работают согласно контракту.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-005.png`)

#### [TC-INT-006] Отслеживание событий (`update:open`, `update:model-open`, `click`, `transform`, `transform-lite`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Найти группу `Events`.
- **Шаги теста**:
  1. Кликнуть по заголовку `Interactive Event Tracker`.
  2. Проверить отображаемое значение `DemoValue`.
- **Ожидаемый результат**: События корректно эмитятся при взаимодействии без ошибок в консоли.
- **Тип доказательства**: `Console/Log`

---

### 2.3 Граничные случаи и устойчивость (`BND`)

#### [TC-BND-001] Быстрые повторные переключения заголовка
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundary Cases & Edge Scenarios`
- **Предусловия**: Вьюпорт `1440×900`, базовый аккордеон в группе `Basic & Data Formats`.
- **Шаги теста**:
  1. Выполнить серию из 5 быстрых кликов по заголовку `Default Accordion`.
  2. Выждать `400ms` и проверить согласованность `data-open` и `aria-expanded`.
- **Ожидаемый результат**: Состояния `data-open` и `aria-expanded` синхронизированы (`open`/`true` после нечётного числа кликов), зависания анимации нет.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-002] SSR-рендеринг и гидратация `:open="true"` и `motionTransformAttrs.inDom`
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundary Cases & Edge Scenarios`
- **Предусловия**: Запросить SSR HTML страницы `http://localhost:3000/component-accordion`.
- **Шаги теста**:
  1. Проверить наличие текста тела `Pre-Opened State` и `In-DOM when Closed` прямо в исходном SSR HTML ответе сервера.
  2. Проверить консоль браузера после клиентской гидратации на отсутствие `Hydration` предупреждений.
- **Ожидаемый результат**: SSR HTML содержит разметку обоих кейсов, гидратация проходит без `[Vue warn]`.
- **Тип доказательства**: `Console/Log`

---

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптивность на Desktop (`1440×900`) и Tablet (`768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Открыта страница `/component-accordion`.
- **Шаги теста**:
  1. Проверить верстку при `1440×900` и изменить вьюпорт на `768×1024`.
  2. Измерить `document.documentElement.scrollWidth <= window.innerWidth` и геометрию раскрытых и закрытых аккордеонов.
- **Ожидаемый результат**: Горизонтальный скролл отсутствует, компоненты занимают доступную ширину без наложений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Мобильные вьюпорты (`375×812` и `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Открыта страница `/component-accordion`.
- **Шаги теста**:
  1. Установить вьюпорт `375×812` (затем `320×568`).
  2. Проверить перенос длинных описаний, высоту интерактивного заголовка (`>= 44px`), отсутствие выхода дочерних элементов за пределы ширины экрана.
- **Ожидаемый результат**: Текст корректно переносится, тач-цели достаточны, `scrollWidth <= innerWidth` на обоих мобильных разрешениях.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

---

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] ARIA-атрибуты (`aria-labelledby`, `aria-describedby`, `aria-expanded`, `aria-controls`, кастомные ID)
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility`
- **Предусловия**: Открыта страница `/component-accordion`.
- **Шаги теста**:
  1. Проверить наличие `role="region"` на корневом `.d1-accordion` и `role="button"` / `tabindex="0"` на интерактивном заголовке.
  2. Проверить, что у `Default Accordion` заполнены `aria-labelledby` и `aria-describedby`, у `Label Only` отсутствует `aria-describedby`, а у `Custom Accessibility IDs` значения равны `demo-accordion-custom-label` и `demo-accordion-custom-description`.
- **Ожидаемый результат**: Все ARIA-связи соответствуют структуре заголовка и описания.
- **Тип доказательства**: `Console/Log`

#### [TC-A11Y-002] Клавиатурная навигация (`Tab`, `Enter`, `Space`, `Escape`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility`
- **Предусловия**: Вьюпорт `1440×900`, перезагрузить страницу в чистом состоянии.
- **Шаги теста**:
  1. Сфокусировать заголовок `Default Accordion` (проверить `focus` и видимость фокуса).
  2. Нажать `Enter` — проверить открытие (`aria-expanded="true"`), затем `Space` — проверить закрытие (`aria-expanded="false"`).
  3. Снова открыть по `Enter` и нажать `Escape` — проверить автозакрытие (`autoClose: true`).
- **Ожидаемый результат**: Все три клавиши (`Enter`, `Space`, `Escape`) управляют состоянием аккордеона корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-A11Y-002.png`)

---

### 2.6 Консоль и стабильность runtime (`LOG`)

#### [TC-LOG-001] Отсутствие ошибок консоли, Vue-предупреждений и сетевых сбоев
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Слушатели `console`, `pageerror`, `response` подключены с начала тестовой сессии.
- **Шаги теста**:
  1. Выполнить все сценарии `VIS`, `INT`, `BND`, `RSP`, `A11Y`.
  2. Проверить собранные массивы `consoleErrors`, `vueWarnings`, `pageErrors` и `failedRequests` (HTTP >= 400).
- **Ожидаемый результат**: `0` ошибок консоли, `0` исключений страницы, `0` предупреждений `[Vue warn]` и `0` сетевых ошибок.
- **Тип доказательства**: `Console/Log`
