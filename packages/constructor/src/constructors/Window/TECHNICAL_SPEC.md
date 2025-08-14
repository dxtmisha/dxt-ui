# Window Component Technical Specification

## Техническая спецификация компонента Window / Window Component Technical Specification

### Архитектурные паттерны / Architectural Patterns

#### 1. Композиция модулей / Module Composition
```typescript
class Window {
  // Управление жизненным циклом
  readonly client: WindowClient
  readonly hook: WindowHook
  
  // DOM и стили
  readonly classes: WindowClasses
  readonly element: WindowElement
  
  // Состояние
  readonly status: WindowStatus
  readonly persistent: WindowPersistent
  readonly flash: WindowFlash
  
  // Позиционирование
  readonly coordinates: WindowCoordinates
  readonly position: WindowPosition
  readonly origin: WindowOrigin
  
  // Поведение
  readonly staticMode: WindowStatic
  readonly emit: WindowEmit
  readonly styles: WindowStyles
  readonly open: WindowOpen
  readonly verification: WindowVerification
  readonly event: WindowEvent
  
  // Интеграция
  readonly scrollbar: ScrollbarInclude
  readonly image: ImageInclude
}
```

#### 2. Фабрика слот-данных / Slot Data Factory
```typescript
this.slotData = {
  classesWindow: this.classes.list,
  class: this.classes.list.controlId,
  open: this.open.item,
  onclick: this.event.onClick,
  oncontextmenu: this.event.onContextmenu,
  binds: {
    class: this.classes.list.controlId,
    onclick: this.event.onClick,
    oncontextmenu: this.event.onContextmenu
  }
}
```

### Детальная спецификация модулей / Detailed Module Specifications

#### WindowClasses
**Назначение**: Управление CSS классами и поиск DOM элементов

```typescript
class WindowClasses {
  findControl(): HTMLElement | undefined
  findBody(): HTMLDivElement | undefined  
  findBodyContext(): HTMLDivElement | undefined
  findControlByElement(element?: HTMLElement): HTMLElement | undefined
  findBodyOther(selectors: string, status?: WindowStatusItem): HTMLDivElement | undefined
  getSelectorControl(): string
  getId(): string
}
```

**Ключевые методы**:
- `findControl()` - Поиск элемента управления
- `findBody()` - Поиск основного элемента окна
- `findBodyContext()` - Поиск контейнера контента

#### WindowElement  
**Назначение**: Работа с DOM элементами окна

```typescript
class WindowElement {
  getControl(): HTMLElement | undefined
  getControlRect(): DOMRect | undefined
  getBody(): HTMLDivElement | undefined
  getBodyRect(): DOMRect | undefined
  getBodyContext(): HTMLDivElement | undefined
  getMain(): HTMLElement | undefined
}
```

#### WindowOpen
**Назначение**: Управление состоянием открытия/закрытия

```typescript
class WindowOpen {
  readonly item: Ref<boolean>     // Реактивное состояние
  readonly inDom: ComputedRef<boolean>  // Должен ли быть в DOM
  
  async set(open?: boolean): Promise<void>
  async setOpen(open: boolean): Promise<this>
  async toggle(): Promise<void>
}
```

**Логика inDom**:
```typescript
readonly inDom = computed<boolean>(() => {
  return this.item.value
    || this.props.staticMode
    || (Boolean(this.props.inDom) && this.first.value)
})
```

#### WindowVerification
**Назначение**: Валидация и обработка пользовательских действий

```typescript
class WindowVerification {
  async update(target: HTMLElement): Promise<void>
  
  protected isContextmenu(): boolean
  protected isClose(): boolean
  protected isAutoClose(): boolean
  protected isChildren(): boolean
  protected isEnabled(): boolean
}
```

**Логика обновления состояния**:
```typescript
async update(target: HTMLElement): Promise<void> {
  if (this.props.open) {
    if (this.isContextmenu()) {
      // Обработка контекстного меню
    } else if (this.isNotBlockChildren()) {
      if (!this.persistent.on()) {
        await this.open.toggle()
      }
    } else if (this.isClose() || this.isAutoClose() || !this.isChildren()) {
      await this.open.toggle()
    }
  } else if (this.isEnabled()) {
    await this.open.toggle()
  }
}
```

### Система координат и позиционирования / Coordinate and Positioning System

#### WindowCoordinates
**Назначение**: Вычисление базовых координат

```typescript
class WindowCoordinates {
  readonly x: ComputedRef<number>
  readonly y: ComputedRef<number>
  readonly width: ComputedRef<number>
  readonly height: ComputedRef<number>
}
```

#### WindowPosition  
**Назначение**: Определение финальной позиции с учетом ограничений

```typescript
class WindowPosition {
  readonly x: ComputedRef<number>
  readonly y: ComputedRef<number>
  readonly maxWidth: ComputedRef<number>
  readonly maxHeight: ComputedRef<number>
}
```

#### WindowOrigin
**Назначение**: Управление точкой трансформации

```typescript
class WindowOrigin {
  readonly x: ComputedRef<string>
  readonly y: ComputedRef<string>
}
```

### Система стилей / Styling System

#### WindowStyles
**Назначение**: Генерация CSS стилей для позиционирования

