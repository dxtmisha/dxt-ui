import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`date-and-time-types`,children:`Date and time types`}),`
`,(0,c.jsx)(t.p,{children:`Date types in Mask provide automatic formatting and validation for date and time input with localization support.`}),`
`,(0,c.jsxs)(t.p,{children:[`All date types automatically create masks according to regional settings, ignoring the `,(0,c.jsx)(t.code,{children:`mask`}),` property. The mask is determined by locale via `,(0,c.jsx)(t.code,{children:`language`}),` (DD.MM.YYYY for ru). Validation checks for correct numbers, days in month, and value ranges.`]}),`
`,(0,c.jsx)(t.h3,{id:`types`,children:`Types`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date`}),` — full date in locale format (MM/DD/YYYY for US)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`datetime`}),` — date and time (HH:MM) separated by space`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`full`}),` — full date and time with seconds (HH:MM:SS)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`time`}),` — time in HH:MM:SS format`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hour-minute`}),` — hours and minutes (HH:MM)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hour`}),`, `,(0,c.jsx)(t.code,{children:`minute`}),`, `,(0,c.jsx)(t.code,{children:`second`}),` — separate time components`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`year`}),`, `,(0,c.jsx)(t.code,{children:`month`}),`, `,(0,c.jsx)(t.code,{children:`day`}),` — separate date components`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`year-month`}),`, `,(0,c.jsx)(t.code,{children:`day-month`}),` — date component combinations`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`localization`,children:`Localization`}),`
`,(0,c.jsxs)(t.p,{children:[`Formats adapt via the `,(0,c.jsx)(t.code,{children:`language`}),` property:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ru`}),`, `,(0,c.jsx)(t.code,{children:`de`}),` — DD.MM.YYYY (31.12.2024)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`en-US`}),` — MM/DD/YYYY (12/31/2024)`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(i,{code:`
<!-- US date format -->
<Mask type="date" language="en-US" />

<!-- Full date and time -->
<Mask type="datetime" language="en-US" />

<!-- Russian date format -->
<Mask type="date" language="ru" />

<!-- Time only -->
<Mask type="time" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};