# Спецификация тест-кейсов: D1Field

- **Сущность**: `D1Field`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Field` (`packages/constructor/src/constructors/Field`)
- **Целевой URL**: `http://localhost:3000/component-field`
- **Справочные материалы**: `Отсутствуют`
- **Дата последней проверки / обновления**: `2026-11-21`
- **Всего тест-кейсов**: `12`

---

## 1. Обзорная матрица покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :---: | :--- | :--- |
| **Визуал и токены** | `VIS` | 4 | P0, P1 | Варианты стилей (`classic`, `basic`, `boxed`, `tonal`, `filled`, `outlined`), размеры, палитры, тёмная тема, иконки, скелетон, состояние предупреждения (`warning`, `tonal + warning`, приоритет `validation > warning`) |
| **Интерактивность и функционал** | `INT` | 3 | P0, P1 | Переключение состояний (включая `warning` и приоритет `validation`), ввод и очистка (`cancel`), пересчёт `FieldSize`, слоты (`leading`/`trailing` с `FieldControl`), `counterTop` |
| **Границы и крайние случаи** | `BND` | 2 | P1, P2 | `disabled`/`forceShowMessage`, `hasHtmlCode`, выравнивание, многоязычность (вьетнамский, кириллица, арабский, Emoji), RTL |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Корректная геометрия без переполнения на `1440×900`, `768×1024`, `375×812`, `320×568` |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | Теги `div`/`label[for]`, `aria-invalid`, `aria-describedby`, видимость фокуса и клавиатурная навигация |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Отсутствие `console.error`, `pageerror` и `[Vue warn]` при всех сценариях |

---

## 2. Подробные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)

#### [TC-VIS-001] Базовый рендеринг всех вариантов стиля (`classic`, `basic`, `boxed`, `tonal`, `filled`, `outlined`)
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-field`, вьюпорт `1440×900`, светлая тема.
- **Шаги теста**:
  1. Найти секцию `Visual Styles`.
  2. Проверить наличие модификаторов `.d1-field--classic`, `.d1-field--basic`, `.d1-field--boxed`, `.d1-field--tonal`, `.d1-field--filled`, `.d1-field--outlined`, а также отсутствие наложений между лейблом, полем ввода и рамкой.
- **Ожидаемый результат**: Все 6 вариантов отображаются корректно с соответствующими классами, цветами, границами и скруглениями.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Размеры (`sm`, `md`, `lg`, `display`), ширина (`260px`, `block`), палитры и тёмная тема
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-field`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Найти секцию `Sizes, Width & Palettes`.
  2. Сравнить высоты полей `sm` < `md` < `lg` < `display`, ширины `260px` и `block` (`100%`), а также палитры `emerald` и `violet`.
  3. Переключить страницу в тёмную тему (`.d1-dark`) и проверить читаемость текста, лейблов и границ.
- **Ожидаемый результат**: Высоты и ширины соответствуют токенам; палитры и тёмная тема сохраняют контрастность.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Иконки, стрелки навигации, загрузка и состояние `is-skeleton`
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-field`, вьюпорт `1440×900`.
- **Шаги теста**:
  1. Проверить секции `Icons, Cancel & Arrows`, `States & Validation` (`loading`) и `Slots & Skeleton`.
  2. Убедиться, что отображаются `icon`, `icon-trailing`, `icon-turn`, кнопка `cancel`, стрелки `arrowCarousel` и `arrowStepper`, индикатор загрузки и скелетон.
- **Ожидаемый результат**: Все элементы `scoreboard` корректно упорядочены, не перекрывают значение поля ввода, а `d1-skeleton__background` / `d1-skeleton__text` скрывают контент при активном скелетоне.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

#### [TC-VIS-004] Неблокирующее состояние предупреждения (`warning`, `warningMessage`, `tonal + warning`) и приоритет `validation > warning`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-field`, вьюпорт `1440×900`, светлая тема.
- **Шаги теста**:
  1. Найти блок `[data-testid="warning-field-box"]` в секции `States & Validation`.
  2. Проверить 4 карточки: `Warning (Highlight Only)`, `Warning Message`, `Tonal Warning` и `Validation Priority Over Warning`.
  3. Убедиться, что на карточках предупреждения активен `.d1-field--warning` без `.d1-field--validation` и без `aria-invalid`, а на карточке с конфликтом `warning + validationMessage` побеждает `.d1-field--validation` с `aria-invalid="true"`.
- **Ожидаемый результат**: Подсветка `warning` (включая `tonal`) и текст предупреждения отображаются корректно; при наличии ошибки валидации приоритет всегда остаётся за `validation`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-004.png`)

### 2.2 Интерактивность и функционал (`INT`)

#### [TC-INT-001] Реактивное переключение состояний и стилей в `Interactive & Multilingual`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-field`, прокрутить к группе `Interactive & Multilingual`.
- **Шаги теста**:
  1. Последовательно нажимать кнопки `Style`, `Focus`, `Selected`, `Disabled`, `Readonly`, `Loading`, `Warning`, `Validation`, `Force Show`, `Skeleton`, `Counter Top`.
  2. Проверять соответствующие классы и атрибуты в `[data-testid="interactive-field-box"]` и JSON-сводке `State`.
