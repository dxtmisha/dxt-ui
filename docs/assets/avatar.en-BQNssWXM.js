import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`The Avatar component is a versatile UI element used to visually represent users, entities, or brands. It supports multiple presentation fallbacks, status badges, loading skeletons, and interactive states.`}),`
`,(0,c.jsxs)(t.p,{children:[`When an image URL (`,(0,c.jsx)(t.code,{children:`src`}),`) is provided, Avatar attempts to load and render the image. If the image fails to load or isn't specified, the component dynamically falls back to text initials generated from the name `,(0,c.jsx)(t.code,{children:`label`}),` prop.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Fallback initials automatically generated from name labels (e.g., "John Doe" -> "JD")`}),`
`,(0,c.jsxs)(t.li,{children:[`Optional text shortening control (`,(0,c.jsx)(t.code,{children:`reduction`}),`) to enforce initials display`]}),`
`,(0,c.jsx)(t.li,{children:`Image rendering support with error fallbacks`}),`
`,(0,c.jsx)(t.li,{children:`Built-in loading state with skeleton animation integration`}),`
`,(0,c.jsx)(t.li,{children:`Connected status badge support (e.g. status indicator dot)`}),`
`,(0,c.jsx)(t.li,{children:`Fully accessible keyboard navigation and ARIA attributes (e.g., dynamic roles)`}),`
`,(0,c.jsxs)(t.li,{children:[`Fully interactive link navigation supporting standard anchor tags, custom routing (`,(0,c.jsx)(t.code,{children:`to`}),` prop), and custom payloads.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`User profile pictures in header menus`}),`
`,(0,c.jsx)(t.li,{children:`Chat participant list indicators`}),`
`,(0,c.jsx)(t.li,{children:`Team member list profiles`}),`
`,(0,c.jsx)(t.li,{children:`Contact lists and cards`}),`
`,(0,c.jsx)(t.li,{children:`Interactive user buttons triggering user menus`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const userImage = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80";
<\/script>

<template>
<div class="avatar-examples">
  <!-- Initials fallback avatar -->
  <Avatar label="John Doe" />

  <!-- Initials with custom reduction disabled (shows full name or fallback) -->
  <Avatar label="Иван Иванов" :reduction="false" />

  <!-- Profile image avatar -->
  <Avatar :src="userImage" label="User Profile" />

  <!-- Avatar with active online status indicator -->
  <Avatar label="Sarah Connor" :badge="{ overlap: 'circular', dot: true }" />

  <!-- Interactive avatar link -->
  <Avatar label="Link Profile" href="/profile" />
</div>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Avatar is designed to act as a robust entry point for user identity display, gracefully degrading from profile pictures to initials while maintaining full ARIA accessibility.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};