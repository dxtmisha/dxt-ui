import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/figma/Functions/fetchStorage - Fetch shared storage data`}),`
`,(0,l.jsx)(n.h1,{id:`fetchstorage`,children:(0,l.jsx)(n.code,{children:`fetchStorage`})}),`
`,(0,l.jsx)(n.p,{children:`A utility for fetching data from Figma's shared storage. Unlike client storage, this data can be shared and associated with specific identifiers (e.g., node IDs).`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — The name of the storage.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (value: T) => void`}),` — The function executed once the data is retrieved.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id?: string`}),` — (Optional) An identifier to distinguish data within the same storage name.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`defaultValue?: T`}),` — (Optional) A default value returned if the storage key does not exist.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`isOnce: boolean = true`}),` — If `,(0,l.jsx)(n.code,{children:`true`}),`, the callback will be executed only once.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchStorage } from '@dxtmisha/figma'

// 1. Basic usage
fetchStorage<string>('project-status', (status) => {
console.log('Status:', status)
}, undefined, 'active')

// 2. Fetching data for a specific node
const nodeId = '12:34'
fetchStorage<object>('node-metadata', (data) => {
console.log('Node metadata:', data)
}, nodeId)

// 3. Persistent subscription
fetchStorage<number>('global-counter', (count) => {
console.log('Counter update:', count)
}, undefined, 0, false)
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};