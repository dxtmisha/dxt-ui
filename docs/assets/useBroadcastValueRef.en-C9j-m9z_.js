import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Composables/useBroadcastValueRef - Data Syncing Between Tabs`}),`
`,(0,c.jsx)(n.h1,{id:`usebroadcastvalueref`,children:(0,c.jsx)(n.code,{children:`useBroadcastValueRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`A composable for creating a reactive variable whose value is synchronized across all open browser tabs within the same domain. It uses `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` via the `,(0,c.jsx)(n.code,{children:`BroadcastMessage`}),` class.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — a unique name for the value. This will be used to create the communication channel.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | string | (() => (T | string))`}),` — default value. Can be static or a function.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Ref<T | string | undefined>`}),` — a reactive reference to the value. When the value changes in one tab, it automatically updates in all others.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Uses the `,(0,c.jsx)(n.strong,{children:`Singleton`}),` pattern: calling it with the same `,(0,c.jsx)(n.code,{children:`name`}),` within one application returns the same `,(0,c.jsx)(n.code,{children:`Ref`}),` instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Automatically prefixes the name with `,(0,c.jsx)(n.code,{children:`broadcast--`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

// Tab 1
const userStatus = useBroadcastValueRef('user-status', 'offline')
userStatus.value = 'online'

// Tab 2 (same domain)
const userStatus = useBroadcastValueRef('user-status', 'offline')
// userStatus.value automatically becomes 'online'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};