import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/setElementItem - Modifying an element value by key`}),`
`,(0,c.jsx)(n.h1,{id:`setelementitem`,children:(0,c.jsx)(n.code,{children:`setElementItem`})}),`
`,(0,c.jsx)(n.p,{children:`Modifies the property or attribute value of a DOM element identified by a selector or passed directly. If the property is an object, it performs a merge with the new data.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: ElementOrString<E>`}),` — The target element, `,(0,c.jsx)(n.code,{children:`window`}),` object, or CSS selector.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: K`}),` — The property key or attribute name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: V | Record<string, V>`}),` — The new value or an object for merging.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`E | undefined`}),` — The modified element, or `,(0,c.jsx)(n.code,{children:`undefined`}),` if not found.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setElementItem } from '@dxtmisha/functional-basic'

// Modifying text content
setElementItem('#my-div', 'textContent', 'New text')

// Merging styles
setElementItem(document.body, 'style', { backgroundColor: 'red', color: 'white' })

// Setting an attribute (if the property does not exist on the object)
setElementItem('input', 'placeholder', 'Enter data...')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};