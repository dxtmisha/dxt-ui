import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma/Functions/fetchFrameSelection - Fetching current selection`}),`
`,(0,c.jsx)(n.h1,{id:`fetchframeselection`,children:(0,c.jsx)(n.code,{children:`fetchFrameSelection`})}),`
`,(0,c.jsx)(n.p,{children:`A utility for retrieving and observing the list of elements currently selected by the user in Figma. It provides detailed information about the current selection, including names, IDs, and screenshots.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (value: UiFigmaFramesList) => void`}),` — A function called whenever the selection is updated.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { fetchFrameSelection } from '@dxtmisha/figma'

fetchFrameSelection((frames) => {
  console.log('Current selection updated:', frames)
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`data-types`,children:`Data Types`}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframesitem`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`})}),`
`,(0,c.jsx)(n.p,{children:`Represents a simplified frame element for the UI.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — The name of the frame.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — The unique identifier of the element.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: Uint8Array | string`}),` — The image of the frame (optional).`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframeslist`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesList`})}),`
`,(0,c.jsxs)(n.p,{children:[`A list of `,(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`}),` objects.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};