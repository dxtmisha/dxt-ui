# Спецификация тест-кейсов: D1Skeleton

- **Сущность**: `D1Skeleton`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Skeleton`, `packages/constructor/src/constructors/Skeleton`, `packages/demo/src/pages/components/DemoSkeletonPage.vue`
- **Целевой URL**: `http://localhost:3000/component-skeleton`
- **Справочные материалы**: `None` (`node_modules/@dxtmisha/constructor/ai-resources/skeleton.md`)
- **Последняя проверка / обновление**: `2026-11-09`
- **Всего тест-кейсов**: `20`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 5 | P0, P1 | Базовый рендеринг, 9 утилитарных классов `d1-skeleton__*`, маскировка `invisible`, дочерние компоненты `isSkeleton` / `D1SkeletonItem`, тёмная тема |
| **Интерактивность и функционал** | `INT` | 6 | P0, P1 | Переключение `active`, scoped-слот `#default`, комбинации `active`/`invisible`/`delay`, таймеры `delay`/`delayHide`, `provide/inject` наследование, `expose` метод `isActive()` |
| **Граничные значения и устойчивость** | `BND` | 3 | P1, P2 | Отрицательные задержки (`-50`/`-100`), стресс-переключение таймеров, экстремальный/многоязычный контент и XSS-строки |
| **Адаптивность и вьюпорты** | `RSP` | 3 | P1, P2 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`) |
| **Доступность (A11y)** | `A11Y` | 2 | P1, P2 | Динамические атрибуты `aria-busy` и `aria-live="polite"`, клавиатурная навигация и блокирующий оверлей `::after` |
| **Консоль и среда выполнения** | `LOG` | 1 | P0 | Нулевое количество ошибок `console.error`, исключений и предупреждений `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### [TC-VIS-001] Базовый рендеринг состояний active=true и active=false и дизайн-токенов
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton`, размер окна `1440×900`, светлая тема (`Light`).
- **Шаги выполнения**:
  1. Найти секцию `Basic & Active States (Interactive, Active, Inactive)`.
  2. Проверить DOM-классы и вычисленные стили трёх экземпляров `D1Skeleton`: интерактивного (`active=true`), постоянно активного (`active`) и неактивного (`active=false`).
  3. Проверить наличие CSS-переменных `--d1-skeleton-color`, `--d1-skeleton-backgroundColor`, `--d1-skeleton-borderColor` и анимации `d1-skeleton-animationType1 2.4s linear infinite` на активных элементах.
- **Ожидаемый результат**: Активные экземпляры имеют классы `.d1-skeleton`, `.d1-skeleton--active`, `.d1-skeleton--visible`, `.d1-skeleton--invisible` и активную пульсирующую анимацию; неактивный экземпляр имеет только `.d1-skeleton` и отображает реальный контент без искажений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

### [TC-VIS-002] Отображение всех 9 утилитарных классов d1-skeleton__*
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton`, секция `Direct CSS Utility Classes (All 9 d1-skeleton__* Classes)`.
- **Шаги выполнения**:
  1. Проверить вычисленные стили для `.d1-skeleton__text` и `.d1-skeleton__textVariant` (`text-decoration-line: line-through`, `text-decoration-thickness` пропорционально `--sys-font-size`, различающиеся цвета `text-decoration-color`).
  2. Проверить заливку фона на `.d1-skeleton__background` и `.d1-skeleton__backgroundVariant`, а также на псевдоэлементах `.d1-skeleton__backgroundBefore::before` и `.d1-skeleton__backgroundAfter::after`.
  3. Проверить цвет рамок на `.d1-skeleton__border` и `.d1-skeleton__borderVariant`.
  4. Проверить полное скрытие элемента с классом `.d1-skeleton__none` (`color: transparent`, `background: transparent`, `text-decoration-thickness: 0px`).
- **Ожидаемый результат**: Все 9 классов применяют корректные скелетон-стили без обрезания или наложения.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

