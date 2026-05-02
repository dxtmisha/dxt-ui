import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/isDomData - Check environment for Data URL`}),`
`,(0,c.jsx)(n.h1,{id:`isdomdata`,children:(0,c.jsx)(n.code,{children:`isDomData`})}),`
`,(0,c.jsxs)(n.p,{children:[`A straightforward utility that verifies whether the current execution context operates within a location (`,(0,c.jsx)(n.code,{children:`location.href`}),`) prefixed by the `,(0,c.jsx)(n.code,{children:`data:`}),` schema constraint. This proves highly useful for isolating environments running inline scripts via data-URIs or rendering distinct sandboxes (like specific `,(0,c.jsx)(n.code,{children:`iframes`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),`
This function does not accept any arguments.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Returns `,(0,c.jsx)(n.code,{children:`true`}),` if the global document's URL originates from `,(0,c.jsx)(n.code,{children:`data:`}),`, yielding `,(0,c.jsx)(n.code,{children:`false`}),` in any other scenario.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isDomData } from '@dxtmisha/functional-basic'

// Executing code natively on 'https://example.com'
console.log(isDomData()) // false

// Executing script bundled inside a 'data:text/html,...' instance
console.log(isDomData()) // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};