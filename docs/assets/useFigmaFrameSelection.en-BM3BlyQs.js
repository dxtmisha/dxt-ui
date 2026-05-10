import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-ref/Composables/useFigmaFrameSelection - Observing frame selection (full info)`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmaframeselection`,children:(0,c.jsx)(n.code,{children:`useFigmaFrameSelection`})}),`
`,(0,c.jsxs)(n.p,{children:[`A composable for retrieving and observing the detailed list of frames currently selected in Figma. Unlike `,(0,c.jsx)(n.code,{children:`useFigmaUiSelected`}),` (which only manages IDs in the UI), this composable provides full information about the selection, including names and screenshots, by listening to Figma's `,(0,c.jsx)(n.code,{children:`selectionchange`}),` events.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selection: ComputedRef<UiFigmaFramesList>`}),` — A computed reference to the list of selected frames (names, IDs, and screenshots).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSelection(id: string): void`}),` — A method to programmatically change the selection in Figma to a specific element.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: ComputedRef<boolean>`}),` — A reactive flag indicating if the selection data is being fetched.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaFrameSelection } from '@dxtmisha/figma-ref'

const { selection, setSelection, loading } = useFigmaFrameSelection()

// 'selection' updates whenever the user changes their selection in Figma
// 'setSelection' can be used to programmatically change the selection:
setSelection('12:34')
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