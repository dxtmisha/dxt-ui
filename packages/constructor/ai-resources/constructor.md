# Constructor Architecture & Development Guide (`dxt-ui`)

Comprehensive architectural standard and implementation guide for building, extending, and maintaining constructors in `@dxtmisha/constructor`.

---

## 1. Architecture Overview

A constructor is a self-contained, framework-agnostic UI component module located in:
`packages/constructor/src/constructors/<ComponentName>/`

Each constructor follows a strict, standardized file structure:

| File | Purpose |
|---|---|
| `index.ts` | Public re-export of all constructor entities |
| `props.ts` | Property types (`PropsToken`, `PropsBasic`, `Props`, `defaults`) |
| `types.ts` | External contract (`Components`, `Emits`, `Expose`, `Slots`, `Classes`) |
| `basicTypes.ts` | Embedding types (`ComponentInclude`, `PropsInclude`) |
| `properties.json` | Design tokens, states, sub-elements, and modifiers |
| `style.scss` | Component SCSS entry point (`mixin<Name>`) |
| `<Name>.ts` | Main business logic class (pure state & helpers, no rendering) |
| `<Name>Design.tsx` | Rendering class (extends `DesignConstructorAbstract`) |
| `<Name>Include.ts` | *(Optional)* Include class for embedding into other components |
| `<Name>Abstract.ts` | *(Optional)* Abstract logic class for multi-variant components |
| `<Name>DesignAbstract.tsx` | *(Optional)* Abstract design class for multi-variant components |

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
- `PropsToken` contains **only** properties matching keys in `properties.json`. Never manually edit between `// :type [!]` markers.
- `PropsBasic` is generic when child components need customization.
- All comments must be single-line bilingual: `/** EN / RU */`.

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

/** Required child component dependencies */
export type ButtonComponents
  = IconComponentInclude
    & ProgressComponentInclude
    & RippleComponentInclude

/** Available component events */
export type ButtonEmits = EventClickEmits

/** Properties exposed via defineExpose */
export interface ButtonExpose extends EventClickExpose {}

/** Available component slots */
export interface ButtonSlots extends LabelSlots {}

/** Component CSS subclasses */
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

Defines types for embedding this component into **other** constructors.

```ts
import type { ConstrBind } from '@dxtmisha/functional'
import type { ButtonPropsBasic } from './props'

/** Dependency registration type for parent components */
export type ButtonComponentInclude = {
  /** Button component configuration / Конфигурация компонента кнопки */
  button?: object
}

/** Props for embedding button attributes inside another component */
export type ButtonPropsInclude<
  Button extends ButtonPropsBasic = ButtonPropsBasic
> = {
  /** Bound attributes passed directly to the button component / Атрибуты, передаваемые напрямую в компонент кнопки */
  buttonAttrs?: ConstrBind<Button>
}
```

#### Rules
- `ComponentInclude` key must be lowercase matching the component identifier.
- `PropsInclude` provides `<name>Attrs?: ConstrBind<Props>` for attribute binding.

---

### 2.4 `<Name>.ts` — Logic Class

Encapsulates all state, reactivity, and business logic. **Must contain zero rendering code.**