```typescript
class WindowStyles {
  readonly styles: ComputedRef<CSSProperties>
}
```

**Генерируемые стили**:
```css
{
  position: 'fixed',
  top: '${y}px',
  left: '${x}px', 
  maxWidth: '${maxWidth}px',
  maxHeight: '${maxHeight}px',
  transformOrigin: '${originX} ${originY}'
}
```

### Интеграция с Vue / Vue Integration

#### Реактивность / Reactivity
```typescript
// Отслеживание изменений props.open
watch([refs.open], () => this.open.set(props.open), { immediate: true })

// Computed классы
readonly classesList = computed<ConstrClassObject>(() => ({
  [this.classes.getId()]: true,
  [`${this.className}--staticMode`]: this.staticMode.item.value
}))
```

#### Жизненный цикл / Lifecycle
```typescript
onMounted(() => {
  // Инициализация отслеживания props
  watch([refs.open], () => this.open.set(props.open), { immediate: true })
})

onUnmounted(() => {
  // Очистка ресурсов
  this.event.stop()
  this.staticMode.stop()
})
```

### Система событий / Event System

#### Типы событий / Event Types
```typescript
type WindowEventClick = (event: MouseEvent & TouchEvent) => Promise<void>

interface WindowEmitOptions {
  id: string
  element: HTMLDivElement
  control: HTMLElement  
  open: boolean
}
```

#### Обработчики событий / Event Handlers
```typescript
class WindowEvent {
  readonly onClick: WindowEventClick
  readonly onContextmenu: WindowEventClick
  readonly onTransition: (event: TransitionEvent) => void
  
  stop(): void
}
```

### Телепортация / Teleportation

#### Логика телепорта / Teleport Logic
```typescript
// Условие для teleport
if (this.item.open.inDom.value) {
  if (this.item.staticMode.item.value) {
    // Рендер на месте
    main.push(this.renderMain())
  } else {
    // Телепорт в body
    main.push(
      h(Teleport, { to: 'body' }, 
        h('div', { 
          'data-window-teleport': this.item.classes.getId() 
        }, this.renderMain())
      )
    )
  }
}
```

### Производительность / Performance

#### Оптимизации / Optimizations

1. **Ленивый DOM** / Lazy DOM:
```typescript
computed(() => {
  return this.item.value || this.props.staticMode || 
    (Boolean(this.props.inDom) && this.first.value)
})
```

2. **CSS Containment**:
```scss
@include ui.contentVisibility(hidden);
```

3. **Минимальные обновления** / Minimal Updates:
```typescript
// Только необходимые computed обновления
readonly styles = computed(() => this.coordinates.get())
```

### Типобезопасность / Type Safety

#### Дженерики / Generics
```typescript
export class WindowDesign<
  COMP extends WindowComponents,
  EXPOSE extends WindowExpose, 
  CLASSES extends WindowClasses,
  P extends WindowPropsBasic
> extends DesignConstructorAbstract<...> {}
```

#### Строгие типы / Strict Types
```typescript
// Enum для состояний
enum WindowStatusItem {
  display = 'display',
  preparation = 'preparation', 
  flash = 'flash',
  open = 'open',
  hide = 'hide',
  close = 'close'
}

// Union types для свойств
type AlignmentType = 'center' | 'top' | 'topRight' | 'topLeft' | 
  'topFull' | 'right' | 'rightFull' | 'bottom' | 'bottomRight' | 
  'bottomLeft' | 'bottomFull' | 'left' | 'leftFull'
```

### Расширяемость / Extensibility

#### Наследование / Inheritance
```typescript
// Базовый класс для кастомизации
class CustomWindow extends WindowDesign<...> {
  protected initRender(): VNode[] {
    // Кастомная логика рендеринга
    return super.initRender()
  }
}
```

#### Композиция / Composition
```typescript
// Добавление новых модулей
class ExtendedWindow extends Window {
  readonly customModule: CustomModule
  
  constructor(...args) {
    super(...args)
    this.customModule = new CustomModule(this.props)
  }
}
```

### Тестирование / Testing

#### Unit тесты / Unit Tests
```typescript
describe('WindowOpen', () => {
  test('should toggle visibility', async () => {
    const windowOpen = new WindowOpen(...)
    await windowOpen.toggle()
    expect(windowOpen.item.value).toBe(true)
  })
})
```

#### Integration тесты / Integration Tests  
```typescript
describe('Window Component', () => {
  test('should render modal correctly', () => {
    const wrapper = mount(WindowDesign, {
      props: { adaptive: 'modal' }
    })
    expect(wrapper.find('.window--modal').exists()).toBe(true)
  })
})
```

### Отладка / Debugging

#### Логирование / Logging
```typescript
// Включение отладки
window.__DXT_DEBUG__ = true

// Доступ к экземплярам через data-атрибуты
const windowId = element.dataset.window
const windowInstance = Window.instances.get(windowId)
```

#### Инструменты разработчика / Developer Tools
```typescript
// Vue DevTools интеграция
app.config.globalProperties.$windows = Window.instances
```

Эта техническая спецификация предоставляет глубокое понимание внутренней архитектуры и реализации компонента Window, что поможет разработчикам эффективно использовать и расширять его функциональность.