# Спецификация тест-кейсов: D1Window

- **Сущность**: `D1Window`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Window`, `packages/constructor/src/constructors/Window`
- **Целевой URL**: `http://localhost:3000/component-window`
- **Справочные материалы (`materials/`)**: `Отсутствуют`
- **Последняя проверка / обновление**: `2026-11-15`
- **Всего тест-кейсов**: `24`

---

## 1. Матрица покрытия (Overview)

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 4 | P0, P1 | Базовый рендеринг, токены, адаптивные режимы (`menu`, `menuWindow`, `modalDynamic`, `actionSheet*`, `fullscreen`), выравнивание, размеры |
| **Интерактивность и функционал** | `INT` | 8 | P0, P1 | Слоты, клики, `v-model`, `expose`, `disabled`/`hide`, `persistent`, хуки, `embedded`/`inDom`, режим меню, `disableFocusReturn` |
| **Граничные случаи и устойчивость** | `BND` | 6 | P0, P1, P2 | Оси, `widthMatch`, гонки таймеров, вложенные окна (`Modal`/`Menu`/все режимы), меню-в-меню (3 уровня), связанные пропы вложенности |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`), `closeMobileHide` |
| **Доступность (A11y)** | `A11Y` | 3 | P1 | `role` (`dialog`, `alertdialog`, `menu`), `aria-haspopup`, `aria-*`, `inert`, `Escape` (LIFO), `closeOnEsc`, `ArrowDown` |
| **Консоль и стабильность runtime** | `LOG` | 1 | P0 | Отсутствие `console.error`, `pageerror` и `[Vue warn]`, корректность `@window` emit |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг модального окна и слотов (`#control`, `#title`, `#default`, `#footer`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-window`, вьюпорт `1440×900`, светлая тема.
- **Шаги теста**:
  1. Нажать кнопку `Open Modal` в группе `Basic Usage & Slots`.
  2. Проверить наличие телепортированного контейнера `.d1-window`, его геометрию (`getBoundingClientRect()`), фоновый затемнённый scrim и слоты заголовка, основного текста и футера.
