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
   - **Deferred Watchers**: All reactive watchers (`watch(...)`) and active DOM event listeners must be placed inside `onMounted`, never in the class constructor body.
4. **Declarative Conditions (`conditions`) & Lazy Loading**:
   - `constructorItems` declares a reactive condition `conditions: () => boolean` for optional subordinate classes and inclusion helpers (e.g., `icon`, `label`, `progress`, `ripple`, `skeleton`, `adaptiveItem`, `event`).
   - If conditions are not met, the subordinate class is **never allocated in memory** on component creation or mount.
   - On component mount, `initConditions()` establishes a `watch(item.conditions, (active) => { if (active) this.getInstance(name) }, { immediate: true })`, ensuring that dependencies automatically activate when their trigger conditions become true.
   - **Static Predicate Guards (`SubClass.is(...)`)**: Always encapsulate condition logic into static `is` methods on the respective subordinate classes (e.g. `IconTrailingInclude.is(this.props)`, `ProgressInclude.is(this.props)`, `ImageAdaptiveItem.is(this.props)`). Never invent ad-hoc instance helper methods on the orchestrator class (such as `this.isIcon()` or `this.isProgress()`).
5. **Full Dependency Injection (DI)**:
   - All sub-constructors can be overridden via the `constructors?: Partial<CONSTRUCTORS>` parameter, enabling comprehensive unit testing and subclass extension without mocking modules.

---

## 2. Anatomy of a Component Logic Orchestrator

A standard orchestrator consists of:
1. **Alphabetically sorted sub-constructor imports**.
2. **`<Component>Constructors` Type**: Declared and exported directly in `[Component].ts` (not in `basicTypes.ts`, to prevent circular dependencies and type pollution).
3. **Orchestrator Class**: Extends `DesignLogicAbstract<Element, Components, Emits, Slots, Props, Constructors>`.
4. **`constructorItems`**: Alphabetically sorted map defining constructors, factories (`parameters`), and reactive guards (`conditions`).
5. **Public API (Getters & Methods)**: Aggregated getters (`classes`, `binds`, `aria`, `tag`, `styles`) accessing dependencies via `this.i(name)`. For internal properties and element bindings that do not leave the component boundary, reuse general ecosystem types (`ConstrBind`, `ConstrClassObject`, `ConstrStyles`) instead of creating redundant strict types. **Strict Prohibition of Subordinate Getter Proxies**: Do NOT declare redundant public getters that merely proxy access to subordinate helper instances (e.g. no `get event() { return this.i('event') }`, no `get elementTarget() { return this.i('elementTarget') }`). Subordinates are internal mechanics accessed via `this.i(...)`.

### Orchestrator Template:

