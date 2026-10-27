import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/setElementItem - Изменение значения элемента по ключу`}),`
`,(0,c.jsx)(t.h1,{id:`setelementitem`,children:(0,c.jsx)(t.code,{children:`setElementItem`})}),`
`,(0,c.jsx)(t.p,{children:`Изменяет значение свойства или атрибута DOM-элемента, найденного по селектору или переданного напрямую. Если свойство является объектом (и не массивом), выполняется слияние с новыми данными.`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция обеспечивает защиту от `,(0,c.jsx)(t.strong,{children:`Prototype Pollution`}),` через `,(0,c.jsx)(t.code,{children:`isPrototypeKey`}),` (игнорирует ключи `,(0,c.jsx)(t.code,{children:`__proto__`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`, `,(0,c.jsx)(t.code,{children:`prototype`}),`), поддерживает CSS-переменные (`,(0,c.jsx)(t.code,{children:`--*`}),`) и kebab-case свойства в объекте стилей, корректно удаляет стили или атрибуты при передаче `,(0,c.jsx)(t.code,{children:`null`}),` / `,(0,c.jsx)(t.code,{children:`undefined`}),`, а также сериализует логические `,(0,c.jsx)(t.code,{children:`aria-*`}),` атрибуты в строки `,(0,c.jsx)(t.code,{children:`"true"`}),` / `,(0,c.jsx)(t.code,{children:`"false"`}),` (и устанавливает `,(0,c.jsx)(t.code,{children:`""`}),` либо удаляет атрибут для стандартных boolean-атрибутов).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: ElementOrString<E>`}),` — Элемент, объект `,(0,c.jsx)(t.code,{children:`window`}),` или CSS-селектор.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: K | string`}),` — Ключ свойства, имя атрибута или стиля.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: V | Record<string, V> | unknown`}),` — Новое значение, функция, возвращающая значение, или объект для слияния.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`E | undefined`}),` — Целевой элемент (модифицированный или без изменений, если передан ключ загрязнения прототипа), либо `,(0,c.jsx)(t.code,{children:`undefined`}),`, если элемент не найден.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setElementItem } from '@dxtmisha/functional-basic'

// Изменение текстового содержимого
setElementItem('#my-div', 'textContent', 'Новый текст')

// Слияние стилей, включая kebab-case и CSS custom properties
setElementItem(document.body, 'style', {
  backgroundColor: 'red',
  'font-size': '16px',
  '--brand-color': '#0055ff'
})

// Очистка стиля или переменной через null / undefined
setElementItem(document.body, 'style', {
  backgroundColor: null,
  '--brand-color': undefined
})

// Установка атрибута (если свойства нет в объекте)
setElementItem('input', 'placeholder', 'Введите данные...')

// Установка ARIA атрибутов ('true' / 'false')
setElementItem('button', 'aria-expanded', true)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};