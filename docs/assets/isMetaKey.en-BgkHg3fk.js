import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isMetaKey - Check for meta/modifier key press`}),`
`,(0,c.jsx)(t.h1,{id:`ismetakey`,children:(0,c.jsx)(t.code,{children:`isMetaKey`})}),`
`,(0,c.jsx)(t.p,{children:`Checks if a key event contains active modifier/meta keys (Command, Alt/Option, Control). This function is useful for filtering keyboard events when you want to ignore modifier key combinations (e.g., CMD+C, CTRL+V, ALT+TAB).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: KeyboardEvent`}),` — the keyboard event object.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if any of `,(0,c.jsx)(t.code,{children:`metaKey`}),`, `,(0,c.jsx)(t.code,{children:`altKey`}),`, or `,(0,c.jsx)(t.code,{children:`ctrlKey`}),` is pressed, otherwise `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Supported event properties:`}),`
The function checks the following event properties:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`metaKey`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`altKey`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`ctrlKey`})}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isMetaKey } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isMetaKey(event)) {
    // Ignore modifier combinations
    return
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};