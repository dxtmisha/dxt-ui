# Тест-кейсы: D1NavigationRail

- **Компонент**: `D1NavigationRail`
- **URL**: `http://localhost:3000/component-navigation-rail`

## 1. Визуальный осмотр и рендеринг (`VIS`)
- `TC-VIS-001`: Проверка отображения заголовка страницы (`NavigationRail`) и всех демонстрационных вариантов (`16` экземпляров `.d1-navigationRail`).

## 2. Интерактивность, события и жизненный цикл (`INT`)
- `TC-INT-001`: Программный выбор (`Select Inbox`), фокусировка (`Focus Explore`), чтение `expose` (`Read Expose State`), раскрытие/закрытие подменю (`Tools` → `Console`, `Escape`) и цикл `Toggle Mount`.

## 3. Граничные значения (`BND`)
- `TC-BND-001`: Блокировка кликов при `disabled` (`Blocked Click Count: 0`) и защита от XSS (`<img src="x">`).

## 4. Адаптивность (`RSP`)
- `TC-RSP-001`: Проверка отсутствия горизонтального переполнения на разрешениях `1440×900`, `768×1024`, `375×812`, `320×568`.

## 5. Доступность (`A11Y`)
- `TC-A11Y-001`: Проверка ARIA-ролей (`listbox`, `menu`), `aria-multiselectable="true"` и `aria-disabled="true"`.

## 6. Консоль и сеть (`LOG`)
- `TC-LOG-001`: Отсутствие ошибок консоли, предупреждений Vue, runtime-исключений и сетевых ошибок.
