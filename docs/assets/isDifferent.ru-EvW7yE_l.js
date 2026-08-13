import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isDifferent - Проверка на различие объектов`}),`
`,(0,c.jsx)(t.h1,{id:`isdifferent`,children:(0,c.jsx)(t.code,{children:`isDifferent`})}),`
`,(0,c.jsx)(t.p,{children:`Глубоко проверяет, отличаются ли два объекта друг от друга.`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция работает путем сравнения количества ключей (свойств) в каждом объекте, а затем, если количество совпадает, производит точную проверку значений этих ключей через метод `,(0,c.jsx)(t.code,{children:`forEach`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: ObjectItem<T>`}),` — Текущий (новый) объект или элемент данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`old: ObjectItem<T>`}),` — Старый (предыдущий) объект для сравнения.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(t.code,{children:`true`}),`, если объекты отличаются (либо по количеству свойств, либо по значению хотя бы одного свойства), и `,(0,c.jsx)(t.code,{children:`false`}),`, если они полностью идентичны (результат строгого сравнения каждого свойства оказался истинным).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isDifferent } from '@dxtmisha/functional-basic'

const oldState = { id: 1, active: false }
const newState = { id: 1, active: true }

// Объекты отличаются в поле \`active\`
console.log(isDifferent(newState, oldState)) // true

const sameState = { id: 1, active: false }

// Объекты полностью идентичны
console.log(isDifferent(sameState, oldState)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};