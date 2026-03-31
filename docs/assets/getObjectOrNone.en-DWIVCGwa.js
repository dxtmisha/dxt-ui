import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getObjectOrNone - Safe object return`}),`
`,(0,c.jsx)(n.h1,{id:`getobjectornone`,children:(0,c.jsx)(n.code,{children:`getObjectOrNone`})}),`
`,(0,c.jsxs)(n.p,{children:[`A simple utility that checks whether the passed value is an actual object (not `,(0,c.jsx)(n.code,{children:`null`}),`, not an array, not a primitive) and returns it. If the passed argument is not a plain object, a new empty object `,(0,c.jsx)(n.code,{children:`{}`}),` is returned. This function is useful for safe variable initialization or parameter assignments.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Any value, usually expected to be an object.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`T & Record<string, any>`}),` — The original object if the check passes; otherwise, an empty object `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getObjectOrNone } from '@dxtmisha/functional-basic'

// Successful object return
console.log(getObjectOrNone({ name: 'Admin' })) // { name: 'Admin' }

// Arrays are not considered plain objects, returns {}
console.log(getObjectOrNone([1, 2, 3])) // {}

// Primitives and null return {}
console.log(getObjectOrNone(null)) // {}
console.log(getObjectOrNone('a string')) // {}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};