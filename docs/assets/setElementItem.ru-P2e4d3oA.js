import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/setElementItem - Изменение значения элемента по ключу`}),`
`,(0,c.jsx)(t.h1,{id:`setelementitem`,children:(0,c.jsx)(t.code,{children:`setElementItem`})}),`
`,(0,c.jsx)(t.p,{children:`Изменяет значение свойства или атрибута DOM-элемента, найденного по селектору или переданного напрямую. Если свойство является объектом, выполняется слияние с новыми данными.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: ElementOrString<E>`}),` — Элемент, объект `,(0,c.jsx)(t.code,{children:`window`}),` или CSS-селектор.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: K`}),` — Ключ свойства или имя атрибута.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: V | Record<string, V>`}),` — Новое значение или объект для слияния.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`E | undefined`}),` — Модифицированный элемент или `,(0,c.jsx)(t.code,{children:`undefined`}),`, если элемент не найден.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setElementItem } from '@dxtmisha/functional-basic'

// Изменение текстового содержимого
setElementItem('#my-div', 'textContent', 'Новый текст')

// Слияние стилей
setElementItem(document.body, 'style', { backgroundColor: 'red', color: 'white' })

// Установка атрибута (если свойства нет в объекте)
setElementItem('input', 'placeholder', 'Введите данные...')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};