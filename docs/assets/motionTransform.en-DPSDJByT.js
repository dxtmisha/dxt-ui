import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Low-level utility for managing element transforms, state transitions, and interaction flows in components with window-like behavior.`}),`
`,(0,c.jsx)(t.p,{children:`MotionTransform centralizes management of open/show/teleport states, measures element sizes, updates CSS variables, and coordinates events to create smooth and predictable animations. Provides unified API for component visibility control, click handling, and automatic closing with support for ignore zones.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Centralized state management (open, show, teleport)`}),`
`,(0,c.jsx)(t.li,{children:`Click event and auto-close coordination`}),`
`,(0,c.jsx)(t.li,{children:`Size measurement and CSS variable updates`}),`
`,(0,c.jsx)(t.li,{children:`DOM helpers for working with refs, portals, and classes`}),`
`,(0,c.jsx)(t.li,{children:`Programmatic control through imperative methods`}),`
`,(0,c.jsx)(t.li,{children:`Configurable event ignore zones`}),`
`,(0,c.jsx)(t.li,{children:`Optimized DOM manipulation`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Base utility for Window, Menu, Dialog components`}),`
`,(0,c.jsx)(t.li,{children:`Managing open/close animations`}),`
`,(0,c.jsx)(t.li,{children:`State coordination in popup elements`}),`
`,(0,c.jsx)(t.li,{children:`Component library development with window-like behavior`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
import { MotionTransform } from '@dxtmisha/constructor'

const element = ref()
const elementContext = ref()

const motion = new MotionTransform(
{ open: false, autoClose: true },
// ...other params
)

// Programmatic control
motion.go.toOpen()
motion.go.toClose()

// State access
const isOpen = motion.state.isOpen
const isShow = motion.state.isShow
<\/script>

<template>
<div ref="element">
  <!-- Content with managed transform -->
</div>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`This is a low-level utility for component library development, not intended for direct use in applications.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};