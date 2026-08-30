import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/figma-code/Functions/setupFrameSelection - Setup bidirectional selection`}),`
`,(0,c.jsx)(t.h1,{id:`setupframeselection`,children:(0,c.jsx)(t.code,{children:`setupFrameSelection`})}),`
`,(0,c.jsx)(t.p,{children:`Sets up bidirectional frame selection management between the Figma backend and the plugin UI. This single function handles both automatic tracking of what the user is currently looking at and programmatic selection from the interface.`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Selection Tracking`}),` — Automatically calls `,(0,c.jsx)(t.code,{children:`makeFigmaFrameSelection()`}),`, which starts observing user selection changes in Figma and sends detailed data (names, IDs, screenshots) to the UI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Remote Control`}),` — Registers a listener for the `,(0,c.jsx)(t.code,{children:`UI_FIGMA_FRAME_SET_SELECTION`}),` message. When the UI sends this message with an ID, the backend finds the object, selects it, and zooms the viewport to focus on it.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setupFrameSelection } from '@dxtmisha/figma-code'

// Call this during plugin backend initialization
setupFrameSelection()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};