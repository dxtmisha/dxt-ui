# Тест-кейсы для визуального тестирования D1Ripple

## 1. Визуальные проверки (VIS)
- **VIS-01: Базовая загрузка страницы и отображение секций**
  - Открыть `/component-ripple` на desktop (1440x900).
  - Убедиться, что все секции (`Basic Usage`, `States (Disabled)`, `Programmatic Control (Expose API)`, `Inherited Border Radius (Shapes)`) отрендерены без перекрытий.
- **VIS-02: Наличие контейнеров `.d1-ripple` и наследование `border-radius`**
  - Проверить наличие 6 экземпляров `.d1-ripple` (Basic, Disabled, Programmatic, Rounded, Pill, Circle).
  - Проверить `position: absolute`, `overflow: hidden` и унаследованный `border-radius` для Rounded, Pill и Circle контейнеров.

## 2. Интерактивные проверки (INT)
- **INT-01: Клик по базовому контейнеру (`pointerdown`)**
  - Выполнить клик (или `pointerdown`) внутри первого `.d1-ripple`.
  - Убедиться, что создаётся дочерний элемент `.d1-ripple__item` с CSS-переменными координат (`--d1-ripple-sys-x` и `--d1-ripple-sys-y`).
- **INT-02: Переключение состояния `disabled`**
  - Нажать кнопку `Disable Ripple` и проверить обновление текста на `Ripple is Disabled (clicks ignored)` и `disabled: true`.
  - Выполнить `pointerdown` по отключённому `.d1-ripple` и убедиться, что новый `.d1-ripple__item` НЕ создаётся.
- **INT-03: Программный API (`addCenter`, `add`)**
  - Нажать `Trigger Center (addCenter)` и проверить `Last action: addCenter()` и появление `.d1-ripple__item` в целевом контейнере.
  - Нажать `Trigger Top-Left (add 24, 24)` и проверить `Last action: add({ x: 24, y: 24 })` и координаты волны (`24px`, `24px`).

## 3. Граничные случаи (BND)
- **BND-01: Координаты `(0, 0)`**
  - Нажать `Trigger Origin (add 0, 0)` и проверить `Last action: add({ x: 0, y: 0 })` и появление `.d1-ripple__item` со значениями `0px`.

## 4. Адаптивность (RSP)
- **RSP-01: Мобильный вьюпорт (375x812)**
  - Переключить вьюпорт на `375x812` и проверить отсутствие горизонтального переполнения (`document.documentElement.scrollWidth <= window.innerWidth`).

## 5. Доступность (A11Y)
- **A11Y-01: Декоративное скрытие от скринридеров**
  - Проверить, что все корневые элементы `.d1-ripple` имеют атрибут `aria-hidden="true"`.

## 6. Логи и консоль (LOG)
- **LOG-01: Отсутствие ошибок консоли и сетевых сбоев**
  - Проверить отсутствие `console.error`, `pageerror` и HTTP-ответов `>= 400` (кроме возможного `/favicon.ico`, если отсутствует).
