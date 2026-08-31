import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/3. Figma/3. Frame Selection`}),`
`,(0,c.jsx)(t.h1,{id:`working-with-selection`,children:`Working with Selection`}),`
`,(0,c.jsx)(t.p,{children:`The selection system provides a connection between the Figma canvas and the plugin interface. It allows the application to react to user actions in the editor and manage focus programmatically.`}),`
`,(0,c.jsx)(t.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(t.p,{children:`On the plugin's code side, it is necessary to initialize synchronization mechanisms and, if needed, use functions for programmatic focus.`}),`
`,(0,c.jsx)(t.h4,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:`Call one of the functions depending on the required level of control:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`setupFrameSelection()`})}),` — Recommended. Sets up bidirectional communication (tracking + programmatic selection from the UI).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`makeFigmaFrameSelection()`})}),` — Sets up only tracking of changes on the Figma canvas (Backend -> UI).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setupFrameSelection } from '@dxtmisha/figma-code'

// Called once during plugin startup
setupFrameSelection()
`})}),`
`,(0,c.jsx)(t.h4,{id:`programmatic-management`,children:`Programmatic Management`}),`
`,(0,c.jsx)(t.p,{children:`If you need to select an object and focus the camera on it directly from the backend code:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toFrameSelection } from '@dxtmisha/figma-code'

await toFrameSelection('12:34')
`})}),`
`,(0,c.jsx)(t.h2,{id:`interface-ui--iframe`,children:`Interface (UI / Iframe)`}),`
`,(0,c.jsx)(t.p,{children:`Tools for retrieving current selection data and commanding changes from the plugin interface.`}),`
`,(0,c.jsx)(t.h4,{id:`reactive-usage-vue`,children:`Reactive Usage (Vue)`}),`
`,(0,c.jsxs)(t.p,{children:[`The most convenient way is through the `,(0,c.jsx)(t.code,{children:`useFigmaFrameSelection`}),` composable.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaFrameSelection } from '@dxtmisha/figma-ref'

const { 
  selection,    // List of selected frames (ComputedRef)
  setSelection, // Method to change selection: setSelection(id)
  loading       // Loading state
} = useFigmaFrameSelection()
`})}),`
`,(0,c.jsx)(t.h4,{id:`direct-control-javascript`,children:`Direct Control (JavaScript)`}),`
`,(0,c.jsx)(t.p,{children:`If you are not using Vue, you can send a command or manually subscribe to changes:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { sendFrameSelection, fetchFrameSelection } from '@dxtmisha/figma'

// Change selection
sendFrameSelection('12:34')

// Subscribe to changes manually
fetchFrameSelection((selection) => {
  console.log('Current selection:', selection)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};