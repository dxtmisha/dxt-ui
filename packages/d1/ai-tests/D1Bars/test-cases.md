# Спецификация тест-кейсов: D1Bars

- **Сущность**: `D1Bars`
- **Путь к исходному коду**: `packages/d1/src/components/Ui/Bars` (`packages/constructor/src/constructors/Bars`, `packages/demo/src/pages/components/DemoBarsPage.vue`)
- **Целевой URL**: `http://localhost:3000/component-bars`
- **Справочные материалы**: `None`
- **Последняя проверка / обновление**: `2026-11-25`
- **Всего тест-кейсов**: `14`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Распределение приоритетов | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 3 | P0, P1 | Базовый макет, иерархия текста, кнопки, все 7 вариантов `padding` и `paddingByIndent`, интерактивный скелетон |
| **Интерактивность и функционал** | `INT` | 5 | P0, P1 | Режим действий (`v-model:action`, `v-model:modelAction`), кнопка «Назад» / `backHide` / `backActionHide`, объектные иконки и функция `textClose`, заблокированные кнопки (`disabled`/`loading`), слоты и `v-if` |
| **Границы и крайние случаи** | `BND` | 3 | P1 | Пустой `<D1Bars/>` и пробелы, числовые `0` / `-15.5`, текстовые кнопки без фантомных иконок, длинные неразрывные строки (`clamp(2)`), Unicode/XSS, узкий `DemoBox` |
| **Адаптивность и viewport** | `RSP` | 1 | P1 | Десктоп (`1440×900`), планшет (`768×1024`), мобильный (`375×812`, `320×568`) |
| **Доступность (A11y)** | `A11Y` | 1 | P1 | `aria-live="polite"`, `aria-label` кнопки «Назад» и иконочных кнопок, пользовательские `labelId`/`descriptionId`, фокус с клавиатуры |
| **Консоль и рантайм** | `LOG` | 1 | P0 | Все события (`click`, `clickLite`, `update:action`, `update:modelAction`) с `Payload`, чистота консоли и отсутствие `[Vue warn]` |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и токены (`VIS`)

#### [TC-VIS-001] Базовый рендеринг заголовка, описания и кнопок D1Bars
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-bars`, viewport `1440×900`, светлая тема.
- **Шаги теста**:
  1. Найти группу `Basic`.
  2. Проверить размеры и стили `.d1-bars`, `.d1-bars__context`, `.d1-bars__label`, `.d1-bars__description`, кнопки «Назад» и кнопок в `bars`.
- **Ожидаемый результат**: Элемент рендерится с ненулевой геометрией, выровненной строкой flex, правильной типографикой заголовка и описания, без наложения или обрезания.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

#### [TC-VIS-002] Варианты отступов (`padding` и `paddingByIndent`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-bars`, прокрутить к группе `Paddings`.
- **Шаги теста**:
  1. Проверить наличие модификаторов `--padding--sm`, `--padding--md`, `--padding--lg`, `--padding--ySm`, `--padding--yMd`, `--padding--yLg`, `--padding--none` и отсутствие `--paddingByIndent` при `paddingByIndent=false`.
  2. Сравнить вычисленные значения `padding-top`, `padding-bottom`, `padding-left`, `padding-right` с вариантом по умолчанию `paddingByIndent=true`.
- **Ожидаемый результат**: Все 7 режимов `padding` и флаг `paddingByIndent` применяют корректные CSS-классы и отступы согласно токенам D1.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-002.png`)

#### [TC-VIS-003] Интерактивный режим скелетона (`isSkeleton` внутри `D1Skeleton`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Visual & Design System`
- **Предусловия**: Открыть `http://localhost:3000/component-bars`, прокрутить к группе `Skeleton & Lifecycle`.
- **Шаги теста**:
  1. Проверить применение класса `.d1-skeleton__textVariant` на `.d1-bars__label` и `.d1-bars__description`, а также состояние скелетона на кнопках при активном `D1Skeleton`.
  2. Нажать `Toggle Skeleton (on)` и проверить возврат к обычному отображению.
