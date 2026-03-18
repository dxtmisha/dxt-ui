import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(o){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/ru/functional-basic/Functions/goScrollTo - Скролл контейнера к элементу"}),`
`,e.jsx(n.h1,{id:"goscrollto",children:e.jsx(n.code,{children:"goScrollTo"})}),`
`,e.jsxs(n.p,{children:["Выполняет прокрутку указанного элемента-контейнера так, чтобы целевой элемент (находящийся внутри) стал видимым. Функция вычисляет координаты (",e.jsx(n.code,{children:"getBoundingClientRect"}),") контейнера и целевого элемента, а затем применяет метод ",e.jsx(n.code,{children:"scrollBy"})," на нужную величину отступа."]}),`
`,e.jsxs(n.p,{children:["В отличие от ",e.jsx(n.code,{children:"goScrollSmooth"})," (которая скроллит текущее окно или оперирует ",e.jsx(n.code,{children:"scrollIntoView"}),"), ",e.jsx(n.code,{children:"goScrollTo"})," работает через явные относительные отступы от краев заданного контейнера."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: HTMLElement | undefined"})," — Корневой элемент-контейнер со скроллом."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementTo: HTMLElement | undefined"})," — Целевой элемент (обычно внутри контейнера), к которому необходимо прокрутить."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"behavior: ScrollBehavior"})," — (Необязательно) Стиль прокрутки, по умолчанию ",e.jsx(n.code,{children:"'smooth'"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
Осуществляет побочный эффект прокрутки и возвращает `,e.jsx(n.code,{children:"void"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { goScrollTo } from '@dxtmisha/functional-basic'

const list = document.getElementById('item-list')
const targetItem = document.getElementById('item-42')

// Применяем плавную прокрутку списка к 42-му элементу
goScrollTo(list, targetItem)
`})})]})}function x(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{x as default};
