import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`Compact visual indicator for displaying status, notification counts, or markers on interface elements with support for various display modes and automatic overflow management.`}),`
`,(0,c.jsx)(t.p,{children:`Badge provides a universal solution for creating informative indicators with flexible content configuration, positioning, and appearance. The component supports displaying text, numbers with maximum value limits, icons, and dot indicators, automatically hides when content is absent, and integrates with the slot system for customization.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Multiple display modes (text, numbers, icons, dot indicator)`}),`
`,(0,c.jsx)(t.li,{children:`Automatic overflow management with maximum value configuration`}),`
`,(0,c.jsx)(t.li,{children:`Flexible positioning relative to parent elements (overlap, vertical, horizontal)`}),`
`,(0,c.jsx)(t.li,{children:`Automatic hiding when content is absent (dot, icon, label)`}),`
`,(0,c.jsx)(t.li,{children:`Integration with LabelNumberInclude for numeric value processing`}),`
`,(0,c.jsx)(t.li,{children:`Icon support through IconInclude`}),`
`,(0,c.jsx)(t.li,{children:`Color variants for different status types`}),`
`,(0,c.jsx)(t.li,{children:`Visibility control via hide property`}),`
`,(0,c.jsx)(t.li,{children:`Customization through slots for complete content control`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Unread notification count indicators`}),`
`,(0,c.jsx)(t.li,{children:`Status markers on user avatars (online/offline)`}),`
`,(0,c.jsx)(t.li,{children:`Item counters in shopping carts or lists`}),`
`,(0,c.jsx)(t.li,{children:`New message indicators in chats`}),`
`,(0,c.jsx)(t.li,{children:`Status markers on product cards`}),`
`,(0,c.jsx)(t.li,{children:`Visual hints about available updates`}),`
`,(0,c.jsx)(t.li,{children:`Numeric indicators on tabs and menu items`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const cartCount = ref(5)
const unreadMessages = ref(127)
const isOnline = ref(true)

const addToCart = () => {
cartCount.value++
}
<\/script>

<template>
<div class="badge-examples">
  <!-- Basic badge with number -->
  <div style="position: relative; display: inline-block;">
    <IconButton icon="shopping_cart" @click="addToCart"/>
    <Badge :label="cartCount"/>
  </div>

  <!-- Badge with maximum value limit -->
  <div style="position: relative; display: inline-block;">
    <IconButton icon="notifications"/>
    <Badge :label="unreadMessages" :label-max="99"/>
  </div>

  <!-- Dot status indicator -->
  <div style="position: relative; display: inline-block;">
    <Avatar src="/user-avatar.jpg"/>
    <Badge
      dot
      :selected="isOnline"
      overlap="circular"
    />
  </div>

  <!-- Badge with icon and text -->
  <div style="position: relative; display: inline-block;">
    <Button>Profile</Button>
    <Badge
      icon="verified"
      label="Pro"
      overlap="static"
    />
  </div>

  <!-- Badge with custom positioning -->
  <div style="position: relative; display: inline-block;">
    <Card>Content</Card>
    <Badge
      label="New"
      vertical="bottom"
      horizontal="left"
    />
  </div>
</div>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Badge is designed as a universal UI component for creating compact visual indicators with comprehensive support for various content types, automatic display management, and flexible positioning settings.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};