### [TC-VIS-003] Маскировка дочернего контента и блокирующий оверлей в состоянии invisible
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton`, активный экземпляр `D1Skeleton`.
- **Шаги выполнения**:
  1. Проверить вычисленные стили псевдоэлемента `.d1-skeleton--invisible::after` (`position: absolute`, `inset: 0px`, `z-index: 999999`).
  2. Проверить, что у дочерних элементов без специальных классов скелетона `color`, `background-color`, `border-color` равны `rgba(0, 0, 0, 0)` (`transparent`), `box-shadow: none`, а у вложенных `<svg>` (например, в `D1Icon`) `opacity: 0`.
- **Ожидаемый результат**: Обычный текст и иконки внутри `.d1-skeleton--invisible` полностью прозрачны, а псевдоэлемент `::after` перекрывает область компонента.
- **Тип доказательства**: `Console/Log`

### [TC-VIS-004] Интеграция с дочерними компонентами (isSkeleton) и D1SkeletonItem
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton`, секция `Provider Inheritance & Child Components (Nested D1Skeleton, isSkeleton, D1SkeletonItem)`.
- **Шаги выполнения**:
  1. При `Parent: true` проверить рендеринг `D1Cell[isSkeleton]`, `D1Icon[isSkeleton]`, `D1Button[isSkeleton]` и шестерых элементов `D1SkeletonItem` (`text`, `textVariant`, `background`, `backgroundVariant`, `border`, `borderVariant`).
  2. Проверить наличие автоматически подключённых классов `d1-skeleton__*` на элементах с `isSkeleton` и `D1SkeletonItem`.
- **Ожидаемый результат**: Все дочерние компоненты и `D1SkeletonItem` синхронно отображаются в режиме скелетона при активном родителе.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

### [TC-VIS-005] Адаптация к тёмной теме (Dark Mode)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton`, включить тёмную тему через переключатель `Dark mode` (`DemoLinkBlack`).
- **Шаги выполнения**:
  1. Включить чекбокс `Dark mode` в верхней панели.
  2. Проверить пересчёт CSS-переменных `--d1-sys-palette-onSurface` и `--d1-sys-palette-inverseSurface` в `.d1-dark`.
  3. Сделать скриншот и вернуть светлую тему.
