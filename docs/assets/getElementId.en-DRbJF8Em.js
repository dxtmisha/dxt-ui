import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getElementId - Get or assign element ID`}),`
`,(0,c.jsx)(t.h1,{id:`getelementid`,children:(0,c.jsx)(t.code,{children:`getElementId`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns the `,(0,c.jsx)(t.code,{children:`id`}),` of a specified DOM element. If the element exists but does not have an `,(0,c.jsx)(t.code,{children:`id`}),` attribute, the function will automatically generate a unique identifier, assign it to the element, and return it.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Additionally, the function allows appending a CSS selector to the returned string, so you can immediately use the result as a compound selector (e.g., `,(0,c.jsx)(t.code,{children:`"#id-123456 .child-class"`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<E>`}),` — A DOM element or selector from which to obtain the ID.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selector?: string`}),` — An optional string that will be appended to the returned ID (like pseudo-classes or descendant selectors).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — The element's ID string, or a newly generated ID string if the element is not found.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementId } from '@dxtmisha/functional-basic'

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
`,(0,c.jsx)(t.h2,{id:`initgetelementid`,children:(0,c.jsx)(t.code,{children:`initGetElementId`})}),`
`,(0,c.jsx)(t.p,{children:`Initializes the function for use in an SSR environment. This is necessary to ensure synchronization of generated IDs between the server and the client.`}),`
`,(0,c.jsxs)(t.p,{children:[`When using `,(0,c.jsx)(t.strong,{children:`Vue 3.5+`}),`, it is recommended to use the built-in `,(0,c.jsx)(t.code,{children:`useId()`}),` function.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useId } from 'vue'
import { initGetElementId } from '@dxtmisha/functional-basic'

// Initialization (e.g., in a plugin or root component)
initGetElementId(() => useId())
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};