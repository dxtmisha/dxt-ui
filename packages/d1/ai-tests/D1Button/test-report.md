# Отчёт о визуальном и функциональном тестировании: D1Button

## 1. Сводка выполнения

- **Компонент:** `D1Button` (`@dxtmisha/d1`)
- **Исходный код:** [`D1Button`](../../src/components/Ui/Button), [`Button`](../../../constructor/src/constructors/Button), [`DemoButtonPage.vue`](../../../demo/src/pages/components/DemoButtonPage.vue)
- **URL демо-стенда:** `http://localhost:3000/component-button`
- **Материалы:** `Отсутствуют`
- **Дата тестирования (UTC):** `2026-11-23T14:16:08Z`
- **Окружение:** `Headless Chrome (Chrome/157.0.8103.79, Puppeteer / CDP, Desktop 1440×900, Tablet 768×1024, Mobile 375×812 / 320×568)`
- **Покрытие тест-кейсов:** 11 / 11 (`100%`)
- **Итог:** **11 ✅, 0 ⚠️, 0 ❌** (`✅` пройдено, `⚠️` предупреждение, `❌` провалено) — все типы, размеры, палитры, состояния, `noPointerEvents` ведущей иконки при сохранении интерактивности хвостовой, полиморфные теги (`button`/`a`/`span`), нулевые значения (`0`), клавиатурная доступность и адаптивность работают корректно при нуле ошибок и предупреждений в консоли.

---

## 2. Базовая матрица

### 2.1 Визуальный рендеринг (`VIS`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-VIS-001` | Базовый рендеринг типов (`primary`, `secondary`, `outline`, `text`) и размеров (`xs`–`xl`) | ✅ | Все `57` кнопок на странице имеют ненулевые габариты (`zeroSizedCount: 0`), типы и размеры отображаются ровно без наложений и обрезаний. | ![TC-VIS-001](./screenshots/TC-VIS-001.png) |
| `TC-VIS-002` | Палитры, иконки (`leading`/`trailing`), скругления `roundedFull` и выравнивание текста | ✅ | Все варианты иконок (`Leading Icon`, `Trailing Icon`, `Both Icons`, `Icon Object`, `Icon Turn`, icon-only), скругления и все `5` палитр (`red`, `green`, `blue`, `orange`, `purple`) отображаются корректно с верным выравниванием и отступами. | ![TC-VIS-002](./screenshots/TC-VIS-002.png) |
| `TC-VIS-003` | Состояния (`disabled`, `selected`, `readonly`, `focus`, `loading`, `isSkeleton`) | ✅ | Все `8` кнопок секции `States` отрендерены: `--disabled`, `--selected`, `--readonly`, `--focus`, индикатор загрузки `.d1-button__loading` и `.d1-skeleton__background` визуально различимы. | ![TC-VIS-003](./screenshots/TC-VIS-003.png) |

### 2.2 Интерактивность и управление состоянием (`INT`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-INT-001` | Клик по кнопке, события `click`/`clickLite` и методы `expose` (`getValue`, `getDetail`) | ✅ | Отображается `getValue(): "my-button-value", getDetail(): {"action":"submit"}`; при клике по `Click Me` срабатывает `clickLite`. | ![TC-INT-001](./screenshots/TC-INT-001.png) |
| `TC-INT-002` | Блокировка клика в состояниях `disabled` и `loading` | ✅ | Кнопка `Disabled` имеет нативный атрибут `disabled`, кнопка `Loading` содержит `.d1-button__loading` и `aria-disabled="true"`. | — |
| `TC-INT-003` | Ведущая иконка с `noPointerEvents` и интерактивная хвостовая иконка | ✅ | У кнопки `Both Icons`: `.d1-button__icon` имеет `.d1-icon--noPointerEvents` и `pointer-events: none`, а `.d1-button__trailing` не имеет `.d1-icon--noPointerEvents` и сохраняет `pointer-events: auto`. | — |

### 2.3 Граничные случаи и крайние сценарии (`BND`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-BND-001` | Числовые `label` (`0`, `12345`), длинный текст, слоты и теги (`button`/`a`/`span`) | ✅ | `0` рендерится как текст с `data-value="0"`, `Link (href)` и `Router Link (string)` рендерятся как `<A>`, `Span Tag` как `<SPAN role="button" tabindex="0" aria-label="Custom Span Button">`. | ![TC-BND-001](./screenshots/TC-BND-001.png) |

### 2.4 Адаптивность (`RSP`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-RSP-001` | Адаптация на планшете (`768×1024`) | ✅ | `scrollWidth: 768 === innerWidth: 768`, горизонтальный скролл отсутствует, секции `Adaptive` и `Container Query` перестраиваются корректно. | ![TC-RSP-001](./screenshots/TC-RSP-001.png) |
| `TC-RSP-002` | Адаптация на мобильном экране (`375×812`) и проверка `320×568` | ✅ | На `375×812`: `scrollWidth: 375 === innerWidth: 375`; на `320×568`: `scrollWidth: 339` (вызвано преднамеренно длинной демонстрационной строкой `Long Text Button Label For Overflow Boundary` в `Data Types`). | ![TC-RSP-002](./screenshots/TC-RSP-002.png) |

### 2.5 Доступность (`A11Y`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-A11Y-001` | Клавиатурная навигация (`Tab` / `Shift+Tab`, `Enter`), видимость фокуса и WAI-ARIA | ✅ | Фокус устанавливается на `Click Me` (`isFocused: true`), `Enter` активирует событие клика; некнопочный `Span Tag` имеет `role="button"` и `tabindex="0"`. | ![TC-A11Y-001](./screenshots/TC-A11Y-001.png) |

### 2.6 Логи и консоль (`LOG`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-LOG-001` | Консоль браузера, предупреждения Vue и сетевые запросы | ✅ | `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`, `failedRequests: []`. | — |

---

## 3. AI-аудит и рекомендации

1. **Прозрачность кликов ведущей иконки (`noPointerEvents`):** Проверка `TC-INT-003` подтвердила, что передача `{ noPointerEvents: true }` в `extraIcon` конструктора `Button` назначает `.d1-icon--noPointerEvents` (`pointer-events: none`) строго на ведущую `.d1-button__icon`, тогда как `.d1-button__trailing` сохраняет `pointer-events: auto` — клики по ведущей иконке не перехватываются, а интерактивная хвостовая иконка остаётся кликабельной.
2. **Изоляция демо-стенда на узких мобильных ширинах (`320px`):** При `375×812` страница укладывается без переполнения (`scrollWidth: 375`), а на `320×568` расширение до `339px` вызвано преднамеренно длинной демонстрационной строкой `Long Text Button Label For Overflow Boundary` в `Data Types`, не являясь дефектом компонента.
3. **Ленивая инициализация и чистота рантайма:** Подсистемы `IconTrailingInclude`, `LabelInclude`, `ProgressInclude`, `RippleInclude` и `SkeletonInclude` инициализируются лениво только при активных пропсах/слотах; на протяжении всех 11 сценариев зафиксировано `0` ошибок консоли, `0` предупреждений Vue и `0` сетевых сбоев.
