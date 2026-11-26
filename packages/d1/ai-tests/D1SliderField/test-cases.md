# Спецификация тест-кейсов: D1SliderField

- **Сущность**: `D1SliderField`
- **Путь к исходному коду**: `packages/constructor/src/constructors/SliderField`, `packages/d1/src/components/Ui/SliderField`, `packages/demo/src/pages/components/DemoSliderFieldPage.vue`
- **Целевой URL**: `http://localhost:3000/component-slider-field`
- **Справочные материалы**: Нет
- **Последняя проверка / обновление**: `2026-11-26`
- **Всего тест-кейсов**: `6`

---

## 1. Обзор матрицы покрытия

| Категория | Код | Кол-во | Приоритеты | Область фокуса |
| :--- | :--- | :--- | :--- | :--- |
| **Визуал и токены** | `VIS` | 1 | P0 | Одиночный, диапазонный (`multiple`), `showInput`, `showValue`, `showValueInLabel`, вертикальный, иконки, слоты, валидация, скелетон |
| **Интерактивность и функциональность** | `INT` | 1 | P0 | `v-model`, ввод в числовой `<input>`, `disabled`/`readonly`, `expose` (`clear`, `checkValidity`), `mount/unmount` |
| **Границы и крайние случаи** | `BND` | 1 | P1 | Значение `0` при `min=-50`, метка `:label="0"`, Unicode/Вьетнамский, узкий контейнер |
| **Адаптивность и вьюпорты** | `RSP` | 1 | P1 | Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`, `320×568`) |
| **Доступность (A11Y)** | `A11Y` | 1 | P1 | `role="slider"`, `aria-valuemin`/`aria-valuemax`/`aria-valuenow`, `disabled`/`readonly` на числовых полях |
| **Консоль и рантайм** | `LOG` | 1 | P0 | События `input`/`change`, `0` ошибок консоли, Vue-предупреждений и сетевых сбоев |

---

## 2. Детальные тест-кейсы

### 2.1 Визуал и дизайн-система (`VIS`)
#### [TC-VIS-001] Рендеринг всех вариантов `D1SliderField`, `showInput`, меток, вертикального режима, слотов и скелетона
- **Приоритет**: `P0 (Critical)`
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

### 2.2 Интерактивность и функциональность (`INT`)
#### [TC-INT-001] `v-model`, числовой ввод, `expose` (`clear`, `checkValidity`), `disabled`/`readonly` и `mount/unmount`
- **Приоритет**: `P0 (Critical)`
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-INT-001.png`)

### 2.3 Границы и крайние случаи (`BND`)
#### [TC-BND-001] Нулевое значение при `min=-50`, `:label="0"`, Unicode и узкий контейнер
- **Приоритет**: `P1 (High)`
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-BND-001.png`)

### 2.4 Адаптивность и вьюпорты (`RSP`)
#### [TC-RSP-001] Проверка адаптивности на `1440×900`, `768×1024`, `375×812`, `320×568`
- **Приоритет**: `P1 (High)`
- **Тип доказательства**: `Screenshot` (`./screenshots/TC-RSP-001.png`)

### 2.5 Доступность (`A11Y`)
#### [TC-A11Y-001] Проверка WAI-ARIA атрибутов ползунков и ограничений `disabled`/`readonly` на полях ввода
- **Приоритет**: `P1 (High)`
- **Тип доказательства**: `Console/Log`

### 2.6 Консоль и рантайм (`LOG`)
#### [TC-LOG-001] Мониторинг ошибок консоли, Vue-предупреждений и сетевых сбоев
- **Приоритет**: `P0 (Critical)`
- **Тип доказательства**: `Console/Log`
