# Тест-кейсы: `D1Alert`

- **Целевая страница**: `http://localhost:3000/component-alert`
- **Компонент**: `D1Alert` (`@dxtmisha/d1`, конструктор `@dxtmisha/constructor/Alert`)

## 1. Визуальное тестирование (`VIS`)

- **TC-VIS-001** — Базовые варианты (`Basic`): отображение алерта с `label + description`, только `label`, только `description`, а также числовых `0` (`label="0"`, `description="0"`). Проверка вертикальных отступов, типографики и корректных `id`.
- **TC-VIS-002** — Иконки (`Icons`): отображение ведущей иконки (`icon`), связки ведущей и хвостовой иконок (`icon + iconTrailing`), модификаторов `iconTurn`, `iconDir`, `iconHide` и `iconAttrs`.
- **TC-VIS-003** — Хвостовая кнопка (`Trailing Button`) и выравнивание (`Alignment / itemCenter`): отображение строковой кнопки, числовой `0`, объектной с `primary`, иконочной кнопки рядом с `closeButton`, а также сравнение `itemCenter: true` vs `itemCenter: false` для многострочного текста.
- **TC-VIS-004** — Оформления и палитры (`Appearances & Palettes`): отображение `primary`, `secondary`, `palette` (`slate`, `red` + `primary`, `green`, `blue`, `amber`) с достаточным контрастом текста и фона.
- **TC-VIS-005** — Действия, встроенные ссылки (`Actions & Links`) и слоты (`Slots`): корректное расположение `links` (с разделителями и с `linksAttrs: { divider: false }`), `actionsList` + `actionsSecondary`, а также слотов `#default`, `#description`, `#body`, `#trailing`.

## 2. Интерактивное тестирование (`INT`)

- **TC-INT-001** — Жизненный цикл закрытия (`Close Button`): клик по `.d1-alert__buttonClose` добавляет класс `d1-alert--hide`, после завершения CSS-перехода `opacity` алерт удаляется из DOM и генерирует событие `close`; кнопка `Restore Dismissed Alerts` восстанавливает алерты.
- **TC-INT-002** — События хвостовой кнопки (`Trailing Button`): клик по строковой, числовой (`0`), объектной (`value: 'retry-sync'`) и иконочной (`value: 'open-details'`) кнопкам генерирует `click` / `clickLite` с ожидаемым payload.
- **TC-INT-003** — События ссылок, действий и динамических переключателей (`Actions & Links` / `Icons` / `Events`): клик по ссылке (`link`/`linkLite`), кнопке действия (`actions`/`actionsLite`), а также переключение `Toggle Icon Turn`, `Toggle Icon Hide` и `Toggle Actions Hide`.

## 3. Граничные случаи (`BND`)

- **TC-BND-001** — Длинные неразрывные строки, Unicode (вьетнамский, кириллица, эмодзи), XSS-строки и пустой массив `links: []`: текст не ломает горизонтальную раскладку (нет горизонтального скролла), XSS-теги экранированы как текст, `links: []` не создаёт пустой контейнер `.d1-alert__links`.

## 4. Адаптивность (`RSP`)

- **TC-RSP-001** — Поведение на Tablet (`768×1024`), Mobile (`375×812`) и Narrow Mobile (`320×568`): проверка отсутствия горизонтального переполнения страницы и клиппинга элементов алерта на всех разрешениях.

## 5. Доступность (`A11Y`)

- **TC-A11Y-001** — ARIA-семантика и клавиатурная навигация: наличие `role="alert"` / `role="status"`, `aria-live="polite"` / `"assertive"`, `aria-labelledby` / `aria-describedby` (только при наличии соответствующих элементов, с совпадением `id`), `aria-label` на кнопках закрытия (`Close` и пользовательский `Dismiss notification`), отсутствие дублирующихся классов `d1-alert__button`.

## 6. Консоль и сеть (`LOG`)

- **TC-LOG-001** — Чистота консоли и сетевых запросов: `0` ошибок `console.error`, `0` предупреждений Vue (`[Vue warn]`), `0` необработанных `pageerror` и `0` проваленных сетевых запросов на всём прогоне.
