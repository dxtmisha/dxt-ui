import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`control(props: WindowControlItem): any`}),` — Слот управления для размещения элементов управления окном (кнопки закрытия, сворачивания и т.д.).`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`title(props: WindowControlItem): any`}),` — Слот заголовка для размещения заголовка окна в шапке.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`footer(props: WindowControlItem): any`}),` — Слот подвала для размещения содержимого в нижней части окна (кнопки действий, инфо и т.д.).`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`default(props: WindowControlItem): any`}),` — Основной слот для размещения главного содержимого окна.`]}),`
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
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`WindowClassesList:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`block: string`}),` — основной класс блока.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`blockChildren: string`}),` — класс дочерних элементов блока.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`blockOther: string`}),` — класс блокировки других окон.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`close: string`}),` — класс кнопки закрытия.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`static: string`}),` — класс статического позиционирования.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`control: string`}),` — класс элемента управления.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`controlId: string`}),` — класс ID управления.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`controlStatic: string`}),` — класс статического управления.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`controlOpenOnly: string`}),` — класс управления только для открытого состояния.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`controlActive: string`}),` — класс активного управления.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`persistent: string`}),` — класс постоянного окна.`]}),`
`]}),`
`]}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`WindowEventClick:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`(event: MouseEvent | TouchEvent | KeyboardEvent) => Promise<void>`}),` — обработчик события клика окна.`]}),`
`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=r(),t()})))()}s();export{a as default};