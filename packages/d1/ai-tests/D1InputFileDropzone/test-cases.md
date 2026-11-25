# Тест-кейсы: D1InputFileDropzone (`InputFileDropzone`)

Страница демо: `http://localhost:3000/component-input-file-dropzone` ([DemoInputFileDropzonePage.vue](file:///Users/tung/Documents/GitHub/dxt-ui/packages/demo/src/pages/components/DemoInputFileDropzonePage.vue))

| ID | Категория | Сценарий и ожидаемый результат |
| :--- | :--- | :--- |
| **TC-VIS-001** | Visual / A11y | Базовый `D1InputFileDropzone` с меткой, подсказкой, `aria-describedby`, атрибутами `accept=".txt,image/*"` и `multiple`. |
| **TC-VIS-002** | Visual / States | Сообщения валидации (`validationMessage`) и предупреждения (`warningMessage`), переключение валидации, состояния `disabled`, `readonly`, `isSkeleton` и слоты `#label` / `#default`. |
| **TC-INT-001** | Interactive / Expose | Загрузка двух файлов (11 Б и 650 Б) при `maxFileSize=512`: фильтр отбирает только валидный файл `ifd-small-test.txt` и логирует событие `add`; кнопка `Open File Dialog` вызывает `expose.open()`. |
| **TC-LAY-001** | Layout / Overflow | Узкий контейнер (`max-width: 260px`): отсутствие горизонтального переполнения (`scrollWidth === clientWidth`). |
| **TC-LIF-001** | Lifecycle | Монтирование, размонтирование и повторное монтирование через `v-if`. |
| **TC-RSP-001** | Responsive | Десктоп (`1440x900`) и планшет (`768x1024`): `overflowX: false`. |
| **TC-RSP-002** | Responsive | Мобильный (`375x812`) и компактный (`320x568`): `overflowX: false`. |
