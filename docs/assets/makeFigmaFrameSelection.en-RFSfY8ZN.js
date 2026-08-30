import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/figma-code/Functions/makeFigmaFrameSelection - Tracking selection`}),`
`,(0,c.jsx)(t.h1,{id:`makefigmaframeselection`,children:(0,c.jsx)(t.code,{children:`makeFigmaFrameSelection`})}),`
`,(0,c.jsxs)(t.p,{children:[`Activates a global listener for the `,(0,c.jsx)(t.code,{children:`selectionchange`}),` event in Figma. It is used to synchronize the state of selected elements between the Figma sandbox (Backend) and the plugin's UI (Frontend).`]}),`
`,(0,c.jsxs)(t.p,{children:[`This function is designed to be used in the Figma plugin's code (Backend). It automatically subscribes to user selection changes. Each time the selection changes, data about the selected elements (including names, IDs, and JPG screenshots) are collected and sent to the User Interface (UI) via the `,(0,c.jsx)(t.code,{children:`FigmaPluginMessenger`}),`. This eliminates the need to manually set up event listeners and handle image exports for each selected object.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { makeFigmaFrameSelection } from '@dxtmisha/figma-code'

// Initialization in the plugin code (Backend)
makeFigmaFrameSelection()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};