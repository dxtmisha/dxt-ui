# Отчёт о визуальном и функциональном тестировании: D1Icon

- **Сущность**: `D1Icon`
- **Целевой URL**: `http://localhost:3000/component-icon`
- **Среда**: Headless Chrome (`Chrome/157.0.8103.51`) через CDP (`http://127.0.0.1:9222`)
- **Дата запуска**: `2026-11-14`
- **Итог**: `12 / 12` пройдено (`✅ OK`), `0` провалено, `0` ошибок консоли, `0` предупреждений Vue.

---

## 1. Сводная таблица результатов

| ID | Название | Категория | Приоритет | Статус | Артефакт |
| :--- | :--- | :--- | :---: | :---: | :--- |
| `TC-VIS-001` | Рендеринг шкалы размеров (`auto`, `x`–`9xl`) | `VIS` | P0 | ✅ OK | [TC-VIS-001.png](./screenshots/TC-VIS-001.png) |
| `TC-VIS-002` | Формы и скругления (`square`, `circle`, `rect`, `rounded`) | `VIS` | P1 | ✅ OK | [TC-VIS-002.png](./screenshots/TC-VIS-002.png) |
| `TC-VIS-003` | Палитры, семантические цвета и инверсная поверхность | `VIS` | P1 | ✅ OK | [TC-VIS-003.png](./screenshots/TC-VIS-003.png) |
| `TC-INT-001` | Переключение двойной иконки (`active` + `iconActive`) | `INT` | P0 | ✅ OK | [TC-INT-001.png](./screenshots/TC-INT-001.png) |
| `TC-INT-002` | Состояние загрузки скелетона (`D1Skeleton` + `isSkeleton`) | `INT` | P1 | ✅ OK | [TC-INT-002.png](./screenshots/TC-INT-002.png) |
| `TC-INT-003` | События (`@click`, `@click-lite`, `@load`) и `expose` | `INT` | P0 | ✅ OK | [TC-INT-003.png](./screenshots/TC-INT-003.png) |
| `TC-BND-001` | Трансформации и направление RTL (`turn`, `dir`) | `BND` | P1 | ✅ OK | [TC-BND-001.png](./screenshots/TC-BND-001.png) |
| `TC-BND-002` | Пустые источники и `active`-only иконка | `BND` | P2 | ✅ OK | [TC-BND-002.png](./screenshots/TC-BND-002.png) |
| `TC-RSP-001` | Десктопный вьюпорт (`1440×900`) без переполнения | `RSP` | P1 | ✅ OK | [TC-RSP-001.png](./screenshots/TC-RSP-001.png) |
| `TC-RSP-002` | Мобильный вьюпорт (`375×812`) — адаптивность и перенос | `RSP` | P1 | ✅ OK | [TC-RSP-002.png](./screenshots/TC-RSP-002.png) |
| `TC-A11Y-001` | Доступность (`aria-hidden`, `role`, `aria-label`, `aria-checked`) | `A11Y` | P1 | ✅ OK | DOM-проверка |
| `TC-LOG-001` | Отсутствие ошибок консоли и предупреждений Vue | `LOG` | P0 | ✅ OK | Логи консоли |

---

## 2. Наблюдения и детали проверок

- **Размеры (`TC-VIS-001`)**: Все 15 вариантов отрендерены, ширины от `16px` (`x`) до `128px` (`9xl`).
- **Интерактивность (`TC-INT-001`–`TC-INT-003`)**: Переключение `active`, `isSkeleton`, клик по управляемой иконке и обновление `expose` (`isActive(): true`, `getValue(): "bookmark-action"`, `getDetail()`) работают без сбоев.
- **Доступность (`TC-A11Y-001`)**: Декоративные иконки имеют `aria-hidden="true"`; интерактивные имеют `role="button"` / `role="switch"`, `tabindex="0"`, `aria-checked="true"`, `aria-disabled="true"` и тег `<a>` для `href`.
- **Адаптивность (`TC-RSP-001`, `TC-RSP-002`)**: `scrollWidth <= innerWidth` на `1440×900` (`1440 <= 1440`) и `375×812` (`360 <= 375`).
- **Консоль (`TC-LOG-001`)**: `0` ошибок консоли, `0` исключений, `0` предупреждений `[Vue warn]`.
