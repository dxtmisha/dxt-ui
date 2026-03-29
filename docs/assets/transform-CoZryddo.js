import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/styles/ru/Transform`}),`
`,(0,c.jsx)(n.h1,{id:`transform`,children:`Transform`}),`
`,(0,c.jsx)(n.p,{children:`Набор SCSS миксинов для управления CSS-трансформациями с поддержкой CSS Custom Properties.`}),`
`,(0,c.jsx)(n.h2,{id:`миксины`,children:`Миксины`}),`
`,(0,c.jsx)(n.h3,{id:`inittransform`,children:(0,c.jsx)(n.code,{children:`initTransform`})}),`
`,(0,c.jsx)(n.p,{children:`Инициализирует систему трансформаций с CSS custom properties.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@include initTransform;
// --sys-transform-translateX: 0px;
// --sys-transform-translateY: 0px;
// --sys-transform-scale: 1;
// --sys-transform-rotate: 0;
`})}),`
`,(0,c.jsx)(n.h3,{id:`translatex`,children:(0,c.jsx)(n.code,{children:`translateX`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает горизонтальное смещение с поддержкой RTL.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение смещения`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include translateX(10px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`translatey`,children:(0,c.jsx)(n.code,{children:`translateY`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает вертикальное смещение.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение смещения`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include translateY(10px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`scale`,children:(0,c.jsx)(n.code,{children:`scale`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает масштабирование элемента.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение масштаба`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include scale(1.5);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`rotate`,children:(0,c.jsx)(n.code,{children:`rotate`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает поворот элемента.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение поворота`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include rotate(45deg);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`transforminit`,children:(0,c.jsx)(n.code,{children:`transformInit`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет все свойства трансформации через CSS custom properties с поддержкой RTL для translateX.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include transformInit;
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`translateinit`,children:(0,c.jsx)(n.code,{children:`translateInit`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет свойство translate через CSS custom properties.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include translateInit;
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};