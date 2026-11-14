# Спецификация тест-кейсов: D1Window

- **Сущность**: `D1Window`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Window`, `packages/constructor/src/constructors/Window`
- **Целевой URL**: `http://localhost:3000/component-window`
- **Справочные материалы (`materials/`)**: `Отсутствуют`
- **Последняя проверка / обновление**: `2026-11-14`
- **Всего тест-кейсов**: `22`

---

## 1. Матрица покрытия (Overview)

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 4 | P0, P1 | Базовый рендеринг, токены, адаптивные режимы (`menu`, `menuWindow`, `modalDynamic`, `actionSheet*`, `fullscreen`), выравнивание, размеры |
| **Интерактивность и функционал** | `INT` | 7 | P0, P1 | Слоты, клики, `v-model`, `expose`, `disabled`/`hide`, `persistent`, хуки, `embedded`/`inDom`, режим меню (`autoClose`, `widthMatch`, `block`) |
| **Граничные случаи и устойчивость** | `BND` | 6 | P0, P1, P2 | Оси, `widthMatch`, гонки таймеров, вложенные окна (`Modal`/`Menu`/все режимы), меню-в-меню (3 уровня), связанные пропы вложенности |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`), `closeMobileHide` |
| **Доступность (A11y)** | `A11Y` | 2 | P1 | `role`, `aria-*`, `inert`, `Escape` (LIFO), `closeOnEsc`, `ArrowDown` |
| **Консоль и стабильность runtime** | `LOG` | 1 | P0 | Отсутствие `console.error`, `pageerror` и `[Vue warn]`, корректность `@window` emit |

---

## 2. Детальные тест-кейсы

### [TC-VIS-001] Базовый рендеринг модального окна и слотов (`#control`, `#title`, `#default`, `#footer`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-window`, вьюпорт `1440×900`, светлая тема.
- **Шаги теста**:
  1. Нажать кнопку `Open Modal` в группе `Basic Usage & Slots`.
  2. Проверить наличие телепортированного контейнера `.d1-window`, его геометрию (`getBoundingClientRect()`), фоновый затемнённый scrim и слоты заголовка, основного текста и футера.
- **Ожидаемый результат**: Окно отображается по центру экрана с корректными отступами, без обрезания и наложения элементов, с классом `d1-window--status--open`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

### [TC-VIS-002] Адаптивные режимы (`menu`, `menuWindow`, `modalDynamic`, `actionSheetBottom`, `actionSheetRight`, `fullscreen`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-window`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Последовательно открыть `Menu (Dropdown)` (`adaptive="menu"`), `Menu Window` (`adaptive="menuWindow"`), `Modal Dynamic`, `Action Sheet (Bottom)`, `Action Sheet (Right)` и `Fullscreen Mode`.
  2. Проверить CSS-переменную `--sys-type-body` (`--MENU--`, `--MENU-WINDOW--`), отсутствие затемнения backdrop и привязку к кнопке для `menu`, а также геометрию и классы для `actionSheet*` и `fullscreen`.
- **Ожидаемый результат**: Все адаптивные режимы корректно применяют соответствующие классы, CSS-токены и позиционирование/геометрию.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

### [TC-VIS-003] Выравнивание во вьюпорте (`alignment`) и варианты размеров (`width` / `height`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-window`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Открыть `Left Full Drawer` (`alignment="leftFull"`) и `Custom (420x260px)`.
  2. Проверить координаты и вычисленные размеры контейнера `.d1-window__body`.
- **Ожидаемый результат**: `leftFull` растянут на всю высоту вьюпорта у левого края; окно `420x260px` имеет классы `--width--custom` / `--height--custom` и не превышает заданные габариты.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

### [TC-VIS-004] Анатомия: разделители (`divider`), `closeButton`, `dense` и изображения (`image`, `imageSize`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-window`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Открыть `Dividers + Close + Dense` и `Left Image (quarter)` в группе `Anatomy: Dividers, Close Button, Overscroll & Images`.
  2. Проверить наличие кнопки закрытия в заголовке, разделителей и элемента изображения с классом `d1-window--imagePosition--left` / `--imageSize--quarter`.
