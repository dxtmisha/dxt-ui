import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/goScrollSmooth - Плавный скролл к элементу`}),`
`,(0,c.jsx)(t.h1,{id:`goscrollsmooth`,children:(0,c.jsx)(t.code,{children:`goScrollSmooth`})}),`
`,(0,c.jsx)(t.p,{children:`Обеспечивает плавную прокрутку (скролл) окна браузера или контейнера к указанному элементу.`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция сначала проверяет наличие поддержки метода `,(0,c.jsx)(t.code,{children:`scrollIntoView`}),` у целевого элемента. При его наличии и отсутствии параметра `,(0,c.jsx)(t.code,{children:`shift`}),` (смещение) функция использует нативный метод. В противном случае, если требуется смещение `,(0,c.jsx)(t.code,{children:`shift`}),` (например, для фиксированной шапки), функция вычисляет `,(0,c.jsx)(t.code,{children:`getBoundingClientRect`}),` и использует `,(0,c.jsx)(t.code,{children:`window.scrollTo`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: E`}),` — Целевой элемент (`,(0,c.jsx)(t.code,{children:`HTMLElement`}),`), до которого нужно прокрутить страницу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: ScrollIntoViewOptions`}),` — (Необязательно) Параметры прокрутки, передаваемые в `,(0,c.jsx)(t.code,{children:`scrollIntoView`}),` (например, `,(0,c.jsx)(t.code,{children:`behavior`}),`, `,(0,c.jsx)(t.code,{children:`block`}),`, `,(0,c.jsx)(t.code,{children:`inline`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`shift: number`}),` — (Необязательно) Значение отступа (в пикселях) сверху от целевого элемента до верха окна. Полезно для избежания перекрытия элемента фиксированным меню навигации. По умолчанию `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
Функция ничего не возвращает (`,(0,c.jsx)(t.code,{children:`void`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { goScrollSmooth } from '@dxtmisha/functional-basic'

const section = document.getElementById('contact-us')

// Простая плавная прокрутка к элементу
goScrollSmooth(section)

// Прокрутка со смещением 60px (учитывая фиксированную шапку)
goScrollSmooth(section, { behavior: 'smooth' }, 60)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};