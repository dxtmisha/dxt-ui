import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/initScrollbarOffset - Инициализация отступа скроллбара`}),`
`,(0,c.jsx)(n.h1,{id:`initscrollbaroffset`,children:(0,c.jsx)(n.code,{children:`initScrollbarOffset`})}),`
`,(0,c.jsxs)(n.p,{children:[`Асинхронная утилита, которая вычисляет системную ширину полосы прокрутки браузера и записывает это значение (в пикселях) как глобальную CSS-переменную `,(0,c.jsx)(n.code,{children:`--sys-scrollbar-offset`}),` в тег `,(0,c.jsx)(n.code,{children:`<body>`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Знание ширины скроллбара критически важно при реализации модальных окон, всплывающих панелей или фиксации слоя страницы `,(0,c.jsx)(n.code,{children:`body`}),`, чтобы избежать нежелательного сдвига контента во время скрытия нативной полосы прокрутки.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Функция интегрирована с классом `,(0,c.jsx)(n.code,{children:`ScrollbarWidth`}),` из этого пакета, который и производит фактический расчет.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
Асинхронное `,(0,c.jsx)(n.code,{children:`Promise<void>`}),`, выполняющее побочный эффект установки CSS-переменной.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initScrollbarOffset } from '@dxtmisha/functional-basic'

// Инициализация при загрузке приложения
await initScrollbarOffset()

// Теперь в CSS доступен размер скроллбара
// body[data-scroll-locked] { padding-right: var(--sys-scrollbar-offset, 0px); }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};