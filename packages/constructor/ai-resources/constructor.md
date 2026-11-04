# Constructor Architecture & Development Guide (`dxt-ui`)

Comprehensive architectural standard and implementation guide for building, extending, and maintaining component constructors and `DesignLogicAbstract` orchestrators in `@dxtmisha/constructor` and `@dxtmisha/functional`.

---

## 1. Architecture Overview & Core Philosophy

A constructor is a self-contained, framework-agnostic UI component module located in:
`packages/constructor/src/constructors/<ComponentName>/`

The component logic layer in `dxt-ui` isolates business logic, accessibility (`ARIA`), state coordination, and event dispatching from visual styles and Vue template rendering.

### 1.1 Standardized File Structure

| File | Purpose |
|---|---|
| `index.ts` | Public re-export barrel of all constructor entities |
| `props.ts` | Property types (`PropsToken`, `PropsBasic`, `Props`, `defaults`) |
| `types.ts` | External contract (`Components`, `Emits`, `Expose`, `Slots`, `Classes`) |
| `basicTypes.ts` | Public embedding and auxiliary types (`ComponentInclude`, `PropsInclude`, enums, event payloads) |
| `properties.json` | Design tokens, states, sub-elements (`#`), and modifiers (`~`) |
| `style.scss` | Component SCSS entry point (`mixin<Name>`) |
| `<Name>.ts` | Main logic orchestrator class (extends `DesignLogicAbstract`, declares `<Name>Constructors`) |
| `<Name>*.ts` | Subordinate single-responsibility helper classes (`*Event.ts`, `*Position.ts`, `*Coordinator.ts`, `*Lazy.ts`, etc.; lifecycle helpers extend `DesignLifecycleAbstract`) |
| `<Name>Design.tsx` | Rendering class (extends `DesignConstructorAbstract`, zero business logic) |
| `<Name>Include.ts` | *(Optional)* Include class (extends `ComponentIncludeAbstract`) for embedding into parent components |
| `<Name>Abstract.ts` | *(Optional)* Abstract logic orchestrator for multi-variant components |
| `<Name>DesignAbstract.tsx` | *(Optional)* Abstract design class for multi-variant components |

### 1.2 Why `DesignLogicAbstract`?

1. **True Lazy Loading (On-Demand Instantiation)**:
   - Subordinate helper and `Include` classes are **not instantiated eagerly** on component creation.
   - Dependencies are instantiated only on first access via `this.getInstance(name)` (or its shorthand `this.i(name)`).
   - If a feature is never used (e.g., image load events when rendering a plain icon, or scrollbar borders when borders are disabled), its subordinate class is **never allocated in memory**.
2. **Captured Reactivity Scope (`getCurrentScope`)**:
   - `DesignLogicAbstract` captures the active Vue effect scope (`getCurrentScope()`) during constructor execution.
   - Any lazy dependency instantiated later runs inside `this.scope.run(...)`, ensuring full Vue reactivity context even during delayed execution.
3. **Coordinated Lifecycle (`DesignLifecycleAbstract`)**:
   - Subordinate classes never register raw Vue `onMounted` or `onUnmounted` hooks inside their own constructors.
   - Instead, classes requiring lifecycle hooks extend `DesignLifecycleAbstract`.
   - `DesignLogicAbstract` orchestrates synchronous execution of `onMounted` and `onUnmounted` across all active instances. If a lifecycle dependency is lazily instantiated *after* the component has already mounted, `onMounted` is triggered on it immediately upon instantiation.
   - **Deferred Watchers**: All reactive watchers (`watch(...)`) and active DOM event listeners must be placed inside `onMounted`, never in the class constructor body.
4. **Declarative Conditions (`conditions`)**:
   - `constructorItems` can declare a reactive condition `conditions: () => boolean`.
   - On component mount, `initConditions()` establishes a `watch(item.conditions, (active) => { if (active) this.getInstance(name) }, { immediate: true })`, automatically activating dependencies when conditions are met.
   - **Crucial Rule on Explicit Call Sites**: If a subordinate class is already explicitly accessed in code via `this.getInstance(...)` or `this.i(...)` under a condition (e.g., `this.props.isSkeleton ? this.i('skeleton').classes : {}` or `this.props.dynamic ? this.i('event').binds : ...`), **do NOT define `conditions`**. `conditions` is strictly for autonomous or background dependencies (such as lifecycle listeners, scroll monitors, or DOM observers extending `DesignLifecycleAbstract`) that must activate reactively on mount without any explicit call site in getters or templates. Adding `conditions` when an explicit call site already exists is redundant and forces premature instantiation on mount via `watch`.
5. **Full Dependency Injection (DI)**:
   - All sub-constructors can be overridden via the `constructors?: Partial<CONSTRUCTORS>` parameter in `DesignLogicAbstract`, enabling comprehensive unit testing and subclass extension without mocking modules.

---

## 2. File Specifications

### 2.1 `props.ts`

Defines input properties, token bindings, and defaults.

```ts
import type { LabelProps } from '../../types/labelTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { IconPropsBasic, IconTrailingPropsInclude } from '../Icon'

// 1. PropsToken — controlled via properties.json (managed by automated code generation)
export type ButtonPropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  selected?: boolean
  readonly?: boolean
  adaptive?: 'iconAlways' | 'block' | 'auto'
  // :type [!] System label / Системная метка
}

// 2. PropsBasic — core component properties composed via Include intersections
export type ButtonPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic
> = LabelProps
  & EnabledProps
  & IconTrailingPropsInclude<Icon>
  & {
    /** HTML tag for the button container / HTML-тег для контейнера кнопки */
    tag?: 'button' | 'a' | 'span' | string
    /** HTML type for the button element / HTML-тип для элемента кнопки */
    type?: 'button' | 'submit' | 'reset' | string
  }

// 3. Props — composite type for public consumption
export type ButtonProps = ButtonPropsBasic & ButtonPropsToken

// 4. Defaults — default property values (system labels generated from properties.json)
export const defaultsButton = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
```

