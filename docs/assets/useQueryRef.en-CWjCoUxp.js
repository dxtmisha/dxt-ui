import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Composables/useQueryRef - Query Parameters Management`}),`
`,(0,c.jsx)(n.h1,{id:`usequeryref`,children:(0,c.jsx)(n.code,{children:`useQueryRef`})}),`
`,(0,c.jsx)(n.p,{children:`A composable for working with the URL query parameters (GET parameters). It allows creating reactive variables that automatically synchronize with a specific key in the query string.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Key name in the query.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T)`}),` — Default value if the key is missing from the query.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Returns (`,(0,c.jsx)(n.code,{children:`Ref<T>`}),`):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`A reactive reference to the value in the query parameters.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useQueryRef } from '@dxtmisha/functional'

// Create a reference to 'step' value in the URL query parameters
const step = useQueryRef('step', '1')

// Update value (automatically updates URL: ?step=2)
step.value = '2'

// If the user changes the query parameter manually or via browser history,
// step.value will be updated automatically.
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};