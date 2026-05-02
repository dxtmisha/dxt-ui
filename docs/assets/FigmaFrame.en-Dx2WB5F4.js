import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-code/Classes/FigmaFrame - Frame Manager`}),`
`,(0,c.jsx)(n.h1,{id:`figmaframe-class`,children:`FigmaFrame Class`}),`
`,(0,c.jsx)(n.p,{children:`A comprehensive utility for navigating and extracting data from Figma frames and sections. It supports recursive node analysis and grouping for both entire pages and active selections.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Context Sensitivity`}),` — Automatically handles logic differences between full page analysis and active selection.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Node Filtering`}),` — Specialized methods to retrieve only frames, sections, or text nodes from the hierarchy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Text Aggregation`}),` — Grouping of text nodes by content for easier translation and analysis.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bulk Export`}),` — Streamlined asynchronous screenshotting for all main items in the context.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`FigmaFrame(page, selection)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`page: UiFigmaNode`}),` — The root node (usually `,(0,c.jsx)(n.code,{children:`figma.currentPage`}),` or a `,(0,c.jsx)(n.code,{children:`PageNode`}),`) for analysis.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selection: boolean = false`}),` — If `,(0,c.jsx)(n.code,{children:`true`}),`, the instance will only process nodes within the current selection instead of the entire page.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaFrame } from '@dxtmisha/figma-code'

// 1. Initialize for the entire page
const pageManager = new FigmaFrame(figma.currentPage)

// 2. Initialize specifically for the active selection
const selectionManager = new FigmaFrame(figma.currentPage, true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`context--analysis`,children:`Context & Analysis`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelection(): boolean`}),` — Checks if work is limited to the active selection. Example: `,(0,c.jsx)(n.code,{children:`frameManager.isSelection()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMainFrames(): FigmaItem[]`}),` — Returns top-level frames/sections from the root. Example: `,(0,c.jsx)(n.code,{children:`const roots = frameManager.getMainFrames()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`hierarchy-filtering`,children:`Hierarchy Filtering`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsFrame(): FigmaItem<FrameNode>[]`}),` — Filters hierarchy for FRAME nodes. Example: `,(0,c.jsx)(n.code,{children:`const frames = frameManager.getItemsFrame()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsSection(): FigmaItem<SectionNode>[]`}),` — Filters hierarchy for SECTION nodes. Example: `,(0,c.jsx)(n.code,{children:`const sections = frameManager.getItemsSection()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsText(): FigmaItem<TextNode>[]`}),` — Filters hierarchy for TEXT nodes. Example: `,(0,c.jsx)(n.code,{children:`const textNodes = frameManager.getItemsText()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`data--capture`,children:`Data & Capture`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTexts(): UiFigmaItemText[]`}),` — Aggregates all text nodes grouped by content. Example: `,(0,c.jsx)(n.code,{children:`const groups = frameManager.getTexts()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`screenshot(): Promise<Uint8Array[]>`}),` — Captures JPG screenshots of all main items. Example: `,(0,c.jsx)(n.code,{children:`const images = await frameManager.screenshot()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`uifigmanode`,children:(0,c.jsx)(n.code,{children:`UiFigmaNode`})}),`
`,(0,c.jsx)(n.p,{children:`A union type representing any relevant Figma node that can contain children or be processed by the manager.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Includes: `,(0,c.jsx)(n.code,{children:`DocumentNode`}),`, `,(0,c.jsx)(n.code,{children:`PageNode`}),`, `,(0,c.jsx)(n.code,{children:`FrameNode`}),`, `,(0,c.jsx)(n.code,{children:`SectionNode`}),`, `,(0,c.jsx)(n.code,{children:`TextNode`}),`, and other `,(0,c.jsx)(n.code,{children:`SceneNode`}),` variants.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`uifigmaitemtext`,children:(0,c.jsx)(n.code,{children:`UiFigmaItemText`})}),`
`,(0,c.jsx)(n.p,{children:`An object structure used for grouping text content across the document.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string[]`}),` — A list of unique Figma node IDs where this exact text content is found.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string`}),` — The actual trimmed string content.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};