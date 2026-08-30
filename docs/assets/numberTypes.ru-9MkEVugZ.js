import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`числовые-типы-масок`,children:`Числовые типы масок`}),`
`,(0,c.jsx)(t.p,{children:`Числовые типы в Mask обеспечивают специализированное форматирование и валидацию для работы с числами, валютами и финансовыми данными.`}),`
`,(0,c.jsxs)(t.p,{children:[`Числовые типы автоматически создают резиновые маски переменной длины, игнорируя свойство `,(0,c.jsx)(t.code,{children:`mask`}),`. Поддерживаются отрицательные значения и ограничения `,(0,c.jsx)(t.code,{children:`min`}),`/`,(0,c.jsx)(t.code,{children:`max`}),`. Разделители разрядов и дробной части (параметр `,(0,c.jsx)(t.code,{children:`fraction`}),`) адаптируются под выбранную локаль.`]}),`
`,(0,c.jsx)(t.h3,{id:`типы`,children:`Типы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`number`}),` — простая числовая маска без форматирования`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`number-format`}),` — числа с автоматическими разделителями разрядов`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currency`}),` — валюта с символом (₽, $, €) и форматированием`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`свойство-fraction`,children:`Свойство fraction`}),`
`,(0,c.jsx)(t.p,{children:`Определяет количество знаков после запятой:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`number`}),` — фиксированное количество знаков (например, `,(0,c.jsx)(t.code,{children:`2`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`true`}),` — автоопределение по вводу`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`false`}),`, `,(0,c.jsx)(t.code,{children:`0`}),` — только целые числа`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`локализация`,children:`Локализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Форматы адаптируются через свойство `,(0,c.jsx)(t.code,{children:`language`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ru`}),` — `,(0,c.jsx)(t.code,{children:`1 234,56`}),` (пробел и запятая)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`en-US`}),` — `,(0,c.jsx)(t.code,{children:`1,234.56`}),` (запятая и точка)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`de`}),` — `,(0,c.jsx)(t.code,{children:`1.234,56`}),` (точка и запятая)`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(i,{code:`
<!-- Форматированное число -->
<Mask type="number-format" language="ru" :fraction="2" />

<!-- Валюта -->
<Mask type="currency" currency="RUB" language="ru" />

<!-- Валюта без символа -->
<Mask type="currency" currency="USD" :currencyHide="true" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};