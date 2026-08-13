import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{d as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/wiki/styles/# Layout Utilities`}),`
`,(0,l.jsx)(t.h1,{id:`layout-utilities`,children:`Layout Utilities`}),`
`,(0,l.jsx)(t.p,{children:`A set of CSS classes for organizing the spatial structure of demonstration areas within Storybook and Wiki. These classes allow you to quickly create grids, flex containers, and restrict content width.`}),`
`,(0,l.jsxs)(t.p,{children:[`All classes use the `,(0,l.jsx)(t.code,{children:`.wiki-storybook-`}),` prefix.`]}),`
`,(0,l.jsx)(t.h2,{id:`container`,children:`Container`}),`
`,(0,l.jsxs)(t.p,{children:[`The `,(0,l.jsx)(t.code,{children:`.wiki-storybook-container`}),` class initializes an `,(0,l.jsx)(t.code,{children:`inline-size`}),` container. This allows child elements to utilize `,(0,l.jsx)(t.code,{children:`@container`}),` queries.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-html`,children:`<div class="wiki-storybook-container">
  <!-- Content that reacts to the width of this container -->
</div>
`})}),`
`,(0,l.jsx)(t.h2,{id:`grid`,children:`Grid`}),`
`,(0,l.jsxs)(t.p,{children:[`The `,(0,l.jsx)(t.code,{children:`.wiki-storybook-group`}),` class creates a CSS Grid container with 12 columns and a standard `,(0,l.jsx)(t.code,{children:`8px`}),` gap.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-html`,children:`<div class="wiki-storybook-group">
  <div class="wiki-storybook-item wiki-storybook-item--squared--xs">Span XS</div>
  <div class="wiki-storybook-item wiki-storybook-item--squared--xs">Span XS</div>
  <div class="wiki-storybook-item wiki-storybook-item--squared--sm">Span SM</div>
</div>
`})}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-group`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-item--squared--xs`,children:`Span XS`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-item--squared--xs`,children:`Span XS`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-item--squared--sm`,children:`Span SM`})]})}),`
`,(0,l.jsx)(t.h2,{id:`flex-layouts`,children:`Flex Layouts`}),`
`,(0,l.jsx)(t.p,{children:`Utilities for quickly aligning elements horizontally or vertically.`}),`
`,(0,l.jsx)(t.h3,{id:`standard-flex`,children:`Standard Flex`}),`
`,(0,l.jsxs)(t.p,{children:[`The `,(0,l.jsx)(t.code,{children:`.wiki-storybook-flex`}),` class — a horizontal stack with wrapping and an `,(0,l.jsx)(t.code,{children:`8px`}),` gap.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-html`,children:`<div class="wiki-storybook-flex">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})}),`
`,(0,l.jsx)(t.h3,{id:`centering-flex-center`,children:`Centering (Flex Center)`}),`
`,(0,l.jsxs)(t.p,{children:[`The `,(0,l.jsx)(t.code,{children:`.wiki-storybook-flex-center`}),` class aligns content perfectly at the center.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-html`,children:`<div class="wiki-storybook-flex-center">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-center`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})}),`
`,(0,l.jsx)(t.h3,{id:`vertical-alignment-flex-align-center`,children:`Vertical Alignment (Flex Align Center)`}),`
`,(0,l.jsxs)(t.p,{children:[`The `,(0,l.jsx)(t.code,{children:`.wiki-storybook-flex-align-center`}),` class aligns elements horizontally with centered vertical alignment.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-html`,children:`<div class="wiki-storybook-flex-align-center">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-align-center`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})}),`
`,(0,l.jsx)(t.h3,{id:`vertical-stack-flex-column`,children:`Vertical Stack (Flex Column)`}),`
`,(0,l.jsxs)(t.p,{children:[`The `,(0,l.jsx)(t.code,{children:`.wiki-storybook-flex-column`}),` class arranges elements vertically with a `,(0,l.jsx)(t.code,{children:`16px`}),` gap.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-html`,children:`<div class="wiki-storybook-flex-column">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-column`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};