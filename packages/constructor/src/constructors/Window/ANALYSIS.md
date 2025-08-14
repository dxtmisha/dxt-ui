# Window Component Analysis

## Обзор компонента / Component Overview

Компонент Window является сложной системой управления окнами в дизайн-системе DXT UI. Он предоставляет полный набор функций для создания модальных окон, меню, тултипов и других оверлейных элементов интерфейса.

The Window component is a sophisticated window management system in the DXT UI design system. It provides a complete set of features for creating modal windows, menus, tooltips, and other overlay interface elements.

## Архитектура / Architecture

### Основной класс / Main Class
`Window.ts` - центральный координатор, который управляет всеми аспектами функциональности окна.

### Модульная структура / Modular Structure

Компонент разделен на специализированные модули для различных задач:

#### Управление клиентом и хуками / Client and Hook Management
- **WindowClient** - управление клиентскими данными / client data management
- **WindowHook** - управление жизненным циклом / lifecycle management

#### DOM и стилизация / DOM and Styling  
- **WindowClasses** - управление CSS классами / CSS class management
- **WindowElement** - управление DOM элементами / DOM element management

#### Управление состоянием / State Management
- **WindowStatus** - управление статусом окна / window status management
- **WindowPersistent** - управление постоянными данными / persistent data management  
- **WindowFlash** - управление анимациями / animation management

#### Позиционирование / Positioning
- **WindowCoordinates** - управление координатами / coordinate management
- **WindowPosition** - управление позицией / position management
- **WindowOrigin** - управление точкой трансформации / transform origin management

#### Поведение и события / Behavior and Events
- **WindowStatic** - управление статическим режимом / static mode management
- **WindowEmit** - управление событиями / event management
- **WindowStyles** - управление стилями / styles management
- **WindowOpen** - управление видимостью / visibility management
- **WindowVerification** - проверка состояния / state validation
- **WindowEvent** - обработка событий / event handling

#### Интеграция компонентов / Component Integration
- **ScrollbarInclude** - интеграция скроллбара / scrollbar integration
- **ImageInclude** - интеграция изображений / image integration

## Свойства компонента / Component Properties

### Свойства статуса / Status Properties

| Свойство | Тип | Описание |
|----------|-----|----------|
| `open` | `boolean?` | Управляет видимостью окна / Controls window visibility |
| `disabled` | `boolean?` | Отключает взаимодействие с окном / Disables window interaction |

### Хуки жизненного цикла / Lifecycle Hooks

| Свойство | Тип | Описание |
|----------|-----|----------|
| `preparation` | `() => NormalOrPromise<void>?` | Вызывается на этапе подготовки / Called during preparation phase |
| `beforeOpening` | `() => NormalOrPromise<boolean>?` | Вызывается перед открытием / Called before opening |
| `opening` | `() => NormalOrPromise<boolean>?` | Вызывается при открытии / Called during opening |
| `beforeClosing` | `() => NormalOrPromise<boolean>?` | Вызывается перед закрытием / Called before closing |
| `closing` | `() => NormalOrPromise<boolean>?` | Вызывается при закрытии / Called during closing |

### Свойства поведения / Behavior Properties

| Свойство | Тип | Значение по умолчанию | Описание |
|----------|-----|----------------------|----------|
| `contextmenu` | `boolean?` | - | Включает контекстное меню / Enables context menu |
| `staticMode` | `boolean?` | - | Статический режим позиционирования / Static positioning mode |
| `overElement` | `ElementOrString<HTMLElement>?` | - | Элемент для позиционирования над ним / Element to position over |
| `autoClose` | `boolean?` | - | Автозакрытие при клике вне окна / Auto-close on outside click |
| `persistent` | `boolean?` | - | Предотвращает автозакрытие / Prevents auto-closing |
| `flash` | `boolean?` | - | Эффект анимации вспышки / Flash animation effect |
| `inDom` | `boolean?` | - | Оставляет элемент в DOM при закрытии / Keeps element in DOM when closed |
| `indent` | `number?` | `4` | Отступы/поля / Padding/margin |
| `divider` | `boolean?` | - | Показывает разделитель / Shows divider |
| `closeButton` | `boolean?` | - | Показывает кнопку закрытия / Shows close button |
| `iconClose` | `string?` | - | Иконка закрытия / Close icon |