#### Rules
- `PropsToken` contains **only** properties matching keys in `properties.json`. Never manually edit between `// :type [!]` or `// :default [!]` markers.
- `PropsBasic` is generic when child components need customization.
- All property comments must be bilingual: `/** English / Russian */`.

---

### 2.2 `types.ts`

Defines the external contract: dependencies, events, public API, slots, and CSS classes.

```ts
import type { ConstrClass } from '@dxtmisha/functional'
import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'
import type { LabelSlots } from '../../types/labelTypes'
import type { IconComponentInclude } from '../Icon'
import type { ProgressComponentInclude } from '../Progress'
import type { RippleComponentInclude } from '../Ripple'

/** Required child component dependencies / Обязательные зависимости дочерних компонентов */
export type ButtonComponents
  = IconComponentInclude
    & ProgressComponentInclude
    & RippleComponentInclude

/** Available component events / Доступные события компонента */
export type ButtonEmits = EventClickEmits

/** Properties exposed via defineExpose / Свойства, экспортируемые через defineExpose */
export interface ButtonExpose extends EventClickExpose {}

/** Available component slots / Доступные слоты компонента */
export interface ButtonSlots extends LabelSlots {}

/** Component CSS subclasses / CSS-подклассы компонента */
export type ButtonClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  icon: string
  trailing: string
  loading: string
  // :classes [!] System label / Системная метка
}
```

#### Rules
- `Components` is an intersection (`&`) of `ComponentInclude` types.
- `Classes.main` is always `ConstrClass`; all other keys are `string`.
- Never manually edit inside `// :classes [!]` markers.

---

### 2.3 `basicTypes.ts`

Defines types for embedding this component into **other** constructors and shared public component types.

```ts
import type { ConstrBind } from '@dxtmisha/functional'
import type { ButtonPropsBasic } from './props'

/** Dependency registration type for parent components / Тип регистрации зависимости для родительских компонентов */
export type ButtonComponentInclude = {
  /** Button component configuration / Конфигурация компонента кнопки */
  button?: object
}

/** Props for embedding button attributes inside another component / Свойства для встраивания атрибутов кнопки внутри другого компонента */
export type ButtonPropsInclude<
  Button extends ButtonPropsBasic = ButtonPropsBasic
> = {
  /** Bound attributes passed directly to the button component / Атрибуты, передаваемые напрямую в компонент кнопки */
  buttonAttrs?: ConstrBind<Button>
}
```

#### Rules
- `ComponentInclude` key must be camelCase matching the component identifier.
- `PropsInclude` provides `<name>Attrs?: ConstrBind<Props>` for attribute binding.
- **Component Boundary Rule**: For internal properties, element bindings, and helpers that do **not** escape beyond the component boundary (e.g., `get binds(): ConstrBind`, internal helper objects), do **NOT** declare redundant custom types in `basicTypes.ts`. Use standard ecosystem types from `@dxtmisha/functional` (`ConstrBind`, `ConstrClassObject`, `ConstrStyles`, `ConstrItem`).
- **Exception for `<Name>Constructors`**: Never place `<Name>Constructors` in `basicTypes.ts`; always declare and export `<Name>Constructors` directly in `<Name>.ts` to avoid circular dependencies and concrete class import pollution.

---

### 2.4 `<Name>.ts` — Logic Orchestrator Class (`DesignLogicAbstract`)

Encapsulates and coordinates all state, reactivity, accessibility, and subordinate helper classes via `DesignLogicAbstract`. **Must contain zero rendering code (`h()`, JSX, VNode).**

#### Anatomy of an Orchestrator
1. **Alphabetically sorted sub-constructor imports**.
2. **`<Name>Constructors` Type**: Declared and exported directly in `<Name>.ts` with keys sorted alphabetically.
3. **Orchestrator Class**: Extends `DesignLogicAbstract<Element, Components, Emits, Slots, Props, Constructors>`.
4. **`constructorItems`**: Alphabetically sorted map defining constructors (`item`), lazy parameter factories (`parameters`), and optional autonomous reactive guards (`conditions`).
5. **Public API (Getters & Methods)**: High-level aggregated getters (`aria`, `binds`, `classes`, `styles`, `tag`) and domain methods accessing dependencies on demand via `this.i(name)`.
6. **Strict Prohibition of Subordinate Getter Proxies**: Never declare public getters that merely proxy access to subordinate helper instances (e.g. forbidden: `get event() { return this.i('event') }`, `get elementTarget() { return this.i('elementTarget') }`). Subordinate instances are accessed internally and externally via `.i(name)`.

