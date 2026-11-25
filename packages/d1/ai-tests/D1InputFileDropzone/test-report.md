# Отчёт о визуальном тестировании: D1InputFileDropzone (`InputFileDropzone`)

- **Дата (UTC)**: `2026-11-25T12:12:06Z`
- **URL**: `http://localhost:3000/component-input-file-dropzone`
- **Браузер**: Headless Chrome CDP (`127.0.0.1:9222`)
- **Статус**: **7 / 7 тест-кейсов пройдено** (`0` ошибок консоли, `0` `[Vue warn]`, `0` page errors, `0` HTTP-ошибок ≥ 400)

| ID | Статус | Фактические измерения и наблюдения | Скриншот |
| :--- | :---: | :--- | :--- |
| **TC-VIS-001** | ✅ Passed | `hasLabel: true`, `hasMessage: true`, `ariaDescribedby: "ui-10009"`, `accept: ".txt,image/*"`, `multiple: true`. | [TC-VIS-001.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputFileDropzone/screenshots/TC-VIS-001.png) |
| **TC-VIS-002** | ✅ Passed | Сообщение валидации очищено по кнопке, активны классы `d1-inputFileDropzone--disabled`, `d1-inputFileDropzone--readonly`, скелетон `.d1-skeleton__background`, слот `#default` (`Custom Dropzone Body Slot`). | [TC-VIS-002.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputFileDropzone/screenshots/TC-VIS-002.png) |
| **TC-INT-001** | ✅ Passed | После выбора 2 файлов (11 Б и 650 Б) с `maxFileSize=512` в `add` попал `ifd-small-test.txt (11 B)`, в `reject` — `ifd-large-test.txt (650 B)`, событие `Value: reject`; `expose.open()` отработал (`Value: true`). | — |
| **TC-LAY-001** | ✅ Passed | `boxClientWidth: 258 === boxScrollWidth: 258`, `compClientWidth: 226 === compScrollWidth: 226`. | [TC-LAY-001.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputFileDropzone/screenshots/TC-LAY-001.png) |
| **TC-LIF-001** | ✅ Passed | `mountedInitially: true` -> `mountedAfterUnmount: false` -> `mountedAfterRemount: true`. | — |
| **TC-RSP-001** | ✅ Passed | `1440x900` и `768x1024`: `overflowX: false`. | [TC-RSP-001.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputFileDropzone/screenshots/TC-RSP-001.png) |
| **TC-RSP-002** | ✅ Passed | `375x812` и `320x568`: `overflowX: false`. | [TC-RSP-002.png](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/ai-tests/D1InputFileDropzone/screenshots/TC-RSP-002.png) |
