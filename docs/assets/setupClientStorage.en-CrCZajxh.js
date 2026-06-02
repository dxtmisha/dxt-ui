import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/figma-code/Functions/setupClientStorage - Setup client storage handlers`}),`
`,(0,l.jsx)(n.h1,{id:`setupclientstorage`,children:(0,l.jsx)(n.code,{children:`setupClientStorage`})}),`
`,(0,l.jsx)(n.p,{children:`A utility for setting up request handlers for Figma's client storage. it connects UI requests (GET/SET) with the actual read and write operations on the plugin side.`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Parameters:`}),`
None.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { setupClientStorage } from '@dxtmisha/figma-code'

// Initialization in the main part of the plugin (typically code.ts)
setupClientStorage()

// Now the UI can use fetchClientStorage and sendClientStorage 
// to interact with Figma's clientStorage.
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};