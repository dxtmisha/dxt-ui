import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/styles/color/fill - Заливка SVG`}),`
`,(0,c.jsx)(t.h1,{id:`fill`,children:(0,c.jsx)(t.code,{children:`fill`})}),`
`,(0,c.jsxs)(t.p,{children:[`Миксин устанавливает свойство `,(0,c.jsx)(t.code,{children:`fill`}),` (для SVG-элементов), используя переменные дизайн-системы, что позволяет обеспечить динамическое обновление и контроль прозрачности.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$color: Color | String`}),` — значение цвета, `,(0,c.jsx)(t.code,{children:`'as-color'`}),` или `,(0,c.jsx)(t.code,{children:`'init'`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$opacity: Number | null`}),` [null] — необязательный уровень прозрачности [0..1].`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$important: Boolean`}),` [false] — если `,(0,c.jsx)(t.code,{children:`true`}),`, добавляет `,(0,c.jsx)(t.code,{children:`!important`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.icon-solid {
  @include styles.fill(styles.getColor('primary'), 1);
}

.icon-reset {
  @include styles.fill('init');
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};