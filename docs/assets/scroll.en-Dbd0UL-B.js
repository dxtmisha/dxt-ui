import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`scroll-settings`,children:`Scroll Settings`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`behavior`}),`, `,(0,c.jsx)(t.code,{children:`block`}),`, `,(0,c.jsx)(t.code,{children:`inline`}),`, and `,(0,c.jsx)(t.code,{children:`shift`}),` properties control the scrolling behavior to the element when navigating via an anchor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`behavior`}),` — defines the scroll transition animation (`,(0,c.jsx)(t.code,{children:`auto`}),`, `,(0,c.jsx)(t.code,{children:`smooth`}),`, `,(0,c.jsx)(t.code,{children:`instant`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`block`}),` — vertical alignment of the element (`,(0,c.jsx)(t.code,{children:`start`}),`, `,(0,c.jsx)(t.code,{children:`center`}),`, `,(0,c.jsx)(t.code,{children:`end`}),`, `,(0,c.jsx)(t.code,{children:`nearest`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`inline`}),` — horizontal alignment of the element (`,(0,c.jsx)(t.code,{children:`start`}),`, `,(0,c.jsx)(t.code,{children:`center`}),`, `,(0,c.jsx)(t.code,{children:`end`}),`, `,(0,c.jsx)(t.code,{children:`nearest`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`shift`}),` — scroll offset from the top edge (in pixels)`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note:`}),` If the `,(0,c.jsx)(t.code,{children:`shift`}),` property is set, the component uses `,(0,c.jsx)(t.code,{children:`window.scrollTo`}),` instead of `,(0,c.jsx)(t.code,{children:`element.scrollIntoView`}),`. In this case, the `,(0,c.jsx)(t.code,{children:`block`}),` and `,(0,c.jsx)(t.code,{children:`inline`}),` properties are ignored, and scrolling is always aligned to the top edge of the element with the specified offset.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`These properties allow you to customize exactly how the page scrolls to the target element. For example, you can enable smooth scrolling or change the positioning of the element on the screen after scrolling.`}),`
`,(0,c.jsx)(i,{code:`
<template>
<Anchor
  href="#target"
  behavior="smooth"
  block="center"
  inline="nearest"
>
  Go to element
</Anchor>

<Anchor
  href="#target"
  :shift="100"
>
  Go with offset
</Anchor>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};