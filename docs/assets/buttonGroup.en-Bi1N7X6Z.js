import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for grouping multiple buttons into a single block.`}),`
`,(0,c.jsx)(t.p,{children:`ButtonGroup allows organizing buttons into logical groups with shared styling and alignment. It supports horizontal and vertical orientation, automatic wrapping of elements, and passing shared attributes to all nested buttons.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Horizontal and vertical orientation`}),`
`,(0,c.jsx)(t.li,{children:`Automatic wrapping of buttons (wrap) when space is limited`}),`
`,(0,c.jsxs)(t.li,{children:[`Passing shared attributes (size, style, color) to all buttons via `,(0,c.jsx)(t.code,{children:`buttonAttrs`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Flexible management of the button list via the `,(0,c.jsx)(t.code,{children:`list`}),` array or the `,(0,c.jsx)(t.code,{children:`default`}),` slot`]}),`
`,(0,c.jsx)(t.li,{children:`Consistent spacing between buttons in the group`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Usage Scenarios:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Toolbars`}),`
`,(0,c.jsx)(t.li,{children:`Groups of switches or actions in forms`}),`
`,(0,c.jsx)(t.li,{children:`Navigation blocks`}),`
`,(0,c.jsx)(t.li,{children:`Control blocks in cards or lists`}),`
`,(0,c.jsx)(t.li,{children:`Option selection (filters, sorting)`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Basic usage via list -->
<ButtonGroup 
  :list="[
    { label: 'Back', icon: 'arrow_back' },
    { label: 'Home', icon: 'home' },
    { label: 'Forward', iconTrailing: 'arrow_forward' }
  ]" 
/>

<!-- With shared attributes and vertical orientation -->
<ButtonGroup 
  orientation="vertical"
  :buttonAttrs="{ primary: true, outline: true }"
  :list="[
    { label: 'Save', icon: 'save' },
    { label: 'Delete', icon: 'delete' }
  ]"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};