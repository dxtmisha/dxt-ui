import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-code/Classes/FigmaTopLevelFrames - Top-Level Frame Management`}),`
`,(0,c.jsx)(n.h1,{id:`figmatoplevelframes-class`,children:`FigmaTopLevelFrames Class`}),`
`,(0,c.jsx)(n.p,{children:`A static utility class for managing, caching, and communicating the list of top-level frames within the Figma plugin environment. It bridges the gap between the Figma document structure and the plugin UI via a dedicated messenger.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Caching`}),` — Efficiently manages a singleton-like cache of formatted frame data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Messenger Integration`}),` — Simplifies bidirectional communication between the plugin and the UI regarding frame lists.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Node Processing`}),` — Leverages `,(0,c.jsx)(n.code,{children:`FigmaFrame`}),` to extract and format core node properties (ID, name, JPG export) for UI display.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`static-methods`,children:`Static Methods`}),`
`,(0,c.jsx)(n.h3,{id:`getlistdata`,children:(0,c.jsx)(n.code,{children:`getListData`})}),`
`,(0,c.jsx)(n.p,{children:`Retrieves and caches the formatted list of top-level frames. It processes each main frame from the current page, extracting its ID, name, and exporting it to a JPG format.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFramesList>`}),` — A promise that resolves to the array of formatted frame data.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const frames = await FigmaTopLevelFrames.getListData()
`})}),`
`,(0,c.jsx)(n.h3,{id:`send`,children:(0,c.jsx)(n.code,{children:`send`})}),`
`,(0,c.jsxs)(n.p,{children:[`Sets up a listener for frame requests using the plugin messenger. When the `,(0,c.jsx)(n.code,{children:`UI_FIGMA_FRAMES_POST_NAME`}),` message is received from the UI, it automatically fetches the latest data and posts it back.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`FigmaTopLevelFrames.send()
`})}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`uifigmaframeslist`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesList`})}),`
`,(0,c.jsx)(n.p,{children:`An array of objects representing the processed frame data for the UI.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Unique Figma node ID.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Display name of the frame.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: Uint8Array | string`}),` — Exported JPG data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: FigmaItem`}),` — The wrapped `,(0,c.jsx)(n.code,{children:`FigmaItem`}),` instance for further operations.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};