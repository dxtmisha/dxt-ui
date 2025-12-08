import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-Zkkrlp1B.js";import{M as r}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/styles/en/Media"}),`
`,n.jsx(e.h1,{id:"media",children:"Media"}),`
`,n.jsx(e.p,{children:"A set of SCSS functions and mixins for managing media queries and container queries with CSS Custom Properties support."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"How it works:"})," The system uses design-specific breakpoint values stored in ",n.jsx(e.code,{children:"variables.$designsMedia"})," map. The ",n.jsx(e.code,{children:"media()"})," function retrieves breakpoint values based on current design system. Mixins provide convenient wrappers for media queries and container queries, automatically handling min/max width calculations and range queries."]}),`
`,n.jsx(e.h2,{id:"functions",children:"Functions"}),`
`,n.jsx(e.h3,{id:"media-1",children:n.jsx(e.code,{children:"media"})}),`
`,n.jsx(e.p,{children:"Returns breakpoint value for media queries."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$width"})," — size name (e.g., 'sm', 'md', 'lg')"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"String"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$breakpoint: media('md'); // returns breakpoint value
`})}),`
`,n.jsx(e.h2,{id:"media-query-mixins",children:"Media Query Mixins"}),`
`,n.jsx(e.h3,{id:"mediaminwidth",children:n.jsx(e.code,{children:"mediaMinWidth"})}),`
`,n.jsx(e.p,{children:"Creates media query with minimum width breakpoint."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$width"})," — size name"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include mediaMinWidth('md') {
    display: block;
  }
}
`})}),`
`,n.jsx(e.h3,{id:"mediamaxwidth",children:n.jsx(e.code,{children:"mediaMaxWidth"})}),`
`,n.jsx(e.p,{children:"Creates media query with maximum width breakpoint."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$width"})," — size name"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include mediaMaxWidth('md') {
    display: none;
  }
}
`})}),`
`,n.jsx(e.h3,{id:"mediaminmaxwidth",children:n.jsx(e.code,{children:"mediaMinMaxWidth"})}),`
`,n.jsx(e.p,{children:"Creates media query with min and max width range."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$min"})," — minimum size name"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$max"})," — maximum size name"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include mediaMinMaxWidth('sm', 'lg') {
    padding: 16px;
  }
}
`})}),`
`,n.jsx(e.h2,{id:"container-query-mixins",children:"Container Query Mixins"}),`
`,n.jsx(e.h3,{id:"containerminwidth",children:n.jsx(e.code,{children:"containerMinWidth"})}),`
`,n.jsx(e.p,{children:"Creates container query with minimum width breakpoint."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$width"})," — size name"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include containerMinWidth('md') {
    display: grid;
  }
}
`})}),`
`,n.jsx(e.h3,{id:"containermaxwidth",children:n.jsx(e.code,{children:"containerMaxWidth"})}),`
`,n.jsx(e.p,{children:"Creates container query with maximum width breakpoint."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$width"})," — size name"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include containerMaxWidth('md') {
    display: flex;
  }
}
`})}),`
`,n.jsx(e.h3,{id:"containerminmaxwidth",children:n.jsx(e.code,{children:"containerMinMaxWidth"})}),`
`,n.jsx(e.p,{children:"Creates container query with min and max width range."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$min"})," — minimum size name"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$max"})," — maximum size name"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include containerMinMaxWidth('sm', 'lg') {
    gap: 16px;
  }
}
`})})]})}function m(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{m as default};
