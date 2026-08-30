import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/figma-code/Classes/FigmaTopLevelFrames - Managing top-level frames`}),`
`,(0,c.jsxs)(t.h1,{id:`class-figmatoplevelframes`,children:[`Class `,(0,c.jsx)(t.code,{children:`FigmaTopLevelFrames`})]}),`
`,(0,c.jsx)(t.p,{children:`A static utility class for managing and synchronizing the list of top-level frames and sections on the current Figma page. It formats the nodes into a simplified list for display in the plugin's UI.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated List Generation`}),` — Automatically identifies frames and sections at the root of the current page.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Visual Data`}),` — Exports JPG screenshots for each frame to provide a visual preview in the UI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Message Integration`}),` — The `,(0,c.jsx)(t.code,{children:`send()`}),` method sets up listeners to automatically respond to UI requests for the frame list.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:`Since this is a static class, no instantiation is required. Typically, you only need to call the communication setup in your main plugin file.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaTopLevelFrames } from '@dxtmisha/figma-code'

// Setup listener for UI requests
FigmaTopLevelFrames.send()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`data-retrieval`,children:`Data Retrieval`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get(): Promise<UiFigmaFramesList>`}),` — Retrieves, formats, and caches the list of top-level frames.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`communication`,children:`Communication`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static send(): void`}),` — Initializes `,(0,c.jsx)(t.code,{children:`FigmaPluginMessenger`}),` listeners to handle frame list requests from the UI.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`data-types`,children:`Data Types`}),`
`,(0,c.jsx)(t.h4,{id:`uifigmaframeslist`,children:(0,c.jsx)(t.code,{children:`UiFigmaFramesList`})}),`
`,(0,c.jsx)(t.p,{children:`An array of objects representing top-level frames.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — The frame's name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — The frame's unique ID.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: Uint8Array | string`}),` — The exported JPG screenshot of the frame.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};