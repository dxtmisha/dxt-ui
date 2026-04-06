import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Functions/getBind - Binding Generation`}),`
`,(0,c.jsx)(n.h1,{id:`getbind`,children:(0,c.jsx)(n.code,{children:`getBind`})}),`
`,(0,c.jsx)(n.p,{children:`Base utility function for generating a properties object for a subcomponent based on normal (non-reactive) values. It handles various input types and ensures a consistent structure for property binding.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T | R | undefined | null`}),` — The input value to be bound. Can be a primitive or an object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nameExtra: ItemList | string = {}`}),` — Additional properties to merge or the name of the property to use if `,(0,c.jsx)(n.code,{children:`value`}),` is not an object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string = 'value'`}),` — The default property name (defaults to `,(0,c.jsx)(n.code,{children:`'value'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`except: boolean = false`}),` — If true, skips the check requiring a primary key in the `,(0,c.jsx)(n.code,{children:`value`}),` object.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`ConstrBind<R>`}),` — An object containing the properties ready for binding.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getBind } from '@dxtmisha/functional'

// Case 1: Simple value
const bind1 = getBind('Hello', {}, 'label') 
// Result: { label: 'Hello' }

// Case 2: Object with extra properties
const bind2 = getBind({ id: 1 }, { class: 'active' }, 'data')
// Result: { id: 1, class: 'active' }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};