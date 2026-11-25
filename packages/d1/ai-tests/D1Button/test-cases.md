# Спецификация тест-кейсов: D1Button

- **Сущность**: `D1Button`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Button`, `packages/constructor/src/constructors/Button`, `packages/demo/src/pages/components/DemoButtonPage.vue`
- **Целевой URL**: `http://localhost:3000/component-button`
- **Справочные материалы**: `Отсутствуют`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `14`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 4 | P0, P1 | Варианты (`primary`, `secondary`, `outline`, `text`), размеры (`xs`–`xl`), все 24 палитры, формы (`roundedFull`, `hasLabelMinWidth`, `inverse`, `grid`), `textAlign` |
| **Интерактивность и функционал** | `INT` | 5 | P0, P1 | Состояния и динамические переключения, блокировка кликов (`disabled`, `readonly`, `loading`), `noPointerEvents` иконки, события `click`/`clickLite` с payload, `expose` (`getValue`, `getDetail`), форма (`submit`/`reset`), жизненный цикл `v-if` |
| **Границы и крайние случаи** | `BND` | 2 | P1 | Пустые/пробельные `label`, числовые `0`, отрицательные/дробные числа, одиночный символ, длинный и неразрывный текст в узком `DemoBox`, Unicode, XSS-экранирование, слот `#default`, теги `button`/`a`/`span` |
| **Адаптивность и viewport** | `RSP` | 2 | P1 | Десктоп (`1440×900`), планшет (`768×1024`), мобильный (`375×812` / `320×568`), все 13 режимов `adaptive` и все 10 режимов `container` |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | Фокус клавиатурой (`Tab`, `:focus-visible`), `Enter`/`Space`, `role="button"`, `aria-label`, `aria-disabled`, `aria-busy`, `label-id` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие `console.error`, `[Vue warn]` и неперехваченных исключений |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг вариантов внешнего вида и размеров D1Button
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-button`, viewport `1440×900`, светлая тема.
- **Шаги теста**:
  1. Найти группы `Appearances` и `Sizes`.
  2. Проверить вычисленные стили, классы `.d1-button--primary`, `.d1-button--secondary`, `.d1-button--outline`, `.d1-button--text`, `.d1-button--size--xs`..`xl` и ненулевые размеры (`getBoundingClientRect()`).
- **Ожидаемый результат**: Все 4 варианта и 5 размеров отображаются корректно без обрезания текста и наложения.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Все 24 палитры, иконки, формы, `inverse`, `grid` и выравнивание текста
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-button`, viewport `1440×900`.
- **Шаги теста**:
  1. Проверить группу `Palettes (All 24)` на наличие всех 24 палитр (`.d1-palette--*`).
  2. Проверить группы `Icons & Icon Modifiers` (`icon`, `iconTrailing`, объекты, `iconTurn`, `iconTrailingTurnOnly`, `iconDir`, `iconTrailingDirOnly`, `iconPalette`, `iconTrailingPalette`, `iconHide`, `iconAttrs`) и `Shapes, Inverse, Grid & Text Alignment` (`roundedFull`, `hasLabelMinWidth`, `inverse`, `grid`, `textAlign` `left`/`center`/`right`).
- **Ожидаемый результат**: Все палитры, модификаторы иконок, формы, режимы сетки и выравнивания применяются согласно токенам D1.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Состояния компонента (Focus, Selected, Disabled, Readonly, Loading, Skeleton) и комбинации
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-button`, viewport `1440×900`.
- **Шаги теста**:
  1. Найти группу `Visual States & Combinations`.
  2. Проверить классы `.d1-button--focus`, `.d1-button--selected`, `.d1-button--disabled`, `.d1-button--readonly`, `.d1-button--loading` (для boolean и object `loading`), скелетон внутри `D1Skeleton` (`.d1-skeleton__background`) и комбинированные состояния (`Disabled + Selected`, `Loading + Disabled`, `Outline + Selected + Blue`, `Secondary + Disabled`).
- **Ожидаемый результат**: Все состояния визуально различимы, индикатор загрузки и скелетон отображаются без смещения макета.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Контейнерные запросы (`container` — все 10 режимов)
- **Приоритет**: `P1 (High)`
- **Категория**: `Визуал и дизайн-система`
- **Предусловия**: Открыть `http://localhost:3000/component-button`, найти группу `Container Modes (All 10)`.
- **Шаги теста**:
  1. Проверить наличие всех 10 модификаторов `.d1-button--container--iconSm`..`full2xl` внутри `DemoBox` с `container`.
