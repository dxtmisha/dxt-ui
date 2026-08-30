import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/styles/dimension - Sizes and proportions`}),`
`,(0,c.jsx)(t.h1,{id:`dimension-system`,children:`Dimension System`}),`
`,(0,c.jsx)(t.p,{children:`The library provides mixins and functions for managing sizes, proportions, and aspect ratios using CSS variables.`}),`
`,(0,c.jsx)(t.h2,{id:`functions`,children:`Functions`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getWidthByRatio($value: String): String`}),` — Returns the width from an aspect ratio string (e.g., '16/9' -> 16).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHeightByRatio($value: String): String`}),` — Returns the height from an aspect ratio string.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`mixins`,children:`Mixins`}),`
`,(0,c.jsx)(t.h3,{id:`basic-dimensions`,children:`Basic Dimensions`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`width($value: String | Number)`}),` — Sets the `,(0,c.jsx)(t.code,{children:`width`}),` property and `,(0,c.jsx)(t.code,{children:`--sys-width`}),` variable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`height($value: String | Number)`}),` — Sets the `,(0,c.jsx)(t.code,{children:`height`}),` property and `,(0,c.jsx)(t.code,{children:`--sys-height`}),` variable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`widthBasis($value: String | Number)`}),` — Sets `,(0,c.jsx)(t.code,{children:`width`}),`, `,(0,c.jsx)(t.code,{children:`flex-basis`}),`, and restricts `,(0,c.jsx)(t.code,{children:`max-width`}),` to 100%.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`heightBasis($value: String | Number)`}),` — Sets `,(0,c.jsx)(t.code,{children:`height`}),`, `,(0,c.jsx)(t.code,{children:`flex-basis`}),`, and restricts `,(0,c.jsx)(t.code,{children:`max-height`}),` to 100%.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`responsive-dimensions-viewport`,children:`Responsive Dimensions (Viewport)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`widthDevice($value: String | Number)`}),` — Sets width in dynamic viewport units (`,(0,c.jsx)(t.code,{children:`dvw`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`heightDevice($value: String | Number)`}),` — Sets height in dynamic viewport units (`,(0,c.jsx)(t.code,{children:`dvh`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxWidthDevice($value: String | Number)`}),` — Sets `,(0,c.jsx)(t.code,{children:`max-width`}),` in dynamic viewport units (`,(0,c.jsx)(t.code,{children:`dvw`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxHeightDevice($value: String | Number)`}),` — Sets `,(0,c.jsx)(t.code,{children:`max-height`}),` in dynamic viewport units (`,(0,c.jsx)(t.code,{children:`dvh`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`aspect-ratio-and-shapes`,children:`Aspect Ratio and Shapes`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`aspectRatio($value: String | Number)`}),` — Sets the `,(0,c.jsx)(t.code,{children:`aspect-ratio`}),` property.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`aspectRatioWidth($value: String | Number)`}),` — Alias for the `,(0,c.jsx)(t.code,{children:`aspectRatio`}),` mixin.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`aspectRatioHeight($value: String | Number)`}),` — Alias for the `,(0,c.jsx)(t.code,{children:`aspectRatio`}),` mixin.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`squared($value: String | Number)`}),` — Applies `,(0,c.jsx)(t.code,{children:`widthBasis`}),` and sets `,(0,c.jsx)(t.code,{children:`aspect-ratio: 1/1`}),` to create a perfect square.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`circle($value: String | Number)`}),` — Applies the `,(0,c.jsx)(t.code,{children:`squared`}),` mixin and sets `,(0,c.jsx)(t.code,{children:`border-radius: 100%`}),` to create a circle.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};