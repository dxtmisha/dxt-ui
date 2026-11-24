# Отчёт о визуальном и функциональном тестировании: D1ChipGroup

## 1. Итоговое резюме

- **Компонент:** `D1ChipGroup` (`@dxtmisha/d1`)
- **Исходный код:** [`D1ChipGroup`](../../src/components/Ui/ChipGroup) ([`ChipGroup`](../../../constructor/src/constructors/ChipGroup), [`DemoChipGroupPage`](../../../demo/src/pages/components/DemoChipGroupPage.vue))
- **Демо / целевой URL:** `http://localhost:3000/component-chip-group`
- **Материалы:** `Нет`
- **Дата тестирования (UTC):** `2026-11-24T13:51:28Z`
- **Окружение:** `Headless Chrome (Puppeteer / CDP, Desktop 1440x900, Tablet 768x1024, Mobile 375x812)`
- **Покрытие тест-кейсов:** 10 / 10 (`100%`)
- **Итог:** **10 ✅, 0 ⚠️, 0 ❌** (`✅` пройдено, `⚠️` предупреждение, `❌` ошибка) — `D1ChipGroup` на базе `DesignLogicAbstract` корректно управляет одиночным и множественным выбором (включая `value=0`), защитой `readonly` и `disabled`, скрытием иконок `iconWhenSelected`, кастомными ключами (`keyLabel`/`keyValue`), `chipAttrs`, слотом `#default`, Unicode и событиями `click`/`clickLite`.

---

## 2. Базовая матрица

### 2.1 Визуальное соответствие (`VIS`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-VIS-001` | Базовый рендеринг групп чипов, `chipAttrs` и слота `#default` | ✅ | `groups: 9`, `itemsCount: 30`, `hasZeroSize: false`, `purpleChip: true`, `slotChip: "Custom Slot Chipstar"` — все элементы отображаются чётко. | ![TC-VIS-001](./screenshots/TC-VIS-001.png) |
| `TC-VIS-002` | Скрытие иконки невыбранных чипов (`iconWhenSelected`) | ✅ | `firstSelected: true`, `firstIconHidden: false`, `secondIconHidden: true` — иконка отображается только у выбранного чипа. | ![TC-VIS-002](./screenshots/TC-VIS-002.png) |

### 2.2 Интерактивность и управление состоянием (`INT`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-INT-001` | Одиночный выбор, числовой ноль `value=0` и блокировка `disabled` | ✅ | `afterZero: "Value: 0"`, `disabledUnchanged: true` — клик на `0` обновляет выбор, `disabled` игнорируется. | ![TC-INT-001](./screenshots/TC-INT-001.png) |
| `TC-INT-002` | Множественный выбор (`multiple`) и очистка (`Clear Selection`) | ✅ | `afterAdd: ["a","b",0]`, `afterClear: []` — двусторонняя синхронизация `v-model:selected` работает точно. | ![TC-INT-002](./screenshots/TC-INT-002.png) |
| `TC-INT-003` | Режим `readonly`, кастомные ключи (`keyLabel`/`keyValue`) и события (`click`/`clickLite`) | ✅ | `readonlyOut: "Value: a"`, `keysOut: "Value: 3"`, `eventOut: "Value: clickLite"`. | ![TC-INT-003](./screenshots/TC-INT-003.png) |

### 2.3 Границы и крайние случаи (`BND`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-BND-001` | Unicode, длинный текст и пустой список (`list=[]`) | ✅ | `unicodeOk: true`, `emptyItemsCount: 0` — кириллица, вьетнамский, эмодзи и пустой массив отображаются без ошибок. | ![TC-BND-001](./screenshots/TC-BND-001.png) |

### 2.4 Адаптивность (`RSP`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-RSP-001` | Планшетный вьюпорт (`768×1024`) | ✅ | `overflow768: false` — переполнение отсутствует. | ![TC-RSP-001](./screenshots/TC-RSP-001.png) |
| `TC-RSP-002` | Мобильный вьюпорт (`375×812`) | ✅ | `overflow375: false` — чипы аккуратно переносятся в пределах `375px`. | ![TC-RSP-002](./screenshots/TC-RSP-002.png) |

### 2.5 Доступность (`A11Y`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-A11Y-001` | Доступность вложенных чипов (`role="button"`, `tabindex="0"`, `aria-disabled="true"`) | ✅ | `firstRole: "button"`, `firstTabindex: "0"`, `disabledAria: "true"`. | — |

### 2.6 Логи и консоль (`LOG`)

| ID | Сценарий | Статус | Фактический результат | Скриншот |
| :--- | :--- | :---: | :--- | :--- |
| `TC-LOG-001` | Чистота консоли браузера и отсутствие `[Vue warn]` | ✅ | `consoleErrors: []`, `vueWarnings: []`, `pageErrors: []`. | — |

---

## 3. AI-аудит и рекомендации

1. **Безопасная композиция `chipAttrs` через `mergeProps`:** Замена `toBinds` на `mergeProps` + `getObjectNoUndefined` гарантирует, что передача пользовательского `chipAttrs.onClick` или `chipAttrs.iconHide` больше не нарушает внутреннее переключение модели и не затирает свойства.
2. **Ленивая инициализация событий:** Экземпляр `EventClickInclude` создаётся в `DesignLogicAbstract` только при первом клике, снижая накладные расходы при первичном рендеринге групп.
3. **Семантика и консоль:** Вложенные `D1Chip` наследуют полную доступность (`role="button"`, `tabindex="0"`, `aria-disabled="true"`), а консоль браузера остаётся полностью чистой при всех сценариях.
