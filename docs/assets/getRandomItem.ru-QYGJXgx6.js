import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getRandomItem - Получение случайного элемента`}),`
`,(0,c.jsx)(t.h1,{id:`getrandomitem`,children:(0,c.jsx)(t.code,{children:`getRandomItem`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает случайный элемент из массива или объекта. Если массив или объект пуст или значение отсутствует, возвращает `,(0,c.jsx)(t.code,{children:`undefined`}),`. Для примитивных значений возвращает само значение.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: T | T[] | Record<string, T>`}),` — (Необязательно) входной массив, объект или значение.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`T | undefined`}),` — случайный элемент из массива или объекта, или `,(0,c.jsx)(t.code,{children:`undefined`}),`, если данных нет.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getRandomItem } from '@dxtmisha/functional-basic'

console.log(getRandomItem([1, 2, 3, 4, 5])) // Например: 3
console.log(getRandomItem({ a: 10, b: 20 })) // Например: 20
console.log(getRandomItem([])) // undefined
console.log(getRandomItem({})) // undefined
console.log(getRandomItem('text')) // 'text'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};