# Отчёт визуального и функционального тестирования: D1Input

## 1. Итоговая сводка

- **Компонент:** `D1Input` (`@dxtmisha/d1`)
- **Исходный код:** [`D1Input`](packages/d1/src/components/Ui/Input), [`Input`](packages/constructor/src/constructors/Input), [`DemoInputPage.vue`](packages/demo/src/pages/components/DemoInputPage.vue)
- **Демо / Целевой URL:** `http://localhost:3000/component-input`
- **Материалы:** `None`
- **Дата тестирования (UTC):** `2026-11-22T11:14:15Z`
- **Окружение:** `Headless Chrome (CDP 127.0.0.1:9222, Desktop 1440x900, Laptop 1024x768, Tablet 768x1024, Mobile 375x812 / 320x568)`
- **Покрытие тест-кейсов:** 17 / 17 (`100%`)
- **Итог:** **17 ✅, 0 ⚠️, 0 ❌** (`✅` пройдено, `⚠️` предупреждение, `❌` не пройдено) — компонент `D1Input` стабильно рендерится во всех оформлениях, размерах и состояниях (включая `warning`/`warningMessage` с приоритетом валидации над предупреждением), все поддерживаемые типы `FieldType`, события `focus`/`blur`/`input`/`change`, экспонируемый метод `isChanged()` и индивидуальные сценарии ввода/форматирования/валидации работают без ошибок консоли, гидратации и сети.

---

## 2. Базовая матрица

### 2.1 Визуальный рендеринг (`VIS`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-VIS-001` | Варианты внешнего вида, ширина (`width`), `block` и палитра (`field-attrs`) | ✅ | Отрисованы 9 конфигураций (`classic`, `filled`, `outlined`, `tonal`, `boxed`, `basic`, `width="240px"`, `block`, `palette: 'blue'`); измеренная ширина `.d1-field` для `width="240px"` составила `240px`, `hasBlockClass=true`, `hasBlueClass=true`. | ![TC-VIS-001](./screenshots/TC-VIS-001.png) |
| `TC-VIS-002` | Размеры (`sm`, `md`, `lg`, `display`) и выравнивание (`align`) | ✅ | Измеренная высота `.d1-field__body`: `sm=32px`, `md=48px`, `lg=64px`, `display=72px`; вычисленный `text-align` на `<input>`: `left`, `center`, `right`. | ![TC-VIS-002](./screenshots/TC-VIS-002.png) |
| `TC-VIS-003` | Иконки, индикаторы загрузки (`loading`) и слоты | ✅ | Отображаются 8 иконок (`icon`, `icon-trailing`, `icon-attrs`), 2 индикатора прогресса (`loading` boolean и `{ visible: true, value: 65, max: 100 }`), а также все 6 слотов (`[Lead]`, `[Trail]`, `https://`, `.dev`, `Note`, `Custom`). | ![TC-VIS-003](./screenshots/TC-VIS-003.png) |
| `TC-VIS-004` | Состояния (`disabled`, `readonly`, `focus`, `selected`, `is-skeleton`) | ✅ | `disabledAttr=true`, `readonlyAttr=true`, присутствуют классы `.d1-field--focus`, `.d1-field--selected` и активная заглушка `.d1-skeleton--active`. | ![TC-VIS-004](./screenshots/TC-VIS-004.png) |

