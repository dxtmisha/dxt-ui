import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/styles/en/Selector`}),`
`,(0,c.jsx)(n.h1,{id:`selector`,children:`Selector`}),`
`,(0,c.jsx)(n.p,{children:`A set of SCSS mixins for managing element state selectors with CSS Custom Properties support.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`How it works:`}),` The system provides intelligent state management for interactive elements. The `,(0,c.jsx)(n.code,{children:`enabled`}),` mixin automatically adds `,(0,c.jsx)(n.code,{children:`:not()`}),` selectors to exclude disabled, readonly, and loading states. State mixins like `,(0,c.jsx)(n.code,{children:`hover`}),`, `,(0,c.jsx)(n.code,{children:`active`}),`, and `,(0,c.jsx)(n.code,{children:`focus`}),` wrap `,(0,c.jsx)(n.code,{children:`enabled`}),` to ensure interactions only work on active elements. Special handling for `,(0,c.jsx)(n.code,{children:`focus`}),` includes `,(0,c.jsx)(n.code,{children:`:focus`}),`, `,(0,c.jsx)(n.code,{children:`:focus-within`}),`, and BEM modifier for programmatic focus states.`]}),`
`,(0,c.jsx)(n.h2,{id:`basic-mixins`,children:`Basic Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`selector-1`,children:(0,c.jsx)(n.code,{children:`selector`})}),`
`,(0,c.jsx)(n.p,{children:`Creates pseudo-class selector with special handling for focus state.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$name`}),` — selector name (e.g., 'hover', 'active', 'focus')`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — parent selector`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  @include selector('hover') {
    background: blue;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`enabled`,children:(0,c.jsx)(n.code,{children:`enabled`})}),`
`,(0,c.jsx)(n.p,{children:`Applies styles only to enabled (non-disabled, non-readonly, non-loading) elements.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — parent selector`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  @include enabled {
    cursor: pointer;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`enabledselector`,children:(0,c.jsx)(n.code,{children:`enabledSelector`})}),`
`,(0,c.jsx)(n.p,{children:`Combines enabled state with pseudo-class selector.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$name`}),` — selector name`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — parent selector`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  @include enabledSelector('hover') {
    background: blue;
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`state-mixins`,children:`State Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`hover`,children:(0,c.jsx)(n.code,{children:`hover`})}),`
`,(0,c.jsx)(n.p,{children:`Applies styles on hover for enabled elements only.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — parent selector`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  @include hover {
    background: blue;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`active`,children:(0,c.jsx)(n.code,{children:`active`})}),`
`,(0,c.jsx)(n.p,{children:`Applies styles on active state for enabled elements only.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — parent selector`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  @include active {
    transform: scale(0.95);
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`focus`,children:(0,c.jsx)(n.code,{children:`focus`})}),`
`,(0,c.jsx)(n.p,{children:`Applies styles on focus state for enabled elements only. Includes :focus, :focus-within, and BEM modifier.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — parent selector`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  @include focus {
    outline: 2px solid blue;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`disabled`,children:(0,c.jsx)(n.code,{children:`disabled`})}),`
`,(0,c.jsx)(n.p,{children:`Applies styles to disabled elements.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — parent selector`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  @include disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`readonly`,children:(0,c.jsx)(n.code,{children:`readonly`})}),`
`,(0,c.jsx)(n.p,{children:`Applies styles to readonly elements.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — parent selector`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.input {
  @include readonly {
    background: #f5f5f5;
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};