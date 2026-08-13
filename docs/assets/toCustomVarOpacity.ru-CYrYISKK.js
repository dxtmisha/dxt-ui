import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/styles/color/| functions/toCustomVarOpacity - Формат прозрачности`}),`
`,(0,c.jsx)(t.h1,{id:`tocustomvaropacity`,children:(0,c.jsx)(t.code,{children:`toCustomVarOpacity`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция модифицирует строку ссылки на переменную CSS (например, `,(0,c.jsx)(t.code,{children:`var(--name)`}),`) таким образом, чтобы она указывала на соответствующую ей переменную прозрачности (`,(0,c.jsx)(t.code,{children:`var(--name-opacity)`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$color: String`}),` — строка переменной CSS для модификации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$defaultValue: Number | null`}),` [null] — необязательное резервное значение прозрачности.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`String`}),` — модифицированная строка переменной.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$opacity: styles.toCustomVarOpacity(var(--sys-color)); 
// var(--sys-color-opacity)

$with-fallback: styles.toCustomVarOpacity(var(--sys-color), 0.5); 
// var(--sys-color-opacity, 0.5)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};