### 2.2 Интерактивность и управление состоянием (`INT`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-INT-001` | Индивидуальная работа с `type="text"` и `type="search"` (`cancel="always"`, `has-html-code`) | ✅ | Ввод в `Controlled Text` обновил `DemoValue` до `Value: Updated Text`; `HTML Code Input` хранит буквальное значение `<b>Plain</b>`; в `Type: Search` ввод `vue query` и клик по `cancel` сбросили `DemoValue` в `Value:`. | ![TC-INT-001](./screenshots/TC-INT-001.png) |
| `TC-INT-002` | Индивидуальная работа с `type="password"` (`textShow`, `textHide`, `match`) | ✅ | Клик по `[aria-label="Show password"]` переключил `input.type` с `password` на `text` и `aria-label` на `Hide password`; ошибка `Passwords must match` исчезла после ввода совпадающего пароля `Secret123` (`confirmHasValidationClass=false`). | ![TC-INT-002](./screenshots/TC-INT-002.png) |
| `TC-INT-003` | Индивидуальная работа с `type="number"` и стрелками (`auto`, `stepper`, `carousel`, `none`) | ✅ | На `Arrow Stepper (step 5)` клик `next` изменил значение `10` -> `15`; на `Arrow Carousel (left)` — `3` -> `4`; на `Arrow None` управляющих стрелок нет (`noneArrowCount=0`). | ![TC-INT-003](./screenshots/TC-INT-003.png) |
| `TC-INT-004` | Индивидуальная работа с `type="number-format"` и `type="currency"` | ✅ | Отформатированы числа (`12,345.67`, `987,654.321`, `9,876.5432`) и валюты (`US$1,499.95`, `2,500.5` без символа `€` при `currency-hide`, `RUB 4,990.00`). | ![TC-INT-004](./screenshots/TC-INT-004.png) |
| `TC-INT-005` | Индивидуальная работа с `email`, `url`, `tel`, датой/временем и `checkbox`/`radio` | ✅ | Ввод `qa@dxt.dev` обновил `emailDemoValue="Value: qa@dxt.dev"`; `Date (en-US)` при вводе `25122025` отображает `25/12/2025` и передаёт строго стандартный формат `YYYY-MM-DD` (`Value: 2025-12-25`); `type="checkbox"` и `type="radio"` приводятся к `input[type="text"]`. | ![TC-INT-005](./screenshots/TC-INT-005.png) |
| `TC-INT-006` | Индивидуальная работа с масками (`mask`, `maskVisible`, `maskNone`, `maskAttrs`) | ✅ | Очистка и ввод `9112223344` в `Phone Mask` отформатировали поле и `DemoValue` в `+7 (911) 222-33-44`; при `:mask-visible="false"` оверлей `.d1-mask__view` скрыт (`maskHiddenOverlay=false`); `maskNone` хранит `raw-123`. | ![TC-INT-006](./screenshots/TC-INT-006.png) |
| `TC-INT-007` | Валидация (`required`, `pattern`, `validationCode`, `forceShowMessage`), предупреждения (`warning`, `warningMessage`) и счётчики | ✅ | Счётчик `2 / 12`, строковый/объектный `validation-code`, `force-show-message`, состояние предупреждения `Warning State` (`.d1-field--warning`, `Caps Lock may be active`) и приоритет ошибки `Validation Overrides Warning` (`.d1-field--validation`, `Validation takes priority`) отображаются корректно; ввод `ValidText` снял ошибку `pattern` (`patternValidationCleared=true`). | ![TC-INT-007](./screenshots/TC-INT-007.png) |
| `TC-INT-008` | Программный `expose` API (`getValue`, `setValue`, `clear`, `isChanged`, `checkValidity`, `getValidationMessage`) | ✅ | Зафиксированы ответы `DemoValue`: `Read Values` -> `value=Initial, valid=true, changed=true, message=none`; `setValue` -> `value=Preset Value, valid=true, changed=true, message=none`; `clear` на `required`-поле -> `value=undefined, valid=false, changed=true, message=Заполните это поле.`. | — |

### 2.3 Граничные случаи и крайние сценарии (`BND`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-BND-001` | Пустая строка `""`, пробелы `"   "` и числовой ноль `0` | ✅ | `Whitespace Value` содержит `3` пробела, `Numeric Zero` корректно отображает `Value: 0` и выставляет модификатор `d1-field--isValue` (`zeroHasIsValue=true`) без обрезки макета. | ![TC-BND-001](./screenshots/TC-BND-001.png) |
| `TC-BND-002` | Длинный неразрывный текст (`240px`), Unicode/вьетнамский/эмодзи и XSS-строка | ✅ | Ширина контейнера `Long Unbroken Text` равна `240px`, Unicode-строка `Привет / Học tiếng Việt 🚀✨` читаема, XSS-строка `<img src=x onerror=alert(1)>` выведена как безопасный текст (`xssImgInjected=0`). | ![TC-BND-002](./screenshots/TC-BND-002.png) |

### 2.4 Адаптивность (`RSP`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-RSP-001` | Проверка переполнения и перестроения на `1440×900`, `1024×768`, `768×1024`, `375×812`, `320×568` | ✅ | Горизонтальный скролл отсутствует на всех 5 разрешениях: `1440<=1440`, `1024<=1024`, `768<=768`, `375<=375`, `320<=320` (`overflowX=false`). | ![TC-RSP-001](./screenshots/TC-RSP-001.png) |

### 2.5 Доступность (`A11Y`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-A11Y-001` | Связь `label`/`for`, ARIA и проброс пользовательских атрибутов | ✅ | `78 / 78` полей ввода на странице имеют связанный `<label for>` или ARIA-метку; все кастомные атрибуты (`data-custom-field`, `data-custom-input`, `data-custom-label`, `data-custom-message`, `data-custom-counter`) присутствуют в DOM (`allAttrsForwarded=true`). | — |

### 2.6 Логи, события и консоль (`LOG`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-LOG-001` | Эмиссия событий (`focus`, `input`, `change`, `blur`) и отсутствие ошибок консоли/сети/гидратации | ✅ | Зафиксированы переходы событий: `Value: focus` -> `Value: update:modelValue` -> `Value: blur`; `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`, `failedNetwork: []`. | — |

---

## 3. AI-аудит и рекомендации

1. **Объектный проп `loading` и линейный прогресс в `Field` (`ProgressInclude`):** `getBind(loading, extra, 'visible')` в `ProgressInclude` требует явного ключа `visible: true` при передаче объекта-конфигурации; для `D1Input` рекомендуется использовать булевый `loading` либо кольцевые настройки с явным `visible: true` (`{ visible: true, value: 65, max: 100 }`).
2. **Согласованность `warning` и `validation` приоритетов:** Наследованное от `D1Field` / `D1FieldMessage` неблокирующее состояние `warning` корректно выделяется акцентной рамкой и текстом, а при одновременном наличии ошибки валидации (`validationMessage`) уступает ей приоритет без скачков макета.
3. **Чистота рантайма и гидратации:** За полный проход по 78 полям ввода на 5 разрешениях не зафиксировано ни одной ошибки консоли, исключения или `[Vue warn]`.
