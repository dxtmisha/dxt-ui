import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/isDifferent - Проверка на различие объектов`}),`
`,(0,c.jsx)(n.h1,{id:`isdifferent`,children:(0,c.jsx)(n.code,{children:`isDifferent`})}),`
`,(0,c.jsx)(n.p,{children:`Глубоко проверяет, отличаются ли два объекта друг от друга.`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция работает путем сравнения количества ключей (свойств) в каждом объекте, а затем, если количество совпадает, производит точную проверку значений этих ключей через метод `,(0,c.jsx)(n.code,{children:`forEach`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: ObjectItem<T>`}),` — Текущий (новый) объект или элемент данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`old: ObjectItem<T>`}),` — Старый (предыдущий) объект для сравнения.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(n.code,{children:`true`}),`, если объекты отличаются (либо по количеству свойств, либо по значению хотя бы одного свойства), и `,(0,c.jsx)(n.code,{children:`false`}),`, если они полностью идентичны (результат строгого сравнения каждого свойства оказался истинным).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isDifferent } from '@dxtmisha/functional-basic'

const oldState = { id: 1, active: false }
const newState = { id: 1, active: true }

// Объекты отличаются в поле \`active\`
console.log(isDifferent(newState, oldState)) // true

const sameState = { id: 1, active: false }

// Объекты полностью идентичны
console.log(isDifferent(sameState, oldState)) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};