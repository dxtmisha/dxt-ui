import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for displaying character count and input limits in form fields with customizable formatting templates.`}),`
`,(0,c.jsx)(t.p,{children:`FieldCounter provides visual feedback about the number of entered characters, automatically formats display depending on the presence of a maximum limit, and supports flexible customization through templates with placeholders. The component integrates with text fields and text areas, providing users with information about restrictions and remaining input space.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Display current number of entered characters`}),`
`,(0,c.jsx)(t.li,{children:`Automatic maximum limit display when present`}),`
`,(0,c.jsx)(t.li,{children:`Flexible formatting templates with [c] and [m] placeholders`}),`
`,(0,c.jsx)(t.li,{children:`Automatic format detection (50 / 100 or just 50)`}),`
`,(0,c.jsx)(t.li,{children:`Support for string and numeric counter and maxlength values`}),`
`,(0,c.jsx)(t.li,{children:`Smart visibility management via counterShow property`}),`
`,(0,c.jsx)(t.li,{children:`Compact display for space efficiency`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Text fields with character count limits`}),`
`,(0,c.jsx)(t.li,{children:`Multi-line text areas (textarea) for descriptions`}),`
`,(0,c.jsx)(t.li,{children:`Comment input fields with limits`}),`
`,(0,c.jsx)(t.li,{children:`Forms with minimum/maximum length requirements`}),`
`,(0,c.jsx)(t.li,{children:`SMS editors with character counting`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Basic counter -->
<Component :counter="10" />

<!-- With limit -->
<Component :counter="10" :maxlength="100" />

<!-- Custom template -->
<Component :counter="5" :maxlength="50" template="[c] of [m]" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};