```ts
import { type Ref, type ToRefs } from 'vue'
import { type ConstrClass, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { LabelInclude } from '../../classes/LabelInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import type { AriaList } from '../../types/ariaTypes'
import type { ButtonComponents, ButtonEmits, ButtonSlots } from './types'
import type { ButtonPropsBasic } from './props'

export class Button {
  // Public readonly Include instances
  readonly label: LabelInclude
  readonly enabled: EnabledInclude
  readonly icon: IconTrailingInclude
  readonly progress: ProgressInclude
  readonly ripple: RippleInclude
  readonly skeleton: SkeletonInclude
  readonly event: EventClickInclude

  constructor(
    protected readonly props: ButtonPropsBasic,
    protected readonly refs: ToRefs<ButtonPropsBasic>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ButtonComponents, ButtonPropsBasic>,
    protected readonly slots?: ButtonSlots,
    protected readonly emits?: ConstrEmit<ButtonEmits>,
    constructors: {
      EnabledConstructor?: typeof EnabledInclude
      EventConstructor?: typeof EventClickInclude
      IconConstructor?: typeof IconTrailingInclude
      LabelConstructor?: typeof LabelInclude
      ProgressConstructor?: typeof ProgressInclude
      RippleConstructor?: typeof RippleInclude
      SkeletonConstructor?: typeof SkeletonInclude
    } = {}
  ) {
    // 1. Destructure overridable constructors for Dependency Injection
    const {
      EnabledConstructor = EnabledInclude,
      EventConstructor = EventClickInclude,
      IconConstructor = IconTrailingInclude,
      LabelConstructor = LabelInclude,
      ProgressConstructor = ProgressInclude,
      RippleConstructor = RippleInclude,
      SkeletonConstructor = SkeletonInclude
    } = constructors

    // 2. Initialize in strict dependency order
    this.progress = new ProgressConstructor(className, props, components, { circular: true })
    this.label = new LabelConstructor(props, className, undefined, slots)
    this.enabled = new EnabledConstructor(props, this.progress)
    this.icon = new IconConstructor(props, className, components)
    this.ripple = new RippleConstructor(className, components, this.enabled)
    this.skeleton = new SkeletonConstructor(props, classDesign, ['classBackground'])
    this.event = new EventConstructor(props, this.enabled, emits)
  }

  // Getters for Design class consumption
  get tag(): string {
    if (this.props.tag) return this.props.tag
    if (this.props.href) return 'a'
    return 'button'
  }

  get aria(): AriaList { /* ... */ }
  get eventList(): Record<string, any> { /* ... */ }
  get classes(): ConstrClass { /* ... */ }
  get binds() { /* ... */ }

  protected isTagNotButton(): boolean { /* ... */ }
}
```

#### Rules
- **Zero JSX/VNode/`h()`** allowed in logic classes.
- Constructor parameter `constructors = {}` is **mandatory** for DI / extensibility.
- Initialize Include instances in order of dependencies (e.g. `progress` before `enabled`).
- All instance properties must be `readonly`.

---

### 2.5 `<Name>Design.tsx` — Rendering Class

Responsible for VNode tree construction. Extends `DesignConstructorAbstract`.

```tsx
import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Button } from './Button'
import type { ButtonPropsBasic } from './props'
import type {
  ButtonClasses, ButtonComponents,
  ButtonEmits, ButtonExpose, ButtonSlots
} from './types'

export class ButtonDesign<
  COMP extends ButtonComponents,
  EXPOSE extends ButtonExpose,
  CLASSES extends ButtonClasses,
  P extends ButtonPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  ButtonEmits,
  EXPOSE,
  ButtonSlots,
  CLASSES,
  P
> {
  protected readonly item: Button

  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ButtonEmits, P>,
    ItemConstructor: typeof Button = Button
  ) {
    super(name, props, options)

    this.item = new ItemConstructor(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    )

    // MUST call this.init() as the last statement
    this.init()
  }

  protected initExpose(): EXPOSE {
    return {
      ...this.item.event.expose
    } as EXPOSE
  }

  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        label: this.getSubClass('label'),
        icon: this.getSubClass('icon'),
        trailing: this.getSubClass('trailing'),
        loading: this.getSubClass('loading')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  protected initStyles(): ConstrStyles {
    return {}
  }

  protected initRender(): VNode {
    return h(
      this.item.tag,
      {
        ...this.item.binds,
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value
      },
      [
        ...this.item.progress.render(),
        ...this.item.label.render(),
        ...this.item.icon.render(),
        ...this.item.ripple.render()
      ]
    )
  }
}
```

#### Rules
- Always call `this.init()` at the very end of the constructor.
- `initRender()` returns `VNode` or `VNode[]`.
- Use `this.initSlot('slotName', undefined, props)` to render slots.
- For complex views, extract sub-renderers into `readonly renderPart = (): VNode[] => {}`.

---

### 2.6 `<Name>Include.ts` — Embedding Helper

Extends `ComponentIncludeAbstract` to enable conditional rendering within parent components.

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

### 2.7 `index.ts`

Uniform public export barrel:

```ts
export * from './Button'
export * from './ButtonDesign'
export * from './ButtonInclude'
export * from './props'
export * from './types'
export * from './basicTypes'
```

---

### 2.8 `properties.json`

Single source of truth for component tokens, states, sub-elements, and modifiers.

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
- `#name` — Sub-element: generates `ComponentName__name`.
- `~name` — Variant/modifier matching a boolean/enum prop.
- Plain keys (`focus`, `hover`, `active`, `disabled`, `selected`, `readonly`) — State definitions.
- `_type: "var"` — CSS variable configured by the design system.
- `_type: "state"` — State class managed via CSS.
- `{d.sys.*}` — Token reference to design system globals.

---

