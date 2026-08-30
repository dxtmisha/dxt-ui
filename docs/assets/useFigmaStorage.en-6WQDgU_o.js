import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/figma/Composables/useFigmaStorage - Storage management`}),`
`,(0,c.jsx)(t.h1,{id:`usefigmastorage`,children:(0,c.jsx)(t.code,{children:`useFigmaStorage`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable for managing data in Figma's `,(0,c.jsx)(t.code,{children:`PluginData`}),`. It uses a singleton pattern to ensure that multiple calls with the same key and node return the same `,(0,c.jsx)(t.code,{children:`FigmaStorage`}),` instance.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — the unique key name for the storage item.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item?: PluginDataMixin`}),` — (Optional) the Figma node where the data is stored. Defaults to `,(0,c.jsx)(t.code,{children:`figma.root`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cache?: number`}),` — (Optional) cache time in seconds (TTL).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`FigmaStorage<T>`}),` — an instance of the `,(0,c.jsx)(t.code,{children:`FigmaStorage`}),` class for data management.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaStorage } from '@dxtmisha/figma'

// 1. Initialize storage for plugin settings
const settings = useFigmaStorage('settings')

// 2. Retrieve data with a default value
const theme = settings.get('dark')

// 3. Update data
settings.set('light')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};