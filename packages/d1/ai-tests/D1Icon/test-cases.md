# Спецификация тест-кейсов: D1Icon (Icon / DemoIconPage)

- **Сущность**: `D1Icon` (`Icon`, `DemoIconPage`)
- **Путь к исходному коду**: `packages/constructor/src/constructors/Icon`, `packages/d1/src/components/Ui/Icon`, `packages/demo/src/pages/components/DemoIconPage.vue`
- **Целевой URL**: `http://localhost:3000/component-icon`
- **Справочные материалы**: `Отсутствуют (проверены ./materials/, packages/*/materials/)`
- **Дата последней проверки / обновления**: `2026-11-09`
- **Всего тест-кейсов**: `22`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуальное соответствие и токены** | `VIS` | 6 | P0, P1 | Шкала размеров (`auto`..`9xl`), геометрия (`square`, `circle`, `rect`, `rounded`), состояния (`active`, `animationType`, `animationShow`, `disabled`, `hide`, `high`, `start`, `end`), трансформации (`turn`, `dir`), палитры (`asPalette`, `overlay`, `inverse`, `success`, `error`), источники (`Material`, `@`, `Icons.add`, флаги, `#HEX`, URL, `tagImg`, `Uint8Array`, `File`, слот) |
| **Интерактивность и функциональность** | `INT` | 5 | P0, P1 | Переключение двух иконок (`icon` / `iconActive`), режим скелетона (`D1Skeleton` + `isSkeleton`), интерактивный режим `dynamic`, события `@click` / `@click-lite` / `@load`, публичные методы `expose` (`isActive`, `getValue`, `getDetail`) |
| **Граничные значения и крайние случаи** | `BND` | 4 | P1, P2 | Приоритет геометрии (`circle`/`rect` над `square`), `active=true` без `iconActive`, блокировка кликов при `disabled`, темизация `Dark Mode` (`.d1-dark`) и `RTL` (`dir="rtl"`) |
| **Адаптивность и вьюпорты** | `RSP` | 3 | P1, P2 | Desktop (`1440×900`, `1920×1080`), Tablet (`768×1024`, `1024×768`), Mobile (`375×812`, `320×568`) |
| **Доступность (A11y)** | `A11Y` | 2 | P1, P2 | Семантика WAI-ARIA (`aria-hidden="true"` для статичных иконок, `role="button"`/`role="switch"`, `aria-label`, `aria-disabled`, `tabindex`), клавиатурная навигация (`Tab`, `Enter`, `Space`) и `:focus-visible` |
| **Консоль и среда выполнения** | `LOG` | 2 | P0, P1 | Отсутствие `console.error`, необработанных исключений и `[Vue warn]`, корректность payload событий `@click`, `@click-lite`, `@load` |

---

## 2. Детальные тест-кейсы

### [TC-VIS-001] Проверка шкалы размеров `size` (`auto`, `x`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`–`9xl`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, вьюпорт `1440×900`, тема `Light`.
- **Шаги выполнения**:
  1. Найти первую группу `Sizes (auto, x, xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl)`.
  2. Проверить CSS-классы `.d1-icon--size--*`, вычисленные размеры `getBoundingClientRect()` (ширина и высота `1:1`) и монотонный рост размеров от `x` (`16×16px`) до `9xl` (`128×128px`).
- **Ожидаемый результат**: Все 15 иконок рендерятся с квадратным соотношением сторон `1:1`, без обрезания и наложений; размеры строго соответствуют дизайн-токенам `--d1-ref-spacing-*` (`x: 16px`, `xs: 20px`, `sm: 24px`, `md: 32px`, `lg: 40px`, `xl: 48px`, `2xl: 56px`, `3xl: 64px`, `4xl: 72px`, `5xl: 80px`, `6xl: 88px`, `7xl: 96px`, `8xl: 112px`, `9xl: 128px`).
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

### [TC-VIS-002] Формы контейнера (`square`, `circle`, `rect`) и скругление углов (`rounded`: `auto`, `sm`, `md`, `lg`, `xl`, `full`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `Shapes & Corner Rounding`.
- **Шаги выполнения**:
  1. Проверить 14 экземпляров `D1Icon` во второй группе.
  2. Измерить `aspect-ratio`, `width`, `height` и вычисленный `border-radius` для `square` (`1/1`), `circle` (`1/1`, полное скругление), `rect` (`5/3`, ширина больше высоты) и модификаторов `rounded="sm" | "md" | "lg" | "xl" | "full"`.
