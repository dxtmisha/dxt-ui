import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-Zkkrlp1B.js";import{M as r}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/styles/en/Position"}),`
`,n.jsx(e.h1,{id:"position",children:"Position"}),`
`,n.jsx(e.p,{children:"A set of SCSS mixins for managing element positioning with CSS Custom Properties support."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"How it works:"})," The system provides convenient mixins for positioning elements with automatic RTL support through CSS Logical Properties (inset-inline-start/end). Position mixins combine multiple positioning properties into single declarations, reducing code repetition. The ",n.jsx(e.code,{children:"absolute*"})," mixins automatically set position: absolute and apply positioning values in one call."]}),`
`,n.jsx(e.h2,{id:"basic-position-mixins",children:"Basic Position Mixins"}),`
`,n.jsx(e.h3,{id:"inset",children:n.jsx(e.code,{children:"inset"})}),`
`,n.jsx(e.p,{children:"Sets inset property on all sides."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — inset value"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include inset(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"horizon",children:n.jsx(e.code,{children:"horizon"})}),`
`,n.jsx(e.p,{children:"Sets horizontal positioning (left and right)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — position value"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include horizon(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"vertically",children:n.jsx(e.code,{children:"vertically"})}),`
`,n.jsx(e.p,{children:"Sets vertical positioning (top and bottom)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — position value"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include vertically(16px);
}
`})}),`
`,n.jsx(e.h2,{id:"edge-position-mixins",children:"Edge Position Mixins"}),`
`,n.jsx(e.h3,{id:"top",children:n.jsx(e.code,{children:"top"})}),`
`,n.jsx(e.p,{children:"Sets top position and resets horizontal edges to 0."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — top value"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include top(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"bottom",children:n.jsx(e.code,{children:"bottom"})}),`
`,n.jsx(e.p,{children:"Sets bottom position and resets horizontal edges to 0."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — bottom value"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include bottom(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"left",children:n.jsx(e.code,{children:"left"})}),`
`,n.jsx(e.p,{children:"Sets left position with RTL support via inset-inline-start."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0px"})," — left value"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include left(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"right",children:n.jsx(e.code,{children:"right"})}),`
`,n.jsx(e.p,{children:"Sets right position with RTL support via inset-inline-end."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0px"})," — right value"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include right(16px);
}
`})}),`
`,n.jsx(e.h2,{id:"absolute-position-mixins",children:"Absolute Position Mixins"}),`
`,n.jsx(e.h3,{id:"absolute",children:n.jsx(e.code,{children:"absolute"})}),`
`,n.jsx(e.p,{children:"Sets position: absolute with inset value."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — inset value"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include absolute(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"absolutetop",children:n.jsx(e.code,{children:"absoluteTop"})}),`
`,n.jsx(e.p,{children:"Sets position: absolute with top and horizontal positioning."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — top value"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include absoluteTop(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"absolutebottom",children:n.jsx(e.code,{children:"absoluteBottom"})}),`
`,n.jsx(e.p,{children:"Sets position: absolute with bottom and horizontal positioning."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — bottom value"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include absoluteBottom(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"absoluteafter",children:n.jsx(e.code,{children:"absoluteAfter"})}),`
`,n.jsx(e.p,{children:"Sets position: relative and creates absolutely positioned ::after pseudo-element."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — inset value for ::after"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include absoluteAfter(0) {
    background: red;
  }
}
`})})]})}function a(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{a as default};
