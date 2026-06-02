import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI Figma/# Messenger System`}),`
`,(0,c.jsx)(n.h1,{id:`working-with-messages-messenger`,children:`Working with Messages (Messenger)`}),`
`,(0,c.jsxs)(n.p,{children:[`The messaging mechanism is the central link in the architecture of Figma plugins. Since the "Code Side" (Sandbox) and the "Interface Side" (UI) run in isolated environments, any interaction between them requires the use of the `,(0,c.jsx)(n.code,{children:`postMessage`}),` system.`]}),`
`,(0,c.jsx)(n.p,{children:`The library simplifies this process by providing standardized messengers and automatic routing.`}),`
`,(0,c.jsx)(n.h2,{id:`initialization-and-security`,children:`Initialization and Security`}),`
`,(0,c.jsxs)(n.p,{children:[`Figma plugins operate in an environment where multiple plugins can be active simultaneously. To prevent message conflicts and ensure that your UI only processes data from your specific plugin, the library uses the `,(0,c.jsx)(n.code,{children:`FigmaPostCode`}),` system.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Both the `,(0,c.jsx)(n.strong,{children:`Backend`}),` and the `,(0,c.jsx)(n.strong,{children:`Interface`}),` must be initialized with the same unique identifier (typically the `,(0,c.jsx)(n.code,{children:`id`}),` from your `,(0,c.jsx)(n.code,{children:`manifest.json`}),`) before using the messengers.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
import manifest from '../manifest.json'

// Must be called on both sides (Code and UI)
FigmaPostCode.set(manifest.id)
`})}),`
`,(0,c.jsx)(n.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsxs)(n.p,{children:[`On the code side, the `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`}),` class is used to subscribe to events and send data to the UI.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
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
`,(0,c.jsx)(n.h2,{id:`interface-ui--iframe`,children:`Interface (UI / Iframe)`}),`
`,(0,c.jsxs)(n.p,{children:[`In the interface, the mirror class `,(0,c.jsx)(n.code,{children:`FigmaUiMessenger`}),` is used for interaction with the backend.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};