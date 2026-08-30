import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`круглый-прогресс-и-связанные-параметры`,children:`Круглый прогресс и связанные параметры`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`circular`}),` включает режим круглого отображения индикатора прогресса в виде кольцевого индикатора. Для оптимального контроля над внешним видом и поведением рекомендуется использовать его совместно с дополнительными свойствами.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`circular`}),` — включает режим круглого отображения прогресса`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dense`}),` — убирает внутренние отступы для компактного размещения в маленьких элементах`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`circular`}),` активирует кольцевой индикатор прогресса, который заполняется по окружности пропорционально текущему значению. `,(0,c.jsx)(t.code,{children:`dense`}),` убирает padding, делая индикатор более компактным для размещения в ограниченном пространстве.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Базовый круглый прогресс -->
<Progress circular />

<!-- Компактный круглый прогресс -->
<Progress circular dense />

<!-- С определенным значением -->
<Progress circular :value="75" />

<!-- Компактный со значением -->
<Progress circular dense :value="50" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};