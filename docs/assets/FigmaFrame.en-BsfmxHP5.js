import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-code/Classes/FigmaFrame - Analyzing Figma structure`}),`
`,(0,c.jsxs)(n.h1,{id:`class-figmaframe`,children:[`Class `,(0,c.jsx)(n.code,{children:`FigmaFrame`})]}),`
`,(0,c.jsx)(n.p,{children:`A utility class for analyzing and interacting with the structure of Figma pages or selections. It recursively scans node trees, filters elements by type, and provides helper methods for text extraction and screenshot generation.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Scanning`}),` — Automatically indexes all nested elements within the provided context (page or selection).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Selection Support`}),` — Can be initialized to target either the entire document page or only the user's current selection.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Text Aggregation`}),` — The `,(0,c.jsx)(n.code,{children:`getTexts()`}),` method groups identical text strings together, providing a list of unique values and their associated node IDs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Export`}),` — Simplifies the process of generating screenshots for main elements within the frame.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`Create a new instance by providing a starting node (usually a page) and specifying if it should focus on the selection.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaFrame } from '@dxtmisha/figma-code'

// Analyze the entire current page
const frameAnalyzer = new FigmaFrame(figma.currentPage)

// Analyze only the selected items
const selectionAnalyzer = new FigmaFrame(figma.currentPage, true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`state-and-navigation`,children:`State and Navigation`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelection(): boolean`}),` — Checks if the analyzer was initialized to work with the user's current selection.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMainFrames(): FigmaItem[]`}),` — Extracts the main frames or sections from the root of the current context.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`filtering-and-selection`,children:`Filtering and Selection`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsFrame(): FigmaItem<FrameNode>[]`}),` — Returns a list of all nested nodes that are frames.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsSection(): FigmaItem<SectionNode>[]`}),` — Returns a list of all nested nodes that are sections.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsText(): FigmaItem<TextNode>[]`}),` — Returns a list of all nested text nodes.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`content-and-information`,children:`Content and Information`}),`
`,(0,c.jsx)(n.h4,{id:`getitemsinfo`,children:(0,c.jsx)(n.code,{children:`getItemsInfo`})}),`
`,(0,c.jsx)(n.p,{children:`Asynchronously collects detailed information (name, ID, screenshot) for all items in the frame.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFramesList>`}),` — A promise with a list of item information.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const infoList: UiFigmaFramesList = await frame.getItemsInfo()
/*
[
  { id: '1:10', name: 'Button', image: Uint8Array[...] },
  { id: '1:25', name: 'Card', image: 'data:image/png;base64...' }
]
*/
`})}),`
`,(0,c.jsx)(n.h4,{id:`getmainitemsinfo`,children:(0,c.jsx)(n.code,{children:`getMainItemsInfo`})}),`
`,(0,c.jsx)(n.p,{children:`Asynchronously collects detailed information only for the main (top-level) elements.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFramesList>`}),` — A promise with a list of main item information.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const mainInfoList: UiFigmaFramesList = await frame.getMainItemsInfo()
/*
[
  { id: '1:10', name: 'Login Screen', image: Uint8Array[...] }
]
*/
`})}),`
`,(0,c.jsx)(n.h4,{id:`gettexts`,children:(0,c.jsx)(n.code,{children:`getTexts`})}),`
`,(0,c.jsx)(n.p,{children:`Groups text nodes by their content, returning unique strings and a list of corresponding node IDs.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`UiFigmaItemText[]`}),` — An array of grouped text items.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const groupedTexts: UiFigmaItemText[] = frame.getTexts()
/*
[
  { id: ['1:10', '1:15'], text: 'Submit' },
  { id: ['1:20'], text: 'Cancel' }
]
*/
`})}),`
`,(0,c.jsx)(n.h3,{id:`styles-analysis`,children:`Styles Analysis`}),`
`,(0,c.jsx)(n.h4,{id:`getitemscss`,children:(0,c.jsx)(n.code,{children:`getItemsCss`})}),`
`,(0,c.jsx)(n.p,{children:`Generates a map of CSS styles for all items in the frame.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFrameStylesCssList>`}),` — A promise with a style map indexed by node ID.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const cssStyles: UiFigmaFrameStylesCssList = await frame.getItemsCss()
/*
{
  '1:10': { 'color': '#ff0000', 'font-size': '14px' },
  '1:12': { 'background': '#ffffff', 'padding': '10px' }
}
*/
`})}),`
`,(0,c.jsx)(n.h4,{id:`getitemsstyles`,children:(0,c.jsx)(n.code,{children:`getItemsStyles`})}),`
`,(0,c.jsx)(n.p,{children:`Extracts full style data (document JSON structure, text, CSS) for all items.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFrameStylesList>`}),` — A promise with a list of extended style data.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const stylesList: UiFigmaFrameStylesList = await frame.getItemsStyles()
/*
[
  { 
    id: '1:10', 
    name: 'Label', 
    text: 'Username', 
    styles: { 'color': '#333' },
    json: { document: {...}, styles: {...} }
  }
]
*/
`})}),`
`,(0,c.jsx)(n.h4,{id:`getmainitemsstyles`,children:(0,c.jsx)(n.code,{children:`getMainItemsStyles`})}),`
`,(0,c.jsx)(n.p,{children:`Extracts full style data only for the main elements, including styles of their children.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFrameStylesList>`}),` — A promise with a list of extended style data for main elements.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const mainStylesList: UiFigmaFrameStylesList = await frame.getMainItemsStyles()
/*
[
  { 
    id: '1:10', 
    name: 'Login Form', 
    childrenStyles: {
       '1:11': { 'color': '#000' },
       '1:12': { 'margin-top': '20px' }
    }
  }
]
*/
`})}),`
`,(0,c.jsx)(n.h3,{id:`actions-and-export`,children:`Actions and Export`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`screenshot(): Promise<Uint8Array[]>`}),` — Creates screenshots in JPG format for all main elements.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`data-types`,children:`Data Types`}),`
`,(0,c.jsx)(n.h4,{id:`uifigmanode`,children:(0,c.jsx)(n.code,{children:`UiFigmaNode`})}),`
`,(0,c.jsxs)(n.p,{children:[`The base type for Figma nodes. It represents a union of nodes (`,(0,c.jsx)(n.code,{children:`SceneNode | DocumentNode | PageNode | FrameNode`}),`, etc.) that support nesting and standard Figma API properties.`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaitemtext`,children:(0,c.jsx)(n.code,{children:`UiFigmaItemText`})}),`
`,(0,c.jsx)(n.p,{children:`The result of grouping text layers by their content.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string[]`}),` — An array of unique node identifiers that have the same text.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string`}),` — The actual text string.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmamessagetexts`,children:(0,c.jsx)(n.code,{children:`UiFigmaMessageTexts`})}),`
`,(0,c.jsx)(n.p,{children:`A data structure for transmitting text analysis results.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`frame: FigmaFrame`}),` — An instance of the analyzer class.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`texts: UiFigmaItemText[]`}),` — A list of found and grouped text items.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`screenshot: Uint8Array[]`}),` — An array of screenshots for the main elements.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframesitem`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`})}),`
`,(0,c.jsx)(n.p,{children:`Simplified information about an element for display in the interface.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — The name of the element in Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — The unique identifier of the node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image?: Uint8Array | string`}),` — A screenshot of the element (binary data or base64).`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestylesitem`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Extended information about an element, including its styles. Inherits all fields from `,(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`json?: UiFigmaFrameStylesData`}),` — Node data and styles structure in JSON format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text?: string`}),` — Text content (if the node is a text node).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styles?: Record<string, string>`}),` — An object with CSS properties of the element itself.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`childrenStyles?: Record<string, Record<string, string>>`}),` — A map of CSS styles for all child elements, indexed by their ID.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestylesdata`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesData`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`document: UiFigmaFrameStylesJson`}),` — Node tree in a compact format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styles: Record<string, any>`}),` — A dictionary of document style definitions.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestyleslist`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesList`})}),`
`,(0,c.jsxs)(n.p,{children:[`An array of `,(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesItem`}),` objects.`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestylescsslist`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesCssList`})}),`
`,(0,c.jsxs)(n.p,{children:[`An object (`,(0,c.jsx)(n.code,{children:`Record<string, Record<string, string>>`}),`) where the key is the node ID and the value is its set of CSS styles.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};