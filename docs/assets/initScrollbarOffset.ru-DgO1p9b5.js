import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/initScrollbarOffset - Инициализация отступа скроллбара`}),`
`,(0,c.jsx)(t.h1,{id:`initscrollbaroffset`,children:(0,c.jsx)(t.code,{children:`initScrollbarOffset`})}),`
`,(0,c.jsxs)(t.p,{children:[`Асинхронная утилита, которая вычисляет системную ширину полосы прокрутки браузера и записывает это значение (в пикселях) как глобальную CSS-переменную `,(0,c.jsx)(t.code,{children:`--sys-scrollbar-offset`}),` в тег `,(0,c.jsx)(t.code,{children:`<body>`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Знание ширины скроллбара критически важно при реализации модальных окон, всплывающих панелей или фиксации слоя страницы `,(0,c.jsx)(t.code,{children:`body`}),`, чтобы избежать нежелательного сдвига контента во время скрытия нативной полосы прокрутки.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Функция интегрирована с классом `,(0,c.jsx)(t.code,{children:`ScrollbarWidth`}),` из этого пакета, который и производит фактический расчет.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
Асинхронное `,(0,c.jsx)(t.code,{children:`Promise<void>`}),`, выполняющее побочный эффект установки CSS-переменной.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initScrollbarOffset } from '@dxtmisha/functional-basic'

// Инициализация при загрузке приложения
await initScrollbarOffset()

// Теперь в CSS доступен размер скроллбара
// body[data-scroll-locked] { padding-right: var(--sys-scrollbar-offset, 0px); }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};