- **Ожидаемый результат**: Окно отображается по центру экрана с корректными отступами, без обрезания и наложения элементов, с атрибутом `data-status="open"`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Адаптивные режимы (`menu`, `menuWindow`, `modalDynamic`, `actionSheetBottom`, `actionSheetRight`, `fullscreen`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-window`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Последовательно открыть `Menu (Dropdown)` (`adaptive="menu"`), `Menu Window` (`adaptive="menuWindow"`), `Modal Dynamic`, `Action Sheet (Bottom)`, `Action Sheet (Right)` и `Fullscreen Mode`.
  2. Проверить CSS-переменную `--sys-type-body` (`--MENU--`), отсутствие затемнения backdrop и привязку к кнопке для `menu`, а также геометрию и классы для `actionSheet*` и `fullscreen`.
- **Ожидаемый результат**: Все адаптивные режимы корректно применяют соответствующие классы, CSS-токены и позиционирование/геометрию.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Выравнивание во вьюпорте (`alignment`) и варианты размеров (`width` / `height`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-window`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Открыть `Left Full Drawer` (`alignment="leftFull"`) и `Custom (420x260px)`.
  2. Проверить координаты и вычисленные размеры контейнера `.d1-window__body`.
- **Ожидаемый результат**: `leftFull` растянут на всю высоту вьюпорта у левого края; окно `420x260px` имеет классы `d1-window--width--custom` / `d1-window--height--custom` и точные размеры `420×260`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Анатомия: разделители (`divider`), `closeButton`, `dense` и изображения (`image`, `imageSize`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-window`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Открыть `Dividers + Close + Dense` и `Left Image (quarter)` в группе `Anatomy: Dividers, Close Button, Overscroll & Images`.
  2. Проверить наличие кнопки закрытия в заголовке, разделителей и элемента изображения с классом `d1-window--imagePosition--left` / `d1-window--imageSize--quarter`.
- **Ожидаемый результат**: Кнопка закрытия и изображение отображаются внутри окна без смещения и обрезки контента.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

### 2.2 Интерактивность и функционал (`INT`)

#### [TC-INT-001] Открытие и закрытие через `#control`, кнопку `.close` и клик вне окна
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Нажать `Open Modal` -> убедиться, что окно открылось.
  2. Нажать `Cancel` (`.d1-window-control--close`) -> убедиться, что окно закрылось.
  3. Снова открыть окно и кликнуть по внешнему backdrop за пределами контента -> убедиться, что окно закрылось.
- **Ожидаемый результат**: Окно плавно переходит между открытым и закрытым состояниями по триггеру, кнопке закрытия и клику по оверлею.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Программное управление (`v-model:open` и `Expose`: `toOpen`, `toClose`, `setOpen`, `toggle`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Нажать `Open via State` в `Programmatic Control (v-model:open)` -> проверить `Value: true` и открытое окно.
  2. Нажать `Close via v-model` -> проверить `Value: false`.
  3. В `Control via Expose Methods` нажать `Open (toOpen)`, `Close (toClose)`, проверить `getOpen()` в `DemoValue`.
- **Ожидаемый результат**: Реактивное состояние `v-model:open` и методы `WindowExpose` синхронно управляют видимостью окна.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-003] Состояния `disabled` и реактивный модификатор `hide`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Страница `http://localhost:3000/component-window`.
- **Шаги теста**:
  1. Попытаться кликнуть по кнопке `Disabled Window` -> проверить, что диалог не открывается.
  2. Нажать кнопку `Hide Window Flag` и проверить появление класса `.d1-window--hide` на статическом окне.
- **Ожидаемый результат**: Отключённое окно игнорирует взаимодействие; модификатор `hide` скрывает статическое окно без ошибок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Режим `persistent` + `flash`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Страница `http://localhost:3000/component-window`.
- **Шаги теста**:
  1. Открыть `Persistent (Wobble + Flash)` (`data-status="flash"`).
  2. Кликнуть по оверлею за пределами окна -> проверить, что окно осталось открытым.
  3. Нажать `Explicit Close` -> проверить закрытие.
- **Ожидаемый результат**: Внешний клик не закрывает `persistent`-окно (активен режим `flash`); явная кнопка закрытия закрывает окно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

#### [TC-INT-005] Хуки жизненного цикла (`preparation`, `beforeOpening`, `opening`, `beforeClosing`, `closing`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: В группе `Lifecycle Hooks` флаг `Allow Close: true`.
- **Шаги теста**:
  1. Нажать `Allow Close: true`, чтобы переключить в `false`.
  2. Открыть `Open Guarded Window` -> проверить в `Last Hook` вызов `opening`.
  3. Нажать `Try Close` -> убедиться, что окно не закрылось и `Last Hook` содержит `beforeClosing -> blocked (Allow Close = false)`.
  4. Нажать `Allow & Close`, затем `Try Close` -> убедиться, что окно закрылось и `Last Hook` содержит `closing -> closed`.
- **Ожидаемый результат**: Хук `beforeClosing` корректно предотвращает закрытие при возврате `false` и пропускает закрытие при `true`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-006] `contextmenu`, `embedded` и `inDom`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Правый клик (`contextmenu`) по `Right Click Me (Context Menu)` открывает окно.
  2. Открыть `SSR Persistent inDom Window` и закрыть по `Escape` -> проверить, что содержимое окна с `inDom` остаётся в DOM после первого открытия и закрытия.
  3. Открытие `Open Embedded Window` рендерит окно внутри родительского контейнера `DemoBox` без телепортации в `document.body`.
- **Ожидаемый результат**: Все режимы триггеров и жизненного цикла DOM работают корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-006.png`)

#### [TC-INT-007] Поведение режима меню (`adaptive="menu"`, `widthMatch`, `autoClose`, `classesWindow.static`, внешний клик)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Нажать `Menu Mode + widthMatch + autoClose` -> проверить `--sys-type-body: '--MENU--'`, `data-window-menu="menu"`, позиционирование ниже кнопки и совпадение ширины (`widthMatch`).
  2. Нажать элемент с классом `classesWindow.static` -> убедиться, что меню осталось открытым.
  3. Нажать элемент авто-закрытия -> убедиться, что меню автоматически закрылось (`autoClose: true`).
  4. Снова открыть меню и кликнуть за его пределами -> убедиться в закрытии по внешнему клику.
- **Ожидаемый результат**: Режим `menu` корректно позиционируется, уважает `classesWindow.static` и `autoClose` и закрывается при клике вовне.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-007.png`)

