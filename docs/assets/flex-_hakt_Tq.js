import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Dqnce8mp.js";import{M as l}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/styles/en/Flex"}),`
`,e.jsx(n.h1,{id:"flex",children:"Flex"}),`
`,e.jsx(n.p,{children:"A set of SCSS mixins for working with flexbox layouts with CSS Custom Properties support."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"How it works:"})," The system provides convenient mixins for common flexbox patterns. Each mixin combines multiple flexbox properties into a single declaration, reducing code repetition. The mixins support both standard flex containers and inline-flex variants, with automatic alignment presets for horizontal/vertical layouts."]}),`
`,e.jsx(n.h2,{id:"basic-mixins",children:"Basic Mixins"}),`
`,e.jsx(n.h3,{id:"flex-1",children:e.jsx(n.code,{children:"flex"})}),`
`,e.jsx(n.p,{children:"Sets display: flex."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.container {
  @include flex;
}
`})}),`
`,e.jsx(n.h3,{id:"flexinline",children:e.jsx(n.code,{children:"flexInline"})}),`
`,e.jsx(n.p,{children:"Sets display: inline-flex."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.container {
  @include flexInline;
}
`})}),`
`,e.jsx(n.h2,{id:"alignment-mixins",children:"Alignment Mixins"}),`
`,e.jsx(n.h3,{id:"flexx",children:e.jsx(n.code,{children:"flexX"})}),`
`,e.jsx(n.p,{children:"Creates horizontal flex container with centered items."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.container {
  @include flexX;
  // display: flex;
  // align-items: center;
}
`})}),`
`,e.jsx(n.h3,{id:"flexy",children:e.jsx(n.code,{children:"flexY"})}),`
`,e.jsx(n.p,{children:"Creates vertical flex container with centered items."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.container {
  @include flexY;
  // display: flex;
  // align-items: center;
  // flex-flow: column;
}
`})}),`
`,e.jsx(n.h3,{id:"flexstretchx",children:e.jsx(n.code,{children:"flexStretchX"})}),`
`,e.jsx(n.p,{children:"Creates horizontal flex container with stretched items."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.container {
  @include flexStretchX;
  // display: flex;
  // align-items: stretch;
}
`})}),`
`,e.jsx(n.h3,{id:"flexstretchy",children:e.jsx(n.code,{children:"flexStretchY"})}),`
`,e.jsx(n.p,{children:"Creates vertical flex container with stretched items."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.container {
  @include flexStretchY;
  // display: flex;
  // align-items: stretch;
  // flex-flow: column;
}
`})}),`
`,e.jsx(n.h3,{id:"flexcenter",children:e.jsx(n.code,{children:"flexCenter"})}),`
`,e.jsx(n.p,{children:"Creates centered flex container (both axes)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.container {
  @include flexCenter;
  // display: flex;
  // align-items: center;
  // justify-content: center;
}
`})}),`
`,e.jsx(n.h3,{id:"flexbetween",children:e.jsx(n.code,{children:"flexBetween"})}),`
`,e.jsx(n.p,{children:"Creates flex container with space-between alignment."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.container {
  @include flexBetween;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
}
`})}),`
`,e.jsx(n.h2,{id:"inline-flex-mixins",children:"Inline Flex Mixins"}),`
`,e.jsx(n.h3,{id:"flexinlinex",children:e.jsx(n.code,{children:"flexInlineX"})}),`
`,e.jsx(n.p,{children:"Creates horizontal inline-flex container with centered items."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.container {
  @include flexInlineX;
}
`})}),`
`,e.jsx(n.h3,{id:"flexinliney",children:e.jsx(n.code,{children:"flexInlineY"})}),`
`,e.jsx(n.p,{children:"Creates vertical inline-flex container with centered items."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.container {
  @include flexInlineY;
}
`})}),`
`,e.jsx(n.h3,{id:"flexinlinecenter",children:e.jsx(n.code,{children:"flexInlineCenter"})}),`
`,e.jsx(n.p,{children:"Creates centered inline-flex container (both axes)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.container {
  @include flexInlineCenter;
}
`})}),`
`,e.jsx(n.h3,{id:"flexinlinebetween",children:e.jsx(n.code,{children:"flexInlineBetween"})}),`
`,e.jsx(n.p,{children:"Creates inline-flex container with space-between alignment."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.container {
  @include flexInlineBetween;
}
`})}),`
`,e.jsx(n.h2,{id:"utility-mixins",children:"Utility Mixins"}),`
`,e.jsx(n.h3,{id:"justifycontent",children:e.jsx(n.code,{children:"justifyContent"})}),`
`,e.jsx(n.p,{children:"Sets justify-content property."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — justify-content value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.container {
  @include justifyContent(center);
}
`})}),`
`,e.jsx(n.h3,{id:"flexposition",children:e.jsx(n.code,{children:"flexPosition"})}),`
`,e.jsx(n.p,{children:"Applies flex layout based on preset value."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — preset name ('x', 'y', 'center', 'between', 'inline-x', 'inline-y', 'inline-center', 'inline-between')"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.container {
  @include flexPosition('center');
}
`})}),`
`,e.jsx(n.h3,{id:"flexdynamic",children:e.jsx(n.code,{children:"flexDynamic"})}),`
`,e.jsx(n.p,{children:"Creates flexible item that grows and shrinks."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.item {
  @include flexDynamic;
  // flex-basis: 1px;
  // flex-grow: 1;
  // flex-shrink: 1;
}
`})})]})}function a(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{a as default};
