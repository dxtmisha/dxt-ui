import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getElementItem - Retrieve element property value`}),`
`,(0,c.jsx)(t.h1,{id:`getelementitem`,children:(0,c.jsx)(t.code,{children:`getElementItem`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns the value of a specific property from an HTML element (e.g., `,(0,c.jsx)(t.code,{children:`id`}),`, `,(0,c.jsx)(t.code,{children:`className`}),`, or any custom property if it's defined as a key on the element type). The utility uses `,(0,c.jsx)(t.code,{children:`getElement`}),` to find the node, and if the element is not found or lacks the specified property, it returns `,(0,c.jsx)(t.code,{children:`defaultValue`}),` (which defaults to `,(0,c.jsx)(t.code,{children:`undefined`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: ElementOrString<T>`}),` — A selector string or an existing DOM element.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: K | string`}),` — The property name (key) of the element whose value is required.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: D`}),` — A fallback value returned if the property is not found.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`T[K] | D | undefined`}),` — The value of the requested property or the `,(0,c.jsx)(t.code,{children:`defaultValue`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementItem } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
input.type = 'text'
input.id = 'my-input'

// Getting the ID
const elementId = getElementItem(input, 'id') 
console.log(elementId) // 'my-input'

// If the property is missing and we provide a fallback
const testValue = getElementItem('.non-existent', 'id', 'fallback-id')
console.log(testValue) // 'fallback-id'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};