import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-ref/Composables/useFigmaStorage - Document storage management`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmastorage`,children:(0,c.jsx)(n.code,{children:`useFigmaStorage`})}),`
`,(0,c.jsxs)(n.p,{children:[`A reactive wrapper for Figma's shared storage (PluginData). It synchronizes a Vue `,(0,c.jsx)(n.code,{children:`shallowRef`}),` with data stored within the Figma document (either globally or on a specific node), enabling shared persistent data across all users of the file.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — The key name in the plugin storage.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T`}),` — The default value if no data is found in storage.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id?: string`}),` — (Optional) The identifier (ID) of the node to attach the storage to. If not provided, the document root is used.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: Ref<T | undefined>`}),` — A reactive reference to the stored value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — A reactive boolean indicating if the initial fetch is in progress.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaStorage } from '@dxtmisha/figma-ref'

// Access document-level storage
const { item: projectConfig, loading } = useFigmaStorage('project-config', { version: '1.0' })

// Updates are automatically saved to Figma's PluginData
projectConfig.value.version = '1.1'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};