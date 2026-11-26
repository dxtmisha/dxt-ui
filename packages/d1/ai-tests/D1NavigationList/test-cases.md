# Тест-кейсы: D1NavigationList

- **Компонент**: `D1NavigationList`
- **URL**: `http://localhost:3000/component-navigation-list`

## 1. Визуальный осмотр и рендеринг (`VIS`)
- `TC-VIS-001`: Проверка отображения заголовка страницы (`NavigationList`) и всех демонстрационных вариантов списка навигации (`27` экземпляров `.d1-navigationList`).

## 2. Интерактивность, события и жизненный цикл (`INT`)
- `TC-INT-001`: Выбор элемента (`Select Analytics`), фокусировка (`Focus Settings`), подсветка совпадений (`Highlight 'role'`), переключение режима `lite` (`Disable Lite Mode`), чтение `expose`-состояния (`Read Expose State`), фильтрация элементов по вводу `'User'` и цикл размонтирования/монтирования (`Toggle Mount`).

## 3. Граничные значения (`BND`)
- `TC-BND-001`: Блокировка кликов при `disabled` (`Blocked Click Count: 0`), рендеринг числовых значений `0`, проверка защиты от XSS при передаче `<img src=x>` в данные.

## 4. Адаптивность (`RSP`)
- `TC-RSP-001`: Проверка отсутствия горизонтального переполнения (`scrollWidth <= innerWidth`, `overflowingSelf === 0`) на разрешениях `desktop` (`1440×900`), `tablet` (`768×1024`), `mobile` (`375×812`) и `mobile-sm` (`320×568`).

## 5. Доступность (`A11Y`)
- `TC-A11Y-001`: Наличие корректных ARIA-ролей (`listbox`, `menu`), `aria-multiselectable="true"` и `aria-disabled="true"`.

## 6. Консоль и сеть (`LOG`)
- `TC-LOG-001`: Отсутствие ошибок консоли, предупреждений Vue (`[Vue warn]`), ошибок страницы и сетевых ошибок (`HTTP >= 400`).
