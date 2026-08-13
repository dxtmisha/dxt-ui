import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/# UI Figma/# Messenger System`}),`
`,(0,c.jsx)(t.h1,{id:`working-with-messages-messenger`,children:`Working with Messages (Messenger)`}),`
`,(0,c.jsxs)(t.p,{children:[`The messaging mechanism is the central link in the architecture of Figma plugins. Since the "Code Side" (Sandbox) and the "Interface Side" (UI) run in isolated environments, any interaction between them requires the use of the `,(0,c.jsx)(t.code,{children:`postMessage`}),` system.`]}),`
`,(0,c.jsx)(t.p,{children:`The library simplifies this process by providing standardized messengers and automatic routing.`}),`
`,(0,c.jsx)(t.h2,{id:`initialization-and-security`,children:`Initialization and Security`}),`
`,(0,c.jsxs)(t.p,{children:[`Figma plugins operate in an environment where multiple plugins can be active simultaneously. To prevent message conflicts and ensure that your UI only processes data from your specific plugin, the library uses the `,(0,c.jsx)(t.code,{children:`FigmaPostCode`}),` system.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Both the `,(0,c.jsx)(t.strong,{children:`Backend`}),` and the `,(0,c.jsx)(t.strong,{children:`Interface`}),` must be initialized with the same unique identifier (typically the `,(0,c.jsx)(t.code,{children:`id`}),` from your `,(0,c.jsx)(t.code,{children:`manifest.json`}),`) before using the messengers.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
import manifest from '../manifest.json'

// Must be called on both sides (Code and UI)
FigmaPostCode.set(manifest.id)
`})}),`
`,(0,c.jsx)(t.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsxs)(t.p,{children:[`On the code side, the `,(0,c.jsx)(t.code,{children:`FigmaPluginMessenger`}),` class is used to subscribe to events and send data to the UI.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
import { FigmaPluginMessenger } from '@dxtmisha/figma-code'
import manifest from '../manifest.json'

// 1. Initialize identification
FigmaPostCode.set(manifest.id)

// 2. Work with the messenger
const messenger = FigmaPluginMessenger.getInstance()

messenger.add('my-action', (data) => {
  console.log('Data received:', data)
  messenger.post('my-action', { status: 'success' })
})
`})}),`
`,(0,c.jsx)(t.h2,{id:`interface-ui--iframe`,children:`Interface (UI / Iframe)`}),`
`,(0,c.jsxs)(t.p,{children:[`In the interface, the mirror class `,(0,c.jsx)(t.code,{children:`FigmaUiMessenger`}),` is used for interaction with the backend.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
import { FigmaUiMessenger } from '@dxtmisha/figma'
import manifest from '../manifest.json'

// 1. Initialize identification (same ID as backend)
FigmaPostCode.set(manifest.id)

// 2. Work with the messenger
const messenger = FigmaUiMessenger.getInstance()

messenger.post('my-action', { payload: 'hello' })

messenger.add('my-action', (result) => {
  console.log('Result:', result)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};