- **Ожидаемый результат**: Контейнерные модификаторы применяются без выхода кнопок за границы `DemoBox`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

### 2.2 Интерактивность и управление состоянием (`INT`)

#### [TC-INT-001] Генерация событий (`click`, `clickLite`) с payload и методы `expose` (`getValue`, `getDetail`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-button`, найти группу `Events & Expose Methods`.
- **Шаги теста**:
  1. Нажать кнопку `Inspectable Button`. Проверить `Event Name` и сериализованный `Event Payload` в `DemoValue`.
  2. Нажать `Read getValue()` и `Read getDetail()`, проверить `Expose Output`.
  3. Нажать `Switch Value & Detail` и убедиться, что `getValue()` и `getDetail()` возвращают обновлённые значения.
- **Ожидаемый результат**: Фиксируются события `click` / `clickLite` с корректным payload (`type`, `value`, `detail`), а `expose`-методы отражают актуальные пропсы.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Блокировка кликов в состояниях `disabled`, `readonly` и `loading`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-button`, найти группу `Blocked & Guarded Actions`.
- **Шаги теста**:
  1. Проверить начальное значение `Blocked Click Count` (`0`).
  2. Нажать на кнопки `Blocked Disabled`, `Blocked Readonly` и `Blocked Loading`.
  3. Проверить `Blocked Click Count`, атрибуты `disabled` и `aria-disabled="true"` / `.d1-button__loading`.
- **Ожидаемый результат**: Ни одна из заблокированных кнопок не вызывает `click`/`clickLite`, счётчик `Blocked Click Count` остаётся `0`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Ведущая иконка с `noPointerEvents` и хвостовая иконка
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-button`, найти группу `Icons & Icon Modifiers`.
- **Шаги теста**:
  1. Найти кнопку `Both Icons` (`icon="home"`, `iconTrailing="arrow_forward"`).
  2. Проверить классы и CSS `pointer-events` у `.d1-button__icon` и `.d1-button__trailing`.
