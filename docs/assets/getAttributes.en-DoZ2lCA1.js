import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getAttributes - Get element attributes`}),`
`,(0,c.jsx)(t.h1,{id:`getattributes`,children:(0,c.jsx)(t.code,{children:`getAttributes`})}),`
`,(0,c.jsx)(t.p,{children:`Extracts all HTML attributes of a specified DOM element (or an element found by a CSS selector) and returns them as a simple key-value object.`}),`
`,(0,c.jsxs)(t.p,{children:[`The function uses `,(0,c.jsx)(t.code,{children:`getElement`}),` to find the target node. If the element is not found or an empty argument is passed, it returns an empty object `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<E>`}),` — A DOM element, Window object, or a CSS selector string to find it.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Record<string, string | undefined>`}),` — An object where the keys are attribute names (e.g., `,(0,c.jsx)(t.code,{children:`id`}),`, `,(0,c.jsx)(t.code,{children:`class`}),`, `,(0,c.jsx)(t.code,{children:`data-value`}),`), and the values are their contents.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getAttributes } from '@dxtmisha/functional-basic'

// We have an element: <div id="app" class="container" data-theme="dark"></div>

const attrs = getAttributes('#app')
console.log(attrs)
/*
{
  id: 'app',
  class: 'container',
  'data-theme': 'dark'
}
*/
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};