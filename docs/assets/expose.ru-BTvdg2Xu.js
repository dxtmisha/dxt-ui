import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`getValue(): SliderValueType`}),` — Возвращает текущее значение слайдера.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`setValue(value: SliderValueType): void`}),` — Программно устанавливает новое значение слайдера с автоматической валидацией границ и обновлением позиции ползунка.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`increase(): void`}),` — Увеличивает значение активного ползунка на установленный шаг (`,(0,o.jsx)(t.code,{children:`step`}),`) или переходит к следующей метке в списке `,(0,o.jsx)(t.code,{children:`marks`}),`.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`decrease(): void`}),` — Уменьшает значение активного ползунка на установленный шаг (`,(0,o.jsx)(t.code,{children:`step`}),`) или переходит к предыдущей метке в списке `,(0,o.jsx)(t.code,{children:`marks`}),`.`]}),`
`]}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`SliderValueType:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`number | [number, number]`}),` — числовое значение слайдера (для одиночного режима) или пара значений `,(0,o.jsx)(t.code,{children:`[min, max]`}),` (для режима `,(0,o.jsx)(t.code,{children:`multiple`}),`).`]}),`
`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=r(),t()})))()}s();export{a as default};