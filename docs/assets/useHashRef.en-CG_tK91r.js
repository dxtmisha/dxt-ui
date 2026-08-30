import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useHashRef - Hash Management`}),`
`,(0,c.jsx)(t.h1,{id:`usehashref`,children:(0,c.jsx)(t.code,{children:`useHashRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`A composable for working with the URL hash (the part after `,(0,c.jsx)(t.code,{children:`#`}),`). It allows creating reactive variables that automatically synchronize with a specific key in the hash.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Key name in the hash.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T | (() => T)`}),` — Default value if the key is missing from the hash.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Returns (`,(0,c.jsx)(t.code,{children:`Ref<T>`}),`):`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`A reactive reference to the value in the hash.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useHashRef } from '@dxtmisha/functional'

// Create a reference to 'step' value in the URL hash
const step = useHashRef('step', '1')

// Update value (automatically updates URL: #step=2)
step.value = '2'

// If the user changes the hash manually or via browser history,
// step.value will be updated automatically.
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};