- **Ожидаемый результат**: Скелетон переключается без дублирования DOM-дерева и смещения разметки.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-003.png`)

---

### 2.2 Интерактивность и функционал (`INT`)

#### [TC-INT-001] Переключение режима действий (`v-model:action`) и выход по кнопке «Назад»
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-bars`, найти группу `Action Mode & Two-Way Binding`.
- **Шаги теста**:
  1. Проверить исходное состояние первого `D1Bars`: отображается `Standard View`, класс `.d1-bars--action` отсутствует.
  2. Нажать кнопку `Enter Action Mode`, затем `Reset Action` и снова `Enter Action Mode`.
  3. Проверить переключение на `Selected Item State`, появление `.d1-bars--action`, смену кнопок на `actionBars` и обновление `DemoValue`.
  4. Нажать кнопку «Назад» внутри активного `D1Bars`.
- **Ожидаемый результат**: Режим действий активируется с инверсной палитрой и затем корректно закрывается кнопкой «Назад», синхронизируя `isAction` в `false`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

#### [TC-INT-002] Двусторонняя модель `v-model:model-action`, `backHide`, `backActionHide` и форматы `iconBack`/`textClose`/`buttonAttrs`
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-bars`, проверить группы `Action Mode & Two-Way Binding` и `Back Button, Custom Icons & buttonAttrs`.
- **Шаги теста**:
  1. Нажать `Enter Model Action`, проверить переключение на числовые `:action-label="0"` / `:action-description="0"` и скрытие кнопки «Назад» (`backActionHide`).
  2. Проверить скрытие кнопки при `backHide=true`, кастомную `backButton`, объектные `iconBack`/`iconClose`, коллбэк `:text-close="getCloseText"` (`aria-label="Dismiss action bar"`) и общие `buttonAttrs`.
- **Ожидаемый результат**: `modelAction` двусторонне синхронизируется, кнопки возврата и общие атрибуты применяются корректно.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-002.png`)

#### [TC-INT-003] Проекция слотов (`default`, `description`, `bars`, `actionBars`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-bars`, найти группу `Slots`.
- **Шаги теста**:
  1. Проверить отображение `.demo-bars-page__custom-label`, `.demo-bars-page__custom-desc` и кнопок из `#bars` (`Search`, `Refresh`).
  2. Переключить режим действий кнопкой и проверить замену слота `#bars` на `#actionBars` (`Delete`).
- **Ожидаемый результат**: Все именованные и основной слоты корректно проецируются и переключаются при смене `action`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-003.png`)

#### [TC-INT-004] Блокировка событий для `disabled` и `loading` кнопок в `bars`
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-bars`, прокрутить к группе `Blocked & Guarded Actions`.
- **Шаги теста**:
  1. Нажать кнопку `Disabled` (`disabled: true`) и `Loading` (`loading: true`), убедиться, что `DemoValue` в группе `Events` не меняется.
  2. Нажать кнопку `Enabled` (`allowed-click`), убедиться в фиксации события `click` / `clickLite`.
- **Ожидаемый результат**: Заблокированные кнопки не вызывают `click` / `clickLite`, а активная кнопка работает корректно.
- **Тип доказательства**: `Console/Log`

#### [TC-INT-005] Монтирование и размонтирование `D1Bars` (`v-if`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Interactive & Functional`
- **Предусловия**: Открыть `http://localhost:3000/component-bars`, прокрутить к группе `Skeleton & Lifecycle`.
- **Шаги теста**:
  1. Нажать `Unmount Bars`, проверить удаление экземпляра из DOM и обновление `Mounted: false`.
  2. Нажать `Mount Bars` и убедиться в корректном восстановлении компонента.
- **Ожидаемый результат**: Подписчики `BarsAction` корректно создаются и очищаются при монтировании/размонтировании.
- **Тип доказательства**: `Console/Log`

---

### 2.3 Границы и крайние случаи (`BND`)

#### [TC-BND-001] Числовые нулевые значения `label`/`description` (`0`), отрицательные/дробные числа и текстовые кнопки без фантомной иконки
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-bars`, найти группы `Basic` и `Boundary & Edge Cases`.
- **Шаги теста**:
  1. Проверить отображение `"0"` в заголовке и описании второго примера в `Basic` (`:label="0" :description="0"`), а также `"A"` и `"-15.5"`.
  2. Проверить текстовую кнопку `Save` (без `icon`) в первом примере `Basic`: убедиться в отсутствии класса `.d1-button--icon` и пустого элемента иконки.
- **Ожидаемый результат**: Значения `0`, `"A"`, `-15.5` отображаются корректно; текстовые кнопки без `icon` не рендерят пустой `D1Icon`.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

#### [TC-BND-002] Пустой `<D1Bars/>`, пробельные строки и пустой массив `:bars="[]"`
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-bars`, найти группу `Boundary & Edge Cases`.
- **Шаги теста**:
  1. Проверить `[data-testid="demo-bars-empty"]` и панель с `label="   " description="   " :bars="[]"`.
