# Тест-кейсы: D1InputCode (`InputCode`)

Страница демо: `http://localhost:3000/component-input-code` ([DemoInputCodePage.vue](file:///Users/tung/Documents/GitHub/dxt-ui/packages/demo/src/pages/components/DemoInputCodePage.vue))

| ID | Категория | Сценарий и ожидаемый результат |
| :--- | :--- | :--- |
| **TC-VIS-001** | Visual / A11y | Базовый `D1InputCode` (4 ячейки), метка `SMS Code`, подсказка `helperMessage`, `role="group"` и `aria-describedby`; вариант `length=6` со значением `'123456'`. |
| **TC-VIS-002** | Visual / States | Состояния `validation` + `validationMessage` + `warningMessage`, `success`, `loading` (спиннер в `FieldLabel`), `disabled` + `forceShowMessage`, `hide`, алфавитно-цифровой `match`, `isSkeleton`. |
| **TC-INT-001** | Interactive | Посимвольный ввод `'4291'` с авто-переходом фокуса между ячейками и двусторонней привязкой `v-model`; двойное нажатие `Backspace` очищает и обновляет `codeVal1`. |
| **TC-INT-002** | State Toggles | Динамическое переключение `validation` (снятие класса `--validation` и `aria-invalid`) и `disabled` (`aria-disabled="true"` при сохранении сообщения `forceShowMessage`). |
| **TC-INT-003** | Expose & Events | Программный вызов `set('9876')`, `focus()`, `reset()`, `getValue()` и ввод с клавиатуры `'73'` с проверкой лога события `input`. |
| **TC-LAY-001** | Layout / Overflow | Узкий контейнер (`max-width: 260px`) с 6-значным `D1InputCode`: отсутствие горизонтального переполнения (`scrollWidth === clientWidth`). |
| **TC-LIF-001** | Lifecycle | Монтирование, размонтирование и повторное монтирование через `v-if` без ошибок и потери реактивности. |
| **TC-RSP-001** | Responsive | Десктоп (`1440x900`) и планшет (`768x1024`): отсутствие горизонтального переполнения страницы. |
| **TC-RSP-002** | Responsive | Мобильный (`375x812`) и компактный (`320x568`) вьюпорты: отсутствие горизонтального переполнения страницы. |
