import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-code/Classes/FigmaItem - Figma node wrapper`}),`
`,(0,c.jsxs)(n.h1,{id:`class-figmaitem`,children:[`Class `,(0,c.jsx)(n.code,{children:`FigmaItem`})]}),`
`,(0,c.jsx)(n.p,{children:`A versatile wrapper class for interacting with any type of Figma node. It provides typed methods for type checking, tree navigation, and common operations such as exporting and viewport management.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type Safety`}),` — Utilizes Type Guards (`,(0,c.jsx)(n.code,{children:`isFrame`}),`, `,(0,c.jsx)(n.code,{children:`isText`}),`, etc.) for safe access to properties specific to certain node types.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Fluent Navigation`}),` — Convenient methods for retrieving parent elements or child nodes already wrapped in `,(0,c.jsx)(n.code,{children:`FigmaItem`}),` instances.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Integrated Actions`}),` — Built-in support for exporting nodes to JPG/JSON and controlling the Figma viewport (selection and zoom).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Wrap any Figma node in a `,(0,c.jsx)(n.code,{children:`FigmaItem`}),` instance to access its helper methods.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaItem } from '@dxtmisha/figma-code'

// Wrap a node (e.g., from selection)
const item = new FigmaItem(figma.currentPage.selection[0])

if (item.isFrame()) {
  console.log('Node is a frame:', item.getName())
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`type-guards`,children:`Type Guards`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDocument(): boolean`}),` — Checks if the node is a Document.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFrame(): boolean`}),` — Checks if the node is a Frame.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSection(): boolean`}),` — Checks if the node is a Section.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isText(): boolean`}),` — Checks if the node is a Text node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isTextNoValue(): boolean`}),` — Checks if the node is a text node with meaningful content.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`inCurrentPage(): boolean`}),` — Checks if the node belongs to the current active page.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`hierarchy-and-navigation`,children:`Hierarchy and Navigation`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): T`}),` — Returns the original Figma node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParent(): UiFigmaNode | undefined`}),` — Returns the original parent node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParentItem(): FigmaItem | undefined`}),` — Returns the parent node wrapped in `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParentPage(): PageNode | undefined`}),` — Returns the parent page of the node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParentPageItem(): FigmaItem | undefined`}),` — Returns the parent page wrapped in `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChildren(): UiFigmaNode[]`}),` — Returns the list of child nodes in original format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChildrenItems(): FigmaItem[]`}),` — Returns all child nodes wrapped in `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`content-and-information`,children:`Content and Information`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getId(): string`}),` — Returns the unique identifier of the node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(): string`}),` — Returns the name of the node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getType(): string`}),` — Returns the node type string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getText(): string`}),` — Returns the text content (for text nodes only).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInfo(): Promise<UiFigmaFramesItem>`}),` — Asynchronously collects basic node information (name, ID, screenshot).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCss(): Promise<Record<string, string>>`}),` — Asynchronously extracts CSS styles of the node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStyles(): Promise<UiFigmaFrameStylesItem>`}),` — Asynchronously extracts extended style information (CSS, text, JSON).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`export-and-actions`,children:`Export and Actions`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJpg(): Promise<Uint8Array>`}),` — Exports the node as a JPG image.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJson(): Promise<any>`}),` — Exports full node data in JSON format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJsonCompact(): Promise<UiFigmaFrameStylesData | undefined>`}),` — Exports node data in a compact JSON format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toSelection(): void`}),` — Selects the node and focuses the viewport on it.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toPageAndSelection(): Promise<void>`}),` — Switches to the node's page and selects it.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`data-types`,children:`Data Types`}),`
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
`,(0,c.jsx)(n.h4,{id:`uifigmaframestylesjson`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesJson`})}),`
`,(0,c.jsx)(n.p,{children:`Compact representation of a Figma node for JSON export.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Unique identifier of the node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Name of the node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Type of the node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`characters?: string`}),` — Text (for text nodes).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children?: UiFigmaFrameStylesJson[]`}),` — Recursive list of child elements.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Record<string, any>`}),` — Appearance parameters.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styles?: Record<string, any>`}),` — Associated styles.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};