- **Ожидаемый результат**: Элементы рендерятся без исключений, пустые метки/описания не создают пустых DOM-узлов `.d1-bars__label` / `.d1-bars__description`.
- **Тип доказательства**: `Console/Log`

#### [TC-BND-003] Длинные неразрывные строки, Unicode, экранирование XSS и узкий контейнер (`DemoBox`)
- **Приоритет**: `P1 (High)`
- **Категория**: `Boundaries & Edge Cases`
- **Предусловия**: Открыть `http://localhost:3000/component-bars`, найти группу `Boundary & Edge Cases`.
- **Шаги теста**:
  1. Проверить 2-строчное усечение и перенос длинной неразрывной строки, отображение `Unicode • Tiếng Việt • Кириллица 🚀`.
  2. Проверить экранирование `<script>alert('xss')</script>` и `<img src=x onerror=alert(1)>`, а также вёрстку в узком `.demo-bars-page__narrow-box` (`280px`).
- **Ожидаемый результат**: Разметка не выходит за границы `280px` контейнера, XSS-строки рендерятся только как текст.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-003.png`)

---

### 2.4 Адаптивность и viewport (`RSP`)

#### [TC-RSP-001] Проверка адаптивности на десктопе, планшете и мобильных устройствах
- **Приоритет**: `P1 (High)`
- **Категория**: `Responsive & Viewport`
- **Предусловия**: Открыть `http://localhost:3000/component-bars`.
- **Шаги теста**:
  1. Изменить размер viewport последовательно на `1440×900`, `768×1024`, `375×812` и `320×568`.
  2. На каждом разрешении проверить отсутствие горизонтального переполнения у `.d1-bars` (`scrollWidth <= clientWidth` или корректное усечение заголовка до 2 строк) и отсутствие перекрытия кнопок и текста.
- **Ожидаемый результат**: Компонент корректно адаптируется под узкие экраны без поломки flex-контейнера и перекрытия кнопок.
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

---

### 2.5 Доступность (`A11Y`)

#### [TC-A11Y-001] ARIA-атрибуты, пользовательские ID и навигация с клавиатуры
- **Приоритет**: `P1 (High)`
- **Категория**: `Accessibility`
- **Предусловия**: Открыть `http://localhost:3000/component-bars`, найти группы `Accessibility & IDs` и `Basic`.
- **Шаги теста**:
  1. Проверить наличие `aria-live="polite"` на `D1Bars` с возможным action-режимом и отсутствие `aria-live` на статическом `D1Bars`.
  2. Проверить `aria-label` на кнопке «Назад» и иконочных кнопках, а также наличие `id="demo-bars-title"` / `id="demo-bars-desc"`.
  3. Проверить переключение фокуса клавишей `Tab` по кнопкам панели.
- **Ожидаемый результат**: ARIA-атрибуты и ID соответствуют спецификации, кнопки доступны с клавиатуры.
- **Тип доказательства**: `Console/Log` (DOM & ARIA проверка)

---

### 2.6 Консоль и рантайм (`LOG`)

#### [TC-LOG-001] Эмиссия всех событий (`click`, `clickLite`, `update:action`, `update:modelAction`) и чистота консоли
- **Приоритет**: `P0 (Critical)`
- **Категория**: `Console & Runtime`
- **Предусловия**: Открыть `http://localhost:3000/component-bars`, прокрутить к группе `Events`, очистить список сообщений консоли.
- **Шаги теста**:
  1. Нажать `Toggle action` и `Toggle modelAction`, затем кнопки `like`, `dislike`, `Confirm` и «Назад» внутри `D1Bars`.
  2. Проверить отображение имени события (`click`, `clickLite`, `update:action`, `update:modelAction`) и сериализованного `Payload` в `DemoValue`.
  3. Проверить логи консоли браузера и ошибки страницы за всё время прогона.
- **Ожидаемый результат**: Все 4 события и их payload фиксируются корректно; `consoleErrors: 0`, `pageErrors: 0`, `vueWarnings: 0`.
- **Тип доказательства**: `Console/Log`
