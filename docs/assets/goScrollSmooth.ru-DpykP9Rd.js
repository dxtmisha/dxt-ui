import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/goScrollSmooth - Плавный скролл к элементу`}),`
`,(0,c.jsx)(n.h1,{id:`goscrollsmooth`,children:(0,c.jsx)(n.code,{children:`goScrollSmooth`})}),`
`,(0,c.jsx)(n.p,{children:`Обеспечивает плавную прокрутку (скролл) окна браузера или контейнера к указанному элементу.`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция сначала проверяет наличие поддержки метода `,(0,c.jsx)(n.code,{children:`scrollIntoView`}),` у целевого элемента. При его наличии и отсутствии параметра `,(0,c.jsx)(n.code,{children:`shift`}),` (смещение) функция использует нативный метод. В противном случае, если требуется смещение `,(0,c.jsx)(n.code,{children:`shift`}),` (например, для фиксированной шапки), функция вычисляет `,(0,c.jsx)(n.code,{children:`getBoundingClientRect`}),` и использует `,(0,c.jsx)(n.code,{children:`window.scrollTo`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: E`}),` — Целевой элемент (`,(0,c.jsx)(n.code,{children:`HTMLElement`}),`), до которого нужно прокрутить страницу.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: ScrollIntoViewOptions`}),` — (Необязательно) Параметры прокрутки, передаваемые в `,(0,c.jsx)(n.code,{children:`scrollIntoView`}),` (например, `,(0,c.jsx)(n.code,{children:`behavior`}),`, `,(0,c.jsx)(n.code,{children:`block`}),`, `,(0,c.jsx)(n.code,{children:`inline`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`shift: number`}),` — (Необязательно) Значение отступа (в пикселях) сверху от целевого элемента до верха окна. Полезно для избежания перекрытия элемента фиксированным меню навигации. По умолчанию `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
Функция ничего не возвращает (`,(0,c.jsx)(n.code,{children:`void`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { goScrollSmooth } from '@dxtmisha/functional-basic'

const section = document.getElementById('contact-us')

// Простая плавная прокрутка к элементу
goScrollSmooth(section)

// Прокрутка со смещением 60px (учитывая фиксированную шапку)
goScrollSmooth(section, { behavior: 'smooth' }, 60)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};