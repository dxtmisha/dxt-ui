# Спецификация тест-кейсов: `D1Progress`

- **Сущность**: `D1Progress` (`Progress`)
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Progress` (конструктор: `packages/constructor/src/constructors/Progress`)
- **Целевой URL**: `http://localhost:3000/component-progress`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `16`

---

## 1. Матрица покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 5 | P0, P1 | Режимы `linear`/`circular`/`point`, `indeterminate` (`type1`/`type2`/`type3`), `position` (`top`/`bottom`/`static`), `size` (`sm`/`md`/`lg`), все 24 `palette`, `dense` и `inverse` |
| **Интерактив и функциональность** | `INT` | 4 | P0, P1 | Задержки `delay`/`delayHide`, динамическое переключение `value`, режима, `indeterminate`, `size`, `position`, `dense`, `point`, `inverse`, `visible`, компаньон `D1Button :loading` |
| **Границы и крайние случаи** | `BND` | 3 | P1, P2 | `value="0"`, `value="-10"`, `max="0"`, `value > max`, дробные значения, `undefined`, пустые/XSS `ariaLabel`, узкий контейнер `240px` |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1, P2 | Планшет (`768×1024`) и мобильный (`375×812`, `320×568`), отсутствие горизонтального переполнения и обрезания |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `role="progressbar"` (определённый) vs `role="status"` (неопределённый), `aria-valuemin`/`aria-valuemax`/`aria-valuenow`, `ariaLabel`, `textLoading` (строка и функция), `aria-hidden="true"` на SVG-кругах |
| **Консоль и рантайм** | `LOG` | 1 | P0 | `clientOnly` (`true`/`false`), условное монтирование `v-if` (очистка таймеров), `0` ошибок консоли и `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Линейный режим (`linear`), типы `indeterminate` (`type1`, `type2`, `type3`) и точка-индикатор (`point`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-progress`, вьюпорт `1440×900`, светлая тема.
- **Шаги теста**:
  1. Прокрутить к группам `Mode: Linear` и `Mode: Point`.
  2. Проверить наличие `.d1-progress.d1-progress--linear` с детерминированными значениями (`25`, `50`, `75`) и классами `--indeterminate--type1`, `--indeterminate--type2`, `--indeterminate--type3`.
  3. Проверить наличие `.d1-progress__point` при `point` с `value` и `indeterminate="type1"`, а также отсутствие точки при `indeterminate="type2"`.
- **Ожидаемый результат**: Линейные индикаторы рендерятся с ненулевой шириной и высотой; `.d1-progress__point` отображается только при `linear`, `point` и `value` или `indeterminate="type1"`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Круговой режим (`circular`), SVG-структура и модификатор `dense`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-progress`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Mode: Circular`.
  2. Проверить рендеринг `<svg class="d1-progress d1-progress--circular" viewBox="0 0 48 48">` и дочерних элементов `.d1-progress__circleSub` и `.d1-progress__circle`.
  3. Проверить варианты `dense` и все три типа `indeterminate` (`type1`, `type2`, `type3`).
- **Ожидаемый результат**: Все круговые индикаторы корректно отцентрованы, без обрезания контуров `circle`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Позиционирование (`position`: `top`, `bottom`, `static`) и размеры (`size`: `sm`, `md`, `lg`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-progress`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группам `Positions (top, bottom, static)` и `Sizes (sm, md, lg)`.
  2. Проверить классы `--position--top`, `--position--bottom`, `--position--static` (включая `circular` со `static`, где `position: relative`) и высоту/толщину линий для `sm`, `md`, `lg`.
- **Ожидаемый результат**: Позиция `top` крепится сверху контейнера, `bottom` — снизу, `static` — в потоке; размеры `sm < md < lg` визуально и метрически различаются.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Палитры (`palette`: все 24 значения)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-progress`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Palettes (All 24)`.
  2. Проверить наличие 24 классов `d1-palette--<name>` и вычисленные цвета фона/прогресса.
- **Ожидаемый результат**: Все 24 палитры применяют соответствующие токены цвета без наложений и артефактов.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

#### [TC-VIS-005] Инверсия цвета (`inverse`), `dense` и интеграция с `D1Button` (`loading`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-progress`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Dense, Inverse & Companion Integration`.
  2. Проверить контрастность линейного и кругового `D1Progress` с `inverse` на цветной поверхности (`.demo-progress-page__inverse-surface`).
- **Ожидаемый результат**: Варианты `inverse` корректно отображаются контрастным цветом (`--sys-color`) поверх цветного фона.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-005.png`)

### 2.2 Интерактивность и управление состоянием (`INT`)

#### [TC-INT-001] Задержки показа и скрытия (`delay`, `delayHide`, `visible`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-progress`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Delays & Visibility`.
  2. Нажать кнопку `Show Progress`, зафиксировать немедленное появление индикатора `0ms / 0ms`, затем появление `100ms` и `360ms` (класс `.d1-progress--visible`).
  3. Нажать `Hide Progress` и проверить переход в `.d1-progress--hide` и последующее скрытие.
