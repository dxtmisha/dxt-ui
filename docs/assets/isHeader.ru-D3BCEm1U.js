import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`заголовок-таблицы`,children:`Заголовок таблицы`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`isHeader`}),` переключает строку таблицы в режим отображения шапки (заголовка):`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Вместо стандартных ячеек данных (`,(0,c.jsx)(t.code,{children:`TableItem`}),` / `,(0,c.jsx)(t.code,{children:`<td>`}),`) рендерятся ячейки заголовков (`,(0,c.jsx)(t.code,{children:`TableHeaderItem`}),` / `,(0,c.jsx)(t.code,{children:`<th>`}),`).`]}),`
`,(0,c.jsx)(t.li,{children:`Применяются соответствующие стили шапки таблицы (шрифт, выравнивание, фон).`}),`
`,(0,c.jsxs)(t.li,{children:[`Автоматически активируется поддержка всплывающих подсказок (`,(0,c.jsx)(t.code,{children:`tooltip`}),`) при их наличии.`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<TableRecord
:isHeader="true"
:columns="['name', 'role']"
:item="{ name: 'Имя', role: 'Роль' }"
/>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};