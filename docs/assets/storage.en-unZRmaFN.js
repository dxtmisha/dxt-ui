import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI Figma/# Data Storage`}),`
`,(0,c.jsx)(n.h1,{id:`working-with-storage`,children:`Working with Storage`}),`
`,(0,c.jsx)(n.p,{children:`Figma provides two main mechanisms for saving data: local user storage and shared document storage. The library offers typed wrappers for both methods, providing convenient access and synchronization.`}),`
`,(0,c.jsx)(n.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(n.p,{children:`On the plugin code side, it is necessary to initialize message listeners to synchronize data with the interface.`}),`
`,(0,c.jsx)(n.h3,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setupStorage, setupClientStorage } from '@dxtmisha/figma-code'

// Activate listeners for both storage types
setupStorage()
setupClientStorage()
`})}),`
`,(0,c.jsx)(n.h3,{id:`direct-usage`,children:`Direct Usage`}),`
`,(0,c.jsx)(n.p,{children:`You can work with storage data directly in the backend code:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaStorage, FigmaClientStorage } from '@dxtmisha/figma-code'

// Shared document storage
const storage = FigmaStorage.getInstance<string>('project-theme')
storage.set('dark')

// Personal user storage
const client = FigmaClientStorage.getInstance<boolean>('show-onboarding')
await client.set(true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`interface-ui--iframe`,children:`Interface (UI / Iframe)`}),`
`,(0,c.jsx)(n.p,{children:`In the plugin interface, data is accessible through reactive hooks that automatically synchronize with the backend.`}),`
`,(0,c.jsx)(n.h3,{id:`reactive-usage-vue`,children:`Reactive Usage (Vue)`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaStorage, useFigmaClientStorage } from '@dxtmisha/figma-ref'

// Synchronization with the document
const { item: theme } = useFigmaStorage('project-theme', 'light')

// Synchronization with personal user settings
const { item: isSeen } = useFigmaClientStorage('show-onboarding', false)

// When .value changes, data is automatically sent to Figma
theme.value = 'dark'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};