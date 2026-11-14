# Тест-кейсы для визуального тестирования D1Progress

## 1. Визуальные проверки (VIS)
- **VIS-01: Базовая загрузка страницы и отображение секций**
  - Открыть `/component-progress` на desktop (1440x900).
  - Убедиться, что все секции демо-страницы (`Linear`, `Circular`, `Point`, `Positions`, `Sizes`, `Palettes`, `Values & accessible labels`, `States & Options`, `Delays & Visibility`, `Interactive Controls`) отрендерены без перекрытий и артефактов.
- **VIS-02: Линейный прогресс (`--linear`) и типы неопределённой анимации**
  - Проверить наличие `.d1-progress.d1-progress--linear` с модификаторами `--indeterminate--type1`, `--indeterminate--type2`, `--indeterminate--type3`.
  - Убедиться, что высота и ширина соответствуют ожидаемым (`width > 0`, `height > 0` при `--visible`).
- **VIS-03: Круговой прогресс (`--circular`) и SVG-элементы**
  - Проверить наличие `.d1-progress.d1-progress--circular`, содержащего `<svg>` и `.d1-progress__circle`.
  - Проверить наличие `--dense` и `--inverse` вариантов.
- **VIS-04: Точечный индикатор (`--point`)**
  - Проверить наличие `.d1-progress--point` и дочернего элемента `.d1-progress__point`.
- **VIS-05: Позиционирование (`--position--top|bottom|static`) и размеры (`--size--sm|md|lg`)**
  - Проверить корректное применение классов `--position--top`, `--position--bottom`, `--position--static` и `--size--sm`, `--size--md`, `--size--lg`.
  - Проверить, что при `--position--static` свойство `position` равно `static` (или соответствует токену), а для `sm`/`md`/`lg` размеры различаются.
- **VIS-06: Палитры (`d1-palette--*`)**
  - Проверить наличие нескольких палитр (например, `d1-palette--primary`, `d1-palette--secondary`, `d1-palette--red`, `d1-palette--green`) и ненулевой цвет обводки/фона.

## 2. Интерактивные проверки (INT)
- **INT-01: Переключение видимости (`visible`) в секции Delays & Visibility**
  - Нажать кнопку переключения видимости и проверить изменение состояния прогресса (появление/скрытие `--visible` / `--hide`).
- **INT-02: Интерактивная панель (Interactive Controls)**
  - Изменить значение `value` или переключить режим (`linear` / `circular` / `point`, `size`, `dense`, `inverse`) в интерактивной секции и убедиться, что DOM-классы и стили предпросмотра обновляются.

## 3. Граничные случаи (BND)
- **BND-01: Определённые значения (`value` = 0, 50, 100 / max)**
  - Проверить элементы с `--value`: при `value="0"` и `value="100"` / `max` атрибуты `aria-valuenow` и `aria-valuemax` корректны, а `--value` применяется.

## 4. Адаптивность (RSP)
- **RSP-01: Мобильный вьюпорт (375x812)**
  - Переключить вьюпорт на `375x812` и проверить отсутствие горизонтального переполнения (`document.documentElement.scrollWidth <= window.innerWidth`).
  - Сделать скриншот мобильной версии.

## 5. Доступность (A11Y)
- **A11Y-01: Семантика `role="progressbar"` и ARIA-атрибуты**
  - Проверить, что видимые индикаторы прогресса имеют `role="progressbar"`.
  - Для детерминированных индикаторов проверить наличие `aria-valuemin`, `aria-valuemax`, `aria-valuenow`.
  - Проверить наличие `aria-label` или `aria-labelledby` на примерах с доступными метками.

## 6. Логи и консоль (LOG)
- **LOG-01: Отсутствие ошибок консоли и сетевых сбоев**
  - Проверить отсутствие `console.error`, `pageerror` и HTTP-ответов `>= 400` на протяжении всего сценария.