### Свойства макета / Layout Properties

| Свойство | Тип | Значение по умолчанию | Описание |
|----------|-----|----------------------|----------|
| `width` | `string \| 'auto' \| 'max' \| 'custom'?` | - | Ширина окна / Window width |
| `height` | `string \| 'auto' \| 'max' \| 'custom'?` | - | Высота окна / Window height |
| `hide` | `boolean?` | - | Скрывает окно / Hides window |
| `axis` | `'x' \| 'y' \| 'on'?` | `'y'` | Ось прокрутки / Scroll axis |
| `imagePosition` | `'top' \| 'left'?` | `'top'` | Позиция изображения / Image position |
| `dense` | `boolean?` | - | Компактный макет / Compact layout |
| `fullscreen` | `boolean?` | - | Полноэкранный режим / Fullscreen mode |
| `overscroll` | `boolean?` | `true` | Разрешает избыточную прокрутку / Allows overscroll |
| `closeMobileHide` | `boolean?` | - | Скрывает кнопку закрытия на мобильных / Hides close button on mobile |
| `widthMatch` | `boolean?` | - | Подгоняет ширину под контрол / Matches control width |

### Выравнивание / Alignment

| Значение | Описание |
|----------|----------|
| `center` | По центру / Centered |
| `top` | Сверху / Top aligned |
| `topRight` | Сверху справа / Top-right aligned |
| `topLeft` | Сверху слева / Top-left aligned |
| `topFull` | Сверху на всю ширину / Top full width |
| `right` | Справа / Right aligned |
| `rightFull` | Справа на всю высоту / Right full height |
| `bottom` | Снизу / Bottom aligned |
| `bottomRight` | Снизу справа / Bottom-right aligned |
| `bottomLeft` | Снизу слева / Bottom-left aligned |
| `bottomFull` | Снизу на всю ширину / Bottom full width |
| `left` | Слева / Left aligned |
| `leftFull` | Слева на всю высоту / Left full height |

### Точка трансформации / Transform Origin

| Значение | Описание |
|----------|----------|
| `center` | По центру / Center |
| `top` | Сверху / Top |
| `right` | Справа / Right |
| `bottom` | Снизу / Bottom |
| `left` | Слева / Left |
| `topToBottom` | Сверху вниз с движением / Top to bottom with movement |
| `rightToLeft` | Справа налево с движением / Right to left with movement |
| `bottomToTop` | Снизу вверх с движением / Bottom to top with movement |
| `leftToRight` | Слева направо с движением / Left to right with movement |

### Адаптивное поведение / Adaptive Behavior

| Значение | Описание |
|----------|----------|
| `menu` | Режим меню / Menu mode |
| `menuWindow` | Режим окна меню / Menu window mode |
| `modal` | Модальный режим / Modal mode |
| `modalDynamic` | Динамический модальный режим / Dynamic modal mode |
| `static` | Статический режим / Static mode |

## Типы и интерфейсы / Types and Interfaces

### WindowExpose
Интерфейс доступных публичных методов и свойств:
- `id: string` - Уникальный идентификатор окна
- `open: Ref<boolean>` - Реактивное состояние видимости
- `control: WindowControlItem` - Данные элемента управления
- `setOpen(open: boolean): Promise<void>` - Устанавливает состояние открытия
- `toggle(): Promise<void>` - Переключает видимость

### WindowSlots
Доступные слоты для контента:
- `control?(props: WindowControlItem): any` - Слот управления
- `title?(props: WindowControlItem): any` - Слот заголовка
- `footer?(props: WindowControlItem): any` - Слот подвала
- `default?(props: WindowControlItem): any` - Основной слот

### WindowClasses
CSS классы для стилизации:
- `main: ConstrClass` - Основной класс
- `body: string` - Класс тела окна
- `bodyGroup: string` - Класс группы тела
- `bodyContext: string` - Класс контекста тела
- `control: string` - Класс управления
- `image: string` - Класс изображения
- `close: string` - Класс закрытия
- `teleport: string` - Класс телепорта

## Состояния окна / Window States

### WindowStatusItem
- `display` - Состояние отображения
- `preparation` - Состояние подготовки
- `flash` - Состояние вспышки
- `open` - Состояние открытия
- `hide` - Состояние скрытия
- `close` - Состояние закрытия

