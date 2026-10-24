---
name: design-logic
description: Guidelines, architectural standards, and step-by-step workflow for creating or migrating component logic orchestrators to DesignLogicAbstract with lazy dependencies and lifecycle orchestration.
---

Study this technical guide when creating new component logic constructors or refactoring existing ones to inherit from `DesignLogicAbstract` in `@dxtmisha/functional` and `@dxtmisha/constructor`.

---

## 1. Architectural Philosophy & Core Objectives

The component logic layer in `dxt-ui` isolates business logic, accessibility (`ARIA`), state coordination, and event dispatching from visual styles and Vue template rendering.

### Why `DesignLogicAbstract`?
1. **True Lazy Loading (On-Demand Instantiation)**:
   - Subordinate helper classes are **not instantiated eagerly** on component creation.
   - Dependencies are instantiated only on first access via `this.getInstance(name)` (or its shorthand `this.i(name)`).
   - If a feature is never used (e.g., image load events when rendering a plain icon, or scrollbar borders when borders are disabled), its sub-class is **never allocated in memory**.
2. **Captured Reactivity Scope (`getCurrentScope`)**:
   - `DesignLogicAbstract` captures the active Vue effect scope (`getCurrentScope()`) during constructor execution.
   - Any lazy dependency instantiated later runs inside `this.scope.run(...)`, ensuring full Vue reactivity context even during delayed execution.
3. **Coordinated Lifecycle (`DesignLifecycleAbstract`)**:
   - Sub-classes never register raw Vue `onMounted` or `onUnmounted` hooks inside their own constructors.
   - Instead, classes requiring lifecycle hooks extend `DesignLifecycleAbstract`.
   - `DesignLogicAbstract` orchestrates synchronous execution of `onMounted` and `onUnmounted` across all active instances. If a lifecycle dependency is lazily instantiated *after* the component has already mounted, `onMounted` is triggered on it immediately upon instantiation.
4. **Declarative Conditions (`conditions`)**:
   - `constructorItems` can declare a reactive condition `conditions: () => boolean`.
   - On component mount, `initConditions()` establishes a `watch(item.conditions, (active) => { if (active) this.getInstance(name) }, { immediate: true })`, automatically activating dependencies when conditions are met.
5. **Full Dependency Injection (DI)**:
   - All sub-constructors can be overridden via the `constructors?: Partial<CONSTRUCTORS>` parameter, enabling comprehensive unit testing and subclass extension without mocking modules.

---

## 2. Anatomy of a Component Logic Orchestrator

A standard orchestrator consists of:
1. **Alphabetically sorted sub-constructor imports**.
2. **`<Component>Constructors` Type**: Declared and exported directly in `[Component].ts` (not in `basicTypes.ts`, to prevent circular dependencies and type pollution).
3. **Orchestrator Class**: Extends `DesignLogicAbstract<Element, Components, Emits, Slots, Props, Constructors>`.
4. **`constructorItems`**: Alphabetically sorted map defining constructors, factories (`parameters`), and reactive guards (`conditions`).
5. **Public API (Getters & Methods)**: Aggregated getters (`classes`, `binds`, `aria`, `tag`) accessing dependencies via `this.i(name)`.

### Orchestrator Template:

