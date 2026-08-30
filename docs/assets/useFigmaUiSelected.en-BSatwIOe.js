import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/figma-ref/Composables/useFigmaUiSelected - Managing selected frames in UI`}),`
`,(0,c.jsx)(t.h1,{id:`usefigmauiselected`,children:(0,c.jsx)(t.code,{children:`useFigmaUiSelected`})}),`
`,(0,c.jsx)(t.p,{children:`A composable for managing and observing the list of frame identifiers selected by the user within the plugin's interface. It provides tools for checking selection state and toggling selections.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: ComputedRef<string[]>`}),` — A computed reference to the list of selected frame IDs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: ComputedRef<boolean>`}),` — A reactive flag indicating if the selection list is being fetched.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSelected(id: string): ComputedRef<boolean>`}),` — A helper function that returns a computed boolean indicating if a specific frame is selected.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toggleSelected(id: string, selected: boolean): void`}),` — A function to add or remove a frame from the selection list.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

const { selected, isSelected, toggleSelected } = useFigmaUiSelected()

// Check if a frame is selected
const active = isSelected('1:123')

// Toggle selection
toggleSelected('1:123', !active.value)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};