### 2.9 `style.scss`

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
- **Forbidden:** Hardcoded colors (HEX, RGB) — use CSS variables exclusively.
- Class and modifier names must strictly mirror `properties.json`.

---

## 3. Core Architectural Patterns

### 3.1 Constructor Inheritance (Base & Extended Components)

When creating variants (e.g. `Select` extending `Input`, or `Modal` extending `Window`):

```
SelectAbstract.ts (Base logic)   ──> Select.ts (Concrete logic)
ModalDesignAbstract.tsx (Base)    ──> ModalDesign.tsx (Concrete design)
```

```ts
// 1. Abstract Logic Class
export abstract class SelectAbstract {
  readonly menu: MenuInclude
  readonly value: FieldValueInclude

  protected constructor(/* standard constructor parameters */) {
    // Shared Include instantiations
  }
}

// 2. Concrete Logic Class
export class Select extends SelectAbstract {
  readonly field: FieldInclude

  constructor(/* ..., constructors = {} */) {
    super(/* forward shared params */)
    this.field = new FieldInclude(...)
  }
}

// 3. Abstract Design Class
export abstract class ModalDesignAbstract<
  ITEM extends Window = Window,
  ...
> extends DesignConstructorAbstract<...> {
  protected readonly item: ITEM
  protected abstract initItem(ItemConstructor?: any): ITEM
}

// 4. Concrete Design Class
export class ModalDesign<...> extends ModalDesignAbstract<Modal, ...> {
  protected initItem(Item?: typeof Modal): Modal {
    return new (Item ?? Modal)(
      this.props, this.refs, this.element,
      this.getDesign(), this.getName(),
      this.components, this.slots, this.emits
    )
  }
}
```

---

### 3.2 Include Embedding Pattern

Used when one component conditionally renders another:

```tsx
// 1. In Parent Logic Class
this.button = new ButtonInclude(
  className,
  props,
  components,
  () => ({ label: props.buttonLabel, icon: props.buttonIcon })
)

// 2. In Parent Design Class
protected initRender(): VNode {
  return h('div', { class: this.classes?.value.main }, [
    ...this.item.button.render()
  ])
}

// 3. In Consumer basicTypes.ts
export type MyComponentComponents = ButtonComponentInclude & { /* ... */ }
export type MyComponentPropsInclude = ButtonPropsInclude & { /* ... */ }
```

---

### 3.3 `this.components` (`DesignComp`) API

Methods for dynamically rendering child components inside Design classes:

```tsx
// Render single component (VNode | undefined)
this.components.renderOne('icon', { ...props }, slots)

// Append component into children array
this.components.renderAdd(children, 'icon', { ...props }, slots, 'unique-key')

// Render array of components (VNode[])
this.components.render('icon', { ...props }, slots)
```

---

### 3.4 `ModelInclude` — Reactive `v-model` Synchronization

Standard pattern for synchronizing two-way props with internal state:

```ts
import { onMounted, ref, watch } from 'vue'
import { ModelInclude } from '../../classes/ModelInclude'

export class MyModal {
  readonly open = ref<boolean>(false)
  readonly model: ModelInclude<boolean>

  constructor(props, refs, ..., emits) {
    this.model = new ModelInclude('open', emits, this.open)

    onMounted(() => {
      watch([refs.open], () => {
        this.open.value = Boolean(props.open)
      }, { immediate: true })
    })
  }
}
```

---

## 4. DesignConstructorAbstract Method Reference

| Method / Property | Return Type | Description |
|---|---|---|
| `this.getName()` | `string` | Component name in kebab-case |
| `this.getDesign()` | `string` | Design system prefix (e.g. `d1`) |
| `this.getSubClass('el')` | `string` | Sub-element class name (`ComponentName__el`) |
| `this.getAttrs()` | `Record<string, any>` | External bound attributes |
| `this.initSlot('name', fallback, props)` | `VNode[]` | Render named slot |
| `this.init()` | `void` | Final initialization (must be called last in constructor) |
| `this.classes?.value.main` | `ConstrClass` | Reactive root element class object |
| `this.styles?.value` | `ConstrStyles` | Reactive root element inline styles |
| `this.props` | `Readonly<P>` | Input props proxy |
| `this.refs` | `ToRefs<P>` | Reactive property refs |
| `this.element` | `Ref<HTMLElement>` | Root DOM element reference |
| `this.components` | `DesignComp` | Child component renderer helper |
| `this.slots` | `Slots` | Component slots object |
| `this.emits` | `ConstrEmit` | Emit trigger function |