- **Ожидаемый результат**: Цвета текстовых полос, фоновых блоков и рамок скелетона корректно инвертируются под тёмную палитру с сохранением читаемости и контраста.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-005.png`)

### [TC-INT-001] Интерактивное переключение пропа active (Toggle Active)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секция `Basic & Active States`, начальное состояние `Active: true`.
- **Шаги выполнения**:
  1. Нажать кнопку `Toggle Active`.
  2. Проверить изменение индикатора `Active` на `false` и удаление классов `.d1-skeleton--active`, `.d1-skeleton--visible`, `.d1-skeleton--invisible` у первого экземпляра `D1Skeleton`.
  3. Повторно нажать `Toggle Active` и убедиться в возврате активного состояния (`Active: true`).
- **Ожидаемый результат**: Первый экземпляр `D1Skeleton` мгновенно переключается между режимом скелетона и отображением реального контента; второй (`Always Active`) и третий (`Inactive`) экземпляры не меняют своих состояний.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

### [TC-INT-002] Передача классов через scoped-слот #default и переключение состояния
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секция `Scoped Slot (#default with SkeletonClassesList Props)`, начальное состояние `Slot Active: true`.
- **Шаги выполнения**:
  1. Проверить, что все 9 элементов внутри `#default` получили соответствующие классы `d1-skeleton__text`, `d1-skeleton__textVariant`, `d1-skeleton__background`, `d1-skeleton__backgroundVariant`, `d1-skeleton__backgroundBefore`, `d1-skeleton__backgroundAfter`, `d1-skeleton__border`, `d1-skeleton__borderVariant`, `d1-skeleton__none`.
  2. Нажать кнопку `Toggle Slot Skeleton` (`Slot Active: false`) и проверить снятие маскировки при сохранении классов в DOM.
  3. Нажать кнопку `Toggle Slot Skeleton` повторно для возврата `Slot Active: true`.
- **Ожидаемый результат**: Scoped-слот корректно передаёт все 9 классов `SkeletonClassesList`, элементы меняют визуальное представление в зависимости от `slotActive`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

### [TC-INT-003] Комбинации состояний active, invisible и отложенного показа (Pending Delay)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секция `Visibility & State Combinations (active, invisible, Pending Delay, Negative Fallbacks)`.
- **Шаги выполнения**:
  1. Проверить 7 карточек с различными комбинациями `active`, `invisible`, `delay`:
     - `active=false` -> классы `--visible` и `--invisible` отсутствуют.
     - `active=false, invisible=false` -> классы `--visible` и `--invisible` отсутствуют.
     - `active=true, invisible=true` -> присутствуют `--active`, `--visible`, `--invisible`.
     - `active=true, invisible=false` -> присутствуют `--active`, `--visible`, но класс `--invisible` отсутствует (при этом `.d1-skeleton--visible` всё равно включает `mixinSkeletonInvisible`).
     - `active=true, invisible=true, delay=60000` -> во время ожидания таймера присутствуют `--active` и `--invisible`, но отсутствует `--visible` (контент немедленно скрыт, полосы скелетона ещё не показаны).
     - `active=true, invisible=false, delay=60000` -> во время ожидания таймера присутствует только `--active` без `--invisible` и без `--visible` (контент остаётся видимым до истечения задержки).
- **Ожидаемый результат**: Каждая из комбинаций формирует точный набор модификаторов состояния в соответствии с бизнес-логикой `Skeleton.ts`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

### [TC-INT-004] Работа задержек delay и delayHide с числовыми и строковыми значениями
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секция `Delays & Accepted Data Types (number and string for delay / delayHide)`, начальное состояние `Delays Active: false`.
- **Шаги выполнения**:
  1. Нажать `Toggle Delays` (`Delays Active: true`) и сразу (`t ≈ 50ms`) проверить классы `.d1-skeleton--visible` у 5 карточек (`0/0`, `360/0`, `"1000"/"0"`, `0/1000`, `"360"/"800"`): карточки с `delay=0` уже имеют `--visible`, карточки с `delay=360` и `delay="1000"` ещё не имеют `--visible`.
  2. Выждать `1100ms` и проверить, что все 5 карточек получили класс `.d1-skeleton--visible`.
  3. Нажать `Toggle Delays` (`Delays Active: false`) и сразу (`t ≈ 50ms`) проверить, что карточки с `delayHide=0` мгновенно сняли `.d1-skeleton--visible`, а карточки с `delayHide=1000` и `delayHide="800"` удерживают `.d1-skeleton--visible` до истечения таймера.
- **Ожидаемый результат**: Пропы `delay` и `delayHide` одинаково корректно обрабатывают `number` и `string`, выдерживая заданные интервалы времени при появлении и скрытии.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

### [TC-INT-005] Каскадное наследование провайдера (provide/inject) и независимая работа вложенного D1Skeleton
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секция `Provider Inheritance & Child Components`, начальное состояние `Parent: true`, `Nested Child: false`.
- **Шаги выполнения**:
  1. При `Parent: true, Nested Child: false` убедиться, что вложенный `D1Skeleton` активен (`.d1-skeleton--visible`) за счёт инъекции `SKELETON_NAME_STATUS` от родителя.
  2. Нажать `Toggle Parent Active` (`Parent: false, Nested Child: false`) и проверить, что и родительский, и вложенный `D1Skeleton`, а также `D1Cell`, `D1Icon`, `D1Button` и `D1SkeletonItem` перешли в неактивное состояние.
  3. Нажать `Toggle Nested Child Active` (`Parent: false, Nested Child: true`) и убедиться, что активировался только вложенный `D1Skeleton`, тогда как родительский блок остаётся неактивным.
  4. Вернуть исходное состояние (`Parent: true, Nested Child: false`).
- **Ожидаемый результат**: Дочерний `D1Skeleton` и компоненты с `SkeletonInclude` реактивно наследуют состояние родителя, а вложенный `D1Skeleton` также может активироваться независимо через собственный проп `:active`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-005.png`)

### [TC-INT-006] Управление и чтение состояния через expose-метод isActive()
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Секция `Control via Expose Method (isActive)`.
- **Шаги выполнения**:
  1. Нажать `Read Expose State` при начальном активном состоянии и проверить строку `Expose State` (`isActive(): true | active prop: true ... | snapshot: true`).
  2. Нажать `Deactivate` и проверить, что `isActive()` возвращает `false`, а через `delayHide: 300` мс снимается класс `.d1-skeleton--visible`.
  3. Нажать `Activate Delayed (500ms)` и проверить, что `isActive()` сразу возвращает `true`, а класс `.d1-skeleton--visible` появляется после 500 мс.
  4. Нажать `Activate Immediate` для возврата к мгновенной активации.
- **Ожидаемый результат**: Публичный метод `skeletonRef.value.isActive()` безошибочно отражает актуальное логическое состояние активности компонента.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-006.png`)

