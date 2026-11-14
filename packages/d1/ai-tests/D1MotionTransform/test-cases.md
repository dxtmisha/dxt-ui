# Спецификация тест-кейсов: D1MotionTransform

- **Сущность**: `D1MotionTransform`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/MotionTransform`, `packages/constructor/src/constructors/MotionTransform`
- **Целевой URL**: `http://localhost:3000/component-motion-transform`
- **Справочные материалы (`materials/`)**: `Отсутствуют`
- **Последняя проверка / обновление**: `2026-11-15`
- **Всего тест-кейсов**: `17`

---

## 1. Матрица покрытия (Overview)

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 4 | P0, P1 | Базовый рендеринг, `:open="true"`, `animationHeadPosition`, `section`, `adaptive`, `tagBody`, тёмная тема |
| **Интерактивность и функционал** | `INT` | 6 | P0, P1 | Клик по заголовку, `clickOpen`, `autoClose`, `ignoreSelector`, `ignore` (id/ref), слоты `classes.*`, `v-model:open`, `expose`, `@update:open` / `@transform` |
| **Граничные случаи и устойчивость** | `BND` | 2 | P0, P1 | Быстрые повторные переключения (rAF cancellation), первичное состояние `:open="true"` при SSR/гидратации, `in-dom` |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) и брейкпоинты `adaptive` |
| **Доступность (A11y)** | `A11Y` | 2 | P1 | `tabindex="0"`, `role="button"`, `aria-controls`, `aria-expanded`, `Escape`, `aria-labelledby`, `aria-describedby` |
| **Консоль и стабильность runtime** | `LOG` | 1 | P0 | Отсутствие `console.error`, `pageerror`, `[Vue warn]` и сетевых ошибок при прохождении всех сценариев |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг и начальное состояние `:open="true"`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-motion-transform`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Дождаться полной загрузки страницы и гидратации Vue-приложения.
  2. Проверить наличие всех групп на странице, закрытого базового экземпляра (`data-open="none"`) и экземпляра с `:open="true"` (`data-open="open"`).
  3. Проверить отсутствие горизонтального переполнения (`documentElement.scrollWidth <= window.innerWidth`).
- **Ожидаемый результат**: Страница рендерится без визуальных дефектов, базовый компонент свернут и показывает только заголовок, компонент с `:open="true"` отображает тело.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Варианты позиции заголовка (`animationHeadPosition`) и режим `section`
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-motion-transform`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти компоненты в группах `Animation Head Position` и `Section Mode (Persistent Header)`.
  2. Проверить классы `d1-motionTransform--animationHeadPosition--top`, `d1-motionTransform--animationHeadPosition--toBottom` и `d1-motionTransform--section`.
  3. Раскрыть компоненты с `top` и `toBottom` и сравнить расположение `.d1-motionTransform__head` и `.d1-motionTransform__body`.
