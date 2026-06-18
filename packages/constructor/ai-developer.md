# AI Guide: Creating Component Logic Constructors

This is a professional technical guide for AI developers. The document details the process of creating the abstract business logic layer (Constructors) in the dxt-ui project. Forget about final UI components — here we design only the "skeleton", independent of styles and frameworks.

## STEP 0: MANDATORY REQUIREMENT BEFORE STARTING
**CRITICALLY IMPORTANT:** Before starting the implementation of any new constructor, the AI developer must randomly open and analyze **at least 10 existing constructors** (e.g.: Select, Tabs, Scrollbar, Snackbar, Switch, Menu, etc.) and their internal classes in the `src/constructors/` directory. This is necessary to fully understand how the project architecture works in real code. Without this step, starting code generation is prohibited!

## 1. What is the Constructor for?
The Constructor is the pure business logic of a component written in TypeScript. Its goals:
- Isolate the generation of ARIA attributes, event handling, and internal states (focus, opening, validation).
- Divide monolithic code into independent, reusable `Include` entities.
- Ensure maximum flexibility through Dependency Injection.
The Constructor knows nothing about visual styles, colors, sizes, or paddings.

---

## 2. How to properly divide logic into classes
The architecture requires deep decomposition. **Creating monolithic classes is STRICTLY FORBIDDEN.**

### Division Rules (Separation of Concerns):
1. **Atomic features (`Include` classes):** Each isolated mechanic of the component is a separate class.
   - Text handling — `LabelInclude`.
   - Clickability and links — `EventClickInclude`.
   - Opening/closing menus — `MenuInclude`.
   - Interaction with an input field — `FieldInclude` (which internally splits into `FieldValueInclude`, `FieldValidationInclude`, etc.).
2. **VNode Encapsulation:** If a sub-element (label, icon, loader) needs to be rendered in the DOM, it must have its own class with a `render(): VNode[]` method. The class itself calculates its attributes and CSS modifiers.
3. **Local component classes:** If the logic is unique to a specific component (e.g., `TabsNavigation` or `SelectInput`), it is moved to separate classes inside the component's directory (e.g., `src/constructors/Select/SelectInput.ts`), rather than being written in the main `Select.ts` class.

### Properties and Methods Design (computed vs get vs methods):
- **Computed Properties (`computed`):** Use for heavy calculations, list filtering, dynamic object mapping, and other state transformations that depend on reactive values.
  *Example:* `readonly maxPage = computed(() => Math.ceil(this.props.count / this.props.rows))`
- **Simple Getters (`get`):** Use for simple proxy properties, referencing sub-instances, or quick static lookups that do not run expensive logic.
  *Example:* `get cancel() { return this.get('textCancel') }`
- **Standard Methods (`is()`, `has()`, etc.):** Use standard class methods (e.g. `is(): boolean`, `has(): boolean`, or trigger actions like `toggle(): void`) for checking state conditions, executing event checks, or running side-effects, rather than using getters or computed properties.
  *Example:* `is(): boolean { return this.props.counter !== undefined }`

---

## 3. How to correctly create and link classes

Any main component class (e.g., `Select.ts` or `Tabs.ts`) acts only as an **Orchestrator**. It links `Include` classes together.

### A. Dependency Injection
When instantiating the constructor class, ALL nested classes must be passed through the `constructors` parameter. This allows their behavior to be overridden from the outside.
```typescript
constructor(
  protected readonly props: ButtonPropsBasic,
  // ... other parameters
  constructors: {
    LabelConstructor?: typeof LabelInclude;
    EventConstructor?: typeof EventClickInclude;
  } = {}
) {
  // Initialization with default values
  const {
    LabelConstructor = LabelInclude,
    EventConstructor = EventClickInclude
  } = constructors;

  // Instantiation
  this.label = new LabelConstructor(props, ...);
}
```

