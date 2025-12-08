import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-Zkkrlp1B.js";import{M as c}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/styles/en/Selector"}),`
`,e.jsx(n.h1,{id:"selector",children:"Selector"}),`
`,e.jsx(n.p,{children:"A set of SCSS mixins for managing element state selectors with CSS Custom Properties support."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"How it works:"})," The system provides intelligent state management for interactive elements. The ",e.jsx(n.code,{children:"enabled"})," mixin automatically adds ",e.jsx(n.code,{children:":not()"})," selectors to exclude disabled, readonly, and loading states. State mixins like ",e.jsx(n.code,{children:"hover"}),", ",e.jsx(n.code,{children:"active"}),", and ",e.jsx(n.code,{children:"focus"})," wrap ",e.jsx(n.code,{children:"enabled"})," to ensure interactions only work on active elements. Special handling for ",e.jsx(n.code,{children:"focus"})," includes ",e.jsx(n.code,{children:":focus"}),", ",e.jsx(n.code,{children:":focus-within"}),", and BEM modifier for programmatic focus states."]}),`
`,e.jsx(n.h2,{id:"basic-mixins",children:"Basic Mixins"}),`
`,e.jsx(n.h3,{id:"selector-1",children:e.jsx(n.code,{children:"selector"})}),`
`,e.jsx(n.p,{children:"Creates pseudo-class selector with special handling for focus state."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$name"})," — selector name (e.g., 'hover', 'active', 'focus')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$parent: &"})," — parent selector"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.button {
  @include selector('hover') {
    background: blue;
  }
}
`})}),`
`,e.jsx(n.h3,{id:"enabled",children:e.jsx(n.code,{children:"enabled"})}),`
`,e.jsx(n.p,{children:"Applies styles only to enabled (non-disabled, non-readonly, non-loading) elements."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$parent: &"})," — parent selector"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.button {
  @include enabled {
    cursor: pointer;
  }
}
`})}),`
`,e.jsx(n.h3,{id:"enabledselector",children:e.jsx(n.code,{children:"enabledSelector"})}),`
`,e.jsx(n.p,{children:"Combines enabled state with pseudo-class selector."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$name"})," — selector name"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$parent: &"})," — parent selector"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.button {
  @include enabledSelector('hover') {
    background: blue;
  }
}
`})}),`
`,e.jsx(n.h2,{id:"state-mixins",children:"State Mixins"}),`
`,e.jsx(n.h3,{id:"hover",children:e.jsx(n.code,{children:"hover"})}),`
`,e.jsx(n.p,{children:"Applies styles on hover for enabled elements only."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$parent: &"})," — parent selector"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.button {
  @include hover {
    background: blue;
  }
}
`})}),`
`,e.jsx(n.h3,{id:"active",children:e.jsx(n.code,{children:"active"})}),`
`,e.jsx(n.p,{children:"Applies styles on active state for enabled elements only."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$parent: &"})," — parent selector"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.button {
  @include active {
    transform: scale(0.95);
  }
}
`})}),`
`,e.jsx(n.h3,{id:"focus",children:e.jsx(n.code,{children:"focus"})}),`
`,e.jsx(n.p,{children:"Applies styles on focus state for enabled elements only. Includes :focus, :focus-within, and BEM modifier."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$parent: &"})," — parent selector"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.button {
  @include focus {
    outline: 2px solid blue;
  }
}
`})}),`
`,e.jsx(n.h3,{id:"disabled",children:e.jsx(n.code,{children:"disabled"})}),`
`,e.jsx(n.p,{children:"Applies styles to disabled elements."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$parent: &"})," — parent selector"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.button {
  @include disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
`})}),`
`,e.jsx(n.h3,{id:"readonly",children:e.jsx(n.code,{children:"readonly"})}),`
`,e.jsx(n.p,{children:"Applies styles to readonly elements."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$parent: &"})," — parent selector"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.input {
  @include readonly {
    background: #f5f5f5;
  }
}
`})})]})}function x(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{x as default};