- **Ожидаемый результат**: `DemoValue` обновляется до `true`/`false`, а индикаторы появляются и скрываются строго с учётом настроенных задержек `delay` и `delayHide`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Интерактивное управление значением `value` (`+25`, `-25`, `0`, `undefined`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-progress`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Interactive Controls`.
  2. Нажимать `Increment +25`, `Decrement -25`, `Reset 0` и `Set Indeterminate`, проверяя изменение `--d1-progress-sys-value`, `aria-valuenow` и `role` (`progressbar` ↔ `status`).
- **Ожидаемый результат**: Стиль `--d1-progress-sys-value` и `aria-valuenow` синхронно отражают текущее значение; при переходе в `indeterminate` класс `--value` снимается.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Динамическое переключение режима, `indeterminate`, `size`, `position`, `dense`, `point`, `inverse` и `visible`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-progress`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. В группе `Interactive Controls` нажать кнопки `Mode`, `Indeterminate`, `Size`, `Position`, `Dense`, `Point`, `Inverse` и `Visible`.
  2. Проверить обновление DOM-классов на целевом элементе и состояние в `DemoValue`.
- **Ожидаемый результат**: Все модификаторы классов переключаются в реальном времени без визуальных сбоев; при `circular` и `point` точка-индикатор не рендерится.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Интеграция с компаньоном `D1Button :loading`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-progress`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. В группе `Dense, Inverse & Companion Integration` нажать кнопку `Companion Button Loading`.
  2. Проверить появление встроенного `.d1-button__loading.d1-progress--circular` и блокировку повторных кликов.
- **Ожидаемый результат**: `D1Button` отображает встроенный `D1Progress`, а `DemoValue` показывает `true`.
- **Тип доказательства**: `Console/Log`

### 2.3 Граничные случаи (`BND`)

#### [TC-BND-001] Граничные числовые значения (`value="0"`, `value="-10"`, `max="0"`, `value > max`, дробные, строковые)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-progress`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группам `Values, Max & Data Formats` и `Boundary & Edge Cases`.
  2. Проверить `value="0"` (`aria-valuenow="0"`, `--d1-progress-sys-value: 100%`), `value="150"` при `max="100"` (`aria-valuenow="100"`, `--d1-progress-sys-value: 0%`), `value="-10"` (`role="status"`, класс `--value` отсутствует) и `max="0"` (`aria-valuemax="1"`).
- **Ожидаемый результат**: Ноль трактуется как определённое значение (`progressbar`), отрицательное `value` переключает компонент в `status`, а `max <= 0` безопасно заменяется на `1`.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-002] Пустые строки, пробелы и XSS-полезная нагрузка в `ariaLabel`
- **Приоритет**: `P2 (Medium)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-progress`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить элементы с `aria-label=""`, `aria-label="   "` и `aria-label="<img src=x onerror=alert(1)> Tiếng Việt 🚀"` в группе `Boundary & Edge Cases`.
- **Ожидаемый результат**: XSS-строка экранирована как обычный текст атрибута `aria-label`, скрипты не выполняются.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-003] Ограниченный узкий контейнер (`max-width: 240px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-progress`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить линейный и круговой `D1Progress` внутри `.demo-progress-page__narrow` (`max-width: 240px`).
  2. Проверить `scrollWidth <= clientWidth` у контейнера и дочерних элементов.
- **Ожидаемый результат**: Индикаторы корректно масштабируются в пределах `240px` без горизонтального переполнения.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

### 2.4 Адаптивность (`RSP`)

#### [TC-RSP-001] Планшетный вьюпорт (`768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Установить вьюпорт `768×1024`.
- **Шаги теста**:
  1. Проверить `document.documentElement.scrollWidth <= window.innerWidth`.
  2. Проверить размещение сеток с линейными и круговыми индикаторами.
- **Ожидаемый результат**: Горизонтальное переполнение отсутствует; все элементы видимы и не накладываются друг на друга.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Мобильные вьюпорты (`375×812` и `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Установить вьюпорты `375×812` и `320×568`.
- **Шаги теста**:
  1. Проверить `document.documentElement.scrollWidth <= window.innerWidth` на обоих разрешениях.
  2. Проверить отсутствие обрезания кнопок управления и индикаторов.
- **Ожидаемый результат**: Отсутствует горизонтальная прокрутка страницы, индикаторы сохраняют пропорции.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантические роли (`progressbar` vs `status`), ARIA-атрибуты и `textLoading`
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-progress`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить группу `Accessibility (Roles & Labels)`.
  2. Убедиться, что при наличии `value` установлен `role="progressbar"` и `aria-valuemin="0"`, `aria-valuemax`, `aria-valuenow`.
  3. Убедиться, что без `value` установлен `role="status"` и `aria-label` соответствует строке `textLoading`, функции `textLoading` или `ariaLabel`, а внутренние `<circle>` имеют `aria-hidden="true"`.
- **Ожидаемый результат**: Все ARIA-атрибуты и роли соответствуют стандарту WAI-ARIA.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] SSR (`clientOnly`), жизненный цикл (`v-if`) и чистота консоли
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Открыть `http://localhost:3000/component-progress`, очистить консоль.
- **Шаги теста**:
  1. Переключить кнопку `Toggle Mount` в группе `SSR & Lifecycle (clientOnly & v-if)` несколько раз (включая быстрое размонтирование во время задержки таймера).
  2. Проверить рендеринг элементов с `clientOnly="false"` и `clientOnly="true"`.
  3. Проверить список сообщений консоли и ошибок страницы.
- **Ожидаемый результат**: Таймеры корректно очищаются при размонтировании; `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`.
- **Тип доказательства**: `Console/Log`