- **Ожидаемый результат**: Кнопка закрытия и изображение отображаются внутри окна без смещения и обрезки контента.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

### [TC-INT-001] Открытие и закрытие через `#control`, кнопку `.close` и клик вне окна
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Нажать `Open Modal` -> убедиться, что окно открылось.
  2. Нажать `Cancel` (`.d1-window-control--close`) -> убедиться, что окно закрылось.
  3. Снова открыть окно и кликнуть по внешнему backdrop за пределами контента -> убедиться, что окно закрылось.
- **Ожидаемый результат**: Окно плавно переходит между открытым и закрытым состояниями по триггеру, кнопке закрытия и клику по оверлею.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

### [TC-INT-002] Программное управление (`v-model:open` и `Expose`: `toOpen`, `toClose`, `setOpen`, `toggle`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Нажать `Open via State` в `Programmatic Control (v-model:open)` -> проверить `Value: true` и открытое окно.
  2. Нажать `Close via v-model` -> проверить `Value: false`.
  3. В `Control via Expose Methods` нажать `Open (toOpen)`, `Close (toClose)`, `Open (setOpen)`, `Toggle (toggle)`, проверяя `getOpen()` в `DemoValue`.
- **Ожидаемый результат**: Реактивное состояние `v-model:open` и методы `WindowExpose` синхронно управляют видимостью окна.
- **Тип доказательства**: `Console/Log`

### [TC-INT-003] Состояния `disabled` и реактивный модификатор `hide`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Страница `http://localhost:3000/component-window`.
- **Шаги теста**:
  1. Попытаться кликнуть по кнопке `Disabled Window` -> проверить, что диалог не открывается.
  2. Нажать кнопку `Hide Window Flag` и проверить появление класса `.d1-window--hide` на статическом окне.
- **Ожидаемый результат**: Отключённое окно игнорирует взаимодействие; модификатор `hide` скрывает статическое окно без ошибок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

### [TC-INT-004] Режим `persistent` + `flash`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Страница `http://localhost:3000/component-window`.
- **Шаги теста**:
  1. Открыть `Persistent (Wobble + Flash)`.
  2. Кликнуть по оверлею за пределами окна -> проверить, что окно осталось открытым.
  3. Нажать `Explicit Close` -> проверить закрытие.
- **Ожидаемый результат**: Внешний клик не закрывает `persistent`-окно (запускается flash/wobble эффект); явная кнопка закрытия закрывает окно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

### [TC-INT-005] Хуки жизненного цикла (`preparation`, `beforeOpening`, `opening`, `beforeClosing`, `closing`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: В группе `Lifecycle Hooks` флаг `Allow Close: true`.
- **Шаги теста**:
  1. Нажать `Allow Close: true`, чтобы переключить в `false`.
  2. Открыть `Open Guarded Window` -> проверить в `Last Hook` вызов `opening`.
  3. Нажать `Try Close` -> убедиться, что окно не закрылось и `Last Hook` содержит `beforeClosing -> blocked`.
  4. Нажать `Allow & Close`, затем `Try Close` -> убедиться, что окно закрылось и `Last Hook` содержит `closing -> closed`.
- **Ожидаемый результат**: Хук `beforeClosing` корректно предотвращает закрытие при возврате `false` и пропускает закрытие при `true`.
- **Тип доказательства**: `Console/Log`

### [TC-INT-006] `contextmenu`, `autoClose`, `classesWindow.block`, `embedded` и `inDom`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Правый клик (`contextmenu`) по `Right Click Me (Context Menu)` открывает меню.
  2. Проверка, что окно с `inDom` уже присутствует в DOM до открытия.
  3. Открытие `Open Embedded Window` рендерит окно внутри родительского контейнера `DemoBox` без телепортации в `document.body`.