- **Ожидаемый результат**: Формы `square` и `circle` имеют пропорцию `1:1` (`56×56px` для `2xl`), форма `rect` имеет пропорцию `5:3` (`~93.33×56px`), значения `border-radius` монотонно возрастают от `0px` (`auto`) через `sm`/`md`/`lg`/`xl` до `full`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

### [TC-VIS-003] Состояния, типы анимации и позиционирование (`active`, `iconActive`, `animationType`, `animationShow`, `disabled`, `hide`, `high`, `start`, `end`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `States, Dual-Icon Switching & Animations`.
- **Шаги выполнения**:
  1. Проверить DOM-структуру и вычисленные стили всех 13 иконок группы.
  2. Убедиться, что при наличии `iconActive` внутри `.d1-icon` создаются два дочерних элемента: `.d1-icon__icon` и `.d1-icon__iconActive`, причём неактивный получает класс `.d1-image--hide`.
  3. Проверить стили `.d1-icon--animationType--type1`, `.d1-icon--animationType--type2` (`clip-path`), `.d1-icon--animationShow` (`animation-name: d1-icon-show`), `.d1-icon--disabled` (`cursor: default`), `.d1-icon--hide` (`opacity: 0`), `.d1-icon--high` (`z-index: 16`), `.d1-icon--start` (`order: 1`), `.d1-icon--end` (`order: 99999`).
- **Ожидаемый результат**: Все модификаторы состояний, порядка (`order`), слоя (`z-index`) и анимации применяют корректные CSS-свойства согласно `style.scss`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

### [TC-VIS-004] Трансформации и направление текста (`turn`, `dir` в `LTR` и `RTL`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `Transformations & Direction`.
- **Шаги выполнения**:
  1. Проверить 5 экземпляров `D1Icon` внутри контейнеров `DemoBox` (`default`, `turn`, `dir` в `dir="ltr"`, `dir` в `dir="rtl"`, `dir + turn` в `dir="rtl"`).
  2. Проверить наличие класса `.d1-icon--turn` и проброс `turn` во внутренний `.d1-icon__icon.d1-image--turn`, а также матрицу `transform` у `.d1-icon--dir` при `dir="ltr"` (`scaleX(1)`) и `dir="rtl"` (`scaleX(-1)` / `matrix(-1, 0, 0, 1, 0, 0)`).
- **Ожидаемый результат**: Проп `turn` поворачивает иконку на `180deg`, а проп `dir` зеркально отражает иконку по горизонтали (`scaleX(-1)`) в контейнерах с `dir="rtl"`, сохраняя совместимость с одновременным поворотом `turn`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

### [TC-VIS-005] Палитры, семантические цвета и инверсные поверхности (`asPalette`, `overlay`, `inverse`, `success`, `error`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `Palettes, Semantic Colors & Surfaces`.
- **Шаги выполнения**:
  1. Проверить вычисленные цвета `color` и `backgroundColor` у иконок с `.d1-palette--red`, `.d1-palette--green`, `.d1-palette--blue`, `.d1-palette--orange`, `.d1-palette--purple` и пропом `asPalette`.
  2. Проверить подложку `overlay`, семантические цвета `success` и `error`, а также блок `.demo-icon-page__inverse-surface` с модификаторами `inverse`, `asPalette + inverse`, `success + inverse`, `error + inverse`.
- **Ожидаемый результат**: Каждая палитра и семантический статус окрашивает иконку в соответствующий цвет дизайн-системы; в режиме `inverse` фон и цвет иконки переключаются на контрастные токены `inverseSurface` / `inverseOnSurface` или цвет палитры.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-005.png`)

### [TC-VIS-006] Поддерживаемые типы источников иконки (`Material`, `@`, `Icons.add`, флаги, `#HEX`, URL, `ImageProps`, `Uint8Array`, `File`, `#default` слот)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуальное соответствие и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `Accepted Source Types`.
- **Шаги выполнения**:
  1. Проверить все 22 иконки в шестой группе.
  2. Проверить рендеринг префиксов Material Icons (`home`, `outlined-home`, `round-home`, `sharp-home`, `filled-home`, `two-tone-home`, `$home`, `material-home`), публичной `@star` иконки с CDN, зарегистрированных через `Icons.add` (`demo-icon-registered`, `flag-us`, `flag-vn`), встроенных кодов флагов (`f-us`, `f-vn`), цветовых заливок (`#4CAF50`, `#2196F3`, `#FF9800`), внешнего URL, объекта `ImageProps` с `tagImg: true` и `alt="Avatar thumbnail"`, бинарного `Uint8Array`, объекта `File` и пользовательского слота `<span>A+</span>`.
