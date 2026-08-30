import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`ширина-поля`,children:`Ширина поля`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`width`}),` определяет горизонтальный размер контейнера Field.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`любое валидное CSS-значение (`,(0,c.jsx)(t.code,{children:`'320px'`}),`, `,(0,c.jsx)(t.code,{children:`'48rem'`}),`, `,(0,c.jsx)(t.code,{children:`'50%'`}),`, `,(0,c.jsx)(t.code,{children:`'min(100%,320px)'`}),`, `,(0,c.jsx)(t.code,{children:`'clamp(240px,40vw,480px)'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`дизайн-токены системы (например, `,(0,c.jsx)(t.code,{children:`'sm'`}),`, `,(0,c.jsx)(t.code,{children:`'md'`}),`, `,(0,c.jsx)(t.code,{children:`'lg'`}),` при поддержке)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'custom'`}),` — внутренняя техническая метка (не используется напрямую)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Контролирует фиксированную или относительную ширину поля, применяя значение напрямую без дополнительных обёрток. При отсутствии свойства ширина остаётся гибкой и зависит от родительского контейнера. При активном свойстве `,(0,c.jsx)(t.code,{children:`block`}),` (установлено в `,(0,c.jsx)(t.code,{children:`true`}),`) поле занимает 100% ширины независимо от заданного значения `,(0,c.jsx)(t.code,{children:`width`}),`, приоритет имеет блочный режим.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Автоматическая ширина -->
<Field label="auto" />

<!-- Фиксированная ширина -->
<Field width="320px" label="320px" />

<!-- Относительная ширина -->
<Field width="50%" label="50%" />

<!-- CSS-функции -->
<Field width="min(100%, 320px)" label="min(...)" />
<Field width="clamp(240px, 40vw, 480px)" label="clamp(...)" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};