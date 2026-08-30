import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useBroadcastValueRef - Data Syncing Between Tabs`}),`
`,(0,c.jsx)(t.h1,{id:`usebroadcastvalueref`,children:(0,c.jsx)(t.code,{children:`useBroadcastValueRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`A composable for creating a reactive variable whose value is synchronized across all open browser tabs within the same domain. It uses `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),` via the `,(0,c.jsx)(t.code,{children:`BroadcastMessage`}),` class.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — a unique name for the value. This will be used to create the communication channel.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T | string | (() => (T | string))`}),` — default value. Can be static or a function.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Ref<T | string | undefined>`}),` — a reactive reference to the value. When the value changes in one tab, it automatically updates in all others.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Uses the `,(0,c.jsx)(t.strong,{children:`Singleton`}),` pattern: calling it with the same `,(0,c.jsx)(t.code,{children:`name`}),` within one application returns the same `,(0,c.jsx)(t.code,{children:`Ref`}),` instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Automatically prefixes the name with `,(0,c.jsx)(t.code,{children:`broadcast--`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

// Tab 1
const userStatus = useBroadcastValueRef('user-status', 'offline')
userStatus.value = 'online'

// Tab 2 (same domain)
const userStatus = useBroadcastValueRef('user-status', 'offline')
// userStatus.value automatically becomes 'online'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};