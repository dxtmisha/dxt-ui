import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/media/Classes/MediaFileIcon - Custom File Icon Registry`}),`
`,(0,c.jsx)(t.h1,{id:`mediafileicon-class`,children:`MediaFileIcon Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),` class is a `,(0,c.jsx)(t.strong,{children:`Primary Class (Static)`}),` designed for managing the registration, storage, normalization, and application of custom SVG icons for file extensions and type codes. It serves as the centralized icon registry utilized by `,(0,c.jsx)(t.code,{children:`MediaFiles`}),` and `,(0,c.jsx)(t.code,{children:`MediaFile`}),` to override default vector icons across the design system.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Static Registry`}),` — maintains a prototype-isolated in-memory dictionary (`,(0,c.jsx)(t.code,{children:`Object.create(null)`}),`) of custom SVG markup mapped to normalized file codes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Fluent Method Chaining`}),` — `,(0,c.jsx)(t.code,{children:`add`}),`, `,(0,c.jsx)(t.code,{children:`addList`}),`, and `,(0,c.jsx)(t.code,{children:`reset`}),` return `,(0,c.jsx)(t.code,{children:`typeof MediaFileIcon`}),`, allowing expressive call chaining.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Comprehensive Code Normalization`}),` — automatically strips boundary dots and whitespace, removes MIME parameters (after `,(0,c.jsx)(t.code,{children:`;`}),`), and converts codes to lowercase (`,(0,c.jsx)(t.code,{children:`toCode`}),`) for reliable case-insensitive lookups.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Single & Batch Registration`}),` — provides convenient methods for registering individual icons with automatic whitespace trimming (`,(0,c.jsx)(t.code,{children:`add`}),`) or importing dictionaries in bulk (`,(0,c.jsx)(t.code,{children:`addList`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Defensive Item Enrichment`}),` — safely clones `,(0,c.jsx)(t.code,{children:`MediaFileItem`}),` metadata objects and their `,(0,c.jsx)(t.code,{children:`extensions`}),` array, overriding the `,(0,c.jsx)(t.code,{children:`icon`}),` property via `,(0,c.jsx)(t.code,{children:`toItem`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Fast Bailout Optimization`}),` — internal `,(0,c.jsx)(t.code,{children:`hasCustomIcons`}),` presence flag guarantees O(1) fast return with zero performance overhead when the registry is empty.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Zero Runtime Dependencies`}),` — pure string and dictionary operations, fully isomorphic and safe for SSR.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`The class is static and does not require instantiation. All methods are invoked directly on `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`registry--management`,children:`Registry & Management`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get icons(): Readonly<MediaFileIcons>`}),` — returns a prototype-less snapshot dictionary of all registered custom icons for read-only access.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static has(code: string): boolean`}),` — checks whether a custom icon is registered for the specified file code or extension.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get(code: string): string | undefined`}),` — returns the custom SVG icon string for the specified code or extension, or `,(0,c.jsx)(t.code,{children:`undefined`}),` if not registered.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static add(code: string, icon: string): typeof MediaFileIcon`}),` — registers a custom SVG icon string (with automatic whitespace trimming) for a specific file code or extension. Returns the class constructor for method chaining.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static addList(icons: MediaFileIcons): typeof MediaFileIcon`}),` — registers multiple custom SVG icons in batch from a dictionary. Returns the class constructor for method chaining.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static remove(code: string): boolean`}),` — removes a custom icon by file code or extension, returning `,(0,c.jsx)(t.code,{children:`true`}),` if it existed and was removed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static reset(): typeof MediaFileIcon`}),` — resets and clears all registered custom icons from the registry. Returns the class constructor for method chaining.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`normalization--item-transform`,children:`Normalization & Item Transform`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static toCode(code: string): string`}),` — normalizes a file code or extension by stripping boundary dots and whitespace, removing MIME parameters after `,(0,c.jsx)(t.code,{children:`;`}),`, and converting to lowercase.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static toItem<T extends MediaFileItem | undefined = undefined>(item?: T): MediaFileItemReturn<T>`}),` — defensively clones the file item and its extensions array, applying the custom icon by cascading priority (`,(0,c.jsx)(t.code,{children:`code`}),` -> `,(0,c.jsx)(t.code,{children:`extensions`}),` -> `,(0,c.jsx)(t.code,{children:`mime`}),` -> `,(0,c.jsx)(t.code,{children:`category`}),`).`]}),`
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
`,(0,c.jsx)(t.h3,{id:`mediafileitemreturnt`,children:(0,c.jsx)(t.code,{children:`MediaFileItemReturn<T>`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`T extends MediaFileItem ? MediaFileItem : undefined`}),` — conditional return type reflecting whether the input item was provided.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFileIcon } from '@dxtmisha/media'

// Register icons with fluent method chaining
MediaFileIcon
  .reset()
  .add('sketch', '<svg class="icon-sketch">...</svg>')
  .addList({
    psd: '<svg class="icon-psd">...</svg>',
    ai: '<svg class="icon-ai">...</svg>'
  })

// Check if an icon exists and retrieve it
if (MediaFileIcon.has('sketch')) {
  const iconMarkup = MediaFileIcon.get('sketch')
  console.log(iconMarkup)
}

// Retrieve snapshot of all registered icons
const allIcons = MediaFileIcon.icons
console.log(allIcons.sketch)

// Normalize code strings (strips boundary dots, whitespace, and MIME parameters)
console.log(MediaFileIcon.toCode('  ..DOCX..  ')) // 'docx'
console.log(MediaFileIcon.toCode('text/plain; charset=utf-8')) // 'text/plain'

// Remove a specific icon
MediaFileIcon.remove('sketch')

// Reset all registered custom icons
MediaFileIcon.reset()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};