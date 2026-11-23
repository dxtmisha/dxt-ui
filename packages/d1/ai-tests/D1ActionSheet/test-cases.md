# Спецификация тест-кейсов: D1ActionSheet

- **Сущность**: `D1ActionSheet`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/ActionSheet`, `packages/constructor/src/constructors/ActionSheet`, `packages/demo/src/pages/components/DemoActionSheetPage.vue`
- **Целевой URL**: `http://localhost:3000/component-action-sheet`
- **Справочные материалы (`materials/`)**: `Отсутствуют`
- **Последняя проверка / обновление**: `2026-11-23`
- **Всего тест-кейсов**: `12`

---

## 1. Матрица покрытия (Overview)

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 4 | P0, P1 | Базовый ActionSheet и слоты (`#title`, `#header`, `#default`, `#footer`), ширины (`sm`, `md`, `lg`, `auto`), `D1Bars` + `D1Actions`, `adaptive: 'actionSheetRight'` и touch-ручка |
| **Интерактивность и функционал** | `INT` | 3 | P0, P1 | `touchClose: false`, `persistent`, `closeButton: false`, `disabled`, `autoClose`, `v-model:open`, `v-model:modelOpen`, `expose`, события (`window`, `actions`, `bars`) |
| **Граничные случаи и устойчивость** | `BND` | 2 | P1, P2 | Длинный скроллируемый контент, числовой `0` в `barsLabel` и `actionsList` |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Адаптация `D1ActionSheet` на `1440×900`, `768×1024`, `375×812`, `320×568` (трансформация в bottom sheet на мобильных) |
| **Доступность (A11Y)** | `A11Y` | 1 | P1 | `aria-labelledby`/`aria-describedby` связь с `D1Bars`, `aria-hidden="true"` на `.d1-actionSheet__tab`, `Escape` и `disableFocusReturn` |
| **Консоль и стабильность runtime** | `LOG` | 1 | P0 | Отсутствие `[Vue warn]`, `console.error`, `pageerror` и сетевых ошибок (`>= 400`) |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый ActionSheet и отображение всех слотов (`#title`, `#header`, `#default`, `#footer`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-action-sheet`, вьюпорт `1440×900`.
- **Шаги проверки**:
  1. Открыть `All Slots Action Sheet` в группе `Basic Usage & Slots`.
  2. Проверить наличие `.d1-actionSheet`, `data-touch="touch"`, `.d1-actionSheet__touch`, `.d1-actionSheet__tab`, `.d1-actionSheet__title`, `.d1-actionSheet__header`, `.d1-actionSheet__body`, `.d1-actionSheet__footer`.
- **Ожидаемый результат**: Все 4 слота и touch-обёртка отрендерены корректно без наложений и клиппинга.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Варианты ширины (`sm`, `md`, `lg`, `auto`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Группа `Width Configurations`, вьюпорт `1440×900`.
- **Шаги проверки**:
  1. Последовательно открыть `Small (sm)`, `Medium (md)`, `Large (lg)`, `Auto Width`.
  2. Измерить ширину `.d1-window__body` и проверить классы `.d1-actionSheet--width--*`.
- **Ожидаемый результат**: Ширины строго возрастают `sm < md < lg`, модификаторы соответствуют пропам.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Интеграция `D1Bars` и `D1Actions`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Группа `Basic Usage & Slots`.
- **Шаги проверки**:
  1. Открыть `Bars & Actions Sheet`.
  2. Проверить рендеринг `.d1-bars` (кнопка назад, заголовок, описание, кнопка `help`) и `.d1-actions` с `align: 'auto'` и кнопками `Reset`, `Cancel`, `Confirm`.
- **Ожидаемый результат**: Шапка `D1Bars` и футер `D1Actions` корректно встроены и выровнены.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Боковая адаптация `windowAttrs.adaptive = "actionSheetRight"`
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Группа `Touch Close, Persistent & Dismiss Behavior`, вьюпорт `1440×900`.
- **Шаги проверки**:
  1. Открыть `Adaptive Right (actionSheetRight)`.
  2. Проверить класс `.d1-window--adaptive--actionSheetRight` и геометрию окна.
- **Ожидаемый результат**: Лист отображается в режиме `actionSheetRight` без обрезания и артефактов.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

---

### 2.2 Интерактивность и управление состоянием (`INT`)

#### [TC-INT-001] Режимы `touchClose: false`, `persistent`, `closeButton: false`, `disabled`, `autoClose`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и управление состоянием`
- **Предусловия**: Группа `Touch Close, Persistent & Dismiss Behavior`.
- **Шаги проверки**:
  1. Открыть `Disable Touch Close` -> проверить отсутствие `.d1-actionSheet__touch`.
  2. Открыть `Persistent Sheet`, нажать `Escape` -> проверить, что окно не закрылось, затем закрыть кнопкой `Dismiss Explicitly`.
  3. Открыть `Hide Close Button` -> проверить отсутствие `.d1-window__close`.
  4. Проверить `disabled` на кнопке `Disabled Sheet`.
  5. Открыть `Auto Close Sheet` -> кликнуть по телу окна и убедиться, что окно закрылось.
- **Ожидаемый результат**: Все 5 режимов отрабатывают точно по контракту.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Программное управление `v-model:open`, `v-model:modelOpen` и `expose`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и управление состоянием`
- **Предусловия**: Группы `Programmatic Control` и `Control via Expose Methods`.
- **Шаги проверки**:
  1. Открыть/закрыть через `Open v-model:open` и `Open v-model:modelOpen`, проверяя синхронизацию `DemoValue`.
  2. Вызвать `Open (toOpen)` в группе `Control via Expose Methods` и проверить `getId()`, `getOpen(): true`, `hasWindowElement(): true`.
- **Ожидаемый результат**: Все режимы программного управления синхронно изменяют состояние.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-003] События (`window`, `actions`, `actionsLite`, `bars`, `barsLite`, `update:open`, `update:modelOpen`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и управление состоянием`
- **Предусловия**: Группа `Events`.
- **Шаги проверки**:
  1. Открыть `Open All Events Action Sheet` -> проверить `open: true, modelOpen: true` и событие `window`.
  2. Кликнуть по `Confirm` -> проверить `actions`, `actionsLite`.
  3. Кликнуть по кнопкам `D1Bars` -> проверить `bars`, `barsLite` и закрытие окна.
- **Ожидаемый результат**: Все события фиксируются и корректно обновляют состояние.
- **Тип доказательства**: `Console/Log`

---

### 2.3 Граничные случаи и устойчивость (`BND`)

#### [TC-BND-001] Длинный скроллируемый контент
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные случаи и устойчивость`
- **Предусловия**: Группа `Boundary & Scrollable Content`, вьюпорт `1440×900`.
- **Шаги проверки**:
  1. Открыть `Long Scrollable Content`.
  2. Проверить `modalHeight <= viewportHeight` и наличие скролла (`scrollHeight > clientHeight`).
- **Ожидаемый результат**: Контейнер остаётся в пределах вьюпорта, тело прокручивается, футер доступен.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Числовой `0` в `barsLabel` и `actionsList`
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные случаи и устойчивость`
- **Предусловия**: Группа `Boundary & Scrollable Content`.
- **Шаги проверки**:
  1. Открыть `Numeric 0 Label Boundary`.
  2. Проверить рендеринг `"0"` в `.d1-bars__label` и на кнопке `.d1-actions`.
- **Ожидаемый результат**: Число `0` не отбрасывается как falsy.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

---

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптация `D1ActionSheet` на `1440×900`, `768×1024`, `375×812`, `320×568`
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Открыть `Open Basic Action Sheet`.
- **Шаги проверки**:
  1. Измерить ширину и позицию листа на `1440×900`, `768×1024`, `375×812`, `320×568`.
  2. На мобильном вьюпорте (`375×812`) сделать скриншот и проверить привязку к нижней части экрана без горизонтального переполнения.
- **Ожидаемый результат**: На всех разрешениях ширина окна укладывается во вьюпорт (`width <= viewportWidth`), на мобильных отображается как нижняя шторка.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

---

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Связь ARIA, `aria-hidden` на ручке свайпа, `Escape` и `disableFocusReturn`
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность (A11Y)`
- **Предусловия**: Группы `Basic Usage & Slots` и `Touch Close, Persistent & Dismiss Behavior`.
- **Шаги проверки**:
  1. Проверить `aria-labelledby` и `aria-describedby` у `Bars & Actions Sheet` и `aria-hidden="true"` у `.d1-actionSheet__tab`.
  2. Нажать `Escape` и проверить возврат фокуса на триггер.
  3. Открыть `Disable Focus Return`, закрыть кнопкой `Close` и убедиться, что фокус не возвращается на триггер.
- **Ожидаемый результат**: ARIA-атрибуты и управление фокусом соответствуют стандарту.
- **Тип доказательства**: `Console/Log`

---

### 2.6 Логи, консоль и стабильность runtime (`LOG`)

#### [TC-LOG-001] Контроль консоли браузера, Vue-предупреждений и сетевых запросов
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Логи и консоль`
- **Предусловия**: Очистить журнал перед прогоном.
- **Шаги проверки**:
  1. Отслеживать `console.error`, `[Vue warn]`, `pageerror` и HTTP-статусы `>= 400`.
- **Ожидаемый результат**: `vueWarnings: []`, `pageErrors: []`, `consoleErrors: []`, `networkErrors: []`.
- **Тип доказательства**: `Console/Log`
