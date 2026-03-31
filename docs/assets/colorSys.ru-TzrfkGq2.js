import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/styles/color/colorSys - Системный цвет`}),`
`,(0,c.jsx)(n.h1,{id:`colorsys`,children:(0,c.jsx)(n.code,{children:`colorSys`})}),`
`,(0,c.jsxs)(n.p,{children:[`Миксин устанавливает системную переменную цвета (например, `,(0,c.jsx)(n.code,{children:`--sys-color`}),`, `,(0,c.jsx)(n.code,{children:`--sys-background`}),`), преобразуя значение с помощью `,(0,c.jsx)(n.code,{children:`toCustomVarRgb`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$prop: String`}),` — имя свойства (например, 'color', 'background').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color | String`}),` — значение цвета для установки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: Boolean`}),` [false] — если `,(0,c.jsx)(n.code,{children:`true`}),`, добавляет `,(0,c.jsx)(n.code,{children:`!important`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.sys-update {
  @include styles.colorSys('color', #ff0000);
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};