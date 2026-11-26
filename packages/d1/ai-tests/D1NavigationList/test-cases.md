# Тест-кейсы: D1NavigationList

**Компонент**: `D1NavigationList` (`packages/demo/src/pages/components/DemoNavigationListPage.vue`)  
**Маршрут**: `/component-navigation-list`  
**Дата**: 2026-11-26  

---

## Матрица тест-кейсов

| ID | Категория | Сценарий | Ожидаемый результат |
| :--- | :--- | :--- | :--- |
| TC-VIS-001 | Визуальный рендер | Начальная загрузка на десктопе (`1440×900`) | Все группы, списки, разделители, группы, подменю, скелетон и узкие контейнеры отображаются без перекрытий |
| TC-FNC-001 | Интерактив и выбор | Нажатие кнопок `Select Analytics`, `Focus Settings`, `Highlight 'role'`, `Disable Lite Mode` | Обновляются состояния `selected (single): analytics`, `focus: settings`, подсветка и режим `lite` |
| TC-FNC-002 | Поиск и фильтрация | Ввод текста `User` в поле поиска `Filter navigation...` | Отображается только подходящий пункт `users` (`User Management`) |
| TC-FNC-003 | Expose API | Нажатие `Read Expose State` | Выводится JSON с `isSelected: true`, `selectedValues: ["dashboard"]`, `selectedNames: ["Dashboard"]` |
| TC-FNC-004 | Жизненный цикл | Двукратное нажатие `Toggle Mount` | Список корректно размонтируется (`Mounted: false`) и монтируется обратно (`Mounted: true`) без ошибок |
| TC-BND-001 | Граничные значения и защита | Клик по отключённому списку (`disabled`), проверка пустого списка, `undefined`, `0`, XSS | Клик по `disabled`-списку заблокирован (`Blocked Click Count: 0`), `0` отображается корректно, XSS не исполняется |
| TC-RSP-001 | Адаптивность | Просмотр на `1440×900`, `768×1024`, `375×812`, `320×568` | `scrollWidth === innerWidth`, `overflowingSelf === 0` на всех брейкпоинтах |
| TC-A11Y-001 | Доступность | Проверка ролей и клавиатурной навигации | На элементах присутствуют роли `listbox` / `menu`, поддержка `aria-multiselectable` и `aria-disabled` |
