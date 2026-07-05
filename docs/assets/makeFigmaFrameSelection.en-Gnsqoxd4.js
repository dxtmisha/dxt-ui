import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-code/Functions/makeFigmaFrameSelection - Tracking selection`}),`
`,(0,c.jsx)(n.h1,{id:`makefigmaframeselection`,children:(0,c.jsx)(n.code,{children:`makeFigmaFrameSelection`})}),`
`,(0,c.jsxs)(n.p,{children:[`Activates a global listener for the `,(0,c.jsx)(n.code,{children:`selectionchange`}),` event in Figma. It is used to synchronize the state of selected elements between the Figma sandbox (Backend) and the plugin's UI (Frontend).`]}),`
`,(0,c.jsxs)(n.p,{children:[`This function is designed to be used in the Figma plugin's code (Backend). It automatically subscribes to user selection changes. Each time the selection changes, data about the selected elements (including names, IDs, and JPG screenshots) are collected and sent to the User Interface (UI) via the `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`}),`. This eliminates the need to manually set up event listeners and handle image exports for each selected object.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { makeFigmaFrameSelection } from '@dxtmisha/figma-code'

// Initialization in the plugin code (Backend)
makeFigmaFrameSelection()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};