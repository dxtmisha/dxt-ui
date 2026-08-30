import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`managing-action-button-groups`,children:`Managing action button groups`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`list`}),` and `,(0,c.jsx)(t.code,{children:`listSecondary`}),` properties work together to organize buttons in the Actions container. They manage the rendering of primary and secondary button groups with automatic attribute application and visual separation.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list`}),` — array of configurations for primary action buttons (Cancel, Save, Apply)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listSecondary`}),` — array of configurations for secondary buttons (Delete, Reset, Export)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Each array element represents an object with button configuration, supporting all Button component properties (label, icon, disabled, primary, loading, and others). The component automatically applies base attributes from `,(0,c.jsx)(t.code,{children:`buttonAttrs`}),` to primary buttons and from `,(0,c.jsx)(t.code,{children:`buttonSecondaryAttrs`}),` to secondary ones. Secondary buttons are positioned separately with an automatic spacer and are hidden in `,(0,c.jsx)(t.code,{children:`align="center"`}),` and `,(0,c.jsx)(t.code,{children:`align="block"`}),` modes. Use `,(0,c.jsx)(t.code,{children:`list`}),` for primary actions and `,(0,c.jsx)(t.code,{children:`listSecondary`}),` for destructive or less important operations.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Primary buttons -->
<Actions
:list="[
  { label: 'Cancel', onClick: () => close() },
  { label: 'Save', primary: true, onClick: () => save() }
]"
/>

<!-- Primary and secondary buttons -->
<Actions
:list="[
  { label: 'Cancel' },
  { label: 'Save', primary: true }
]"
:list-secondary="[
  { label: 'Delete', text: true, icon: 'delete', palette: 'error' }
]"
/>

<!-- Buttons with dynamic state -->
<Actions
:list="[
  { label: 'Cancel', disabled: isProcessing },
  { label: 'Save', primary: true, loading: isLoading }
]"
:button-attrs="{ size: 'medium' }"
/>

<!-- Secondary buttons with settings -->
<Actions
:list="[{ label: 'Close' }]"
:list-secondary="[
  { label: 'Export', icon: 'download' },
  { label: 'Help', icon: 'help' }
]"
:button-secondary-attrs="{ size: 'small', text: true }"
/>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};