```ts
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  type ConstrStyles,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

// 1. Alphabetically sorted sub-constructors
import { ArrowElement } from './ArrowElement'
import { ArrowElementTarget } from './ArrowElementTarget'
import { ArrowEvent } from './ArrowEvent'
import { ArrowParent } from './ArrowParent'
import { ArrowPosition } from './ArrowPosition'

import { ArrowDirection } from './basicTypes'
import type { ArrowProps } from './props'
import type {
  ArrowComponents,
  ArrowEmits,
  ArrowSlots
} from './types'

/** Arrow dependency constructors type / Тип конструкторов зависимостей Arrow */
export type ArrowConstructors = {
  /** Arrow element constructor / Конструктор элемента стрелки */
  element: typeof ArrowElement
  /** Target element constructor / Конструктор целевого элемента */
  elementTarget: typeof ArrowElementTarget
  /** Arrow event constructor / Конструктор событий стрелки */
  event: typeof ArrowEvent
  /** Parent element constructor / Конструктор родительского элемента */
  parent: typeof ArrowParent
  /** Arrow position constructor / Конструктор позиции стрелки */
  position: typeof ArrowPosition
}

/**
 * Arrow.
 * The main class for managing the logic of the arrow component.
 * It coordinates the work of all sub-classes (elements, position, events).
 *
 * Стрелка.
 * Основной класс для управления логикой компонента стрелки.
 * Координирует работу всех подклассов (элементы, позиция, события).
 */
export class Arrow extends DesignLogicAbstract<
  HTMLDivElement,
  ArrowComponents,
  ArrowEmits,
  ArrowSlots,
  ArrowProps,
  ArrowConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ArrowConstructors> = {
    element: {
      item: ArrowElement,
      parameters: () => [
        this.element,
        this.naming
      ]
    },
    elementTarget: {
      item: ArrowElementTarget,
      parameters: () => [this.props]
    },
    event: {
      item: ArrowEvent,
      conditions: () => ArrowEvent.is(this.props),
      parameters: () => [
        this.props,
        this.element,
        () => this.i('elementTarget'), // Lazy getter factory!
        () => this.i('parent'),
        () => this.i('position')
      ]
    },
    parent: {
      item: ArrowParent,
      parameters: () => [
        this.element,
        this.naming,
        () => this.i('element')
      ]
    },
    position: {
      item: ArrowPosition,
      parameters: () => [
        this.props,
        () => this.i('element'),
        () => this.i('elementTarget'),
        () => this.i('parent')
      ]
    }
  }

  /**
   * ARIA attributes for the arrow element.
   *
   * ARIA-атрибуты для элемента стрелки.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): ConstrBind {
    return AriaStaticInclude.hidden()
  }

  /**
   * Root element bindings.
   *
   * Привязки корневого элемента.
   * @returns bindings object / объект привязок
   */
  get binds(): ConstrBind {
    return {
      ...this.aria
    }
  }

  /**
   * Values for the class.
   *
   * Значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return {
      [this.naming.getStatusClass('direction', this.direction)]: Boolean(this.direction)
    }
  }

  /**
   * Direction of the arrow.
   *
   * Направление стрелки.
   * @returns arrow direction / направление стрелки
   */
  get direction(): ArrowDirection {
    if (ArrowPosition.is(this.props)) {
      if (!ArrowPosition.isAuto(this.props)) {
        return this.props.position as ArrowDirection
      }

      const directionPosition = this.i('position').direction.value

      if (directionPosition) {
        return directionPosition
      }
    }

    return ArrowDirection.HIDE
  }

  /**
   * Styles for the component.
   *
   * Стили для компонента.
   * @returns styles object / объект стилей
   */
  get styles(): ConstrStyles {
    const parent = this.i('parent')

    const styles: ConstrStyles = {
      [this.naming.getStyle('background')]: parent.background,
      [this.naming.getStyle('borderWidth')]: parent.borderWidth,
      [this.naming.getStyle('borderColor')]: parent.borderColor,
      [this.naming.getStyle('borderRadius')]: parent.borderRadius
    }

    if (
      parent.isBorder()
      && this.i('position').clipPath.value
    ) {
      styles[this.naming.getStyle('clipPath')] = this.i('position').clipPath.value
    }

    if (
      ArrowElementTarget.is(this.props)
      && this.i('elementTarget').is()
      && this.i('position').shift.value
    ) {
      styles[this.naming.getStyle('shift')] = this.i('position').shift.value
    }

    return styles
  }

  /**
   * Updates the position of the arrow.
   *
   * Обновляет позицию стрелки.
   */
  readonly update = (): void => {
    this.i('position').update()
  }
}
```

---

### 2.5 Subordinate Helper Classes & `DesignLifecycleAbstract`

Decompose component mechanics into single-responsibility subordinate classes inside the component folder:
- Classes managing events/listeners (`*Events.ts`, `*Event.ts`).
- Classes managing coordinates, DOM measurements, or layout positions (`*Client.ts`, `*Position.ts`, `*Coordinator.ts`, `*Element.ts`).
- Classes managing items and selection (`*Item.ts`, `*Selection.ts`).
- Classes managing lazy loading or observers (`*Lazy.ts`, `*Border.ts`).

#### Lifecycle Management (`DesignLifecycleAbstract`)
If a subordinate class binds global DOM event listeners, creates `IntersectionObserver` / `ResizeObserver`, registers reactive `watch(...)` watchers, or uses timers:
1. **Extend `DesignLifecycleAbstract`** from `@dxtmisha/functional`.
2. **Never call Vue's `onMounted` or `onUnmounted` directly** inside subordinate classes.
3. **Place all `watch(...)` calls strictly inside `onMounted`**, NEVER in the `constructor` body. The constructor must remain clean and side-effect-free (only `super()` and property assignments).

```ts
import { watch } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { MyComponentElementTarget } from './MyComponentElementTarget'
import type { MyComponentProps } from './props'

/**
 * Class for managing component event listeners and lifecycle watchers.
 *
 * Класс для управления слушателями событий компонента и наблюдателями жизненного цикла.
 */
export class MyComponentEvents extends DesignLifecycleAbstract {
  /**
   * Checks if event listener management is active for the given props.
   *
   * Проверяет, активно ли управление слушателями событий для переданных свойств.
   * @param props component properties / свойства компонента
   * @returns true if events are enabled / true, если события включены
   */
  static is(props?: MyComponentProps): boolean {
    return Boolean(props?.dynamic)
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props component properties / свойства компонента
   * @param elementTarget target element getter / геттер целевого элемента
   */
  constructor(
    protected readonly props: MyComponentProps,
    protected readonly elementTarget: () => MyComponentElementTarget
  ) {
    super()
    // NO watch(...) here! The constructor body must remain side-effect-free.
  }

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  override readonly onMounted = (): void => {
    this.start()

    // MANDATORY: Place all watch(...) watchers inside onMounted!
    watch(() => this.elementTarget().element.value, this.makeEvents)
    watch(() => Object.values(this.props), this.update)
  }

  /**
   * Cleanup lifecycle listeners on unmount.
   *
   * Очистка слушателей жизненного цикла при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stop()
  }
}
```

