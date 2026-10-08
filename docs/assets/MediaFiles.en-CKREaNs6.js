import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/media/Classes/MediaFiles - File Metadata Catalog and Path Verification`}),`
`,(0,c.jsx)(t.h1,{id:`mediafiles-class`,children:`MediaFiles Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`MediaFiles`}),` class is a `,(0,c.jsx)(t.strong,{children:`Primary Class (Static)`}),` that provides centralized file catalog lookups, MIME type matching, category-based neutral icon resolution, and path/URL detection. It acts as the core metadata provider for `,(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),`, integrating seamlessly with `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),` to deliver custom icons.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Comprehensive File Catalog`}),` — preconfigured metadata for 85+ file extensions, categories, and MIME types.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Intelligent Fallback Resolution`}),` — resolves files by extension, code, or MIME type, automatically falling back to category icons or the universal neutral file icon.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Category-level Neutral Icons`}),` — quickly retrieves generic icons representing entire file groups (e.g. `,(0,c.jsx)(t.code,{children:`image`}),`, `,(0,c.jsx)(t.code,{children:`video`}),`, `,(0,c.jsx)(t.code,{children:`document`}),`, `,(0,c.jsx)(t.code,{children:`table`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Path & URL Verification`}),` — detects whether an arbitrary string represents a file system path, relative link, or remote URL (`,(0,c.jsx)(t.code,{children:`isLink`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Custom Icon Integration`}),` — automatically enriches returned items with custom icons registered in `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`The class is static and does not require instantiation. All methods are invoked directly on `,(0,c.jsx)(t.code,{children:`MediaFiles`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`path-inspection`,children:`Path Inspection`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static isLink(path: string): boolean`}),` — determines whether the specified string is a file system path or a web URL (checks for `,(0,c.jsx)(t.code,{children:`/`}),`, `,(0,c.jsx)(t.code,{children:`\\`}),`, `,(0,c.jsx)(t.code,{children:`http://`}),`, `,(0,c.jsx)(t.code,{children:`https://`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`lookup--registry`,children:`Lookup & Registry`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get(code: string): MediaFileItem | undefined`}),` — retrieves the file metadata item by its extension or code, falling back to MIME matching or the default neutral item, with custom icons applied.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getByCategory(category: MediaFileCategory | MediaFileCategoryValue | string): MediaFileItem | undefined`}),` — returns a category-level neutral file configuration item matching the specified category or file code.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getByMime(mime: string): MediaFileItem | undefined`}),` — retrieves a file metadata item matching the given MIME type with custom icons applied.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getList(): MediaFileList`}),` — returns the complete array of all supported file configuration items.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getNeutral(): MediaFileItem | undefined`}),` — returns the universal default neutral file item with any registered custom icon applied.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`mediafilecategory`,children:`MediaFileCategory`}),`
`,(0,c.jsxs)(t.p,{children:[`Enum of supported file categories: `,(0,c.jsx)(t.code,{children:`archive`}),`, `,(0,c.jsx)(t.code,{children:`audio`}),`, `,(0,c.jsx)(t.code,{children:`code`}),`, `,(0,c.jsx)(t.code,{children:`config`}),`, `,(0,c.jsx)(t.code,{children:`database`}),`, `,(0,c.jsx)(t.code,{children:`document`}),`, `,(0,c.jsx)(t.code,{children:`executable`}),`, `,(0,c.jsx)(t.code,{children:`folder`}),`, `,(0,c.jsx)(t.code,{children:`font`}),`, `,(0,c.jsx)(t.code,{children:`image`}),`, `,(0,c.jsx)(t.code,{children:`presentation`}),`, `,(0,c.jsx)(t.code,{children:`system`}),`, `,(0,c.jsx)(t.code,{children:`table`}),`, `,(0,c.jsx)(t.code,{children:`text`}),`, `,(0,c.jsx)(t.code,{children:`vector`}),`, `,(0,c.jsx)(t.code,{children:`video`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafilegroup`,children:`MediaFileGroup`}),`
`,(0,c.jsx)(t.p,{children:`Enum of file item classification groups:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`neutral`}),` — universal fallback file icon.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category`}),` — generic category-level icon (e.g., generic image or document).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`standard`}),` — specific format or file extension icon (e.g., PNG, PDF, ZIP).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafileitem`,children:`MediaFileItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — unique file code or primary extension.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — human-readable display label.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extensions?: string[]`}),` — list of supported file extensions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime?: string`}),` — associated MIME type.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon?: string`}),` — resolved SVG icon markup or URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category?: MediaFileCategoryValue`}),` — file category enum value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: MediaFileGroupValue`}),` — classification group enum value.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafilelist`,children:`MediaFileList`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`MediaFileItem[]`}),` — array of all file configuration items.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFiles, MediaFileCategory } from '@dxtmisha/media'

// Check whether a string is a path/link
MediaFiles.isLink('https://example.com/assets/report.pdf') // true
MediaFiles.isLink('report.pdf') // false

// Find metadata by extension or format code
const pdf = MediaFiles.get('pdf')
console.log(pdf?.name) // 'PDF'
console.log(pdf?.category) // 'document'

// Retrieve a generic category icon item
const imageCategory = MediaFiles.getByCategory(MediaFileCategory.image)
console.log(imageCategory?.name) // 'Image'

// Retrieve by MIME type
const jsonFile = MediaFiles.getByMime('application/json')
console.log(jsonFile?.code) // 'json'

// Universal neutral fallback
const neutral = MediaFiles.getNeutral()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};