import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Dqnce8mp.js";import{M as o}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function t(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/styles/en/Content"}),`
`,n.jsx(i.h1,{id:"content",children:"Content"}),`
`,n.jsx(i.p,{children:"A set of SCSS mixins for managing content visibility with CSS Custom Properties support."}),`
`,n.jsx(i.h2,{id:"mixins",children:"Mixins"}),`
`,n.jsx(i.h3,{id:"contentvisibility",children:n.jsx(i.code,{children:"contentVisibility"})}),`
`,n.jsxs(i.p,{children:["Sets the ",n.jsx(i.code,{children:"content-visibility"})," property with optional fallback for unsupported browsers."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Parameters:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"$value"})," — content-visibility value ('auto', 'hidden', 'visible')"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"$display: null"})," — fallback display value"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Returns:"})," ",n.jsx(i.code,{children:"void"})]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-scss",children:`.list-item {
  @include contentVisibility('auto');
}

.hidden-section {
  @include contentVisibility('hidden', none);
}
`})})]})}function a(e={}){const{wrapper:i}={...s(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(t,{...e})}):t(e)}export{a as default};