### [TC-BND-001] Обработка отрицательных значений задержек (delay="-50", delayHide="-100")
- **Приоритет**: `P2 (Medium)`
- **Категория**: `Граничные значения и устойчивость`
- **Предусловия**: Секция `Visibility & State Combinations`, карточка `Negative delays (-50 / -100)`.
- **Шаги выполнения**:
  1. Проверить состояние карточки с `:delay="-50"` и `:delayHide="-100"`.
  2. Убедиться, что условие `toNumber(delay) <= 0` трактует отрицательные числа как немедленное срабатывание без создания `setTimeout`.
- **Ожидаемый результат**: Карточка с отрицательными задержками сразу имеет класс `.d1-skeleton--visible` без ошибок времени выполнения.
- **Тип доказательства**: `Console/Log`

### [TC-BND-002] Стресс-тест быстрого многократного переключения состояния (защита от гонки таймеров)
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные значения и устойчивость`
- **Предусловия**: Секции `Basic & Active States` и `Delays & Accepted Data Types`.
- **Шаги выполнения**:
  1. Выполнить 6 быстрых последовательных кликов с интервалом 80 мс по кнопке `Toggle Delays` (переключая `false -> true -> false -> true -> false -> true -> false`).
  2. Выждать `1200ms` после последнего клика и проверить, что при итоговом `Delays Active: false` ни один из 5 экземпляров `D1Skeleton` не застрял в состоянии `.d1-skeleton--visible`.
- **Ожидаемый результат**: `clearTimeout(this.timeout)` в методе `switch()` надёжно отменяет предыдущие незавершённые таймеры; рассинхронизации состояний не возникает.
- **Тип доказательства**: `Console/Log`

### [TC-BND-003] Граничные значения контента: длинные строки без пробелов, Unicode/RTL, число 0 и XSS-строки
- **Приоритет**: `P2 (Medium)`
- **Категория**: `Граничные значения и устойчивость`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton`.
- **Шаги выполнения**:
  1. Проверить рендеринг внутри активного и неактивного `D1Skeleton` граничных текстовых значений: числа `0`, многоязычной строки (`"Кириллица Tiếng Việt 🚀🔥✨"`), длинной непрерывной строки (`"A".repeat(120)`) и строки `<img src=x onerror=alert(1)>` при `dir="rtl"` и `dir="ltr"`.
  2. Восстановить исходное состояние DOM после проверки.
- **Ожидаемый результат**: Число `0` и многоязычный текст корректно маскируются линией `line-through`, XSS-пейлоад не исполняется, RTL-направление не ломает скелетон.
- **Тип доказательства**: `Console/Log`

