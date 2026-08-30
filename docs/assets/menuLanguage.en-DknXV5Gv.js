import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Specialized menu for selecting languages with automatic flag and name loading.`}),`
`,(0,c.jsx)(t.p,{children:`MenuLanguage is an extension of the Menu component, designed specifically for language selection. It leverages the GeoFlagRef utility to automatically populate the menu with a list of languages, including native language names and country flags where relevant. It supports all the standard Menu functionalities like Window-based popups, custom controls, and sophisticated focus management.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic generation of language list via GeoFlagRef utility`}),`
`,(0,c.jsx)(t.li,{children:`Filtering of available languages via the countryList property`}),`
`,(0,c.jsx)(t.li,{children:`Support for native language names`}),`
`,(0,c.jsx)(t.li,{children:`All standard features of the base Menu component (positioning, keyboard navigation, submenus, etc.)`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Language selection dropdowns`}),`
`,(0,c.jsx)(t.li,{children:`Localization settings in user profiles or settings page`}),`
`,(0,c.jsx)(t.li,{children:`Multilingual interface switches`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedValue = ref('en')
<\/script>

<template>
<MenuLanguage
  v-model:selected="selectedValue"
  is-selected-by-value
>
  <template #control="{ binds }">
    <button v-bind="binds">
      Select Language
    </button>
  </template>
</MenuLanguage>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};