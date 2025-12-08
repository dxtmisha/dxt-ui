import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-Zkkrlp1B.js";import{M as l}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/styles/ru/Transform"}),`
`,n.jsx(s.h1,{id:"transform",children:"Transform"}),`
`,n.jsx(s.p,{children:"Набор SCSS миксинов для управления CSS-трансформациями с поддержкой CSS Custom Properties."}),`
`,n.jsx(s.h2,{id:"миксины",children:"Миксины"}),`
`,n.jsx(s.h3,{id:"inittransform",children:n.jsx(s.code,{children:"initTransform"})}),`
`,n.jsx(s.p,{children:"Инициализирует систему трансформаций с CSS custom properties."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"void"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`@include initTransform;
// --sys-transform-translateX: 0px;
// --sys-transform-translateY: 0px;
// --sys-transform-scale: 1;
// --sys-transform-rotate: 0;
`})}),`
`,n.jsx(s.h3,{id:"translatex",children:n.jsx(s.code,{children:"translateX"})}),`
`,n.jsx(s.p,{children:"Устанавливает горизонтальное смещение с поддержкой RTL."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"$value"})," — значение смещения"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"void"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`.element {
  @include translateX(10px);
}
`})}),`
`,n.jsx(s.h3,{id:"translatey",children:n.jsx(s.code,{children:"translateY"})}),`
`,n.jsx(s.p,{children:"Устанавливает вертикальное смещение."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"$value"})," — значение смещения"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"void"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`.element {
  @include translateY(10px);
}
`})}),`
`,n.jsx(s.h3,{id:"scale",children:n.jsx(s.code,{children:"scale"})}),`
`,n.jsx(s.p,{children:"Устанавливает масштабирование элемента."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"$value"})," — значение масштаба"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"void"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`.element {
  @include scale(1.5);
}
`})}),`
`,n.jsx(s.h3,{id:"rotate",children:n.jsx(s.code,{children:"rotate"})}),`
`,n.jsx(s.p,{children:"Устанавливает поворот элемента."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"$value"})," — значение поворота"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"void"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`.element {
  @include rotate(45deg);
}
`})}),`
`,n.jsx(s.h3,{id:"transforminit",children:n.jsx(s.code,{children:"transformInit"})}),`
`,n.jsx(s.p,{children:"Применяет все свойства трансформации через CSS custom properties с поддержкой RTL для translateX."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"void"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`.element {
  @include transformInit;
}
`})}),`
`,n.jsx(s.h3,{id:"translateinit",children:n.jsx(s.code,{children:"translateInit"})}),`
`,n.jsx(s.p,{children:"Применяет свойство translate через CSS custom properties."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"void"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`.element {
  @include translateInit;
}
`})})]})}function j(e={}){const{wrapper:s}={...c(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{j as default};
