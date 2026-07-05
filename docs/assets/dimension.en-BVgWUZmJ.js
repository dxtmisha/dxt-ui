import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/styles/dimension - Sizes and proportions`}),`
`,(0,c.jsx)(n.h1,{id:`dimension-system`,children:`Dimension System`}),`
`,(0,c.jsx)(n.p,{children:`The library provides mixins and functions for managing sizes, proportions, and aspect ratios using CSS variables.`}),`
`,(0,c.jsx)(n.h2,{id:`functions`,children:`Functions`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getWidthByRatio($value: String): String`}),` — Returns the width from an aspect ratio string (e.g., '16/9' -> 16).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHeightByRatio($value: String): String`}),` — Returns the height from an aspect ratio string.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`mixins`,children:`Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`basic-dimensions`,children:`Basic Dimensions`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`width($value: String | Number)`}),` — Sets the `,(0,c.jsx)(n.code,{children:`width`}),` property and `,(0,c.jsx)(n.code,{children:`--sys-width`}),` variable.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`height($value: String | Number)`}),` — Sets the `,(0,c.jsx)(n.code,{children:`height`}),` property and `,(0,c.jsx)(n.code,{children:`--sys-height`}),` variable.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`widthBasis($value: String | Number)`}),` — Sets `,(0,c.jsx)(n.code,{children:`width`}),`, `,(0,c.jsx)(n.code,{children:`flex-basis`}),`, and restricts `,(0,c.jsx)(n.code,{children:`max-width`}),` to 100%.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`heightBasis($value: String | Number)`}),` — Sets `,(0,c.jsx)(n.code,{children:`height`}),`, `,(0,c.jsx)(n.code,{children:`flex-basis`}),`, and restricts `,(0,c.jsx)(n.code,{children:`max-height`}),` to 100%.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`responsive-dimensions-viewport`,children:`Responsive Dimensions (Viewport)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`widthDevice($value: String | Number)`}),` — Sets width in dynamic viewport units (`,(0,c.jsx)(n.code,{children:`dvw`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`heightDevice($value: String | Number)`}),` — Sets height in dynamic viewport units (`,(0,c.jsx)(n.code,{children:`dvh`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maxWidthDevice($value: String | Number)`}),` — Sets `,(0,c.jsx)(n.code,{children:`max-width`}),` in dynamic viewport units (`,(0,c.jsx)(n.code,{children:`dvw`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maxHeightDevice($value: String | Number)`}),` — Sets `,(0,c.jsx)(n.code,{children:`max-height`}),` in dynamic viewport units (`,(0,c.jsx)(n.code,{children:`dvh`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`aspect-ratio-and-shapes`,children:`Aspect Ratio and Shapes`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`aspectRatio($value: String | Number)`}),` — Sets the `,(0,c.jsx)(n.code,{children:`aspect-ratio`}),` property.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`aspectRatioWidth($value: String | Number)`}),` — Alias for the `,(0,c.jsx)(n.code,{children:`aspectRatio`}),` mixin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`aspectRatioHeight($value: String | Number)`}),` — Alias for the `,(0,c.jsx)(n.code,{children:`aspectRatio`}),` mixin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`squared($value: String | Number)`}),` — Applies `,(0,c.jsx)(n.code,{children:`widthBasis`}),` and sets `,(0,c.jsx)(n.code,{children:`aspect-ratio: 1/1`}),` to create a perfect square.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`circle($value: String | Number)`}),` — Applies the `,(0,c.jsx)(n.code,{children:`squared`}),` mixin and sets `,(0,c.jsx)(n.code,{children:`border-radius: 100%`}),` to create a circle.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};