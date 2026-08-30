import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/TranslateFile - Translation File Management`}),`
`,(0,c.jsx)(t.h1,{id:`translatefile-class`,children:`TranslateFile Class`}),`
`,(0,c.jsx)(t.p,{children:`A class for managing translation data from external files. It supports lazy loading of translation packs, automatic locale matching, and internal caching to optimize performance and reduce redundant file processing.`}),`
`,(0,c.jsxs)(t.p,{children:[`Unlike static utilities, `,(0,c.jsx)(t.code,{children:`TranslateFile`}),` is an instantiable class, allowing for multiple translation sets with independent locale and location settings.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lazy Loading`}),` — Supports asynchronous loading of translation files only when they are needed for the current locale.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Smart Caching`}),` — Automatically caches the content of loaded files, preventing repetitive file reads or network requests.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Locale Prioritization`}),` — Intelligently selects the best-matching file based on location (Location > Language > Global).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Flexible Context`}),` — Supports custom location and language providers, defaulting to the global `,(0,c.jsx)(t.code,{children:`Geo`}),` settings.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the `,(0,c.jsx)(t.code,{children:`TranslateFile(data, language, location)`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data?: TranslateDataFile`}),` — initial mapping of locales to file loaders.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`language: string | (() => string) = () => Geo.getLanguage()`}),` — current language or a function returning it.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`location: string | (() => string) = () => Geo.getLocation()`}),` — current location or a function returning it.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { TranslateFile, Geo } from '@dxtmisha/functional-basic'

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
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`data-retrieval`,children:`Data Retrieval`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`async getList(): Promise<TranslateDataFileList | undefined>`}),` — Returns a list of translations for the current location. It first checks the internal cache, then tries to load from the registered file loaders.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isFile(): boolean`}),` — Checks if there are any registered file loaders applicable to the current location or language.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocation(): string`}),` — Returns the current location string (executes the provider if it's a function).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLanguage(): string`}),` — Returns the current language string (executes the provider if it's a function).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`data-management`,children:`Data Management`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(data: TranslateDataFile): void`}),` — Adds a mapping of locales to their respective translation file loaders (functions returning a Promise).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`translatedatafile`,children:(0,c.jsx)(t.code,{children:`TranslateDataFile`})}),`
`,(0,c.jsx)(t.p,{children:`A collection of asynchronous loader functions indexed by locale/region strings:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Key`}),`: Locale code (e.g., `,(0,c.jsx)(t.code,{children:`'en-US'`}),`, `,(0,c.jsx)(t.code,{children:`'ru'`}),`, `,(0,c.jsx)(t.code,{children:`'global'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Value`}),`: Function returning a `,(0,c.jsx)(t.code,{children:`Promise`}),` of `,(0,c.jsx)(t.code,{children:`TranslateDataFileList`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`translatedatafilelist`,children:(0,c.jsx)(t.code,{children:`TranslateDataFileList`})}),`
`,(0,c.jsxs)(t.p,{children:[`A simple key-value record of translations: `,(0,c.jsx)(t.code,{children:`Record<string, string>`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`integration-with-translateinstance`,children:`Integration with TranslateInstance`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { TranslateFile, TranslateInstance } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};