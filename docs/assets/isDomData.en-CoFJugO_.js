import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isDomData - Check environment for Data URL`}),`
`,(0,c.jsx)(t.h1,{id:`isdomdata`,children:(0,c.jsx)(t.code,{children:`isDomData`})}),`
`,(0,c.jsxs)(t.p,{children:[`A straightforward utility that verifies whether the current execution context operates within a location (`,(0,c.jsx)(t.code,{children:`location.href`}),`) prefixed by the `,(0,c.jsx)(t.code,{children:`data:`}),` schema constraint. This proves highly useful for isolating environments running inline scripts via data-URIs or rendering distinct sandboxes (like specific `,(0,c.jsx)(t.code,{children:`iframes`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Parameters:`}),`
This function does not accept any arguments.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Returns `,(0,c.jsx)(t.code,{children:`true`}),` if the global document's URL originates from `,(0,c.jsx)(t.code,{children:`data:`}),`, yielding `,(0,c.jsx)(t.code,{children:`false`}),` in any other scenario.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isDomData } from '@dxtmisha/functional-basic'

// Executing code natively on 'https://example.com'
console.log(isDomData()) // false

// Executing script bundled inside a 'data:text/html,...' instance
console.log(isDomData()) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};