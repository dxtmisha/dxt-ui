import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`component-integration`,children:`Component Integration`}),`
`,(0,c.jsx)(t.p,{children:`The component provides a flexible integration layer for tabular data structures, orchestrating cell rendering based on a defined list of columns and a row data object.`}),`
`,(0,c.jsx)(t.h3,{id:`columns-and-item-configuration`,children:`Columns and Item Configuration`}),`
`,(0,c.jsx)(t.p,{children:`Data mapping and structural definition are managed via two primary properties:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`columns`}),` — an array of strings defining the sequence and keys of the active columns (e.g., `,(0,c.jsx)(t.code,{children:`['id', 'name', 'role']`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item`}),` — the current row data object containing the values to display, where keys correspond to identifiers in `,(0,c.jsx)(t.code,{children:`columns`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`For each column key in the `,(0,c.jsx)(t.code,{children:`columns`}),` array, the component automatically extracts the corresponding value from the `,(0,c.jsx)(t.code,{children:`item`}),` object (resolved as `,(0,c.jsx)(t.code,{children:`item[index]`}),`) to render the cell.`]}),`
`,(0,c.jsx)(t.h3,{id:`handling-redundant-data`,children:`Handling Redundant Data`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`item`}),` object can contain any redundant or auxiliary fields (such as database IDs, nested relations, or raw API metadata). The component filters the input and renders exclusively the properties explicitly defined in the `,(0,c.jsx)(t.code,{children:`columns`}),` array.`]}),`
`,(0,c.jsx)(t.p,{children:`This eliminates the need to reshape, sanitize, or filter the source data object prior to passing it to the component.`}),`
`,(0,c.jsx)(i,{code:`
<template>
<table>
  <tbody>
    <!-- Only 'name' and 'role' columns will be rendered -->
    <TableRecord
      :columns="['name', 'role']"
      :item="{
        id: 12,
        name: 'Alice',
        role: 'Developer',
        email: 'alice@example.com',
        status: 'active'
      }"
    />
  </tbody>
</table>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};