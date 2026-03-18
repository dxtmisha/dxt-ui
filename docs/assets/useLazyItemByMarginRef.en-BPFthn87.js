import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional/Composables/useLazyItemByMarginRef - Lazy loading by margin"}),`
`,e.jsx(n.h1,{id:"uselazyitembymarginref",children:e.jsx(n.code,{children:"useLazyItemByMarginRef"})}),`
`,e.jsxs(n.p,{children:["Composable for tracking the appearance of an element on the screen using ",e.jsx(n.code,{children:"IntersectionObserver"}),". It is optimized by using a single observer instance for the same ",e.jsx(n.code,{children:"rootMargin"})," values."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: RefType<HTMLElement | undefined>"})," — reactive reference to the tracked HTML element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rootMargin: string"})," — margin for ",e.jsx(n.code,{children:"IntersectionObserver"})," (e.g., ",e.jsx(n.code,{children:"'100px 0px'"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lazyItemStatus: ShallowRef<boolean>"})," — element visibility status (whether it intersects the area considering ",e.jsx(n.code,{children:"rootMargin"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lazyItem: LazyItem | undefined"})," — (getter) object with detailed tracking information (ratio, entry, etc.)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { useLazyItemByMarginRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { lazyItemStatus } = useLazyItemByMarginRef(element, '128px 0px')

// lazyItemStatus.value will become true when the element is within 128px of the viewport
`})})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default};
