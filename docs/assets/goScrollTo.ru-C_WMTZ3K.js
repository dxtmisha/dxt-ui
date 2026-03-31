import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/goScrollTo - Скролл контейнера к элементу`}),`
`,(0,c.jsx)(n.h1,{id:`goscrollto`,children:(0,c.jsx)(n.code,{children:`goScrollTo`})}),`
`,(0,c.jsxs)(n.p,{children:[`Выполняет прокрутку указанного элемента-контейнера так, чтобы целевой элемент (находящийся внутри) стал видимым. Функция вычисляет координаты (`,(0,c.jsx)(n.code,{children:`getBoundingClientRect`}),`) контейнера и целевого элемента, а затем применяет метод `,(0,c.jsx)(n.code,{children:`scrollBy`}),` на нужную величину отступа.`]}),`
`,(0,c.jsxs)(n.p,{children:[`В отличие от `,(0,c.jsx)(n.code,{children:`goScrollSmooth`}),` (которая скроллит текущее окно или оперирует `,(0,c.jsx)(n.code,{children:`scrollIntoView`}),`), `,(0,c.jsx)(n.code,{children:`goScrollTo`}),` работает через явные относительные отступы от краев заданного контейнера.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: HTMLElement | undefined`}),` — Корневой элемент-контейнер со скроллом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`elementTo: HTMLElement | undefined`}),` — Целевой элемент (обычно внутри контейнера), к которому необходимо прокрутить.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`behavior: ScrollBehavior`}),` — (Необязательно) Стиль прокрутки, по умолчанию `,(0,c.jsx)(n.code,{children:`'smooth'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
Осуществляет побочный эффект прокрутки и возвращает `,(0,c.jsx)(n.code,{children:`void`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { goScrollTo } from '@dxtmisha/functional-basic'

const list = document.getElementById('item-list')
const targetItem = document.getElementById('item-42')

// Применяем плавную прокрутку списка к 42-му элементу
goScrollTo(list, targetItem)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};