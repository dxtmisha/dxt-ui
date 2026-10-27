import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/setElementItem - Modifying an element value by key`}),`
`,(0,c.jsx)(t.h1,{id:`setelementitem`,children:(0,c.jsx)(t.code,{children:`setElementItem`})}),`
`,(0,c.jsx)(t.p,{children:`Modifies the property value or attribute of a DOM element resolved by selector or passed directly. If the target property is an object (and not an array), merges with the new data.`}),`
`,(0,c.jsxs)(t.p,{children:[`The function provides robust protection against `,(0,c.jsx)(t.strong,{children:`Prototype Pollution`}),` via `,(0,c.jsx)(t.code,{children:`isPrototypeKey`}),` (ignoring `,(0,c.jsx)(t.code,{children:`__proto__`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`, `,(0,c.jsx)(t.code,{children:`prototype`}),`), supports CSS custom properties (`,(0,c.jsx)(t.code,{children:`--*`}),`) and kebab-case keys in style objects, cleanly removes styles or attributes when `,(0,c.jsx)(t.code,{children:`null`}),` / `,(0,c.jsx)(t.code,{children:`undefined`}),` is passed, and serializes boolean `,(0,c.jsx)(t.code,{children:`aria-*`}),` attributes to `,(0,c.jsx)(t.code,{children:`"true"`}),` / `,(0,c.jsx)(t.code,{children:`"false"`}),` (while setting `,(0,c.jsx)(t.code,{children:`""`}),` or removing the attribute for standard boolean attributes).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: ElementOrString<E>`}),` — Element, `,(0,c.jsx)(t.code,{children:`window`}),`, or CSS selector.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: K | string`}),` — Property key, attribute name, or style key.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: V | Record<string, V> | unknown`}),` — New value, function returning a value, or object to merge.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`E | undefined`}),` — The target element (modified, or unchanged if a prototype pollution key was passed), or `,(0,c.jsx)(t.code,{children:`undefined`}),` if the element is not found.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setElementItem } from '@dxtmisha/functional-basic'

// Modifying text content
setElementItem('#my-div', 'textContent', 'New text')

// Merging styles including kebab-case and CSS variables
setElementItem(document.body, 'style', {
  backgroundColor: 'red',
  'font-size': '16px',
  '--brand-color': '#0055ff'
})

// Removing styles or CSS variables via null / undefined
setElementItem(document.body, 'style', {
  backgroundColor: null,
  '--brand-color': undefined
})

// Setting an attribute (if property does not exist on element)
setElementItem('input', 'placeholder', 'Enter data...')

// Setting ARIA attributes ('true' / 'false')
setElementItem('button', 'aria-expanded', true)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};