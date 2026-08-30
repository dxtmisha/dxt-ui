import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/3. Figma/4. Data Storage`}),`
`,(0,c.jsx)(t.h1,{id:`working-with-storage`,children:`Working with Storage`}),`
`,(0,c.jsx)(t.p,{children:`Figma provides two main mechanisms for saving data: local user storage and shared document storage. The library offers typed wrappers for both methods, providing convenient access and synchronization.`}),`
`,(0,c.jsx)(t.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(t.p,{children:`On the plugin code side, it is necessary to initialize message listeners to synchronize data with the interface.`}),`
`,(0,c.jsx)(t.h3,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setupStorage, setupClientStorage } from '@dxtmisha/figma-code'

// Activate listeners for both storage types
setupStorage()
setupClientStorage()
`})}),`
`,(0,c.jsx)(t.h3,{id:`direct-usage`,children:`Direct Usage`}),`
`,(0,c.jsx)(t.p,{children:`You can work with storage data directly in the backend code:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaStorage, FigmaClientStorage } from '@dxtmisha/figma-code'

// Shared document storage
const storage = FigmaStorage.getInstance<string>('project-theme')
storage.set('dark')

// Personal user storage
const client = FigmaClientStorage.getInstance<boolean>('show-onboarding')
await client.set(true)
`})}),`
`,(0,c.jsx)(t.h2,{id:`interface-ui--iframe`,children:`Interface (UI / Iframe)`}),`
`,(0,c.jsx)(t.p,{children:`In the plugin interface, data is accessible through reactive hooks that automatically synchronize with the backend.`}),`
`,(0,c.jsx)(t.h3,{id:`reactive-usage-vue`,children:`Reactive Usage (Vue)`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaStorage, useFigmaClientStorage } from '@dxtmisha/figma-ref'

// Synchronization with the document
const { item: theme } = useFigmaStorage('project-theme', 'light')

// Synchronization with personal user settings
const { item: isSeen } = useFigmaClientStorage('show-onboarding', false)

// When .value changes, data is automatically sent to Figma
theme.value = 'dark'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};