# Спецификация тест-кейсов: `D1Scrollbar`

- **Сущность**: `D1Scrollbar` (`Scrollbar`)
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Scrollbar` (конструктор: `packages/constructor/src/constructors/Scrollbar`)
- **Целевой URL**: `http://localhost:3000/component-scrollbar`
- **Справочные материалы**: `Нет`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `14`

---

## 1. Матрица покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 3 | P0, P1 | Базовый скролл-контейнер, `visible`, `standard`, `tag` (`section`/`article`), разделители `divider`/`dividerTop`/`dividerBottom`/`inverse`/`dividerHide` |
| **Интерактив и функциональность** | `INT` | 4 | P0, P1 | Прокрутка вверх/середина/низ и обновление `data-top`/`data-bottom`/`data-scrollbar-divider`, `inverse` инверсия границ, динамическое переключение всех пропсов, все 7 граничных событий |
| **Границы и крайние случаи** | `BND` | 3 | P1, P2 | Пустой контент, короткий контент без переполнения, `0`, многоязычие/XSS и неразрывный текст `AAAA...` в узком контейнере `240px` |
| **Адаптивность и вьюпорты** | `RSP` | 2 | P1, P2 | Планшет (`768×1024`) и мобильный (`375×812`, `320×568`), отсутствие горизонтального переполнения |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | Область прокрутки с `tag="section"`, `role="region"`, `aria-label`, `tabindex="0"` и клавиатурная прокрутка (`ArrowDown`/`PageDown`) |
| **Консоль и рантайм** | `LOG` | 1 | P0 | События `top`, `bottom`, `reachTop`, `reachBottom`, `leaveTop`, `leaveBottom`, `edge` и их аргументы, жизненный цикл `v-if` (очистка `EventItem`), `0` ошибок консоли и `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг, `visible` и `standard`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-scrollbar`, вьюпорт `1440×900`, светлая тема.
- **Шаги теста**:
  1. Прокрутить к группам `Basic Usage`, `Always Visible Content (visible)` и `Native Browser Engine (standard)`.
  2. Проверить наличие классов `.d1-scrollbar`, `.d1-scrollbar--visible` (`height: auto`, `overflow-y: visible`) и `.d1-scrollbar--standard`.
