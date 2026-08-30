import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-C5PYTnT8.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/figma/Functions/sendStorage - Save data to shared storage`}),`
`,(0,l.jsx)(t.h1,{id:`sendstorage`,children:(0,l.jsx)(t.code,{children:`sendStorage`})}),`
`,(0,l.jsx)(t.p,{children:`A utility for saving data to Figma's shared storage. Unlike client storage, this data can be shared and associated with specific identifiers (e.g., node IDs).`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — The name of the storage.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: T`}),` — The data value to be stored.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id?: string`}),` — (Optional) An identifier to associate the data with a specific object (e.g., node ID).`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { sendStorage } from '@dxtmisha/figma'

// 1. Storing global data
sendStorage('app-config', { version: '1.0.0' })

// 2. Storing data for a specific node
sendStorage('node-custom-data', { label: 'Header' }, '12:34')
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};