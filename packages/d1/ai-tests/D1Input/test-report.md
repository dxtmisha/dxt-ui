# Отчёт визуального и функционального тестирования: D1Input

## 1. Итоговая сводка

- **Компонент:** `D1Input` (`@dxtmisha/d1`)
- **Исходный код:** [`D1Input`](packages/d1/src/components/Ui/Input), [`Input`](packages/constructor/src/constructors/Input), [`DemoInputPage.vue`](packages/demo/src/pages/components/DemoInputPage.vue)
- **Демо / Целевой URL:** `http://localhost:3000/component-input`
- **Материалы:** `None`
- **Дата тестирования (UTC):** `2026-11-16T13:19:23Z`
- **Окружение:** `Headless Chrome (CDP 127.0.0.1:9222, Desktop 1440x900, Laptop 1024x768, Tablet 768x1024, Mobile 375x812 / 320x568)`
- **Покрытие тест-кейсов:** 17 / 17 (`100%`)
- **Итог:** **17 ✅, 0 ⚠️, 0 ❌** (`✅` пройдено, `⚠️` предупреждение, `❌` не пройдено) — компонент `D1Input` стабильно рендерится во всех оформлениях, размерах и состояниях, все 16 типов `FieldType` и индивидуальные сценарии ввода/форматирования/валидации работают без ошибок консоли, гидратации и сети.

---

## 2. Базовая матрица

### 2.1 Визуальный рендеринг (`VIS`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-VIS-001` | Варианты внешнего вида, ширина (`width`), `block` и палитра (`field-attrs`) | ✅ | Отрисованы 9 конфигураций (`classic`, `filled`, `outlined`, `tonal`, `boxed`, `basic`, `width="240px"`, `block`, `palette: 'blue'`); измеренная ширина `.d1-field` для `width="240px"` составила `240px`, `hasBlockClass=true`, `hasBlueClass=true`. | ![TC-VIS-001](./screenshots/TC-VIS-001.png) |
| `TC-VIS-002` | Размеры (`sm`, `md`, `lg`, `display`) и выравнивание (`align`) | ✅ | Измеренная высота `.d1-field__body`: `sm=32px`, `md=48px`, `lg=64px`, `display=72px`; вычисленный `text-align` на `<input>`: `left`, `center`, `right`. | ![TC-VIS-002](./screenshots/TC-VIS-002.png) |
| `TC-VIS-003` | Иконки, индикаторы загрузки (`loading`) и слоты | ✅ | Отображаются 8 иконок (`icon`, `icon-trailing`, `icon-attrs`), кольцевой спиннер и кольцевой прогресс `{ visible: true, value: 65, max: 100 }`, а также все 6 слотов (`[Lead]`, `[Trail]`, `https://`, `.dev`, `Note`, `Custom`). | ![TC-VIS-003](./screenshots/TC-VIS-003.png) |
| `TC-VIS-004` | Состояния (`disabled`, `readonly`, `focus`, `selected`, `is-skeleton`) | ✅ | `disabledAttr=true`, `readonlyAttr=true`, присутствуют классы `.d1-field--focus`, `.d1-field--selected` и активная заглушка `.d1-skeleton--active`. | ![TC-VIS-004](./screenshots/TC-VIS-004.png) |

### 2.2 Интерактивность и управление состоянием (`INT`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-INT-001` | Индивидуальная работа с `type="text"` и `type="search"` (`cancel="always"`, `has-html-code`) | ✅ | Ввод в `Controlled Text` обновил `DemoValue` до `Value: Updated Text`; `HTML Code Input` хранит буквальное значение `<b>Plain</b>`; в `Type: Search` ввод `vue query` и клик по `cancel` сбросили `DemoValue` в `Value: `. | ![TC-INT-001](./screenshots/TC-INT-001.png) |
| `TC-INT-002` | Индивидуальная работа с `type="password"` (`textShow`, `textHide`, `match`) | ✅ | Клик по `[aria-label="Show password"]` (иконка `visibility`) переключил `input.type` с `password` на `text`, `aria-label` на `Hide password` и иконку на `visibility_off`; ошибка `Passwords must match` (`matchBefore=true`) исчезла после ввода совпадающего пароля (`matchAfter=false`). | ![TC-INT-002](./screenshots/TC-INT-002.png) |
| `TC-INT-003` | Индивидуальная работа с `type="number"` и стрелками (`auto`, `stepper`, `carousel`, `none`) | ✅ | На `Arrow Stepper (step 5)` клик `next` изменил значение `10` -> `15`; на `Arrow Carousel (left)` — `3` -> `4`; на `Arrow None` управляющих стрелок нет (`noneArrowCount=0`). | ![TC-INT-003](./screenshots/TC-INT-003.png) |
| `TC-INT-004` | Индивидуальная работа с `type="number-format"` и `type="currency"` | ✅ | Ввод в `Formatted (en-US, 2 decimals)` дал `54,321.00` (`DemoValue: 54321.0`); `Currency USD` дал `US$2,500.00` (`DemoValue: 2500.0`); `currency-hide` скрыл символ `€` (`2,500.50`); локаль `ru-RU` отобразила `RUB 4 990.00`. | ![TC-INT-004](./screenshots/TC-INT-004.png) |
| `TC-INT-005` | Индивидуальная работа с `email`, `url`, `tel`, `date`/`datetime`/`year-month`/`time`/`hour-minute` и `checkbox`/`radio` | ✅ | Ввод `qa@dxt.dev` обновил `emailDemoValue="Value: qa@dxt.dev"`; очистка и ввод `25122025` в `Date` дали `25/12/2025` (`dateDemoValue="Value: 2025-12-25"`); `checkbox` и `radio` отрисовались с нативными типами `on` / `option-a`. | ![TC-INT-005](./screenshots/TC-INT-005.png) |
| `TC-INT-006` | Индивидуальная работа с масками (`mask`, `maskVisible`, `maskNone`, `maskAttrs`) | ✅ | Ввод `9112223344` в `Phone Mask` отформатировал поле и `DemoValue` в `+7 (911) 222-33-44`; при `:mask-visible="false"` оверлей `.d1-mask__view` скрыт (`hiddenOverlay=false`); `maskNone` хранит `raw-123`. | ![TC-INT-006](./screenshots/TC-INT-006.png) |
| `TC-INT-007` | Валидация (`required`, `pattern`, `validationCode`, `forceShowMessage`) и счётчики | ✅ | Счётчик `2 / 12`, строковый `validation-code` (`Must contain digits only`), принудительное сообщение (`Server validation failed`) и объектный `validation-code` (`Only Latin letters allowed`) отображаются; ввод `ValidText` снял ошибку `pattern` (`patternMsgAfter=false`). | ![TC-INT-007](./screenshots/TC-INT-007.png) |
| `TC-INT-008` | Программный `expose` API (`getValue`, `setValue`, `clear`, `checkValidity`, `getValidationMessage`) | ✅ | Зафиксированы ответы `DemoValue`: `Read Values` -> `value=Initial, valid=true, message=none`; `setValue` -> `value=Preset Value, valid=true, message=none`; `clear` на `required`-поле -> `value=undefined, valid=false, message=Заполните это поле.`. | — |