- **Ожидаемый результат**: Ведущая иконка `.d1-button__icon` имеет `.d1-icon--noPointerEvents` (`pointer-events: none`), а хвостовая `.d1-button__trailing` сохраняет `pointer-events: auto`.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Динамические переключения состояний и интеграция с `<form>` (`submit` / `reset`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Открыть `http://localhost:3000/component-button`.
- **Шаги теста**:
  1. В группе `Interactive State Toggles` последовательно нажать `Toggle Disabled`, `Toggle Loading`, `Toggle Selected`, `Toggle Skeleton` и проверить обновление классов `Dynamic Target` и `State Flags`.
  2. В группе `Tags, Links & Form Integration` нажать `Submit Form` и затем `Reset Form`.
- **Ожидаемый результат**: Классы состояния динамически переключаются, а `Form Status` меняется на `Form submitted` и `Form reset`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

#### [TC-INT-005] Жизненный цикл монтирования/размонтирования (`v-if`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Интерактивность и функционал`
- **Предусловия**: Найти группу `Lifecycle & Conditional Mount`.
- **Шаги теста**:
  1. Нажать `Toggle Mount`, убедиться, что `Mounted Button` удалён из DOM и `Mounted` равен `false`.
  2. Нажать `Toggle Mount` повторно, убедиться в повторном монтировании без ошибок.
- **Ожидаемый результат**: Компонент корректно монтируется и размонтируется без утечек и ошибок консоли.
- **Тип доказательства**: `Console/Log`

### 2.3 Граничные случаи и устойчивость (`BND`)

#### [TC-BND-001] Пустые/числовые значения (`""`, `"   "`, `0`, `-42`, `3.14`), Unicode, XSS и длинный текст в узком контейнере
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные случаи и устойчивость`
- **Предусловия**: Открыть `http://localhost:3000/component-button`, найти группу `Boundary & Edge Cases`.
- **Шаги теста**:
  1. Проверить рендеринг пустой кнопки, `label=""`, `label="   "`, `0` (с `data-value="0"`), `-42`, `3.14`, одиночного символа `A`.
  2. Проверить корректное экранирование строки `<img src=x onerror=alert(1)>` как текста (отсутствие вставленного `<img>`), отображение Unicode и обрезку длинного текста / неразрывной строки внутри узкого `DemoBox`.
- **Ожидаемый результат**: Число `0` не теряется как falsy, XSS-строка экранирована как текст, переполнение контейнера не ломает макет.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Слот `#default` и полиморфные теги (`button`, `a` через `href`/`to`, `span`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Граничные случаи и устойчивость`
- **Предусловия**: Найти группы `Tags, Links & Form Integration` и `Slots & Accessibility`.
- **Шаги теста**:
  1. Проверить рендеринг `<a>` для кнопок с `href` и `to` (строка и объект маршрута).
  2. Проверить `<span>` для `Span Role Button` и содержимое слота `#default`.
- **Ожидаемый результат**: Теги и слот `#default` рендерятся корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптивность на планшете (`768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и viewport`
- **Предусловия**: Изменить размер viewport на `768×1024`.
- **Шаги теста**:
  1. Проверить перенос рядов `DemoFlex` и секцию `Adaptive Modes (All 13)`.
- **Ожидаемый результат**: Отсутствует горизонтальный скролл документа (`scrollWidth <= innerWidth`), модификаторы `iconMd`/`fullMd` работают корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Адаптивность на мобильном экране (`375×812` и `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Адаптивность и viewport`
- **Предусловия**: Изменить размер viewport на `375×812` и `320×568`.
- **Шаги теста**:
  1. Проверить все 13 адаптивных режимов (`iconAlways`, `block`, `auto`, `iconSm`–`icon2xl`, `fullSm`–`full2xl`) и отсутствие выхода кнопок за пределы viewport.
- **Ожидаемый результат**: Кнопки корректно адаптируются под узкий экран без горизонтального переполнения.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Доступность с клавиатуры (`Tab`, `Enter`, `Space`) и WAI-ARIA атрибуты
- **Приоритет**: `P1 (High)`
- **Категория**: `Доступность`
- **Предусловия**: Открыть `http://localhost:3000/component-button`, viewport `1440×900`.
- **Шаги теста**:
  1. Сфокусировать `Inspectable Button` клавишей `Tab`, проверить видимое кольцо `:focus-visible` и активацию через `Enter` / `Space`.
  2. Проверить `role="button"`, `tabindex="0"`, `aria-label="Custom Span Button"` на `Span Role Button` и `aria-disabled="true"` на `Span Disabled`.
  3. Проверить `aria-label="Settings"` на иконочной кнопке и `id="demo-button-custom-label"` на метке в `Slots & Accessibility`.
- **Ожидаемый результат**: Кнопки доступны с клавиатуры, фокус видим, все ARIA-атрибуты соответствуют WAI-ARIA.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-A11Y-001.png`)

### 2.6 Логи, консоль и стабильность runtime (`LOG`)

#### [TC-LOG-001] Здоровье консоли и отсутствие предупреждений Vue
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Консоль и рантайм`
- **Предусловия**: Собрать все сообщения консоли на протяжении выполнения всех сценариев.
- **Шаги теста**:
  1. Проверить наличие `console.error`, `pageerror` и `[Vue warn]`.
- **Ожидаемый результат**: `0` ошибок консоли, `0` предупреждений Vue, `0` сетевых ошибок.
- **Тип доказательства**: `Console/Log`
