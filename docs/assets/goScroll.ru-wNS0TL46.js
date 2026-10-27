import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/goScroll - Быстрое изменение скролла`}),`
`,(0,c.jsx)(t.h1,{id:`goscroll`,children:(0,c.jsx)(t.code,{children:`goScroll`})}),`
`,(0,c.jsx)(t.p,{children:`Выполняет быструю прокрутку контейнера к целевому элементу, если он выходит за пределы видимости (scroll-into-view), либо центрирует его относительно контрольного элемента. Прокрутка изолирована рамками контейнера и не затрагивает родительские окна страницы.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`target: string | HTMLElement`}),` — CSS-селектор для поиска ближайшего контейнера предка или сам элемент-контейнер со скроллом.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementTo?: HTMLElement | null`}),` — Целевой элемент, до которого необходимо выполнить прокрутку.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementCenter?: HTMLElement | null`}),` — (Необязательно) Опорный элемент, относительно центра которого нужно отцентрировать целевой элемент.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`indent?: number`}),` — (Необязательно) Дополнительный отступ в пикселях от границы видимости. По умолчанию `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`void`}),` — функция выполняет прокрутку контейнера и ничего не возвращает.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { goScroll } from '@dxtmisha/functional-basic'

const container = document.querySelector<HTMLElement>('.container')
const target = document.querySelector<HTMLElement>('.target')

// Вариант 1: поиск контейнера по селектору через closest
goScroll('.container', target)

// Вариант 2: передача контейнера напрямую с дополнительным отступом
if (container && target) {
  goScroll(container, target, null, 16)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};