### B. Reactivity and callbacks between classes
Classes should not be tightly coupled. If one class needs data or methods from another, they are passed via **getter functions (callbacks)**.
For example, in `Select.ts`, passing the menu opening method to the `FieldInclude` class:
```typescript
this.field = new FieldIncludeConstructor(
  // ...
  () => this.menu.getElement()?.toggle() // Pass a function, not a result!
)
```

### C. Building the public API (Orchestrator getters)
The main class (Orchestrator) does not render anything itself. Its task is to aggregate data for the root HTML element:
- `get aria()`: Merges ARIA attributes from all included classes (e.g., `this.progress.aria` + `this.enabled.aria`).
- `get classes()`: Merges state classes (`--disabled`, `--focus`).
- `get binds()`: Collects all HTML attributes and event listeners (e.g., from `EventClickInclude`).

---

## 4. Working with Text and Translations (TextInclude)

The framework uses a unified mechanism for handling component texts and translations via the `TextInclude` class.

### Rules for Text Handling:
1. **No direct translations/useTranslateRef:** It is forbidden to use `useTranslate` or `useTranslateRef` directly in local component classes or design components.
2. **Use TextInclude:** Every component that has configurable labels or texts must utilize the `TextInclude` class.
3. **Registering Text Properties:**
   - Define text properties (e.g. `textFirst?: TextValue`, `textCancel?: TextValue`) in `packages/constructor/src/types/textTypes.ts` using interfaces (e.g. `TextFirstPropsInclude`) and merge them into `TextAllPropsInclude`.
   - Add default translations to the static registry `TextInclude.list` in alphabetical order.
   - Implement getters (e.g. `get first() { return this.get('textFirst') }`) inside the `TextInclude` class in alphabetical order.
4. **Integration in Component:**
   - In `props.ts`, extend the component's basic properties with the respective text interfaces (e.g. `TextFirstPropsInclude`).
   - Instantiate `TextInclude` in the orchestrator constructor (e.g., `this.text = new TextIncludeConstructor(props)`) supporting Dependency Injection.
   - Pass the `TextInclude` instance to logical helper classes for text resolution.

---

## 5. Component Assembly (`[Name]Design.tsx` class)

This is the only class that knows about Vue (`vue.h()`) and is responsible for assembling the final DOM tree of the component. It inherits from `DesignConstructorAbstract`.

- **VNode Assembly:** The `initRender(): VNode` method.
- **CRITICAL RULE:** In `initRender()`, it is forbidden to hardcode internal markup using raw tags or to wrap elements. You must call `.render()` methods from the business logic `Include` classes.
```typescript
protected initRender(): VNode {
  return h(
    this.item.tag,
    {
      ...this.item.binds,
      class: this.classes?.value.main,
    },
    [
      // Strict render calls from logic classes!
      ...this.item.progress.render(),
      ...this.item.label.render(),
      ...this.item.icon.render()
    ]
  )
}
- **Decomposition of Render Elements:** For each logical sub-element or group of elements (e.g., spacers, buttons, menus), you must define a separate read-only rendering helper method using the **arrow function property** syntax (e.g., `readonly renderSpacer = (): VNode => { ... }`) within the design class instead of nesting them inline inside `initRender()`. This guarantees clean structure, readability, and modularity.

---

## 6. Main Checklist for AI
1. **No styles:** Absolute ban on hardcoding colors, paddings, and any UI solutions in the `constructor` package.
2. **Total decomposition:** The main `[Name].ts` class is an orchestrator. All logic must reside in `Include` classes.
3. **Dependency Injection:** All child dependency classes must be passed in the `constructors` argument during initialization.
4. **Functions for reactivity:** Passing states between classes must be done via callback functions `() => value` to avoid losing context and reactivity.
5. **Typing:** `any` is prohibited. Use `readonly`. All props and events must be strictly described in `types.ts` and `props.ts`.
6. **TSDoc:** Documenting classes, methods, `@param`, and `@returns` strictly in two languages separated by ` / ` (English / Russian).
7. **Unified Text Handling:** Component labels and translations must always go through the `TextInclude` system. Do not hardcode translation lists or use `useTranslateRef` in components.
