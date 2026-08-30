import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`точечный-индикатор`,children:`Точечный индикатор`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`dot`}),` преобразует Badge в компактный круглый индикатор без текстового содержимого, используемый для простых визуальных уведомлений о статусе.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`true`}),` — отображает Badge как точечный индикатор`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`false`}),` — отображает Badge в стандартном режиме с контентом (по умолчанию)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Создает минималистичный визуальный маркер для индикации состояний, активности или уведомлений без отображения конкретных значений. Идеально подходит для индикаторов присутствия пользователей (онлайн/оффлайн), маркеров непрочитанных уведомлений и статусных точек на элементах интерфейса. При активации свойства `,(0,c.jsx)(t.code,{children:`dot`}),` любое текстовое содержимое или числовые значения игнорируются, отображается только цветовой индикатор.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Стандартный Badge с контентом -->
<Badge label="5" />

<!-- Точечный индикатор -->
<Badge dot />

<!-- Точечный индикатор статуса онлайн -->
<Badge dot :selected="isOnline" overlap="circular" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};