- **Ожидаемый результат**: Все режимы триггеров и жизненного цикла DOM работают корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-006.png`)

### [TC-INT-007] Поведение режима меню (`adaptive="menu"`, `widthMatch`, `autoClose`, `classesWindow.block`, внешний клик)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Нажать `Menu Mode + widthMatch + autoClose` -> проверить `--sys-type-body: '--MENU--'`, `data-window-menu="menu"`, позиционирование ниже кнопки и совпадение ширины (`widthMatch`).
  2. Нажать `Blocked Item (Stays Open)` с классом `classesWindow.block` -> убедиться, что меню осталось открытым.
  3. Нажать `Action Item (Auto Closes)` -> убедиться, что меню автоматически закрылось (`autoClose: true`).
  4. Снова открыть меню и кликнуть за его пределами -> убедиться в закрытии по внешнему клику.
- **Ожидаемый результат**: Режим `menu` корректно позиционируется, уважает `classesWindow.block` и `autoClose` и закрывается при клике вовне.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-007.png`)

### [TC-BND-001] Осевое позиционирование (`axis: x/y/on`) и `widthMatch`
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Вьюпорт `1440×900`.
- **Шаги теста**:
  1. Открыть `Horizontal (Axis X)` и `Vertical (Axis Y)`.
  2. Открыть `Match Control Width (Width Match)` и сравнить ширину кнопки-триггера и `.d1-window__body`.
- **Ожидаемый результат**: Ширина всплывающего окна с `widthMatch` соответствует ширине управляющей кнопки в пределах допуска `<= 2px`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

### [TC-BND-002] Гонка быстрого переключения (`toOpen` -> быстрый `toClose` -> быстрый `toOpen`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Нажать подряд в пределах ~20мс: `Open (toOpen)`, `Close (toClose)`, `Open (toOpen)`.
  2. Выждать `250ms` и проверить состояние окна `demo-expose-window`.
- **Ожидаемый результат**: Устаревший таймер `toClose()` не закрывает повторно открытое окно; финальное состояние окна — открыто (`getOpen(): true`).
- **Тип доказательства**: `Console/Log`

### [TC-BND-003] Вложенные окна и подсчёт блокировок `WindowHidden` (`WeakMap`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Открыть `Nested Windows & Escape LIFO` (окно A) -> проверить наличие `inert` на `#app` (или основном контенте).
  2. Внутри него нажать `Open Child Window` (окно B).
  3. Закрыть только окно B (нажав `Escape`) -> проверить, что окно A осталось открытым, а фоновый элемент **сохранил** `inert` и `aria-hidden="true"`.
  4. Снова нажать `Escape` для закрытия окна A -> проверить полное снятие `inert` и `aria-hidden` с фона.
- **Ожидаемый результат**: Счётчик блокировок на элементах через `WeakMap` сохраняет `inert`/`aria-hidden` до закрытия последнего окна A.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

### [TC-BND-004] Меню внутри меню: 3-уровневый каскад (`Menu L1 -> Submenu L2 (axis: x) -> Submenu L3 (autoClose)`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Все окна закрыты, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Открыть `Open Cascade Menu (3 Levels)` (`L1`) -> `Open Submenu L2 >` (`L2`) -> `Open Submenu L3 >` (`L3`).
  2. Проверить одновременное открытие всех 3 меню (`openCount === 3`) и горизонтальное позиционирование `L2`/`L3` (`axis="x"`, `:indent="8"`).
  3. Проверить `classesWindow.block` внутри каскада, клик по телу `L1` при открытом `L2` (закрытие `L2` с сохранением `L1`), поведение `autoClose` на `L3`, пошаговое закрытие по `Escape` (LIFO) и полный сброс внешним кликом.
- **Ожидаемый результат**: Вложенные меню корректно позиционируются каскадом, не перекрывают родительские триггеры, корректно обрабатывают `block`, `autoClose`, `Escape` LIFO и внешний клик.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-004.png`)

### [TC-BND-005] Матрица вложенности всех режимов (`Modal -> Modal`, `Menu -> Modal`, `ActionSheetRight -> Menu`, `Fullscreen -> ModalDynamic`, `MenuWindow -> ActionSheetBottom`, `Static -> Menu`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Последовательно проверить пары вложенности: `Nested: Modal -> Modal`, `Nested: Menu -> Modal`, `Nested: ActionSheetRight -> Menu`, `Nested: Fullscreen -> ModalDynamic`, `Nested: MenuWindow -> ActionSheetBottom` и `Static Parent -> Menu`.
  2. Для каждой пары проверить открытие обоих уровней (`openCount === 2`), корректный `inert` (`WeakMap`) и закрытие в порядке LIFO (`Escape`).
- **Ожидаемый результат**: Любая комбинация родительского и дочернего адаптивного режима корректно стекруется, изолирует фон и закрывается в порядке LIFO без гонок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-005.png`)

