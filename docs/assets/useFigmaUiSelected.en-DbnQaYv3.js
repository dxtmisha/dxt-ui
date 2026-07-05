import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-ref/Composables/useFigmaUiSelected - Managing selected frames in UI`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmauiselected`,children:(0,c.jsx)(n.code,{children:`useFigmaUiSelected`})}),`
`,(0,c.jsx)(n.p,{children:`A composable for managing and observing the list of frame identifiers selected by the user within the plugin's interface. It provides tools for checking selection state and toggling selections.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: ComputedRef<string[]>`}),` — A computed reference to the list of selected frame IDs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: ComputedRef<boolean>`}),` — A reactive flag indicating if the selection list is being fetched.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelected(id: string): ComputedRef<boolean>`}),` — A helper function that returns a computed boolean indicating if a specific frame is selected.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toggleSelected(id: string, selected: boolean): void`}),` — A function to add or remove a frame from the selection list.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

const { selected, isSelected, toggleSelected } = useFigmaUiSelected()

// Check if a frame is selected
const active = isSelected('1:123')

// Toggle selection
toggleSelected('1:123', !active.value)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};