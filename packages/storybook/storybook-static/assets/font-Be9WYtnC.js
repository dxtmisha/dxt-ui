import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Zkkrlp1B.js";import{M as l}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/styles/en/Font"}),`
`,e.jsx(n.h1,{id:"font",children:"Font"}),`
`,e.jsx(n.p,{children:"A set of SCSS mixins for managing typography and text styles with CSS Custom Properties support."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"How it works:"})," The system provides mixins for text styling with automatic RTL support through dir integration. Text alignment mixins automatically invert for RTL layouts. CSS custom properties are used for font-size, line-height, and paragraph spacing, allowing dynamic theming and responsive typography."]}),`
`,e.jsx(n.h2,{id:"initialization-mixins",children:"Initialization Mixins"}),`
`,e.jsx(n.h3,{id:"initparagraphspacing",children:e.jsx(n.code,{children:"initParagraphSpacing"})}),`
`,e.jsx(n.p,{children:"Initializes paragraph spacing system for consecutive paragraphs."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@include initParagraphSpacing;
// p + p { padding-top: var(--sys-paragraph-spacing, 0); }
`})}),`
`,e.jsx(n.h2,{id:"typography-mixins",children:"Typography Mixins"}),`
`,e.jsx(n.h3,{id:"fontsize",children:e.jsx(n.code,{children:"fontSize"})}),`
`,e.jsx(n.p,{children:"Sets font size with CSS custom property."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — font size value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.text {
  @include fontSize(16px);
}
`})}),`
`,e.jsx(n.h3,{id:"lineheight",children:e.jsx(n.code,{children:"lineHeight"})}),`
`,e.jsx(n.p,{children:"Sets line height with CSS custom property."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — line height value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.text {
  @include lineHeight(1.5);
}
`})}),`
`,e.jsx(n.h3,{id:"paragraphspacing",children:e.jsx(n.code,{children:"paragraphSpacing"})}),`
`,e.jsx(n.p,{children:"Sets spacing between consecutive paragraphs."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — spacing value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.content {
  @include paragraphSpacing(1em);
}
`})}),`
`,e.jsx(n.h2,{id:"text-alignment-mixins",children:"Text Alignment Mixins"}),`
`,e.jsx(n.h3,{id:"textalign",children:e.jsx(n.code,{children:"textAlign"})}),`
`,e.jsx(n.p,{children:"Sets text alignment with automatic RTL support."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — alignment value ('left', 'right', 'center', 'justify')"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.text {
  @include textAlign('left'); // auto-inverts for RTL
}
`})}),`
`,e.jsx(n.h3,{id:"textcase",children:e.jsx(n.code,{children:"textCase"})}),`
`,e.jsx(n.p,{children:"Sets text transformation."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — text-transform value ('uppercase', 'lowercase', 'capitalize', 'none')"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.text {
  @include textCase('uppercase');
}
`})}),`
`,e.jsx(n.h2,{id:"text-overflow-mixins",children:"Text Overflow Mixins"}),`
`,e.jsx(n.h3,{id:"textoverflow",children:e.jsx(n.code,{children:"textOverflow"})}),`
`,e.jsx(n.p,{children:"Sets text overflow behavior."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — overflow value ('truncate', 'ellipsis', 'clip')"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.text {
  @include textOverflow('truncate');
}
`})}),`
`,e.jsx(n.h3,{id:"truncate",children:e.jsx(n.code,{children:"truncate"})}),`
`,e.jsx(n.p,{children:"Truncates text with ellipsis on single line."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.text {
  @include truncate;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
}
`})}),`
`,e.jsx(n.h3,{id:"clamp",children:e.jsx(n.code,{children:"clamp"})}),`
`,e.jsx(n.p,{children:"Limits text to specified number of lines with ellipsis."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$clamp"})," — number of lines"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.text {
  @include clamp(3);
  // -webkit-line-clamp: 3;
}
`})}),`
`,e.jsx(n.h2,{id:"utility-mixins",children:"Utility Mixins"}),`
`,e.jsx(n.h3,{id:"textselectnone",children:e.jsx(n.code,{children:"textSelectNone"})}),`
`,e.jsx(n.p,{children:"Disables text selection."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.text {
  @include textSelectNone;
  // user-select: none;
}
`})})]})}function o(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{o as default};
