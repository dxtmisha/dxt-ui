import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`focus`,children:(0,c.jsx)(t.code,{children:`focus`})}),`
`,(0,c.jsx)(t.p,{children:`Emitted when the input cell receives focus.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: number | string`}),` — the index of the focused cell`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`input`,children:(0,c.jsx)(t.code,{children:`input`})}),`
`,(0,c.jsx)(t.p,{children:`Emitted when a character is entered or modified in the cell.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: number | string`}),` — the index of the cell`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string`}),` — the newly entered character`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`paste`,children:(0,c.jsx)(t.code,{children:`paste`})}),`
`,(0,c.jsx)(t.p,{children:`Emitted when a paste event occurs on the input cell.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: number | string`}),` — the index of the cell`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string`}),` — the pasted text value`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`backspace`,children:(0,c.jsx)(t.code,{children:`backspace`})}),`
`,(0,c.jsx)(t.p,{children:`Emitted when the backspace key is pressed in the cell.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: number | string`}),` — the index of the cell`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleFocus = (index) => {
console.log('Focused cell index:', index)
}

const handleInput = (index, value) => {
console.log('Cell index:', index, 'Value entered:', value)
}

const handlePaste = (index, value) => {
console.log('Cell index:', index, 'Pasted text:', value)
}

const handleBackspace = (index) => {
console.log('Backspace pressed at cell:', index)
}
<\/script>

<template>
<InputCodeItem
  :index="0"
  @focus="handleFocus"
  @input="handleInput"
  @paste="handlePaste"
  @backspace="handleBackspace"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};