```typescript
import {
  type ConstrBind,
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
  /** First helper constructor / Первый вспомогательный конструктор */
  a: typeof MyComponentA
  /** Second helper constructor / Второй вспомогательный конструктор */
  b: typeof MyComponentB
  /** Third helper constructor / Третий вспомогательный конструктор */
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
   * Computed bindings for the element.
   *
   * Вычисляемые привязки для элемента.
   * @returns element bindings / привязки элемента
   */
  get binds(): ConstrBind {
    return {
      key: 'myComponent',
      ...this.i('a').binds
    }
  }

  /**
   * Values for the class.
   *
   * Значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    const isA = this.i('a').isActive()
    const classes: ConstrClassObject = {
      [this.naming.getStatusClass('disabled')]: Boolean(this.props.disabled),
      [this.naming.getStatusClass('active')]: isA
    }

    if (MyComponentB.is(this.props)) {
      Object.assign(classes, this.i('b').classes)
    }

    return classes
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
If a sub-class binds global DOM event listeners, creates `IntersectionObserver` / `ResizeObserver`, registers reactive `watch(...)` watchers, or uses intervals/timers:
1. Extend `DesignLifecycleAbstract`:
   ```typescript
   import { watch } from 'vue'
   import { DesignLifecycleAbstract } from '@dxtmisha/functional'

   /**
    * Class for managing component event listeners and lifecycle watchers.
    *
    * Класс для управления слушателями событий компонента и наблюдателями жизненного цикла.
    */
   export class MyComponentEvents extends DesignLifecycleAbstract {
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
2. **STRICT BAN on Direct Vue Lifecycle**: Never call Vue's global `onMounted(...)` or `onUnmounted(...)` inside sub-class constructors. Always inherit from `DesignLifecycleAbstract`.
3. **STRICT MANDATE on Watcher Placement (`watch(...)` inside `onMounted`)**:
   - If a class extends `DesignLifecycleAbstract`, **all `watch(...)` calls MUST be placed strictly inside `onMounted`**, NEVER in the class `constructor`!
   - Placing `watch(...)` in the constructor runs watchers prematurely before the component is mounted, triggers side effects during SSR or before DOM refs exist, and causes memory leaks.
   - The constructor of classes extending `DesignLifecycleAbstract` must remain clean and side-effect-free, strictly executing `super()` and property assignments.

### Step 3: Lazy Coupling Between Sub-Classes (Lazy Getters)
When helper class `B` depends on helper class `A`:
1. In `constructorItems`, pass a factory function: `() => this.i('a')`.
2. In class `B`'s constructor, type the parameter strictly as a function:
   ```typescript
   /**
    * Helper class B demonstrating lazy dependency injection.
    *
    * Вспомогательный класс B, демонстрирующий ленивое внедрение зависимостей.
    */
   export class MyComponentB {
     /**
      * Constructor.
      *
      * Конструктор.
      * @param props component properties / свойства компонента
      * @param a helper class A getter / геттер вспомогательного класса A
      */
     constructor(
       protected readonly props: MyComponentProps,
       protected readonly a: () => MyComponentA
     ) {}

     /**
      * Executes action requiring helper A.
      *
      * Выполняет действие, требующее помощника A.
      */
     someAction(): void {
       // Call the getter on demand, only when needed!
       const aInstance = this.a()
       aInstance.doSomething()
     }
   }
   ```
3. **STRICT BAN on Dual Variants / Union Types (`Type | (() => Type)`)**: Subordinate helper classes must strictly receive and type dependencies as pure functions `() => SubClass` (e.g. `protected readonly elementItem: () => ArrowElement`). Using union types such as `SubClass | (() => SubClass)` or accepting raw instances is **STRICTLY FORBIDDEN**. Always require a pure getter function `() => SubClass` and invoke it on demand as `this.elementItem()`.
4. **CRITICAL RULE**: Sub-class constructors must **never** call `this.a()` eagerly in their constructor body. Call `this.a()` strictly inside methods or computed properties.

### Step 4: Conditional Instantiation (`conditions`) & Lazy Loading Guard
To ensure optional features and subordinate inclusion classes are not prematurely or needlessly instantiated, declare `conditions` in `constructorItems`:
1. **Encapsulate Condition Logic in `static is`**:
   - Every subordinate or inclusion helper managing an optional feature must declare a static guard method:
     ```typescript
     /**
      * Helper class managing component border and divider styles.
      *
      * Вспомогательный класс для управления стилями границы и разделителя компонента.
      */
     export class MyComponentBorder extends DesignLifecycleAbstract {
       /**
        * Checks if border functionality is enabled.
        *
        * Проверяет, включена ли функциональность границы.
        * @param props component properties / свойства компонента
        * @returns true if border or divider is active / true, если граница или разделитель активны
        */
       static is(props?: MyComponentProps): boolean {
         return Boolean(props?.divider || props?.border)
       }
     }
     ```
2. **Attach `conditions` in `constructorItems`**:
   - In `constructorItems`, specify `conditions: () => SubClass.is(...)`:
     ```typescript
     border: {
       item: MyComponentBorder,
       conditions: () => MyComponentBorder.is(this.props),
       parameters: () => [this.props, this.element]
     }
     ```
   - On component mount, `DesignLogicAbstract.initConditions()` sets up `watch(item.conditions, ...)` to reactively instantiate dependencies as soon as their trigger conditions are met.
3. **Guard Access in Getters via Variables and `if`**:
   - In aggregate getters (`classes`, `aria`, `styles`), avoid inline ternary spreads that allocate redundant empty objects on every evaluation (e.g. avoid `...(cond ? this.i('foo').classes : {})`).
   - Extract conditions to local variables and use explicit `if` blocks with `Object.assign`:
     ```typescript
     get classes(): ConstrClassObject {
       const icon = IconTrailingInclude.is(this.props) && this.i('icon').isIcon()
       const classes: ConstrClassObject = {
         [this.naming.getStatusClass('icon')]: icon,
         [getClassTagAStatic(this.naming.getDesign())]: true
       }

       if (SkeletonInclude.is(this.props)) {
         Object.assign(classes, this.i('skeleton').classes)
       }

       return classes
     }
     ```
4. **Guard Calls in `[Name]Design.tsx` Render Methods**:
   - In companion design classes (`[Name]Design.tsx`), decomposed render methods must check `SubClass.is(this.props)` before calling `this.item.i(name).render()`:
     ```typescript
     readonly renderIcon = (): VNode[] => {
       if (IconTrailingInclude.is(this.props)) {
         return this.item.i('icon').render()
       }
       return []
     }
     ```

### Step 5: Connect to the Design Class (`[Name]Design.tsx`)
In `[Name]Design.tsx`, instantiate the orchestrator supporting dependency injection:
```typescript
/**
 * Design constructor class for MyComponent.
 *
 * Класс конструктора дизайна для MyComponent.
 */
export class MyComponentDesign<...> extends DesignConstructorAbstract<...> {
  /** Logic orchestrator instance / Экземпляр оркестратора логики */
  protected readonly item: MyComponent

  /**
   * Constructor.
   *
   * Конструктор.
   * @param name component name / название компонента
   * @param props component properties / свойства компонента
   * @param options constructor options / параметры конструктора
   * @param ItemConstructor logic constructor class / класс конструктора логики
   */
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

  /**
   * Initializes class names for the component.
   *
   * Инициализирует названия классов для компонента.
   * @returns class object / объект классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...
    } as Partial<CLASSES>
  }

  /**
   * Initializes component render function.
   *
   * Инициализирует функцию рендера компонента.
   * @returns VNode element / VNode элемент
   */
  protected initRender = (): VNode => {
    return h(
      'div',
      {
        ...this.getAttrs(),
        ref: this.element, // Binds root DOM element to this.element and expose().elementHtml
        ...this.item.binds,
        class: this.classes?.value.main,
        style: this.styles?.value
      },
      this.initSlot('default')
    )
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

### Reference 5: Lazy Short-Circuits & Guarded Style Aggregation (`Arrow`)
See [`Arrow.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Arrow/Arrow.ts):
- Subordinate classes declare static predicates: `ArrowPosition.is(props)`, `ArrowPosition.isAuto(props)`, `ArrowElementTarget.is(props)`, and `ArrowEvent.is(props)`.
- `direction` getter uses `ArrowPosition.is(this.props)` and `!ArrowPosition.isAuto(this.props)` to return `this.props.position as ArrowDirection` directly for static positions, avoiding `ArrowPosition` instantiation on class evaluation.
- `styles` getter checks `parent.isBorder()` before querying `position.clipPath.value`, and checks `ArrowElementTarget.is(this.props)` before querying `elementTarget.is()` and `position.shift.value`.
- As a result, static arrows without border or target element consume zero allocations for `ArrowPosition`, `ArrowElementTarget`, and `ArrowEvent`.

