import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{d as r,f as i,s as a}from"./blocks-BDI5G1Gi.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/wiki/styles/# Layout Utilities`}),`
`,(0,l.jsx)(n.h1,{id:`layout-utilities`,children:`Layout Utilities`}),`
`,(0,l.jsx)(n.p,{children:`A set of CSS classes for organizing the spatial structure of demonstration areas within Storybook and Wiki. These classes allow you to quickly create grids, flex containers, and restrict content width.`}),`
`,(0,l.jsxs)(n.p,{children:[`All classes use the `,(0,l.jsx)(n.code,{children:`.wiki-storybook-`}),` prefix.`]}),`
`,(0,l.jsx)(n.h2,{id:`container`,children:`Container`}),`
`,(0,l.jsxs)(n.p,{children:[`The `,(0,l.jsx)(n.code,{children:`.wiki-storybook-container`}),` class initializes an `,(0,l.jsx)(n.code,{children:`inline-size`}),` container. This allows child elements to utilize `,(0,l.jsx)(n.code,{children:`@container`}),` queries.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<div class="wiki-storybook-container">
  <!-- Content that reacts to the width of this container -->
</div>
`})}),`
`,(0,l.jsx)(n.h2,{id:`grid`,children:`Grid`}),`
`,(0,l.jsxs)(n.p,{children:[`The `,(0,l.jsx)(n.code,{children:`.wiki-storybook-group`}),` class creates a CSS Grid container with 12 columns and a standard `,(0,l.jsx)(n.code,{children:`8px`}),` gap.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<div class="wiki-storybook-group">
  <div class="wiki-storybook-item wiki-storybook-item--squared--xs">Span XS</div>
  <div class="wiki-storybook-item wiki-storybook-item--squared--xs">Span XS</div>
  <div class="wiki-storybook-item wiki-storybook-item--squared--sm">Span SM</div>
</div>
`})}),`
`,(0,l.jsx)(r,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-group`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-item--squared--xs`,children:`Span XS`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-item--squared--xs`,children:`Span XS`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-item--squared--sm`,children:`Span SM`})]})}),`
`,(0,l.jsx)(n.h2,{id:`flex-layouts`,children:`Flex Layouts`}),`
`,(0,l.jsx)(n.p,{children:`Utilities for quickly aligning elements horizontally or vertically.`}),`
`,(0,l.jsx)(n.h3,{id:`standard-flex`,children:`Standard Flex`}),`
`,(0,l.jsxs)(n.p,{children:[`The `,(0,l.jsx)(n.code,{children:`.wiki-storybook-flex`}),` class — a horizontal stack with wrapping and an `,(0,l.jsx)(n.code,{children:`8px`}),` gap.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<div class="wiki-storybook-flex">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(r,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})}),`
`,(0,l.jsx)(n.h3,{id:`centering-flex-center`,children:`Centering (Flex Center)`}),`
`,(0,l.jsxs)(n.p,{children:[`The `,(0,l.jsx)(n.code,{children:`.wiki-storybook-flex-center`}),` class aligns content perfectly at the center.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<div class="wiki-storybook-flex-center">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(r,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-center`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})}),`
`,(0,l.jsx)(n.h3,{id:`vertical-alignment-flex-align-center`,children:`Vertical Alignment (Flex Align Center)`}),`
`,(0,l.jsxs)(n.p,{children:[`The `,(0,l.jsx)(n.code,{children:`.wiki-storybook-flex-align-center`}),` class aligns elements horizontally with centered vertical alignment.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<div class="wiki-storybook-flex-align-center">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(r,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-align-center`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})}),`
`,(0,l.jsx)(n.h3,{id:`vertical-stack-flex-column`,children:`Vertical Stack (Flex Column)`}),`
`,(0,l.jsxs)(n.p,{children:[`The `,(0,l.jsx)(n.code,{children:`.wiki-storybook-flex-column`}),` class arranges elements vertically with a `,(0,l.jsx)(n.code,{children:`16px`}),` gap.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<div class="wiki-storybook-flex-column">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(r,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-column`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};