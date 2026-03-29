import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/styles/color/| functions/getColorValueSys - Системный цвет`}),`
`,(0,c.jsx)(n.h1,{id:`getcolorvaluesys`,children:(0,c.jsx)(n.code,{children:`getColorValueSys`})}),`
`,(0,c.jsxs)(n.p,{children:[`Функция возвращает отформатированное значение CSS `,(0,c.jsx)(n.code,{children:`rgba()`}),` специально для текущего цвета, фона, обводки или свойств заливки дизайн-системы.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$prop: String`}),` — имя системного свойства (например,, 'color', 'background', 'border').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$defaultValue: Color | String`}),` [null] — необязательное резервное значение цвета.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`String`}),` — отформатированная строка CSS `,(0,c.jsx)(n.code,{children:`rgba()`}),`, ссылающаяся на `,(0,c.jsx)(n.code,{children:`--sys-[prop]`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$color: styles.getColorValueSys('color'); 
// rgba(var(--sys-color), var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)))

$border: styles.getColorValueSys('border', #cccccc);
// rgba(var(--sys-border, 204, 204, 204), var(--sys-border-opacity, var(--sys-border-opacity-custom, 1)))
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};