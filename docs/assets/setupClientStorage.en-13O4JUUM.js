import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/figma-code/Functions/setupClientStorage - Setup client storage handlers`}),`
`,(0,l.jsx)(t.h1,{id:`setupclientstorage`,children:(0,l.jsx)(t.code,{children:`setupClientStorage`})}),`
`,(0,l.jsx)(t.p,{children:`A utility for setting up request handlers for Figma's client storage. it connects UI requests (GET/SET) with the actual read and write operations on the plugin side.`}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Parameters:`}),`
None.`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { setupClientStorage } from '@dxtmisha/figma-code'

// Initialization in the main part of the plugin (typically code.ts)
setupClientStorage()

// Now the UI can use fetchClientStorage and sendClientStorage 
// to interact with Figma's clientStorage.
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};