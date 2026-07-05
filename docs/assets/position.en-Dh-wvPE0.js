import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/styles/position - Position`}),`
`,(0,c.jsx)(n.h1,{id:`element-positioning`,children:`Element Positioning`}),`
`,(0,c.jsx)(n.p,{children:`The library provides mixins for element coordinate positioning, absolute layers, pseudo-elements, and direction-aware layout boundaries.`}),`
`,(0,c.jsx)(n.h2,{id:`mixins`,children:`Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`standard-position-coordinates`,children:`Standard Position Coordinates`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`inset($value)`}),` — Sets the `,(0,c.jsx)(n.code,{children:`inset`}),` property.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`horizon($value)`}),` — Sets horizontal alignment (sets both `,(0,c.jsx)(n.code,{children:`left`}),` and `,(0,c.jsx)(n.code,{children:`right`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`vertically($value)`}),` — Sets vertical alignment (sets both `,(0,c.jsx)(n.code,{children:`top`}),` and `,(0,c.jsx)(n.code,{children:`bottom`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`top($value)`}),` — Sets `,(0,c.jsx)(n.code,{children:`top`}),` property and includes `,(0,c.jsx)(n.code,{children:`horizon`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`bottom($value)`}),` — Sets `,(0,c.jsx)(n.code,{children:`bottom`}),` property and includes `,(0,c.jsx)(n.code,{children:`horizon`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`direction-aware-positioning`,children:`Direction-Aware Positioning`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`left($value)`}),` — Sets `,(0,c.jsx)(n.code,{children:`inset-inline-start`}),` for LTR and RTL compatible positioning.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`right($value)`}),` — Sets `,(0,c.jsx)(n.code,{children:`inset-inline-end`}),` for LTR and RTL compatible positioning.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`__positionDir()`}),` — Binds physical positions to system direction properties (`,(0,c.jsx)(n.code,{children:`left: var(--d-dir-position-left)`}),` and `,(0,c.jsx)(n.code,{children:`right: var(--d-dir-position-right)`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`absolute-layout-structures`,children:`Absolute Layout Structures`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`absolute($value)`}),` — Sets absolute positioning with inset.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`absoluteTop($value)`}),` — Sets absolute positioning aligned to the top.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`absoluteBottom($value)`}),` — Sets absolute positioning aligned to the bottom.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`absoluteAfter($value)`}),` — Configures parent relative container and absolute position styles on its `,(0,c.jsx)(n.code,{children:`&::after`}),` pseudo-element.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};