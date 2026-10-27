import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/goScrollTo - Скролл контейнера к элементу`}),`
`,(0,c.jsx)(t.h1,{id:`goscrollto`,children:(0,c.jsx)(t.code,{children:`goScrollTo`})}),`
`,(0,c.jsxs)(t.p,{children:[`Выполняет прокрутку указанного элемента-контейнера так, чтобы целевой элемент (находящийся внутри) стал видимым. Функция вычисляет координаты (`,(0,c.jsx)(t.code,{children:`getBoundingClientRect`}),`) контейнера и целевого элемента с учётом рамок (`,(0,c.jsx)(t.code,{children:`clientTop`}),` и `,(0,c.jsx)(t.code,{children:`clientLeft`}),`), а затем применяет метод `,(0,c.jsx)(t.code,{children:`scrollBy`}),` (с автоматическим фолбэком на `,(0,c.jsx)(t.code,{children:`scrollTop`}),` / `,(0,c.jsx)(t.code,{children:`scrollLeft`}),` при его отсутствии).`]}),`
`,(0,c.jsxs)(t.p,{children:[`В отличие от `,(0,c.jsx)(t.code,{children:`goScrollSmooth`}),` (которая скроллит текущее окно или оперирует `,(0,c.jsx)(t.code,{children:`scrollIntoView`}),`), `,(0,c.jsx)(t.code,{children:`goScrollTo`}),` работает через явные относительные отступы от краев заданного контейнера.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`container?: HTMLElement | Element | null`}),` — Корневой элемент-контейнер со скроллом. Безопасно обрабатывает `,(0,c.jsx)(t.code,{children:`null`}),` и `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementTo?: HTMLElement | Element | null`}),` — Целевой элемент (обычно внутри контейнера), к которому необходимо прокрутить.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`behavior?: ScrollBehavior`}),` — (Необязательно) Стиль прокрутки, по умолчанию `,(0,c.jsx)(t.code,{children:`'smooth'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`void`}),` — Осуществляет побочный эффект прокрутки и ничего не возвращает.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { goScrollTo } from '@dxtmisha/functional-basic'

const list = document.getElementById('item-list')
const targetItem = document.getElementById('item-42')

// Применяем плавную прокрутку списка к 42-му элементу
goScrollTo(list, targetItem)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};