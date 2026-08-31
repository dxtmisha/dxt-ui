import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/figma-ref/Composables/useFigmaClientStorage - Client storage management`}),`
`,(0,c.jsx)(t.h1,{id:`usefigmaclientstorage`,children:(0,c.jsx)(t.code,{children:`useFigmaClientStorage`})}),`
`,(0,c.jsxs)(t.p,{children:[`A reactive wrapper for Figma's client storage. It synchronizes a Vue `,(0,c.jsx)(t.code,{children:`shallowRef`}),` with the plugin's `,(0,c.jsx)(t.code,{children:`clientStorage`}),`, allowing for persistent data storage on the user's machine with automatic updates.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — The key name in the client storage.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T`}),` — The default value if no data is found in storage.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: Ref<T | undefined>`}),` — A reactive reference to the stored value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — A reactive boolean indicating if the initial fetch is in progress.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaClientStorage } from '@dxtmisha/figma-ref'

const { item: theme, loading } = useFigmaClientStorage('app-theme', 'light')

// Updates to theme.value are automatically saved to Figma's clientStorage
theme.value = 'dark'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};