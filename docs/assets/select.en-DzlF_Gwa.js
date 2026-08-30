import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for creating dropdown selection lists with search, filtering, multiple selection, and validation support.`}),`
`,(0,c.jsx)(t.p,{children:`Select is a complete selection element that combines Field, Menu, SelectValue, and Input components to create an advanced selection interface. The component automatically displays selected values as text or chips (for multiple selection), provides built-in search and option filtering, supports AJAX data loading with caching. It integrates with all Field component features including validation, labels, counters, and messages.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Single or multiple value selection`}),`
`,(0,c.jsx)(t.li,{children:`Built-in search and real-time option filtering`}),`
`,(0,c.jsx)(t.li,{children:`AJAX data loading with caching support`}),`
`,(0,c.jsx)(t.li,{children:`Editable selected value mode (editValue)`}),`
`,(0,c.jsx)(t.li,{children:`Validation with standard Field features`}),`
`,(0,c.jsx)(t.li,{children:`Keyboard navigation and accessibility support`}),`
`,(0,c.jsx)(t.li,{children:`Automatic display of selected values (text or chips)`}),`
`,(0,c.jsx)(t.li,{children:`Maximum number of selected items limitation`}),`
`,(0,c.jsx)(t.li,{children:`Icon support for dropdown arrow and search`}),`
`,(0,c.jsx)(t.li,{children:`Auto-close control for multiple selection`}),`
`,(0,c.jsx)(t.li,{children:`Integration with Field, Menu, SelectValue, Input components`}),`
`,(0,c.jsx)(t.li,{children:`Customization via slots and attributes`}),`
`,(0,c.jsx)(t.li,{children:`Responsive design for mobile devices`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Selecting values from a predefined list of options`}),`
`,(0,c.jsx)(t.li,{children:`Filtering and searching in large data lists`}),`
`,(0,c.jsx)(t.li,{children:`Multiple item selection with quantity limitation`}),`
`,(0,c.jsx)(t.li,{children:`Selection with AJAX data loading from server`}),`
`,(0,c.jsx)(t.li,{children:`Forms with validation of selected values`}),`
`,(0,c.jsx)(t.li,{children:`Combo boxes with editing capability`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedCountry = ref('us')
const selectedLanguages = ref(['js', 'ts'])

const countries = [
{ label: 'Russia', value: 'ru' },
{ label: 'USA', value: 'us' },
{ label: 'Germany', value: 'de' }
]

const languages = [
{ label: 'JavaScript', value: 'js' },
{ label: 'TypeScript', value: 'ts' },
{ label: 'Python', value: 'py' }
]
<\/script>

<template>
<!-- Simple selection -->
<Select
  v-model="selectedCountry"
  label="Country"
  placeholder="Choose a country"
  :option="countries"
/>

<!-- Multiple selection -->
<Select
  v-model="selectedLanguages"
  label="Programming languages"
  :multiple="true"
  :max="3"
  helper-message="Select up to 3 languages"
  :option="languages"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};