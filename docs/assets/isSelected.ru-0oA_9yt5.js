import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isSelected - Проверка выбранного значения`}),`
`,(0,c.jsx)(t.h1,{id:`isselected`,children:(0,c.jsx)(t.code,{children:`isSelected`})}),`
`,(0,c.jsx)(t.p,{children:`Проверяет, выбрано ли переданное значение, сравнивая его с одиночным целевым значением или массивом выбранных элементов. Поддерживает интеллектуальное числовое сравнение для чисел и числовых строк:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Защита от пустых значений:`}),` Если проверяемое значение (`,(0,c.jsx)(t.code,{children:`value`}),`) равно `,(0,c.jsx)(t.code,{children:`null`}),` или `,(0,c.jsx)(t.code,{children:`undefined`}),` (проверка через `,(0,c.jsx)(t.code,{children:`isNull(value)`}),`), функция сразу возвращает `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сравнение с массивом:`}),` Если `,(0,c.jsx)(t.code,{children:`selected`}),` является массивом `,(0,c.jsx)(t.code,{children:`[]`}),`, функция проверяет прямое вхождение через `,(0,c.jsx)(t.code,{children:`.includes(value)`}),`, а для числовых значений (`,(0,c.jsx)(t.code,{children:`isNumber(value)`}),`) дополнительно сопоставляет их числовой эквивалент через `,(0,c.jsx)(t.code,{children:`toNumber()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Числовое сравнение:`}),` Если оба аргумента (`,(0,c.jsx)(t.code,{children:`value`}),` и `,(0,c.jsx)(t.code,{children:`selected`}),`) являются числовыми (`,(0,c.jsx)(t.code,{children:`isNumber(value) && isNumber(selected)`}),`), они преобразуются через `,(0,c.jsx)(t.code,{children:`toNumber()`}),` и сравниваются как числа (например, `,(0,c.jsx)(t.code,{children:`'5'`}),` соответствует `,(0,c.jsx)(t.code,{children:`5`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Строгое равенство:`}),` В остальных случаях функция использует проверку `,(0,c.jsx)(t.code,{children:`value === selected`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Проверяемое входное значение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected?: unknown`}),` — Целевое значение или массив выбранных значений.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если `,(0,c.jsx)(t.code,{children:`value`}),` соответствует `,(0,c.jsx)(t.code,{children:`selected`}),`, иначе `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isSelected } from '@dxtmisha/functional-basic'

// Одиночные сравнения
console.log(isSelected('apple', 'apple')) // true
console.log(isSelected('apple', 'banana')) // false

// Сравнение с массивом
console.log(isSelected(2, [1, 2, 3])) // true
console.log(isSelected('5', [1, 2, 5])) // true
console.log(isSelected('dog', ['cat', 'mouse'])) // false

// Интеллектуальное числовое сравнение (строка и число)
console.log(isSelected('5', 5)) // true

// Проверка на null / undefined
console.log(isSelected(null, 1)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};