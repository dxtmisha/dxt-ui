import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.h2,{id:`режим-стрелок-аналоговых-часов-clock`,children:[`Режим стрелок аналоговых часов (`,(0,c.jsx)(t.code,{children:`clock`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`При установке флага `,(0,c.jsx)(t.code,{children:`clock`}),` компонент переходит в режим отображения времени без возможности интерактивного выбора. В этом режиме отображаются стрелки времени:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`clock: boolean`}),` — включает отображение аналоговых часов и стрелок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hour: number`}),` — позиция часовой стрелки (`,(0,c.jsx)(t.code,{children:`arrowHour`}),`) с непрерывным смещением по минутам и секундам.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`minute: number`}),` — позиция минутной стрелки (`,(0,c.jsx)(t.code,{children:`arrowMinute`}),`) со смещением по секундам.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`second: number`}),` — позиция секундной стрелки (`,(0,c.jsx)(t.code,{children:`arrowSecond`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`В центре циферблата отображается ось-точка (`,(0,c.jsx)(t.code,{children:`point`}),`), соединяющая стрелки.`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Отображение аналогового времени 10:15:30 -->
<ClockDial
  clock
  type="12"
  :hour="10"
  :minute="15"
  :second="30"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};