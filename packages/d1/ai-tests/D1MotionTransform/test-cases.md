# Спецификация тест-кейсов: D1MotionTransform

- **Сущность**: `D1MotionTransform`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/MotionTransform`, `packages/constructor/src/constructors/MotionTransform`, `packages/demo/src/pages/components/DemoMotionTransformPage.vue`
- **Целевой URL**: `http://localhost:3000/component-motion-transform`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `18`

---

## 1. Матрица покрытия

| Категория | Код | Количество | Распределение приоритетов | Область фокуса |
| :--- | :--- | :---: | :--- | :--- |
| **Визуал и дизайн-система** | `VIS` | 4 | P0, P1 | Базовый рендеринг, `:open="true"`, `animationHeadPosition`, `section`, `adaptive`, `tagBody`, тёмная тема |
| **Интерактивность и функциональность** | `INT` | 7 | P0, P1 | Клик по заголовку, `clickOpen`, `autoClose`, `ignoreSelector`, `ignore` (id/ref), слотовые классы (`classes.click`, `classes.none`, `classes.noneGlobal`, `classes.close`) и `binds`, `v-model:open` / `v-model:model-open`, `defineExpose`, события, жизненный цикл `v-if` |
| **Границы и крайние случаи** | `BND` | 3 | P0, P1 | Быстрые повторные переключения (отмена `rAF`), первичное `:open="true"` и `in-dom`, пустое/нулевое значение (`""`/`0`), Unicode, XSS, неразрывная строка и узкий контейнер (`240px`) |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) и брейкпоинты `adaptive` |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `tabindex="0"`, `role="button"`, `role="region"`, `aria-controls`, `aria-expanded`, `Enter`, `Escape`, `aria-labelledby`, `aria-describedby` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отслеживание событий (`update:open`, `update:modelOpen`, `transform`, `transformLite`) и отсутствие `console.error`, `pageerror`, `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг и начальное состояние `:open="true"`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-motion-transform`, вьюпорт `1440×900`.
- **Шаги**:
  1. Дождаться полной загрузки страницы и гидратации Vue-приложения.
  2. Проверить закрытый базовый экземпляр (`data-open="none"`) и экземпляр с `:open="true"` (`data-open="open"`).
  3. Проверить отсутствие горизонтального переполнения (`documentElement.scrollWidth <= window.innerWidth`).
- **Ожидаемый результат**: Страница рендерится без визуальных дефектов, базовый компонент свернут и показывает только заголовок, компонент с `:open="true"` отображает тело.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Варианты позиции заголовка (`animationHeadPosition`) и режим `section`
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-motion-transform`, вьюпорт `1440×900`.
- **Шаги**:
  1. Найти компоненты в группах `Animation Head Position` и `Section Mode (Persistent Header)`.
  2. Проверить классы `d1-motionTransform--animationHeadPosition--top`, `d1-motionTransform--animationHeadPosition--toBottom` и `d1-motionTransform--section`.
  3. Раскрыть компоненты с `top` и `toBottom` и сравнить расположение `.d1-motionTransform__head` и `.d1-motionTransform__body`.
- **Ожидаемый результат**: Модификаторы применены корректно, `section` отображается развёрнутой секцией без наложений, `top` и `toBottom` визуально отличаются позиционированием заголовка.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Адаптивные макеты (`planeAlways`, `planeSm`, `planeMd`, `planeLg`, `planeXl`, `plane2xl`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-motion-transform`, вьюпорт `1440×900`.
- **Шаги**:
  1. Пролистать страницу к группе `Adaptive Layouts`.
  2. Проверить наличие модификаторов `--adaptive--planeAlways`, `--adaptive--planeSm`, `--adaptive--planeMd`, `--adaptive--planeLg`, `--adaptive--planeXl`, `--adaptive--plane2xl`.
  3. Проверить видимость и геометрию контейнеров на ширине `1440px` (`plane2xl` — выше `1536px`, поэтому на `1440px` ещё не в plane-режиме).
- **Ожидаемый результат**: Модификаторы адаптивности применены ко всем 6 примерам, на ширине `1440px` активны нужные статические/трансформируемые состояния без наложений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Кастомный тег (`tagBody="article"`), `in-dom` и тёмная тема
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Страница `http://localhost:3000/component-motion-transform`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить, что в группе `SSR & DOM Lifecycle (in-dom, tagBody & Conditional Mount)` тело компонента с `tag-body="article"` имеет тег `<ARTICLE>`.
  2. Переключить эмуляцию `prefers-color-scheme: dark` и проверить контраст и фон раскрытого `D1MotionTransform`.
- **Ожидаемый результат**: Тело рендерится как `<article>`, контент сохраняет читаемость и визуальную целостность в тёмном оформлении.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

