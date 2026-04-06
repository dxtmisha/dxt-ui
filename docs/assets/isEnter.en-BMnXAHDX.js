import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/isEnter - Check for Enter or Space key press`}),`
`,(0,c.jsx)(n.h1,{id:`isenter`,children:(0,c.jsx)(n.code,{children:`isEnter`})}),`
`,(0,c.jsxs)(n.p,{children:[`Checks if the pressed key is `,(0,c.jsx)(n.code,{children:`Enter`}),` or `,(0,c.jsx)(n.code,{children:`Space`}),`. This function is useful for handling keyboard events when you need to react to action confirmation or element activation, while supporting accessibility (a11y) and older browsers.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: KeyboardEvent`}),` — the keyboard event object.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if the `,(0,c.jsx)(n.code,{children:`Enter`}),` or `,(0,c.jsx)(n.code,{children:`Space`}),` key is pressed, otherwise `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Supported event properties:`}),`
The function checks the following event properties for maximum compatibility:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code`}),`: `,(0,c.jsx)(n.code,{children:`'Enter'`}),`, `,(0,c.jsx)(n.code,{children:`'Space'`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key`}),`: `,(0,c.jsx)(n.code,{children:`'Enter'`}),`, `,(0,c.jsx)(n.code,{children:`' '`}),`, `,(0,c.jsx)(n.code,{children:`'Spacebar'`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`keyCode`}),`: `,(0,c.jsx)(n.code,{children:`13`}),`, `,(0,c.jsx)(n.code,{children:`32`})]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isEnter } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isEnter(event)) {
    console.log('Enter or Space pressed')
    // Perform action
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};