### WindowStatusControlItem
- `block` - Блокировка взаимодействия
- `blockChildren` - Блокировка закрытия окна
- `blockOther` - Блокировка других окон
- `close` - Закрыть окно
- `static` - Статическое позиционирование
- `controlStatic` - Статическое управление
- `controlOpenOnly` - Управление только когда открыто
- `controlActive` - Активное управление
- `persistent` - Постоянное окно

## Интеграция с другими компонентами / Integration with Other Components

### ScrollbarInclude
Компонент интегрируется со скроллбаром для управления прокруткой содержимого.

### ImageInclude
Поддерживает интеграцию с компонентом изображений для отображения графического контента.

### ButtonComponentInclude
Интегрируется с компонентом кнопок для элементов управления.

## Конфигурация стилей / Style Configuration

Файл `properties.json` содержит подробную конфигурацию стилей с поддержкой:
- CSS переменных для кастомизации
- Адаптивных режимов
- Анимаций и трансформаций
- Responsive поведения

## Использование / Usage

```typescript
// Базовое использование
const window = new Window(
  props,           // Свойства окна
  refs,            // Реактивные ссылки
  element,         // DOM элемент
  classDesign,     // Название дизайна
  className,       // Имя класса
  components,      // Компоненты для интеграции
  slots,           // Слоты
  emits            // Обработчики событий
)

// Управление состоянием
await window.open.setOpen(true)  // Открыть окно
await window.open.toggle()       // Переключить видимость
```

## Рендеринг и структура DOM / Rendering and DOM Structure

### WindowDesign
Основной класс для рендеринга, который расширяет `DesignConstructorAbstract` и управляет:
- Инициализацией expose-методов
- Управлением CSS классами
- Рендерингом компонента

### Структура DOM / DOM Structure
```html
<!-- Teleport wrapper (если не staticMode) -->
<div data-window-teleport="window-id" class="window__teleport">
  <!-- Основной контейнер окна -->
  <div data-window="window-id" class="window" style="...">
    <!-- Тело окна -->
    <div class="window__body">
      <!-- Изображение (опционально) -->
      <div class="window__image">...</div>
      
      <!-- Кнопка закрытия (опционально) -->
      <button class="window__close">...</button>
      
      <!-- Группа контента -->
      <div class="window__body__group">
        <!-- Заголовок (слот) -->
        <slot name="title"></slot>
        
        <!-- Контекст с поддержкой скроллбара -->
        <div class="window__body__context" data-window-body="1">
          <slot name="default"></slot>
        </div>
        
        <!-- Подвал (слот) -->
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</div>

<!-- Элемент управления (слот control) -->
<slot name="control"></slot>
```

## Система хуков / Hook System

### WindowHook
Управляет жизненным циклом окна через асинхронные хуки:

```typescript
// Хуки выполняются в следующем порядке:
1. preparation() // Подготовка
2. beforeOpening() / beforeClosing() // Перед открытием/закрытием
3. opening() / closing() // Во время открытия/закрытия
```

### Пример использования хуков / Hook Usage Example
```typescript
const props = {
  async preparation() {
    // Подготовка данных, загрузка ресурсов
    console.log('Preparing window...')
  },
  
  async beforeOpening() {
    // Проверки перед открытием
    console.log('Before opening...')
    return true // true = разрешить открытие
  },
  
  async opening() {
    // Действия во время открытия
    console.log('Opening window...')
    return true
  },
  
  async beforeClosing() {
    // Проверки перед закрытием
    const canClose = await confirmClose()
    return canClose
  },
  
  async closing() {
    // Очистка ресурсов при закрытии
    console.log('Closing window...')
    return true
  }
}
```

## Система событий / Event System

### WindowEmit
Управляет событиями окна и предоставляет данные через `WindowEmitOptions`:

```typescript
interface WindowEmitOptions {
  id: string              // Уникальный ID окна
  element: HTMLDivElement // DOM элемент окна
  control: HTMLElement    // Элемент управления
  open: boolean          // Состояние открытия
}
```

### WindowEvent
Обрабатывает пользовательские взаимодействия:
- Клики для открытия/закрытия
- Контекстное меню
- Транзишены
- Валидация действий

## Позиционирование и координаты / Positioning and Coordinates

### WindowCoordinates
Управляет вычислением позиции окна относительно элемента управления.