#### Lazy Coupling Between Sub-Classes (Lazy Getters)
When subordinate class `B` depends on subordinate class `A`:
1. In `constructorItems`, always pass a factory function: `() => this.i('a')`. Never call `this.i('a')` directly inside `parameters: () => [...]`.
2. In class `B`'s constructor, type the parameter strictly as a pure function `() => MyComponentA`.
3. **Strict Ban on Dual Variants / Union Types**: Never type dependencies as `SubClass | (() => SubClass)` or accept raw instances. Always require `() => SubClass` and invoke it on demand (`this.a()`) inside methods or `computed` properties — **never** eagerly inside the constructor body.

#### Guarding Subordinate Instances (`static is` & Short-Circuit Guard)
1. **Extract Prop Checks into `static is`**: Encapsulate feature/mode checks into static predicates on the subordinate class (`static is(props?: Props): boolean`, `static isAuto(props?: Props): boolean`).
2. **Direct Prop Resolution**: If a getter can resolve a value directly from `this.props` using static guards (e.g. `ArrowPosition.is(this.props) && !ArrowPosition.isAuto(this.props)`), return it immediately without calling `this.i('position')`.
3. **Short-Circuit Guard in Aggregate Getters**: In `get styles()`, `get classes()`, and `get binds()`, guard calls to `this.i(name)` with static checks (`SubClass.is(this.props)`) or prop checks (`this.props.isSkeleton ? this.i('skeleton').classes : {}`) so inactive helpers remain unallocated in memory.

---

### 2.6 `<Name>Design.tsx` — Rendering Class (`DesignConstructorAbstract`)

Responsible for VNode tree construction and public `expose` assembly. Extends `DesignConstructorAbstract`.

```tsx
import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Icon } from './Icon'
import type { IconPropsBasic } from './props'
import type {
  IconClasses,
  IconComponents,
  IconEmits,
  IconExpose,
  IconSlots
} from './types'

/**
 * IconDesign rendering and composition class.
 *
 * Класс рендеринга и композиции IconDesign.
 */
export class IconDesign<
  COMP extends IconComponents,
  EXPOSE extends IconExpose,
  CLASSES extends IconClasses,
  P extends IconPropsBasic
> extends DesignConstructorAbstract<
  HTMLSpanElement,
  COMP,
  IconEmits,
  EXPOSE,
  IconSlots,
  CLASSES,
  P
> {
  /** Icon logic orchestrator instance / Экземпляр оркестратора логики Icon */
  protected readonly item: Icon

  /**
   * Constructor for creating an IconDesign instance.
   *
   * Конструктор для создания экземпляра дизайна иконки.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor icon item class / класс элемента иконки
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, IconEmits, P>,
    ItemConstructor: typeof Icon = Icon
  ) {
    super(name, props, options)

    this.item = new ItemConstructor(
      this.props,
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties / открытые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      getDetail: () => this.item.i('event').expose.getDetail?.(),
      getValue: () => this.item.i('event').expose.getValue?.(),
      isActive: this.item.isActive
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        icon: this.naming.getSubClass('icon'),
        iconActive: this.naming.getSubClass('iconActive')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns virtual node of the root element / виртуальный узел корневого элемента
   */
  protected initRender(): VNode {
    const children: VNode[] = []

    this.initSlot('default', children)

    if (this.props.icon) {
      const iconNode = this.renderIcon()

      if (iconNode) {
        children.push(iconNode)
      }
    }

    return h(
      'span',
      {
        ...this.getAttrs(),
        ref: this.element,
        ...this.item.binds,
        class: this.classes?.value.main,
        style: this.styles?.value
      },
      children
    )
  }

  /**
   * Render the main icon.
   *
   * Рендер основной иконки.
   * @returns rendered icon virtual node / отрендеренный виртуальный узел иконки
   */
  readonly renderIcon = (): VNode | undefined => {
    return this.components?.renderOne(
      'image',
      this.item.iconBind,
      undefined,
      'icon'
    )
  }
}
```

#### Rules for `<Name>Design.tsx`
- **`initExpose()`**: Invoked by `expose()` after the design instance is constructed. When exposing methods from subordinate classes (e.g. `EventClickInclude`), wrap them in lazy arrow functions (`getValue: () => this.item.i('event').expose.getValue?.()`) so `initExpose()` does not prematurely instantiate unused helpers on startup.
- **`initRender()`**: Returns `VNode | VNode[] | undefined`.
- **Root Element DOM Ref Binding (`ref: this.element` & `elementHtml`)**:
  - Always bind `ref: this.element` to the root element if the logic orchestrator (`DesignLogicAbstract`), any subordinate helper (`*Coordinator`, `*Events`, `*Lazy`, `*Client`, `*Scroll`, etc.), or any external consumer (`expose().elementHtml`) accesses the root DOM element.
  - For pure leaf visual primitives (such as `Icon`) where neither internal logic nor external consumers ever access `this.element` or `elementHtml`, omitting `ref: this.element` is permissible and safe.
- **Decomposition of Render Elements**: Extract sub-renderers into read-only arrow function properties (`protected readonly renderPart = (): VNode[] => {}` or `readonly renderPart = (): VNode | undefined => {}`).

---

### 2.7 `<Name>Include.ts` — Embedding Helper

Extends `ComponentIncludeAbstract` to enable conditional rendering and prop forwarding within parent components.

