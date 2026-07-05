import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/figma-code/Functions/setupStorage - Setup shared storage handlers`}),`
`,(0,l.jsx)(n.h1,{id:`setupstorage`,children:(0,l.jsx)(n.code,{children:`setupStorage`})}),`
`,(0,l.jsx)(n.p,{children:`A utility for setting up request handlers for Figma's shared storage. It connects UI requests (GET/SET) with the actual read and write operations in the plugin, supporting optional object identifiers (e.g., node IDs).`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Parameters:`}),`
None.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { setupStorage } from '@dxtmisha/figma-code'

// Initialization in the main part of the plugin (typically code.ts)
setupStorage()

// Now the UI can use fetchStorage and sendStorage 
// to interact with Figma's shared storage.
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};