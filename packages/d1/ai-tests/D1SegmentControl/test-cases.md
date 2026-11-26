# План визуального тестирования `D1SegmentControl`

**URL демо-страницы:** `http://localhost:3000/component-segment-control`  
**Целевой компонент:** `D1SegmentControl` (`@dxtmisha/constructor/SegmentControl`)

---

## Категория 1. Визуальный рендеринг (`VIS`)
- **TC-VIS-01**: Первичный рендер страницы без поломок вёрстки; базовые группы (`Basic Usage`, `With Icons`, `With Badges`, `Disabled & Loading Items`, `Divider & Custom Keys`, `Horizontal Scroll`, `Slots`, `Events & Expose`, `Boundary`) отображаются корректно.
- **TC-VIS-02**: Проверка дефолтных настроек `horizontalScrollAlign: 'block'` (`d1-horizontalScroll--align--block`) и `horizontalScrollBleed: false` (отсутствует `d1-horizontalScroll--bleed`) на базовом `D1SegmentControl`, а также явного `horizontalScrollAlign="left"` и `divider`.
- **TC-VIS-03**: Отображение состояния загрузки (`loading: true` с `D1Progress`) и отключённого сегмента (`disabled: true`) внутри `D1SegmentControl`.

## Категория 2. Интерактивность и события (`INT`)
- **TC-INT-01**: Клик по сегментам и кнопкам управления `v-model:selected` синхронно обновляет выбранный сегмент (`aria-selected="true"`) и `DemoValue`.
- **TC-INT-02**: Клик по отключённому (`disabled: true`) и загружающемуся (`loading: true`) сегменту не меняет выбранное значение.
- **TC-INT-03**: События `@click` (`useDemoEvent`) и программный вызов `expose().ids()` возвращают корректные данные и карту DOM ID.
- **TC-INT-04**: Переключение `Toggle Mount` корректно размонтирует и повторно монтирует `D1SegmentControl` без ошибок.

## Категория 3. Граничные значения и безопасность (`BND`)
- **TC-BND-01**: Кастомные ключи `key-value="id"` и `key-label="title"` корректно работают с числовым значением `0` (`0 (Zero Value)`).
- **TC-BND-02**: XSS-строка `<img src=x onerror=alert(1)>`, кавычки `quoted "val"` и многоязычный Unicode (`Привет · Học tiếng Việt · 🚀`) экранируются как текст без выполнения скриптов и без падений `querySelector`.

## Категория 4. Адаптивность (`RSP`)
- **TC-RSP-01**: Проверка вёрстки без горизонтального переполнения страницы (`scrollWidth <= clientWidth`) на разрешениях `1920x1080`, `1440x900`, `768x1024` и `375x812`.

## Категория 5. Доступность (`A11Y`)
- **TC-A11Y-01**: Контейнер имеет `role="tablist"`, `aria-orientation="horizontal"`, `tabindex="0"`, `aria-label`; сегменты имеют `role="tab"`, `aria-selected`, `aria-disabled` для `disabled`/`loading`; навигация с клавиатуры (`ArrowRight`, `Home`, `End`, `Enter`) корректно работает и пропускает `disabled`.

## Категория 6. Консоль и сетевые ошибки (`LOG`)
- **TC-LOG-01**: Ноль ошибок JS (`pageerror`), ноль `console.error`, ноль Vue-предупреждений (включая отсутствие `Invalid prop: type check failed for prop "horizontalScrollAlign"` / `"align"`), ноль `4xx/5xx` ответов сети.
