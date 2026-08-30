import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/setElementItem - Modifying an element value by key`}),`
`,(0,c.jsx)(t.h1,{id:`setelementitem`,children:(0,c.jsx)(t.code,{children:`setElementItem`})}),`
`,(0,c.jsx)(t.p,{children:`Modifies the property or attribute value of a DOM element identified by a selector or passed directly. If the property is an object, it performs a merge with the new data.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: ElementOrString<E>`}),` — The target element, `,(0,c.jsx)(t.code,{children:`window`}),` object, or CSS selector.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: K`}),` — The property key or attribute name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: V | Record<string, V>`}),` — The new value or an object for merging.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`E | undefined`}),` — The modified element, or `,(0,c.jsx)(t.code,{children:`undefined`}),` if not found.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setElementItem } from '@dxtmisha/functional-basic'

// Modifying text content
setElementItem('#my-div', 'textContent', 'New text')

// Merging styles
setElementItem(document.body, 'style', { backgroundColor: 'red', color: 'white' })

// Setting an attribute (if the property does not exist on the object)
setElementItem('input', 'placeholder', 'Enter data...')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};