import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Composables/useLazyRef - Lazy loading"}),`
`,e.jsx(n.h1,{id:"uselazyref",children:e.jsx(n.code,{children:"useLazyRef"})}),`
`,e.jsxs(n.p,{children:["Composable for initializing the tracking of an element's appearance on the screen using ",e.jsx(n.code,{children:"IntersectionObserver"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: IntersectionObserverInit"})," — options for ",e.jsx(n.code,{children:"IntersectionObserver"}),". Default: ",e.jsx(n.code,{children:"{ rootMargin: '128px 0px' }"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"intersectionObserver: IntersectionObserver | undefined"})," — the ",e.jsx(n.code,{children:"IntersectionObserver"})," instance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItem(element: HTMLElement): LazyItem | undefined"})," — returns a tracked element's data."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean>"})," — adds an element for tracking and returns its visibility status ref."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"removeLazyItem(element?: HTMLElement): void"})," — removes an element from tracking."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disconnectLazy(): void"})," — stops all tracking and disconnects the observer."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref, watch } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { addLazyItem } = useLazyRef({ rootMargin: '200px' })

const isVisible = addLazyItem(element)

watch(isVisible, (visible) => {
  if (visible) {
    console.log('Element is now visible!')
  }
})
`})})]})}function h(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{h as default};
