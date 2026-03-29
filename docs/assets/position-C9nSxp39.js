import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/styles/en/Position`}),`
`,(0,c.jsx)(n.h1,{id:`position`,children:`Position`}),`
`,(0,c.jsx)(n.p,{children:`A set of SCSS mixins for managing element positioning with CSS Custom Properties support.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`How it works:`}),` The system provides convenient mixins for positioning elements with automatic RTL support through CSS Logical Properties (inset-inline-start/end). Position mixins combine multiple positioning properties into single declarations, reducing code repetition. The `,(0,c.jsx)(n.code,{children:`absolute*`}),` mixins automatically set position: absolute and apply positioning values in one call.`]}),`
`,(0,c.jsx)(n.h2,{id:`basic-position-mixins`,children:`Basic Position Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`inset`,children:(0,c.jsx)(n.code,{children:`inset`})}),`
`,(0,c.jsx)(n.p,{children:`Sets inset property on all sides.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — inset value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include inset(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`horizon`,children:(0,c.jsx)(n.code,{children:`horizon`})}),`
`,(0,c.jsx)(n.p,{children:`Sets horizontal positioning (left and right).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — position value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include horizon(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`vertically`,children:(0,c.jsx)(n.code,{children:`vertically`})}),`
`,(0,c.jsx)(n.p,{children:`Sets vertical positioning (top and bottom).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — position value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include vertically(16px);
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`edge-position-mixins`,children:`Edge Position Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`top`,children:(0,c.jsx)(n.code,{children:`top`})}),`
`,(0,c.jsx)(n.p,{children:`Sets top position and resets horizontal edges to 0.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — top value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include top(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`bottom`,children:(0,c.jsx)(n.code,{children:`bottom`})}),`
`,(0,c.jsx)(n.p,{children:`Sets bottom position and resets horizontal edges to 0.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — bottom value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include bottom(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`left`,children:(0,c.jsx)(n.code,{children:`left`})}),`
`,(0,c.jsx)(n.p,{children:`Sets left position with RTL support via inset-inline-start.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0px`}),` — left value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include left(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`right`,children:(0,c.jsx)(n.code,{children:`right`})}),`
`,(0,c.jsx)(n.p,{children:`Sets right position with RTL support via inset-inline-end.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0px`}),` — right value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include right(16px);
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`absolute-position-mixins`,children:`Absolute Position Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`absolute`,children:(0,c.jsx)(n.code,{children:`absolute`})}),`
`,(0,c.jsx)(n.p,{children:`Sets position: absolute with inset value.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — inset value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include absolute(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`absolutetop`,children:(0,c.jsx)(n.code,{children:`absoluteTop`})}),`
`,(0,c.jsx)(n.p,{children:`Sets position: absolute with top and horizontal positioning.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — top value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include absoluteTop(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`absolutebottom`,children:(0,c.jsx)(n.code,{children:`absoluteBottom`})}),`
`,(0,c.jsx)(n.p,{children:`Sets position: absolute with bottom and horizontal positioning.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — bottom value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include absoluteBottom(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`absoluteafter`,children:(0,c.jsx)(n.code,{children:`absoluteAfter`})}),`
`,(0,c.jsx)(n.p,{children:`Sets position: relative and creates absolutely positioned ::after pseudo-element.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — inset value for ::after`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include absoluteAfter(0) {
    background: red;
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};