import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/getElementId - Get or assign element ID`}),`
`,(0,c.jsx)(n.h1,{id:`getelementid`,children:(0,c.jsx)(n.code,{children:`getElementId`})}),`
`,(0,c.jsxs)(n.p,{children:[`Returns the `,(0,c.jsx)(n.code,{children:`id`}),` of a specified DOM element. If the element exists but does not have an `,(0,c.jsx)(n.code,{children:`id`}),` attribute, the function will automatically generate a unique identifier, assign it to the element, and return it.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Additionally, the function allows appending a CSS selector to the returned string, so you can immediately use the result as a compound selector (e.g., `,(0,c.jsx)(n.code,{children:`"#id-123456 .child-class"`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<E>`}),` — A DOM element or selector from which to obtain the ID.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selector?: string`}),` — An optional string that will be appended to the returned ID (like pseudo-classes or descendant selectors).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — The element's ID string, or a newly generated ID string if the element is not found.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElementId } from '@dxtmisha/functional-basic'

// Element has no ID
const div = document.createElement('div')
console.log(div.id) // ''

const id = getElementId(div)
console.log(id) // For example: 'id-100000'
console.log(div.id) // 'id-100000' (assigned automatically)

// Using an additional selector
const selector = getElementId(div, ' > span.active')
console.log(selector) // '#id-100000 > span.active'
`})}),`
`,(0,c.jsx)(n.h2,{id:`initgetelementid`,children:(0,c.jsx)(n.code,{children:`initGetElementId`})}),`
`,(0,c.jsx)(n.p,{children:`Initializes the function for use in an SSR environment. This is necessary to ensure synchronization of generated IDs between the server and the client.`}),`
`,(0,c.jsxs)(n.p,{children:[`When using `,(0,c.jsx)(n.strong,{children:`Vue 3.5+`}),`, it is recommended to use the built-in `,(0,c.jsx)(n.code,{children:`useId()`}),` function.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useId } from 'vue'
import { initGetElementId } from '@dxtmisha/functional-basic'

// Initialization (e.g., in a plugin or root component)
initGetElementId(() => useId())
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};