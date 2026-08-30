import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/figma/Functions/fetchFrameSelection - Fetching current selection`}),`
`,(0,c.jsx)(t.h1,{id:`fetchframeselection`,children:(0,c.jsx)(t.code,{children:`fetchFrameSelection`})}),`
`,(0,c.jsx)(t.p,{children:`A utility for retrieving and observing the list of elements currently selected by the user in Figma. It provides detailed information about the current selection, including names, IDs, and screenshots.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: (value: UiFigmaFramesList) => void`}),` — A function called whenever the selection is updated.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { fetchFrameSelection } from '@dxtmisha/figma'

fetchFrameSelection((frames) => {
  console.log('Current selection updated:', frames)
})
`})}),`
`,(0,c.jsx)(t.h2,{id:`data-types`,children:`Data Types`}),`
`,(0,c.jsx)(t.h4,{id:`uifigmaframesitem`,children:(0,c.jsx)(t.code,{children:`UiFigmaFramesItem`})}),`
`,(0,c.jsx)(t.p,{children:`Represents a simplified frame element for the UI.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — The name of the frame.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — The unique identifier of the element.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: Uint8Array | string`}),` — The image of the frame (optional).`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`uifigmaframeslist`,children:(0,c.jsx)(t.code,{children:`UiFigmaFramesList`})}),`
`,(0,c.jsxs)(t.p,{children:[`A list of `,(0,c.jsx)(t.code,{children:`UiFigmaFramesItem`}),` objects.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};