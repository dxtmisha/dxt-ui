import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-C8vOrmRQ.js";import{M as t}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function s(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/styles/ru/Scrollbar"}),`
`,n.jsx(r.h1,{id:"scrollbar",children:"Scrollbar"}),`
`,n.jsx(r.p,{children:"Набор SCSS миксинов для управления внешним видом полос прокрутки с поддержкой CSS Custom Properties."}),`
`,n.jsx(r.h2,{id:"миксины",children:"Миксины"}),`
`,n.jsx(r.h3,{id:"scrollbarhide",children:n.jsx(r.code,{children:"scrollbarHide"})}),`
`,n.jsx(r.p,{children:"Скрывает полосу прокрутки, сохраняя функциональность прокрутки."}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Возвращает:"})," ",n.jsx(r.code,{children:"void"})]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-scss",children:`.element {
  @include scrollbarHide;
  // scrollbar-width: none;
  // scroll-behavior: auto;
  // &::-webkit-scrollbar { width: 0; height: 0; }
}
`})})]})}function x(e={}){const{wrapper:r}={...o(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{x as default};
