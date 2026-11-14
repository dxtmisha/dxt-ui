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
   - Subordinate helper classes are **not instantiated eagerly** on component creation unless their mechanics must start immediately during `setup`.
   - By default, dependencies are instantiated on first access via `this.getInstance(name)` (or its shorthand `this.i(name)`). To check whether a dependency has already been created without triggering instantiation, use `this.hasInstance(name)`. If a dependency must start immediately during `setup`, explicitly call `this.i(name)` in the master orchestrator constructor after `super(...)`.
   - For **any** situation where availability must be checked before calling a method or reading a property on a dependency (in getters, orchestrator methods, `parameters`, or design rendering), declare `canCreate?: boolean | (() => boolean)` in `constructorItems` and access the dependency via `this.callInstance(name, callback, defaultValue?)` (or `this.item.callInstance(...)` in `[Name]Design.tsx`). `callInstance` invokes `callback(this.getInstance(name))` only if the instance already exists (`this.hasInstance(name)`), `canCreate` is absent, or `executeFunction(canCreate)` returns truthy; otherwise it skips instantiation and returns `executeFunction(defaultValue)`.
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
   - Declare `conditions: () => SubClass.is(this.props)` **only** when a dependency must automatically start its own mechanics when enabled (for example, lifecycle work in `onMounted`) and no normal execution path already instantiates it at the required time.
   - Being optional, having a `static is` predicate, or depending on a prop is **not** sufficient reason to add `conditions`. Helpers accessed naturally through rendering, getters, or event handlers stay lazy through those existing call sites.
   - When a condition is false, `initConditions()` does not instantiate that dependency. Explicit `this.i(name)` calls can still instantiate it; `conditions` is an activation mechanism, not an access guard.
   - On component mount, `initConditions()` establishes a `watch(item.conditions, (active) => { if (active) this.getInstance(name) }, { immediate: true })`, ensuring that dependencies automatically activate when their trigger conditions become true.
   - If startup is required immediately during `setup`, call `this.i(name)` directly in the master orchestrator constructor after `super(...)`; do not use `conditions` for setup-time startup. DOM work and lifecycle watchers still belong in `onMounted`.
   - **Static Predicate Guards (`SubClass.is(...)`)**: Always encapsulate condition logic into static `is` methods on the respective subordinate classes (e.g. `IconTrailingInclude.is(this.props)`, `ProgressInclude.is(this.props)`, `ImageAdaptiveItem.is(this.props)`). Never invent ad-hoc instance helper methods on the orchestrator class (such as `this.isIcon()` or `this.isProgress()`).
5. **Full Dependency Injection (DI)**:
   - All sub-constructors can be overridden via the `constructors?: Partial<CONSTRUCTORS>` parameter, enabling comprehensive unit testing and subclass extension without mocking modules.

---

## 2. Anatomy of a Component Logic Orchestrator

A standard orchestrator consists of:
1. **Alphabetically sorted sub-constructor imports**.
2. **`<Component>Constructors` Type**: Declared and exported directly in `[Component].ts` (not in `basicTypes.ts`, to prevent circular dependencies and type pollution).
3. **Orchestrator Class**: Extends `DesignLogicAbstract<Element, Components, Emits, Slots, Props, Constructors>`.
4. **`constructorItems`**: Alphabetically sorted map defining constructors, factories (`parameters`), creation guards (`canCreate`), and reactive lifecycle activation guards (`conditions`).
5. **Public API (Getters & Methods)**: Aggregated getters (`classes`, `binds`, `aria`, `tag`, `styles`) accessing dependencies via `this.i(name)` (for direct unconditional calls) or `this.callInstance(name, ...)` (when conditional/lazy `canCreate` gating must be respected). For internal properties and element bindings that do not leave the component boundary, reuse general ecosystem types (`ConstrBind`, `ConstrClassObject`, `ConstrStyles`) instead of creating redundant strict types. **Strict Prohibition of Subordinate Getter Proxies**: Do NOT declare redundant public getters that merely proxy access to subordinate helper instances (e.g. no `get event() { return this.i('event') }`, no `get elementTarget() { return this.i('elementTarget') }`). Subordinates are internal mechanics accessed via `this.i(...)` or `this.callInstance(...)`.

### 2.1 Standard Parameter Ordering in Constructors

All constructors in the logic layer, orchestrators, and subordinate classes must follow a strict, standardized parameter ordering:

1. **Core Context Trio (always first, in this exact sequence if present)**:
   - `props` (component properties)
   - `element` (DOM Element Ref)
   - `naming` (DesignName helper)
