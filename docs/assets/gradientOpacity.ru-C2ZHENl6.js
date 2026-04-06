import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/styles/color/gradientOpacity - Прозрачность градиента`}),`
`,(0,c.jsx)(n.h1,{id:`gradientopacity`,children:(0,c.jsx)(n.code,{children:`gradientOpacity`})}),`
`,(0,c.jsxs)(n.p,{children:[`Миксин устанавливает переменную `,(0,c.jsx)(n.code,{children:`--sys-gradient-opacity`}),`, обеспечивая независимый контроль прозрачности фонового градиента.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number | String`}),` — значение прозрачности [0..1] или переменная CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: Boolean`}),` [false] — если `,(0,c.jsx)(n.code,{children:`true`}),`, добавляет `,(0,c.jsx)(n.code,{children:`!important`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: Boolean`}),` [false] — если `,(0,c.jsx)(n.code,{children:`true`}),`, немедленно применяет свойство `,(0,c.jsx)(n.code,{children:`background-image`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.bg-gradient-faded {
  @include styles.gradientOpacity(0.5);
}

.bg-gradient-faded-important {
  @include styles.gradientOpacity(var(--my-opacity), true, true);
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};