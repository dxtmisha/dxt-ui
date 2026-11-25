# Спецификация тест-кейсов: D1Window

- **Сущность**: `D1Window`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Window`, `packages/constructor/src/constructors/Window`, `packages/demo/src/pages/components/DemoWindowPage.vue`
- **Целевой URL**: `http://localhost:3000/component-window`
- **Справочные материалы**: `Отсутствуют`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `27`

---

## 1. Обзорная матрица покрытия

| Категория | Код | Количество | Приоритеты | Фокус проверки |
| :--- | :--- | :---: | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 5 | P0, P1 | Базовый рендеринг, токены, все 14 режимов `adaptive`, все 13 `alignment`, все 9 `origin`, `width`/`height`, `divider`/`dense`/`closeButton`/`scrollbarAttrs`/`image`/`imagePosition`/`imageSize` |
| **Интерактивность и функционал** | `INT` | 8 | P0, P1 | Слоты, клики, `v-model:open`, `expose`, `disabled`/`hide`, `persistent`/`flash`, хуки, `embedded`/`inDom`, режим меню, `disableFocusReturn`, жизненный цикл `v-if` |
| **Граничные случаи и устойчивость** | `BND` | 7 | P0, P1, P2 | Оси, `widthMatch`, гонки таймеров, вложенные окна (`Modal`/`Menu`), меню-в-меню (3 уровня), связанные пропы вложенности, пустые/`0`/длинный/неразрывный текст/Unicode/XSS/узкий `240px` |
| **Адаптивность и вьюпорты** | `RSP` | 3 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`), `autoStatic*`, `actionSheet*`, `imagePosition: adaptive*`, `closeMobileHide` |
| **Доступность (A11y)** | `A11Y` | 3 | P1 | `role` (`dialog`, `alertdialog`, `menu`), `aria-haspopup`, `aria-*`, `inert`, `Escape` (LIFO), `closeOnEsc`, `ArrowDown` |
| **Консоль и стабильность runtime** | `LOG` | 1 | P0 | Отсутствие `console.error`, `pageerror` и `[Vue warn]`, события `@window`, `@update:open`, `@load`, `@scrollbarEdge`, `@scrollbarReachBottom` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг модального окна и слотов (`#control`, `#title`, `#default`, `#footer`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-window`, вьюпорт `1440×900`, светлая тема.
- **Шаги теста**:
  1. Нажать кнопку `Open Modal` в группе `Basic Usage & Slots`.
  2. Проверить наличие телепортированного контейнера `.d1-window`, его геометрию (`getBoundingClientRect()`), фоновый затемнённый scrim и слоты заголовка, основного текста и футера.
