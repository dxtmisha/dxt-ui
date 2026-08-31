import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getElementItem - Получение значения свойства элемента`}),`
`,(0,c.jsx)(t.h1,{id:`getelementitem`,children:(0,c.jsx)(t.code,{children:`getElementItem`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает значение определенного свойства из HTML-элемента (например, `,(0,c.jsx)(t.code,{children:`id`}),`, `,(0,c.jsx)(t.code,{children:`className`}),`, пользовательское свойство, если оно определено как ключ объекта типа элемента). Утилита использует `,(0,c.jsx)(t.code,{children:`getElement`}),` для поиска узла, и если элемент не найден или у него нет указанного свойства, возвращает `,(0,c.jsx)(t.code,{children:`defaultValue`}),` (которое по умолчанию равно `,(0,c.jsx)(t.code,{children:`undefined`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: ElementOrString<T>`}),` — Строка селектора или готовый DOM-элемент.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: K | string`}),` — Имя свойства элемента (ключ), значение которого требуется получить.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: D`}),` — Значение по умолчанию, возвращаемое, если свойство не найдено.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`T[K] | D | undefined`}),` — Значение запрашиваемого свойства или `,(0,c.jsx)(t.code,{children:`defaultValue`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementItem } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
input.type = 'text'
input.id = 'my-input'

// Получение ID
const elementId = getElementItem(input, 'id') 
console.log(elementId) // 'my-input'

// Если свойство отсутствует и мы передаем fallback
const testValue = getElementItem('.non-existent', 'id', 'fallback-id')
console.log(testValue) // 'fallback-id'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};