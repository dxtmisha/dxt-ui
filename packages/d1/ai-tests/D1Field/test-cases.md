# Спецификация тест-кейсов: D1Field

- **Сущность:** `D1Field`
- **Путь к исходному коду:** `packages/d1/src/components/Ui/Field` (`packages/constructor/src/constructors/Field`)
- **Целевой URL:** `http://localhost:3000/component-field`
- **Справочные материалы:** `Нет`
- **Последняя проверка / обновление:** `2026-11-25`
- **Всего тест-кейсов:** `16`

---

## 1. Матрица покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуальное соответствие и токены** | `VIS` | 4 | P0, P1 | 6 стилей (`classic`, `basic`, `boxed`, `tonal`, `filled`, `outlined`), размеры (`sm`–`display`), ширины (`260px`/`custom`/`block`), 24 палитры, тёмная тема, иконки/модификаторы, `loading` (boolean и объект), `is-skeleton`, `warning` и приоритет `validation > warning` |
| **Интерактивность и функциональность** | `INT` | 5 | P0, P1 | Интерактивные переключатели, ввод/очистка (`cancel="auto|always|none"`), `@click` и `@clickLite` (`detail`/`index`/`value`), `FieldSize`, слоты и scoped-биндинги (`FieldControl`), делегированные `*Attrs`, `disabled`/`readonly`, `href`, форма и `v-if` |
| **Границы и крайние случаи** | `BND` | 3 | P1, P2 | `disabled` vs `forceShowMessage`, `hasHtmlCode`, `align="left|center|right"`, многоязычность и `dir="rtl"`, `""`/`"   "`/`0`/`"A"`/длинный текст/XSS/узкий контейнер `240px` |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Корректная геометрия без переполнения на `1440×900`, `768×1024`, `375×812`, `320×568` |
| **Доступность (A11y)** | `A11Y` | 2 | P1 | Теги `div`/`label[for]`, `aria-invalid`, `aria-describedby` (`labelId`/`prefixId`/`suffixId`/`helperId`/`counterId`/`validationId`), `captionDecorative`, клавиатурная навигация `Tab` и `Enter` |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие `console.error`, `pageerror` и `[Vue warn]` |

---

## 2. Подробные тест-кейсы

### 2.1 Визуальное соответствие и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг всех вариантов стиля (`classic`, `basic`, `boxed`, `tonal`, `filled`, `outlined`)
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Визуальное соответствие`
- **Предусловия:** Открыть `http://localhost:3000/component-field`, вьюпорт `1440×900`, светлая тема.
- **Шаги тестирования:**
  1. Найти группу `Visual Styles (All 6)`.
  2. Проверить классы `.d1-field--classic`, `.d1-field--basic`, `.d1-field--boxed`, `.d1-field--tonal`, `.d1-field--filled`, `.d1-field--outlined` и отсутствие наложений между лейблом, полем ввода и рамкой.
- **Ожидаемый результат:** Все 6 вариантов отображаются корректно с соответствующими цветами, границами и скруглениями.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Размеры (`sm`–`display`), ширина (`260px`, `custom`, `block`), все 24 палитры и тёмная тема
- **Приоритет:** `P1 (High)`
- **Категория:** `Визуальное соответствие`
- **Предусловия:** Открыть группы `Sizes (All 4), Width & Alignments` и `Palettes (All 24)`.
- **Шаги тестирования:**
  1. Проверить прогрессию высот `sm` < `md` < `lg` < `display`, ширины `260px`, `custom` (`--d1-field-sys-width: 320px`) и `block` (`100%`).
  2. Проверить все 24 палитры и переключение страницы в тёмную тему (`.d1-dark`).
- **Ожидаемый результат:** Высоты, ширины и все 24 палитры соответствуют токенам; в тёмной теме сохраняется контрастность.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Иконки, модификаторы, стрелки, загрузка (`boolean`/`object`) и `is-skeleton`
- **Приоритет:** `P1 (High)`
- **Категория:** `Визуальное соответствие`
- **Предусловия:** Проверить группы `Icons, Cancel & Arrows`, `States & Validation` и `Slots, Scoped Bindings & Skeleton`.
- **Шаги тестирования:**
  1. Проверить `icon`, `iconTrailing`, `iconTurn`, `iconDir`, `iconPalette`, `iconAttrs`, `iconHide`, `iconTrailingTurnOnly`/`DirOnly`/`Palette`, `:icon-trailing="null"`.
  2. Проверить `cancel` (`auto`, `always`, `none`), `arrowCarousel`, `arrowStepper`, `loading` (boolean и object) и `is-skeleton`.