### [TC-RSP-001] Адаптивность на Desktop (1440×900) и Wide Desktop (1920×1080)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton`.
- **Шаги выполнения**:
  1. Установить размер окна `1920×1080`, затем `1440×900`.
  2. Проверить отсутствие горизонтальной прокрутки (`document.documentElement.scrollWidth <= window.innerWidth`) и корректность геометрии всех секций `D1Skeleton`.
- **Ожидаемый результат**: На широких и стандартных десктопных разрешениях все карточки и скелетон-элементы располагаются ровно, без выхода за пределы контейнеров.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### [TC-RSP-002] Адаптивность на Tablet (768×1024)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton`, установить вьюпорт `768×1024`.
- **Шаги выполнения**:
  1. Изменить размер окна на `768×1024`.
  2. Проверить перенос карточек в `DemoFlex` и целостность элементов внутри `D1Skeleton` (включая `Scoped Slot` и `Provider Inheritance`).
- **Ожидаемый результат**: На планшетном разрешении горизонтальная прокрутка отсутствует, все скелетон-блоки корректно адаптируются.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### [TC-RSP-003] Адаптивность на Mobile (375×812)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton`, установить вьюпорт `375×812`.
- **Шаги выполнения**:
  1. Изменить размер окна на `375×812`.
  2. Проверить отсутствие горизонтального переполнения страницы и корректный перенос многострочных текстовых скелетонов `.d1-skeleton__text`.
  3. Вернуть размер окна `1440×900`.
- **Ожидаемый результат**: На мобильном вьюпорте `375×812` компонент `D1Skeleton` сохраняет корректную геометрию и перенос строк без полос прокрутки.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-003.png`)

### [TC-A11Y-001] Проверка WAI-ARIA атрибутов (aria-busy и aria-live="polite")
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton`.
- **Шаги выполнения**:
  1. Проверить атрибуты корневого элемента `.d1-skeleton` при `isActive() === true` и при `isActive() === false`.
  2. Переключить состояние через `Toggle Active` и проверить реактивное обновление `aria-busy`.
- **Ожидаемый результат**: На всех экземплярах `D1Skeleton` присутствует `aria-live="polite"`; атрибут `aria-busy` равен `"true"` при активной загрузке (включая наследование от родителя) и `"false"` в неактивном состоянии.
- **Тип доказательства**: `Console/Log`

### [TC-A11Y-002] Клавиатурная навигация, focus-visible и защита от кликов в режиме скелетона
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton`, секция `Basic & Active States`.
- **Шаги выполнения**:
  1. Установить фокус клавишей `Tab` на кнопку `Toggle Active`, проверить отображение кольца фокуса (`:focus-visible`) и активировать кнопку клавишей `Enter` / `Space`.
  2. Проверить, что в секции `Provider Inheritance` при `Parent: true` псевдоэлемент `.d1-skeleton--invisible::after` (`z-index: 999999`) перекрывает область дочерней кнопки `Send Message` для указателя мыши (`document.elementFromPoint`), предотвращая случайные клики во время загрузки.
- **Ожидаемый результат**: Управляющие кнопки полностью доступны с клавиатуры и отображают `:focus-visible`, а замаскированная область скелетона перекрыта от кликов мыши оверлеем `::after`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-A11Y-002.png`)

### [TC-LOG-001] Отсутствие ошибок консоли и предупреждений Vue во время всего цикла тестирования
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль и среда выполнения`
- **Предусловия**: Открыть `http://localhost:3000/component-skeleton`, подключить перехват сообщений консоли и ошибок страницы.
- **Шаги выполнения**:
  1. Проверить лог консоли после первичной загрузки страницы.
  2. Выполнить все интерактивные переключения (`Toggle Active`, `Toggle Slot Skeleton`, `Toggle Delays`, `Toggle Parent Active`, `Toggle Nested Child Active`, кнопки `Expose`).
  3. Проверить счётчики `console.error`, `pageerror` и `[Vue warn]`.
- **Ожидаемый результат**: `0` ошибок `console.error`, `0` необработанных исключений, `0` предупреждений `[Vue warn]`.
- **Тип доказательства**: `Console/Log`

