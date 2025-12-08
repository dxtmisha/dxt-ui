import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Zkkrlp1B.js";import{M as c}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function l(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/styles/ru/Position"}),`
`,n.jsx(e.h1,{id:"position",children:"Position"}),`
`,n.jsx(e.p,{children:"Набор SCSS миксинов для управления позиционированием элементов с поддержкой CSS Custom Properties."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Как это работает:"})," Система предоставляет удобные миксины для позиционирования элементов с автоматической поддержкой RTL через CSS Logical Properties (inset-inline-start/end). Миксины позиционирования объединяют несколько свойств позиционирования в одно объявление, уменьшая дублирование кода. Миксины ",n.jsx(e.code,{children:"absolute*"})," автоматически устанавливают position: absolute и применяют значения позиционирования в одном вызове."]}),`
`,n.jsx(e.h2,{id:"базовые-миксины-позиционирования",children:"Базовые миксины позиционирования"}),`
`,n.jsx(e.h3,{id:"inset",children:n.jsx(e.code,{children:"inset"})}),`
`,n.jsx(e.p,{children:"Устанавливает свойство inset со всех сторон."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — значение inset"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include inset(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"horizon",children:n.jsx(e.code,{children:"horizon"})}),`
`,n.jsx(e.p,{children:"Устанавливает горизонтальное позиционирование (left и right)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — значение позиции"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include horizon(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"vertically",children:n.jsx(e.code,{children:"vertically"})}),`
`,n.jsx(e.p,{children:"Устанавливает вертикальное позиционирование (top и bottom)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — значение позиции"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include vertically(16px);
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-краевого-позиционирования",children:"Миксины краевого позиционирования"}),`
`,n.jsx(e.h3,{id:"top",children:n.jsx(e.code,{children:"top"})}),`
`,n.jsx(e.p,{children:"Устанавливает верхнюю позицию и сбрасывает горизонтальные края в 0."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — значение top"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include top(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"bottom",children:n.jsx(e.code,{children:"bottom"})}),`
`,n.jsx(e.p,{children:"Устанавливает нижнюю позицию и сбрасывает горизонтальные края в 0."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — значение bottom"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include bottom(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"left",children:n.jsx(e.code,{children:"left"})}),`
`,n.jsx(e.p,{children:"Устанавливает левую позицию с поддержкой RTL через inset-inline-start."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0px"})," — значение left"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include left(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"right",children:n.jsx(e.code,{children:"right"})}),`
`,n.jsx(e.p,{children:"Устанавливает правую позицию с поддержкой RTL через inset-inline-end."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0px"})," — значение right"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include right(16px);
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-абсолютного-позиционирования",children:"Миксины абсолютного позиционирования"}),`
`,n.jsx(e.h3,{id:"absolute",children:n.jsx(e.code,{children:"absolute"})}),`
`,n.jsx(e.p,{children:"Устанавливает position: absolute со значением inset."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — значение inset"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include absolute(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"absolutetop",children:n.jsx(e.code,{children:"absoluteTop"})}),`
`,n.jsx(e.p,{children:"Устанавливает position: absolute с верхним и горизонтальным позиционированием."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — значение top"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include absoluteTop(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"absolutebottom",children:n.jsx(e.code,{children:"absoluteBottom"})}),`
`,n.jsx(e.p,{children:"Устанавливает position: absolute с нижним и горизонтальным позиционированием."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — значение bottom"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include absoluteBottom(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"absoluteafter",children:n.jsx(e.code,{children:"absoluteAfter"})}),`
`,n.jsx(e.p,{children:"Устанавливает position: relative и создает абсолютно позиционированный псевдоэлемент ::after."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value: 0"})," — значение inset для ::after"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include absoluteAfter(0) {
    background: red;
  }
}
`})})]})}function t(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{t as default};