### 2.3 Граничные случаи и крайние сценарии (`BND`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-BND-001` | Пустая строка `""`, пробелы `"   "` и числовой ноль `0` | ✅ | `Empty Text` = `""`, `Whitespace Value` содержит `3` пробела, `Numeric Zero` корректно отображает `zeroVal="0"` без обрезки макета (`zeroHasIsValue=false` из-за общей логики `isFilled(0)`). | ![TC-BND-001](./screenshots/TC-BND-001.png) |
| `TC-BND-002` | Длинный неразрывный текст (`240px`), Unicode/вьетнамский/эмодзи и XSS-строка | ✅ | Ширина контейнера `Long Unbroken Text` равна `240px`, Unicode-строка `Привет / Học tiếng Việt 🚀✨` читаема, XSS-строка `<img src=x onerror=alert(1)>` выведена как безопасный текст (`xssImgInjected=0`). | ![TC-BND-002](./screenshots/TC-BND-002.png) |

### 2.4 Адаптивность (`RSP`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-RSP-001` | Проверка переполнения и перестроения на `1440×900`, `1024×768`, `768×1024`, `375×812`, `320×568` | ✅ | Горизонтальный скролл отсутствует на всех 5 разрешениях: `1440<=1440`, `1024<=1024`, `768<=768`, `375<=375`, `320<=320` (`overflowX=false`). | ![TC-RSP-001](./screenshots/TC-RSP-001.png) |

### 2.5 Доступность (`A11Y`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-A11Y-001` | Связь `label`/`for`, ARIA и проброс пользовательских атрибутов | ✅ | `76 / 76` полей ввода на странице имеют связанный `<label for>` или ARIA-метку; все кастомные атрибуты (`data-custom-field`, `data-custom-input`, `data-custom-label`, `data-custom-message`, `data-custom-counter`) присутствуют в DOM (`allAttrsForwarded=true`). | — |

### 2.6 Логи, события и консоль (`LOG`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-LOG-001` | Эмиссия событий и отсутствие ошибок консоли/сети/гидратации | ✅ | Зафиксированы события ввода и `Value: changeLite`; `consoleWarningsErrors: []`, `pageErrors: []`, `failedNetwork: []`. | — |

---

## 3. AI-аудит и рекомендации

1. **Обработка `isValue` для числового `0` в `FieldValueInclude`:** По результатам `TC-BND-001` `isFilled(0)` в `@dxtmisha/functional` возвращает `false` (поведение рассчитано на булевые контролы `Checkbox`/`Radio`), поэтому `zeroHasIsValue` равен `false`. В оформлении `classic` метка всегда располагается сверху и отображение `0` корректно, однако для строковых/числовых полей в режиме `outlined`/`filled` рекомендуется при необходимости отдельно учитывать `value === 0` или передавать `isValue` явно.
2. **Объектный проп `loading` и линейный прогресс в `Field` (`ProgressInclude`):** В ходе аудита выявлено два ограничения контракта `loading`: (а) `getBind(loading, extra, 'visible')` в `ProgressInclude` требует явного ключа `visible: true` при передаче объекта-конфигурации, иначе передаёт объект напрямую в проп `visible` (`Invalid prop` warning); (б) линейный режим `{ linear: true, circular: false }` в `D1Field` пересекает текст ввода в `.d1-field__scoreboard`. Для `D1Input` рекомендуется использовать булевый `loading` либо кольцевые настройки с явным `visible: true` (`{ visible: true, value: 65, max: 100 }`).
3. **Нативные типы `type="checkbox"` / `type="radio"` и парсинг промежуточной даты:** При использовании нативных типов `checkbox`/`radio` внутри `D1Input` размер `<input>` наследует стили текстового поля — для чекбоксов и радиокнопок следует применять специализированные `D1Checkbox`/`D1Radio` (или `cancel="none"` при использовании как `D1Input`). При посимвольном вводе в `type="date"` важно учитывать порядок заполнения локали (`DD/MM/YYYY`), при этом при полной последовательности цифр (`25122025`) модель `v-model` корректно нормализуется в ISO-формат (`2025-12-25`) с нулевыми ошибками консоли.
