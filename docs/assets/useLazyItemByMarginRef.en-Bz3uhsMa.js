import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Composables/useLazyItemByMarginRef - Lazy loading by margin`}),`
`,(0,c.jsx)(n.h1,{id:`uselazyitembymarginref`,children:(0,c.jsx)(n.code,{children:`useLazyItemByMarginRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Composable for tracking the appearance of an element on the screen using `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),`. It is optimized by using a single observer instance for the same `,(0,c.jsx)(n.code,{children:`rootMargin`}),` values.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: RefType<HTMLElement | undefined>`}),` — reactive reference to the tracked HTML element.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`rootMargin: string`}),` — margin for `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),` (e.g., `,(0,c.jsx)(n.code,{children:`'100px 0px'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lazyItemStatus: ShallowRef<boolean>`}),` — element visibility status (whether it intersects the area considering `,(0,c.jsx)(n.code,{children:`rootMargin`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lazyItem: LazyItem | undefined`}),` — (getter) object with detailed tracking information (ratio, entry, etc.).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useLazyItemByMarginRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { lazyItemStatus } = useLazyItemByMarginRef(element, '128px 0px')

// lazyItemStatus.value will become true when the element is within 128px of the viewport
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};