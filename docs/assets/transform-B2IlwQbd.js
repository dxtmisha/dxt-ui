import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Dqnce8mp.js";import{M as l}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/styles/en/Transform"}),`
`,n.jsx(e.h1,{id:"transform",children:"Transform"}),`
`,n.jsx(e.p,{children:"A set of SCSS mixins for managing CSS transforms with CSS Custom Properties support."}),`
`,n.jsx(e.h2,{id:"mixins",children:"Mixins"}),`
`,n.jsx(e.h3,{id:"inittransform",children:n.jsx(e.code,{children:"initTransform"})}),`
`,n.jsx(e.p,{children:"Initializes transform system with CSS custom properties."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Parameters:"})," none"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`@include initTransform;
// --sys-transform-translateX: 0px;
// --sys-transform-translateY: 0px;
// --sys-transform-scale: 1;
// --sys-transform-rotate: 0;
`})}),`
`,n.jsx(e.h3,{id:"translatex",children:n.jsx(e.code,{children:"translateX"})}),`
`,n.jsx(e.p,{children:"Sets horizontal translation with RTL support."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value"})," — translation value"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include translateX(10px);
}
`})}),`
`,n.jsx(e.h3,{id:"translatey",children:n.jsx(e.code,{children:"translateY"})}),`
`,n.jsx(e.p,{children:"Sets vertical translation."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value"})," — translation value"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include translateY(10px);
}
`})}),`
`,n.jsx(e.h3,{id:"scale",children:n.jsx(e.code,{children:"scale"})}),`
`,n.jsx(e.p,{children:"Sets element scale."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value"})," — scale value"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include scale(1.5);
}
`})}),`
`,n.jsx(e.h3,{id:"rotate",children:n.jsx(e.code,{children:"rotate"})}),`
`,n.jsx(e.p,{children:"Sets element rotation."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value"})," — rotation value"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include rotate(45deg);
}
`})}),`
`,n.jsx(e.h3,{id:"transforminit",children:n.jsx(e.code,{children:"transformInit"})}),`
`,n.jsx(e.p,{children:"Applies all transform properties using CSS custom properties with RTL support for translateX."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Parameters:"})," none"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include transformInit;
}
`})}),`
`,n.jsx(e.h3,{id:"translateinit",children:n.jsx(e.code,{children:"translateInit"})}),`
`,n.jsx(e.p,{children:"Applies translate property using CSS custom properties."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Parameters:"})," none"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include translateInit;
}
`})})]})}function x(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{x as default};