- **Ожидаемый результат**: Все 22 варианта источников корректно разрешаются и отображаются без битых изображений; при `tagImg: true` внутри `.d1-icon__icon` рендерится семантический тег `<img alt="...">`, а слот `#default` выводит `<span>A+</span>`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-006.png`)

### [TC-INT-001] Интерактивное переключение пары иконок (`icon` / `iconActive`) с анимациями `type1` и `type2`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функциональные состояния`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `States, Dual-Icon Switching & Animations`, начальное состояние `Active: false`.
- **Шаги выполнения**:
  1. Проверить начальные классы дочерних элементов `.d1-icon__icon` и `.d1-icon__iconActive` у первых двух переключаемых иконок (`visibility`/`visibility_off` с `type1` и `add`/`close` с `type2`).
  2. Нажать кнопку `Toggle Active State` и проверить обновление индикатора `Active: true` и переключение класса `.d1-image--hide` между `.d1-icon__icon` и `.d1-icon__iconActive`.
  3. Повторно нажать `Toggle Active State` для возврата в `Active: false`.
- **Ожидаемый результат**: При `Active: false` основная иконка видима, а `.d1-icon__iconActive` имеет `.d1-image--hide`. При переключении в `Active: true` основная иконка получает `.d1-image--hide`, а активная становится видимой с плавной анимацией `type1` или `type2`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

### [TC-INT-002] Интерактивный режим `dynamic`: клики, переключение темы и состояния `hover` / `active`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функциональные состояния`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `Interactive Mode, Navigation & Accessibility`.
- **Шаги выполнения**:
  1. Навести курсор и кликнуть по первой интерактивной иконке `notifications` (`dynamic`, `ariaLabel="Open notifications"`).
  2. Проверить обновление поля `Last Event` значением `"click: notifications"`.
  3. Кликнуть по второй интерактивной иконке `dark_mode`/`light_mode` (`role="switch"`, `@click="toggleInteractiveActive"`) и проверить синхронное переключение `interactiveActive`.
- **Ожидаемый результат**: Иконки с `dynamic` имеют `cursor: pointer`, градиентную подсветку при наведении/нажатии и корректно эмитят событие `@click` при взаимодействии.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

### [TC-INT-003] Работа в режиме скелетона (`D1Skeleton` + `isSkeleton`) и переключение состояния загрузки
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функциональные состояния`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `Skeleton Loading (D1Skeleton + isSkeleton)`, начальное состояние `Skeleton Active: true`.
- **Шаги выполнения**:
  1. Проверить наличие класса `.d1-skeleton__backgroundVariant` на всех 4 иконках с пропом `isSkeleton` (`person`, `home`, `image`, `demoImage1`) и визуальную маскировку при `Skeleton Active: true`.
  2. Нажать кнопку `Toggle Skeleton` (`Skeleton Active: false`) и проверить отображение реальных иконок и изображения.
  3. Повторно нажать `Toggle Skeleton` для возврата в `Skeleton Active: true`.
- **Ожидаемый результат**: При `Skeleton Active: true` все 4 иконки с `isSkeleton` маскируются пульсирующим фоном скелетона (`.d1-skeleton__backgroundVariant`) с сохранением своих размеров и скруглений (`circle`, `rounded="md"`, `rounded="lg"`); при `Skeleton Active: false` мгновенно отображаются реальные иконки.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

### [TC-INT-004] Динамическая смена источников и метаданных управляемой иконки (`Bookmark Icons`, `Country Flags`, `Image Sources`, `Reset`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функциональные состояния`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `Events & Expose Methods`.
- **Шаги выполнения**:
  1. Проверить начальное состояние управляемой иконки (`favorite_border` / `favorite`, `Expose State`: `isActive(): false, getValue(): "favorite-action", getDetail(): {"section":"toolbar","priority":1}`).
  2. Последовательно нажать `Toggle Active`, `Bookmark Icons`, `Country Flags`, `Image Sources` и `Reset`, проверяя обновление DOM, `Expose State` и лога `Last Event` (включая событие `@load` при загрузке флагов и изображений).
