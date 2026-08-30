import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`Inline formatted text component for displaying numbers, currencies, and units of measurement, automatically formatted according to localized standards.`}),`
`,(0,c.jsx)(t.p,{children:`FormattedNumber provides a simple, clean interface for presenting numeric data without redundant layout wrapper tags. It supports custom locale configuration, currency formatting with standard codes, unit formatting, and the ability to selectively disable formatting.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Standard localized number formatting (decimals, separators).`}),`
`,(0,c.jsx)(t.li,{children:`Currency formatting with standard codes (e.g. USD, EUR, RUB).`}),`
`,(0,c.jsx)(t.li,{children:`Unit of measurement formatting support (e.g. kilogram, liter, percent).`}),`
`,(0,c.jsxs)(t.li,{children:[`Formatting bypass: when `,(0,c.jsx)(t.code,{children:`formatting`}),` is `,(0,c.jsx)(t.code,{children:`false`}),`, outputs the raw value converted to a string.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Localized language overriding via the `,(0,c.jsx)(t.code,{children:`language`}),` prop.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Lightweight inline rendering (renders as a `,(0,c.jsx)(t.code,{children:`span`}),` tag).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Displaying prices and financial values in product lists.`}),`
`,(0,c.jsx)(t.li,{children:`Displaying numeric values with units (weights, lengths, percentages).`}),`
`,(0,c.jsx)(t.li,{children:`Showing localized numeric statistics in dashboards or reports.`}),`
`,(0,c.jsx)(t.li,{children:`Displaying raw numbers where standard formatting is undesirable.`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<div class="formatted-number-examples">
  <!-- Basic localized number -->
  <FormattedNumber :value="1234567.89"/>

  <!-- Currency display -->
  <FormattedNumber :value="99.9" currency="USD"/>

  <!-- Unit display -->
  <FormattedNumber :value="1500" unit="kilogram"/>

  <!-- Non-formatted display -->
  <FormattedNumber :value="4500" :formatting="false"/>

  <!-- Overridden locale -->
  <FormattedNumber :value="1234.56" language="ru-RU"/>
</div>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`FormattedNumber is designed as a lightweight, inline utility component for presenting localized numbers, currencies, and units cleanly in any part of the UI.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};