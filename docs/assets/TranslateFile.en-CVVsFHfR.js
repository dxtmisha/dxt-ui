import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/TranslateFile - Translation File Management`}),`
`,(0,c.jsx)(n.h1,{id:`translatefile-class`,children:`TranslateFile Class`}),`
`,(0,c.jsx)(n.p,{children:`A class for managing translation data from external files. It supports lazy loading of translation packs, automatic locale matching, and internal caching to optimize performance and reduce redundant file processing.`}),`
`,(0,c.jsxs)(n.p,{children:[`Unlike static utilities, `,(0,c.jsx)(n.code,{children:`TranslateFile`}),` is an instantiable class, allowing for multiple translation sets with independent locale and location settings.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lazy Loading`}),` — Supports asynchronous loading of translation files only when they are needed for the current locale.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart Caching`}),` — Automatically caches the content of loaded files, preventing repetitive file reads or network requests.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Locale Prioritization`}),` — Intelligently selects the best-matching file based on location (Location > Language > Global).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Context`}),` — Supports custom location and language providers, defaulting to the global `,(0,c.jsx)(n.code,{children:`Geo`}),` settings.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`TranslateFile(data, language, location)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data?: TranslateDataFile`}),` — initial mapping of locales to file loaders.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`language: string | (() => string) = () => Geo.getLanguage()`}),` — current language or a function returning it.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`location: string | (() => string) = () => Geo.getLocation()`}),` — current location or a function returning it.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { TranslateFile, Geo } from '@dxtmisha/functional-basic'

// 1. Simple initialization
const files = new TranslateFile({
  'en-US': () => import('./locales/en-US.json'),
  'en': () => import('./locales/en.json'),
  'global': () => import('./locales/global.json')
})

// 2. Custom context providers
const customFiles = new TranslateFile(
  {}, 
  () => 'fr', 
  () => 'fr-FR'
)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`data-retrieval`,children:`Data Retrieval`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async getList(): Promise<TranslateDataFileList | undefined>`}),` — Returns a list of translations for the current location. It first checks the internal cache, then tries to load from the registered file loaders.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFile(): boolean`}),` — Checks if there are any registered file loaders applicable to the current location or language.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocation(): string`}),` — Returns the current location string (executes the provider if it's a function).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLanguage(): string`}),` — Returns the current language string (executes the provider if it's a function).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`data-management`,children:`Data Management`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(data: TranslateDataFile): void`}),` — Adds a mapping of locales to their respective translation file loaders (functions returning a Promise).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`translatedatafile`,children:(0,c.jsx)(n.code,{children:`TranslateDataFile`})}),`
`,(0,c.jsx)(n.p,{children:`A collection of asynchronous loader functions indexed by locale/region strings:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Key`}),`: Locale code (e.g., `,(0,c.jsx)(n.code,{children:`'en-US'`}),`, `,(0,c.jsx)(n.code,{children:`'ru'`}),`, `,(0,c.jsx)(n.code,{children:`'global'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Value`}),`: Function returning a `,(0,c.jsx)(n.code,{children:`Promise`}),` of `,(0,c.jsx)(n.code,{children:`TranslateDataFileList`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`translatedatafilelist`,children:(0,c.jsx)(n.code,{children:`TranslateDataFileList`})}),`
`,(0,c.jsxs)(n.p,{children:[`A simple key-value record of translations: `,(0,c.jsx)(n.code,{children:`Record<string, string>`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`integration-with-translateinstance`,children:`Integration with TranslateInstance`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { TranslateFile, TranslateInstance } from '@dxtmisha/functional-basic'

const translationFiles = new TranslateFile({
  'en-US': () => Promise.resolve({ hello: 'Hello US' }),
  'en': () => Promise.resolve({ hello: 'Hello' })
})

const translate = new TranslateInstance(
  '/api/translate',
  'list',
  translationFiles
)

const message = await translate.get('hello')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};