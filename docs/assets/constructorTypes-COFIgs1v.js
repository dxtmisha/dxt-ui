import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DB_maGql.js";import{M as r}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/en/Types/constructorTypes"}),`
`,n.jsx(e.h1,{id:"constructor-types-constructortypes",children:"Constructor Types (constructorTypes)"}),`
`,n.jsx(e.p,{children:"A set of specialized TypeScript types for the component constructor system. Provides types for creating, configuring, and managing Vue components with support for reactivity, styling, and events."}),`
`,n.jsx(e.h2,{id:"basic-constructor-types",children:"Basic Constructor Types"}),`
`,n.jsx(e.h3,{id:"constritem",children:n.jsx(e.code,{children:"ConstrItem"})}),`
`,n.jsx(e.p,{children:"Generic record type for constructor items."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrItem = Record<string, any>

// Usage
interface MyComponentData extends ConstrItem {
  title: string
  count: number
  visible: boolean
}

const componentData: ConstrItem = {
  name: 'MyComponent',
  version: '1.0.0',
  config: { theme: 'dark' }
}
`})}),`
`,n.jsx(e.h3,{id:"constrvaluet",children:n.jsx(e.code,{children:"ConstrValue<T>"})}),`
`,n.jsx(e.p,{children:"Constructor value wrapper with optional value property."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrValue<T = any> = {
  value?: T
}

// Usage
const stringValue: ConstrValue<string> = { value: 'Hello' }
const numberValue: ConstrValue<number> = { value: 42 }
const emptyValue: ConstrValue<boolean> = {} // value is optional

function processValue<T>(wrapper: ConstrValue<T>): T | undefined {
  return wrapper.value
}
`})}),`
`,n.jsx(e.h3,{id:"constrcomponent",children:n.jsx(e.code,{children:"ConstrComponent"})}),`
`,n.jsx(e.p,{children:"Generic record type for constructor components."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrComponent = Record<string, any>

// Usage
const components: ConstrComponent = {
  Button: defineComponent({ /* ... */ }),
  Input: defineComponent({ /* ... */ }),
  Modal: defineComponent({ /* ... */ })
}
`})}),`
`,n.jsx(e.h2,{id:"component-modification",children:"Component Modification"}),`
`,n.jsx(e.h3,{id:"constrcomponentmodp",children:n.jsx(e.code,{children:"ConstrComponentMod<P>"})}),`
`,n.jsx(e.p,{children:"Constructor component modification type with reactive or normal values."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
  [K in keyof P]?: RefOrNormal<P[K]>
}

// Usage
interface ButtonProps {
  text: string
  disabled: boolean
  variant: 'primary' | 'secondary'
}

const buttonMod: ConstrComponentMod<ButtonProps> = {
  text: ref('Click me'), // reactive value
  disabled: false,       // normal value
  variant: computed(() => theme.value === 'dark' ? 'primary' : 'secondary')
}
`})}),`
`,n.jsx(e.h2,{id:"event-system",children:"Event System"}),`
`,n.jsx(e.h3,{id:"uniontointersectionu",children:n.jsx(e.code,{children:"UnionToIntersection<U>"})}),`
`,n.jsx(e.p,{children:"Utility type to convert union types to intersection types."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

// Usage
type A = { a: string }
type B = { b: number }
type C = { c: boolean }

type Combined = UnionToIntersection<A | B | C>
// Result: { a: string } & { b: number } & { c: boolean }
`})}),`
`,n.jsx(e.h3,{id:"constremititemt",children:n.jsx(e.code,{children:"ConstrEmitItem<T>"})}),`
`,n.jsx(e.p,{children:"Extract emit item type from constructor item."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrEmitItem<T extends ConstrItem> = T[keyof T]

// Usage
interface MyEmits {
  click: [MouseEvent]
  change: [string, number]
  close: []
}

type EmitItem = ConstrEmitItem<MyEmits>
// Result: [MouseEvent] | [string, number] | []
`})}),`
`,n.jsx(e.h3,{id:"constremitt",children:n.jsx(e.code,{children:"ConstrEmit<T>"})}),`
`,n.jsx(e.p,{children:"Constructor emit type with proper event handler signatures."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
  [K in keyof T]: (evt: K, ...args: T[K]) => void
}>>

// Usage
interface ComponentEmits {
  click: [MouseEvent]
  input: [string]
  change: [string, number]
}

const emitHandlers: ConstrEmit<ComponentEmits> = (evt, ...args) => {
  if (evt === 'click') {
    // args are typed as [MouseEvent]
    console.log('Click at:', args[0].clientX, args[0].clientY)
  } else if (evt === 'input') {
    // args are typed as [string]
    console.log('Input value:', args[0])
  }
}
`})}),`
`,n.jsx(e.h2,{id:"styling-system",children:"Styling System"}),`
`,n.jsx(e.h3,{id:"constrclassobject",children:n.jsx(e.code,{children:"ConstrClassObject"})}),`
`,n.jsx(e.p,{children:"Object type for CSS class names with boolean values."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrClassObject = Record<string, boolean>

// Usage
const classObject: ConstrClassObject = {
  'btn': true,
  'btn-primary': true,
  'btn-disabled': false,
  'btn-large': true
}
`})}),`
`,n.jsx(e.h3,{id:"constrclass",children:n.jsx(e.code,{children:"ConstrClass"})}),`
`,n.jsx(e.p,{children:"Constructor class type supporting strings, arrays, and objects."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject

// Usage
const stringClass: ConstrClass = 'btn btn-primary'

const arrayClass: ConstrClass = [
  'btn',
  'btn-primary',
  condition ? 'btn-large' : null,
  ['nested', 'classes']
]

const objectClass: ConstrClass = {
  'btn': true,
  'btn-primary': isPrimary,
  'btn-disabled': isDisabled
}
`})}),`
`,n.jsx(e.h3,{id:"constrclasslist",children:n.jsx(e.code,{children:"ConstrClassList"})}),`
`,n.jsx(e.p,{children:"Record type for mapping class names to class definitions."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrClassList = Record<string, ConstrClass>

// Usage
const classList: ConstrClassList = {
  button: 'btn btn-primary',
  input: ['form-control', { 'is-invalid': hasError }],
  modal: {
    'modal': true,
    'modal-open': isOpen,
    'modal-large': size === 'large'
  }
}
`})}),`
`,n.jsx(e.h3,{id:"constrclasses",children:n.jsx(e.code,{children:"ConstrClasses"})}),`
`,n.jsx(e.p,{children:"Constructor classes with required main class and additional class list."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrClasses = { main: ConstrClass } & ConstrClassList

// Usage
const componentClasses: ConstrClasses = {
  main: 'component-root',
  header: 'component-header',
  body: ['component-body', { 'is-expanded': isExpanded }],
  footer: {
    'component-footer': true,
    'has-actions': hasActions
  }
}
`})}),`
`,n.jsx(e.h3,{id:"constrstylesitem",children:n.jsx(e.code,{children:"ConstrStylesItem"})}),`
`,n.jsx(e.p,{children:"Constructor style item type for individual style properties."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrStylesItem = string | null

// Usage
const width: ConstrStylesItem = '100px'
const height: ConstrStylesItem = null // not applied
const color: ConstrStylesItem = '#ff0000'
`})}),`
`,n.jsx(e.h3,{id:"constrstyles",children:n.jsx(e.code,{children:"ConstrStyles"})}),`
`,n.jsx(e.p,{children:"Constructor styles type supporting objects and arrays of style definitions."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[]

// Usage as object
const objectStyles: ConstrStyles = {
  width: '100px',
  height: '50px',
  backgroundColor: '#f0f0f0',
  borderRadius: null // not applied
}

// Usage as array
const arrayStyles: ConstrStyles = [
  { width: '100px', height: '50px' },
  { backgroundColor: theme.value === 'dark' ? '#333' : '#fff' },
  conditionalStyles ? { border: '1px solid red' } : {}
]
`})}),`
`,n.jsx(e.h2,{id:"component-configuration",children:"Component Configuration"}),`
`,n.jsx(e.h3,{id:"constroptionscomp-emits-p",children:n.jsx(e.code,{children:"ConstrOptions<COMP, EMITS, P>"})}),`
`,n.jsx(e.p,{children:"Constructor options interface for component configuration."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrOptions<
  COMP extends ConstrComponent,
  EMITS extends ConstrItem,
  P extends ConstrItem
> = {
  components?: COMP
  compMod?: ConstrComponentMod<P>
  emits?: ConstrEmit<EMITS>
  classes?: RefType<ConstrClasses>
  styles?: RefType<ConstrStyles>
}

// Usage
interface MyComponentProps {
  title: string
  count: number
}

interface MyComponentEmits {
  click: [MouseEvent]
  change: [number]
}

const options: ConstrOptions<ConstrComponent, MyComponentEmits, MyComponentProps> = {
  components: {
    Button: ButtonComponent,
    Icon: IconComponent
  },
  compMod: {
    title: ref('Dynamic Title'),
    count: computed(() => store.count)
  },
  emits: (evt, ...args) => {
    console.log('Event:', evt, args)
  },
  classes: computed(() => ({
    main: 'my-component',
    header: 'my-component__header'
  })),
  styles: ref({
    width: '300px',
    height: '200px'
  })
}
`})}),`
`,n.jsx(e.h3,{id:"constrsetupe-classes-setup",children:n.jsx(e.code,{children:"ConstrSetup<E, CLASSES, SETUP>"})}),`
`,n.jsx(e.p,{children:"Constructor setup interface for component initialization."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrSetup<
  E extends Element,
  CLASSES extends ConstrClasses,
  SETUP extends ConstrItem
> = {
  name: string
  element: Ref<E | undefined>
  classes: RefType<CLASSES>
  styles: RefType<ConstrStyles>
} & SETUP

// Usage
interface MySetupData {
  count: Ref<number>
  increment: () => void
}

const setup: ConstrSetup<HTMLDivElement, ConstrClasses, MySetupData> = {
  name: 'MyComponent',
  element: ref<HTMLDivElement>(),
  classes: computed(() => ({
    main: 'my-component',
    button: 'my-component__button'
  })),
  styles: ref({
    padding: '16px',
    backgroundColor: '#f5f5f5'
  }),
  count: ref(0),
  increment: () => setup.count.value++
}
`})}),`
`,n.jsx(e.h2,{id:"registration-and-binding",children:"Registration and Binding"}),`
`,n.jsx(e.h3,{id:"constrregistration",children:n.jsx(e.code,{children:"ConstrRegistration"})}),`
`,n.jsx(e.p,{children:"Constructor registration configuration."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrRegistration = {
  flag?: boolean
  translate?: Record<string, string>
}

// Usage
const registration: ConstrRegistration = {
  flag: true,
  translate: {
    'button.save': 'Save',
    'button.cancel': 'Cancel',
    'message.success': 'Successfully completed'
  }
}
`})}),`
`,n.jsx(e.h3,{id:"constrbindt",children:n.jsx(e.code,{children:"ConstrBind<T>"})}),`
`,n.jsx(e.p,{children:"Constructor bind type for component binding with class and style support."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrBind<T> = T & Record<string, any> & {
  class?: ConstrClass
  style?: ConstrStyles
}

// Usage
interface ButtonProps {
  text: string
  disabled: boolean
}

const boundButton: ConstrBind<ButtonProps> = {
  text: 'Click me',
  disabled: false,
  onClick: () => console.log('Clicked'),
  class: ['btn', 'btn-primary'],
  style: {
    width: '120px',
    height: '40px'
  }
}
`})}),`
`,n.jsx(e.h2,{id:"props-system",children:"Props System"}),`
`,n.jsx(e.h3,{id:"constrpropitemoptionst",children:n.jsx(e.code,{children:"ConstrPropItemOptions<T>"})}),`
`,n.jsx(e.p,{children:"Constructor prop item options for Vue prop definitions."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrPropItemOptions<T = any> = {
  type?: PropType<T>
  required?: boolean
  default?: any
  validator?(value: any, props: any): boolean
}

// Usage
const titleProp: ConstrPropItemOptions<string> = {
  type: String,
  required: true,
  validator: (value) => value.length > 0
}

const countProp: ConstrPropItemOptions<number> = {
  type: Number,
  default: 0,
  validator: (value) => value >= 0
}
`})}),`
`,n.jsx(e.h3,{id:"constrpropitemt",children:n.jsx(e.code,{children:"ConstrPropItem<T>"})}),`
`,n.jsx(e.p,{children:"Constructor prop item type with options or direct PropType."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>

// Usage with simple PropType
const simpleProp: ConstrPropItem<string> = String

// Usage with options
const complexProp: ConstrPropItem<number> = {
  type: Number,
  required: true,
  default: 42,
  validator: (value) => value > 0
}
`})}),`
`,n.jsx(e.h3,{id:"constrpropsp",children:n.jsx(e.code,{children:"ConstrProps<P>"})}),`
`,n.jsx(e.p,{children:"Constructor props type for component prop definitions."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrProps<P = Record<string, any>> = {
  [K in keyof P]: ConstrPropItem<P[K]>
}

// Usage
interface ComponentProps {
  title: string
  count: number
  enabled: boolean
  items: string[]
}

const props: ConstrProps<ComponentProps> = {
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0
  },
  enabled: Boolean,
  items: {
    type: Array as PropType<string[]>,
    default: () => []
  }
}
`})}),`
`,n.jsx(e.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,n.jsx(e.h3,{id:"creating-a-fully-typed-component",children:"Creating a Fully Typed Component"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { defineComponent } from 'vue'
import type {
  ConstrSetup,
  ConstrOptions,
  ConstrProps,
  ConstrClasses
} from '@dxtmisha/functional'

interface ButtonProps {
  text: string
  variant: 'primary' | 'secondary'
  disabled: boolean
}

interface ButtonEmits {
  click: [MouseEvent]
}

interface ButtonSetup {
  handleClick: (event: MouseEvent) => void
}

const buttonProps: ConstrProps<ButtonProps> = {
  text: { type: String, required: true },
  variant: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary'
  },
  disabled: { type: Boolean, default: false }
}

export default defineComponent({
  name: 'ConstructorButton',
  props: buttonProps,
  emits: ['click'],
  setup(props, { emit }) {
    const setup: ConstrSetup<HTMLButtonElement, ConstrClasses, ButtonSetup> = {
      name: 'ConstructorButton',
      element: ref<HTMLButtonElement>(),
      classes: computed(() => ({
        main: 'btn',
        variant: \`btn-\${props.variant}\`,
        disabled: props.disabled ? 'btn-disabled' : ''
      })),
      styles: computed(() => ({
        opacity: props.disabled ? '0.6' : '1',
        cursor: props.disabled ? 'not-allowed' : 'pointer'
      })),
      handleClick: (event: MouseEvent) => {
        if (!props.disabled) {
          emit('click', event)
        }
      }
    }

    return setup
  }
})
`})}),`
`,n.jsx(e.p,{children:"These constructor types provide complete type safety and a structured approach to creating Vue components with support for reactivity, styling, and events."})]})}function m(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{m as default};
