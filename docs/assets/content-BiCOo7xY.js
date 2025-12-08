import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Zkkrlp1B.js";import{M as l}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function t(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/styles/ru/Content"}),`
`,n.jsx(i.h1,{id:"content",children:"Content"}),`
`,n.jsx(i.p,{children:"Набор SCSS миксинов для управления видимостью контента с поддержкой CSS Custom Properties."}),`
`,n.jsx(i.h2,{id:"миксины",children:"Миксины"}),`
`,n.jsx(i.h3,{id:"contentvisibility",children:n.jsx(i.code,{children:"contentVisibility"})}),`
`,n.jsxs(i.p,{children:["Устанавливает свойство ",n.jsx(i.code,{children:"content-visibility"})," с опциональным fallback для браузеров без поддержки."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Параметры:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"$value"})," — значение content-visibility ('auto', 'hidden', 'visible')"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"$display: null"})," — fallback значение display"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Возвращает:"})," ",n.jsx(i.code,{children:"void"})]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-scss",children:`.list-item {
  @include contentVisibility('auto');
}

.hidden-section {
  @include contentVisibility('hidden', none);
}
`})})]})}function j(e={}){const{wrapper:i}={...s(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(t,{...e})}):t(e)}export{j as default};
