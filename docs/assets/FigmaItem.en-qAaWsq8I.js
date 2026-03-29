import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/figma-code/Classes/FigmaItem - Node Wrapper`}),`
`,(0,c.jsx)(n.h1,{id:`figmaitem-class`,children:`FigmaItem Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A wrapper class for Figma nodes (`,(0,c.jsx)(n.code,{children:`UiFigmaNode`}),`) that provides a simplified, typed interface for common operations such as type checking, tree navigation, and asynchronous export.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Typed Access`}),` — Provides type guard methods for `,(0,c.jsx)(n.code,{children:`DOCUMENT`}),`, `,(0,c.jsx)(n.code,{children:`FRAME`}),`, `,(0,c.jsx)(n.code,{children:`SECTION`}),`, and `,(0,c.jsx)(n.code,{children:`TEXT`}),` nodes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Simplified Navigation`}),` — Easily access parent or child nodes wrapped in `,(0,c.jsx)(n.code,{children:`FigmaItem`}),` instances.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Export Hook`}),` — High-level methods for exporting nodes to JPG or JSON formats.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Content Analysis`}),` — Specialized logic for extracting and validating text content.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`FigmaItem(item)`}),` constructor.`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsx)(n.p,{children:`The class supports a generic parameter for strict typing:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T extends UiFigmaNode`}),` — The specific type of the wrapped Figma node.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: T`}),` — The native Figma node (e.g., `,(0,c.jsx)(n.code,{children:`SceneNode`}),`, `,(0,c.jsx)(n.code,{children:`FrameNode`}),`, `,(0,c.jsx)(n.code,{children:`TextNode`}),`) to be wrapped.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaItem } from '@dxtmisha/figma-code'

// 1. Wrapping a selected node
const item = new FigmaItem(figma.currentPage.selection[0])

// 2. Using generics for specific node types
const frameItem = new FigmaItem<FrameNode>(someFrameNode)
`})}),`
`,(0,c.jsx)(n.h2,{id:`identification`,children:`Identification`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDocument(): boolean`}),` — Checks if the wrapped node is a `,(0,c.jsx)(n.code,{children:`DOCUMENT`}),`. Example: `,(0,c.jsx)(n.code,{children:`item.isDocument()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFrame(): boolean`}),` — Checks if the wrapped node is a `,(0,c.jsx)(n.code,{children:`FRAME`}),`. Example: `,(0,c.jsx)(n.code,{children:`item.isFrame()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSection(): boolean`}),` — Checks if the wrapped node is a `,(0,c.jsx)(n.code,{children:`SECTION`}),`. Example: `,(0,c.jsx)(n.code,{children:`item.isSection()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isText(): boolean`}),` — Checks if the wrapped node is a `,(0,c.jsx)(n.code,{children:`TEXT`}),` node. Example: `,(0,c.jsx)(n.code,{children:`item.isText()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isTextNoValue(): boolean`}),` — Filters for text nodes with meaningful content. Example: `,(0,c.jsx)(n.code,{children:`item.isTextNoValue()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getType(): string | undefined`}),` — Returns the string type constant of the node. Example: `,(0,c.jsx)(n.code,{children:`const type = item.getType()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getId(): string`}),` — Returns the unique ID of the node. Example: `,(0,c.jsx)(n.code,{children:`const id = item.getId()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(): string`}),` — Returns the display name of the node. Example: `,(0,c.jsx)(n.code,{children:`const name = item.getName()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`navigation`,children:`Navigation`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParent(): UiFigmaNode | undefined`}),` — Returns the raw parent node. Example: `,(0,c.jsx)(n.code,{children:`const parent = item.getParent()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParentItem(): FigmaItem | undefined`}),` — Returns the wrapped parent. Example: `,(0,c.jsx)(n.code,{children:`const parentItem = item.getParentItem()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChildren(): UiFigmaNode[]`}),` — Returns an array of raw child nodes. Example: `,(0,c.jsx)(n.code,{children:`const children = item.getChildren()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChildrenItems(): FigmaItem[]`}),` — Returns an array of wrapped child nodes. Example: `,(0,c.jsx)(n.code,{children:`const items = item.getChildrenItems()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`data--export`,children:`Data & Export`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): T`}),` — Returns the raw underlying Figma node. Example: `,(0,c.jsx)(n.code,{children:`const raw = item.get()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJpg(): Promise<Uint8Array | string>`}),` — Asynchronously exports the node in JPG format. Example: `,(0,c.jsx)(n.code,{children:`const bytes = await item.exportJpg()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJson(): Promise<Uint8Array | string>`}),` — Asynchronously exports the node in JSON format. Example: `,(0,c.jsx)(n.code,{children:`const json = await item.exportJson()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getText(): string`}),` — Retrieves the trimmed text content from the node. Example: `,(0,c.jsx)(n.code,{children:`const content = item.getText()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`uifigmanode`,children:(0,c.jsx)(n.code,{children:`UiFigmaNode`})}),`
`,(0,c.jsxs)(n.p,{children:[`A union type representing any relevant Figma node that can be wrapped by `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Includes: `,(0,c.jsx)(n.code,{children:`DocumentNode`}),`, `,(0,c.jsx)(n.code,{children:`PageNode`}),`, `,(0,c.jsx)(n.code,{children:`FrameNode`}),`, `,(0,c.jsx)(n.code,{children:`SectionNode`}),`, `,(0,c.jsx)(n.code,{children:`TextNode`}),`, and other `,(0,c.jsx)(n.code,{children:`SceneNode`}),` variants.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`uifigmaexportformat`,children:(0,c.jsx)(n.code,{children:`UiFigmaExportFormat`})}),`
`,(0,c.jsx)(n.p,{children:`Supported formats for node export operations.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Values: `,(0,c.jsx)(n.code,{children:`'PNG'`}),`, `,(0,c.jsx)(n.code,{children:`'JPG'`}),`, `,(0,c.jsx)(n.code,{children:`'SVG'`}),`, `,(0,c.jsx)(n.code,{children:`'PDF'`}),`, `,(0,c.jsx)(n.code,{children:`'JSON_REST_V1'`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};