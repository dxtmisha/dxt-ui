import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/figma-ref/Composables/useFigmaUiSelected - Selected frames`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmauiselected`,children:(0,c.jsx)(n.code,{children:`useFigmaUiSelected`})}),`
`,(0,c.jsx)(n.p,{children:`Composable for managing and observing the list of selected frames in the Figma UI.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
An object with the following properties:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: ComputedRef<string[]>`}),` — A reactive list of selected frame IDs. Automatically updates when selection changes in Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: ComputedRef<boolean>`}),` — A reactive flag indicating whether the selection data is currently being fetched from the Figma plugin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelected(id: string): ComputedRef<boolean>`}),` — A function that returns a reactive boolean indicating if a specific frame ID is currently selected.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toggleSelected(id: string, selected: boolean): void`}),` — A function to update the selection state of a frame in Figma.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

const { selected, loading, isSelected, toggleSelected } = useFigmaUiSelected()

// Check if a specific frame is selected
const frameId = '123:456'
const isFrameSelected = isSelected(frameId)

// Toggle selection
const handleToggle = () => {
  toggleSelected(frameId, !isFrameSelected.value)
}

// Watch for selection changes
console.log('Currently selected IDs:', selected.value)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};