```ts
import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { ButtonPropsInclude } from './basicTypes'
import type { ButtonPropsBasic } from './props'
import type { ButtonExpose } from './types'

export class ButtonInclude extends ComponentIncludeAbstract<
  ButtonPropsInclude,
  ButtonPropsBasic,
  ButtonExpose,
  any
> {
  protected override readonly name = 'button'
  protected override readonly propsAttrsName = 'buttonAttrs'
  protected readonly hasInitElement: boolean = false

  override get is(): boolean {
    return (
      'label' in this.binds.value
      || 'icon' in this.binds.value
      || 'iconTrailing' in this.binds.value
    )
  }
}
```

---

### 2.8 `index.ts`

Uniform public export barrel (all component helper classes, orchestrator, design, include, props, and types):

```ts
export * from './Arrow'
export * from './ArrowDesign'
export * from './ArrowElement'
export * from './ArrowElementTarget'
export * from './ArrowEvent'
export * from './ArrowInclude'
export * from './ArrowParent'
export * from './ArrowPosition'
export * from './props'
export * from './types'
export * from './basicTypes'
```

---

### 2.9 `properties.json`

Single source of truth for external component tokens, states, sub-elements, and modifiers.

```json
{
  "padding": { "_type": "var" },
  "border-radius": "0",
  "transition-property": "background-color, border",
  "transition-duration": "{d.sys.transitionDuration.fade.enter}",
  "transition-function": "{d.sys.transitionFunction.standard}",

  "#label": {},
  "#icon": {},
  "#trailing": {},

  "focus": {},
  "hover": { "transition-duration": "{d.sys.transitionDuration.sm}" },
  "active": { "transition-duration": "{d.sys.transitionDuration.sm}" },
  "selected": { "_type": "state" },
  "readonly": { "_type": "state" },
  "disabled": { "transition-duration": "{d.sys.transitionDuration.sm}" },

  "~adaptive": {
    "~iconAlways": { "justify-content": "flex-start" },
    "~block": { "width": "100%" }
  },

  "~inverse": {},
  "~grid": {}
}
```

#### JSON Conventions
- `#name` — Sub-element: generates `ComponentName__name` in `types.ts` and `<Name>Design.tsx`.
- `~name` — External variant/modifier matching a boolean/enum prop. Automatically mapped to CSS classes by the framework; **never** manually re-map `~` modifiers inside the orchestrator's `get classes()`.
- Plain keys (`focus`, `hover`, `active`, `disabled`, `selected`, `readonly`) — State definitions.
- `_type: "var"` — CSS variable configured by the design system.
- `_type: "state"` — State class managed via CSS.
- `{d.sys.*}` — Token reference to design system globals.
- **External Control Only**: Never place internal calculated component states into `properties.json`.

---

### 2.10 `style.scss`

SCSS mixin entry point (`mixin<ComponentName>`) connecting tokens to component styles.

```scss
@use "@dxtmisha/styles/properties" as ui;

@mixin mixinButton {
  @include ui.initByCustom('padding', 0);
  @include ui.initByCustom('compressed', 1);

  @include ui.flexInlineCenter;
  box-sizing: border-box;
  position: relative;

  // States via helper mixins (never raw :hover / :disabled)
  @include ui.hover { text-decoration: none; }
  @include ui.disabled { cursor: default; }
  @include ui.readonly { cursor: default; }

  // Sub-elements (matching #name keys in properties.json)
  &__label {
    order: 4;
    @include ui.paddingX(calc(ui.v('??padding') * ui.v('??compressed')));
  }

  &__icon,
  &__trailing {
    @include ui.marginLeft(calc(ui.v('??margin') * ui.v('??compressed')));
  }

  // Modifiers (matching ~name keys in properties.json)
  &--icon {
    @include ui.initByCustom('padding', #{calc(var(--sys-height) / 2)});
  }

  &--grid { display: inline-grid; }
  &--inverse { --sys-color: unset !important; }
}
```

#### SCSS Utility Reference (`@dxtmisha/styles/properties`)