- **Ожидаемый результат:** Все элементы `scoreboard` корректно упорядочены, а при `is-skeleton` контент скрывается классами скелетона.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Неблокирующее состояние `warning` и приоритет `validation > warning`
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Визуальное соответствие`
- **Предусловия:** Открыта группа `States & Validation`, блок `[data-testid="warning-field-box"]`.
- **Шаги тестирования:**
  1. Проверить карточки `Warning (Highlight Only)`, `Warning Message`, `Tonal Warning` и `Validation Priority Over Warning`.
  2. Убедиться, что при конфликте `warning + validationMessage` побеждает `.d1-field--validation` с `aria-invalid="true"`.
- **Ожидаемый результат:** Подсветка и текст `warning` корректны, при наличии ошибки валидации приоритет остаётся за `validation`.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-VIS-004.png`)

### 2.2 Интерактивность и функциональность (`INT`)

#### [TC-INT-001] Реактивное переключение состояний и стилей в интерактивном стенде
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Интерактивность`
- **Предусловия:** Прокрутить к группе `Interactive Controls, Events & Href`.
- **Шаги тестирования:**
  1. Последовательно нажать `Style`, `Focus`, `Selected`, `Disabled`, `Readonly`, `Loading`, `Warning`, `Validation`, `Force Show`, `Skeleton`, `Counter Top`.
  2. Проверить классы в `[data-testid="interactive-field-box"]` и JSON-сводку `State`.
- **Ожидаемый результат:** Все состояния переключаются реактивно без визуальных артефактов.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Ввод значения, кнопка `cancel`, события `@click`/`@clickLite` и расчёт `FieldSize`
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Интерактивность`
- **Предусловия:** Интерактивное поле содержит `Hello Field`.
- **Шаги тестирования:**
  1. Ввести новый текст в `<input>` внутри `[data-testid="interactive-field-box"]`.
  2. Нажать кнопку очистки `[data-event-type="cancel"]`.
  3. Проверить очистку `input.value`, отображение `Event Name` и `Event Payload` (`click` / `clickLite` с `detail`, `value`, `type: "cancel"`), а также CSS-переменные `--d1-field-sys-left`, `--d1-field-sys-right`, `--d1-field-sys-title` и класс `d1-field--show`.
- **Ожидаемый результат:** Значение очищается, события `click` и `clickLite` фиксируются, `FieldSize` вычисляет непустые отступы.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Слоты, scoped-биндинги `FieldControl`, `counterTop` и делегированные `*Attrs`
- **Приоритет:** `P1 (High)`
- **Категория:** `Интерактивность`
- **Предусловия:** Открыты группы `Prefix, Suffix, Caption, Counter & Delegated Attrs` и `Slots, Scoped Bindings & Skeleton`.
- **Шаги тестирования:**
  1. Проверить `#label`, `#leading`, `#prefix`, `#default` (и `[data-slot-classes]`), `#suffix`, `#caption`, `#trailing`.
  2. Проверить проброс `fieldLabelAttrs`, `fieldMessageAttrs`, `fieldCounterAttrs` по `data-testid` и позицию счётчика при `counter-top`.
- **Ожидаемый результат:** Все слоты, scoped-параметры и делегированные атрибуты корректно отрендерены.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Блокировка событий в `disabled`/`readonly` и режим ссылки `href`
- **Приоритет:** `P1 (High)`
- **Категория:** `Интерактивность`
- **Предусловия:** Открыта группа `Blocked & Guarded Actions` и карточка `Link Href Field`.
- **Шаги тестирования:**
  1. Кликнуть по заблокированным `disabled` и `readonly` полям и проверить `Blocked Click Count`.
  2. Проверить наличие `href="#demo-field-href-anchor"` в разметке/привязке.
- **Ожидаемый результат:** Для `disabled` поля `Blocked Click Count` остаётся `0`, `readonly` скрывает кнопку `cancel`.
- **Тип подтверждения:** `Console/Log`

#### [TC-INT-005] Интеграция с `<form>` и жизненный цикл `v-if`
- **Приоритет:** `P1 (High)`
- **Категория:** `Интерактивность`
- **Предусловия:** Открыты группы `Form Integration` и `Lifecycle & Conditional Mount`.
- **Шаги тестирования:**
  1. Ввести email в `#demo-field-form`, нажать `Submit Form`, затем `Reset Form`.
  2. Нажать `Toggle Mount` дважды и проверить корректный вызов `onUnmounted` / повторное монтирование `FieldSize`.
- **Ожидаемый результат:** Форма корректно отправляется и сбрасывается; условное монтирование/размонтирование проходит без утечек и ошибок.
- **Тип подтверждения:** `Console/Log`

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] `disabled` vs `forceShowMessage`, `hasHtmlCode`, выравнивания `left`/`center`/`right`
- **Приоритет:** `P1 (High)`
- **Категория:** `Граничные случаи`
- **Предусловия:** Открыта страница компонента.
- **Шаги тестирования:**
  1. Сравнить `Disabled` и `Disabled + Force Show Message`.
  2. Проверить наличие `<strong>` при `has-html-code` и выравнивание `left`, `center`, `right`.