### WindowPosition
Определяет конечную позицию с учетом:
- Размеров viewport
- Размеров окна
- Предпочтительного выравнивания
- Ограничений экрана

### WindowOrigin
Управляет точкой трансформации для анимаций открытия/закрытия.

## Стилизация / Styling

### CSS переменные / CSS Variables
Компонент поддерживает кастомизацию через CSS переменные:

```scss
.window {
  --padding: 16px;
  --background-color: white;
  --background-opacity: 0.95;
  --transform: scale(1);
  --transform-origin: center;
  --width: auto;
  --height: auto;
}
```

### Адаптивные стили / Adaptive Styles
Различные режимы предоставляют специфичные стили:
- **menu**: Компактное меню с уменьшенным размером
- **modal**: Полноэкранный overlay с фоном
- **static**: Встроенное позиционирование без teleport

## Управление состоянием / State Management

### WindowStatus
Отслеживает текущее состояние окна через enum `WindowStatusItem`.

### WindowPersistent
Управляет настройками постоянства (предотвращение автозакрытия).

### WindowFlash
Управляет анимационными эффектами при изменении состояния.

## Интеграция и расширения / Integration and Extensions

### ScrollbarInclude
```typescript
// Автоматически оборачивает контент в скроллбар при необходимости
scrollbar.render('div', props, children)
```

### ImageInclude
```typescript
// Поддерживает отображение изображений в заголовке
image.render() // Возвращает VNode изображения
```

### Компоненты кнопок / Button Components
Интегрируется с системой кнопок для элементов управления и закрытия.

## Примеры использования / Usage Examples

### Простое модальное окно / Simple Modal
```typescript
const modalProps = {
  adaptive: 'modal',
  alignment: 'center',
  closeButton: true,
  autoClose: true
}
```

### Контекстное меню / Context Menu
```typescript
const menuProps = {
  adaptive: 'menu',
  contextmenu: true,
  alignment: 'topLeft',
  autoClose: true,
  widthMatch: true
}
```

### Постоянный тултип / Persistent Tooltip
```typescript
const tooltipProps = {
  adaptive: 'menu',
  persistent: true,
  alignment: 'top',
  dense: true
}
```

### Полноэкранное окно / Fullscreen Window
```typescript
const fullscreenProps = {
  fullscreen: true,
  closeButton: true,
  iconClose: 'close'
}
```

## Оптимизация производительности / Performance Optimizations

1. **Teleport**: Использует Vue Teleport для рендеринга в body, избегая z-index проблем
2. **Lazy DOM**: Элементы добавляются в DOM только при необходимости (`inDom` флаг)
3. **Event delegation**: Эффективная обработка событий через делегирование
4. **CSS containment**: Использует `content-visibility` для оптимизации рендеринга
5. **Reactive updates**: Минимальные обновления благодаря Vue reactivity

## Доступность / Accessibility

Компонент поддерживает:
- ARIA-атрибуты для screen readers
- Keyboard navigation
- Focus management
- High contrast themes через CSS переменные

## Заключение / Conclusion

Компонент Window представляет собой мощную и гибкую систему для создания различных типов оверлейных элементов интерфейса. Его модульная архитектура обеспечивает высокую степень настраиваемости и возможность расширения функциональности.

Ключевые преимущества:
- 🎯 **Универсальность**: Поддержка множества типов окон (модалы, меню, тултипы)
- 🏗️ **Модульность**: Четкое разделение ответственности между подсистемами
- ⚡ **Производительность**: Оптимизированный рендеринг и управление DOM
- 🎨 **Кастомизация**: Гибкая система стилей и CSS переменных
- 🔧 **Расширяемость**: Легкая интеграция с другими компонентами
- ♿ **Доступность**: Поддержка accessibility стандартов

The Window component represents a powerful and flexible system for creating various types of overlay interface elements. Its modular architecture provides a high degree of customization and the ability to extend functionality.

Key advantages:
- 🎯 **Versatility**: Support for multiple window types (modals, menus, tooltips)
- 🏗️ **Modularity**: Clear separation of concerns between subsystems  
- ⚡ **Performance**: Optimized rendering and DOM management
- 🎨 **Customization**: Flexible styling system and CSS variables
- 🔧 **Extensibility**: Easy integration with other components
- ♿ **Accessibility**: Support for accessibility standards