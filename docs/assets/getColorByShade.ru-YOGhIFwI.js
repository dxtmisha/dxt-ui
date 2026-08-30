import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/styles/color/| functions/getColorByShade - Цвет по оттенку`}),`
`,(0,c.jsx)(t.h1,{id:`getcolorbyshade`,children:(0,c.jsx)(t.code,{children:`getColorByShade`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция ищет конкретный уровень насыщенности (оттенок) в списке оттенков активного дизайна из файла `,(0,c.jsx)(t.code,{children:`variables.scss`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$color: String`}),` — значение цвета или строка переменной для поиска.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`String | null`}),` — полное имя переменной оттенка (например,, `,(0,c.jsx)(t.code,{children:`--d1-palette-500`}),`) или null,, если совпадение не найдено.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$shade: styles.getColorByShade('var(--d1-500)'); // '--d1-palette-500'
$none: styles.getColorByShade('red'); // null
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};