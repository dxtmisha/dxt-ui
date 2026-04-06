import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma/Composables/useFigmaStorage - Storage management`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmastorage`,children:(0,c.jsx)(n.code,{children:`useFigmaStorage`})}),`
`,(0,c.jsxs)(n.p,{children:[`Composable for managing data in Figma's `,(0,c.jsx)(n.code,{children:`PluginData`}),`. It uses a singleton pattern to ensure that multiple calls with the same key and node return the same `,(0,c.jsx)(n.code,{children:`FigmaStorage`}),` instance.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — the unique key name for the storage item.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item?: PluginDataMixin`}),` — (Optional) the Figma node where the data is stored. Defaults to `,(0,c.jsx)(n.code,{children:`figma.root`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cache?: number`}),` — (Optional) cache time in seconds (TTL).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`FigmaStorage<T>`}),` — an instance of the `,(0,c.jsx)(n.code,{children:`FigmaStorage`}),` class for data management.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaStorage } from '@dxtmisha/figma'

// 1. Initialize storage for plugin settings
const settings = useFigmaStorage('settings')

// 2. Retrieve data with a default value
const theme = settings.get('dark')

// 3. Update data
settings.set('light')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};