import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{c as r,f as i,s as a}from"./blocks-PB3deeuo.js";import{t as o}from"./mdx-react-shim-7_6RcfEr.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/figma/Functions/sendClientStorage - Save data to client storage`}),`
`,(0,l.jsx)(n.h1,{id:`sendclientstorage`,children:(0,l.jsx)(n.code,{children:`sendClientStorage`})}),`
`,(0,l.jsx)(n.p,{children:`A utility for saving data to Figma's client storage. It sends a message from the UI to the plugin side to store the provided value under a specific name.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — The key name in the client storage.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value: T`}),` — The data value to be stored.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { sendClientStorage } from '@dxtmisha/figma'

// 1. Storing a simple string
sendClientStorage('user-theme', 'dark')

// 2. Storing an object
sendClientStorage('settings', { notifications: true, zoom: 100 })
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};