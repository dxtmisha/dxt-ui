import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`закрытие-жестом`,children:`Закрытие жестом`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`touchClose`}),` включает возможность закрытия ActionSheet жестом свайпа вниз.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`true`}),` — включает закрытие свайпом вниз (по умолчанию)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`false`}),` — отключает закрытие жестом`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`При включенном свойстве в области заголовка отображается специальная tab-полоска (индикатор перетаскивания), за которую пользователь может потянуть вниз для закрытия панели. Это следует паттернам мобильных интерфейсов iOS и Material Design, обеспечивая интуитивное взаимодействие на сенсорных устройствах.`}),`
`,(0,c.jsx)(i,{code:`
<!-- С возможностью закрытия жестом -->
<ActionSheet :touchClose="true" />

<!-- Без возможности закрытия жестом -->
<ActionSheet :touchClose="false" />
`,language:`html`}),`
`,(0,c.jsx)(t.p,{children:`Жест закрытия срабатывает при свайпе вниз в области заголовка. Компонент автоматически управляет touch-событиями и анимацией закрытия, обеспечивая плавное следование за пальцем пользователя.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};