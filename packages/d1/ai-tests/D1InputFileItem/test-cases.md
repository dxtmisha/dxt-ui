# Тест-кейсы: D1InputFileItem (`InputFileItem`)

Страница демо: `http://localhost:3000/component-input-file-item` ([DemoInputFileItemPage.vue](file:///Users/tung/Documents/GitHub/dxt-ui/packages/demo/src/pages/components/DemoInputFileItemPage.vue))

| ID | Категория | Сценарий и ожидаемый результат |
| :--- | :--- | :--- |
| **TC-VIS-001** | Visual / Statuses | Режим `list` во всех статусах (`idle`, `uploading`, `uploaded`, `error`): проверка отсутствия ложного `aria-disabled`, `aria-busy="true"` при загрузке, `.d1-progress`, `.d1-icon` и `.d1-inputFileItem__buttonRetry`. |
| **TC-VIS-002** | Visual / Appearances | Режимы `compact` и `tile` с локальными SVG-миниатюрами, состояние `selected`, `isSkeleton`. |
| **TC-INT-001** | State / Expose / Events | Переключение `disabled` (`aria-disabled="true"`) и `readonly` (скрытие `.d1-inputFileItem__actions`), вызов `expose` (`getFile`, `getStatus`, `getCrop`, `retry`, `delete`) и проверка лога событий. |
| **TC-LAY-001** | Layout / Overflow | Узкий контейнер (`max-width: 260px`) с длинным именем файла `very-long-quarterly-financial-statement-2026-final-v2.pdf`: без горизонтального переполнения (`scrollWidth === clientWidth`). |
| **TC-LIF-001** | Lifecycle | Монтирование, размонтирование и повторное монтирование через `v-if`. |
| **TC-RSP-001** | Responsive | Десктоп (`1440x900`) и планшет (`768x1024`): `overflowX: false`. |
| **TC-RSP-002** | Responsive | Мобильный (`375x812`) и компактный (`320x568`): `overflowX: false`. |
