import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/setElementItem - Изменение значения элемента по ключу`}),`
`,(0,c.jsx)(n.h1,{id:`setelementitem`,children:(0,c.jsx)(n.code,{children:`setElementItem`})}),`
`,(0,c.jsx)(n.p,{children:`Изменяет значение свойства или атрибута DOM-элемента, найденного по селектору или переданного напрямую. Если свойство является объектом, выполняется слияние с новыми данными.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: ElementOrString<E>`}),` — Элемент, объект `,(0,c.jsx)(n.code,{children:`window`}),` или CSS-селектор.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: K`}),` — Ключ свойства или имя атрибута.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: V | Record<string, V>`}),` — Новое значение или объект для слияния.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`E | undefined`}),` — Модифицированный элемент или `,(0,c.jsx)(n.code,{children:`undefined`}),`, если элемент не найден.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setElementItem } from '@dxtmisha/functional-basic'

// Изменение текстового содержимого
setElementItem('#my-div', 'textContent', 'Новый текст')

// Слияние стилей
setElementItem(document.body, 'style', { backgroundColor: 'red', color: 'white' })

// Установка атрибута (если свойства нет в объекте)
setElementItem('input', 'placeholder', 'Введите данные...')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};