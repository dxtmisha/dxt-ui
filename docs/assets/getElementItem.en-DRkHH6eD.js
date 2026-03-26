import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getElementItem - Retrieve element property value`}),`
`,(0,c.jsx)(n.h1,{id:`getelementitem`,children:(0,c.jsx)(n.code,{children:`getElementItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Returns the value of a specific property from an HTML element (e.g., `,(0,c.jsx)(n.code,{children:`id`}),`, `,(0,c.jsx)(n.code,{children:`className`}),`, or any custom property if it's defined as a key on the element type). The utility uses `,(0,c.jsx)(n.code,{children:`getElement`}),` to find the node, and if the element is not found or lacks the specified property, it returns `,(0,c.jsx)(n.code,{children:`defaultValue`}),` (which defaults to `,(0,c.jsx)(n.code,{children:`undefined`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: ElementOrString<T>`}),` — A selector string or an existing DOM element.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: K | string`}),` — The property name (key) of the element whose value is required.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: D`}),` — A fallback value returned if the property is not found.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`T[K] | D | undefined`}),` — The value of the requested property or the `,(0,c.jsx)(n.code,{children:`defaultValue`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElementItem } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
input.type = 'text'
input.id = 'my-input'

// Getting the ID
const elementId = getElementItem(input, 'id') 
console.log(elementId) // 'my-input'

// If the property is missing and we provide a fallback
const testValue = getElementItem('.non-existent', 'id', 'fallback-id')
console.log(testValue) // 'fallback-id'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};