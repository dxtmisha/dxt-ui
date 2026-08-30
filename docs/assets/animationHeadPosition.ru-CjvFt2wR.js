import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`анимация-позиции-заголовка`,children:`Анимация позиции заголовка`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`animationHeadPosition`}),` определяет поведение области Head во время анимаций показа/скрытия.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'top'`}),` — сохраняет Head вверху во время перехода (по умолчанию)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'toBottom'`}),` — анимирует Head вниз вместе с контентом`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Синхронизирует движение заголовка с анимацией контента, используя CSS-трансформации для плавных переходов. Подходит для сворачиваемых макетов, когда заголовок должен перемещаться вместе с разворачивающимся содержимым. При включенном свойстве `,(0,c.jsx)(t.code,{children:`section`}),` (установлено в `,(0,c.jsx)(t.code,{children:`true`}),`) параметр `,(0,c.jsx)(t.code,{children:`animationHeadPosition`}),` игнорируется и не влияет на поведение анимации.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Head остается вверху -->
<MotionTransform animationHeadPosition="top" />

<!-- Head движется вниз с контентом -->
<MotionTransform animationHeadPosition="toBottom" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};