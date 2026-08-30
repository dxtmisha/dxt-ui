import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/getBind - Генерация привязок`}),`
`,(0,c.jsx)(t.h1,{id:`getbind`,children:(0,c.jsx)(t.code,{children:`getBind`})}),`
`,(0,c.jsx)(t.p,{children:`Базовая утилитарная функция для генерации объекта свойств для подкомпонента на основе обычных (нереактивных) значений. Она обрабатывает различные типы входных данных и обеспечивает согласованную структуру для привязки свойств.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T | R | undefined | null`}),` — Входное значение для привязки. Может быть примитивом или объектом.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nameExtra: ItemList | string = {}`}),` — Дополнительные свойства для объединения или имя свойства, если `,(0,c.jsx)(t.code,{children:`value`}),` не является объектом.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string = 'value'`}),` — Имя свойства по умолчанию (по умолчанию `,(0,c.jsx)(t.code,{children:`'value'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`except: boolean = false`}),` — Если true, пропускает проверку на наличие первичного ключа в объекте `,(0,c.jsx)(t.code,{children:`value`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`ConstrBind<R>`}),` — Объект, содержащий свойства, готовые к привязке.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getBind } from '@dxtmisha/functional'

// Вариант 1: Простое значение
const bind1 = getBind('Привет', {}, 'label') 
// Результат: { label: 'Привет' }

// Вариант 2: Объект с дополнительными свойствами
const bind2 = getBind({ id: 1 }, { class: 'active' }, 'data')
// Результат: { id: 1, class: 'active' }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};