```typescript
import {
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

// 1. Alphabetically sorted sub-constructors
import { MyComponentA } from './MyComponentA'
import { MyComponentB } from './MyComponentB'
import { MyComponentC } from './MyComponentC'

import type { MyComponentProps } from './props'
import type {
  MyComponentComponents,
  MyComponentEmits,
  MyComponentSlots
} from './types'

/** MyComponent dependency constructors type / Тип конструкторов зависимостей MyComponent */
export type MyComponentConstructors = {
  /** First helper constructor / Конструктор первого помощника */
  a: typeof MyComponentA
  /** Second helper constructor / Конструктор второго помощника */
  b: typeof MyComponentB
  /** Third helper constructor / Конструктор третьего помощника */
  c: typeof MyComponentC
}

/**
 * Orchestrator class for MyComponent.
 *
 * Класс-оркестратор для MyComponent.
 */
export class MyComponent extends DesignLogicAbstract<
  HTMLElement,
  MyComponentComponents,
  MyComponentEmits,
  MyComponentSlots,
  MyComponentProps,
  MyComponentConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<MyComponentConstructors> = {
    a: {
      item: MyComponentA,
      parameters: () => [
        this.props,
        this.element
      ]
    },
    b: {
      item: MyComponentB,
      conditions: () => MyComponentB.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('a'), // Lazy getter factory!
        this.emits
      ]
    },
    c: {
      item: MyComponentC,
      parameters: () => [
        () => this.i('b') // Never pass this.i('b') directly!
      ]
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
      [this.naming.getStatusClass('disabled')]: Boolean(this.props.disabled),
      [this.naming.getStatusClass('active')]: this.i('a').isActive()
    }
  }

  /**
   * Tag name.
   *
   * Название тега.
   * @returns tag name / название тега
   */
  get tag(): string {
    return this.props.tag ?? 'div'
  }
}
```

---

## 3. Step-by-Step Migration & Implementation Guide

### Step 1: Decompose Subordinate Classes
Separate the component mechanics into single-responsibility classes:
- Classes managing events/listeners (e.g., `*Events.ts`, `*Event.ts`).
- Classes managing coordinates or layout positions (e.g., `*Client.ts`, `*Position.ts`, `*Coordinator.ts`).
- Classes managing items and selection (e.g., `*Item.ts`, `*Selection.ts`).
- Classes managing lazy loading (e.g., `*Lazy.ts`).

### Step 2: Implement `DesignLifecycleAbstract` for Sub-Classes
If a sub-class binds global DOM event listeners, creates `IntersectionObserver` / `ResizeObserver`, or uses intervals/timers:
1. Extend `DesignLifecycleAbstract`:
   ```typescript
   import { DesignLifecycleAbstract } from '@dxtmisha/functional'

   export class MyComponentEvents extends DesignLifecycleAbstract {
     override readonly onMounted = (): void => {
       this.start()
     }

     override readonly onUnmounted = (): void => {
       this.stop()
     }
   }
   ```
2. **STRICT BAN**: Never call Vue's global `onMounted(...)` or `onUnmounted(...)` inside sub-class constructors. Always use `DesignLifecycleAbstract`.

### Step 3: Lazy Coupling Between Sub-Classes (Lazy Getters)
When helper class `B` depends on helper class `A`:
1. In `constructorItems`, pass a factory function: `() => this.i('a')`.
2. In class `B`'s constructor, type the parameter as a function:
   ```typescript
   export class MyComponentB {
     constructor(
       protected readonly props: MyComponentProps,
       protected readonly a: () => MyComponentA
     ) {}

     someAction(): void {
       // Call the getter on demand, only when needed!
       const aInstance = this.a()
       aInstance.doSomething()
     }
   }
   ```
3. **CRITICAL RULE**: Sub-class constructors must **never** call `this.a()` eagerly in their constructor body. Call `this.a()` strictly inside methods or computed properties.

### Step 4: Conditional Instantiation (`conditions`)
If a dependency is only relevant for specific props:
1. Add a static guard method in the sub-class:
   ```typescript
   export class MyComponentBorder extends DesignLifecycleAbstract {
     static is(props?: MyComponentProps): boolean {
       return Boolean(props?.divider || props?.border)
     }
   }
   ```
2. In `constructorItems`, attach `conditions`:
   ```typescript
   border: {
     item: MyComponentBorder,
     conditions: () => MyComponentBorder.is(this.props),
     parameters: () => [this.props, this.element]
   }
   ```
`DesignLogicAbstract.initConditions()` will automatically observe this condition with Vue's `watch(..., { immediate: true })`.

