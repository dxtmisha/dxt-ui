# Тест-кейсы: D1PageArea

- **Компонент**: `D1PageArea`
- **URL**: `http://localhost:3000/component-page-area`

## 1. Визуальный осмотр и рендеринг (`VIS`)
- `TC-VIS-001`: Автоматическое каскадное делегирование уровней (`container` → `d1-page`, `page` → `d1-section`, `section` → `d1-block`, `block` → `d1-group`), проброс fallthrough-атрибутов (`data-testid`, `aria-labelledby`, `aria-describedby`).

## 2. Интерактивность, события и жизненный цикл (`INT`)
- `TC-INT-001`: Реактивное переключение `tag` (`article`), `tagHeader` (`h3`), `area` (`compact`), `iconTurn`, клик по кнопке в слоте `#trailing` (`actionClicks: 1`) и цикл `Unmount PageArea` / `Mount PageArea`.

## 3. Граничные значения (`BND`)
- `TC-BND-001`: Числовое значение `0` во всех заголовках/подписях, пустые и пробельные строки, проверка всех слотов (`#headline`, `#label`, `#caption`, `#trailing`, `#description`, `#default`), длинный неразрывный текст в узком контейнере (`220px`) и защита от XSS.

## 4. Адаптивность (`RSP`)
- `TC-RSP-001`: Проверка отсутствия горизонтального переполнения на `1440×900`, `768×1024`, `375×812`, `320×568` для всех `5` секций и делегированных экземпляров.

## 5. Доступность (`A11Y`)
- `TC-A11Y-001`: Семантические теги (`MAIN`, `SECTION`), заголовки (`H3`) и ARIA-связи (`aria-labelledby`, `aria-describedby`).

## 6. Консоль и сеть (`LOG`)
- `TC-LOG-001`: Отсутствие ошибок консоли, Vue-предупреждений, runtime-ошибок и HTTP-ошибок.
