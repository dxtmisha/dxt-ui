import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/media/Classes/MediaFile - File Metadata and Icon Management`}),`
`,(0,c.jsx)(t.h1,{id:`mediafile-class`,children:`MediaFile Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`MediaFile`}),` class is a lightweight utility designed for parsing file paths, URLs, filenames, type codes, and `,(0,c.jsx)(t.code,{children:`File`}),` objects. It resolves SVG file icons, extracts file extensions and base names, and classifies files into categories (such as images, videos, documents, and archives) utilizing `,(0,c.jsx)(t.code,{children:`MediaFiles`}),` and `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Universal File Parsing`}),` — seamlessly handles `,(0,c.jsx)(t.code,{children:`File`}),` instances, full URLs with query parameters and hash fragments, absolute/relative paths, filenames, dotted extensions (`,(0,c.jsx)(t.code,{children:`.png`}),`), and plain type codes (`,(0,c.jsx)(t.code,{children:`png`}),`, `,(0,c.jsx)(t.code,{children:`pdf`}),`, `,(0,c.jsx)(t.code,{children:`7z`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SVG Icon Resolution`}),` — resolves SVG icon markup from the built-in library of 85+ vector file icons, falling back to category or generic neutral icons when unrecognized.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Custom Icon Support`}),` — automatically applies custom SVG icons registered in `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Categorization & Format Checks`}),` — provides instant category detection and boolean helpers (`,(0,c.jsx)(t.code,{children:`isImage`}),`, `,(0,c.jsx)(t.code,{children:`isVideo`}),`, `,(0,c.jsx)(t.code,{children:`isDocument`}),`, `,(0,c.jsx)(t.code,{children:`isStandard`}),`, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Zero Runtime Dependencies`}),` — pure string manipulation and catalog lookups, fully isomorphic and safe for SSR.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Create an instance by providing a `,(0,c.jsx)(t.code,{children:`File`}),` object, file link, URL, filename, or file type code, with an optional MIME type override:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFile } from '@dxtmisha/media'

// From full URL
const fileFromUrl = new MediaFile('https://example.com/assets/report.pdf?v=2#page=1')

// From filename
const fileFromName = new MediaFile('archive.tar.gz')

// From extension or type code
const fileFromCode = new MediaFile('png')

