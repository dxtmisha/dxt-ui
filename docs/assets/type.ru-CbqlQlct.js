import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`типы-масок`,children:`Типы масок`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`type`}),` определяет режим работы маски и автоматически генерирует соответствующую структуру для различных типов данных.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'text'`}),` — базовая текстовая маска (по умолчанию)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'number'`}),`, `,(0,c.jsx)(t.code,{children:`'number-format'`}),`, `,(0,c.jsx)(t.code,{children:`'currency'`}),` — числовые типы с валидацией и локализацией`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'date'`}),`, `,(0,c.jsx)(t.code,{children:`'datetime'`}),`, `,(0,c.jsx)(t.code,{children:`'time'`}),`, `,(0,c.jsx)(t.code,{children:`'year'`}),`, `,(0,c.jsx)(t.code,{children:`'month'`}),`, `,(0,c.jsx)(t.code,{children:`'day'`}),`, `,(0,c.jsx)(t.code,{children:`'hour-minute'`}),` — типы дат и времени`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`При использовании `,(0,c.jsx)(t.code,{children:`text`}),` требуется явное указание структуры через свойство `,(0,c.jsx)(t.code,{children:`mask`}),`. Специализированные числовые типы автоматически создают резиновые маски с разделителями разрядов, валидацией и форматированием согласно региональным настройкам (`,(0,c.jsx)(t.code,{children:`language`}),`). Типы дат генерируют маски по локальным форматам с проверкой корректности введённых значений. При активации специализированного типа свойство `,(0,c.jsx)(t.code,{children:`mask`}),` игнорируется, а структура маски формируется автоматически на основе `,(0,c.jsx)(t.code,{children:`language`}),`, `,(0,c.jsx)(t.code,{children:`currency`}),` и `,(0,c.jsx)(t.code,{children:`fraction`}),`.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Текстовая маска -->
<Mask mask="+7 (***) ***-**-**" type="text" />

<!-- Валютная маска -->
<Mask type="currency" currency="RUB" language="ru" />

<!-- Маска даты -->
<Mask type="date" language="ru" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};