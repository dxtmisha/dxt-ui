import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`getId(): string`}),` — Возвращает уникальный идентификатор окна.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`getOpen(): boolean`}),` — Возвращает реактивное состояние видимости окна.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`getControl(): WindowControlItem`}),` — Возвращает данные элемента управления для управления окном.`]}),`
`]}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`WindowControlItem:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`open: Ref<boolean>`}),` — реактивное состояние открытия.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`class: string`}),` — CSS-класс окна.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`onclick: WindowEventClick`}),` — обработчик события клика.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`onKeydown: WindowEventClick`}),` — обработчик события нажатия клавиши.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`oncontextmenu: WindowEventClick`}),` — обработчик события контекстного меню.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`classesWindow: WindowClassesList`}),` — список CSS-классов для стилизации окна.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`binds: Record<string, any>`}),` — свойства привязки для элемента управления.`]}),`
`]}),`
`]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`setOpen(open: boolean): Promise<void>`}),` — Устанавливает состояние открытия окна.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`toOpen(): Promise<void>`}),` — Переход в состояние открытия окна.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`toClose(): Promise<void>`}),` — Переход в состояние закрытия окна.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`toggle(): Promise<void>`}),` — Переключает видимость окна (открывает, если закрыто, и закрывает, если открыто).`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=r(),t()})))()}s();export{a as default};