- **Ожидаемый результат**: Окно отображается по центру экрана с корректными отступами, без обрезания и наложения элементов, с атрибутом `data-status="open"`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Все 14 адаптивных режимов (`modal`, `modalDynamic`, `menu`, `menuWindow`, `actionSheet*`, `autoStatic*`, `static`, `fullscreen`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Страница `http://localhost:3000/component-window`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить все кнопки в группе `Adaptive Responsive Modes (All 14)` (`modal`, `modalDynamic`, `menu`, `menuWindow`, `actionSheetBottom`, `actionSheetRight`, `actionSheet`, `actionSheetToModal`, `autoStaticSm`–`autoStatic2xl`, `fullscreen`) и встроенный блок `Adaptive: static`.
  2. Проверить CSS-переменную `--sys-type-body` (`--MENU--` / `--STATIC--`), классы `.d1-window--adaptive--*` и `.d1-window--fullscreen`, а также геометрию каждого режима.
- **Ожидаемый результат**: Все 14 адаптивных режимов корректно применяют соответствующие классы, CSS-токены и позиционирование/геометрию.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Все 13 вариантов выравнивания (`alignment`) и варианты размеров (`width` / `height`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Страница `http://localhost:3000/component-window`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. В группе `Viewport Alignments (All 13)` проверить классы `.d1-window--alignment--*` для всех 13 значений (`center`, `top`, `topRight`, `topLeft`, `topFull`, `right`, `rightFull`, `bottom`, `bottomRight`, `bottomLeft`, `bottomFull`, `left`, `leftFull`).
  2. В группе `Width & Height Variants` открыть `auto`, `sm`, `md`, `lg`, `max` и `Custom (420x260px)`, проверив классы `d1-window--width--*` / `d1-window--height--*` и размеры `.d1-window__body`.
- **Ожидаемый результат**: Все 13 выравниваний и 6 размерных пресетов/кастомных размеров отображаются без обрезания и с точными размерами (`420×260` для custom).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Все 9 точек происхождения анимации (`origin`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Страница `http://localhost:3000/component-window`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Открыть окна в группе `Animation Origins (All 9)` (`center`, `top`, `right`, `bottom`, `left`, `topToBottom`, `rightToLeft`, `bottomToTop`, `leftToRight`).
  2. Проверить классы `.d1-window--origin--*` и корректность появления/анимации каждого окна.
- **Ожидаемый результат**: Все 9 значений `origin` корректно применяются и не вызывают скачков позиционирования.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

#### [TC-VIS-005] Анатомия: `divider`, `closeButton`, `dense`, `textClose` (string/fn), `scrollbarAttrs`, `image`, `imagePosition` (7), `imageSize` (5)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Страница `http://localhost:3000/component-window`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Открыть `Dividers + Close + Dense + Scrollbar` и `Object Icon + closeMobileHide`, проверить разделители, кнопку закрытия, `aria-label` из `textClose` и `scrollbarAttrs`.
  2. Проверить все 7 вариантов `imagePosition` (`top`, `left`, `adaptiveSm`–`adaptive2xl`) и все 5 вариантов `imageSize` (`sm`, `md`, `lg`, `quarter`, `half`) с объектным `image` и `imageAttrs`.
- **Ожидаемый результат**: Кнопка закрытия, скроллбар и изображение корректно отображаются для всех позиций и размеров без смещения и обрезки контента.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-005.png`)

### 2.2 Интерактивность и функционал (`INT`)

#### [TC-INT-001] Открытие и закрытие через `#control`, кнопку `.close` и клик вне окна
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Нажать `Open Modal` -> убедиться, что окно открылось.
  2. Нажать `Cancel` (`.d1-window--close`) -> убедиться, что окно закрылось.
  3. Снова открыть окно и кликнуть по внешнему backdrop за пределами контента -> убедиться, что окно закрылось.
- **Ожидаемый результат**: Окно плавно переходит между открытым и закрытым состояниями по триггеру, кнопке закрытия и клику по оверлею.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Программное управление (`v-model:open` и `Expose`: `toOpen`, `toClose`, `setOpen`, `toggle`, `getId`, `getOpen`, `getControl`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Нажать `Open via State` в `Programmatic Control (v-model:open)` -> проверить `Value: true` и открытое окно.
  2. Нажать `Close via v-model` -> проверить `Value: false`.
  3. В `Control via Expose Methods` нажать `Open (toOpen)`, `Close (toClose)`, `Open (setOpen)`, `Close (setOpen false)`, `Toggle (toggle)` и проверить `getId()`, `getOpen()`, `hasControl` в `DemoValue`.
- **Ожидаемый результат**: Реактивное состояние `v-model:open` и методы `WindowExpose` синхронно управляют видимостью окна.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-003] Состояния `disabled` и реактивный модификатор `hide`
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Страница `http://localhost:3000/component-window`.
- **Шаги теста**:
  1. Попытаться кликнуть по кнопке `Disabled Window` -> проверить, что диалог не открывается.
  2. Нажать кнопку `Hide Window Flag` и проверить появление класса `.d1-window--hide` на статическом окне.
- **Ожидаемый результат**: Отключённое окно игнорирует взаимодействие; модификатор `hide` скрывает статическое окно без ошибок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Режим `persistent` + `flash`
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Страница `http://localhost:3000/component-window`.
- **Шаги теста**:
  1. Открыть `Persistent (Wobble + Flash)` (`data-status="flash"`).
  2. Кликнуть по оверлею за пределами окна -> проверить, что окно осталось открытым.
  3. Нажать `Explicit Close` -> проверить закрытие.
- **Ожидаемый результат**: Внешний клик не закрывает `persistent`-окно (активен режим `flash`); явная кнопка закрытия закрывает окно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

#### [TC-INT-005] Хуки жизненного цикла (`preparation`, `beforeOpening`, `opening`, `beforeClosing`, `closing`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: В группе `Lifecycle Hooks` флаг `Allow Close: true`.
- **Шаги теста**:
  1. Нажать `Allow Close: true`, чтобы переключить в `false`.
  2. Открыть `Open Guarded Window` -> проверить в `Last Hook` вызов `opening`.
  3. Нажать `Try Close` -> убедиться, что окно не закрылось и `Last Hook` содержит `beforeClosing -> blocked (Allow Close = false)`.
  4. Нажать `Allow & Close`, затем `Try Close` -> убедиться, что окно закрылось и `Last Hook` содержит `closing -> closed`.
- **Ожидаемый результат**: Хук `beforeClosing` корректно предотвращает закрытие при возврате `false` и пропускает закрытие при `true`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-006] `contextmenu`, `embedded`, `inDom` и условное монтирование `v-if`
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Правый клик (`contextmenu`) по `Right Click Me (Context Menu)` открывает окно.
  2. Открыть `SSR Persistent inDom Window` и закрыть по `Escape` -> проверить, что содержимое окна с `inDom` остаётся в DOM после первого открытия и закрытия.
  3. Открытие `Open Embedded Window` рендерит окно внутри родительского контейнера `DemoBox` без телепортации в `document.body`.
  4. Открыть `Conditional Mounted Window`, затем нажать `Toggle Lifecycle Mount` (`Mounted: false`) для проверки корректной очистки слушателей, `inert` и `activeEscStack` при размонтировании, затем снова смонтировать.
- **Ожидаемый результат**: Все режимы триггеров и жизненного цикла DOM работают без утечек и зависшего `inert`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-006.png`)

#### [TC-INT-007] Поведение режима меню (`adaptive="menu"`, `widthMatch`, `autoClose`, `classesWindow.static`, внешний клик)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
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
- **Категория**: `Интерактивность и функционал`
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
- **Категория**: `Граничные случаи и устойчивость`
- **Предусловия**: Вьюпорт `1440×900`.
- **Шаги теста**:
  1. Открыть `Horizontal (Axis X)` и `Vertical (Axis Y)`.
  2. Открыть `Overlay Target (Axis On)` (`over-element=".demo-window-page__target"`).
  3. Открыть `Match Control Width (Width Match)` и сравнить `--d1-window-sys-control-width` и ширину `.d1-window__body`.
- **Ожидаемый результат**: Оси `x`, `y`, `on` корректно позиционируют окно, `--d1-window-sys-control-width` соответствует ширине триггера.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Гонка быстрого переключения (`toOpen` -> быстрый `toClose` -> быстрый `toOpen`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные случаи и устойчивость`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Нажать подряд без задержки: `Open (toOpen)`, `Close (toClose)`, `Open (toOpen)`.
  2. Выждать `500ms` и проверить состояние окна `demo-expose-window`.
- **Ожидаемый результат**: Устаревший таймер `toClose()` не закрывает повторно открытое окно; финальное состояние — открыто (`openCount: 1`, `inertCount: 1`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

#### [TC-BND-003] Вложенные окна и подсчёт блокировок `WindowHidden` (`WeakMap`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Граничные случаи и устойчивость`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Открыть `Nested Windows & Escape LIFO` (окно A) и внутри него нажать `Open Child Window` (окно B).
  2. Нажать `Escape` для закрытия окна B -> проверить, что окно A осталось открытым и `inert` сохранился (`open: 1, inert: 1`).
  3. Снова нажать `Escape` для закрытия окна A -> проверить полное снятие `inert` (`open: 0, inert: 0`).
- **Ожидаемый результат**: Счётчик блокировок на элементах через `WeakMap` сохраняет `inert` до закрытия последнего окна.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

#### [TC-BND-004] Меню внутри меню: 3-уровневый каскад (`Menu L1 -> Submenu L2 (axis: x) -> Submenu L3 (autoClose)`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Граничные случаи и устойчивость`
- **Предусловия**: Все окна закрыты, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Открыть `Open Cascade Menu (3 Levels)` (`L1`) -> `Open Submenu L2 >` (`L2`) -> `Open Submenu L3 >` (`L3`).
  2. Проверить одновременное открытие всех 3 меню без перекрытий и отсутствие `inert`.
  3. Проверить пошаговое закрытие по `Escape` (LIFO: `3 -> 2 -> 1 -> 0`).
- **Ожидаемый результат**: Вложенные меню корректно позиционируются каскадом, не перекрывают родительские триггеры и закрываются строго в порядке LIFO.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-004.png`)

#### [TC-BND-005] Матрица вложенности всех режимов (`Modal -> Modal`, `Menu -> Modal`, `ActionSheetRight -> Menu`, `Fullscreen -> ModalDynamic`, `MenuWindow -> ActionSheetBottom`, `Static -> Menu`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Граничные случаи и устойчивость`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Проверить пары вложенности, включая `Nested: Modal -> Modal`.
  2. Проверить открытие обоих уровней (`open: 2`, `inert: 1`) и закрытие в порядке LIFO по `Escape` (`2 -> 1 -> 0`, `inert: 0`).
- **Ожидаемый результат**: Вложенные окна корректно стекруются, изолируют фон и закрываются в порядке LIFO без гонок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-005.png`)

#### [TC-BND-006] Связанные свойства вложенности (`persistent`, `closeOnEsc: false`, `inert: false`, `autoClose`, `classesWindow.close`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные случаи и устойчивость`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Открыть `Nested Props: Persistent + closeOnEsc: false`, затем `Open Protected Child (no Esc)`.
  2. Нажать `Escape` -> убедиться, что оба окна остались открыты (`2`).
  3. Кликнуть вне окон -> убедиться, что дочернее закрылось, а `persistent` родитель остался открыт (`1`).
  4. Нажать `Close Persistent Parent` -> убедиться в закрытии родителя и снятии `inert` (`0`).
- **Ожидаемый результат**: Все защитные и управляющие пропы корректно взаимодействуют при вложенности.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-006.png`)

#### [TC-BND-007] Пустые/пробельные/нулевые значения, длинный/неразрывный текст, Unicode, XSS и узкий контейнер (`240px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные случаи и устойчивость`
- **Предусловия**: Открыть секцию `Boundary & Edge Cases (Empty, 0, Long Text, Unicode, XSS, Narrow Container)`.
- **Шаги теста**:
  1. Открыть `Empty & Zero Content Window`, проверить рендеринг пустого заголовка, `[data-testid="window-empty-whitespace"]` и `[data-testid="window-numeric-zero"]` (`0`).
  2. Открыть `Long, Unicode & XSS Content Window` и проверить корректное отображение кириллицы, вьетнамской диакритики, эмодзи, длинного и неразрывного текста, а также безопасное экранирование `<img src=x onerror=alert(1)>` в `[data-testid="window-xss-text"]` (без создания `<img>`).
  3. Проверить статическое встроенное окно внутри `.demo-window-page__narrow` (`max-width: 240px`) на отсутствие горизонтального переполнения.
- **Ожидаемый результат**: Число `0` не теряется, XSS-строка экранирована как текст, контент переносится без выхода за границы `240px`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-007.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптивность модального окна на разрешениях (`1920×1080`, `1440×900`, `1024×768`, `768×1024`, `375×812`, `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Страница `http://localhost:3000/component-window`.
- **Шаги теста**:
  1. Последовательно установить размеры вьюпорта `1920×1080`, `1440×900`, `1024×768`, `768×1024`, `375×812`, `320×568`.
  2. Открыть `Open Modal` и измерить ширину `.d1-window__body` и `document.documentElement.scrollWidth`.
- **Ожидаемый результат**: Компонент корректно помещается в границы каждого вьюпорта без выхода за ширину экрана.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Мобильное отображение `Action Sheet (Bottom)` и `actionSheet` / `actionSheetToModal` на `375×812` и `768×1024`
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Вьюпорт `375×812` и `768×1024`.
- **Шаги теста**:
  1. На `375×812` открыть `Adaptive: actionSheetBottom`, `Adaptive: actionSheet` и `Adaptive: actionSheetToModal` — проверить выдвижение снизу (`actionSheetBottom`).
  2. На `1440×900` проверить переключение `Adaptive: actionSheet` в `actionSheetRight` и `Adaptive: actionSheetToModal` в модальный режим.
- **Ожидаемый результат**: Адаптивные режимы корректно меняют геометрию и привязку на мобильных и десктопных брейкпоинтах.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

#### [TC-RSP-003] Режимы `autoStaticSm`–`autoStatic2xl` и адаптивные `imagePosition: adaptive*` при изменении ширины экрана
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Страница `http://localhost:3000/component-window`.
- **Шаги теста**:
  1. На `1440×900` проверить `Adaptive: autoStaticSm` / `autoStaticMd` (`--STATIC--` inline-поток) и на `375×812` проверить их переход в оверлей.
  2. Проверить `Image Pos: adaptiveMd` при `1440×900` и `375×812`.
- **Ожидаемый результат**: Брейкпоинты `autoStatic*` и `imagePosition: adaptive*` корректно перестраивают окно и позицию изображения.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-003.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] WAI-ARIA атрибуты (`aria-haspopup`, `role="alertdialog"`, `aria-modal`, `aria-labelledby`, `aria-describedby`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность (A11Y)`
- **Предусловия**: Вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить на кнопке-триггере атрибут `aria-haspopup="dialog"`.
  2. Открыть `closeOnEsc: false (alertdialog)` и проверить `role="alertdialog"`, `aria-modal="true"`, `aria-labelledby="demo-alert-dialog-title"`, `aria-describedby="demo-alert-dialog-description"`.
- **Ожидаемый результат**: Все ARIA-атрибуты выставлены согласно спецификации компонента.
- **Тип доказательства**: `Console/Log`

#### [TC-A11Y-002] Клавиатурное управление: `Escape` (`closeOnEsc: false`) и `ArrowDown` (`openOnArrowDown`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность (A11Y)`
- **Предусловия**: Все окна закрыты.
- **Шаги теста**:
  1. Открыть `closeOnEsc: false (alertdialog)` и нажать клавишу `Escape` -> убедиться, что окно не закрылось; закрыть через кнопку `Acknowledge & Close`.
  2. Сфокусировать кнопку `Focus + ArrowDown to Open` и нажать `ArrowDown` -> убедиться, что меню открылось.
- **Ожидаемый результат**: Клавиатурные обработчики строго соблюдают флаги `closeOnEsc` и `openOnArrowDown`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-A11Y-002.png`)

#### [TC-A11Y-003] Семантика меню (`role="menu"` + `ariaHaspopup="menu"`) и отсутствие `inert` на фоне
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность (A11Y)`
- **Предусловия**: Вьюпорт `1440×900`, все окна закрыты.
- **Шаги теста**:
  1. Проверить на кнопке `role: menu + ariaHaspopup: menu` атрибут `aria-haspopup="menu"`.
  2. Открыть меню и проверить `role="menu"`, `data-window-menu="menu"`, `--sys-type-body: "--MENU--"` и `inertCount === 0`.
- **Ожидаемый результат**: Триггер имеет `aria-haspopup="menu"`, открытое меню имеет `role="menu"`, а фон остаётся интерактивным (`inertCount === 0`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-A11Y-003.png`)

### 2.6 Логи, консоль и стабильность runtime (`LOG`)

#### [TC-LOG-001] Отсутствие ошибок консоли и корректность событий `@window`, `@update:open`, `@load`, `@scrollbarEdge`, `@scrollbarReachBottom`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Логи, консоль и стабильность runtime`
- **Предусловия**: Очистить буфер сообщений консоли перед прогоном.
- **Шаги теста**:
  1. Открыть окно `Trigger Window Events` в секции `Events Tracking`, прокрутить его до конца и закрыть.
  2. Проверить обновление `Event Name` и `Event Payload` в `DemoValue` для `@window`, `@update:open`, `@load`, `@scrollbarEdge` / `@scrollbarReachBottom`, а также собрать все `console.error`, `pageerror` и `[Vue warn]`.
- **Ожидаемый результат**: `0` ошибок JavaScript, `0` предупреждений Vue и корректная передача payload для всех событий окна, изображения и скроллбара.
- **Тип доказательства**: `Console/Log`
