import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`icon-state-management`,children:`Icon State Management`}),`
`,(0,c.jsx)(t.p,{children:`A component for displaying icons with support for active state, rotation, loading, and skeleton integration.`}),`
`,(0,c.jsx)(t.p,{children:`Icon provides a unified interface for working with icons in the design system, supporting both the main icon and an alternative for the active state. The component automatically manages switching between icons, handles loading events, and integrates with the skeleton system to display loading states.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Display of main and active icons with smooth transitions`}),`
`,(0,c.jsx)(t.li,{children:`Icon rotation at a specified angle`}),`
`,(0,c.jsx)(t.li,{children:`Disabled and hide states for visibility control`}),`
`,(0,c.jsx)(t.li,{children:`Image loading events for icons`}),`
`,(0,c.jsx)(t.li,{children:`Integration with Skeleton for loading states`}),`
`,(0,c.jsx)(t.li,{children:`Support within other components (Button, Cell, Chip, Field)`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Icons in buttons and navigation elements`}),`
`,(0,c.jsx)(t.li,{children:`Interactive icons with state changes`}),`
`,(0,c.jsx)(t.li,{children:`State indicators in forms and lists`}),`
`,(0,c.jsx)(t.li,{children:`Decorative interface elements with animation`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`properties`,children:`Properties`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`icon`})}),` — The main icon displayed by default.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`iconActive`})}),` — The icon that is displayed when the component is in an active state (`,(0,c.jsx)(t.code,{children:`active`}),` = `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`active`})}),` — A boolean property that toggles the component's state between normal and active.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`description`,children:`Description`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The `,(0,c.jsx)(t.code,{children:`icon`}),` property is essential for displaying the icon.`]}),`
`,(0,c.jsxs)(t.li,{children:[`If `,(0,c.jsx)(t.code,{children:`iconActive`}),` is not provided, there will be no visual change when the `,(0,c.jsx)(t.code,{children:`active`}),` state changes.`]}),`
`,(0,c.jsxs)(t.li,{children:[`When `,(0,c.jsx)(t.code,{children:`active`}),` is set to `,(0,c.jsx)(t.code,{children:`true`}),`, the component will attempt to display the icon specified in `,(0,c.jsx)(t.code,{children:`iconActive`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The `,(0,c.jsx)(t.code,{children:`active`}),` property can be used to create toggles, indicators, and other interactive elements.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`recommendations`,children:`Recommendations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Use `,(0,c.jsx)(t.code,{children:`iconActive`}),` to provide visual feedback upon user interaction (e.g., on click or selection).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ensure that `,(0,c.jsx)(t.code,{children:`icon`}),` and `,(0,c.jsx)(t.code,{children:`iconActive`}),` are visually distinct enough for the user to easily identify the state change.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
import { D1Icon } from '@dxtmisha/d1'

const isActive = ref(false)
<\/script>

<template>
<!-- Normal icon -->
<D1Icon icon="home" />

<!-- Active icon -->
<!-- \`favorite\` will be displayed because active=true -->
<D1Icon icon="favorite_border" icon-active="favorite" :active="true" />

<!-- Dynamic state toggle -->
<D1Icon
  icon="visibility"
  icon-active="visibility_off"
  :active="isVisible"
  @click="isVisible = !isVisible"
/>

<D1Icon
  icon="home"
  icon-active="favorite"
  :active="isActive"
  turn="90"
  @load="onIconLoad"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`The Icon component can be used both standalone and as part of other UI components through the `,(0,c.jsx)(t.code,{children:`icon`}),`, `,(0,c.jsx)(t.code,{children:`icon-trailing`}),`, and `,(0,c.jsx)(t.code,{children:`icon-active`}),` properties.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};