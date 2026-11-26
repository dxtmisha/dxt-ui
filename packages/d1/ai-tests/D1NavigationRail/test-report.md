# Отчёт о тестировании: D1NavigationRail

**Компонент**: `D1NavigationRail`  
**URL**: `http://localhost:3000/component-navigation-rail`  
**Инструмент**: Headless Chrome CDP (`127.0.0.1:9222`)  
**Дата**: 2026-11-26  
**Статус**: ✅ ПРОЙДЕНО (`100%`)

---

## Сводка результатов

- **Всего `.d1-navigationRail` экземпляров**: 16 (видимых: 14)
- **Секции (`D1Group`)**: 7, заголовок `<h1>` присутствует
- **Ошибки консоли (`console.error`)**: `0`
- **Предупреждения Vue (`[Vue warn]`)**: `0`
- **Ошибки страницы (`pageerror`)**: `0`
- **Сетевые ошибки (`>= 400`)**: `0`

---

## Результаты прогонов

| Тест-кейс | Статус | Фактический результат | Скриншот |
| :--- | :--- | :--- | :--- |
| TC-VIS-001 | ✅ | Десктоп (`1440×900`): базовые элементы, бейджи, `badgeDot`, `Record`, кастомные ключи, `divider`, `menu`, `html`-слоты и узкий блок отрисованы чисто | [TC-VIS-001.png](screenshots/TC-VIS-001.png) |
| TC-FNC-001..004 | ✅ | `selected (single): inbox`, `focus: explore`, подменю `Tools` открыло `Console` (`submenuVisible: true`), Expose вернул `selectedValues: ["home"]`, Toggle Mount отработал чисто | [TC-FNC-001.png](screenshots/TC-FNC-001.png) |
| TC-BND-001 | ✅ | Корневой `disabled` блокирует клики и вложенные меню (`Blocked Click Count: 0`), числовой `0` и экранирование XSS работают корректно | — |
| TC-RSP-001 | ✅ | `1440×900`, `768×1024`, `375×812`, `320×568`: `scrollWidth === innerWidth`, `overflowingSelf: 0` | [TC-RSP-001.png](screenshots/TC-RSP-001.png) |
| TC-A11Y-001 | ✅ | Роли `["listbox", "menu"]`, `aria-disabled="true"` (`ariaDisabledCount: 1`), `aria-multiselectable="true"` (`ariaMultiselectableCount: 1`) | — |