| Helper | Description |
|---|---|
| `ui.v('token')` | Get CSS variable value |
| `ui.v('??token', fallback)` | Local component token (from component's `properties.json`) |
| `ui.v('?token')` | Token from related/parent component |
| `ui.n('component--class')` | Class name with design system prefix |
| `ui.initByCustom('key', value)` | Initialize custom CSS variable |
| `ui.subclass('name') { ... }` | Scope styles to a sub-element class |
| `ui.flexCenter` | `display: flex; align-items: center; justify-content: center` |
| `ui.flexInlineCenter` | `display: inline-flex; align-items: center; justify-content: center` |
| `ui.hover`, `ui.disabled`, `ui.readonly`, `ui.focus`, `ui.selected` | State mixins |
| `ui.truncate` | Single-line text truncation with ellipsis |
| `ui.paddingX(val)`, `ui.paddingY(val)` | Horizontal / vertical padding |
| `ui.marginLeft(val)`, `ui.marginRight(val)` | Direction-aware margins (RTL compatible) |

#### SCSS Rules
- **Forbidden:** Raw `@media screen` queries — use `ui.mediaMinWidth(...)` exclusively.
- **Forbidden:** Hardcoded colors (HEX, RGB) — use CSS variables and palette mixins exclusively.
- Class and modifier names must strictly mirror `properties.json`.

---

## 3. Core Architectural Patterns

### 3.1 Constructor Inheritance (Base & Extended Components)

Child components (e.g. `Chip` extending `Button`, or `Select` extending `SelectAbstract`) must directly inherit their core logic orchestrator, design constructor, props, and types:

```ts
// 1. Abstract or Parent Logic Orchestrator
export abstract class SelectAbstract<
  CONSTRUCTORS extends SelectAbstractConstructors = SelectAbstractConstructors
> extends DesignLogicAbstract<
  HTMLDivElement,
  SelectComponents,
  SelectEmits,
  SelectSlots,
  SelectProps,
  CONSTRUCTORS
> {
  // Shared constructorItems and getters
}

// 2. Concrete Child Logic Orchestrator
export type SelectConstructors = SelectAbstractConstructors & {
  field: typeof FieldInclude
}

export class Select extends SelectAbstract<SelectConstructors> {
  protected override readonly constructorItems: ConstrItems<SelectConstructors> = {
    ...this.getAbstractConstructorItems(),
    field: {
      item: FieldInclude,
      parameters: () => [/* ... */]
    }
  }
}
```

---

### 3.2 Include Embedding Pattern in `DesignLogicAbstract`

Used when a parent component conditionally embeds a child constructor via `*Include`:

```tsx
// 1. Register Include in Parent <Name>Constructors & constructorItems
export type MyComponentConstructors = {
  button: typeof ButtonInclude
}

protected override readonly constructorItems: ConstrItems<MyComponentConstructors> = {
  button: {
    item: ButtonInclude,
    parameters: () => [
      this.naming,
      this.props,
      this.components,
      () => ({ label: this.props.buttonLabel, icon: this.props.buttonIcon })
    ]
  }
}

// 2. Render in Parent Design Class
protected initRender(): VNode {
  return h('div', { class: this.classes?.value.main }, [
    ...this.item.i('button').render()
  ])
}

// 3. In Consumer basicTypes.ts / types.ts
export type MyComponentComponents = ButtonComponentInclude & { /* ... */ }
export type MyComponentPropsInclude = ButtonPropsInclude & { /* ... */ }
```

---

### 3.3 `this.components` (`DesignComponents`) API

Methods for dynamically rendering child components inside Design or Include classes:

```tsx
// Render single component (VNode | undefined)
this.components?.renderOne('icon', { ...props }, slots, 'unique-key')

// Append component into children array
this.components?.renderAdd(children, 'icon', { ...props }, slots, 'unique-key')

// Render array of components (VNode[])
this.components?.render('icon', { ...props }, slots)
```

---

### 3.4 `ModelInclude` — Reactive `v-model` Synchronization

Standard pattern for synchronizing two-way props with internal reactive state:

```ts
import { ref, watch } from 'vue'
import { type ConstrItems, DesignLogicAbstract } from '@dxtmisha/functional'
import { ModelInclude } from '../../classes/ModelInclude'

export type MyModalConstructors = {
  model: typeof ModelInclude<boolean>
}

export class MyModal extends DesignLogicAbstract<
  HTMLDivElement,
  MyModalComponents,
  MyModalEmits,
  MyModalSlots,
  MyModalProps,
  MyModalConstructors
> {
  readonly open = ref<boolean>(false)

  protected override readonly constructorItems: ConstrItems<MyModalConstructors> = {
    model: {
      item: ModelInclude<boolean>,
      parameters: () => ['open', this.emits, this.open]
    }
  }

  protected override readonly onMounted = (): void => {
    this.i('model')

    watch(() => this.props.open, () => {
      this.open.value = Boolean(this.props.open)
    }, { immediate: true })
  }
}
```

---

## 4. Base Class Reference

### 4.1 `DesignLogicAbstract` & `DesignLifecycleAbstract` Reference

| Member | Type | Description |
|---|---|---|
| `this.constructorItems` | `ConstrItems<CONSTRUCTORS>` | Abstract map of dependency constructors, `parameters` factories, and optional `conditions` |
| `this.getInstance(name)` / `this.i(name)` | `ConstrInstance<CONSTRUCTORS, K>` | Lazily instantiates (inside `this.scope`) and caches the subordinate dependency by key |
| `this.isMounted` | `Ref<boolean>` | Reactive flag indicating whether the component's `onMounted` hook has executed |
| `this.scope` | `EffectScope \| undefined` | Captured Vue reactivity effect scope (`getCurrentScope()`) |
| `this.onMounted` | `(() => void) \| undefined` | Optional orchestrator callback executed after subordinate `onMounted` hooks and `initConditions()` |
| `this.onUnmounted` | `(() => void) \| undefined` | Optional orchestrator callback executed after subordinate `onUnmounted` hooks |
| `this.props` | `Readonly<P>` | Reactive input props proxy |
| `this.element` | `Ref<E \| undefined>` | Root DOM element reference |
| `this.naming` | `DesignName` | BEM class and CSS variable naming helper |
| `this.components` | `DesignComponents<COMP, P> \| undefined` | Child component registry and renderer |
| `this.slots` | `SLOTS \| undefined` | Component slots registry |
| `this.emits` | `ConstrEmit<EMITS> \| undefined` | Component event emitter |
| `this.constructors` | `Partial<CONSTRUCTORS> \| undefined` | Dependency injection constructor overrides |
| `DesignLifecycleAbstract.onMounted` | `(() => void) \| undefined` | Synchronous mount hook invoked on subordinate instances (and immediately if instantiated post-mount) |
| `DesignLifecycleAbstract.onUnmounted` | `(() => void) \| undefined` | Synchronous cleanup hook invoked on subordinate instances when component unmounts |

### 4.2 `DesignConstructorAbstract` Reference

| Method / Property | Return Type | Description |
|---|---|---|
| `this.naming.getName()` | `string` | Component name in kebab-case |
| `this.naming.getDesign()` | `string` | Design system prefix (e.g. `d1`) |
| `this.naming.getSubClass('element')` | `string` | Sub-element class name (`ComponentName__element`) |
| `this.naming.getStatusClass('active')` | `string` | State class name (`ComponentName--active`) |
| `this.naming.getStyle('width')` | `string` | CSS custom property name (`--ComponentName-sys-width`) |
| `this.getAttrs()` | `ConstrBind` | External bound attributes |
| `this.getKeyClass('element')` | `{ key: string, class: string }` | Key and subclass binding helper for sub-elements |
| `this.initSlot('name', children, props)` | `VNode[]` | Render named slot |
| `this.expose()` | `ConstrExpose` | Public API from `initExpose()` combined with `elementHtml` (`this.element`) |
| `this.classes?.value.main` | `ConstrClass` | Reactive root element class object |
| `this.styles?.value` | `ConstrStyles` | Reactive root element inline styles |
| `this.props` | `Readonly<P>` | Input props proxy |
| `this.element` | `Ref<E \| undefined>` | Root DOM element reference |
| `this.components` | `DesignComponents` | Child component renderer helper |
| `this.slots` | `SLOTS` | Component slots object |
| `this.emits` | `ConstrEmit` | Emit trigger function |

---

## 5. Reference Implementations & Include Catalog

### 5.1 Reference `DesignLogicAbstract` Implementations
- **[`DraggableWrapper.ts`](../src/constructors/DraggableWrapper/DraggableWrapper.ts)**: Multi-dependency lazy coordination across 13 sub-constructors (`classesData`, `client`, `delay`, `emit`, `events`, `item`, `itemActive`, `itemFocus`, `itemGo`, `itemSelection`, `position`, `selection`, `square`) wired via lazy getters `() => this.i(...)`.
- **[`Image.ts`](../src/constructors/Image/Image.ts)**: Conditional lifecycle dependencies (`adaptiveItem`, `event`) and `ImageLazy` extending `DesignLifecycleAbstract` for `IntersectionObserver` management.
- **[`Scrollbar.ts`](../src/constructors/Scrollbar/Scrollbar.ts)**: Reactive boundary monitoring with `ScrollbarBorder` (`conditions: () => ScrollbarBorder.is(this.props)`) and `ScrollbarWidthRef`.
- **[`Ripple.ts`](../src/constructors/Ripple/Ripple.ts)**: Lightweight delegation with `RippleItem` instantiated lazily only on primary pointerdown.
- **[`Arrow.ts`](../src/constructors/Arrow/Arrow.ts)**: Lazy short-circuits & guarded style aggregation using static predicates (`ArrowPosition.is`, `ArrowPosition.isAuto`, `ArrowElementTarget.is`, `ArrowEvent.is`) so static arrows allocate zero unused helper instances.
- **[`Icon.ts`](../src/constructors/Icon/Icon.ts)**: Guarded `Include` orchestration (`EnabledInclude`, `EventClickInclude`, `SkeletonInclude`) where `event` and `skeleton` are only instantiated when `dynamic` or `isSkeleton` is active.

### 5.2 Shared Includes (`src/classes/` & `src/constructors/*/`)
- **Base Includes (`classes/`)**: `AriaStaticInclude`, `CaptionInclude`, `DescriptionInclude`, `EnabledInclude`, `EventClickInclude`, `LabelInclude`, `LabelNumberInclude`, `ModelInclude<T>`, `PrefixInclude`, `SuffixInclude`, `TextInclude`.
- **Constructor Includes (`constructors/*/`)**: `ActionsInclude`, `ArrowInclude`, `BadgeInclude`, `BarsInclude`, `ButtonInclude`, `FieldInclude`, `IconInclude`, `IconTrailingInclude`, `ImageInclude`, `ListInclude`, `MaskInclude`, `MenuInclude`, `ProgressInclude`, `RippleInclude`, `ScrollbarInclude`, `SkeletonInclude`, `WindowInclude`.
- **Field Includes (`classes/Field/`)**: `FieldArrowInclude`, `FieldAttributesInclude`, `FieldChangeInclude`, `FieldCodeInclude`, `FieldCounterInclude`, `FieldElementInclude`, `FieldEventInclude`, `FieldInputCheckInclude`, `FieldInputModeInclude`, `FieldMatchInclude`, `FieldMessageInclude`, `FieldPatternInclude`, `FieldSizeInclude`, `FieldTypeInclude`, `FieldValidationInclude`, `FieldValueInclude`, `FieldVisibilityInclude`.

---

## 6. Common Pitfalls & Anti-Patterns

### ❌ 1. Passing `this.i(...)` Directly Instead of a Lazy Getter
```ts
// ❌ WRONG: Eagerly instantiates 'a' when 'b' is created, risking circular dependency and breaking lazy loading
b: {
  item: MyComponentB,
  parameters: () => [this.props, this.i('a')]
}

// ✅ CORRECT: Pass a lazy getter function () => this.i('a')
b: {
  item: MyComponentB,
  parameters: () => [this.props, () => this.i('a')]
}
```

### ❌ 2. Union Types (`Type | (() => Type)`) or Calling Getters in Constructor
```ts
// ❌ WRONG: Union type and eager invocation inside constructor
export class MyComponentB {
  constructor(protected readonly a: MyComponentA | (() => MyComponentA)) {
    const instance = isFunction(this.a) ? this.a() : this.a // Forbidden!
  }
}

// ✅ CORRECT: Strictly type as () => SubClass and call only on demand in methods/computed
export class MyComponentB {
  constructor(protected readonly a: () => MyComponentA) {}

  execute(): void {
    this.a().doSomething()
  }
}
```

### ❌ 3. Direct Vue Lifecycle Hooks or Watchers in Subordinate Constructors
```ts
// ❌ WRONG: Calling Vue's onMounted or placing watch() inside constructor
export class MyComponentEvents {
  constructor(protected readonly props: MyComponentProps) {
    watch(() => this.props.open, this.update) // Premature execution / SSR leak!
    onMounted(() => this.start()) // Forbidden!
  }
}

// ✅ CORRECT: Extend DesignLifecycleAbstract and place all watch() calls inside onMounted
export class MyComponentEvents extends DesignLifecycleAbstract {
  constructor(protected readonly props: MyComponentProps) {
    super()
  }

  override readonly onMounted = (): void => {
    this.start()
    watch(() => this.props.open, this.update)
  }

  override readonly onUnmounted = (): void => {
    this.stop()
  }
}
```

### ❌ 4. Defining `conditions` for Explicitly Called Dependencies
```ts
// ❌ WRONG: 'skeleton' is already called explicitly in get classes(), so conditions creates a redundant watcher
skeleton: {
  item: SkeletonInclude,
  conditions: () => Boolean(this.props.isSkeleton),
  parameters: () => [this.props, this.naming]
}

// ✅ CORRECT: Omit conditions when an explicit call site exists; guard the call site instead
skeleton: {
  item: SkeletonInclude,
  parameters: () => [this.props, this.naming]
}
// In get classes():
// ...(this.props.isSkeleton ? this.i('skeleton').classes : {})
```

### ❌ 5. Exposing Subordinate Getter Proxies on Orchestrators
```ts
// ❌ WRONG: Pollutes public API and encourages premature instantiation
export class Arrow extends DesignLogicAbstract<...> {
  get event(): ArrowEvent { return this.i('event') }
  get elementTarget(): ArrowElementTarget { return this.i('elementTarget') }
}

// ✅ CORRECT: Keep orchestrator surface clean; use this.i('event') internally or this.item.i('event') in Design
```

### ❌ 6. Unconditional `this.i(name)` in Aggregate Getters
```ts
// ❌ WRONG: Always allocates ArrowElementTarget in memory even when props.target is undefined
if (this.i('elementTarget').is()) { ... }

// ✅ CORRECT: Short-circuit with a static guard before touching this.i(...)
if (ArrowElementTarget.is(this.props) && this.i('elementTarget').is()) { ... }
```

### ❌ 7. Omitting System Labels in `props.ts` / `types.ts` / `<Name>Design.tsx`
```ts
// ❌ WRONG: Missing system labels breaks automated code generation
export type MyPropsToken = { disabled?: boolean }

// ✅ CORRECT: Preserve system labels
export type MyPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  // :type [!] System label / Системная метка
}
```

---

## 7. Mandatory Coding Rules & New Constructor Checklist

### 7.1 Mandatory Coding Rules
1. **Alphabetical Sorting**: Imports of sub-constructors, keys in `<Name>Constructors`, and entries in `constructorItems` must all be sorted alphabetically.
2. **Strict Lazy Parameters & Pure Function Typing**: Always pass dependent sub-classes as `() => this.i('subClass')` and type them strictly as `() => SubClass` (no union types, no raw instances, no eager calls in constructors).
3. **`DesignLifecycleAbstract` & Watcher Placement**: Subordinate classes needing lifecycle hooks must extend `DesignLifecycleAbstract` and place all `watch(...)` calls strictly inside `override readonly onMounted`, never in `constructor`.
4. **No `conditions` for Explicitly Called Dependencies**: Use `conditions` strictly for autonomous background/lifecycle classes (`DesignLifecycleAbstract`) that have no explicit `this.i(...)` call site.
5. **Lazy Short-Circuits (`static is`)**: Encapsulate prop checks into `static is(props?: Props): boolean` on subordinate classes and guard `this.i(name)` calls in aggregate getters (`classes`, `styles`, `binds`).
6. **No Subordinate Getter Proxies**: Never define getters on the orchestrator that simply return `this.i('...')`.
7. **Component Boundary Typing**: Declare `<Name>Constructors` in `<Name>.ts` (never in `basicTypes.ts`). Reuse `ConstrBind`, `ConstrClassObject`, `ConstrStyles`, and `ConstrItem` for internal bindings rather than inventing custom internal interfaces.
8. **Root Element DOM Ref Binding**: Bind `ref: this.element` on the root element in `initRender()` whenever the logic orchestrator, subordinate helpers, or external consumers (`elementHtml`) interact with the DOM element.
9. **No Abbreviations**: Never use `el`, `val`, `temp`, `dx`, `idx`, etc. Use descriptive identifiers (`element`, `value`, `deltaX`, `index`).
10. **Bilingual JSDoc & Zero `any`**: Document all classes, methods, constructors, and types in `English / Russian`. Avoid `any`.

### 7.2 New Constructor Checklist

```markdown
- [ ] Create directory: `packages/constructor/src/constructors/<Name>/`
- [ ] `props.ts`: `PropsToken`, `PropsBasic`, `Props`, and `defaults` with system labels
- [ ] `types.ts`: `Components`, `Emits`, `Expose`, `Slots`, `Classes` with system labels
- [ ] `basicTypes.ts`: `ComponentInclude`, `PropsInclude`, and public auxiliary types (no `<Name>Constructors`)
- [ ] `properties.json`: External tokens, states, sub-elements (`#`), modifiers (`~`)
- [ ] `style.scss`: `mixin<Name>` with `@use "@dxtmisha/styles/properties" as ui;`
- [ ] `<Name>*.ts`: Subordinate single-responsibility classes (`DesignLifecycleAbstract` for watchers/listeners, `static is` guards, `() => SubClass` lazy getters)
- [ ] `<Name>.ts`: Orchestrator extending `DesignLogicAbstract` with exported `<Name>Constructors` and alphabetically sorted `constructorItems`
- [ ] `<Name>Design.tsx`: Extends `DesignConstructorAbstract`, binds `ref: this.element` (when DOM is used), and implements `initExpose()`, `initClasses()`, `initStyles()`, `initRender()`
- [ ] `<Name>Include.ts`: *(Optional)* Extends `ComponentIncludeAbstract` if embedded into parent components
- [ ] `index.ts`: Re-export all constructor files and types
- [ ] Register constructor in package root `index.ts`
```
