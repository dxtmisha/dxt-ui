import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Composables/useHashRef - Hash Management`}),`
`,(0,c.jsx)(n.h1,{id:`usehashref`,children:(0,c.jsx)(n.code,{children:`useHashRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`A composable for working with the URL hash (the part after `,(0,c.jsx)(n.code,{children:`#`}),`). It allows creating reactive variables that automatically synchronize with a specific key in the hash.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Key name in the hash.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T)`}),` — Default value if the key is missing from the hash.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Returns (`,(0,c.jsx)(n.code,{children:`Ref<T>`}),`):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`A reactive reference to the value in the hash.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useHashRef } from '@dxtmisha/functional'

// Create a reference to 'step' value in the URL hash
const step = useHashRef('step', '1')

// Update value (automatically updates URL: #step=2)
step.value = '2'

// If the user changes the hash manually or via browser history,
// step.value will be updated automatically.
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};