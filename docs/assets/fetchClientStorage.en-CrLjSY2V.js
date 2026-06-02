import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/figma/Functions/fetchClientStorage - Fetch client storage data`}),`
`,(0,l.jsx)(n.h1,{id:`fetchclientstorage`,children:(0,l.jsx)(n.code,{children:`fetchClientStorage`})}),`
`,(0,l.jsx)(n.p,{children:`A utility for fetching data from Figma's client storage. It facilitates communication between the Figma UI and the plugin side to retrieve stored values.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — The key name in the client storage.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (value: T) => void`}),` — The function executed once the data is retrieved.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`defaultValue?: T`}),` — (Optional) A default value returned if the storage key does not exist.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`isOnce: boolean = true`}),` — If `,(0,l.jsx)(n.code,{children:`true`}),`, the callback will be executed only once.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchClientStorage } from '@dxtmisha/figma'

// 1. Basic usage with a string value
fetchClientStorage<string>('user-theme', (theme) => {
console.log('Current theme:', theme)
}, 'light')

// 2. Fetching an object
interface UserSettings {
notifications: boolean
zoom: number
}

fetchClientStorage<UserSettings>('settings', (settings) => {
console.log('User settings:', settings)
}, { notifications: true, zoom: 100 })

// 3. Persistent subscription (isOnce = false)
fetchClientStorage<number>('counter', (count) => {
console.log('Counter updated:', count)
}, 0, false)
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};