---

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Переключение состояния по клику на заголовок (`clickOpen: true`) и закрытие
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Закрытый базовый компонент `Search something... (Click to expand)`.
- **Шаги**:
  1. Кликнуть по `.d1-motionTransform__head` базового компонента.
  2. Дождаться завершения анимации открытия (`transition`).
  3. Проверить изменение `data-open="open"`, `aria-expanded="true"`, видимость `.d1-motionTransform__body` с полем ввода и завершение перехода (`data-show="none"`).
  4. Закрыть компонент внешним кликом или `Escape`.
- **Ожидаемый результат**: Компонент плавно открывается по клику на заголовок и затем корректно закрывается.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Отключённый клик по заголовку (`clickOpen: false`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `Click Open Control`.
- **Шаги**:
  1. Кликнуть по заголовку экземпляра с `:click-open="false"`.
  2. Убедиться, что состояние осталось закрытым (`data-open="none"`).
  3. Нажать кнопку `Open Externally` и убедиться, что компонент открылся (`data-open="open"`).
- **Ожидаемый результат**: Клик по заголовку игнорируется при `clickOpen="false"`, а внешнее изменение `v-model:open` корректно открывает компонент.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Автозакрытие при внешнем клике (`autoClose: true` против `autoClose: false`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `Auto Close & Outside Click Exclusion`.
- **Шаги**:
  1. Открыть экземпляр `Auto Close Enabled (Default)` и кликнуть по свободной области страницы снаружи.
  2. Проверить, что компонент закрылся.
  3. Открыть экземпляр `Auto Close Disabled`, кликнуть снаружи, затем закрыть кнопкой `Close` (`classes.close`).
- **Ожидаемый результат**: Первый экземпляр автоматически закрывается, второй остаётся открытым при клике снаружи и закрывается по кнопке `Close`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Зоны игнорирования (`ignoreSelector`, `ignore`) и слотовые классы (`classes.click`, `classes.none`, `classes.noneGlobal`, `classes.close`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группы `Auto Close & Outside Click Exclusion` и `Scoped Slots & Built-in Classes`.
- **Шаги**:
  1. Открыть `Ignore Selector (.demo-ignore-click)` и кликнуть `.demo-ignore-click` — проверить, что окно не закрылось.
  2. Открыть `Ignore by ID Selector` и `Ignore by HTMLElement Ref`, кликнуть `#demo-ignore-id-zone` и `#demo-ignore-ref-zone` — проверить, что окна остаются открытыми.
  3. В `Scoped Slots & Built-in Classes` кликнуть по `classes.none` (внутри head) — панель не должна открыться; кликнуть по кнопке с `classes.click` — панель должна открыться; кликнуть по `classes.noneGlobal` — панель не закрывается; закрыть по кнопке с `classes.close`.
- **Ожидаемый результат**: Игнорируемые зоны и классы `classes.none` / `classes.noneGlobal` не вызывают переключения/автозакрытия, а `classes.click` и `classes.close` отрабатывают штатно.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-005] Программное управление через `defineExpose` и двусторонняя привязка (`v-model:open`, `v-model:model-open`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группы `Two-Way Binding (v-model:open & v-model:model-open)` и `Programmatic Control via Ref`.
- **Шаги**:
  1. Нажать `Open v-model:open` / `Close v-model:open` и `Open v-model:model-open` / `Close v-model:model-open`, проверяя `DemoValue` (`openManual`, `openModelOpen`).
  2. В `Programmatic Control via Ref` последовательно нажать `toOpen()`, `toClose()`, `setOpen(true)`, `setOpen(false)`, `toggle()`, проверяя `statusValue` (`isOpen: ..., isShow: ...`).
- **Ожидаемый результат**: Обе модели `v-model:open` и `v-model:model-open` синхронизированы, все методы `MotionTransformExpose` работают без сбоев.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-006] Режим `animationShow: false` и события (`@update:open`, `@update:model-open`, `@transform`, `@transform-lite`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группы `Animation Show (Instant vs Transition)` и `Events`.
- **Шаги**:
  1. Кликнуть компонент `Instant Toggle (animationShow: false)` и проверить мгновенное переключение без задержек.
  2. Кликнуть компонент `Event Tracking` и проверить обновление `eventName` и `eventPayload`.
- **Ожидаемый результат**: `animationShow: false` переключает состояние мгновенно; все события `MotionTransformEmits` эмитятся с корректными опциями `{ type, open }`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-007] Жизненный цикл условного монтирования (`v-if`) и очистка слушателей
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Группа `SSR & DOM Lifecycle (in-dom, tagBody & Conditional Mount)`.
- **Шаги**:
  1. Раскрыть `Conditional Mount Panel (v-if)`.
  2. Нажать `Unmount Panel`, затем снова `Mount Panel`.
- **Ожидаемый результат**: Таймеры, `requestAnimationFrame` и глобальный слушатель кликов корректно очищаются при размонтировании без ошибок в консоли.
- **Тип доказательства**: `Console/Log`

---

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Быстрые повторные переключения и устойчивость `requestAnimationFrame`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Группа `Programmatic Control via Ref`.
- **Шаги**:
  1. Выполнить серию из 5 быстрых нажатий на кнопку `toggle()` с интервалом `30ms`.
  2. Подождать `500ms` до стабилизации анимации.
  3. Сравнить `data-open`, `data-show`, `aria-expanded` и текст `statusValue`.
- **Ожидаемый результат**: Нечётное число переключений (5) приводит к согласованному открытому состоянию без зависших inline-стилей трансформации.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-002] Первичное `:open="true"` при SSR/гидратации и сохранение DOM в режиме `in-dom`
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Страница загружена.
- **Шаги**:
  1. Проверить компонент с `:open="true"` сразу после загрузки — тело отрендерено и доступно.
  2. Проверить закрытый компонент `in-dom`: убедиться, что `.d1-motionTransform__body` присутствует в DOM (`data-show="none"`, узел не удалён).
- **Ожидаемый результат**: Нет расхождений гидратации; `in-dom` сохраняет контент в DOM в закрытом состоянии.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-003] Пустые/нулевые значения (`""`, `0`), Unicode, XSS, неразрывная строка и узкий контейнер (`240px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Группа `Boundary & Edge Cases (Empty, 0, Unicode, XSS, Narrow)`.
- **Шаги**:
  1. Проверить экземпляр с `0` в заголовке и теле — убедиться в отображении `"0"`.
  2. Раскрыть экземпляр `Unicode & XSS Header` и проверить экранирование `<img src=x onerror=alert(1)>`, отображение `Tiếng Việt / Кириллица / 🚀🔥✨` и перенос `AAAA...`.
  3. Проверить контейнер `.demo-motion-transform-page__narrow` (`max-width: 240px`) с `adaptive="planeAlways"`.
- **Ожидаемый результат**: `0` отображается, XSS выводится как текст, длинные строки переносятся внутри `240px` без горизонтального переполнения.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

---

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптивность на десктопе (`1440×900`) и планшете (`768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Страница `http://localhost:3000/component-motion-transform`.
- **Шаги**:
  1. Проверить вьюпорт `768×1024`: убедиться в отсутствии горизонтального скролла (`scrollWidth <= innerWidth`).
  2. Проверить поведение `adaptive="planeLg"` (на `768px` работает как трансформируемая панель с кликом) и `adaptive="planeMd"` (на `768px` в статическом plane-режиме).
- **Ожидаемый результат**: Отсутствие горизонтального переполнения, корректное поведение брейкпоинтов `planeMd` и `planeLg` на планшете.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Адаптивность на мобильных вьюпортах (`375×812` и `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Страница `http://localhost:3000/component-motion-transform`.
- **Шаги**:
  1. Установить вьюпорт `375×812`, затем `320×568`.
  2. Проверить отсутствие горизонтального скролла и обрезания текста/кнопок.
  3. Открыть базовый `D1MotionTransform` кликом и проверить корректность геометрии в мобильном экране.
- **Ожидаемый результат**: Макет адаптируется под `375px` и `320px` без горизонтального скролла, компонент корректно разворачивается.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

---

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Клавиатурное управление (`Tab`, `Enter`, `Escape`) и ARIA-атрибуты контроля и тела
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Группа `Accessibility (ARIA Attributes & Keyboard Navigation)`, вьюпорт `1440×900`.
- **Шаги**:
  1. Проверить у `.d1-motionTransform__head` наличие `tabindex="0"`, `role="button"`, `aria-controls`, `aria-expanded="false"`.
  2. Сфокусировать заголовок, нажать `Enter`, проверить `aria-expanded="true"` и наличие на `.d1-motionTransform__body` атрибутов `role="region"`, `aria-labelledby="demo-mt-aria-label"`, `aria-describedby="demo-mt-aria-desc"`.
  3. Нажать `Escape` и проверить закрытие компонента и возврат `aria-expanded="false"`.
- **Ожидаемый результат**: Открытие по `Enter` и закрытие по `Escape` работают корректно, ARIA-атрибуты заголовка и тела согласованы с DOM.
- **Тип доказательства**: `Console/Log`

---

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Чистота консоли, отсутствие `[Vue warn]` и ошибок сети
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Активное прослушивание консоли, исключений и сетевых запросов на всём протяжении прогона тестов.
- **Шаги**:
  1. Выполнить весь набор тестов `TC-VIS-*`, `TC-INT-*`, `TC-BND-*`, `TC-RSP-*`, `TC-A11Y-*`.
  2. Проверить собранные массивы ошибок и предупреждений.
- **Ожидаемый результат**: `0` `console.error`, `0` `pageerror`, `0` `[Vue warn]`, `0` сбоев загрузки JS/CSS/шрифтов.
- **Тип доказательства**: `Console/Log`
