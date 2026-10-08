import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/media/Classes/MediaFileIcon - Custom File Icon Registry`}),`
`,(0,c.jsx)(t.h1,{id:`mediafileicon-class`,children:`MediaFileIcon Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),` class is a `,(0,c.jsx)(t.strong,{children:`Primary Class (Static)`}),` designed for managing the registration, storage, normalization, and application of custom SVG icons for file extensions and type codes. It serves as the centralized icon registry utilized by `,(0,c.jsx)(t.code,{children:`MediaFiles`}),` and `,(0,c.jsx)(t.code,{children:`MediaFile`}),` to override default vector icons across the design system.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Static Registry`}),` — maintains an in-memory dictionary of custom SVG markup mapped to normalized file codes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Code Normalization`}),` — trims whitespace and converts codes to lowercase (`,(0,c.jsx)(t.code,{children:`toCode`}),`) ensuring case-insensitive lookups.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Single & Batch Registration`}),` — provides convenient methods for registering individual icons (`,(0,c.jsx)(t.code,{children:`add`}),`) or importing dictionaries in bulk (`,(0,c.jsx)(t.code,{children:`addList`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Seamless Item Enrichment`}),` — safely attaches custom icons to `,(0,c.jsx)(t.code,{children:`MediaFileItem`}),` metadata objects via `,(0,c.jsx)(t.code,{children:`toItem`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Zero Runtime Dependencies`}),` — pure string and dictionary operations, fully isomorphic and safe for SSR.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`The class is static and does not require instantiation. All methods are invoked directly on `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`registry--management`,children:`Registry & Management`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static has(code: string): boolean`}),` — checks whether a custom icon is registered for the specified file code or extension.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get(code: string): string | undefined`}),` — returns the custom SVG icon string for the specified code or extension, or `,(0,c.jsx)(t.code,{children:`undefined`}),` if not registered.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static add(code: string, icon: string): void`}),` — registers a custom SVG icon string for a specific file code or extension.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static addList(icons: MediaFileIcons): void`}),` — registers multiple custom SVG icons in batch from a dictionary.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`normalization--item-transform`,children:`Normalization & Item Transform`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static toCode(code: string): string`}),` — normalizes a file code or extension by trimming whitespace and converting to lowercase.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static toItem(item?: MediaFileItem): MediaFileItem | undefined`}),` — clones the provided file item and overrides its `,(0,c.jsx)(t.code,{children:`icon`}),` property with the custom icon if registered.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`mediafileicons`,children:`MediaFileIcons`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Record<string, string>`}),` — dictionary mapping normalized file codes or extensions to SVG icon markup strings.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafileitem`,children:`MediaFileItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — file type code or extension.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — human-readable display name of the file format.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon?: string`}),` — resolved or custom SVG icon markup.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extensions?: string[]`}),` — list of supported file extensions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime?: string`}),` — associated MIME type.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category?: MediaFileCategoryValue`}),` — high-level file category.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: MediaFileGroupValue`}),` — classification group (`,(0,c.jsx)(t.code,{children:`neutral`}),`, `,(0,c.jsx)(t.code,{children:`category`}),`, `,(0,c.jsx)(t.code,{children:`standard`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFileIcon } from '@dxtmisha/media'

// Register a single custom SVG icon
MediaFileIcon.add('sketch', '<svg class="icon-sketch">...</svg>')

// Register multiple icons in batch
MediaFileIcon.addList({
  psd: '<svg class="icon-psd">...</svg>',
  ai: '<svg class="icon-ai">...</svg>'
})

// Check if an icon exists
if (MediaFileIcon.has('sketch')) {
  const iconMarkup = MediaFileIcon.get('sketch')
  console.log(iconMarkup)
}

// Normalize a code string
console.log(MediaFileIcon.toCode('  .DOCX  ')) // '.docx'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};