- **Ожидаемый результат**: Все переключения реактивно обновляют отображаемую иконку, возвращаемые значения `iconRef.isActive()`, `iconRef.getValue()`, `iconRef.getDetail()` и вызывают `@load` при смене медиа-источника.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

### [TC-INT-005] Проверка эмиссии событий `@click` и `@click-lite` на управляемом экземпляре `D1Icon`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функциональные состояния`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `Events & Expose Methods`.
- **Шаги выполнения**:
  1. Выполнить клик по управляемому экземпляру `D1Icon` (`aria-label="Controlled interactive icon"`).
  2. Проверить обновление текстового поля `Last Event` и структуру payload события (`type`, `value`, `detail`, `index`).
- **Ожидаемый результат**: При клике по управляемой иконке синхронно вызываются обработчики `@click-lite` и `@click` с передачей `value: "favorite-action"`, `detail: { section: "toolbar", priority: 1 }` и `index: 0`.
- **Тип доказательства**: `Console/Log`

### [TC-BND-001] Приоритет геометрических модификаторов (`circle` и `rect` отключают дефолтный `square`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные значения и крайние случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `Shapes & Corner Rounding`.
- **Шаги выполнения**:
  1. Проверить список классов у иконок с пропами `circle` и `rect` (при том, что проп `square` по умолчанию равен `true` в `defaults`).
- **Ожидаемый результат**: Условие `'d1-icon--square': props.square && !props.circle && !props.rect` гарантирует отсутствие конфликта классов: при передаче `circle` или `rect` класс `d1-icon--square` не добавляется.
- **Тип доказательства**: `Console/Log`

### [TC-BND-002] Граничный случай `active=true` без `iconActive` (`isActive() === false`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные значения и крайние случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `States, Dual-Icon Switching & Animations`.
- **Шаги выполнения**:
  1. Найти иконку `<D1Icon icon="search" active size="xl" />` (6-я иконка в группе состояний, где задан `active`, но не задан `iconActive`).
  2. Проверить её дочерние элементы и видимость основной иконки `.d1-icon__icon`.
- **Ожидаемый результат**: Поскольку `isActive()` проверяет `Boolean(this.props.active && this.props.iconActive)`, основная иконка `search` НЕ скрывается (`hide: false`, отсутствует класс `.d1-image--hide`), а второй элемент `.d1-icon__iconActive` не создаётся в DOM.
- **Тип доказательства**: `Console/Log`

### [TC-BND-003] Блокировка интерактивности и клавиатурного фокуса при `dynamic` + `disabled`
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные значения и крайние случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `Interactive Mode, Navigation & Accessibility`.
- **Шаги выполнения**:
  1. Найти отключённую интерактивную иконку `<D1Icon icon="block" dynamic disabled ariaLabel="Disabled action" />`.
  2. Проверить атрибуты `aria-disabled="true"`, отсутствие `tabindex`, вычисленный `background-color` оверлея (`background-opacity: 0`) и попытаться инициировать клик.
- **Ожидаемый результат**: Отключённая интерактивная иконка имеет `aria-disabled="true"`, исключена из порядка табуляции (`tabindex === null`), имеет `cursor: default`, прозрачный фон оверлея и не эмитит события `@click`.
- **Тип доказательства**: `Console/Log`

### [TC-BND-004] Адаптация к тёмной теме (`Dark Mode` / `.d1-dark`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные значения и крайние случаи`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, переключить корневой контейнер в тёмную тему (`.d1-dark`).
- **Шаги выполнения**:
  1. Активировать класс `.d1-dark` на `document.body`.
  2. Проверить пересчёт CSS-переменных и контрастность иконок, подложек `overlay`, палитр `asPalette` и блока `inverse` в тёмной теме, после чего вернуть светлую тему.
- **Ожидаемый результат**: Все токены цвета и прозрачности корректно адаптируются к тёмной теме без потери читаемости или жёстко закодированных HEX-цветов.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-004.png`)

### [TC-RSP-001] Адаптивность на стандартном (`1440×900`) и широком (`1920×1080`) Desktop
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`.
- **Шаги выполнения**:
  1. Проверить страницу на разрешениях `1440×900` и `1920×1080`.
  2. Убедиться в отсутствии горизонтального скролла (`document.documentElement.scrollWidth <= window.innerWidth`) и корректном переносе флекс-групп.
