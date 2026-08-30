import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`Expandable container for organizing content with smooth opening and closing animations, simplifying information structuring in the interface.`}),`
`,(0,c.jsx)(t.p,{children:`Accordion allows creating expandable sections with automatic animations, interactive header, and state management via v-model. The component supports padding configuration, visual dividers, and content customization through slots.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Smooth expand and collapse animations`}),`
`,(0,c.jsx)(t.li,{children:`Header with label, description, and icons`}),`
`,(0,c.jsx)(t.li,{children:`State management via v-model:open`}),`
`,(0,c.jsx)(t.li,{children:`Programmatic control (toggle, toOpen, toClose)`}),`
`,(0,c.jsx)(t.li,{children:`Internal padding configuration (padding)`}),`
`,(0,c.jsx)(t.li,{children:`Visual divider between sections`}),`
`,(0,c.jsx)(t.li,{children:`Customization via head and default slots`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`FAQ sections`}),`
`,(0,c.jsx)(t.li,{children:`Settings panels`}),`
`,(0,c.jsx)(t.li,{children:`Product filters`}),`
`,(0,c.jsx)(t.li,{children:`Information blocks`}),`
`,(0,c.jsx)(t.li,{children:`Menus with subsections`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
<!-- Basic accordion -->
<Accordion label="Question 1">
  <p>Answer to the question.</p>
</Accordion>

<!-- With state management -->
<Accordion
  v-model:open="isOpen"
  label="Settings"
  icon="settings"
>
  <p>Settings content.</p>
</Accordion>

<!-- With custom header -->
<Accordion>
  <template #head>
    <div>Custom header</div>
  </template>
  <template #default>
    <p>Section content.</p>
  </template>
</Accordion>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Accordion is a component for creating expandable sections with animation support, state management, and flexible customization.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};