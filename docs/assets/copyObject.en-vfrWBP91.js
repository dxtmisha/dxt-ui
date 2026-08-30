import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-C5PYTnT8.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/functional-basic/Functions/copyObject - Copy an object`}),`
`,(0,l.jsx)(t.h1,{id:`copyobject`,children:(0,l.jsx)(t.code,{children:`copyObject`})}),`
`,(0,l.jsx)(t.p,{children:`Creates a deep copy of an object for independent data management. The goal of the method is to obtain a completely separate instance of the data to prevent unintended mutations in the original object.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: T`}),` — The object or array to be copied.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`T`}),` — A new copy of the object.`]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { copyObject } from '@dxtmisha/functional-basic'

const original = { 
name: 'John', 
age: 30,
details: { role: 'admin' }
}

const copy = copyObject(original)
// copy is a completely new object for independent management
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};