- **Ожидаемый результат**: В `Basic Usage` контейнер имеет высоту `160px` и вертикальную прокрутку; при `visible` контент раскрывается полностью без обрезания; при `standard` сохраняется нативный скроллбар браузера.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Разделители границ (`dividerTop`, `dividerBottom`, `inverse`, `dividerHide`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-scrollbar`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группам `Dynamic Dividers (dividerTop & dividerBottom)`, `Individual Dividers`, `Dynamic Dividers (inverse)` и `Hidden Dividers (dividerHide)`.
  2. Проверить наличие `data-top`, `data-bottom`, `data-scrollbar-divider` и CSS-псевдоэлементов `::before` / `::after` (при `dividerHide` `content: none`).
- **Ожидаемый результат**: В начальном положении сверху `data-top="none"`, `data-bottom="bottom"`; при `dividerHide` разделители визуально подавлены даже при активном отслеживании.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Пользовательский тег контейнера (`tag`: `section`, `article`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-scrollbar`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить к группе `Custom Container Tag (tag)`.
  2. Проверить фактический `tagName` корневых элементов `.d1-scrollbar`.
- **Ожидаемый результат**: Элементы рендерятся с тегами `<SECTION>` и `<ARTICLE>` вместо стандартного `<DIV>`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

### 2.2 Интерактивность и управление состоянием (`INT`)

#### [TC-INT-001] Переключение `data-top` / `data-bottom` при прокрутке с `dividerTop` и `dividerBottom`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-scrollbar`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить контейнер в группе `Dynamic Dividers (dividerTop & dividerBottom)` в середину (`scrollTop > 8`), затем в самый низ (`scrollTop >= scrollHeight - clientHeight - 8`).
  2. Проверить изменение атрибутов `data-top`, `data-bottom` и `data-scrollbar-divider`.
- **Ожидаемый результат**: В середине оба атрибута активны (`data-top="top"`, `data-bottom="bottom"`), в самом низу `data-bottom` переходит в `"none"`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Инвертированная логика разделителей (`inverse`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-scrollbar`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Прокрутить контейнер в группе `Dynamic Dividers (inverse)` в середину (`data-top="top"`, `data-bottom="bottom"`).
  2. Проверить CSS-переменные прозрачности верхней и нижней границ.
- **Ожидаемый результат**: При прокрутке в середину (когда активны оба атрибута) обе границы скрываются; на крайних позициях показывается соответствующая граница.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-003] Динамическое переключение всех пропсов (`divider`, `dividerTop`, `dividerBottom`, `dividerHide`, `inverse`, `visible`, `standard`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-scrollbar`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. В группе `Dynamic Prop Toggles` поочерёдно нажимать кнопки переключения флагов.
  2. Проверить обновление классов `.d1-scrollbar--*`, атрибутов `data-scrollbar-divider` и значений в `DemoValue`.
- **Ожидаемый результат**: Реактивные наблюдатели `ScrollbarBorder` запускают и останавливают отслеживание при изменении пропсов без ошибок.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-004] Интерактивное управление прокруткой кнопками (`Scroll to Top` / `Middle` / `Bottom`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-scrollbar`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. В группе `Interactive Controls & Boundary Events` нажать `Scroll to Bottom`, затем `Scroll to Middle`, затем `Scroll to Top`.
  2. Проверить изменение `scrollTop`, `Scroll Position`, `Event Name` и `Event Payload`.
- **Ожидаемый результат**: Контейнер плавно/точно перемещается к целевым позициям, а `DemoValue` отображает позицию и сработавшие граничные события.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-004.png`)

### 2.3 Граничные случаи (`BND`)

#### [TC-BND-001] Пустой контент и короткий контент без переполнения
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-scrollbar`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. В группе `Boundary & Edge Cases` проверить контейнеры `Empty Content` и `Short Content (No Overflow)`.
  2. Проверить `scrollHeight <= clientHeight` и атрибуты `data-top="none"`, `data-bottom="none"`.
- **Ожидаемый результат**: При отсутствии переполнения разделители не активируются (`data-scrollbar-divider="none"`).
- **Тип доказательства**: `Console/Log`

#### [TC-BND-002] Числовой `0`, многоязычие и XSS-строка внутри слота `default`
- **Приоритет**: `P2 (Medium)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-scrollbar`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. В группе `Boundary & Edge Cases` проверить отображение `0`, `Tiếng Việt / Кириллица / 🚀 & <>` и `<img src=x onerror=alert(1)>`.
- **Ожидаемый результат**: Все символы и XSS-строка отображаются как безопасный текст без выполнения скрипта.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-003] Неразрывная строка (`AAAA...`) в узком контейнере (`max-width: 240px`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-scrollbar`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить контейнер `.demo-scrollbar-page__narrow` (`max-width: 240px`) и наличие `overflow-x: hidden`.
  2. Проверить `scrollWidth <= clientWidth` у узкого `DemoBox` и `D1Scrollbar`.
- **Ожидаемый результат**: Неразрывный текст переносится без горизонтального переполнения.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

### 2.4 Адаптивность (`RSP`)

#### [TC-RSP-001] Планшетный вьюпорт (`768×1024`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Установить вьюпорт `768×1024`.
- **Шаги теста**:
  1. Проверить `document.documentElement.scrollWidth <= window.innerWidth`.
  2. Проверить размещение двухколоночных групп `Individual Dividers` и `Custom Container Tag`.
- **Ожидаемый результат**: Горизонтальное переполнение отсутствует; колонки корректно адаптируются.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

#### [TC-RSP-002] Мобильные вьюпорты (`375×812` и `320×568`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Установить вьюпорты `375×812` и `320×568`.
- **Шаги теста**:
  1. Проверить `document.documentElement.scrollWidth <= window.innerWidth` на обоих разрешениях.
  2. Проверить доступность и читаемость скроллируемых областей и кнопок управления.
- **Ожидаемый результат**: Горизонтальное переполнение отсутствует на обоих мобильных разрешениях.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-002.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантическая область прокрутки (`role="region"`, `aria-label`, `tabindex="0"`) и клавиатурная навигация
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility (A11y)`
- **Предусловия**: Открыть `http://localhost:3000/component-scrollbar`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. В группе `Accessibility (Keyboard Scroll Region)` сфокусировать область клавишей `Tab`.
  2. Нажать `ArrowDown` и `PageDown`, проверяя увеличение `scrollTop`.
- **Ожидаемый результат**: Сфокусированный регион с `role="region"` и `aria-label="Scrollable release notes"` прокручивается с клавиатуры.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Все 7 граничных событий, жизненный цикл `v-if` и чистота консоли
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Открыть `http://localhost:3000/component-scrollbar`, очистить консоль.
- **Шаги теста**:
  1. Прокрутить интерактивный контейнер к середине, низу и верху, проверив фиксацию событий `top`, `bottom`, `reachTop`, `reachBottom`, `leaveTop`, `leaveBottom`, `edge` и их аргументов в консоли / `DemoValue`.
  2. Переключить `Toggle Mount` в группе `Lifecycle & Conditional Mount` (размонтировать и снова смонтировать `D1Scrollbar`).
  3. Проверить список сообщений консоли и ошибок страницы.
- **Ожидаемый результат**: Обработчики `EventItem` корректно отписываются при размонтировании; `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`.
- **Тип доказательства**: `Console/Log`
