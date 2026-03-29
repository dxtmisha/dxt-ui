import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/intersectKey - Intersect objects by keys`}),`
`,(0,c.jsx)(n.h1,{id:`intersectkey`,children:(0,c.jsx)(n.code,{children:`intersectKey`})}),`
`,(0,c.jsxs)(n.p,{children:[`Analyzes two objects (or arrays) and returns a new object containing only the properties from the first object whose keys also exist in the second object. The values for the resulting object are extracted from the primary object (`,(0,c.jsx)(n.code,{children:`data`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:`This function is highly useful for filtering payload data against an allowed schema footprint or synchronizing partial models.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: T`}),` — The primary source object that supplies the final values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison: C`}),` — The reference object whose keys are used strictly for existence checks.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`Record<KT & KC, T[KT]>`}),` — A newly constructed object containing only intersecting properties. If arguments are missing or not objects, it returns an empty object `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { intersectKey } from '@dxtmisha/functional-basic'

const inputData = { id: 1, name: 'John', age: 30, _internalToken: 'xyz' }
const allowedSchema = { id: null, name: null, role: null }

// Returns only the keys from inputData that are present in allowedSchema
const result = intersectKey(inputData, allowedSchema)
console.log(result) // { id: 1, name: 'John' }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};