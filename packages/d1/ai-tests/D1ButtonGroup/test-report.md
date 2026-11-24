# Отчёт о визуальном и функциональном тестировании: D1ButtonGroup

## 1. Итоговое резюме

- **Компонент:** `D1ButtonGroup` (`@dxtmisha/d1`)
- **Исходный код:** [`D1ButtonGroup`](../../src/components/Ui/ButtonGroup) ([`ButtonGroup`](../../../constructor/src/constructors/ButtonGroup), [`DemoButtonGroupPage`](../../../demo/src/pages/components/DemoButtonGroupPage.vue))
- **Демо / целевой URL:** `http://localhost:3000/component-button-group`
- **Материалы:** `Нет`
- **Дата тестирования (UTC):** `2026-11-24T12:27:13Z`
- **Окружение:** `Headless Chrome (Puppeteer / CDP, Desktop 1440x900, Tablet 768x1024, Mobile 375x812)`
- **Покрытие тест-кейсов:** 10 / 10 (`100%`)
- **Итог:** **10 ✅, 0 ⚠️, 0 ❌** (`✅` пройдено, `⚠️` предупреждение, `❌` ошибка) — `D1ButtonGroup` рендерит семантический групповой контейнер `div[role="group"]` с поддержкой `aria-label`, горизонтальной и вертикальной ориентации, многострочного переноса `wrap`, проброса `buttonAttrs` и `isSkeleton`, делегированных событий клика (включая `value: 0`) и блокировки `disabled`-кнопок.

---

## 2. Базовая матрица

### 2.1 Визуальное соответствие (`VIS`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-VIS-001` | Ориентации (`horizontal` / `vertical`), `wrap`, `buttonAttrs` и слот `#default` | ✅ | Все варианты ориентации, палитр, размеров и слотов отображаются без дефектов выравнивания. | ![TC-VIS-001](./screenshots/TC-VIS-001.png) |
| `TC-VIS-002` | Состояние загрузки скелетона (`isSkeleton` внутри `D1Skeleton`) | ✅ | `skeletonCheck: true` — все 3 дочерние кнопки получают `.d1-skeleton__background`. | ![TC-VIS-002](./screenshots/TC-VIS-002.png) |

### 2.2 Интерактивность и управление состоянием (`INT`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-INT-001` | Обработка клика по активным кнопкам и передача `value: 0` | ✅ | `eventAfterZero: "Value: clickLite"` — клик по кнопке с `value: 0` корректно обрабатывается. | ![TC-INT-001](./screenshots/TC-INT-001.png) |
| `TC-INT-002` | Блокировка клика на кнопке с `disabled: true` | ✅ | `isDisabledAttr: true`, `outputUnchanged: true` — заблокированная кнопка не эмитит событие. | ![TC-INT-002](./screenshots/TC-INT-002.png) |
| `TC-INT-003` | Переключение скелетона загрузки (`Toggle Skeleton`) | ✅ | `skeletonOffCheck: true` — скелетон снимается со всех кнопок группы. | ![TC-INT-003](./screenshots/TC-INT-003.png) |

### 2.3 Границы и крайние случаи (`BND`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-BND-001` | Перенос кнопок при `wrap`, проброс `buttonAttrs` и ненулевая геометрия | ✅ | `hasZeroSize: false`, `hasWrap: true`, `attrsApplied: true`. | ![TC-BND-001](./screenshots/TC-BND-001.png) |

### 2.4 Адаптивность (`RSP`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-RSP-001` | Планшетный вьюпорт (`768×1024`) без переполнения | ✅ | `overflow768: false`. | ![TC-RSP-001](./screenshots/TC-RSP-001.png) |
| `TC-RSP-002` | Мобильный экран (`375×812`) с переносом кнопок | ✅ | `wrappedMultipleRows: true` — 8 кнопок с `wrap` аккуратно переносятся в 3 ряда. | ![TC-RSP-002](./screenshots/TC-RSP-002.png) |

### 2.5 Доступность (`A11Y`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-A11Y-001` | Семантика `role="group"`, `aria-label` и клавиатурный фокус | ✅ | `count: 10`, `allRoleGroup: true`, `basicAriaLabel: "Alignment actions"`. | — |

### 2.6 Логи и консоль (`LOG`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-LOG-001` | Чистота консоли браузера и отсутствие `[Vue warn]` | ✅ | `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`. | — |

---

## 3. AI-аудит и рекомендации

1. **ARIA-семантика `role="group"`:** Инкапсулирован геттер `aria` с ролью `group` по умолчанию и поддержкой `role` / `ariaLabel`.
2. **Поддержка `isSkeleton` и неразрушающее слияние:** Добавлен проброс `isSkeleton` дочерним кнопкам и неразрушающее объединение `buttonAttrs` через `mergeProps` + `getObjectNoUndefined`.