#### [TC-INT-008] Отключение возврата фокуса (`disableFocusReturn`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Все окна закрыты, фокус установлен на управляющую кнопку.
- **Шаги теста**:
  1. Сфокусировать и открыть `disableFocusReturn (No Focus Restore)`.
  2. Закрыть окно кнопкой `Close`.
  3. Сравнить `document.activeElement` с поведением обычного модального окна (`Open Modal` -> `Cancel`).
- **Ожидаемый результат**: При `disableFocusReturn` фокус после закрытия не возвращается на кнопку-триггер (`document.activeElement === BODY`), тогда как в стандартном окне фокус возвращается на кнопку `Open Modal`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-008.png`)

### 2.3 Граничные случаи и устойчивость (`BND`)

#### [TC-BND-001] Осевое позиционирование (`axis: x/y/on`) и `widthMatch`
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Вьюпорт `1440×900`.
- **Шаги теста**:
  1. Открыть `Horizontal (Axis X)` и `Vertical (Axis Y)`.
  2. Открыть `Match Control Width (Width Match)` и сравнить `--d1-window-sys-control-width` и ширину `.d1-window__body`.
- **Ожидаемый результат**: CSS-переменная `--d1-window-sys-control-width` соответствует ширине триггера (`296.140625px`), а тело окна с `width="auto"` расширяется под контент (`614px`) без обрезания.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Гонка быстрого переключения (`toOpen` -> быстрый `toClose` -> быстрый `toOpen`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Нажать подряд без задержки: `Open (toOpen)`, `Close (toClose)`, `Open (toOpen)`.
  2. Выждать `500ms` и проверить состояние окна `demo-expose-window`.
- **Ожидаемый результат**: Устаревший таймер `toClose()` не закрывает повторно открытое окно; финальное состояние — открыто (`openCount: 1`, `inertCount: 1`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

#### [TC-BND-003] Вложенные окна и подсчёт блокировок `WindowHidden` (`WeakMap`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Открыть `Nested Windows & Escape LIFO` (окно A) и внутри него нажать `Open Child Window` (окно B).
  2. Нажать `Escape` для закрытия окна B -> проверить, что окно A осталось открытым и `inert` сохранился (`open: 1, inert: 1`).
  3. Снова нажать `Escape` для закрытия окна A -> проверить полное снятие `inert` (`open: 0, inert: 0`).
- **Ожидаемый результат**: Счётчик блокировок на элементах через `WeakMap` сохраняет `inert` до закрытия последнего окна.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

#### [TC-BND-004] Меню внутри меню: 3-уровневый каскад (`Menu L1 -> Submenu L2 (axis: x) -> Submenu L3 (autoClose)`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Все окна закрыты, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Открыть `Open Cascade Menu (3 Levels)` (`L1`) -> `Open Submenu L2 >` (`L2`) -> `Open Submenu L3 >` (`L3`).
  2. Проверить одновременное открытие всех 3 меню без перекрытий (`left: 73 / 444 / 815`) и отсутствие `inert`.
  3. Проверить пошаговое закрытие по `Escape` (LIFO: `3 -> 2 -> 1 -> 0`).
- **Ожидаемый результат**: Вложенные меню корректно позиционируются каскадом, не перекрывают родительские триггеры и закрываются строго в порядке LIFO.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-004.png`)

#### [TC-BND-005] Матрица вложенности всех режимов (`Modal -> Modal`, `Menu -> Modal`, `ActionSheetRight -> Menu`, `Fullscreen -> ModalDynamic`, `MenuWindow -> ActionSheetBottom`, `Static -> Menu`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Проверить пары вложенности, включая `Nested: Modal -> Modal`.
  2. Проверить открытие обоих уровней (`open: 2`, `inert: 1`) и закрытие в порядке LIFO по `Escape` (`2 -> 1 -> 0`, `inert: 0`).
