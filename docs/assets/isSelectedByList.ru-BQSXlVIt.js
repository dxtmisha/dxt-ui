import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/isSelectedByList - Проверка выбора для списка`}),`
`,(0,c.jsx)(n.h1,{id:`isselectedbylist`,children:(0,c.jsx)(n.code,{children:`isSelectedByList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Комбинированная утилита, расширяющая функционал базовой проверки `,(0,c.jsx)(n.code,{children:`isSelected`}),`. Она позволяет проверить, соответствуют ли `,(0,c.jsx)(n.strong,{children:`все элементы`}),` из переданного списка (`,(0,c.jsx)(n.code,{children:`values`}),`) критериям целевой выборки (`,(0,c.jsx)(n.code,{children:`selected`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Если на вход подается одно значение, а не массив, функция просто делегирует проверку напрямую в `,(0,c.jsx)(n.code,{children:`isSelected`}),`. Однако если на вход поступает массив значений (`,(0,c.jsx)(n.code,{children:`values`}),`), функция использует метод массива `,(0,c.jsx)(n.code,{children:`.every()`}),`, чтобы убедиться, что `,(0,c.jsx)(n.strong,{children:`каждый отдельный элемент`}),` успешно проходит индивидуальную проверку `,(0,c.jsx)(n.code,{children:`isSelected(item, selected)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`values: T | T[]`}),` — Одиночное значение или массив значений, каждое из которых должно быть проверено.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: T | T[]`}),` — Целевой критерий отбора (строка, число или массив допустимых значений).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(n.code,{children:`true`}),` только в том случае, если абсолютно все переданные элементы удовлетворяют списку проверки.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isSelectedByList } from '@dxtmisha/functional-basic'

// Успешная валидация всего списка по одиночному критерию
console.log(isSelectedByList(['apple', 'apple'], 'apple')) // true

// Успешная валидация, если каждый элемент из values содержится в массиве selected
console.log(isSelectedByList(['apple', 'cherry'], ['banana', 'apple', 'cherry'])) // true

// Провал. 'date' отсутствует в списке разрешений (selected). Вернет false из-за .every(). 
console.log(isSelectedByList(['apple', 'date'], ['banana', 'apple', 'cherry'])) // false

// Если передано одиночное значение как values, работает идентично isSelected
console.log(isSelectedByList('apple', 'apple')) // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};