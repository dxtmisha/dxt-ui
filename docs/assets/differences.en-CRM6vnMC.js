import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:`differences-between-table-and-tableflex`,children:`Differences between Table and TableFlex`}),`
`,(0,o.jsxs)(t.p,{children:[`Both components share a unified interface for working with structured datasets (`,(0,o.jsx)(t.code,{children:`columns`}),`, `,(0,o.jsx)(t.code,{children:`header`}),`, `,(0,o.jsx)(t.code,{children:`list`}),`, `,(0,o.jsx)(t.code,{children:`sort`}),`, `,(0,o.jsx)(t.code,{children:`search`}),`), but are built on fundamentally different technologies:`]}),`
`,(0,o.jsx)(t.h3,{id:`table`,children:`Table`}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`Table`}),` is a traditional data table component based on native HTML markup (`,(0,o.jsx)(t.code,{children:`<table>`}),`, `,(0,o.jsx)(t.code,{children:`<thead>`}),`, `,(0,o.jsx)(t.code,{children:`<tbody>`}),`, `,(0,o.jsx)(t.code,{children:`<tr>`}),`, `,(0,o.jsx)(t.code,{children:`<th>`}),`, `,(0,o.jsx)(t.code,{children:`<td>`}),`).`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Features & Pros:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Automatic Column Width Sizing`}),`: The browser automatically aligns column widths across all rows based on content length without extra configuration.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Native Accessibility (A11y)`}),`: Complete out-of-the-box table semantics for screen readers.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsxs)(t.strong,{children:[`Native `,(0,o.jsx)(t.code,{children:`rowspan`}),` Support`]}),`: Multi-row vertical cell spanning works natively out of the box.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Limitations:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Limited Responsiveness`}),`: Traditional `,(0,o.jsx)(t.code,{children:`<table>`}),` grids are hard to adapt to mobile devices (e.g., transforming rows into mobile card layouts).`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Heavy Reflow during Virtualization`}),`: Dynamic DOM row mutations inside `,(0,o.jsx)(t.code,{children:`<table>`}),` impose browser layout reflow overhead.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Typical Scenarios:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Classic data grids and analytical reports`}),`
`,(0,o.jsx)(t.li,{children:`Tables requiring dynamic text-based column auto-sizing`}),`
`,(0,o.jsxs)(t.li,{children:[`Tables with vertical cell spanning (`,(0,o.jsx)(t.code,{children:`rowspan`}),`)`]}),`
`,(0,o.jsx)(t.li,{children:`Desktop interfaces without mobile card transformation requirements`}),`
`]}),`
`,(0,o.jsx)(t.h3,{id:`tableflex`,children:`TableFlex`}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`TableFlex`}),` is a responsive flexbox table component based on block elements (`,(0,o.jsx)(t.code,{children:`<div>`}),`) with Flexbox layout (`,(0,o.jsx)(t.code,{children:`display: flex`}),`).`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Features & Pros:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`High Responsiveness & Mobile Adaptability`}),`: Cells and rows easily transform across responsive breakpoints and mobile screens (including card transformations).`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Virtual Scroll & Lazy Loading Support`}),`: High-performance rendering and virtualization of huge datasets via `,(0,o.jsx)(t.code,{children:`TableFlexRecordLazy`}),` (`,(0,o.jsx)(t.code,{children:`lazy`}),`).`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Full Control over Column Proportions`}),`: Precise column sizing control via `,(0,o.jsx)(t.code,{children:`flex-grow`}),`, `,(0,o.jsx)(t.code,{children:`flex-basis`}),`, and `,(0,o.jsx)(t.code,{children:`min-width: 0`}),`.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsxs)(t.strong,{children:[`Seamless Sticky Column Positioning (`,(0,o.jsx)(t.code,{children:`stickyLeft`}),`)`]}),`: Smooth sticky left column behavior without table context constraints.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Limitations:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Independent Row Sizing`}),`: Each row is an independent flex container. Ensuring column alignment across rows requires `,(0,o.jsx)(t.code,{children:`min-width: 0`}),` or explicit `,(0,o.jsx)(t.code,{children:`flex-grow`}),` proportions.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsxs)(t.strong,{children:[`No Native `,(0,o.jsx)(t.code,{children:`rowspan`})]}),`: Vertical cell spanning across rows is not natively supported due to isolated flex containers.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Typical Scenarios:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Data lists and tables requiring mobile responsiveness`}),`
`,(0,o.jsx)(t.li,{children:`High-volume data tables requiring row virtualization and lazy loading`}),`
`,(0,o.jsx)(t.li,{children:`Tables requiring exact column flex proportion control`}),`
`]}),`
`,(0,o.jsx)(t.h3,{id:`component-selection`,children:`Component Selection`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Use Table`}),` when you need a traditional data report with automatic content-based column sizing and native `,(0,o.jsx)(t.code,{children:`rowspan`}),` support.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Use TableFlex`}),` when you need mobile responsiveness, virtual scrolling, or lazy loading for large datasets.`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=r(),t()})))()}s();export{a as default};