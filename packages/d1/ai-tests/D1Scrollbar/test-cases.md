# План визуального и функционального тестирования D1Scrollbar

Компонент: `D1Scrollbar`
Страница демо: `http://localhost:3000/component-scrollbar`

## Тест-кейсы

1. **Загрузка страницы и отсутствие ошибок консоли**
   - Страница `/component-scrollbar` загружается без ошибок JavaScript (`pageerror`) и ошибок в консоли (`console.error`).
   - Все секции демо (`Basic Usage`, `Always Visible Thumb`, `Dynamic Dividers`, `Individual Dividers`, `Dynamic Dividers (inverse)`, `Hidden Dividers`, `Native Browser Engine`, `Custom Container Tag`, `Interactive Controls & Boundary Events`) корректно отображаются.

2. **Базовый рендеринг и пропсы отображения (`visible`, `standard`, `tag`)**
   - В `Basic Usage` рендерится контейнер с классом `d1-scrollbar` и ограниченной высотой (`160px`), содержимое прокручивается.
   - В `Always Visible Thumb (visible)` присутствует модификатор класса для видимого скроллбара (`d1-scrollbar--visible`).
   - В `Native Browser Engine (standard)` присутствует модификатор `d1-scrollbar--standard`.
   - В `Custom Container Tag (tag)` контейнеры рендерятся с тегами `<section>` и `<article>`.

3. **Динамические разделители (`divider`, `dividerTop`, `dividerBottom`, `inverse`, `dividerHide`)**
   - При прокрутке `Dynamic Dividers (dividerTop & dividerBottom)` в середину и к нижней границе обновляются классы границ (`d1-scrollbar--borderTop`, `d1-scrollbar--borderBottom` или соответствующие классы состояния).
   - `Hidden Dividers (dividerHide)` подавляет отображение границ-разделителей.

4. **Интерактивная прокрутка и граничные события (`top`, `bottom`, `reachTop`, `reachBottom`, `leaveTop`, `leaveBottom`, `edge`)**
   - Нажатие на кнопку `Scroll to Bottom` прокручивает интерактивный контейнер вниз и обновляет значение `DemoValue` (фиксируются граничные события).
   - Нажатие на кнопку `Scroll to Middle` прокручивает контейнер в середину (событие `leaveTop` / `leaveBottom`).
   - Нажатие на кнопку `Scroll to Top` возвращает контейнер в начало (событие `top` / `reachTop` / `edge`).

5. **Адаптивность (Desktop 1440x900 и Mobile 375x812)**
   - На мобильном разрешении (375x812) отсутствует горизонтальное переполнение страницы (`scrollWidth <= clientWidth`), текстовые блоки и кнопки управления читаемы.
