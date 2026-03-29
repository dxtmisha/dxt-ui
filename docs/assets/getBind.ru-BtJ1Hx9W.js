import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Functions/getBind - Генерация привязок`}),`
`,(0,c.jsx)(n.h1,{id:`getbind`,children:(0,c.jsx)(n.code,{children:`getBind`})}),`
`,(0,c.jsx)(n.p,{children:`Базовая утилитарная функция для генерации объекта свойств для подкомпонента на основе обычных (нереактивных) значений. Она обрабатывает различные типы входных данных и обеспечивает согласованную структуру для привязки свойств.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T | R | undefined | null`}),` — Входное значение для привязки. Может быть примитивом или объектом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nameExtra: ItemList | string = {}`}),` — Дополнительные свойства для объединения или имя свойства, если `,(0,c.jsx)(n.code,{children:`value`}),` не является объектом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string = 'value'`}),` — Имя свойства по умолчанию (по умолчанию `,(0,c.jsx)(n.code,{children:`'value'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`except: boolean = false`}),` — Если true, пропускает проверку на наличие первичного ключа в объекте `,(0,c.jsx)(n.code,{children:`value`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`ConstrBind<R>`}),` — Объект, содержащий свойства, готовые к привязке.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getBind } from '@dxtmisha/functional'

// Вариант 1: Простое значение
const bind1 = getBind('Привет', {}, 'label') 
// Результат: { label: 'Привет' }

// Вариант 2: Объект с дополнительными свойствами
const bind2 = getBind({ id: 1 }, { class: 'active' }, 'data')
// Результат: { id: 1, class: 'active' }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};