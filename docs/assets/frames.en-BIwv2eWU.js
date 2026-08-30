import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/3. Figma/2. Working with Frames`}),`
`,(0,c.jsx)(t.h1,{id:`working-with-frames`,children:`Working with Frames`}),`
`,(0,c.jsx)(t.p,{children:`The library provides tools for managing the list of frames on the current Figma page and tracking selected elements. This allows you to build complex navigation interfaces and bulk selection systems within your plugin.`}),`
`,(0,c.jsx)(t.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(t.p,{children:`For automatic frame data synchronization, the corresponding handlers must be initialized on the plugin side.`}),`
`,(0,c.jsx)(t.h3,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaTopLevelFrames, FigmaFramesSelected } from '@dxtmisha/figma-code'

// Activate listeners for frame list and selection management
FigmaTopLevelFrames.send()
FigmaFramesSelected.send()
`})}),`
`,(0,c.jsx)(t.h2,{id:`interface-ui--iframe`,children:`Interface (UI / Iframe)`}),`
`,(0,c.jsx)(t.p,{children:`Data about all frames on the page and tools for managing the plugin's internal selection list are available in the interface.`}),`
`,(0,c.jsx)(t.h3,{id:`page-frame-list-vue`,children:`Page Frame List (Vue)`}),`
`,(0,c.jsx)(t.p,{children:`Allows you to retrieve a list of all frames and sections at the root of the current page with screenshots.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaUiFrames } from '@dxtmisha/figma-ref'

const { frames, loading } = useFigmaUiFrames()

/* frames.value contains a list of objects:
  {
    id: string,
    name: string,
    image: Uint8Array | string // JPG screenshot
  }
*/
`})}),`
`,(0,c.jsx)(t.h3,{id:`plugin-selected-elements-vue`,children:`Plugin Selected Elements (Vue)`}),`
`,(0,c.jsx)(t.p,{children:`A mechanism for tracking and modifying the list of "selected" elements within the plugin's interface. This state is preserved globally at the plugin session level.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

const { 
  selected,       // List of selected frame IDs
  isSelected,     // Check function: isSelected(id)
  toggleSelected, // Toggle function: toggleSelected(id, boolean)
} = useFigmaUiSelected()

// Example usage:
const active = isSelected('1:123')
const toggle = () => toggleSelected('1:123', !active.value)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};