- **Ожидаемый результат**: Модификаторы применены корректно, `section` отображается развёрнутой секцией без наложений, `top` и `toBottom` визуально отличаются позиционированием заголовка.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Адаптивные макеты (`planeAlways`, `planeSm`, `planeMd`, `planeLg`, `planeXl`, `plane2xl`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-motion-transform`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Пролистать страницу к группе `Adaptive Layouts`.
  2. Проверить наличие модификаторов `--adaptive--planeAlways`, `--adaptive--planeMd`, `--adaptive--planeSm`, `--adaptive--planeLg`, `--adaptive--planeXl`, `--adaptive--plane2xl`.
  3. Проверить видимость и геометрию контейнеров на ширине `1440px` (`plane2xl` — выше `1536px`, поэтому на `1440px` ещё не в plane-режиме).
- **Ожидаемый результат**: Модификаторы адаптивности применены ко всем 6 примерам, на ширине `1440px` активны нужные статические/трансформируемые состояния без наложений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Кастомный тег (`tagBody="article"`), `in-dom` и тёмная тема
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-motion-transform`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить, что в группе `Custom Body Tag (tagBody)` тело компонента имеет тег `<ARTICLE>`.
  2. Переключить эмуляцию `prefers-color-scheme: dark` (или системный класс тёмной темы) и проверить контраст и фон раскрытого `D1MotionTransform`.
- **Ожидаемый результат**: Тело рендерится как `<article>`, контент сохраняет читаемость и визуальную целостность в тёмном оформлении.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

### 2.2 Интерактивность и функционал (`INT`)

#### [TC-INT-001] Переключение состояния по клику на заголовок (`clickOpen: true`) и закрытие
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Functionality & Interactivity`
- **Предусловия**: Закрытый базовый компонент `Search something... (Click to expand)`.
- **Шаги теста**:
  1. Кликнуть по `.d1-motionTransform__head` базового компонента.
  2. Дождаться завершения анимации открытия (`transition`).
  3. Проверить изменение `data-open="open"`, `aria-expanded="true"`, видимость `.d1-motionTransform__body` с полем ввода и завершение transition (`data-show="none"`).
  4. Закрыть компонент (внешний клик / `Escape`).
- **Ожидаемый результат**: Компонент плавно открывается по клику на заголовок и затем корректно закрывается.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Отключённый клик по заголовку (`clickOpen: false`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Functionality & Interactivity`
- **Предусловия**: Группа `Click Open Control`.
- **Шаги теста**:
  1. Кликнуть по заголовку экземпляра с `:click-open="false"`.
  2. Убедиться, что состояние осталось закрытым (`data-open="none"`).
  3. Нажать кнопку `Open Externally` и убедиться, что компонент открылся (`data-open="open"`).
- **Ожидаемый результат**: Клик по заголовку игнорируется при `clickOpen="false"`, а внешнее изменение `v-model:open` корректно открывает компонент.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Автозакрытие при внешнем клике (`autoClose: true` против `autoClose: false`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Functionality & Interactivity`
- **Предусловия**: Группа `Auto Close & Outside Click Exclusion`.
- **Шаги теста**:
  1. Открыть экземпляр `Auto Close Enabled (Default)` и кликнуть по свободной области страницы снаружи.
  2. Проверить, что компонент закрылся.
  3. Открыть экземпляр `Auto Close Disabled` и кликнуть снаружи.
- **Ожидаемый результат**: Первый экземпляр автоматически закрывается, второй остаётся открытым до явного клика по заголовку.
- **Тип доказательства**: `Assertion`

#### [TC-INT-004] Зоны игнорирования (`ignoreSelector`, `ignore` селектор/Ref) и слотовые классы (`classes.none`, `classes.noneGlobal`, `classes.close`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Functionality & Interactivity`
- **Предусловия**: Группы `Auto Close & Outside Click Exclusion` и `Scoped Slots & Built-in Close Trigger`.
- **Шаги теста**:
  1. Открыть `Ignore Selector (.demo-ignore-click)` и кликнуть по кнопке `.demo-ignore-click` — проверить, что окно не закрылось.
  2. Открыть `Ignore by ID Selector (ignore="#demo-ignore-id-zone")` и кликнуть `#demo-ignore-id-zone`, затем открыть `Ignore by HTMLElement Ref` и кликнуть `#demo-ignore-ref-zone` — проверить, что окна остаются открытыми.
  3. В `Scoped Slots & Built-in Close Trigger` проверить клик по элементу с `classes.none` (внутри head) и закрытие по кнопке с `classes.close`.
- **Ожидаемый результат**: Игнорируемые элементы и селекторы не вызывают автозакрытия, а `classes.close` закрывает компонент; `classes.none` в заголовке не триггерит переключение.
- **Тип доказательства**: `Assertion`

#### [TC-INT-005] Программное управление через `expose` и двусторонняя привязка `v-model:open`
- **Приоритет**: `P1 (High)`
- **Категория**: `Functionality & Interactivity`
- **Предусловия**: Группы `Two-Way Binding (v-model:open)` и `Programmatic Control via Ref`.
- **Шаги теста**:
  1. В `Two-Way Binding` нажать `Open via Button`, проверить `DemoValue` (`true`), нажать `Close via Button` (проверить `false`), затем снова открыть и закрыть внешним кликом (`false`).
  2. В `Programmatic Control via Ref` последовательно нажать `toOpen()`, `toClose()`, `setOpen(true)`, `setOpen(false)`, `toggle()`, проверяя `DemoValue` (`isOpen: ..., isShow: ...`).
- **Ожидаемый результат**: `v-model:open` синхронизирован в обе стороны, а методы `toOpen`, `toClose`, `setOpen`, `toggle`, `getOpen`, `isShow` работают без сбоев.
- **Тип доказательства**: `Assertion`

#### [TC-INT-006] События (`@update:open`, `@transform`, `@transform-lite`) и режим `animationShow: false`
- **Приоритет**: `P1 (High)`
- **Категория**: `Functionality & Interactivity`
- **Предусловия**: Группы `Animation Show (Instant vs Transition)` и `Events`.
- **Шаги теста**:
  1. Кликнуть компонент `Instant Toggle (animationShow: false)` и проверить мгновенное переключение без задержек.
  2. Кликнуть компонент `Event Tracking` и проверить обновление `DemoValue` последним событием (`transform` / `transform-lite` / `update:open`).
- **Ожидаемый результат**: `animationShow: false` переключает состояние мгновенно; события корректно эмитятся при изменении состояния.
- **Тип доказательства**: `Assertion`

### 2.3 Граничные случаи и устойчивость (`BND`)

#### [TC-BND-001] Быстрые повторные переключения и устойчивость `requestAnimationFrame`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Boundary & Resilience`
- **Предусловия**: Группа `Programmatic Control via Ref`.
- **Шаги теста**:
  1. Выполнить серию из 5 быстрых нажатий на кнопку `toggle()` с интервалом `30ms`.
  2. Подождать `500ms` до стабилизации анимации.
  3. Сравнить `data-open`, `data-show`, `aria-expanded` и текст `statusValue`.
- **Ожидаемый результат**: Нечётное число переключений (5) приводит к согласованному открытому состоянию без зависших inline-стилей трансформации и без рассинхронизации `data-open` / `data-show`.
- **Тип доказательства**: `Assertion`

#### [TC-BND-002] Первичное `:open="true"` при SSR/гидратации и сохранение DOM в режиме `in-dom`
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundary & Resilience`
- **Предусловия**: Страница загружена с SSR (`vite ssr` / `nitro`).
- **Шаги теста**:
  1. Проверить компонент с `:open="true"` сразу после загрузки — тело уже отрендерено и доступно.
  2. Проверить закрытый компонент `in-dom`: убедиться, что `.d1-motionTransform__body` присутствует в DOM (`data-show="none"`, но узел не удалён).
- **Ожидаемый результат**: Нет расхождений гидратации; `in-dom` сохраняет контент в DOM в закрытом состоянии.
- **Тип доказательства**: `Assertion`

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптивность на десктопе (`1440×900`) и планшете (`768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsiveness`
- **Предусловия**: Страница `http://localhost:3000/component-motion-transform`.
- **Шаги теста**:
  1. Проверить вьюпорт `768×1024`: убедиться в отсутствии горизонтального скролла (`scrollWidth <= innerWidth`).
  2. Проверить поведение `adaptive="planeLg"` (на `768px` работает как трансформируемая панель с кликом) и `adaptive="planeMd"` (на `768px` остаётся в статическом plane-режиме).
- **Ожидаемый результат**: Отсутствие горизонтального переполнения, корректное поведение брейкпоинтов `planeMd` и `planeLg` на планшете.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Адаптивность на мобильных вьюпортах (`375×812` и `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsiveness`
- **Предусловия**: Страница `http://localhost:3000/component-motion-transform`.
- **Шаги теста**:
  1. Установить вьюпорт `375×812`, затем `320×568`.
  2. Проверить отсутствие горизонтального скролла и обрезания текста/кнопок.
  3. Открыть базовый `D1MotionTransform` кликом и проверить корректность геометрии в мобильном экране.
- **Ожидаемый результат**: Макет адаптируется под `375px` и `320px` без горизонтального скролла, компонент корректно разворачивается.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Клавиатурное управление (`Tab`, `Enter`, `Escape`) и ARIA-атрибуты контроля
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility`
- **Предусловия**: Вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить у `.d1-motionTransform__head` наличие `tabindex="0"`, `role="button"`, `aria-controls`, `aria-expanded="false"`, а у тела — соответствующего `id` (`idBody`).
  2. Сфокусировать заголовок, нажать `Enter` (или `Space`), проверить переход `aria-expanded="true"`.
  3. Нажать `Escape` и проверить закрытие открытого компонента и возврат `aria-expanded="false"`.
- **Ожидаемый результат**: Открытие по `Enter` и закрытие по `Escape` работают корректно, `aria-expanded` и `aria-controls` согласованы с DOM.
- **Тип доказательства**: `Assertion`

#### [TC-A11Y-002] Связанные ARIA-атрибуты (`aria-labelledby` и `aria-describedby`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility`
- **Предусловия**: Группа `Accessibility (ARIA Attributes)`.
- **Шаги теста**:
  1. Найти экземпляр `D1MotionTransform` в группе `Accessibility (ARIA Attributes)` и открыть его.
  2. Проверить на `.d1-motionTransform__body` атрибуты `role="region"`, `aria-labelledby="demo-mt-aria-label"` и `aria-describedby="demo-mt-aria-desc"`, а также наличие целевых элементов с такими `id` в DOM.
- **Ожидаемый результат**: Атрибуты доступности корректно проброшены на элемент тела (`.d1-motionTransform__body`) и ссылаются на существующие узлы DOM.
- **Тип доказательства**: `Assertion`

### 2.6 Консоль и стабильность runtime (`LOG`)

#### [TC-LOG-001] Чистота консоли, отсутствие Vue-предупреждений и ошибок сети
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Активное прослушивание `Runtime.consoleAPICalled`, `Runtime.exceptionThrown` и `Network.responseReceived` на всём протяжении прогона тестов.
- **Шаги теста**:
  1. Выполнить весь набор тестов `TC-VIS-*`, `TC-INT-*`, `TC-BND-*`, `TC-RSP-*`, `TC-A11Y-*`.
  2. Проверить собранные массивы ошибок/предупреждений консоли, неперехваченных исключений и неуспешных сетевых запросов.
- **Ожидаемый результат**: `0` `console.error`, `0` `pageerror`, `0` `[Vue warn]`, `0` сбоев загрузки JS/CSS/шрифтов.
- **Тип доказательства**: `Runtime Log`
