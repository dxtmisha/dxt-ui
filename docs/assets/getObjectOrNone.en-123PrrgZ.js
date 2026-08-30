import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getObjectOrNone - Safe object return`}),`
`,(0,c.jsx)(t.h1,{id:`getobjectornone`,children:(0,c.jsx)(t.code,{children:`getObjectOrNone`})}),`
`,(0,c.jsxs)(t.p,{children:[`A simple utility that checks whether the passed value is an actual object (not `,(0,c.jsx)(t.code,{children:`null`}),`, not an array, not a primitive) and returns it. If the passed argument is not a plain object, a new empty object `,(0,c.jsx)(t.code,{children:`{}`}),` is returned. This function is useful for safe variable initialization or parameter assignments.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Any value, usually expected to be an object.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`T & Record<string, any>`}),` — The original object if the check passes; otherwise, an empty object `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getObjectOrNone } from '@dxtmisha/functional-basic'

// Successful object return
console.log(getObjectOrNone({ name: 'Admin' })) // { name: 'Admin' }

// Arrays are not considered plain objects, returns {}
console.log(getObjectOrNone([1, 2, 3])) // {}

// Primitives and null return {}
console.log(getObjectOrNone(null)) // {}
console.log(getObjectOrNone('a string')) // {}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};