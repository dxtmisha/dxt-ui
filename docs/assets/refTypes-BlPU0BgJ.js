import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-Dqnce8mp.js";import{M as l}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function r(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/functional/ru/Types/refTypes"}),`
`,n.jsx(e.h1,{id:"vue-реактивные-типы-reftypes",children:"Vue реактивные типы (refTypes)"}),`
`,n.jsx(e.p,{children:"Набор специализированных TypeScript типов для работы с Vue реактивными ссылками, слотами и дочерними элементами. Обеспечивает типобезопасность при работе с Vue реактивной системой."}),`
`,n.jsx(e.h2,{id:"vue-реактивные-ссылки",children:"Vue реактивные ссылки"}),`
`,n.jsx(e.h3,{id:"reftypet",children:n.jsx(e.code,{children:"RefType<T>"})}),`
`,n.jsx(e.p,{children:"Объединенный тип для Vue реактивных ссылок (computed или ref)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type RefType<T> = ComputedRef<T> | Ref<T>

// Использование
import { ref, computed } from 'vue'

function useReactiveValue<T>(initialValue: T): RefType<T> {
  return ref(initialValue) // или computed(() => someValue)
}

const count: RefType<number> = ref(0)
const doubleCount: RefType<number> = computed(() => count.value * 2)
`})}),`
`,n.jsx(e.h3,{id:"refundefinedt",children:n.jsx(e.code,{children:"RefUndefined<T>"})}),`
`,n.jsx(e.p,{children:"Объединенный тип для Vue реактивных ссылок, которые могут быть undefined."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type RefUndefined<T> = RefType<T | undefined>

// Использование
function useOptionalValue<T>(value?: T): RefUndefined<T> {
  return ref(value)
}

const optionalUser: RefUndefined<User> = ref(undefined)
const maybeData: RefUndefined<string> = computed(() => {
  return condition ? 'data' : undefined
})
`})}),`
`,n.jsx(e.h3,{id:"refornormalt",children:n.jsx(e.code,{children:"RefOrNormal<T>"})}),`
`,n.jsx(e.p,{children:"Объединенный тип, который может быть либо Vue реактивной ссылкой, либо обычным значением."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type RefOrNormal<T> = RefType<T> | T

// Использование
function processValue<T>(value: RefOrNormal<T>): T {
  return typeof value === 'object' && 'value' in value ? value.value : value
}

// Функция принимает как ref, так и обычные значения
const result1 = processValue(ref('hello'))     // из ref
const result2 = processValue('world')          // обычное значение
const result3 = processValue(computed(() => 42)) // из computed

// В props компонента
interface Props {
  title: RefOrNormal<string>
  count: RefOrNormal<number>
}
`})}),`
`,n.jsx(e.h2,{id:"vue-контент-и-слоты",children:"Vue контент и слоты"}),`
`,n.jsx(e.h3,{id:"rawchildren",children:n.jsx(e.code,{children:"RawChildren"})}),`
`,n.jsx(e.p,{children:"Объединенный тип для Vue сырого содержимого дочерних элементов."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any)

// Использование в render функциях
import { h, VNode } from 'vue'

function createCustomElement(children: RawChildren): VNode {
  return h('div', { class: 'custom-wrapper' }, children)
}

// Различные типы children
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
`,n.jsx(e.h3,{id:"rawslots",children:n.jsx(e.code,{children:"RawSlots"})}),`
`,n.jsx(e.p,{children:"Тип для Vue сырых слотов с опциональным флагом стабильности."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type RawSlots = {
  [name: string]: unknown
  $stable?: boolean
}

// Использование в компонентах
function createComponentWithSlots(slots: RawSlots): VNode {
  return h('div', [
    slots.header?.(),
    h('main', slots.default?.()),
    slots.footer?.()
  ])
}

// Создание слотов
const mySlots: RawSlots = {
  default: () => h('p', 'Default content'),
  header: () => h('h1', 'Header'),
  footer: () => h('footer', 'Footer'),
  $stable: true // Флаг для оптимизации производительности
}

// В JSX/TSX
const jsxSlots: RawSlots = {
  default: () => <p>Default JSX content</p>,
  sidebar: () => <aside>Sidebar content</aside>
}
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"composable-с-реактивными-типами",children:"Composable с реактивными типами"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ref, computed, type Ref } from 'vue'
import type { RefOrNormal, RefType } from '@dxtmisha/functional'

export function useCounter(initialValue: RefOrNormal<number> = 0) {
  // Преобразуем RefOrNormal в ref
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
`,n.jsx(e.h3,{id:"компонет-с-гибкими-props",children:"Компоне��т с гибкими props"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<template>
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

// Резолвим RefOrNormal значения
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
`,n.jsx(e.h3,{id:"render-функция-с-типизированными-children",children:"Render функция с типизированными children"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { h, type VNode } from 'vue'
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

// Использование
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
`,n.jsx(e.h3,{id:"универсальная-функция-для-работы-с-ref-значениями",children:"Универсальная функция для работы с ref значениями"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import type { RefOrNormal, RefType } from '@dxtmisha/functional'

// Утилитарная функция для извлечения значения
function unref<T>(value: RefOrNormal<T>): T {
  return typeof value === 'object' && 'value' in value ? value.value : value
}

// Утилитарная функция для проверки ref
function isRef<T>(value: RefOrNormal<T>): value is RefType<T> {
  return typeof value === 'object' && value !== null && 'value' in value
}

// Использование в различных сценариях
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
`,n.jsx(e.h3,{id:"типизированные-слоты-в-composable",children:"Типизированные слоты в composable"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import type { RawSlots, RawChildren } from '@dxtmisha/functional'

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
`,n.jsx(e.p,{children:"Эти Vue реактивные типы обеспечивают типобезопасность и гибкость при работе с Vue композиционным API, render функциями и реактивной системой."})]})}function p(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{p as default};
