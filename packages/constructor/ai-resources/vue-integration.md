# Connecting Constructors to UI (Vue Components)

When integrating a Constructor into a UI library (e.g., in `packages/d1/src/components/`), the rendering Design class is instantiated directly inside the Vue `<script setup>`.

```vue
import { computed } from 'vue'
import { ActionsDesign, type ActionsSlots } from '@dxtmisha/constructor/Actions'
import { D1Button } from '../Button'

// ... setup props, emits, classesToken, stylesToken ...

const design = new ActionsDesign(
  'd1.actions',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      button: D1Button
    }
  }
)

const render = design.render()
defineSlots<ActionsSlots>()
defineExpose(design.expose())
```

## Initialization Parameters (`DesignConstructorAbstract`)
When creating a `new <Name>Design(...)` instance, the following parameters are passed:

1. **`name: string`** 
   The fully qualified design system component name (e.g., `'d1.actions'`). This string acts as a namespace for generating unique classes and finding related tokens.
2. **`props: Readonly<P>`**
   The reactive Vue `props` object passed down into the constructor.
3. **`options: ConstrOptions`**
   The options payload that binds Vue context into the constructor. It supports the following fields:
   - **`components`**: Dependency Injection for child Vue components. If the constructor requires child components (as defined in its `Components` type), you must provide the concrete UI implementations here (e.g., `button: D1Button`).
   - **`compMod`**: Component modifications/overrides for injected child components. Allows you to forcefully pass specific prop values (statically or reactively) to the child components. For example, `{ cell: computed(() => ({ primary: props.primary })) }` ensures the child `cell` component always receives the `primary` state from the parent.
   - **`emits`**: The `defineEmits` function, allowing the internal logic class to trigger Vue events.
   - **`classes`**: A reactive `computed` property (or `Ref`) returning a `ConstrClasses` object. It maps structural elements and states to actual CSS classes (matching `properties.json`).
   - **`styles`**: A reactive `computed` property (or `Ref`) returning a `ConstrStyles` object. Used to pass dynamic inline styles to the constructor.

## Extracting Vue APIs
After instantiation, the component delegates rendering, slots, and exposed properties to the design object:
- `const render = design.render()`: Extracts the render function (used as `<render/>` in `<template>`).
- `defineExpose(design.expose())`: Exposes public methods and state defined by the constructor.
- `defineSlots<ActionsSlots>()`: Strictly types slots based on the constructor's contract.
