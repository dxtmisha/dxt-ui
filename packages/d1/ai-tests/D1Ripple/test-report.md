# Отчёт о визуальном тестировании D1Ripple

- **Дата (UTC):** 2026-11-14T11:16:08Z
- **URL:** `http://localhost:3000/component-ripple`
- **Инструмент:** Headless Chrome CDP + Puppeteer (`1440x900` desktop, `375x812` mobile)
- **Итог:** ✅ ВСЕ ПРОВЕРКИ ПРОЙДЕНЫ (`0` ошибок, `0` падений)

## Результаты по тест-кейсам

| ID | Проверка | Статус | Детали |
| --- | --- | --- | --- |
| VIS-01 | Базовая загрузка и отображение секций | ✅ PASS | Все секции (`Basic Usage`, `States (Disabled)`, `Programmatic Control`, `Inherited Border Radius`) отрендерены корректно ([01-desktop-initial.png](./screenshots/01-desktop-initial.png)). |
| VIS-02 | Контейнеры `.d1-ripple` и `border-radius` | ✅ PASS | Найдено 11 `.d1-ripple` (включая кнопки); `position: absolute`, `overflow: hidden`, `border-radius` наследуется (`16px`, `128px`, `50%`). |
| INT-01 | Нажатие на базовый контейнер (`pointerdown`) | ✅ PASS | Создан `.d1-ripple__item` со стилями `--d1-ripple-sys-x: 639px; --d1-ripple-sys-y: 95px;` ([02-desktop-ripple-active.png](./screenshots/02-desktop-ripple-active.png)). |
| INT-02 | Переключение состояния `disabled` | ✅ PASS | После клика по `Disable Ripple` отобразилось `disabled: true`, клик по отключённому `.d1-ripple` не создаёт `.d1-ripple__item` (`0`). |
| INT-03 | Программный API (`addCenter`, `add`) | ✅ PASS | `Trigger Center` → `Last action: addCenter()` (`1` волна); `Trigger Top-Left` → `Last action: add({ x: 24, y: 24 })` (`--d1-ripple-sys-x: 24px; --d1-ripple-sys-y: 24px;`). |
| BND-01 | Координаты `(0, 0)` | ✅ PASS | `Trigger Origin` → `Last action: add({ x: 0, y: 0 })` (`--d1-ripple-sys-x: 0px; --d1-ripple-sys-y: 0px;`). |
| RSP-01 | Мобильный вьюпорт (`375x812`) | ✅ PASS | Горизонтального переполнения нет (`scrollWidth: 375 <= innerWidth: 375`), ([03-mobile.png](./screenshots/03-mobile.png)). |
| A11Y-01 | Доступность (`aria-hidden`) | ✅ PASS | Все 11 экземпляров `.d1-ripple` имеют `aria-hidden="true"`. |
| LOG-01 | Консоль и сеть | ✅ PASS | `console.error`: 0, `pageerror`: 0, сетевых ошибок (>= 400): 0. |

## Скриншоты
- [01-desktop-initial.png](./screenshots/01-desktop-initial.png)
- [02-desktop-ripple-active.png](./screenshots/02-desktop-ripple-active.png)
- [03-mobile.png](./screenshots/03-mobile.png)
