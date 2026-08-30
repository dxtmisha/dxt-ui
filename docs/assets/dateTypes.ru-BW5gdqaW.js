import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`типы-дат-и-времени`,children:`Типы дат и времени`}),`
`,(0,c.jsx)(t.p,{children:`Типы дат в Mask обеспечивают автоматическое форматирование и валидацию для ввода даты и времени с учётом локализации.`}),`
`,(0,c.jsxs)(t.p,{children:[`Все типы дат автоматически создают маски согласно региональным настройкам, игнорируя свойство `,(0,c.jsx)(t.code,{children:`mask`}),`. Маска определяется локалью через `,(0,c.jsx)(t.code,{children:`language`}),` (DD.MM.YYYY для ru). Валидация проверяет корректность чисел, дней в месяце и диапазонов.`]}),`
`,(0,c.jsx)(t.h3,{id:`типы`,children:`Типы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date`}),` — полная дата в формате локали (DD.MM.YYYY для ru)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`datetime`}),` — дата и время (HH:MM) через пробел`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`full`}),` — полная дата и время с секундами (HH:MM:SS)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`time`}),` — время в формате HH:MM:SS`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hour-minute`}),` — часы и минуты (HH:MM)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hour`}),`, `,(0,c.jsx)(t.code,{children:`minute`}),`, `,(0,c.jsx)(t.code,{children:`second`}),` — компоненты времени`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`year`}),`, `,(0,c.jsx)(t.code,{children:`month`}),`, `,(0,c.jsx)(t.code,{children:`day`}),` — компоненты даты`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`year-month`}),`, `,(0,c.jsx)(t.code,{children:`day-month`}),` — комбинации даты`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`локализация`,children:`Локализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Форматы адаптируются через свойство `,(0,c.jsx)(t.code,{children:`language`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ru`}),`, `,(0,c.jsx)(t.code,{children:`de`}),` — DD.MM.YYYY (31.12.2024)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`en-US`}),` — MM/DD/YYYY (12/31/2024)`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(i,{code:`
<!-- Русский формат даты -->
<Mask type="date" language="ru" />

<!-- Полная дата и время -->
<Mask type="datetime" language="ru" />

<!-- Английский формат даты -->
<Mask type="date" language="en-US" />

<!-- Только время -->
<Mask type="time" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};