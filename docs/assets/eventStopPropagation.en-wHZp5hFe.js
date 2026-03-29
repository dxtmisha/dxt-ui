import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/eventStopPropagation - Stop event propagation`}),`
`,(0,c.jsx)(n.h1,{id:`eventstoppropagation`,children:(0,c.jsx)(n.code,{children:`eventStopPropagation`})}),`
`,(0,c.jsx)(n.p,{children:`Stops the further propagation of an event in the DOM tree (bubbling / capturing) and cancels the browser's default default action.`}),`
`,(0,c.jsxs)(n.p,{children:[`The function is a convenient wrapper around calling both `,(0,c.jsx)(n.code,{children:`event.preventDefault()`}),` and `,(0,c.jsx)(n.code,{children:`event.stopPropagation()`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: Event`}),` — The DOM event instance to stop.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { eventStopPropagation } from '@dxtmisha/functional-basic'

const link = document.createElement('a')
link.href = 'https://example.com'
link.onclick = (e) => {
  // Will cancel the navigation to the link and stop the click from bubbling to parents
  eventStopPropagation(e)
  console.log('Click intercepted!')
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};