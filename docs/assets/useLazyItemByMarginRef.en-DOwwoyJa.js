import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useLazyItemByMarginRef - Lazy loading by margin`}),`
`,(0,c.jsx)(t.h1,{id:`uselazyitembymarginref`,children:(0,c.jsx)(t.code,{children:`useLazyItemByMarginRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable for tracking the appearance of an element on the screen using `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),`. It is optimized by using a single observer instance for the same `,(0,c.jsx)(t.code,{children:`rootMargin`}),` values.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: RefType<HTMLElement | undefined>`}),` — reactive reference to the tracked HTML element.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`rootMargin: string`}),` — margin for `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),` (e.g., `,(0,c.jsx)(t.code,{children:`'100px 0px'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lazyItemStatus: ShallowRef<boolean>`}),` — element visibility status (whether it intersects the area considering `,(0,c.jsx)(t.code,{children:`rootMargin`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lazyItem: LazyItem | undefined`}),` — (getter) object with detailed tracking information (ratio, entry, etc.).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useLazyItemByMarginRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { lazyItemStatus } = useLazyItemByMarginRef(element, '128px 0px')

// lazyItemStatus.value will become true when the element is within 128px of the viewport
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};