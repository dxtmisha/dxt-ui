import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,strong:`strong`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:`хуки-жизненного-цикла`,children:`Хуки жизненного цикла`}),`
`,(0,o.jsx)(t.h3,{id:`preparation`,children:(0,o.jsx)(t.code,{children:`preparation`})}),`
`,(0,o.jsx)(t.p,{children:`Вызывается перед началом процесса открытия/закрытия. Используется для подготовки элементов и данных.`}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`Тип:`}),` `,(0,o.jsx)(t.code,{children:`() => void | Promise<void>`})]}),`
`,(0,o.jsx)(t.h3,{id:`beforeopening`,children:(0,o.jsx)(t.code,{children:`beforeOpening`})}),`
`,(0,o.jsxs)(t.p,{children:[`Вызывается перед открытием окна. Возврат `,(0,o.jsx)(t.code,{children:`false`}),` отменяет открытие.`]}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`Тип:`}),` `,(0,o.jsx)(t.code,{children:`() => boolean | Promise<boolean>`})]}),`
`,(0,o.jsx)(t.h3,{id:`beforeclosing`,children:(0,o.jsx)(t.code,{children:`beforeClosing`})}),`
`,(0,o.jsxs)(t.p,{children:[`Вызывается перед закрытием окна. Возврат `,(0,o.jsx)(t.code,{children:`false`}),` отменяет закрытие.`]}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`Тип:`}),` `,(0,o.jsx)(t.code,{children:`() => boolean | Promise<boolean>`})]}),`
`,(0,o.jsx)(t.h3,{id:`opening`,children:(0,o.jsx)(t.code,{children:`opening`})}),`
`,(0,o.jsx)(t.p,{children:`Вызывается после завершения открытия окна (после анимации).`}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`Тип:`}),` `,(0,o.jsx)(t.code,{children:`() => boolean | Promise<boolean>`})]}),`
`,(0,o.jsx)(t.h3,{id:`closing`,children:(0,o.jsx)(t.code,{children:`closing`})}),`
`,(0,o.jsx)(t.p,{children:`Вызывается после завершения закрытия окна (после анимации).`}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`Тип:`}),` `,(0,o.jsx)(t.code,{children:`() => boolean | Promise<boolean>`})]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=r(),t()})))()}s();export{a as default};