import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DB_maGql.js";import{M as i}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/functional/en/Types/refTypes"}),`
`,e.jsx(n.h1,{id:"vue-reactive-types-reftypes",children:"Vue Reactive Types (refTypes)"}),`
`,e.jsx(n.p,{children:"A set of specialized TypeScript types for working with Vue reactive references, slots, and children elements. Ensures type safety when working with Vue's reactive system."}),`
`,e.jsx(n.h2,{id:"vue-reactive-references",children:"Vue Reactive References"}),`
`,e.jsx(n.h3,{id:"reftypet",children:e.jsx(n.code,{children:"RefType<T>"})}),`
`,e.jsx(n.p,{children:"Union type for Vue reactive references (computed or ref)."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type RefType<T> = ComputedRef<T> | Ref<T>

// Usage
import { ref, computed } from 'vue'

function useReactiveValue<T>(initialValue: T): RefType<T> {
  return ref(initialValue) // or computed(() => someValue)
}

const count: RefType<number> = ref(0)
const doubleCount: RefType<number> = computed(() => count.value * 2)
`})}),`
`,e.jsx(n.h3,{id:"refundefinedt",children:e.jsx(n.code,{children:"RefUndefined<T>"})}),`
`,e.jsx(n.p,{children:"Union type for Vue reactive references that can be undefined."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type RefUndefined<T> = RefType<T | undefined>

// Usage
function useOptionalValue<T>(value?: T): RefUndefined<T> {
  return ref(value)
}

const optionalUser: RefUndefined<User> = ref(undefined)
const maybeData: RefUndefined<string> = computed(() => {
  return condition ? 'data' : undefined
})
`})}),`
`,e.jsx(n.h3,{id:"refornormalt",children:e.jsx(n.code,{children:"RefOrNormal<T>"})}),`
`,e.jsx(n.p,{children:"Union type that can be either a Vue reactive reference or a normal value."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type RefOrNormal<T> = RefType<T> | T

// Usage
function processValue<T>(value: RefOrNormal<T>): T {
  return typeof value === 'object' && 'value' in value ? value.value : value
}

// Function accepts both ref and normal values
const result1 = processValue(ref('hello'))     // from ref
const result2 = processValue('world')          // normal value
const result3 = processValue(computed(() => 42)) // from computed

// In component props
interface Props {
  title: RefOrNormal<string>
  count: RefOrNormal<number>
}
`})}),`
`,e.jsx(n.h2,{id:"vue-content-and-slots",children:"Vue Content and Slots"}),`
`,e.jsx(n.h3,{id:"rawchildren",children:e.jsx(n.code,{children:"RawChildren"})}),`
`,e.jsx(n.p,{children:"Union type for Vue raw children content."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any)

// Usage in render functions
import { h, VNode } from 'vue'

function createCustomElement(children: RawChildren): VNode {
  return h('div', { class: 'custom-wrapper' }, children)
}

// Different types of children
const stringChild: RawChildren = 'Hello World'
const numberChild: RawChildren = 42
const booleanChild: RawChildren = true
const vnodeChild: RawChildren = h('span', 'VNode content')
const arrayChild: RawChildren = [
  'Text',
  h('span', 'VNode'),
  42
]
const functionChild: RawChildren = () => h('div', 'Dynamic content')
`})}),`
`,e.jsx(n.h3,{id:"rawslots",children:e.jsx(n.code,{children:"RawSlots"})}),`
`,e.jsx(n.p,{children:"Type for Vue raw slots with optional stability flag."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type RawSlots = {
  [name: string]: unknown
  $stable?: boolean
}

// Usage in components
function createComponentWithSlots(slots: RawSlots): VNode {
  return h('div', [
    slots.header?.(),
    h('main', slots.default?.()),
    slots.footer?.()
  ])
}

// Creating slots
const mySlots: RawSlots = {
  default: () => h('p', 'Default content'),
  header: () => h('h1', 'Header'),
  footer: () => h('footer', 'Footer'),
  $stable: true // Flag for performance optimization
}

// In JSX/TSX
const jsxSlots: RawSlots = {
  default: () => <p>Default JSX content</p>,
  sidebar: () => <aside>Sidebar content</aside>
}
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"composable-with-reactive-types",children:"Composable with Reactive Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref, computed, type Ref } from 'vue'
import type { RefOrNormal, RefType } from '@dxtmisha/functional'

export function useCounter(initialValue: RefOrNormal<number> = 0) {
  // Convert RefOrNormal to ref
  const count: Ref<number> = ref(
    typeof initialValue === 'object' && 'value' in initialValue
      ? initialValue.value
      : initialValue
  )

  const doubled: RefType<number> = computed(() => count.value * 2)
  const isEven: RefType<boolean> = computed(() => count.value % 2 === 0)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  return {
    count,
    doubled,
    isEven,
    increment,
    decrement
  }
}
`})}),`
`,e.jsx(n.h3,{id:"component-with-flexible-props",children:"Component with Flexible Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <div class="flexible-component">
    <h2>{{ resolvedTitle }}</h2>
    <p>Count: {{ resolvedCount }}</p>
    <slot name="content" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { RefOrNormal } from '@dxtmisha/functional'

interface Props {
  title: RefOrNormal<string>
  count: RefOrNormal<number>
  enabled?: RefOrNormal<boolean>
}

const props = withDefaults(defineProps<Props>(), {
  enabled: true
})

// Resolve RefOrNormal values
const resolvedTitle = computed(() => {
  return typeof props.title === 'object' && 'value' in props.title
    ? props.title.value
    : props.title
})

const resolvedCount = computed(() => {
  return typeof props.count === 'object' && 'value' in props.count
    ? props.count.value
    : props.count
})
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"render-function-with-typed-children",children:"Render Function with Typed Children"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { h, type VNode } from 'vue'
import type { RawChildren, RawSlots } from '@dxtmisha/functional'

interface CardProps {
  title: string
  children?: RawChildren
  slots?: RawSlots
}

function Card(props: CardProps): VNode {
  const { title, children, slots } = props

  return h('div', { class: 'card' }, [
    h('header', { class: 'card-header' }, [
      h('h3', title),
      slots?.actions?.()
    ]),
    h('main', { class: 'card-content' }, [
      children,
      slots?.default?.()
    ]),
    slots?.footer && h('footer', { class: 'card-footer' }, slots.footer())
  ])
}

// Usage
const cardWithChildren = Card({
  title: 'My Card',
  children: [
    'Some text content',
    h('button', 'Click me'),
    42
  ]
})

const cardWithSlots = Card({
  title: 'Card with Slots',
  slots: {
    default: () => h('p', 'Main content'),
    actions: () => h('button', 'Action'),
    footer: () => h('small', 'Footer info'),
    $stable: true
  }
})
`})}),`
`,e.jsx(n.h3,{id:"universal-function-for-working-with-ref-values",children:"Universal Function for Working with Ref Values"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type { RefOrNormal, RefType } from '@dxtmisha/functional'

// Utility function to extract value
function unref<T>(value: RefOrNormal<T>): T {
  return typeof value === 'object' && 'value' in value ? value.value : value
}

// Utility function to check ref
function isRef<T>(value: RefOrNormal<T>): value is RefType<T> {
  return typeof value === 'object' && value !== null && 'value' in value
}

// Usage in various scenarios
function processData<T>(input: RefOrNormal<T[]>): T[] {
  const data = unref(input)
  return data.filter(item => item !== null)
}

function watchValue<T>(value: RefOrNormal<T>, callback: (val: T) => void) {
  if (isRef(value)) {
    watch(value, callback, { immediate: true })
  } else {
    callback(value)
  }
}
`})}),`
`,e.jsx(n.h3,{id:"typed-slots-in-composable",children:"Typed Slots in Composable"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type { RawSlots, RawChildren } from '@dxtmisha/functional'

export function useModal() {
  const isVisible = ref(false)

  function show() {
    isVisible.value = true
  }

  function hide() {
    isVisible.value = false
  }

  function renderModal(slots: RawSlots): VNode | null {
    if (!isVisible.value) return null

    return h('div', { class: 'modal-overlay' }, [
      h('div', { class: 'modal-content' }, [
        slots.header?.(),
        h('div', { class: 'modal-body' }, slots.default?.()),
        slots.footer?.()
      ])
    ])
  }

  return {
    isVisible: readonly(isVisible),
    show,
    hide,
    renderModal
  }
}
`})}),`
`,e.jsx(n.p,{children:"These Vue reactive types ensure type safety and flexibility when working with Vue's Composition API, render functions, and reactive system."})]})}function p(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{p as default};
