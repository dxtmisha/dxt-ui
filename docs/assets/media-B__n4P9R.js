import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/styles/en/Media`}),`
`,(0,c.jsx)(n.h1,{id:`media`,children:`Media`}),`
`,(0,c.jsx)(n.p,{children:`A set of SCSS functions and mixins for managing media queries and container queries with CSS Custom Properties support.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`How it works:`}),` The system uses design-specific breakpoint values stored in `,(0,c.jsx)(n.code,{children:`variables.$designsMedia`}),` map. The `,(0,c.jsx)(n.code,{children:`media()`}),` function retrieves breakpoint values based on current design system. Mixins provide convenient wrappers for media queries and container queries, automatically handling min/max width calculations and range queries.`]}),`
`,(0,c.jsx)(n.h2,{id:`functions`,children:`Functions`}),`
`,(0,c.jsx)(n.h3,{id:`media-1`,children:(0,c.jsx)(n.code,{children:`media`})}),`
`,(0,c.jsx)(n.p,{children:`Returns breakpoint value for media queries.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$width`}),` — size name (e.g., 'sm', 'md', 'lg')`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$breakpoint: media('md'); // returns breakpoint value
`})}),`
`,(0,c.jsx)(n.h2,{id:`media-query-mixins`,children:`Media Query Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`mediaminwidth`,children:(0,c.jsx)(n.code,{children:`mediaMinWidth`})}),`
`,(0,c.jsx)(n.p,{children:`Creates media query with minimum width breakpoint.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$width`}),` — size name`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include mediaMinWidth('md') {
    display: block;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`mediamaxwidth`,children:(0,c.jsx)(n.code,{children:`mediaMaxWidth`})}),`
`,(0,c.jsx)(n.p,{children:`Creates media query with maximum width breakpoint.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$width`}),` — size name`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include mediaMaxWidth('md') {
    display: none;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`mediaminmaxwidth`,children:(0,c.jsx)(n.code,{children:`mediaMinMaxWidth`})}),`
`,(0,c.jsx)(n.p,{children:`Creates media query with min and max width range.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$min`}),` — minimum size name`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$max`}),` — maximum size name`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include mediaMinMaxWidth('sm', 'lg') {
    padding: 16px;
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`container-query-mixins`,children:`Container Query Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`containerminwidth`,children:(0,c.jsx)(n.code,{children:`containerMinWidth`})}),`
`,(0,c.jsx)(n.p,{children:`Creates container query with minimum width breakpoint.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$width`}),` — size name`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include containerMinWidth('md') {
    display: grid;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`containermaxwidth`,children:(0,c.jsx)(n.code,{children:`containerMaxWidth`})}),`
`,(0,c.jsx)(n.p,{children:`Creates container query with maximum width breakpoint.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$width`}),` — size name`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include containerMaxWidth('md') {
    display: flex;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`containerminmaxwidth`,children:(0,c.jsx)(n.code,{children:`containerMinMaxWidth`})}),`
`,(0,c.jsx)(n.p,{children:`Creates container query with min and max width range.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$min`}),` — minimum size name`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$max`}),` — maximum size name`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include containerMinMaxWidth('sm', 'lg') {
    gap: 16px;
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};