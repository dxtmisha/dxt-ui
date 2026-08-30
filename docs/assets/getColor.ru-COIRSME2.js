import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/styles/color/| functions/getColor - Получить цвет`}),`
`,(0,c.jsx)(t.h1,{id:`getcolor`,children:(0,c.jsx)(t.code,{children:`getColor`})}),`
`,(0,c.jsx)(t.p,{children:`Функция форматирует значение цвета с дополнительной прозрачностью и возвращает его либо как RGBA, либо обернутым в линейный градиент.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$color: Color | String`}),` — базовый цвет для форматирования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$opacity: Number`}),` [1] — необязательный уровень прозрачности [0..1].`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$gradient: Boolean`}),` [false] — если `,(0,c.jsx)(t.code,{children:`true`}),`, возвращает значение в виде линейного градиента.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`String | Color`}),` — отформатированное значение цвета.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$solid: styles.getColor(#ff0000, 0.5); 
// rgba(255, 0, 0, 0.5)

$gradient: styles.getColor(#ff0000, 1, true); 
// linear-gradient(0deg, #ff0000, #ff0000)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};