- **Ожидаемый результат**: На обоих десктопных разрешениях отсутствует горизонтальное переполнение, все группы `D1Icon` выровнены аккуратно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### [TC-RSP-002] Адаптивность на планшетных вьюпортах (`1024×768` и `768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, изменить размер окна на `1024×768` и `768×1024`.
- **Шаги выполнения**:
  1. Проверить перестроение рядов иконок (особенно крупных `6xl`–`9xl`) и отсутствие выхода за границы контейнера.
- **Ожидаемый результат**: Ряды иконок плавно переносятся (`flex-wrap: wrap`), `scrollWidth <= innerWidth`, геометрические пропорции `1:1` и `5:3` сохраняются.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### [TC-RSP-003] Адаптивность на мобильных вьюпортах (`375×812` и `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и вьюпорты`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, изменить размер окна на `375×812` и `320×568`.
- **Шаги выполнения**:
  1. Проверить отсутствие горизонтального скролла и сохранение `min-width` / `aspect-ratio` всех иконок на узких мобильных экранах.
- **Ожидаемый результат**: Иконки не сжимаются и не деформируются (`min-width: var(--_width)`), горизонтальная прокрутка страницы отсутствует.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-003.png`)

### [TC-A11Y-001] Проверка WAI-ARIA атрибутов у статичных и интерактивных иконок (`aria-hidden`, `role`, `aria-label`, `tabindex`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность и клавиатурная навигация`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`.
- **Шаги выполнения**:
  1. Проверить, что все декоративные/статичные иконки (`!dynamic`) имеют `aria-hidden="true"` и не имеют `tabindex` или `role`.
  2. Проверить интерактивные иконки в группе `Interactive Mode, Navigation & Accessibility`: дефолтный `role="button"` и `tabindex="0"` при `dynamic`, пользовательский `role="switch"`, а также `aria-label`.
- **Ожидаемый результат**: Статичные иконки скрыты от скринридеров (`aria-hidden="true"`), а интерактивные иконки (`dynamic`) имеют семантическую роль (`button` или `switch`), доступное имя (`aria-label`) и `tabindex="0"`.
- **Тип доказательства**: `Console/Log`

### [TC-A11Y-002] Клавиатурная навигация (`Tab`, `Enter`, `Space`) и индикация фокуса `:focus-visible`
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность и клавиатурная навигация`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `Interactive Mode, Navigation & Accessibility`.
- **Шаги выполнения**:
  1. Переместить клавиатурный фокус через `Tab` на интерактивную иконку `notifications` (`dynamic`) и проверить отображение контура `:focus-visible` (`outline: 2px solid`).
  2. Нажать клавиши `Enter` и `Space` на сфокусированной интерактивной иконке и проверить срабатывание действия (`@click`).
- **Ожидаемый результат**: При фокусе с клавиатуры отображается чёткое кольцо фокуса `:focus-visible`, а нажатие `Enter` или `Space` активирует интерактивную иконку.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-A11Y-002.png`)

### [TC-LOG-001] Отсутствие ошибок консоли, необработанных исключений и предупреждений `[Vue warn]`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль, события и здоровье среды выполнения`
- **Предусловия**: Открыть `http://localhost:3000/component-icon` и выполнить все интерактивные сценарии.
- **Шаги выполнения**:
  1. Собрать все сообщения консоли браузера и ошибки страницы (`pageerror`, `console.error`, `console.warn`).
- **Ожидаемый результат**: За всё время загрузки и выполнения тестов зафиксировано `0` ошибок `console.error`, `0` исключений и `0` предупреждений `[Vue warn]`.
- **Тип доказательства**: `Console/Log`

### [TC-LOG-002] Верификация событий загрузки медиа `@load` и корректности сетевых/асинхронных ресурсов
- **Приоритет**: `P1 (High)`
- **Категория**: `Консоль, события и здоровье среды выполнения`
- **Предусловия**: Открыть `http://localhost:3000/component-icon`, группа `Events & Expose Methods`.
- **Шаги выполнения**:
  1. Переключить управляемую иконку на `Image Sources` и `Country Flags`.
  2. Проверить генерацию события `@load` в `Last Event` (с указанием типа медиа и разрешения изображения `load (image: 200x200)` / `load (icon)`).
- **Ожидаемый результат**: Событие `@load` корректно пробрасывается из дочернего `D1Image` через `D1Icon` с полным объектом `ImageEventData`.
- **Тип доказательства**: `Console/Log`