2. **Subordinate / Connected Dependency Classes (strictly in alphabetical order)**:
   - Any connected sub-constructors, helper instances, or their getter factories (`() => SubClass`) must follow **strict alphabetical order** by their parameter name:
     - Example: `client`, `coordinates`, `element`, `flash`, `open`, `status`, `tabIndex`, `verification`
3. **Design Infrastructure Parameters (in this exact sequence if present)**:
   - `components` (design sub-components object)
   - `slots` (slots object)
   - `emits` (event emit function)
   - `constructors` (dependency injection overrides object)
4. **Custom Options, Flags & Lifecycles (all remaining parameters)**:
   - Any remaining custom parameters (such as `isMounted: Ref<boolean>`, callbacks, extra configurations, or flags) are placed last.

### 2.2 Legacy Constructor Adapters & Normalizers Ban

Strictly prohibit legacy constructor types (such as `*LegacyConstructors`) and normalizer helpers (such as `normalize*Constructors`):

1. **Unified Modern DI**: Constructor parameters in logic and design layers must accept only `constructors?: Partial<MyComponentConstructors>`, passed directly to `super(..., constructors)` without adapters or mutations:
   ```typescript
   // ❌ Forbidden (legacy interfaces & normalizers):
   export type MyComponentLegacyConstructors = {
     ActionsConstructor?: typeof ActionsInclude
     BarsConstructor?: typeof BarsInclude
   }
   function normalizeConstructors(...) { ... }
   constructor(..., constructors?: Partial<MyComponentConstructors> | MyComponentLegacyConstructors) {
     super(..., normalizeConstructors(constructors))
   }

   // ✅ Required (clean modern standard):
   constructor(..., constructors?: Partial<MyComponentConstructors>) {
     super(..., constructors)
   }
   ```
2. **CamelCase Keys Only**: Keys in `<Component>Constructors` and `constructors?: Partial<...>` must be `camelCase` without the `Constructor` suffix (e.g. `actions`, `bars`, `window`, `model`, `client`, `coordinates`, `element`; never `WindowConstructor` or `BarsConstructor`). Remove any discovered `LegacyConstructors` or `normalize*Constructors` immediately during refactoring.

### 2.3 Orchestrator Template

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

/** MyComponent dependency constructors type */
export type MyComponentConstructors = {
  /** First helper constructor */
  a: typeof MyComponentA
  /** Second helper constructor */
  b: typeof MyComponentB
  /** Third helper constructor */
  c: typeof MyComponentC
}

/**
 * Orchestrator class for MyComponent.
 */
export class MyComponent extends DesignLogicAbstract<
  HTMLElement,
  MyComponentComponents,
  MyComponentEmits,
  MyComponentSlots,
  MyComponentProps,
  MyComponentConstructors
