# Спецификация тест-кейсов: D1Modal

- **Сущность**: `D1Modal`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Modal`, `packages/constructor/src/constructors/Modal`, `packages/demo/src/pages/components/DemoModalPage.vue`
- **Целевой URL**: `http://localhost:3000/component-modal`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `14`

---

## 1. Матрица покрытия

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :---: | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 4 | P0, P1 | Базовый модал и слоты (`#title`, `#header`, `#default`, `#footer`), ширины (`sm`, `md`, `lg`, `xl`, `auto`), `D1Bars` + `D1Actions` + `barsHide`/`actionsHide`, `imagePosition` (`top`, `left`, `adaptive*`) и `imageAttrs` |
| **Интерактивность и функциональность** | `INT` | 4 | P0, P1 | `persistent`, `closeButton: false`, `closeOnEsc: false`, `fullscreen`, `disabled`, `autoClose`, `v-model:open`, `v-model:model-open`, `expose` (`toOpen`, `toClose`, `setOpen`, `toggle`, `getId`, `getOpen`, `getControl`, `getWindowElement`), события, `inDom` и `v-if` |
| **Границы и крайние случаи** | `BND` | 3 | P1, P2 | Длинный скроллируемый контент, числовой `0` в `barsLabel` и `actionsList`, пробельный заголовок `"   "`, Unicode, XSS-строка, неразрывная строка и узкий триггер (`240px`) |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Адаптивное поведение `D1Modal` и `imagePosition` (`adaptiveSm`–`adaptive2xl`) на `1440×900`, `768×1024`, `375×812`, `320×568` |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `role="dialog"` / `role="alertdialog"`, `aria-labelledby` / `aria-describedby`, захват фокуса (`Tab`/`Shift+Tab`), закрытие по `Escape` и `disableFocusReturn` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Полное отслеживание `ModalEmits` и отсутствие `[Vue warn]`, `console.error`, `pageerror`, сетевых ошибок (`>= 400`) |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый модал и отображение всех слотов (`#title`, `#header`, `#default`, `#footer`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-modal`, вьюпорт `1440×900`.
- **Шаги**:
  1. Открыть `All Slots Modal` из группы `Basic Usage, Slots, Bars & Actions`.
  2. Проверить центрирование окна `.d1-modal`, наличие `.d1-modal__title`, `.d1-modal__header`, `.d1-modal__body`, `.d1-modal__footer`, scoped-свойства `open` и кнопки закрытия.
- **Ожидаемый результат**: Все 4 секции слотов отрендерены корректно, окно центрировано на оверлее без клиппинга и наложений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Варианты ширины (`sm`, `md`, `lg`, `xl`, `auto`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Группа `Predefined Widths (sm, md, lg, xl, auto)`, вьюпорт `1440×900`.
- **Шаги**:
  1. Последовательно открыть модальные окна `Small (sm)`, `Medium (md)`, `Large (lg)`, `Extra Large (xl)`, `Auto Width`.
  2. Измерить ширину `.d1-window__body` и проверить классы `.d1-modal--width--*`.
- **Ожидаемый результат**: Ширина возрастает в порядке `sm < md < lg < xl`, класс модификатора совпадает с пропом `width`, `auto` подстраивается под контент.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Интеграция `D1Bars`, `D1Actions`, а также `barsHide` / `actionsHide`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Группа `Basic Usage, Slots, Bars & Actions`.
- **Шаги**:
  1. Открыть `Bars & Actions Modal` и проверить `D1Bars` (`barsLabel`, `barsDescription`, `:bars-back-hide="false"`, `barsList`, `barsAttrs`) и `D1Actions` (`actionsList`, `actionsSecondary`, `actionsAttrs`).
  2. Открыть `Hidden Bars & Actions` и убедиться, что `barsHide=true` и `actionsHide=true` скрывают встроенные панели и кнопки действий.
- **Ожидаемый результат**: Шапка `D1Bars` и футер `D1Actions` отрендерены при активных пропсах и полностью отсутствуют при `barsHide=true` / `actionsHide=true`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Позиции баннера изображения (`top`, `left`, `adaptiveSm`–`adaptive2xl`) и `imageAttrs`
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Группа `Image & Adaptive Layout Positions`, вьюпорт `1440×900`.
- **Шаги**:
  1. Открыть `Image Top` и проверить класс `.d1-modal--imagePosition--top`.
  2. Открыть `Image Left` и проверить двухколоночную раскладку и класс `.d1-modal--imagePosition--left`.
  3. Открыть `Image Object & imageAttrs` и проверить загрузку изображения из объекта `{ value: ... }` с `imageAttrs`.
  4. Проверить наличие соответствующих классов `.d1-modal--imagePosition--adaptive*` для `adaptiveSm`, `adaptiveMd`, `adaptiveLg`, `adaptiveXl`, `adaptive2xl`.
- **Ожидаемый результат**: Изображение корректно загружается и позиционируется согласно `imagePosition` и `imageAttrs` без искажений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

---

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Режимы закрытия и окна (`persistent`, `closeButton: false`, `closeOnEsc: false`, `fullscreen`, `disabled`, `autoClose`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `States, Persistent, Fullscreen & Dismiss Behavior`.
- **Шаги**:
  1. Открыть `Persistent Modal`, нажать `Escape` и убедиться, что окно остаётся открытым, затем закрыть кнопкой `Dismiss Explicitly`.
  2. Открыть `Hide Close Button` и убедиться в отсутствии кнопки `.d1-window__close`.
  3. Открыть `Disable Escape Close`, нажать `Escape` и проверить сохранение открытого состояния.
  4. Открыть `Fullscreen Modal` и проверить полноэкранный режим (`fullscreen: true`).
  5. Проверить, что `Disabled Modal` имеет `disabled` и не открывается.
  6. Открыть `Auto Close Modal` и кликнуть внутри тела модального окна — убедиться в закрытии.
- **Ожидаемый результат**: Все режимы управления окном работают строго в соответствии с контрактом.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Программное управление `v-model:open`, `v-model:model-open` и `defineExpose`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группы `Programmatic Control (v-model:open & v-model:model-open)` и `Control via Expose Methods`.
- **Шаги**:
  1. Нажать `Open v-model:open` -> проверить открытие и закрытие кнопкой `Close via v-model`, а также синхронизацию `DemoValue`.
  2. Нажать `Open v-model:model-open` -> проверить открытие и закрытие кнопкой `Close via modelOpen`.
  3. Вызвать `Open (toOpen)`, `Close (toClose)`, `Open (setOpen)`, `Close (setOpen false)`, `Toggle (toggle)` и проверить `statusValue` (`getId()`, `getOpen()`, `hasControl`, `getWindowElement()`).
- **Ожидаемый результат**: Все способы программного управления синхронно открывают/закрывают окно и обновляют реактивное состояние.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-003] События (`update:open`, `update:modelOpen`, `window`, `actions`, `actionsLite`, `bars`, `barsLite`, `barsBack`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `Events`.
- **Шаги**:
  1. Открыть `Open All Events Modal`, убедиться в синхронизации `open: true, modelOpen: true` и событиях `update:open` / `update:modelOpen` / `window`.
  2. Кликнуть по кнопке действия (`Confirm`) -> проверить события `actions` / `actionsLite`.
  3. Кликнуть по кнопке назад/действия в `D1Bars` -> проверить события `bars` / `barsLite` / `barsBack`.
- **Ожидаемый результат**: Все 8 заявленных событий `ModalEmits` срабатывают с корректными payload и обновляют `eventName` / `eventPayload`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] SSR/DOM жизненный цикл (`windowAttrs.inDom` и условное монтирование `v-if`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `SSR & DOM Lifecycle (in-dom & Conditional Mount)`.
- **Шаги**:
  1. Проверить наличие содержимого `In-DOM Modal` в DOM до его открытия (`inDom: true`).
  2. Нажать `Unmount Modal` и затем `Mount Modal`, проверяя состояние `isLifecycleMounted` и открытие смонтированного модала.
- **Ожидаемый результат**: `inDom: true` сохраняет содержимое в DOM при закрытом окне; размонтирование и повторное монтирование `v-if` выполняются без утечек и ошибок.
- **Тип доказательства**: `Console/Log`

---

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Длинный скроллируемый контент
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Группа `Boundary & Edge Cases (Scroll, 0, Empty, Unicode, XSS, Narrow)`, вьюпорт `1440×900`.
- **Шаги**:
  1. Открыть `Long Scrollable Content`.
  2. Проверить, что высота окна не превышает высоту вьюпорта (`rect.height <= window.innerHeight`) и внутренняя область тела имеет скролл (`scrollHeight > clientHeight`).
- **Ожидаемый результат**: Окно помещается во вьюпорт, футер остаётся доступным, тело прокручивается внутри контейнера.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Числовой `0` в `barsLabel` и `actionsList`
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Группа `Boundary & Edge Cases (Scroll, 0, Empty, Unicode, XSS, Narrow)`.
- **Шаги**:
  1. Открыть `Numeric 0 Label Boundary`.
  2. Проверить отображение текста `"0"` в заголовке `D1Bars` и на кнопке в `D1Actions`.
- **Ожидаемый результат**: Числовой `0` не отбрасывается как falsy, а корректно отображается и в `D1Bars`, и в `D1Actions`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

#### [TC-BND-003] XSS, Unicode, неразрывная строка и узкий контейнер (`240px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Группа `Boundary & Edge Cases (Scroll, 0, Empty, Unicode, XSS, Narrow)`.
- **Шаги**:
  1. Открыть `XSS, Unicode & Unbroken Text` и убедиться, что `<img src=x onerror=alert(1)>` отображается как текст, кириллица/вьетнамские диакритики/эмодзи читаемы, а `AAAA...` не вызывает горизонтального выхода за границы окна.
  2. Проверить кнопку-триггер внутри `.demo-modal-page__narrow` (`max-width: 240px`) и открыть `Narrow Trigger Modal` (`barsLabel="   "`, `width="sm"`).
- **Ожидаемый результат**: XSS экранирован, текст переносится корректно, узкий контейнер не переполняется.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

---

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптивное отображение `D1Modal` и `imagePosition="adaptive*"` (`1440`, `768`, `375`, `320`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Группа `Image & Adaptive Layout Positions` (`adaptiveMd`, `adaptiveLg`).
- **Шаги**:
  1. Открыть `adaptiveMd` на `1440×900` и измерить геометрию окна и изображения.
  2. Изменить вьюпорт на `768×1024`, `375×812` и `320×568` и проверить адаптацию ширины окна без горизонтального переполнения.
- **Ожидаемый результат**: На мобильных вьюпортах `375×812` и `320×568` окно корректно умещается в пределах ширины экрана (`bodyRect.width <= viewport.width`), контент читаем без клиппинга.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

---

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Роли `dialog`/`alertdialog`, связь ARIA, focus trap, `Escape` и `disableFocusReturn`
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Группы `Accessibility (ARIA Roles, Focus Trap & Escape)` и `States, Persistent, Fullscreen & Dismiss Behavior`.
- **Шаги**:
  1. Открыть `ARIA Dialog + Focus Trap`, проверить `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`, а также перемещение фокуса клавишами `Tab` / `Shift+Tab` внутри диалога.
  2. Нажать `Escape` и убедиться в закрытии модала и возврате фокуса на кнопку-триггер.
  3. Открыть `AlertDialog Role` и проверить `role="alertdialog"`.
  4. Открыть `Disable Focus Return`, закрыть кнопкой `Close` и убедиться, что фокус не возвращается на кнопку-триггер.
- **Ожидаемый результат**: ARIA-связи и роли валидны, focus trap удерживает фокус внутри диалога, `Escape` закрывает окно, а `disableFocusReturn` управляет возвратом фокуса.
- **Тип доказательства**: `Console/Log`

---

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Контроль консоли браузера, Vue-предупреждений и сетевых запросов
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Очистить журнал перед прогоном сценариев.
- **Шаги**:
  1. Отслеживать `console.error`, `[Vue warn]`, `pageerror` и HTTP-статусы `>= 400` на всём протяжении тестирования.
- **Ожидаемый результат**: `vueWarnings: []`, `pageErrors: []`, `consoleErrors: []`, `networkErrors: []`.
- **Тип доказательства**: `Console/Log`
