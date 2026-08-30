import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/styles/color/| functions/getColorValueSys - Системный цвет`}),`
`,(0,c.jsx)(t.h1,{id:`getcolorvaluesys`,children:(0,c.jsx)(t.code,{children:`getColorValueSys`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция возвращает отформатированное значение CSS `,(0,c.jsx)(t.code,{children:`rgba()`}),` специально для текущего цвета, фона, обводки или свойств заливки дизайн-системы.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$prop: String`}),` — имя системного свойства (например,, 'color', 'background', 'border').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$defaultValue: Color | String`}),` [null] — необязательное резервное значение цвета.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`String`}),` — отформатированная строка CSS `,(0,c.jsx)(t.code,{children:`rgba()`}),`, ссылающаяся на `,(0,c.jsx)(t.code,{children:`--sys-[prop]`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$color: styles.getColorValueSys('color'); 
// rgba(var(--sys-color), var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)))

$border: styles.getColorValueSys('border', #cccccc);
// rgba(var(--sys-border, 204, 204, 204), var(--sys-border-opacity, var(--sys-border-opacity-custom, 1)))
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};