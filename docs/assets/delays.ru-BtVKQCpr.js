import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`управление-задержками-прогресса`,children:`Управление задержками прогресса`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`delay`}),` и `,(0,c.jsx)(t.code,{children:`delayHide`}),` контролируют временные параметры появления и скрытия индикатора прогресса. Эти свойства позволяют создавать более плавный пользовательский опыт, избегая мерцаний при быстрых операциях.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delay`}),` — задержка перед показом индикатора в миллисекундах, по умолчанию `,(0,c.jsx)(t.code,{children:`360`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delayHide`}),` — задержка перед скрытием индикатора в миллисекундах, по умолчанию `,(0,c.jsx)(t.code,{children:`200`})]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Стандартное значение `,(0,c.jsx)(t.code,{children:`delay="360"`}),` проверено на практике и подходит для большинства случаев. Увеличивайте `,(0,c.jsx)(t.code,{children:`delay`}),` для очень быстрых операций, где индикатор может помешать восприятию. Уменьшайте для долгих операций, где важна немедленная обратная связь.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Стандартные задержки -->
<Progress delay="360" delayHide="200" />

<!-- Быстрое появление -->
<Progress delay="100" delayHide="200" />

<!-- Медленное появление -->
<Progress delay="800" delayHide="300" />

<!-- Без задержек -->
<Progress delay="0" delayHide="0" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};