---

## 5. Include Directory Reference

### Base Includes (`classes/`)
- `LabelInclude` — Text label & slot handling
- `EnabledInclude` — Enabled, disabled, and loading state management
- `EventClickInclude` — Click, keydown, and href event handling
- `ModelInclude<T>` — `v-model` synchronization
- `AriaStaticInclude` — Static ARIA role and attributes
- `TextInclude`, `CaptionInclude`, `PrefixInclude`, `SuffixInclude` — Text formatting & adornments

### Constructor Includes (`constructors/*/`)
- `IconTrailingInclude` (`Icon`) — Leading and trailing icon handling
- `ProgressInclude` (`Progress`) — Loading spinners & bars
- `RippleInclude` (`Ripple`) — Click ripple animations
- `SkeletonInclude` (`Skeleton`) — Skeleton placeholders
- `ButtonInclude`, `FieldInclude`, `MenuInclude`, `WindowInclude`, `BarsInclude`, `ActionsInclude`, `MaskInclude`

### Field Includes (`classes/Field/`)
- `FieldValueInclude`, `FieldEventInclude`, `FieldValidationInclude`, `FieldChangeInclude`
- `FieldTypeInclude`, `FieldPatternInclude`, `FieldAttributesInclude`, `FieldElementInclude`
- `FieldArrowInclude`, `FieldVisibilityInclude`, `FieldInputModeInclude`, `FieldCodeInclude`, `FieldMatchInclude`

---

## 6. Common Pitfalls & Anti-Patterns

### ❌ Omitting `this.init()` in Design Class
```ts
// ❌ WRONG: this.init() omitted
constructor(...) {
  super(name, props, options)
  this.item = new Button(...)
}

// ✅ CORRECT: this.init() called last
constructor(...) {
  super(name, props, options)
  this.item = new Button(...)
  this.init()
}
```

### ❌ Incorrect Include Dependency Order
```ts
// ❌ WRONG: enabled depends on progress, but progress is undefined
this.enabled = new EnabledInclude(props, this.progress)
this.progress = new ProgressInclude(...)

// ✅ CORRECT: initialize prerequisites first
this.progress = new ProgressInclude(...)
this.enabled = new EnabledInclude(props, this.progress)
```

### ❌ Omitting System Labels in `props.ts` / `types.ts`
```ts
// ❌ WRONG: missing system labels breaks automation scripts
export type MyPropsToken = { disabled?: boolean }

// ✅ CORRECT: system labels preserved
export type MyPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  // :type [!] System label / Системная метка
}
```

### ❌ Rendering VNodes Inside Logic Classes
```ts
// ❌ WRONG: logic class must not render
export class Button {
  render() { return h('button', {}) }
}

// ✅ CORRECT: rendering is isolated to Design classes
export class ButtonDesign extends DesignConstructorAbstract {
  protected initRender(): VNode { return h('button', {}) }
}
```

### ❌ Hardcoding Classes Without Dependency Injection
```ts
// ❌ WRONG: child design systems cannot override Include classes
constructor(props, ...) {
  this.enabled = new EnabledInclude(props)
}

// ✅ CORRECT: DI through overridable constructors object
constructor(props, ..., constructors: {
  EnabledConstructor?: typeof EnabledInclude
} = {}) {
  const { EnabledConstructor = EnabledInclude } = constructors
  this.enabled = new EnabledConstructor(props)
}
```

---

## 7. New Constructor Checklist

```markdown
- [ ] Create directory: `packages/constructor/src/constructors/<Name>/`
- [ ] `props.ts`: `PropsToken`, `PropsBasic`, `Props`, and `defaults` with system labels
- [ ] `types.ts`: `Components`, `Emits`, `Expose`, `Slots`, `Classes` with system labels
- [ ] `basicTypes.ts`: `ComponentInclude` and `PropsInclude`
- [ ] `properties.json`: Tokens, states, sub-elements (`#`), modifiers (`~`)
- [ ] `style.scss`: `mixin<Name>` with `@use "@dxtmisha/styles/properties" as ui;`
- [ ] `<Name>.ts`: Logic class with DI `constructors` parameter
- [ ] `<Name>Design.tsx`: Extends `DesignConstructorAbstract`, `this.init()` at constructor end
- [ ] `<Name>Include.ts`: *(Optional)* If embedded into parent components
- [ ] `index.ts`: Re-export all entities
- [ ] Register constructor in package root `index.ts`
```