### [TC-BND-006] Связанные свойства вложенности (`persistent`, `closeOnEsc: false`, `inert: false`, `autoClose`, `classesWindow.block`, `blockChildren`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Открыть `Nested Props: Persistent + closeOnEsc: false`, затем `Open Protected Child (no Esc)` (`persistent` родитель + дочернее с `closeOnEsc: false`, `autoClose: true`, `inert: false`).
  2. Нажать `Escape` -> убедиться, что оба окна остались открыты (`closeOnEsc: false` у верхнего окна блокирует `Esc`).
  3. Кликнуть вне окон -> убедиться, что родитель (`persistent` + открытое дочернее `isNotBlockChildren`) не закрылся.
  4. Нажать `Blocked Child Action` (`classesWindow.block`) -> дочернее не закрывается.
  5. Нажать `Explicit Child Close` (`classesWindow.close`) -> закрывается только дочернее, родитель остаётся открыт; затем нажать `Close Persistent Parent`.
- **Ожидаемый результат**: Все защитные и управляющие пропы корректно взаимодействуют при вложенности.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-006.png`)

### [TC-RSP-001] Адаптивность на разных разрешениях и `closeMobileHide`
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Страница `http://localhost:3000/component-window`.
- **Шаги теста**:
  1. Последовательно установить размеры вьюпорта `1440×900`, `768×1024`, `375×812`, `320×568`.
  2. Проверить отсутствие горизонтальной прокрутки (`scrollWidth <= innerWidth`) и корректность открытия модального окна на каждом разрешении.
- **Ожидаемый результат**: Компонент корректно помещается в границы каждого вьюпорта без обрезания и горизонтального скролла.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### [TC-RSP-002] Мобильное отображение `Action Sheet (Bottom)` на `375×812`
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Вьюпорт `375×812`.
- **Шаги теста**:
  1. Нажать `Action Sheet (Bottom)` на мобильном вьюпорте.
  2. Проверить привязку к нижнему краю экрана и ширину панели.
- **Ожидаемый результат**: Панель занимает ширину мобильного вьюпорта и корректно отображается у нижней границы.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### [TC-A11Y-001] WAI-ARIA атрибуты (`aria-haspopup`, `role`, `aria-label`, `inert`, `aria-hidden`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить на кнопке-триггере атрибут `aria-haspopup="dialog"`.
  2. Открыть `closeOnEsc: false (alertdialog)` и проверить `role="alertdialog"` и `aria-label="No Escape Dialog"`.
- **Ожидаемый результат**: Все ARIA-атрибуты выставлены согласно спецификации компонента.
- **Тип доказательства**: `Console/Log`

### [TC-A11Y-002] Клавиатурное управление: `Escape` (`closeOnEsc: false` vs `true`) и `ArrowDown`
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Открыть `closeOnEsc: false (alertdialog)` и нажать клавишу `Escape` -> убедиться, что окно не закрылось; закрыть через кнопку `Acknowledge & Close`.
  2. Сфокусировать кнопку `Focus + ArrowDown to Open` и нажать `ArrowDown` -> убедиться, что меню открылось.
- **Ожидаемый результат**: Клавиатурные обработчики строго соблюдают флаги `closeOnEsc` и `openOnArrowDown`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-A11Y-002.png`)

### [TC-LOG-001] Отсутствие ошибок консоли и корректность события `@window`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Очистить буфер сообщений консоли перед прогоном.
- **Шаги теста**:
  1. Открыть и закрыть окно в секции `Events Tracking`.
  2. Проверить отображение `window: id: ..., open: true/false` в `DemoValue` и собрать все `console.error`, `pageerror` и `[Vue warn]`.
- **Ожидаемый результат**: `0` ошибок JavaScript, `0` предупреждений Vue и корректная передача `WindowEmitOptions`.
- **Тип доказательства**: `Console/Log`