- **Ожидаемый результат:** При `disabled` сообщение скрыто без `forceShowMessage`; при `align="center"` подпись `caption` скрывается; выравнивание и HTML-подсказка работают корректно.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Многоязычность и RTL (`dir="rtl"`)
- **Приоритет:** `P1 (High)`
- **Категория:** `Граничные случаи`
- **Предусловия:** Открыта группа `Boundary, RTL & Edge Cases`.
- **Шаги тестирования:**
  1. Найти контейнер `[dir="rtl"] .d1-field`.
  2. Проверить `direction: rtl`, отображение `رقم الهاتف — Học tiếng Việt / Кириллица 🚀`, `+84`, `VN` и отсутствие наложений.
- **Ожидаемый результат:** Многоязычный текст, Emoji и RTL-расположение префикса/суффикса отображаются чисто.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-BND-002.png`)

#### [TC-BND-003] Пустые значения, `0`, длинный текст, XSS и узкий контейнер `240px`
- **Приоритет:** `P1 (High)`
- **Категория:** `Граничные случаи`
- **Предусловия:** Открыта группа `Boundary, RTL & Edge Cases`.
- **Шаги тестирования:**
  1. Проверить поля с `label=""`, `label="   "`, `:label="0"`/`:prefix="0"`/`:suffix="0"`/`:caption="0"`/`:value="0"`, `"A"`, длинным текстом, `<img src=x onerror=alert(1)>` и узким контейнером `.demo-field-page__narrow` (`240px`).
- **Ожидаемый результат:** Нулевые значения отображаются корректно, XSS-строка экранируется, узкий контейнер не вызывает горизонтального переполнения.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-BND-003.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптация на разрешениях `1440×900`, `768×1024`, `375×812`, `320×568`
- **Приоритет:** `P1 (High)`
- **Категория:** `Адаптивность`
- **Предусловия:** Страница загружена.
- **Шаги тестирования:**
  1. Изменить размер вьюпорта последовательно на `1440×900`, `768×1024`, `375×812`, `320×568`.
  2. Проверить `scrollWidth <= innerWidth` и отсутствие обрезания `.d1-field`.
- **Ожидаемый результат:** Горизонтальная прокрутка отсутствует на всех 4 разрешениях.
- **Тип подтверждения:** `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантика тегов (`div`/`label[for]`), `aria-invalid`, `aria-describedby` и `captionDecorative`
- **Приоритет:** `P1 (High)`
- **Категория:** `Доступность`
- **Предусловия:** Открыта группа `Accessibility (ARIA, IDs & Keyboard)`.
- **Шаги тестирования:**
  1. Проверить, что `classic` рендерится как `<div>`, а `outlined`/`filled`/`tonal`/`boxed`/`basic` — как `<label for="...">`.
  2. Проверить `aria-describedby` в `#demo-field-a11y` (объединение `prefixId`, `suffixId`, `labelId`, `helperId`, `counterId`) и `aria-invalid="true"` при `validationMessage`.
  3. Проверить `aria-hidden="true"` при `captionDecorative`.
- **Ожидаемый результат:** Все ARIA-связи валидны, теги соответствуют режиму стиля.
- **Тип подтверждения:** `Console/Log`

#### [TC-A11Y-002] Клавиатурный фокус (`Tab`) и активация клавишей `Enter`
- **Приоритет:** `P1 (High)`
- **Категория:** `Доступность`
- **Предусловия:** Открыта страница компонента.
- **Шаги тестирования:**
  1. Перевести фокус клавишей `Tab` на поле и на кнопки в `scoreboard`, проверить видимое кольцо фокуса (`:focus-visible`).
- **Ожидаемый результат:** Фокус перемещается предсказуемо, `:focus-visible` рамка видима.
- **Тип подтверждения:** `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Проверка консоли, исключений страницы и предупреждений Vue
- **Приоритет:** `P0 (Critical)`
- **Категория:** `Консоль и рантайм`
- **Предусловия:** Очистить счётчики сообщений консоли до начала проверок.
- **Шаги тестирования:**
  1. Выполнить все сценарии `VIS`, `INT`, `BND`, `RSP`, `A11Y`.
  2. Проверить собранные `pageerror`, `console.error` и `[Vue warn]`.
- **Ожидаемый результат:** Ноль ошибок JS, сетевых сбоев и предупреждений Vue.
- **Тип подтверждения:** `Console/Log`
