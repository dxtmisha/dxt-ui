# Тест-кейсы: D1Section

- **Компонент**: `D1Section`
- **URL**: `http://localhost:3000/component-section`

## 1. Визуальный осмотр и рендеринг (`VIS`)
- `TC-VIS-001`: Отображение семантических тегов по умолчанию (`<section>`, `<h2>`), токенов (`appearance`, `gap`), `headline`, `label`, `caption`, `description`, `icon`, `actionsList` и ARIA-привязок (`aria-labelledby`, `aria-describedby`).

## 2. Интерактивность, события и жизненный цикл (`INT`)
- `TC-INT-001`: Реактивное переключение тега контейнера (`section` → `article`), тега заголовка (`h2` → `h3`), `iconTurn`, клик по кнопке действий (`actionClicks: 1`), отображение вложенного контекста области (`area = compact` в слотах `default` и `trailing`) и цикл `Unmount Section` / `Mount Section`.

## 3. Граничные значения (`BND`)
- `TC-BND-001`: Пустые значения (`emptyHasBody: false`), пробельные строки (`wsHasBody: false`), чистый `body` без шапки (`bodyOnlyHasBody: false`), числовое значение `0` в `headline`/`label`, перенос сверхдлинного текста в узком контейнере и проверка защиты от XSS.

## 4. Адаптивность (`RSP`)
- `TC-RSP-001`: Отсутствие переполнения на `1440×900`, `768×1024`, `375×812`, `320×568` для всех `18` экземпляров `.d1-section`.

## 5. Доступность (`A11Y`)
- `TC-A11Y-001`: Наличие `aria-labelledby`, `aria-describedby`, `role="region"` и кастомных ID заголовка.

## 6. Консоль и сеть (`LOG`)
- `TC-LOG-001`: Проверка отсутствия ошибок консоли, Vue-предупреждений, runtime-ошибок и HTTP-ошибок.
