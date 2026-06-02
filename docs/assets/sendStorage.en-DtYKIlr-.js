import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/figma/Functions/sendStorage - Save data to shared storage`}),`
`,(0,l.jsx)(n.h1,{id:`sendstorage`,children:(0,l.jsx)(n.code,{children:`sendStorage`})}),`
`,(0,l.jsx)(n.p,{children:`A utility for saving data to Figma's shared storage. Unlike client storage, this data can be shared and associated with specific identifiers (e.g., node IDs).`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — The name of the storage.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value: T`}),` — The data value to be stored.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id?: string`}),` — (Optional) An identifier to associate the data with a specific object (e.g., node ID).`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { sendStorage } from '@dxtmisha/figma'

// 1. Storing global data
sendStorage('app-config', { version: '1.0.0' })

// 2. Storing data for a specific node
sendStorage('node-custom-data', { label: 'Header' }, '12:34')
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};