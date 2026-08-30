import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`флаги`,children:`Флаги`}),`
`,(0,c.jsxs)(t.p,{children:[`Компонент `,(0,c.jsx)(t.code,{children:`Image`}),` поддерживает отображение флагов стран. Для этого используется специальный формат значения свойства `,(0,c.jsx)(t.code,{children:`value`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Форматы:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`flag-xx`}),` — стандартный флаг (где `,(0,c.jsx)(t.code,{children:`xx`}),` — код страны ISO 3166-1 alpha-2)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`f-xx`}),` — сжатый флаг (где `,(0,c.jsx)(t.code,{children:`xx`}),` — код страны ISO 3166-1 alpha-2)`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическое определение типа флага по префиксу`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка всех стран по стандарту ISO 3166-1 alpha-2`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Стандартный флаг США -->
<Image value="flag-us" />

<!-- Сжатый флаг Германии -->
<Image value="f-de" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};