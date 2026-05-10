import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-code/Functions/setupFrameSelection - Setup bidirectional selection`}),`
`,(0,c.jsx)(n.h1,{id:`setupframeselection`,children:(0,c.jsx)(n.code,{children:`setupFrameSelection`})}),`
`,(0,c.jsx)(n.p,{children:`Sets up bidirectional frame selection management between the Figma backend and the plugin UI. This single function handles both automatic tracking of what the user is currently looking at and programmatic selection from the interface.`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Selection Tracking`}),` — Automatically calls `,(0,c.jsx)(n.code,{children:`makeFigmaFrameSelection()`}),`, which starts observing user selection changes in Figma and sends detailed data (names, IDs, screenshots) to the UI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Remote Control`}),` — Registers a listener for the `,(0,c.jsx)(n.code,{children:`UI_FIGMA_FRAME_SET_SELECTION`}),` message. When the UI sends this message with an ID, the backend finds the object, selects it, and zooms the viewport to focus on it.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setupFrameSelection } from '@dxtmisha/figma-code'

// Call this during plugin backend initialization
setupFrameSelection()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};