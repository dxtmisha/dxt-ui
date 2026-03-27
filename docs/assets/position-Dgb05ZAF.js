import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/styles/ru/Position`}),`
`,(0,c.jsx)(n.h1,{id:`position`,children:`Position`}),`
`,(0,c.jsx)(n.p,{children:`Набор SCSS миксинов для управления позиционированием элементов с поддержкой CSS Custom Properties.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Как это работает:`}),` Система предоставляет удобные миксины для позиционирования элементов с автоматической поддержкой RTL через CSS Logical Properties (inset-inline-start/end). Миксины позиционирования объединяют несколько свойств позиционирования в одно объявление, уменьшая дублирование кода. Миксины `,(0,c.jsx)(n.code,{children:`absolute*`}),` автоматически устанавливают position: absolute и применяют значения позиционирования в одном вызове.`]}),`
`,(0,c.jsx)(n.h2,{id:`базовые-миксины-позиционирования`,children:`Базовые миксины позиционирования`}),`
`,(0,c.jsx)(n.h3,{id:`inset`,children:(0,c.jsx)(n.code,{children:`inset`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает свойство inset со всех сторон.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — значение inset`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include inset(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`horizon`,children:(0,c.jsx)(n.code,{children:`horizon`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает горизонтальное позиционирование (left и right).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — значение позиции`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include horizon(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`vertically`,children:(0,c.jsx)(n.code,{children:`vertically`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает вертикальное позиционирование (top и bottom).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — значение позиции`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include vertically(16px);
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-краевого-позиционирования`,children:`Миксины краевого позиционирования`}),`
`,(0,c.jsx)(n.h3,{id:`top`,children:(0,c.jsx)(n.code,{children:`top`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает верхнюю позицию и сбрасывает горизонтальные края в 0.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — значение top`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include top(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`bottom`,children:(0,c.jsx)(n.code,{children:`bottom`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает нижнюю позицию и сбрасывает горизонтальные края в 0.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — значение bottom`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include bottom(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`left`,children:(0,c.jsx)(n.code,{children:`left`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает левую позицию с поддержкой RTL через inset-inline-start.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0px`}),` — значение left`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include left(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`right`,children:(0,c.jsx)(n.code,{children:`right`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает правую позицию с поддержкой RTL через inset-inline-end.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0px`}),` — значение right`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include right(16px);
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-абсолютного-позиционирования`,children:`Миксины абсолютного позиционирования`}),`
`,(0,c.jsx)(n.h3,{id:`absolute`,children:(0,c.jsx)(n.code,{children:`absolute`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает position: absolute со значением inset.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — значение inset`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include absolute(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`absolutetop`,children:(0,c.jsx)(n.code,{children:`absoluteTop`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает position: absolute с верхним и горизонтальным позиционированием.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — значение top`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include absoluteTop(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`absolutebottom`,children:(0,c.jsx)(n.code,{children:`absoluteBottom`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает position: absolute с нижним и горизонтальным позиционированием.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — значение bottom`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include absoluteBottom(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`absoluteafter`,children:(0,c.jsx)(n.code,{children:`absoluteAfter`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает position: relative и создает абсолютно позиционированный псевдоэлемент ::after.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value: 0`}),` — значение inset для ::after`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include absoluteAfter(0) {
    background: red;
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};