> {
  /** Item configurations and default constructors by constructor name */
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
      canCreate: () => MyComponentB.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('a'), // Lazy getter factory (never pass this.i('a') directly!)
        this.emits
      ]
    },
    c: {
      item: MyComponentC,
      parameters: () => [
        () => this.callInstance('b', item => item) // Guarded lazy getter respecting b's canCreate
      ]
    }
  }

  /**
   * Computed bindings for the element.
   * @returns element bindings
   */
  get binds(): ConstrBind {
    return {
      key: 'myComponent',
      ...this.i('a').binds
    }
  }

  /**
   * Values for the class.
   * @returns classes values
   */
  get classes(): ConstrClassObject {
    const isA = this.i('a').isActive()
    const bClasses = this.callInstance('b', item => item.classes)
    const classes: ConstrClassObject = {
      [this.naming.getStatusClass('disabled')]: Boolean(this.props.disabled),
      [this.naming.getStatusClass('active')]: isA
    }

    if (bClasses) {
      Object.assign(classes, bClasses)
    }

    return classes
  }

  /**
   * Tag name.
   * @returns tag name
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
    */
   export class MyComponentEvents extends DesignLifecycleAbstract {
     /**
      * Constructor.
      * @param props component properties
      * @param elementTarget target element getter
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
      */
     override readonly onMounted = (): void => {
       this.start()

       // MANDATORY: Place all watch(...) watchers inside onMounted!
       watch(() => this.elementTarget().element.value, this.makeEvents)
       watch(() => Object.values(this.props), this.update)
     }

     /**
      * Cleanup lifecycle listeners on unmount.
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
    */
   export class MyComponentB {
     /**
      * Constructor.
      * @param props component properties
      * @param a helper class A getter
      */
     constructor(
       protected readonly props: MyComponentProps,
       protected readonly a: () => MyComponentA
     ) {}

     /**
      * Executes action requiring helper A.
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
5. **Mandatory Refactoring of Concrete Instances**: Always audit existing subordinate classes. If any subordinate class accepts a concrete instance instead of a getter function `() => SubClass`, you **MUST** refactor its constructor signature and implementation to receive `() => SubClass`, and update `constructorItems` (`() => this.i(...)`) and all corresponding unit tests accordingly.

### Step 4: Conditional Startup (`conditions`) & Guarded Access (`canCreate` + `callInstance`)
First identify when the dependency must start and which existing call site instantiates it. Choose the required startup path:

- **Normal on-demand access**: rendering, getters, event handlers, or another existing execution path already instantiate the helper when needed. Keep those call sites and omit `conditions`. Steps 3–4 below handle guarded on-demand access without `conditions`.
- **Automatic lifecycle startup**: the dependency must start its own mechanics when enabled (for example, in `onMounted`), without waiting for normal access. Declare `conditions` using steps 1–2 below.
- **Immediate setup startup**: the dependency must be instantiated during `setup`. Call `this.i('name')` directly in the master orchestrator constructor after `super(...)`; do not replace this with `conditions`. DOM work and lifecycle watchers still belong in `onMounted`.

1. **Encapsulate Condition Logic in `static is`**:
   - A dependency requiring automatic conditional startup must declare a static activation predicate. Optional helpers used only on demand do not need `conditions`, even when they have a static predicate for guarding access:
   - The following border example illustrates predicate and map syntax only. A helper that only computes styles on access must omit `conditions`; use the map entry in step 2 only if that helper also has mechanics requiring automatic startup.
     ```typescript
     /**
      * Helper class managing component border and divider styles.
      */
     export class MyComponentBorder extends DesignLifecycleAbstract {
       /**
        * Checks if border functionality is enabled.
        * @param props component properties
        * @returns true if border or divider is active
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
   - On component mount, `DesignLogicAbstract.initConditions()` sets up `watch(item.conditions, ...)` to reactively instantiate dependencies as soon as their trigger conditions are met. A false condition does not block explicit `this.i(name)` access.
3. **Guard Check-Then-Call Access via `canCreate` + `callInstance` (No Manual `if (SubClass.is(...))` around `this.i(...)`)**:
   - Whenever you need to check if a subordinate dependency is enabled/available before calling its method or reading its property (in aggregate getters `classes`, `aria`, `styles`, inside `parameters`, or in orchestrator methods), declare `canCreate: () => SubClass.is(...)` on that entry in `constructorItems` and access it via `this.callInstance(name, item => ..., defaultValue?)`.
   - Do **NOT** repeat manual `if (SubClass.is(this.props))` / `SubClass.is(this.props) && this.i(...)` guards before `this.i(...)`, and avoid inline ternary spreads that allocate empty objects (e.g. `...(cond ? this.i('foo').classes : {})`).
   - Example in orchestrator getters:
     ```typescript
     get classes(): ConstrClassObject {
       const icon = this.callInstance('icon', item => item.isIcon(), false)
       const skeletonClasses = this.callInstance('skeleton', item => item.classes)
       const classes: ConstrClassObject = {
         [this.naming.getStatusClass('icon')]: icon,
         [getClassTagAStatic(this.naming.getDesign())]: true
       }

       if (skeletonClasses) {
         Object.assign(classes, skeletonClasses)
       }

       return classes
     }
     ```
4. **Direct Inclusion Rendering in `[Name]Design.tsx` via `this.item.callInstance` & `canCreate` (Zero Boilerplate)**:
   - In the orchestrator (`[Name].ts`), declare `canCreate: () => SubClass.is(this.props)` (or a `boolean | (() => boolean)` guard) on optional inclusion entries in `constructorItems`.
   - In companion design classes (`[Name]Design.tsx`), do **NOT** write redundant boilerplate wrapper methods like `renderIcon()`, `renderProgress()`, `renderLabel()`, `renderRipple()`, and do **NOT** introduce or retain static `*Include.renderLazy(...)` helpers.
   - Instead, invoke `this.item.callInstance(name, item => item.render(...), [])` directly in the children array of `initRender()`:
     ```typescript
     protected initRender = (): VNode => {
       return h(
         'div', // or this.item.tag when get tag(): string is dynamic
         mergeProps(
           this.getAttrs(),
           this.item.binds,
           {
             ref: this.element,
             class: this.classes?.value.main,
             style: this.styles?.value
           }
         ),
         [
           ...this.item.callInstance('progress', item => item.render(), []),
           ...this.item.callInstance('label', item => item.render(), []),
           ...this.item.callInstance('icon', item => item.render(), []),
           ...this.item.callInstance('ripple', item => item.render(), [])
         ]
       )
     }
     ```
   - **How `callInstance` Preserves Laziness & Updates**: `callInstance(name, callback, defaultValue)` checks `this.hasInstance(name) || isNull(canCreate) || executeFunction(canCreate)` first. If the feature is disabled and not yet created, `getInstance(name)` is never called and `executeFunction(defaultValue)` (`undefined` if omitted) is returned immediately. Once created, subsequent calls still execute `callback` even if `canCreate()` later flips to `false`, allowing the existing sub-instance to update or hide cleanly.
   - **Migration Checklist (`renderLazy`, `render*()` wrappers, and manual `SubClass.is(...)` guards -> `canCreate` + `callInstance`)**:
     1. Remove `static renderLazy` and `*IncludeItem` (plus unused imports like `VNode`, `ConstrBind`, `executeFunction`) from the `*Include` class (see [`ProgressInclude.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Progress/ProgressInclude.ts)).
     2. Add `canCreate: () => SubClass.is(...)` (or `boolean | (() => boolean)`) in `constructorItems` of every orchestrator (`[Name].ts`) using that dependency (see [`Button.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Button/Button.ts) and [`Cell.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Cell/Cell.ts)).
     3. Replace `*Include.renderLazy(...)` and `render*()` wrappers in `[Name]Design.tsx` with `this.item.callInstance('name', item => item.render(...), [])` inline in `initRender()` and remove unused `*Include` imports (see [`ButtonDesign.tsx`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Button/ButtonDesign.tsx)).
     4. Replace manual guarded `this.i(...)` / `this.item.i(...)` reads, method calls, and `parameters` ternaries (`if (SubClass.is(...)) ... this.i(...)`, `SubClass.is(...) ? this.i(...) : undefined`, `SubClass.is(...) && this.i(...).method()`) with `this.callInstance(...)` / `this.item.callInstance(...)`.
     5. Remove obsolete `renderLazy` / `*IncludeItem` tests from `*Include.test.ts` and verify lazy instantiation behavior.

### Step 5: Connect to the Design Class (`[Name]Design.tsx`)
In `[Name]Design.tsx`, instantiate the orchestrator supporting dependency injection:
```typescript
/**
 * Design constructor class for MyComponent.
 */
export class MyComponentDesign<...> extends DesignConstructorAbstract<...> {
  /** Logic orchestrator instance */
  protected readonly item: MyComponent

  /**
   * Constructor.
   * @param name component name
   * @param props component properties
   * @param options constructor options
   * @param ItemConstructor logic constructor class
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
   * @returns class object
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...
    } as Partial<CLASSES>
  }

  /**
   * Initializes component render function.
   * @returns VNode element
   */
  protected initRender = (): VNode => {
    return h(
      'div',
      mergeProps(
        this.getAttrs(),
        this.item.binds,
        {
          ref: this.element, // Binds root DOM element to this.element and expose().elementHtml
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      this.initSlot('default')
    )
  }
}
```

---

## 4. Reference Implementations

### Reference 1: Multi-Dependency Lazy Coordination (`DraggableWrapper`)
See [`DraggableWrapper.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/DraggableWrapper/DraggableWrapper.ts):
- Manages 13 distinct sub-constructors (`classesData`, `client`, `delay`, `emit`, `events`, `item`, `itemActive`, `itemFocus`, `itemGo`, `itemSelection`, `position`, `selection`, `square`).
- High inter-dependency without circular instantiation bugs because every dependency is wired with lazy getters `() => this.i(...)`.
- `DraggableWrapperEvents` extends `DesignLifecycleAbstract` to automatically deregister pointer/mouse listeners in `onUnmounted`.

### Reference 2: Conditional Lifecycle Dependencies (`Image`)
See [`Image.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Image/Image.ts):
- `adaptiveItem` activates only when `conditions: () => ImageAdaptiveItem.is(this.props)`.
- `event` activates conditionally when `conditions: () => ImageData.isImage(this.i('type').get()) && this.i('data').isImage()`.
- `ImageLazy` extends `DesignLifecycleAbstract`, cleanly handling `IntersectionObserver` setup in `onMounted` and disconnection in `onUnmounted`.

### Reference 3: Reactive Boundary Monitoring (`Scrollbar`)
See [`Scrollbar.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Scrollbar/Scrollbar.ts):
- `border` activates on `conditions: () => ScrollbarBorder.is(this.props)`.
- `width` uses `ScrollbarWidthRef`.
- `classes` checks `this.isMounted.value && Boolean(this.i('width').item.value)`.

### Reference 4: Lightweight Delegation (`Ripple`)
See [`Ripple.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Ripple/Ripple.ts):
- Single dependency `item: RippleItem`.
- Coordinates pointerdown filtering and delegates DOM wave generation to `this.i('item').add(...)`.

### Reference 5: Lazy Short-Circuits & Guarded Style Aggregation (`Arrow`)
See [`Arrow.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Arrow/Arrow.ts):
- Subordinate classes declare static predicates: `ArrowPosition.is(props)`, `ArrowPosition.isAuto(props)`, `ArrowElementTarget.is(props)`, and `ArrowEvent.is(props)`.
- `direction` getter uses `ArrowPosition.is(this.props)` and `!ArrowPosition.isAuto(this.props)` to return `this.props.position as ArrowDirection` directly for static positions, avoiding `ArrowPosition` instantiation on class evaluation.
- `styles` getter checks `parent.isBorder()` before querying `position.clipPath.value`, and checks `ArrowElementTarget.is(this.props)` before querying `elementTarget.is()` and `position.shift.value`.
- As a result, static arrows without border or target element consume zero allocations for `ArrowPosition`, `ArrowElementTarget`, and `ArrowEvent`.

### Reference 6: Complete Subordinate Inclusions & Guarded Assembly (`Button`)
These references illustrate existing implementations, not a requirement to copy every `conditions` entry. For each dependency, apply the startup decision in Step 4; a helper already instantiated by normal rendering or another working call site does not require `conditions`.

See [`Button.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Button/Button.ts) and [`ButtonDesign.tsx`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Button/ButtonDesign.tsx):
- Manages 7 subordinate helpers (`enabled`, `event`, `icon`, `label`, `progress`, `ripple`, `skeleton`).
- Optional rendered inclusions (`icon`, `label`, `progress`, `ripple`) declare `canCreate: () => SubClass.is(...)` directly in `constructorItems`.
- `ButtonDesign.tsx` renders all four optional inclusions directly inside `initRender()` via `...this.item.callInstance('<name>', item => item.render(), [])` without boilerplate wrapper methods or static `*Include.renderLazy(...)`.
- Remaining legacy `SubClass.is(...)` + `this.i(...)` checks inside orchestrator getters/methods across existing components must be migrated to `canCreate` + `this.callInstance(...)` whenever touched or refactored (see Rules 10 and 15).

---

## 5. Mandatory Coding Rules & Checklists

1. **Alphabetical Sorting (Mandatory)**:
   - Imports of sub-constructors must be sorted alphabetically.
   - Keys in `<Name>Constructors` must be sorted alphabetically.
   - Entries in `constructorItems` must be sorted alphabetically.
2. **Strict Lazy Parameters & Pure Function Typing**:
   - ALWAYS pass dependent sub-classes as getter functions: `() => this.i('subClass')` (or `() => this.callInstance('subClass', item => item)` when respecting `canCreate`).
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
   - Declare `conditions: () => SubClass.is(...)` in `constructorItems` only when a dependency needs automatic startup of its own mechanics upon activation, such as lifecycle work in `onMounted`, and normal call sites do not already instantiate it at the required time.
   - Do not add `conditions` solely because a helper is optional or exposes `static is`. If rendering, a getter, an event handler, or another existing execution path creates it when needed, retain on-demand access without `conditions`.
   - For required startup during `setup`, explicitly call `this.i('name')` in the master orchestrator constructor after `super(...)`. Keep DOM work and lifecycle watchers in `onMounted`.
   - Never define ad-hoc instance helper methods on the orchestrator class (such as `this.isIcon()` or `this.isLabel()`). Encapsulate all feature predicate logic inside static `static is(...)` methods on the subordinate classes.
   - For classes inheriting from base includes (e.g., `IconTrailingInclude` extending `IconInclude`), only override `static is` when extending the property conditions (e.g. adding `iconTrailing`), otherwise inherit the static method directly.
8. **No Overly Strict Types for Internal Elements (Component Boundary Rule)**:
   - For properties, element bindings, and helpers that do **not** escape beyond the component boundary (e.g., `get binds(): ConstrBind`, internal helper objects, DOM event properties), do **NOT** declare redundant, over-specialized strict types (such as custom `[Name]Binds` in `basicTypes.ts`).
   - Use standard general ecosystem types from `@dxtmisha/functional` (`ConstrBind` for element binds, `ConstrClassObject` for classes, `ConstrStyles` for styles, `ConstrItem` for generic items).
   - Strict specialized interfaces are strictly for external/public component boundaries: `Props`, `Emits`, `Expose`, `Slots`, `Components`, and inclusion interfaces (`*PropsInclude`).
9. **Root Element DOM Ref Binding (`ref: this.element` & `elementHtml`)**:
   - In `[Name]Design.tsx`, `this.element` is automatically initialized by `DesignConstructorAbstract` and exposed via `expose().elementHtml`.
   - **Mandatory Binding**: In `initRender()`, always bind `ref: this.element` to the root element (`h('div', mergeProps(this.getAttrs(), this.item.binds, { ref: this.element, ... }))`) if:
     1. The logic orchestrator (`DesignLogicAbstract`) or any subordinate helper class (`*Coordinator`, `*Events`, `*Lazy`, `*Client`, `*Scroll`, etc.) accepts `this.element` and accesses it for DOM measurements, event listeners, observers (`ResizeObserver`, `IntersectionObserver`), or coordinate calculations.
     2. External components or include helpers access the root element via `.elementHtml` (e.g., `scroll.elementHtml`, `field.elementHtml`).
   - **Permissible Omission**: For pure leaf visual primitives (such as `Icon`) where neither the internal logic class (`Icon.ts`) nor external consumers/parent components ever query or interact with the DOM element or `elementHtml`, omitting `ref: this.element` does not break runtime behavior and is completely safe.
   - **Code Review Standard**: Do NOT classify missing `ref: this.element` as a critical bug (P0/P1) unless `this.element` is actually required and used by the logic class or by consumers. If `this.element` is unused everywhere, missing `ref: this.element` is benign and has no functional impact.
10. **Guarded Check-Then-Call Access & Direct Prop Short-Circuits**:
    - **Static `is*` Predicates**: Encapsulate prop-based feature and mode checks in static helper methods (`static is`, `static isAuto`, `static isPicture`), never raw inline prop expressions across orchestrators.
    - **`canCreate` + `callInstance` Over Manual Guards**: Whenever availability must be checked before calling a method or reading a property (in `classes`, `aria`, `styles`, `binds`, `parameters`, orchestrator methods, or `[Name]Design.tsx`), declare `canCreate` in `constructorItems` and use `this.callInstance(name, item => ..., defaultValue?)` / `this.item.callInstance(...)` (see Step 4.3). Avoid manual `if (SubClass.is(...))`, `SubClass.is(...) && this.i(...)`, inline ternary object spreads, or unconditional `this.i(name).is()`.
    - **Direct Prop Short-Circuits**: When a state can be resolved purely from `this.props` via static guards without touching any sub-instance method or property (e.g. fixed direction in `Arrow`), return immediately without calling `this.i(...)` or `this.callInstance(...)`.
11. **Encapsulation, Unified Access & Prohibition of Subordinate Getter Proxies**:
    - **No Getter Proxies**: Never expose public getters that proxy internal `constructorItems` instances (e.g. forbidden: `get window()`, `get event()`, `get elementTarget()`, `get bars()`, `get model()`). Subordinate helpers are internal mechanics; getter proxies break encapsulation and defeat lazy instantiation.
    - **Clean Public Surface**: Expose only aggregated getters (`binds`, `classes`, `slotData`, `styles`, `aria`, `tag`) and domain predicate methods (`isMenu()`, `isRender()`). Reference: [`Window.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Window/Window.ts).
    - **Unified Access (`callInstance` vs `i`)**: Respect `canCreate` gating via `this.callInstance('name', ...)` / `this.item.callInstance('name', ...)`. Use direct `this.i('name')` / `this.item.i('name')` only when an unconditional call is required (e.g. `this.item.i('type').get()` in `ImageDesign.tsx` or `this.item.i('item').add(...)` in `RippleDesign.tsx`). Verify instances in unit tests via `instance.i('name')` and `instance.hasInstance('name')`.
12. **Native Client-Only & Mount Handling via `DesignLogicAbstract.isMounted` (Deprecation of `ClientOnlyInclude` in `DesignLogicAbstract`)**:
    - **No `ClientOnlyInclude` in `DesignLogicAbstract`**: Do **NOT** use `ClientOnlyInclude` as a subordinate helper or register it in `constructorItems` / `<Component>Constructors` when implementing or refactoring classes extending `DesignLogicAbstract`.
    - **Why `ClientOnlyInclude` is Prohibited in Orchestrators**: `ClientOnlyInclude` is an obsolete helper designed for legacy component constructors. It calls Vue's `onMounted` directly within its constructor. Instantiating it lazily (e.g. inside `isRender()`, getters, or during template execution) attempts to register Vue lifecycle hooks outside `setup()`, triggering runtime warnings (`[Vue warn]: onMounted is called when there is no active component instance...`) and breaking SSR hydration.
    - **Native Lifecycle Integration**: `DesignLogicAbstract` already natively manages the component lifecycle and exposes `readonly isMounted = ref(false)`, which transitions to `true` upon component mount inside the captured setup effect scope.
    - **Direct Client-Only Resolution (`isRender`)**: For components supporting `clientOnly?: boolean` (such as `Progress`), determine render eligibility directly via `!this.props.clientOnly || this.isMounted.value` (or encapsulated within an `isRender()` method: `isRender(): boolean { return this.isValue() || !this.props.clientOnly || this.isMounted.value }`).
13. **Strict Type Matching in `constructorItems` Parameters (`Readonly<Props>` and Inclusion Generics)**:
    - **`Readonly<Props>` in Subordinate Constructors**:
      In `DesignLogicAbstract`, `this.props` is typed as `protected readonly props: Readonly<P>`. When passing `this.props` in `parameters: () => [this.props, ...]`, the returned tuple element is `Readonly<P>`. All subordinate helper class constructors that receive `props` from `DesignLogicAbstract` MUST type the parameter strictly as `props: Readonly<MyComponentProps>` (e.g. `constructor(protected readonly props: Readonly<MyComponentProps>, ...)`). Omitting `Readonly` causes TypeScript tuple return type incompatibility (`[Readonly<Props>, ...]` is not assignable to `[props: Props, ...]`).
    - **Canonical Typing for Inclusion Dependencies (`TabIndexInclude`, `ModelInclude`)**:
      Inclusion classes declare default generic parameters (e.g. `TabIndexInclude<E extends HTMLElement = HTMLElement>`). In the `<Component>Constructors` map, they are registered using their base constructor type (e.g. `tabIndex: typeof TabIndexInclude`), so `this.i('tabIndex')` returns `TabIndexInclude<HTMLElement>`. Subordinate helper classes that receive such inclusions must type them using the canonical base type (`tabIndex: () => TabIndexInclude`), rather than over-specialized derived element types (such as `tabIndex: () => TabIndexInclude<HTMLDivElement>`). Because derived DOM types (`HTMLDivElement`) declare additional properties (like `align`) absent on `HTMLElement`, over-specializing the parameter type causes TypeScript variance errors: `Type 'TabIndexInclude<HTMLElement>' is not assignable to type 'TabIndexInclude<HTMLDivElement>'. Property 'align' is missing in type 'HTMLElement' but required in type 'HTMLDivElement'`. Always use the canonical base generic in helper constructor parameters: `() => TabIndexInclude`.
14. **Strict Prohibition of Empty / Redundant Stub Getters (No Empty Binds, Classes, Styles, Tag)**:
    - **Declare Only When Meaningful**: Never declare empty or trivial stub getters (`get binds(): ConstrBind { return {} }`, `get classes(): ConstrClassObject { return {} }`, `get styles(): ConstrStyles { return {} }`, `get tag(): string { return 'div' }`) when an orchestrator computes no dynamic values for them. References: [`Ripple.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Ripple/Ripple.ts), [`ComponentOutlet.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/ComponentOutlet/ComponentOutlet.ts), [`Actions.ts`](file:///Users/tung/Documents/GitHub/dxt-ui/packages/constructor/src/constructors/Actions/Actions.ts).
    - **Design Layer Fallbacks**: When omitted from the orchestrator, the design class handles static defaults directly:
      - `binds`: `initRender()` omits `this.item.binds` from `mergeProps(...)`.
      - `classes`: `initClasses()` returns `main: {}`.
      - `styles`: `initStyles()` returns `{}`.
      - `tag`: `initRender()` renders the literal element directly (e.g. `h('div', ...)` or `h('span', ...)`).
15. **Direct Inclusion Rendering & Mandatory Migration (`renderLazy`, `render*()` Wrappers, and Guarded Access -> `canCreate` + `callInstance`)**:
    - **Ban on Render Wrappers & `renderLazy`**: In `[Name]Design.tsx`, never write redundant wrapper methods (`renderProgress()`, `renderLabel()`, `renderIcon()`, `renderRipple()`) or use legacy `*Include.renderLazy(...)`. Render optional inclusions inline inside `initRender()` via `this.item.callInstance('name', item => item.render(...), [])` with `canCreate` configured in `[Name].ts` (see Step 4.4).
    - **Mandatory Migration**: Whenever creating, auditing, or refactoring any component or `*Include` class still using `*Include.renderLazy`, `render*()` wrappers, or manual `SubClass.is(...)` / `components?.is(...)` / `item.i(...).is` guards before `this.i(...)` / `this.item.i(...)`, apply the 5-step migration checklist in Step 4.4.
16. **Component Props Merging Audit (`{ ...a, ...b }`, `toBind` / `toBinds`, and Vue `mergeProps`)**:
    Whenever creating, auditing, or migrating a component (`[Name]Design.tsx`, `[Name].ts`, subordinate classes, or `*Include.ts`), inspect every place where component or element `props`, `attrs`, or `binds` are merged and enforce both checks below:
    - **1. Object Spread Merging (`{ ...a, ...b }`)**:
      - Inspect the exact data sources combined via spread (`{ ...a, ...b }`):
        - **Keep `{ ...a, ...b }` ONLY IF** all merged sources contain strictly internal, predictable data with **no external/outside data** (such as `this.getAttrs()`, user-supplied `props.*Attrs`, external `attrs`/`extra`, dynamic `on*` event listeners, or colliding `class`/`style` properties) AND using spread in that exact place is justified (e.g., spreading static predictable ARIA attributes like `...AriaStaticInclude.hidden()`, as in [`RippleDesign.tsx`](file:///Volumes/T7/development/dxt-ui/packages/constructor/src/constructors/Ripple/RippleDesign.tsx)).
        - **Refactor to Vue's `mergeProps` (`import { mergeProps } from 'vue'`) OTHERWISE**: Whenever external data is present or `class`, `style`, or `on*` event handlers may collide across sources (e.g., `mergeProps(this.getAttrs(), this.item.binds, { ref: this.element, class: this.classes?.value.main, style: this.styles?.value })`), replace `{ ...a, ...b }` with `mergeProps(...)` so `class`, `style`, and event listeners are merged rather than silently overwritten.
    - **2. `toBind` / `toBinds` Audit & Safe Migration to `mergeProps`**:
      - Inspect every usage of `toBind(...)` and `toBinds(...)` (from `@dxtmisha/functional`) in the audited files.
      - Evaluate whether replacing `toBind` / `toBinds` with Vue's `mergeProps(...)` is **safe** by checking:
        1. **Event handler (`on*`) semantics**: `toBind`/`toBinds` overwrites earlier `on*` handlers with later ones, whereas `mergeProps` composes `on*` handlers into arrays so all handlers execute. Verify callers/tests do not intentionally rely on overwrite behavior.
        2. **`class` / `style` shape & normalization**: `toBind` stores `[extra.class, value.class]` / `[extra.style, value.style]`, whereas `mergeProps` normalizes `class` into a string and merges `style`. Verify no consumer, helper, or unit test inspects or depends on raw `toBind` array/object structure.
        3. **Nullish inputs & TypeScript contract**: `toBinds` accepts `null | undefined` entries and returns `ConstrBind<R>`, whereas `mergeProps` expects non-nullish `Record<string, unknown>` objects in TypeScript (e.g., `attrs ?? {}`) and returns `Data`. Verify the return type and callers remain strictly typed without hacks.
      - **If safe**: Automatically refactor `toBind` / `toBinds` to `mergeProps(...)` (passing normalized non-nullish objects where needed and removing unused `toBind` / `toBinds` imports).
      - **If NOT safe (or uncertain / behavioral difference exists)**: **STOP immediately and ask the developer** before replacing `toBind` / `toBinds`, explaining the exact behavioral or typing risk identified.
17. **Use Native `unref` Instead of `getRef`**:
    - Whenever creating, auditing, or refactoring a component, helper, or test, do **NOT** use `getRef(...)` from `@dxtmisha/functional`.
    - Replace all existing `getRef(...)` calls with Vue's native `unref(...)` (`import { unref } from 'vue'`) and remove the unused `getRef` import.
