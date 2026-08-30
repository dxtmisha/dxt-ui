import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i}from"./blocks-LSqYfV8h.js";function a(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:`headroomscroll`,children:(0,s.jsx)(t.code,{children:`headroomScroll`})}),`
`,(0,s.jsx)(t.p,{children:`Событие вызывается при изменении позиции прокрутки на целевом элементе или окне.`}),`
`,(0,s.jsx)(t.h3,{id:`headroomsticky`,children:(0,s.jsx)(t.code,{children:`headroomSticky`})}),`
`,(0,s.jsx)(t.p,{children:`Событие вызывается при изменении состояния прилипания (когда прокрутка пересекает ноль).`}),`
`,(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:[`Параметры (`,(0,s.jsx)(t.code,{children:`event: HeadroomEventItem`}),`):`]})}),`
`,(0,s.jsxs)(t.ul,{children:[`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`value: number`}),` — текущая позиция прокрутки в пикселях`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`disappearsValue: number`}),` — значение верхнего смещения в пикселях для режима скрытия disappears`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`isSticky: boolean`}),` — логический флаг, указывающий, превышает ли прокрутка ноль`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`transformThreshold: number`}),` — пороговое значение трансформации в пикселях`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`transformValue: number`}),` — смещение трансформации в пикселях, ограниченное порогом`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`transformPercent: number`}),` — процентное соотношение трансформации от 0 до 1`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`valueDifference: number`}),` — разница между предыдущей и текущей позицией прокрутки в пикселях`]}),`
`]})]})}function o(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}var s;function c(){return(c=e((()=>{s=r(),t(),i()})))()}c();export{o as default};