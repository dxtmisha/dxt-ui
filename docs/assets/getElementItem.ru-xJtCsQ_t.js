import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getElementItem - Получение значения свойства элемента`}),`
`,(0,c.jsx)(n.h1,{id:`getelementitem`,children:(0,c.jsx)(n.code,{children:`getElementItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает значение определенного свойства из HTML-элемента (например, `,(0,c.jsx)(n.code,{children:`id`}),`, `,(0,c.jsx)(n.code,{children:`className`}),`, пользовательское свойство, если оно определено как ключ объекта типа элемента). Утилита использует `,(0,c.jsx)(n.code,{children:`getElement`}),` для поиска узла, и если элемент не найден или у него нет указанного свойства, возвращает `,(0,c.jsx)(n.code,{children:`defaultValue`}),` (которое по умолчанию равно `,(0,c.jsx)(n.code,{children:`undefined`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: ElementOrString<T>`}),` — Строка селектора или готовый DOM-элемент.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: K | string`}),` — Имя свойства элемента (ключ), значение которого требуется получить.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: D`}),` — Значение по умолчанию, возвращаемое, если свойство не найдено.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`T[K] | D | undefined`}),` — Значение запрашиваемого свойства или `,(0,c.jsx)(n.code,{children:`defaultValue`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElementItem } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
input.type = 'text'
input.id = 'my-input'

// Получение ID
const elementId = getElementItem(input, 'id') 
console.log(elementId) // 'my-input'

// Если свойство отсутствует и мы передаем fallback
const testValue = getElementItem('.non-existent', 'id', 'fallback-id')
console.log(testValue) // 'fallback-id'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};