// From browser File object
const fileFromInput = new MediaFile(uploadedFile)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`baseName: string`}),` — returns the filename without its extension (e.g. `,(0,c.jsx)(t.code,{children:`'archive.tar'`}),` for `,(0,c.jsx)(t.code,{children:`'archive.tar.gz'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category: MediaFileCategory | undefined`}),` — returns the file category enum value (e.g. `,(0,c.jsx)(t.code,{children:`'image'`}),`, `,(0,c.jsx)(t.code,{children:`'video'`}),`, `,(0,c.jsx)(t.code,{children:`'document'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extension: string`}),` — returns the normalized lowercase file extension without a dot (e.g. `,(0,c.jsx)(t.code,{children:`'png'`}),`, `,(0,c.jsx)(t.code,{children:`'pdf'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extensions: string[] | undefined`}),` — returns the list of supported extensions associated with the file format.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`file: File | undefined`}),` — returns the underlying browser `,(0,c.jsx)(t.code,{children:`File`}),` object if the instance was created with one.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group: MediaFileGroup | undefined`}),` — returns the classification group of the file item (`,(0,c.jsx)(t.code,{children:`neutral`}),`, `,(0,c.jsx)(t.code,{children:`category`}),`, `,(0,c.jsx)(t.code,{children:`standard`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon: string`}),` — returns the resolved SVG icon markup string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: MediaFileItem | undefined`}),` — returns the complete metadata item from the file catalog.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime: string | undefined`}),` — returns the detected or explicit MIME type.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — returns the full filename extracted from the path or URL (stripped of query parameters and hash fragments).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`category--classification-checks`,children:`Category & Classification Checks`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isArchive(): boolean`}),` — returns `,(0,c.jsx)(t.code,{children:`true`}),` if the file belongs to the archive category (`,(0,c.jsx)(t.code,{children:`zip`}),`, `,(0,c.jsx)(t.code,{children:`rar`}),`, `,(0,c.jsx)(t.code,{children:`7z`}),`, `,(0,c.jsx)(t.code,{children:`tar`}),`, `,(0,c.jsx)(t.code,{children:`gz`}),`, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isAudio(): boolean`}),` — returns `,(0,c.jsx)(t.code,{children:`true`}),` if the file belongs to the audio category (`,(0,c.jsx)(t.code,{children:`mp3`}),`, `,(0,c.jsx)(t.code,{children:`wav`}),`, `,(0,c.jsx)(t.code,{children:`flac`}),`, `,(0,c.jsx)(t.code,{children:`aac`}),`, `,(0,c.jsx)(t.code,{children:`ogg`}),`, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isCategory(): boolean`}),` — returns `,(0,c.jsx)(t.code,{children:`true`}),` if the file represents a category-level neutral icon.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isCode(): boolean`}),` — returns `,(0,c.jsx)(t.code,{children:`true`}),` if the file is source code or a data file (`,(0,c.jsx)(t.code,{children:`ts`}),`, `,(0,c.jsx)(t.code,{children:`js`}),`, `,(0,c.jsx)(t.code,{children:`json`}),`, `,(0,c.jsx)(t.code,{children:`html`}),`, `,(0,c.jsx)(t.code,{children:`css`}),`, `,(0,c.jsx)(t.code,{children:`py`}),`, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDocument(): boolean`}),` — returns `,(0,c.jsx)(t.code,{children:`true`}),` if the file is a document (`,(0,c.jsx)(t.code,{children:`pdf`}),`, `,(0,c.jsx)(t.code,{children:`doc`}),`, `,(0,c.jsx)(t.code,{children:`docx`}),`, `,(0,c.jsx)(t.code,{children:`odt`}),`, `,(0,c.jsx)(t.code,{children:`rtf`}),`, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isImage(): boolean`}),` — returns `,(0,c.jsx)(t.code,{children:`true`}),` if the file is an image (`,(0,c.jsx)(t.code,{children:`png`}),`, `,(0,c.jsx)(t.code,{children:`jpg`}),`, `,(0,c.jsx)(t.code,{children:`jpeg`}),`, `,(0,c.jsx)(t.code,{children:`gif`}),`, `,(0,c.jsx)(t.code,{children:`svg`}),`, `,(0,c.jsx)(t.code,{children:`webp`}),`, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isNeutral(): boolean`}),` — returns `,(0,c.jsx)(t.code,{children:`true`}),` if the file represents the universal default neutral file icon.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isPresentation(): boolean`}),` — returns `,(0,c.jsx)(t.code,{children:`true`}),` if the file is a presentation (`,(0,c.jsx)(t.code,{children:`ppt`}),`, `,(0,c.jsx)(t.code,{children:`pptx`}),`, `,(0,c.jsx)(t.code,{children:`odp`}),`, `,(0,c.jsx)(t.code,{children:`presentation`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isStandard(): boolean`}),` — returns `,(0,c.jsx)(t.code,{children:`true`}),` if the file represents a standard specific file format or extension.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isTable(): boolean`}),` — returns `,(0,c.jsx)(t.code,{children:`true`}),` if the file is a spreadsheet or tabular data (`,(0,c.jsx)(t.code,{children:`xls`}),`, `,(0,c.jsx)(t.code,{children:`xlsx`}),`, `,(0,c.jsx)(t.code,{children:`csv`}),`, `,(0,c.jsx)(t.code,{children:`ods`}),`, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isVideo(): boolean`}),` — returns `,(0,c.jsx)(t.code,{children:`true`}),` if the file is a video (`,(0,c.jsx)(t.code,{children:`mp4`}),`, `,(0,c.jsx)(t.code,{children:`webm`}),`, `,(0,c.jsx)(t.code,{children:`mkv`}),`, `,(0,c.jsx)(t.code,{children:`avi`}),`, `,(0,c.jsx)(t.code,{children:`mov`}),`, etc.).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`mediafilecategory`,children:`MediaFileCategory`}),`
`,(0,c.jsxs)(t.p,{children:[`Enum representing file categories: `,(0,c.jsx)(t.code,{children:`archive`}),`, `,(0,c.jsx)(t.code,{children:`audio`}),`, `,(0,c.jsx)(t.code,{children:`code`}),`, `,(0,c.jsx)(t.code,{children:`config`}),`, `,(0,c.jsx)(t.code,{children:`database`}),`, `,(0,c.jsx)(t.code,{children:`document`}),`, `,(0,c.jsx)(t.code,{children:`executable`}),`, `,(0,c.jsx)(t.code,{children:`folder`}),`, `,(0,c.jsx)(t.code,{children:`font`}),`, `,(0,c.jsx)(t.code,{children:`image`}),`, `,(0,c.jsx)(t.code,{children:`presentation`}),`, `,(0,c.jsx)(t.code,{children:`system`}),`, `,(0,c.jsx)(t.code,{children:`table`}),`, `,(0,c.jsx)(t.code,{children:`text`}),`, `,(0,c.jsx)(t.code,{children:`vector`}),`, `,(0,c.jsx)(t.code,{children:`video`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafilegroup`,children:`MediaFileGroup`}),`
`,(0,c.jsxs)(t.p,{children:[`Enum representing file item groups: `,(0,c.jsx)(t.code,{children:`neutral`}),`, `,(0,c.jsx)(t.code,{children:`category`}),`, `,(0,c.jsx)(t.code,{children:`standard`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafileitem`,children:`MediaFileItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — unique file code or primary extension.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — human-readable file format label.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extensions?: string[]`}),` — list of supported file extensions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime?: string`}),` — primary MIME type.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon?: string`}),` — SVG icon markup.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category?: MediaFileCategoryValue`}),` — file category enum value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: MediaFileGroupValue`}),` — classification group enum value.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFile, MediaFileCategory } from '@dxtmisha/media'

const file = new MediaFile('https://domain.com/downloads/invoice.2026.pdf?download=true#top')

console.log(file.name) // 'invoice.2026.pdf'
console.log(file.baseName) // 'invoice.2026'
console.log(file.extension) // 'pdf'
console.log(file.category) // MediaFileCategory.document
console.log(file.isDocument()) // true
console.log(file.isImage()) // false

// SVG icon markup ready for rendering
const svgString = file.icon
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};