Study the requirements for connecting dependent components and their properties (props) when developing and modifying UI components in `@dxtmisha/d1`.

### 1. Connecting Property Types (props) in `props.ts`
When a component is based on a constructor from `@dxtmisha/constructor` (for example, `Dialog`, `Modal`, `ListMenu`), its base property type `PropsBasic` accepts generic parameters to type child components.

**Rule:**
1. Import property types of dependent components from their respective directories.
2. Pass these types as generic arguments to the base property type (for example, `DialogPropsBasic` or `ModalPropsBasic`).

**Example (`props.ts`):**
```typescript
import { type DialogPropsBasic, defaultsDialog } from '@dxtmisha/constructor/Dialog'
import type { WindowProps } from '../Window'
import type { BarsProps } from '../Bars'
import type { IconProps } from '../Icon'
import type { ImageProps } from '../Image'
import type { ButtonProps } from '../Button'
import type { ActionsProps } from '../Actions'

// ...

export type DialogProps = DialogPropsBasic<
  WindowProps,
  BarsProps,
  IconProps,
  ImageProps,
  ButtonProps,
  ActionsProps
> & PropsToken
```

---

### 2. Connecting Child Components in `D1<Name>.vue`
Design classes of components manage the rendering of child elements and require references to specific D1 component implementations to work.

**Rule:**
1. Import child D1 components.
2. Pass them to the `components` property of the configuration object when initializing the Design class.
3. Ensure unused imports (such as `isFilled` from `@dxtmisha/functional`) are removed to avoid compilation errors (`TS6133`).

**Example (`D1Dialog.vue`):**
```typescript
import { D1Window } from '../Window'
import { D1Bars } from '../Bars'
import { D1Actions } from '../Actions'
import { D1Icon } from '../Icon'

// ...

const design = new DialogDesign(
  'd1.dialog',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      window: D1Window,
      bars: D1Bars,
      actions: D1Actions,
      icon: D1Icon
    }
  }
)
```
