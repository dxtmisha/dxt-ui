import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/intersectKey - Intersect objects by keys`}),`
`,(0,c.jsx)(t.h1,{id:`intersectkey`,children:(0,c.jsx)(t.code,{children:`intersectKey`})}),`
`,(0,c.jsxs)(t.p,{children:[`Analyzes two objects (or arrays) and returns a new object containing only the properties from the first object whose keys also exist in the second object. The values for the resulting object are extracted from the primary object (`,(0,c.jsx)(t.code,{children:`data`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`This function is highly useful for filtering payload data against an allowed schema footprint or synchronizing partial models.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: T`}),` — The primary source object that supplies the final values.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`comparison: C`}),` — The reference object whose keys are used strictly for existence checks.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Record<KT & KC, T[KT]>`}),` — A newly constructed object containing only intersecting properties. If arguments are missing or not objects, it returns an empty object `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { intersectKey } from '@dxtmisha/functional-basic'

const inputData = { id: 1, name: 'John', age: 30, _internalToken: 'xyz' }
const allowedSchema = { id: null, name: null, role: null }

// Returns only the keys from inputData that are present in allowedSchema
const result = intersectKey(inputData, allowedSchema)
console.log(result) // { id: 1, name: 'John' }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};