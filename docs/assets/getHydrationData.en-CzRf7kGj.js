import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getHydrationData - Retrieve hydration data from a script tag`}),`
`,(0,c.jsx)(t.h1,{id:`gethydrationdata`,children:(0,c.jsx)(t.code,{children:`getHydrationData`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility for retrieving and parsing JSON data from a `,(0,c.jsx)(t.code,{children:`<script>`}),` tag in the DOM by its `,(0,c.jsx)(t.code,{children:`id`}),` (typically generated on the server via `,(0,c.jsx)(t.code,{children:`getElementSafeScript`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`In a browser environment (`,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),`), the function locates the `,(0,c.jsx)(t.code,{children:`<script>`}),` element by `,(0,c.jsx)(t.code,{children:`id`}),`, parses its `,(0,c.jsx)(t.code,{children:`textContent`}),` as JSON, and optionally removes the `,(0,c.jsx)(t.code,{children:`<script>`}),` element from the DOM (`,(0,c.jsx)(t.code,{children:`remove = true`}),` by default). If the element is not found, is not a `,(0,c.jsx)(t.code,{children:`<script>`}),` tag, is called in an SSR environment, or if JSON parsing fails (which is reported via `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` under `,(0,c.jsx)(t.code,{children:`group: 'hydration'`}),`, `,(0,c.jsx)(t.code,{children:`code: 'error'`}),`), the function safely returns `,(0,c.jsx)(t.code,{children:`defaultValue`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — The unique identifier (ID) of the script tag.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue: T`}),` — Default value returned if the script tag is not found or its content is invalid.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`remove?: boolean`}),` — Whether to remove the script element from the DOM after reading (default: `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`T`}),` — The parsed data from the script tag, or `,(0,c.jsx)(t.code,{children:`defaultValue`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getHydrationData } from '@dxtmisha/functional-basic'

// Given in DOM:
// <script id="hydration-data" type="application/json">{"user":"Misha"}<\/script>

const data = getHydrationData('hydration-data', { user: 'Guest' })
console.log(data) // { user: 'Misha' }
// The <script id="hydration-data"> tag is automatically removed from the DOM
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};