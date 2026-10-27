import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isSelectedByList - Проверка выбора для списка`}),`
`,(0,c.jsx)(t.h1,{id:`isselectedbylist`,children:(0,c.jsx)(t.code,{children:`isSelectedByList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Расширяет проверку `,(0,c.jsx)(t.code,{children:`isSelected`}),` на список значений. Проверяет, соответствуют ли `,(0,c.jsx)(t.strong,{children:`все элементы`}),` в `,(0,c.jsx)(t.code,{children:`values`}),` критерию выборки `,(0,c.jsx)(t.code,{children:`selected`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Если `,(0,c.jsx)(t.code,{children:`values`}),` — одиночное значение, а не массив, функция напрямую делегирует проверку в `,(0,c.jsx)(t.code,{children:`isSelected(values, selected)`}),`. Если `,(0,c.jsx)(t.code,{children:`values`}),` является массивом, используется метод `,(0,c.jsx)(t.code,{children:`.every()`}),`, чтобы убедиться, что каждый элемент проходит проверку `,(0,c.jsx)(t.code,{children:`isSelected(item, selected)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`values: T | T[]`}),` — Одиночное значение или массив значений для сравнения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: T | T[]`}),` — Целевое значение или массив выбранных значений для сравнения.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если все переданные значения из `,(0,c.jsx)(t.code,{children:`values`}),` выбраны, иначе `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isSelectedByList } from '@dxtmisha/functional-basic'

// Проверка списка по одиночному целевому значению
console.log(isSelectedByList(['apple', 'apple'], 'apple')) // true

// Проверка того, что каждый элемент из values содержится в массиве selected
console.log(isSelectedByList(['apple', 'cherry'], ['banana', 'apple', 'cherry'])) // true

// Возвращает false, так как 'date' отсутствует в массиве selected
console.log(isSelectedByList(['apple', 'date'], ['banana', 'apple', 'cherry'])) // false

// Одиночное значение обрабатывается аналогично isSelected
console.log(isSelectedByList('apple', 'apple')) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};