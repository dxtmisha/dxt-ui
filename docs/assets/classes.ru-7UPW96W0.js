import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`управление-скроллом-при-анимации`,children:`Управление скроллом при анимации`}),`
`,(0,c.jsx)(t.p,{children:`Компонент автоматически управляет видимостью скролла во время анимации перехода, чтобы предотвратить "скачки" контента.`}),`
`,(0,c.jsx)(t.h3,{id:`использование`,children:`Использование`}),`
`,(0,c.jsxs)(t.p,{children:[`Для активации этой функции необходимо добавить класс `,(0,c.jsx)(t.code,{children:`*__scroll`}),` родительскому контейнеру, который имеет прокрутку.`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`Оберните компонент в контейнер с прокруткой.`}),`
`,(0,c.jsxs)(t.li,{children:[`Добавьте этому контейнеру класс `,(0,c.jsx)(t.code,{children:`*__scroll`}),` (где `,(0,c.jsx)(t.code,{children:`*`}),` — имя класса компонента, например `,(0,c.jsx)(t.code,{children:`d1-tabs__scroll`}),`).`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<div class="d1-tabs__scroll">
<Tabs ... />
</div>
`,language:`html`}),`
`,(0,c.jsxs)(t.p,{children:[`Во время анимации компонент автоматически добавит класс `,(0,c.jsx)(t.code,{children:`*__scroll--hidden`}),` (который применяет `,(0,c.jsx)(t.code,{children:`overflow: hidden`}),`) к этому контейнеру, а после завершения анимации удалит его.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};