- **Ожидаемый результат**: Вложенные окна корректно стекруются, изолируют фон и закрываются в порядке LIFO без гонок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-005.png`)

#### [TC-BND-006] Связанные свойства вложенности (`persistent`, `closeOnEsc: false`, `inert: false`, `autoClose`, `classesWindow.close`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Открыть `Nested Props: Persistent + closeOnEsc: false`, затем `Open Protected Child (no Esc)`.
  2. Нажать `Escape` -> убедиться, что оба окна остались открыты (`2`).
  3. Кликнуть вне окон -> убедиться, что дочернее закрылось, а `persistent` родитель остался открыт (`1`).
  4. Нажать `Close Persistent Parent` -> убедиться в закрытии родителя и снятии `inert` (`0`).
- **Ожидаемый результат**: Все защитные и управляющие пропы корректно взаимодействуют при вложенности.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-006.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптивность на разных разрешениях (`320px`, `375px`, `768px`, `1440px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Страница `http://localhost:3000/component-window`.
- **Шаги теста**:
  1. Последовательно установить размеры вьюпорта `320×568`, `375×812`, `768×1024`, `1440×900`.
  2. Открыть `Open Modal` и измерить ширину `.d1-window__body`.
- **Ожидаемый результат**: Компонент корректно помещается в границы каждого вьюпорта без выхода за ширину экрана (`281px`, `336px`, `721px`, `768px`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Мобильное отображение `Action Sheet (Bottom)` на `375×812`
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Вьюпорт `375×812`.
- **Шаги теста**:
  1. Нажать `Action Sheet (Bottom)` на мобильном вьюпорте.
  2. Проверить привязку к нижнему краю экрана и ширину панели.
- **Ожидаемый результат**: Панель занимает доступную ширину мобильного вьюпорта и корректно отображается у нижней границы.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] WAI-ARIA атрибуты (`aria-haspopup`, `role="alertdialog"`, `aria-modal`, `aria-labelledby`, `aria-describedby`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить на кнопке-триггере атрибут `aria-haspopup="dialog"`.
  2. Открыть `closeOnEsc: false (alertdialog)` и проверить `role="alertdialog"`, `aria-modal="true"`, `aria-labelledby="demo-alert-dialog-title"`, `aria-describedby="demo-alert-dialog-desc"`.
- **Ожидаемый результат**: Все ARIA-атрибуты выставлены согласно спецификации компонента.
- **Тип доказательства**: `Console/Log`

#### [TC-A11Y-002] Клавиатурное управление: `Escape` (`closeOnEsc: false`) и `ArrowDown` (`openOnArrowDown`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Открыть `closeOnEsc: false (alertdialog)` и нажать клавишу `Escape` -> убедиться, что окно не закрылось; закрыть через кнопку `Acknowledge & Close`.
  2. Сфокусировать кнопку `Focus + ArrowDown to Open` и нажать `ArrowDown` -> убедиться, что меню открылось.
- **Ожидаемый результат**: Клавиатурные обработчики строго соблюдают флаги `closeOnEsc` и `openOnArrowDown`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-A11Y-002.png`)

#### [TC-A11Y-003] Семантика меню (`role="menu"` + `ariaHaspopup="menu"`) и отсутствие `inert` на фоне
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Вьюпорт `1440×900`, все окна закрыты.
- **Шаги теста**:
  1. Проверить на кнопке `role: menu + ariaHaspopup: menu` атрибут `aria-haspopup="menu"`.
  2. Открыть меню и проверить `role="menu"`, `data-window-menu="menu"`, `--sys-type-body: "--MENU--"` и `inertCount === 0`.
- **Ожидаемый результат**: Триггер имеет `aria-haspopup="menu"`, открытое меню имеет `role="menu"`, а фон остаётся интерактивным (`inertCount === 0`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-A11Y-003.png`)

### 2.6 Консоль и стабильность runtime (`LOG`)

#### [TC-LOG-001] Отсутствие ошибок консоли и корректность события `@window`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Очистить буфер сообщений консоли перед прогоном.
- **Шаги теста**:
  1. Открыть и закрыть окно в секции `Events Tracking` (`Trigger Window Events`).
  2. Проверить `DemoValue` (`Value: window`), вывод в консоль `Event: window id: ..., open: true/false` и собрать все `console.error`, `pageerror` и `[Vue warn]`.
- **Ожидаемый результат**: `0` ошибок JavaScript, `0` предупреждений Vue и корректная передача `WindowEmitOptions`.
- **Тип доказательства**: `Console/Log`
