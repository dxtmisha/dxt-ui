import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/styles/color/| functions/getColorValue - Значение цвета`}),`
`,(0,c.jsx)(t.h1,{id:`getcolorvalue`,children:(0,c.jsx)(t.code,{children:`getColorValue`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция возвращает отформатированное значение CSS `,(0,c.jsx)(t.code,{children:`rgba()`}),` на основе заданного имени свойства, опционально используя резервный цвет по умолчанию.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$name: String`}),` — имя переменной CSS (например, `,(0,c.jsx)(t.code,{children:`--sys-color`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$defaultValue: Color | String`}),` [null] — необязательное резервное значение цвета.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`String`}),` — отформатированная строка CSS `,(0,c.jsx)(t.code,{children:`rgba()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$color: styles.getColorValue('--sys-primary'); 
// rgba(var(--sys-primary), var(--sys-primary-opacity, var(--sys-primary-opacity-custom, 1)))

$with-fallback: styles.getColorValue('--non-existent', #ff0000);
// rgba(var(--non-existent, 255, 0, 0), var(--non-existent-opacity, var(--non-existent-opacity-custom, 1)))
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};