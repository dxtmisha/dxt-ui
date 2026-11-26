# Отчёт о тестировании: D1NavigationList

**Компонент**: `D1NavigationList`  
**URL**: `http://localhost:3000/component-navigation-list`  
**Инструмент**: Headless Chrome CDP (`127.0.0.1:9222`)  
**Дата**: 2026-11-26  
**Статус**: ✅ ПРОЙДЕНО (`100%`)

---

## Сводка результатов

- **Всего `.d1-navigationList` экземпляров**: 27 (видимых: 26, вкл. скрытые фильтром или в группах)
- **Секции (`D1Group`)**: 9, заголовок `<h1>` присутствует
- **Ошибки консоли (`console.error`)**: `0`
- **Предупреждения Vue (`[Vue warn]`)**: `0`
- **Ошибки страницы (`pageerror`)**: `0`
- **Сетевые ошибки (`>= 400`)**: `0`

---

## Результаты прогонов

| Тест-кейс | Статус | Фактический результат | Скриншот |
| :--- | :--- | :--- | :--- |
| TC-VIS-001 | ✅ | Десктоп (`1440×900`): все группы, `subtitle`, `line`, `space`, `group`, `menu`, `html`, скелетон и узкий блок отрисованы | [TC-VIS-001.png](screenshots/TC-VIS-001.png) |
| TC-FNC-001..004 | ✅ | `selected (single): analytics`, `focus: settings`, фильтр `User` оставил `["users"]`, Expose вернул `selectedValues: ["dashboard"]`, Toggle Mount отработал чисто (`Mounted: false` -> `true`) | [TC-FNC-001.png](screenshots/TC-FNC-001.png) |
| TC-BND-001 | ✅ | Корневой `disabled` блокирует клики (`Blocked Click Count: 0`), числовой `0` и экранирование XSS работают корректно | — |
| TC-RSP-001 | ✅ | `1440×900`, `768×1024`, `375×812`, `320×568`: `scrollWidth === innerWidth`, `overflowingSelf: 0` на всех вьюпортах | [TC-RSP-001.png](screenshots/TC-RSP-001.png) |
| TC-A11Y-001 | ✅ | Роли `["listbox", "menu"]`, `aria-disabled="true"` (`ariaDisabledCount: 1`), `aria-multiselectable="true"` (`ariaMultiselectableCount: 1`) | — |
