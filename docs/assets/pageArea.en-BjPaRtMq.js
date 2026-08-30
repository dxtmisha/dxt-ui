import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`A specialized container component designed to organize and structure the main content area of a page. It provides a cohesive layout foundation for various UI blocks and sections.`}),`
`,(0,c.jsx)(t.p,{children:`PageArea acts as an orchestrator for the page's primary information, ensuring consistent spacing, alignment, and semantic grouping of nested components. It automatically determines the appropriate component to render (Page, Section, Block, or Group) based on the current nesting level or area context.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic component switching (Page -> Section -> Block -> Group) based on context`}),`
`,(0,c.jsx)(t.li,{children:`Semantic page structure organization`}),`
`,(0,c.jsx)(t.li,{children:`Integration with layout areas and context`}),`
`,(0,c.jsx)(t.li,{children:`Consistent margins and internal spacing`}),`
`,(0,c.jsx)(t.li,{children:`Support for nested UI blocks and groups`}),`
`,(0,c.jsx)(t.li,{children:`Flexible slot-based content management`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Main content wrapper for application pages`}),`
`,(0,c.jsx)(t.li,{children:`Dashboard layout orchestration`}),`
`,(0,c.jsx)(t.li,{children:`Detailed data view containers`}),`
`,(0,c.jsx)(t.li,{children:`Section grouping within large pages`}),`
`,(0,c.jsx)(t.li,{children:`Foundational structural unit for custom page layouts`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
// PageArea example
<\/script>

<template>
<PageArea>
  <!-- Your page content here -->
  <Block headline="Welcome">
    This content is organized within a PageArea.
  </Block>
</PageArea>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`PageArea is essential for maintaining a structured and consistent layout across different application views.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};