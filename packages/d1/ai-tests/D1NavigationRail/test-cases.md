# Тест-кейсы: D1NavigationRail

**Компонент**: `D1NavigationRail` (`packages/demo/src/pages/components/DemoNavigationRailPage.vue`)  
**Маршрут**: `/component-navigation-rail`  
**Дата**: 2026-11-26  

---

## Матрица тест-кейсов

| ID | Категория | Сценарий | Ожидаемый результат |
| :--- | :--- | :--- | :--- |
| TC-VIS-001 | Визуальный рендер | Начальная загрузка на десктопе (`1440×900`) | Отображаются панели навигации с иконками, бейджами, `badgeDot`, разделителями, группами и слотами |
| TC-FNC-001 | Интерактив и выбор | Нажатие кнопок `Select Inbox`, `Focus Explore` | Обновляются значения `selected (single): inbox`, `focus: explore` |
| TC-FNC-002 | Выпадающее подменю | Клик по пункту `Tools` (`type: 'menu'`) и закрытие по `Escape` | Открывается подменю с пунктом `Console` (`submenuVisible: true`), закрывается по клавише `Escape` |
| TC-FNC-003 | Expose API | Нажатие `Read Expose State` | Выводится JSON с `isSelected: true`, `selectedValues: ["home"]`, `selectedNames: ["Home"]` |
| TC-FNC-004 | Жизненный цикл | Двукратное нажатие `Toggle Mount` | Панель размонтируется (`Mounted: false`) и монтируется повторно (`Mounted: true`) |
| TC-BND-001 | Блокировка и границы | Клик по отключённой панели (`disabled`), `[]`, `undefined`, числовой `0`, XSS | Клик заблокирован (`Blocked Click Count: 0`), граничные значения и XSS обработаны безопасно |
| TC-RSP-001 | Адаптивность | Проверка на `1440×900`, `768×1024`, `375×812`, `320×568` | `scrollWidth === innerWidth`, `overflowingSelf === 0` на всех вьюпортах |
| TC-A11Y-001 | Доступность | Проверка ролей, ARIA-атрибутов и клавиатурного управления | Поддержка ролей `listbox` / `menu`, `roleItem`, `aria-multiselectable`, `aria-disabled` и навигации стрелками |
