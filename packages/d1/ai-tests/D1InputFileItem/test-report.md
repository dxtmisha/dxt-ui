# Отчёт о визуальном тестировании: D1InputFileItem (`InputFileItem`)

- **Дата (UTC)**: `2026-11-25T12:12:06Z`
- **URL**: `http://localhost:3000/component-input-file-item`
- **Браузер**: Headless Chrome CDP (`127.0.0.1:9222`)
- **Статус**: **7 / 7 тест-кейсов пройдено** (`0` ошибок консоли, `0` `[Vue warn]`, `0` page errors, `0` HTTP-ошибок ≥ 400)

| ID | Статус | Фактические измерения и наблюдения | Скриншот |
| :--- | :---: | :--- | :--- |
| **TC-VIS-001** | ✅ Passed | `idleAriaDisabled: null`, `idleAriaBusy: "false"`, `uploadingAriaBusy: "true"`, `.d1-progress`, `.d1-icon`, `.d1-inputFileItem__buttonRetry` присутствуют в соответствующих статусах. | [TC-VIS-001.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputFileItem/screenshots/TC-VIS-001.png) |
| **TC-VIS-002** | ✅ Passed | Активны классы `d1-inputFileItem--appearance--compact`, `d1-inputFileItem--appearance--tile`, `d1-inputFileItem--selected`, `d1-skeleton__background`. | [TC-VIS-002.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputFileItem/screenshots/TC-VIS-002.png) |
| **TC-INT-001** | ✅ Passed | `ariaDisabledAfter: "true"`, при `readonly` блок действий скрыт (`actionsExistsAfterReadonly: false`), `expose` вернул `file=invoice-2026.pdf, status=error, crop=[10,15,10,15]`, события `retry` и `delete` зафиксированы. | [TC-INT-001.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputFileItem/screenshots/TC-INT-001.png) |
| **TC-LAY-001** | ✅ Passed | `boxClientWidth: 258 === boxScrollWidth: 258`, `compClientWidth: 218 === compScrollWidth: 218`. | [TC-LAY-001.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputFileItem/screenshots/TC-LAY-001.png) |
| **TC-LIF-001** | ✅ Passed | `mountedInitially: true` -> `mountedAfterUnmount: false` -> `mountedAfterRemount: true`. | — |
| **TC-RSP-001** | ✅ Passed | `1440x900` и `768x1024`: `overflowX: false`. | [TC-RSP-001.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputFileItem/screenshots/TC-RSP-001.png) |
| **TC-RSP-002** | ✅ Passed | `375x812` и `320x568`: `overflowX: false`. | [TC-RSP-002.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputFileItem/screenshots/TC-RSP-002.png) |
