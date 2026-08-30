import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`линейный-прогресс-и-связанные-параметры`,children:`Линейный прогресс и связанные параметры`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`linear`}),` включает режим линейного отображения индикатора прогресса в виде горизонтальной полосы. Для полного контроля над поведением и внешним видом рекомендуется использовать его совместно с дополнительными свойствами.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`linear`}),` — включает режим линейного отображения прогресса`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`position`}),` — определяет позицию индикатора (`,(0,c.jsx)(t.code,{children:`'top'`}),`, `,(0,c.jsx)(t.code,{children:`'bottom'`}),`, `,(0,c.jsx)(t.code,{children:`'static'`}),`), по умолчанию `,(0,c.jsx)(t.code,{children:`'top'`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`point`}),` — добавляет точку в конце индикатора для акцентирования текущего положения`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`linear`}),` активирует горизонтальную полосу прогресса, которая заполняется пропорционально текущему значению. `,(0,c.jsx)(t.code,{children:`position`}),` управляет расположением: `,(0,c.jsx)(t.code,{children:`'top'`}),` размещает индикатор в верхней части контейнера, `,(0,c.jsx)(t.code,{children:`'bottom'`}),` — в нижней, `,(0,c.jsx)(t.code,{children:`'static'`}),` — в обычном потоке документа. `,(0,c.jsx)(t.code,{children:`point`}),` добавляет визуальный маркер на конце заполненной части.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Базовый линейный прогресс -->
<Progress linear />

<!-- С позиционированием снизу -->
<Progress linear position="bottom" />

<!-- С точкой в статичной позиции -->
<Progress linear position="static" point />

<!-- С определенным значением -->
<Progress linear position="top" point :value="65" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};