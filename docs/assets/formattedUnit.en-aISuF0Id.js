import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`Inline formatted text component for displaying and automatically converting units of measurement according to localized standard settings (e.g. converting Celsius to Fahrenheit, grams to ounces, meters to feet).`}),`
`,(0,c.jsx)(t.p,{children:`FormattedUnit provides a simple, clean interface for presenting measurement data cleanly in any part of the UI. It supports automatic conversion of units based on the country's default customary unit settings, localized formatting via GeoUnit, and the ability to selectively disable formatting.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic unit translation and conversion math based on locale customary settings.`}),`
`,(0,c.jsx)(t.li,{children:`Support for standard units (e.g. millimeter, centimeter, meter, kilometer, square-meter, hectare, gram, kilogram, tonne, milliliter, liter, celsius, kilometer-per-hour).`}),`
`,(0,c.jsxs)(t.li,{children:[`Formatting bypass: when `,(0,c.jsx)(t.code,{children:`formatting`}),` is `,(0,c.jsx)(t.code,{children:`false`}),`, outputs the raw value converted to a string.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Localized language overriding via the `,(0,c.jsx)(t.code,{children:`language`}),` prop.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Lightweight inline rendering (renders as a `,(0,c.jsx)(t.code,{children:`span`}),` tag).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Displaying weather and temperature values automatically adjusted to Celsius or Fahrenheit.`}),`
`,(0,c.jsx)(t.li,{children:`Showing weights and heights in either metric or customary units depending on user locale.`}),`
`,(0,c.jsx)(t.li,{children:`Formatting driving or speed values (km/h vs mph) cleanly and reactively.`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<div class="formatted-unit-examples">
  <!-- Automatically converts Celsius to Fahrenheit for en-US -->
  <FormattedUnit :value="0" unit="celsius" language="en-US"/> <!-- "32°F" -->

  <!-- Automatically formats grams locally -->
  <FormattedUnit :value="1000" unit="gram" language="ru-RU"/> <!-- "1 000 г" -->
  <FormattedUnit :value="1000" unit="gram" language="en-US"/> <!-- "35.274 oz" -->
</div>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`FormattedUnit is designed as a lightweight, inline utility component for presenting localized and converted measurement units cleanly in any part of the UI.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};