import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/figma/Functions/fetchClientStorage - Fetch client storage data`}),`
`,(0,l.jsx)(t.h1,{id:`fetchclientstorage`,children:(0,l.jsx)(t.code,{children:`fetchClientStorage`})}),`
`,(0,l.jsx)(t.p,{children:`A utility for fetching data from Figma's client storage. It facilitates communication between the Figma UI and the plugin side to retrieve stored values.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — The key name in the client storage.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`callback: (value: T) => void`}),` — The function executed once the data is retrieved.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`defaultValue?: T`}),` — (Optional) A default value returned if the storage key does not exist.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`isOnce: boolean = true`}),` — If `,(0,l.jsx)(t.code,{children:`true`}),`, the callback will be executed only once.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};