import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/getBind - Binding Generation`}),`
`,(0,c.jsx)(t.h1,{id:`getbind`,children:(0,c.jsx)(t.code,{children:`getBind`})}),`
`,(0,c.jsx)(t.p,{children:`Base utility function for generating a properties object for a subcomponent based on normal (non-reactive) values. It handles various input types and ensures a consistent structure for property binding.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T | R | undefined | null`}),` — The input value to be bound. Can be a primitive or an object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nameExtra: ItemList | string = {}`}),` — Additional properties to merge or the name of the property to use if `,(0,c.jsx)(t.code,{children:`value`}),` is not an object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string = 'value'`}),` — The default property name (defaults to `,(0,c.jsx)(t.code,{children:`'value'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`except: boolean = false`}),` — If true, skips the check requiring a primary key in the `,(0,c.jsx)(t.code,{children:`value`}),` object.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`ConstrBind<R>`}),` — An object containing the properties ready for binding.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getBind } from '@dxtmisha/functional'

// Case 1: Simple value
const bind1 = getBind('Hello', {}, 'label') 
// Result: { label: 'Hello' }

// Case 2: Object with extra properties
const bind2 = getBind({ id: 1 }, { class: 'active' }, 'data')
// Result: { id: 1, class: 'active' }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};