### Reference 6: Complete Subordinate Inclusions & Guarded Assembly (`Button`)
See [`Button.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Button/Button.ts) and [`ButtonDesign.tsx`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Button/ButtonDesign.tsx):
- Manages 7 subordinate helpers (`enabled`, `event`, `icon`, `label`, `progress`, `ripple`, `skeleton`).
- All optional inclusions declare `conditions: () => SubClass.is(...)` in `constructorItems`:
  - `icon: { item: IconTrailingInclude, conditions: () => IconTrailingInclude.is(this.props), ... }`
  - `label: { item: LabelInclude, conditions: () => LabelInclude.is(this.props, this.slots), ... }`
  - `progress: { item: ProgressInclude, conditions: () => ProgressInclude.is(this.props), ... }`
  - `ripple: { item: RippleInclude, conditions: () => RippleInclude.is(this.props), ... }`
  - `skeleton: { item: SkeletonInclude, conditions: () => SkeletonInclude.is(this.props), ... }`
- Getters evaluate values via intermediate variables and `if` branches with `Object.assign`:
  - In `aria`: `if (isProgress) { Object.assign(aria, this.i('progress').aria.value) }`
  - In `classes`: `if (SkeletonInclude.is(this.props)) { Object.assign(classes, this.i('skeleton').classes) }`
- `ButtonDesign.tsx` guards each render helper method (`renderProgress`, `renderLabel`, `renderIcon`, `renderRipple`) with `SubClass.is(...)` to ensure zero allocations when optional features are omitted.

---

## 5. Mandatory Coding Rules & Checklists

1. **Alphabetical Sorting (Mandatory)**:
   - Imports of sub-constructors must be sorted alphabetically.
   - Keys in `<Name>Constructors` must be sorted alphabetically.
   - Entries in `constructorItems` must be sorted alphabetically.
2. **Strict Lazy Parameters & Pure Function Typing**:
   - ALWAYS pass dependent sub-classes as getter functions: `() => this.i('subClass')`.
   - NEVER call `this.i(...)` directly inside `parameters: () => [ ... ]` when passing another sub-class.
   - Subordinate helper classes must strictly type and receive dependencies as functions `() => SubClass`. It is strictly forbidden to use union types like `SubClass | (() => SubClass)` (no dual variants) or raw instances. Invoke dependencies strictly on demand as `this.subClass()`.
3. **No Direct Vue Lifecycle in Helpers & Watcher Placement**:
   - Subordinate classes must NOT import or call `onMounted` or `onUnmounted` from `vue`.
   - Subordinate classes requiring lifecycle hooks must inherit `DesignLifecycleAbstract` and override `readonly onMounted` / `readonly onUnmounted`.
   - **Watcher Placement in `onMounted` (Mandatory)**: If a class extends `DesignLifecycleAbstract`, ALL reactive watchers (`watch(...)`) MUST be placed strictly inside `onMounted`, NEVER in the `constructor`. Placing `watch(...)` inside the constructor causes premature execution, side effects during SSR or before DOM elements are attached, and memory leaks.
4. **No Abbreviations**:
   - Strictly prohibit `el`, `val`, `temp`, `dx`, `idx`, etc. Use full descriptive identifiers (`element`, `value`, `deltaX`, `index`).
5. **Bilingual JSDoc Documentation**:
   - All classes, methods, constructors, and types must include complete bilingual JSDoc comments (`English / Russian`) matching [`jdoc.md`](./jdoc.md).
6. **Strict Types & Zero `any`**:
   - Use generics and exact interfaces. Avoid `any`.
   - When writing unit tests with `reactive<PropsInclude>`, avoid passing reactive objects with recursive constructor types into test constructors to prevent `TS2589` infinite type instantiation.
7. **Declarative `conditions` and Static Guards for Inclusions (Mandatory `static is`)**:
   - All optional subordinate classes and inclusion helpers (such as `*Include`, `lazy`, `adaptive`, etc.) must declare `conditions: () => SubClass.is(...)` in `constructorItems`.
   - Never define ad-hoc instance helper methods on the orchestrator class (such as `this.isIcon()` or `this.isLabel()`). Encapsulate all feature predicate logic inside static `static is(...)` methods on the subordinate classes.
   - For classes inheriting from base includes (e.g., `IconTrailingInclude` extending `IconInclude`), only override `static is` when extending the property conditions (e.g. adding `iconTrailing`), otherwise inherit the static method directly.
8. **No Overly Strict Types for Internal Elements (Component Boundary Rule)**:
   - For properties, element bindings, and helpers that do **not** escape beyond the component boundary (e.g., `get binds(): ConstrBind`, internal helper objects, DOM event properties), do **NOT** declare redundant, over-specialized strict types (such as custom `[Name]Binds` in `basicTypes.ts`).
   - Use standard general ecosystem types from `@dxtmisha/functional` (`ConstrBind` for element binds, `ConstrClassObject` for classes, `ConstrStyles` for styles, `ConstrItem` for generic items).
   - Strict specialized interfaces are strictly for external/public component boundaries: `Props`, `Emits`, `Expose`, `Slots`, `Components`, and inclusion interfaces (`*PropsInclude`).
9. **Root Element DOM Ref Binding (`ref: this.element` & `elementHtml`)**:
   - In `[Name]Design.tsx`, `this.element` is automatically initialized by `DesignConstructorAbstract` and exposed via `expose().elementHtml`.
   - **Mandatory Binding**: In `initRender()`, always bind `ref: this.element` to the root element (`h('div', { ...this.getAttrs(), ref: this.element, ...this.item.binds, ... })`) if:
     1. The logic orchestrator (`DesignLogicAbstract`) or any subordinate helper class (`*Coordinator`, `*Events`, `*Lazy`, `*Client`, `*Scroll`, etc.) accepts `this.element` and accesses it for DOM measurements, event listeners, observers (`ResizeObserver`, `IntersectionObserver`), or coordinate calculations.
     2. External components or include helpers access the root element via `.elementHtml` (e.g., `scroll.elementHtml`, `field.elementHtml`).
   - **Permissible Omission**: For pure leaf visual primitives (such as `Icon`) where neither the internal logic class (`Icon.ts`) nor external consumers/parent components ever query or interact with the DOM element or `elementHtml`, omitting `ref: this.element` does not break runtime behavior and is completely safe.
   - **Code Review Standard**: Do NOT classify missing `ref: this.element` as a critical bug (P0/P1) unless `this.element` is actually required and used by the logic class or by consumers. If `this.element` is unused everywhere, missing `ref: this.element` is benign and has no functional impact.
10. **Lazy Loading Optimization, Variables & Guarding Subordinate Instances (Short-Circuit Guard & `if` Branching)**:
    - **Extracting Prop Checks into Subordinate `static is`**: Never write raw inline prop checks across orchestrators or helpers when checking if a helper's feature is enabled or in which mode it operates. Always encapsulate these checks into static methods on the respective helper class: `static is(props?: Props): boolean`, `static isAuto(props?: Props): boolean`, `static isPicture(props?: Props): boolean` (as demonstrated in `Image`, `Arrow`, and `Button`).
    - **Variables and `if` Branching over Ternary Spreads**: In aggregate getters (`classes`, `aria`, `styles`), avoid inline ternary spreads that allocate redundant empty objects on every evaluation (e.g. avoid `...(cond ? this.i('foo').classes : {})`). Instead:
      1. Extract predicate evaluations and values into local variables: `const isProgress = ProgressInclude.is(this.props)`.
      2. Use clean `if` blocks with `Object.assign`: `if (SkeletonInclude.is(this.props)) { Object.assign(classes, this.i('skeleton').classes) }`.
    - **Direct Prop Resolution in Getters**: If a property or state can be determined directly from `this.props` using static guards (e.g. fixed position `ArrowPosition.is(this.props) && !ArrowPosition.isAuto(this.props)`), return the value immediately without calling `this.i(subClass)`. Do NOT instantiate complex subordinate helper classes just to read back values already present in props.
    - **Conditional Access in Aggregate Getters (`styles`, `classes`, `binds`)**: In aggregate getters (`get styles()`, `get classes()`, `get binds()`), NEVER unconditionally call `this.i(name)` just to check `.is()` or read optional properties (e.g., forbidden: `this.i('elementTarget').is()`). Always guard subordinate class instantiation with static checks or prop conditions (e.g. `SubClass.is(this.props) && this.i('subClass').is()`). If prerequisite props or conditions are absent, the sub-class must remain completely uninstantiated in memory.
11. **Prohibition of Redundant Getter Proxies for Subordinate Classes (`get event()`, `get elementTarget()`)**:
    - **No Subordinate Getter Proxies on Orchestrators**: Orchestrator classes extending `DesignLogicAbstract` must **NEVER** expose public getters that merely proxy access to internal subordinate helper instances (e.g., strictly forbidden: `get event(): ArrowEvent { return this.i('event') }`, `get elementTarget(): ArrowElementTarget { return this.i('elementTarget') }`).
    - **Encapsulation & Architecture Integrity**: Subordinate helper classes are internal implementation details of the logic orchestrator. Exposing them pollutes the public API surface of the component, breaks encapsulation, and leaks internal mechanics into the component layer.
    - **Preserving Lazy Loading**: Exposing getter proxies encourages consumers, child components, or tests to touch subordinate instances directly, prematurely instantiating them and defeating the entire on-demand memory optimization model.
    - **Internal and External Access via `this.i(...)`**: Inside the orchestrator, subordinate instances must be accessed strictly via `this.i('name')`. If external companion classes (such as `[Name]Design.tsx`) or tests genuinely require direct access to a subordinate helper, `DesignLogicAbstract` already provides the public method `.i(name)` (e.g. `this.item.i('type').get()` in `ImageDesign.tsx` or `this.item.i('item').add(...)` in `RippleDesign.tsx`).
    - **Clean Public Surface**: The public interface of the orchestrator must consist strictly of high-level aggregated getters and domain methods (`classes`, `styles`, `binds`, `points`, `update`, `isBorder`).
12. **Native Client-Only & Mount Handling via `DesignLogicAbstract.isMounted` (Deprecation of `ClientOnlyInclude` in `DesignLogicAbstract`)**:
    - **No `ClientOnlyInclude` in `DesignLogicAbstract`**: Do **NOT** use `ClientOnlyInclude` as a subordinate helper or register it in `constructorItems` / `<Component>Constructors` when implementing or refactoring classes extending `DesignLogicAbstract`.
    - **Why `ClientOnlyInclude` is Prohibited in Orchestrators**: `ClientOnlyInclude` is an obsolete helper designed for legacy component constructors. It calls Vue's `onMounted` directly within its constructor. Instantiating it lazily (e.g. inside `isRender()`, getters, or during template execution) attempts to register Vue lifecycle hooks outside `setup()`, triggering runtime warnings (`[Vue warn]: onMounted is called when there is no active component instance...`) and breaking SSR hydration.
    - **Native Lifecycle Integration**: `DesignLogicAbstract` already natively manages the component lifecycle and exposes `readonly isMounted = ref(false)`, which transitions to `true` upon component mount inside the captured setup effect scope.
    - **Direct Client-Only Resolution (`isRender`)**: For components supporting `clientOnly?: boolean` (such as `Progress`), determine render eligibility directly via `!this.props.clientOnly || this.isMounted.value` (or encapsulated within an `isRender()` method: `isRender(): boolean { return this.isValue() || !this.props.clientOnly || this.isMounted.value }`).
