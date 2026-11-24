# Спецификация визуального тестирования: `D1Pagination`

- **Демо-страница:** [DemoPaginationPage.vue](file:///Users/tung/Documents/GitHub/dxt-ui/packages/demo/src/pages/components/DemoPaginationPage.vue) (`/component-pagination`)
- **UI-компонент:** [D1Pagination.vue](file:///Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Pagination/D1Pagination.vue)
- **Конструктор:** [Pagination.ts](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Pagination/Pagination.ts), [PaginationDesign.tsx](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Pagination/PaginationDesign.tsx)

## Тест-кейсы

| ID | Категория | Сценарий и ожидаемый результат |
| --- | --- | --- |
| `TC-VIS-001` | Visual / ARIA | Базовая пагинация (`count=100`, `rows=10`, `value=2`, `showInfo`, `showEnds`, `menuRows`): отображает `role="navigation"`, `aria-label="Pagination"`, активную страницу `2` с `aria-current="page"`, диапазон `11-20 of 100`, селектор лимита `10` и `•••` с `aria-hidden="true"`. |
| `TC-A11Y-001` | Keyboard / Focus | Направленная клавиатурная навигация (`FocusDirectionInclude`): контейнер имеет `tabindex="0"`, фокус активирует текущую страницу (`2`), `ArrowRight` смещает фокус на `3`, `Enter` переключает модель на `page=3`, `blur` снимает класс фокуса. |
| `TC-INT-001` | Two-Way Binding | Синхронизация `v-model:value` и `v-model:rows`: внешние кнопки `Go to Page 5`, `Set Rows to 20` и `Reset` мгновенно обновляют активную кнопку (`aria-current="page"`), подпись меню строк и `DemoValue`. |
| `TC-INT-002` | Loaders | Режимы инкрементальной загрузки `showMore` (`3 -> 4`) и `showMorePrev` (`4 -> 3`) корректно обновляют состояние через `@more-lite` и `@more-prev-lite`. |
| `TC-INT-003` | Events | События `more` / `moreLite`, `morePrev` / `morePrevLite`, `click` / `clickLite` передают корректный payload (`type`, `value`). |
| `TC-VIS-002` | Slots / Custom | Слоты `#leading`, `#info`, `#trailing`, кастомные иконки (строки и объекты), проброс атрибутов (`buttonAttrs`, `buttonMoreAttrs`, `buttonMorePrevAttrs`, `buttonMenuAttrs`, `menuAttrs`) и текстовые оверрайды (`textPagination`, `textPage`, `textInfo="[item] / [count]"` -> `31-45 / 90`). |
| `TC-BND-001` | Boundary / Types | Строковые пропсы (`value="3"`, `count="120"`, `rows="15"` -> `31-45 of 120`), переключение `hideIfOne` (`true -> false` для 1 страницы) и `count=0` (`0-0 of 0`, все 4 навигационные кнопки `disabled`). |
| `TC-VIS-003` | Adaptive / RTL | Адаптивный модификатор `adaptive="lineAlways"` применяет класс `d1-pagination--adaptive--lineAlways`; переключение `dir="rtl"` корректно отражает макет без ошибок. |
| `TC-RESP-001` | Responsive / Logs | Проверка на вьюпортах Desktop (`1440×900`), Tablet (`768×1024`) и Mobile (`375×812`): `0px` горизонтального переполнения (`scrollWidth <= clientWidth`), `0` ошибок консоли, `0` `[Vue warn]`, `0` `pageerror`. |
