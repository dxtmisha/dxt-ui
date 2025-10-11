import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-C8vOrmRQ.js";import{M as d}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"@dxtmisha/styles/en/Dimension"}),`
`,e.jsx(n.h1,{id:"dimension",children:"Dimension"}),`
`,e.jsx(n.p,{children:"A set of SCSS functions and mixins for managing dimensions with CSS Custom Properties support."}),`
`,e.jsx(n.h2,{id:"functions",children:"Functions"}),`
`,e.jsx(n.h3,{id:"getwidthbyratio",children:e.jsx(n.code,{children:"getWidthByRatio"})}),`
`,e.jsx(n.p,{children:"Returns width based on aspect ratio values."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — aspect ratio string (e.g., '16/9')"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$width: getWidthByRatio('16/9'); // "16"
`})}),`
`,e.jsx(n.h3,{id:"getheightbyratio",children:e.jsx(n.code,{children:"getHeightByRatio"})}),`
`,e.jsx(n.p,{children:"Returns height based on aspect ratio values."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — aspect ratio string (e.g., '16/9')"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$height: getHeightByRatio('16/9'); // "9"
`})}),`
`,e.jsx(n.h2,{id:"mixins",children:"Mixins"}),`
`,e.jsx(n.h3,{id:"width",children:e.jsx(n.code,{children:"width"})}),`
`,e.jsx(n.p,{children:"Sets width with CSS custom property."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — width value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include width(200px);
}
`})}),`
`,e.jsx(n.h3,{id:"height",children:e.jsx(n.code,{children:"height"})}),`
`,e.jsx(n.p,{children:"Sets height with CSS custom property."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — height value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include height(100px);
}
`})}),`
`,e.jsx(n.h3,{id:"widthdevice",children:e.jsx(n.code,{children:"widthDevice"})}),`
`,e.jsx(n.p,{children:"Sets width using device viewport width (dvw)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — width value in dvw units"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include widthDevice(100);
}
`})}),`
`,e.jsx(n.h3,{id:"heightdevice",children:e.jsx(n.code,{children:"heightDevice"})}),`
`,e.jsx(n.p,{children:"Sets height using device viewport height (dvh)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — height value in dvh units"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include heightDevice(100);
}
`})}),`
`,e.jsx(n.h3,{id:"maxwidthdevice",children:e.jsx(n.code,{children:"maxWidthDevice"})}),`
`,e.jsx(n.p,{children:"Sets max-width using device viewport width (dvw)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — max-width value in dvw units"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include maxWidthDevice(90);
}
`})}),`
`,e.jsx(n.h3,{id:"maxheightdevice",children:e.jsx(n.code,{children:"maxHeightDevice"})}),`
`,e.jsx(n.p,{children:"Sets max-height using device viewport height (dvh)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — max-height value in dvh units"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include maxHeightDevice(80);
}
`})}),`
`,e.jsx(n.h3,{id:"widthbasis",children:e.jsx(n.code,{children:"widthBasis"})}),`
`,e.jsx(n.p,{children:"Sets width with flex-basis and max-width constraint."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — width value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include widthBasis(300px);
}
`})}),`
`,e.jsx(n.h3,{id:"heightbasis",children:e.jsx(n.code,{children:"heightBasis"})}),`
`,e.jsx(n.p,{children:"Sets height with flex-basis and max-height constraint."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — height value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include heightBasis(200px);
}
`})}),`
`,e.jsx(n.h3,{id:"aspectratio",children:e.jsx(n.code,{children:"aspectRatio"})}),`
`,e.jsx(n.p,{children:"Sets aspect ratio."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — aspect ratio value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include aspectRatio(16/9);
}
`})}),`
`,e.jsx(n.h3,{id:"aspectratiowidth",children:e.jsx(n.code,{children:"aspectRatioWidth"})}),`
`,e.jsx(n.p,{children:"Sets aspect ratio (alias for aspectRatio)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — aspect ratio value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include aspectRatioWidth(16/9);
}
`})}),`
`,e.jsx(n.h3,{id:"aspectratioheight",children:e.jsx(n.code,{children:"aspectRatioHeight"})}),`
`,e.jsx(n.p,{children:"Sets aspect ratio (alias for aspectRatio)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — aspect ratio value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include aspectRatioHeight(4/3);
}
`})}),`
`,e.jsx(n.h3,{id:"squared",children:e.jsx(n.code,{children:"squared"})}),`
`,e.jsx(n.p,{children:"Creates a square element with aspect ratio 1:1."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — size value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include squared(100px);
}
`})}),`
`,e.jsx(n.h3,{id:"circle",children:e.jsx(n.code,{children:"circle"})}),`
`,e.jsx(n.p,{children:"Creates a circular element."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — size value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include circle(50px);
}
`})})]})}function j(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
