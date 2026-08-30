import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`адаптивное-поведение-раскладки`,children:`Адаптивное поведение раскладки`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`flexible`}),` определяет автоматическое переключение раскладки в блочный режим при нехватке места.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'adaptive'`}),` — использует медиа-запросы для определения точки перехода`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'container'`}),` — использует container queries для адаптации к размеру родителя`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Автоматически применяет свойство `,(0,c.jsx)(t.code,{children:`align="block"`}),` когда доступное пространство становится меньше определенного брейкпоинта. При `,(0,c.jsx)(t.code,{children:`adaptive`}),` отслеживает ширину экрана через медиа-запросы, при `,(0,c.jsx)(t.code,{children:`container`}),` адаптируется к размеру родительского контейнера. Подходит для создания адаптивных интерфейсов, которые корректно отображаются как на десктопе, так и на мобильных устройствах без дополнительного кода.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Автоматический переход на узких экранах -->
<Actions flexible="adaptive" :list="[...]" />

<!-- Адаптация к размеру родителя -->
<Actions flexible="container" :list="[...]" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};