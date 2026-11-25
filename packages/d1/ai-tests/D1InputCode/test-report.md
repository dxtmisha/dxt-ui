# Отчёт о визуальном тестировании: D1InputCode (`InputCode`)

- **Дата (UTC)**: `2026-11-25T11:27:31Z`
- **URL**: `http://localhost:3000/component-input-code`
- **Браузер**: Headless Chrome CDP (`127.0.0.1:9222`)
- **Статус**: **9 / 9 тест-кейсов пройдено** (`0` ошибок консоли, `0` `[Vue warn]`, `0` page errors, `0` HTTP-ошибок ≥ 400)

## Сводка результатов

| ID | Статус | Фактические измерения и наблюдения | Скриншот |
| :--- | :---: | :--- | :--- |
| **TC-VIS-001** | ✅ Passed | `role="group"`, `aria-describedby="ui-10009"`, 4 базовые ячейки с меткой и подсказкой; вариант `length=6`: `['1','2','3','4','5','6']`. | [TC-VIS-001.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputCode/screenshots/TC-VIS-001.png) |
| **TC-VIS-002** | ✅ Passed | `d1-inputCode--validation`, `aria-invalid="true"`, текст валидации/предупреждения, `successInputs: 4`, спиннер `loading: true`, 4 `.d1-inputCodeItem__sub` при `hide`, 4 элемента скелетона. | [TC-VIS-002.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputCode/screenshots/TC-VIS-002.png) |
| **TC-INT-001** | ✅ Passed | После ввода `'4291'`: ячейки `['4','2','9','1']`, `Value: 4291`; после 2× `Backspace`: `['4','','','']`, `Value: 4`. | [TC-INT-001.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputCode/screenshots/TC-INT-001.png) |
| **TC-INT-002** | ✅ Passed | После снятия `validation`: `d1-inputCode--validation` и `aria-invalid` удалены; при включении `disabled`: `aria-disabled="true"`, сообщение `forceShowMessage` сохранено. | — |
| **TC-INT-003** | ✅ Passed | `set('9876')` заполнил ячейки `['9','8','7','6']`; `focus()` сфокусировал пустую/текущую ячейку; `reset()` + ввод `'73'` + `getValue()` дал `Value: 73`, событие `Value: input`. | [TC-INT-003.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputCode/screenshots/TC-INT-003.png) |
| **TC-LAY-001** | ✅ Passed | Контейнер `boxClientWidth: 258 === boxScrollWidth: 258`, компонент `226 === 226` (без горизонтального обрезания). | [TC-LAY-001.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputCode/screenshots/TC-LAY-001.png) |
| **TC-LIF-001** | ✅ Passed | Монтирование (`true`) -> размонтирование (`false`) -> повторное монтирование (`true`) по `v-if` без предупреждений. | — |
| **TC-RSP-001** | ✅ Passed | `1440x900` (`overflowX: false`), `768x1024` (`overflowX: false`). | [TC-RSP-001.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputCode/screenshots/TC-RSP-001.png) |
| **TC-RSP-002** | ✅ Passed | `375x812` (`overflowX: false`), `320x568` (`overflowX: false`). | [TC-RSP-002.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputCode/screenshots/TC-RSP-002.png) |