- **Ожидаемый результат**: Все состояния (включая переключение `warning` -> `validation` и обратно) переключаются реактивно без задержек и артефактов разметки.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Ввод значения, очистка кнопкой `cancel`, событие `@click` и динамический расчёт `FieldSize`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Интерактивное поле в состоянии по умолчанию (`interactiveValue = "Hello Field"`).
- **Шаги теста**:
  1. Ввести новый текст в `<input>` внутри `[data-testid="interactive-field-box"]`.
  2. Нажать на кнопку очистки (`[data-event-type="cancel"]`).
  3. Проверить очистку `input.value`, обновление `Last Event` (`cancel:...`), возврат фокуса в `input` и наличие CSS-переменных `--d1-field-sys-left`, `--d1-field-sys-right`, `--d1-field-sys-title` и класса `d1-field--show`.
- **Ожидаемый результат**: Поле очищается, фокус возвращается на ввод, `Last Event` фиксирует `cancel:`, а `FieldSize` вычисляет непустые отступы.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Проекция слотов, `prefix`, `suffix`, `caption` и `counterTop`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-field`.
- **Шаги теста**:
  1. Проверить секции `Prefix, Suffix, Caption & Counter` и `Slots & Skeleton`.
  2. Убедиться в отображении `#label`, `#leading`, `#prefix`, `#default`, `#suffix`, `#caption`, `#trailing`, `#helper` и верхнего счётчика при `counter-top`.
- **Ожидаемый результат**: Все слоты и вспомогательные элементы корректно отрендерены в своих позициях.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Граничные состояния (`disabled` vs `forceShowMessage`, `hasHtmlCode`, `align="center|right"`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-field`.
- **Шаги теста**:
  1. Сравнить карточки `Disabled` и `Disabled + Force Show Message`.
  2. Проверить наличие тега `<strong>` при `has-html-code` в секции `Counter Bottom + HTML Helper`.
  3. Проверить выравнивание текста `center` и `right` у карточек `Stepper`.
- **Ожидаемый результат**: Ошибка валидации скрыта при `disabled` и отображается при `forceShowMessage`; выравнивание и HTML-подсказка работают корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Многоязычность (вьетнамский, кириллица, арабский, Emoji) и RTL (`dir="rtl"`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-field`, прокрутить к RTL-карточке.
- **Шаги теста**:
  1. Найти контейнер `[dir="rtl"] .d1-field`.
  2. Проверить `direction: rtl`, отображение текста `رقم الهاتف — Học tiếng Việt`, `+84`, `VN`, `Поддержка RTL и многоязычного текста 🚀` и отсутствие наложения префикса/суффикса на ввод.
- **Ожидаемый результат**: Многоязычный текст, Emoji и RTL-расположение префикса/суффикса отображаются чисто без наложений.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-002.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)

#### [TC-RSP-001] Адаптация на разрешениях `1440×900`, `768×1024`, `375×812`, `320×568`
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Открыть `http://localhost:3000/component-field`.
- **Шаги теста**:
  1. Изменить размер вьюпорта последовательно на `1440×900`, `768×1024`, `375×812`, `320×568`.
  2. Проверить отсутствие горизонтального переполнения страницы и выходных границ экземпляров `.d1-field`.
- **Ожидаемый результат**: Компонент корректно помещается в ширину вьюпорта без горизонтальной прокрутки и обрезания.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] Семантика тегов (`div`/`label[for]`), `aria-invalid`, `aria-describedby` и фокус
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility`
- **Предусловия**: Открыть `http://localhost:3000/component-field`.
- **Шаги теста**:
  1. Проверить, что `classic` рендерится как `<div>`, а `outlined`/`filled`/`tonal`/`boxed`/`basic` — как `<label for="...">`.
  2. Проверить у поля с ошибкой валидации `aria-invalid="true"` и непустой `aria-describedby`, указывающий на реально существующие ID в DOM.
  3. Проверить перевод фокуса клавишей `Tab` и фокус на поле.
- **Ожидаемый результат**: Все ARIA-связи валидны, теги соответствуют режиму, клавиатурная фокусировка работает.
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Проверка консоли, исключений страницы и предупреждений Vue
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Очистить счётчики сообщений консоли и открыть `http://localhost:3000/component-field`.
- **Шаги теста**:
  1. Провести все сценарии `VIS`, `INT`, `BND`, `RSP`, `A11Y`.
  2. Проверить собранные `pageerror`, `console.error` и `[Vue warn]`.
- **Ожидаемый результат**: Ноль ошибок JS и предупреждений Vue на протяжении всех сценариев.
- **Тип доказательства**: `Console/Log`
