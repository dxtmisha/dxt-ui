import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/media/1. File Icons`}),`
`,(0,c.jsx)(t.h1,{id:`file-icons-connection-and-integration`,children:`File Icons: Connection and Integration`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` provides a comprehensive, zero-dependency file icon and metadata subsystem designed for modern web applications and design systems. It includes 85+ vector SVG icons, automatic file type classification, and multiple connection patterns ranging from dictionary access to dynamic resolution and custom icon overrides.`]}),`
`,(0,c.jsx)(t.h2,{id:`connection-approaches`,children:`Connection Approaches`}),`
`,(0,c.jsx)(t.p,{children:`Depending on your architecture, you can connect and use file icons using three primary patterns:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`File Icons Dictionary & Registration (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/files`}),`)`]}),` — access icons by code from the `,(0,c.jsx)(t.code,{children:`fileIcons`}),` dictionary or initialize the static registry via `,(0,c.jsx)(t.code,{children:`registerFileIcons()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Dynamic Resolution via `,(0,c.jsx)(t.code,{children:`MediaFile`})]}),` — ideal for file uploads, download lists, and tables where file paths or browser `,(0,c.jsx)(t.code,{children:`File`}),` objects are received at runtime.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Custom Icon Registry via `,(0,c.jsx)(t.code,{children:`MediaFileIcon`})]}),` — allows your application or theme to override built-in icons or register custom brand formats globally.`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`the-filests-module-dxtmishamediafiles`,children:[`The `,(0,c.jsx)(t.code,{children:`files.ts`}),` Module (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/files`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`files.ts`}),` module serves as the primary asset source for file vector icons. It exports:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The `,(0,c.jsx)(t.code,{children:`fileIcons`}),` dictionary containing all registered SVG icons indexed by code.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The `,(0,c.jsx)(t.code,{children:`registerFileIcons()`}),` initialization function.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Note: Individual icons are not exported as separate variables; all icons are accessed through the `,(0,c.jsx)(t.code,{children:`fileIcons`}),` dictionary or resolved dynamically via `,(0,c.jsx)(t.code,{children:`MediaFile`}),` / `,(0,c.jsx)(t.code,{children:`MediaFiles`}),`.`]}),`
`,(0,c.jsxs)(t.h3,{id:`1-registerfileicons-helper`,children:[`1. `,(0,c.jsx)(t.code,{children:`registerFileIcons()`}),` Helper`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`registerFileIcons()`}),` function automatically loads all default vector icons from `,(0,c.jsx)(t.code,{children:`fileIcons`}),` into the `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),` static registry with a single call:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { registerFileIcons } from '@dxtmisha/media/files'

// Registers all default file icons in the MediaFileIcon registry
registerFileIcons()
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Once called, `,(0,c.jsx)(t.code,{children:`MediaFileIcon.get(code)`}),` and `,(0,c.jsx)(t.code,{children:`MediaFiles.get(code)`}),` immediately have access to all registered vector icons across your entire application.`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-the-fileicons-dictionary`,children:[`2. The `,(0,c.jsx)(t.code,{children:`fileIcons`}),` Dictionary`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`fileIcons`}),` object is a typed dictionary (`,(0,c.jsx)(t.code,{children:`MediaFileIcons`}),`) mapping format codes, categories, and neutral identifiers to their raw SVG strings:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Default Neutral File Icon`}),`: `,(0,c.jsx)(t.code,{children:`fileIcons['file']`}),` — the universal fallback file icon.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Category Neutral Icons`}),`: `,(0,c.jsx)(t.code,{children:`fileIcons['archive']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['audio']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['code']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['config']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['database']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['document']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['executable']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['folder']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['font']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['image']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['presentation']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['table']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['text']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['vector']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['video']`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Specific Formats`}),`: `,(0,c.jsx)(t.code,{children:`fileIcons['7z']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['pdf']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['docx']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['png']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['zip']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['xlsx']`}),`, and 70+ others.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { fileIcons } from '@dxtmisha/media/files'

// Direct dictionary access by format or category code
const pdfSvg = fileIcons['pdf']
const documentCategorySvg = fileIcons['document']
const defaultFileSvg = fileIcons['file']
`})}),`
`,(0,c.jsx)(t.p,{children:`In Vue 3 templates:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<template>
  <div class="file-item">
    <span class="file-icon" v-html="fileIcons['pdf']" />
    <span class="file-name">Annual_Report.pdf</span>
  </div>
</template>

<script setup lang="ts">
import { fileIcons } from '@dxtmisha/media/files'
<\/script>
`})}),`
`,(0,c.jsxs)(t.h2,{id:`dynamic-resolution-with-mediafile`,children:[`Dynamic Resolution with `,(0,c.jsx)(t.code,{children:`MediaFile`})]}),`
`,(0,c.jsxs)(t.p,{children:[`When working with user uploads, external URLs, or file records, use the `,(0,c.jsx)(t.code,{children:`MediaFile`}),` class. It inspects filenames, paths, and `,(0,c.jsx)(t.code,{children:`File`}),` objects to resolve extensions, categories, and the corresponding SVG icon automatically:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFile, MediaFileCategory } from '@dxtmisha/media'

// From a full remote URL with parameters
const remoteFile = new MediaFile('https://cdn.example.com/docs/spec.2026.docx?v=3#summary')

console.log(remoteFile.name)       // 'spec.2026.docx'
console.log(remoteFile.baseName)   // 'spec.2026'
console.log(remoteFile.extension)  // 'docx'
console.log(remoteFile.category)   // MediaFileCategory.document
console.log(remoteFile.isDocument()) // true

// Resolved SVG icon markup (uses custom icon if registered, or built-in SVG)
const svgMarkup = remoteFile.icon
`})}),`
`,(0,c.jsxs)(t.h3,{id:`browser-file-object-support`,children:[`Browser `,(0,c.jsx)(t.code,{children:`File`}),` Object Support`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`MediaFile`}),` natively accepts standard browser `,(0,c.jsx)(t.code,{children:`File`}),` instances (e.g., from an `,(0,c.jsx)(t.code,{children:`<input type="file">`}),` or Drag-and-Drop dropzone):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    const media = new MediaFile(file)

    console.log(media.name)        // File name from browser
    console.log(media.mime)        // Native MIME type (e.g. 'image/png')
    console.log(media.isImage())   // true
    console.log(media.icon)        // Vector icon markup
  }
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`registering-custom-icons-with-mediafileicon`,children:[`Registering Custom Icons with `,(0,c.jsx)(t.code,{children:`MediaFileIcon`})]}),`
`,(0,c.jsxs)(t.p,{children:[`If your project requires custom branded file icons or needs to support proprietary file extensions, you can register them globally using `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`single-icon-registration`,children:`Single Icon Registration`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFileIcon } from '@dxtmisha/media'

// Register a custom SVG icon for a format code or extension
MediaFileIcon.add('fig', '<svg viewBox="0 0 24 24"><path d="..."/></svg>')

// Check if a custom icon exists
if (MediaFileIcon.has('fig')) {
  console.log(MediaFileIcon.get('fig'))
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`batch-icon-registration`,children:`Batch Icon Registration`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFileIcon } from '@dxtmisha/media'

MediaFileIcon.addList({
  sketch: '<svg class="custom-sketch">...</svg>',
  blender: '<svg class="custom-blend">...</svg>',
  cad: '<svg class="custom-cad">...</svg>'
})
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Once registered, any call to `,(0,c.jsx)(t.code,{children:`new MediaFile('design.sketch').icon`}),` or `,(0,c.jsx)(t.code,{children:`MediaFiles.get('sketch')`}),` will automatically return your custom SVG icon.`]}),`
`,(0,c.jsxs)(t.h2,{id:`catalog-lookups-with-mediafiles`,children:[`Catalog Lookups with `,(0,c.jsx)(t.code,{children:`MediaFiles`})]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`MediaFiles`}),` class provides static methods to inspect the global file format catalog without instantiating objects:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFiles, MediaFileCategory } from '@dxtmisha/media'

// Check if a string is a link or path
MediaFiles.isLink('https://example.com/asset.zip') // true
MediaFiles.isLink('archive.zip')                   // false

// Get metadata configuration item by extension
const item = MediaFiles.get('xlsx')
console.log(item?.name)       // 'Excel'
console.log(item?.category)   // 'table'
console.log(item?.extensions) // ['xls', 'xlsx']

// Retrieve a generic category icon (e.g. for unknown images or tables)
const categoryNeutral = MediaFiles.getByCategory(MediaFileCategory.image)

// Fallback universal neutral file icon
const defaultNeutral = MediaFiles.getNeutral()
`})}),`
`,(0,c.jsxs)(t.h2,{id:`integration-with-dxtmishafunctional-basic-icons`,children:[`Integration with `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional-basic`}),` (`,(0,c.jsx)(t.code,{children:`Icons`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`You can register file icons into the global `,(0,c.jsx)(t.code,{children:`Icons`}),` registry to make them available across all UI components:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Icons } from '@dxtmisha/functional-basic'
import { fileIcons } from '@dxtmisha/media/files'

// Register into the global icon store from the fileIcons dictionary
Icons.add('file-pdf', fileIcons['pdf'])
Icons.add('file-zip', fileIcons['zip'])

// Retrieve anywhere in the application
const iconSvg = await Icons.get('file-pdf')
`})}),`
`,(0,c.jsx)(t.h2,{id:`supported-file-categories`,children:`Supported File Categories`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Archive (`,(0,c.jsx)(t.code,{children:`archive`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`zip`}),`, `,(0,c.jsx)(t.code,{children:`rar`}),`, `,(0,c.jsx)(t.code,{children:`7z`}),`, `,(0,c.jsx)(t.code,{children:`tar`}),`, `,(0,c.jsx)(t.code,{children:`gz`}),`, `,(0,c.jsx)(t.code,{children:`iso`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Audio (`,(0,c.jsx)(t.code,{children:`audio`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`mp3`}),`, `,(0,c.jsx)(t.code,{children:`wav`}),`, `,(0,c.jsx)(t.code,{children:`flac`}),`, `,(0,c.jsx)(t.code,{children:`aac`}),`, `,(0,c.jsx)(t.code,{children:`ogg`}),`, `,(0,c.jsx)(t.code,{children:`m4a`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Code (`,(0,c.jsx)(t.code,{children:`code`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`ts`}),`, `,(0,c.jsx)(t.code,{children:`js`}),`, `,(0,c.jsx)(t.code,{children:`json`}),`, `,(0,c.jsx)(t.code,{children:`html`}),`, `,(0,c.jsx)(t.code,{children:`css`}),`, `,(0,c.jsx)(t.code,{children:`py`}),`, `,(0,c.jsx)(t.code,{children:`cpp`}),`, `,(0,c.jsx)(t.code,{children:`php`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Document (`,(0,c.jsx)(t.code,{children:`document`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`pdf`}),`, `,(0,c.jsx)(t.code,{children:`doc`}),`, `,(0,c.jsx)(t.code,{children:`docx`}),`, `,(0,c.jsx)(t.code,{children:`odt`}),`, `,(0,c.jsx)(t.code,{children:`rtf`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Image (`,(0,c.jsx)(t.code,{children:`image`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`png`}),`, `,(0,c.jsx)(t.code,{children:`jpg`}),`, `,(0,c.jsx)(t.code,{children:`jpeg`}),`, `,(0,c.jsx)(t.code,{children:`gif`}),`, `,(0,c.jsx)(t.code,{children:`svg`}),`, `,(0,c.jsx)(t.code,{children:`webp`}),`, `,(0,c.jsx)(t.code,{children:`bmp`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Presentation (`,(0,c.jsx)(t.code,{children:`presentation`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`ppt`}),`, `,(0,c.jsx)(t.code,{children:`pptx`}),`, `,(0,c.jsx)(t.code,{children:`odp`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Table (`,(0,c.jsx)(t.code,{children:`table`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`xls`}),`, `,(0,c.jsx)(t.code,{children:`xlsx`}),`, `,(0,c.jsx)(t.code,{children:`csv`}),`, `,(0,c.jsx)(t.code,{children:`ods`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Video (`,(0,c.jsx)(t.code,{children:`video`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`mp4`}),`, `,(0,c.jsx)(t.code,{children:`webm`}),`, `,(0,c.jsx)(t.code,{children:`mkv`}),`, `,(0,c.jsx)(t.code,{children:`avi`}),`, `,(0,c.jsx)(t.code,{children:`mov`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`System (`,(0,c.jsx)(t.code,{children:`system`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`exe`}),`, `,(0,c.jsx)(t.code,{children:`apk`}),`, `,(0,c.jsx)(t.code,{children:`dmg`}),`, `,(0,c.jsx)(t.code,{children:`app`})]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};