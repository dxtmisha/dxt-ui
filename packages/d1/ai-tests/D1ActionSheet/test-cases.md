# Спецификация тест-кейсов: D1ActionSheet

- **Сущность**: `D1ActionSheet`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/ActionSheet`, `packages/constructor/src/constructors/ActionSheet`, `packages/demo/src/pages/components/DemoActionSheetPage.vue`
- **Целевой URL**: `http://localhost:3000/component-action-sheet`
- **Справочные материалы (`materials/`)**: `Отсутствуют`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `15`

---

## 1. Матрица покрытия (Overview)

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 4 | P0, P1 | Базовый ActionSheet и scoped-слоты (`#title`, `#header`, `#default`, `#footer` с `open`), ширины (`sm`, `md`, `lg`, `auto`), `D1Bars` + `D1Actions`, `barsAttrs`/`actionsAttrs`, `adaptive: 'actionSheetRight'` |
| **Интерактивность и функционал** | `INT` | 5 | P0, P1 | `touchClose: false`, `persistent`, `closeButton: false`, `disabled`, `autoClose`, `barsHide`/`actionsHide`, `v-model:open`/`v-model:modelOpen`, `expose` (включая `getControl()`), все 8 событий (`update:open`, `update:modelOpen`, `window`, `actions`, `actionsLite`, `bars`, `barsLite`, `barsBack`), асинхронные хуки `beforeOpening`/`beforeClosing`, `v-if` и `inDom` |
| **Граничные случаи и устойчивость** | `BND` | 3 | P1, P2 | Длинный скроллируемый контент, числовой `0`, пустые `barsLabel=""`/`actionsList=[]`, неразрывная строка, Unicode/XSS |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Адаптация `D1ActionSheet` на `1440×900`, `768×1024`, `375×812`, `320×568` |
| **Доступность (A11Y)** | `A11Y` | 1 | P1 | `aria-labelledby`/`aria-describedby` связь с `D1Bars`, `aria-hidden="true"` на `.d1-actionSheet__tab`, `Escape` и `disableFocusReturn` |
| **Консоль и стабильность runtime** | `LOG` | 1 | P0 | Отсутствие `[Vue warn]`, `console.error`, `pageerror` и сетевых ошибок (`>= 400`) |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый ActionSheet и отображение scoped-слотов (`#title`, `#header`, `#default`, `#footer`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-action-sheet`, вьюпорт `1440×900`.
- **Шаги проверки**:
  1. Открыть `All Slots Action Sheet` в группе `Basic Usage & Slots`.
  2. Проверить наличие `.d1-actionSheet`, `data-touch="touch"`, `.d1-actionSheet__touch`, `.d1-actionSheet__tab`, `.d1-actionSheet__title`, `.d1-actionSheet__header`, `.d1-actionSheet__body`, `.d1-actionSheet__footer`, а также отображение `open: true` из scoped-слотов.
- **Ожидаемый результат**: Все 4 слота со scoped-значениями и touch-обёртка отрендерены корректно без наложений и клиппинга.
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

#### [TC-VIS-003] Интеграция `D1Bars`, `D1Actions`, `barsAttrs` и `actionsAttrs`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Группы `Basic Usage & Slots` и `Bars & Actions Hide / Attrs Customization`.
- **Шаги проверки**:
  1. Открыть `Bars & Actions Sheet` и проверить `.d1-bars` и `.d1-actions`.
  2. Открыть `Open Custom Attrs Sheet` и проверить применение `barsAttrs` (`padding: 'lg'`) и `actionsAttrs` (`align: 'center'`, `wrap: true`).
- **Ожидаемый результат**: Шапка `D1Bars` и футер `D1Actions` корректно встроены, атрибуты применены.
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

#### [TC-INT-001] Режимы `touchClose: false`, `persistent`, `closeButton: false`, `disabled`, `autoClose` и переключатели `barsHide`/`actionsHide`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и управление состоянием`
- **Предусловия**: Группы `Touch Close, Persistent & Dismiss Behavior` и `Bars & Actions Hide / Attrs Customization`.
- **Шаги проверки**:
  1. Проверить `Disable Touch Close`, `Persistent Sheet` + `Escape`, `Hide Close Button`, `Disabled Sheet` и `Auto Close Sheet`.
  2. Включить `barsHide: true` и `actionsHide: true`, открыть `Open Custom Attrs Sheet` и убедиться в скрытии `.d1-bars` и `.d1-actions`.
- **Ожидаемый результат**: Все режимы отрабатывают точно по контракту.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Программное управление `v-model:open`, `v-model:modelOpen` и `expose` (включая `getControl`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и управление состоянием`
- **Предусловия**: Группы `Programmatic Control` и `Control via Expose Methods`.
- **Шаги проверки**:
  1. Открыть/закрыть через `Open v-model:open` и `Open v-model:modelOpen`.
  2. Вызвать `Open (toOpen)`, `Close (toClose)`, `Toggle (toggle)`, `Open (setOpen)` / `Close (setOpen false)` и проверить `getId()`, `getOpen()`, `hasControl(): true`, `hasWindowElement(): true`.
- **Ожидаемый результат**: Все методы программного управления синхронно изменяют состояние.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-003] Все 8 событий (`update:open`, `update:modelOpen`, `window`, `actions`, `actionsLite`, `bars`, `barsLite`, `barsBack`) и `Payload`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и управление состоянием`
- **Предусловия**: Группа `Events`.
- **Шаги проверки**:
  1. Открыть `Open All Events Action Sheet` -> проверить `window` / `update:open` / `update:modelOpen`.
  2. Кликнуть кнопку `help` в `D1Bars` (`bars`, `barsLite`), кнопку назад в `D1Bars` (`barsBack`), затем кнопку `Confirm` в `D1Actions` (`actions`, `actionsLite`) и проверить `DemoValue` (`eventName` и `Payload`).
- **Ожидаемый результат**: Все 8 событий фиксируются с корректным `Payload`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Асинхронные хуки `beforeOpening` / `beforeClosing`
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и управление состоянием`
- **Предусловия**: Группа `SSR, Async Guards & Lifecycle`.
- **Шаги проверки**:
  1. Нажать `Async Before-Open / Before-Close`, дождаться разрешения Promise (`beforeOpening: allowed`) и открытия шторки.
  2. Нажать `Close Async Sheet`, дождаться `beforeClosing: allowed` и закрытия.
- **Ожидаемый результат**: Открытие и закрытие управляются асинхронными Promise-хуками без ошибок.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-005] `windowAttrs.inDom` и условный жизненный цикл `v-if`
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и управление состоянием`
- **Предусловия**: Группа `SSR, Async Guards & Lifecycle`.
- **Шаги проверки**:
  1. Проверить наличие закрытого `In-DOM Action Sheet` в DOM (`inDom: true`).
  2. Нажать `Unmount Lifecycle Sheet` (`Mounted: false`), затем `Mount Lifecycle Sheet` (`Mounted: true`).
- **Ожидаемый результат**: `inDom` сохраняет узел в DOM; `v-if` чисто монтирует и размонтирует компонент.
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

#### [TC-BND-003] Пустые `barsLabel=""`/`actionsList=[]`, неразрывная строка, Unicode и XSS
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные случаи и устойчивость`
- **Предусловия**: Группа `Boundary & Scrollable Content`.
- **Шаги проверки**:
  1. Открыть `Empty / Unbroken / Unicode / XSS`.
  2. Проверить рендеринг неразрывного токена, Unicode и экранированного `<img src=x onerror=alert(1)>` без `img` элементов и горизонтального переполнения.
- **Ожидаемый результат**: Контент корректно переносится и экранируется без ошибок.
- **Тип доказательства**: `Console/Log`

---

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптация `D1ActionSheet` на `1440×900`, `768×1024`, `375×812`, `320×568`
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Открыть `Open Basic Action Sheet`.
- **Шаги проверки**:
  1. Измерить ширину и позицию листа на `1440×900`, `768×1024`, `375×812`, `320×568`.
  2. На мобильном вьюпорте (`375×812`) сделать скриншот и проверить привязку к нижней части экрана без горизонтального переполнения.
- **Ожидаемый результат**: На всех разрешениях ширина окна укладывается во вьюпорт, на мобильных отображается как нижняя шторка.
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