### Step 5: Connect to the Design Class (`[Name]Design.tsx`)
In `[Name]Design.tsx`, instantiate the orchestrator supporting dependency injection:
```typescript
export class MyComponentDesign<...> extends DesignConstructorAbstract<...> {
  protected readonly item: MyComponent

  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MyComponentEmits, P>,
    ItemConstructor: typeof MyComponent = MyComponent
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

  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...
    } as Partial<CLASSES>
  }
}
```

---

## 4. Reference Implementations

### Reference 1: Multi-Dependency Lazy Coordination (`DraggableWrapper`)
See [`DraggableWrapper.ts`](file:///Volumes/T7/development/dxt-ui/packages/constructor/src/constructors/DraggableWrapper/DraggableWrapper.ts):
- Manages 13 distinct sub-constructors (`classesData`, `client`, `delay`, `emit`, `events`, `item`, `itemActive`, `itemFocus`, `itemGo`, `itemSelection`, `position`, `selection`, `square`).
- High inter-dependency without circular instantiation bugs because every dependency is wired with lazy getters `() => this.i(...)`.
- `DraggableWrapperEvents` extends `DesignLifecycleAbstract` to automatically deregister pointer/mouse listeners in `onUnmounted`.

### Reference 2: Conditional Lifecycle Dependencies (`Image`)
See [`Image.ts`](file:///Volumes/T7/development/dxt-ui/packages/constructor/src/constructors/Image/Image.ts):
- `adaptiveItem` activates only when `conditions: () => ImageAdaptiveItem.is(this.props)`.
- `event` activates conditionally when `conditions: () => ImageData.isImage(this.i('type').get()) && this.i('data').isImage()`.
- `ImageLazy` extends `DesignLifecycleAbstract`, cleanly handling `IntersectionObserver` setup in `onMounted` and disconnection in `onUnmounted`.

### Reference 3: Reactive Boundary Monitoring (`Scrollbar`)
See [`Scrollbar.ts`](file:///Volumes/T7/development/dxt-ui/packages/constructor/src/constructors/Scrollbar/Scrollbar.ts):
- `border` activates on `conditions: () => ScrollbarBorder.is(this.props)`.
- `width` uses `ScrollbarWidthRef`.
- `classes` checks `this.isMounted.value && Boolean(this.i('width').item.value)`.

### Reference 4: Lightweight Delegation (`Ripple`)
See [`Ripple.ts`](file:///Volumes/T7/development/dxt-ui/packages/constructor/src/constructors/Ripple/Ripple.ts):
- Single dependency `item: RippleItem`.
- Coordinates pointerdown filtering and delegates DOM wave generation to `this.i('item').add(...)`.

---

## 5. Mandatory Coding Rules & Checklists

1. **Alphabetical Sorting (Mandatory)**:
   - Imports of sub-constructors must be sorted alphabetically.
   - Keys in `<Name>Constructors` must be sorted alphabetically.
   - Entries in `constructorItems` must be sorted alphabetically.
2. **Strict Lazy Parameters**:
   - ALWAYS pass dependent sub-classes as getter functions: `() => this.i('subClass')`.
   - NEVER call `this.i(...)` directly inside `parameters: () => [ ... ]` when passing another sub-class.
3. **No Direct Vue Lifecycle in Helpers**:
   - Subordinate classes must NOT import or call `onMounted` or `onUnmounted` from `vue`.
   - Subordinate classes must inherit `DesignLifecycleAbstract` and override `readonly onMounted` / `readonly onUnmounted`.
4. **No Abbreviations**:
   - Strictly prohibit `el`, `val`, `temp`, `dx`, `idx`, etc. Use full descriptive identifiers (`element`, `value`, `deltaX`, `index`).
5. **Bilingual JSDoc Documentation**:
   - All classes, methods, constructors, and types must include complete bilingual JSDoc comments (`English / Russian`) matching [`jdoc.md`](./jdoc.md).
6. **Strict Types & Zero `any`**:
   - Use generics and exact interfaces. Avoid `any`.
   - When writing unit tests with `reactive<PropsInclude>`, avoid passing reactive objects with recursive constructor types into test constructors to prevent `TS2589` infinite type instantiation.
