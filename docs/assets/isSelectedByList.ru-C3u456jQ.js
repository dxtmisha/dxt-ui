import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isSelectedByList - Проверка выбора для списка`}),`
`,(0,c.jsx)(t.h1,{id:`isselectedbylist`,children:(0,c.jsx)(t.code,{children:`isSelectedByList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Комбинированная утилита, расширяющая функционал базовой проверки `,(0,c.jsx)(t.code,{children:`isSelected`}),`. Она позволяет проверить, соответствуют ли `,(0,c.jsx)(t.strong,{children:`все элементы`}),` из переданного списка (`,(0,c.jsx)(t.code,{children:`values`}),`) критериям целевой выборки (`,(0,c.jsx)(t.code,{children:`selected`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Если на вход подается одно значение, а не массив, функция просто делегирует проверку напрямую в `,(0,c.jsx)(t.code,{children:`isSelected`}),`. Однако если на вход поступает массив значений (`,(0,c.jsx)(t.code,{children:`values`}),`), функция использует метод массива `,(0,c.jsx)(t.code,{children:`.every()`}),`, чтобы убедиться, что `,(0,c.jsx)(t.strong,{children:`каждый отдельный элемент`}),` успешно проходит индивидуальную проверку `,(0,c.jsx)(t.code,{children:`isSelected(item, selected)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`values: T | T[]`}),` — Одиночное значение или массив значений, каждое из которых должно быть проверено.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: T | T[]`}),` — Целевой критерий отбора (строка, число или массив допустимых значений).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(t.code,{children:`true`}),` только в том случае, если абсолютно все переданные элементы удовлетворяют списку проверки.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isSelectedByList } from '@dxtmisha/functional-basic'

// Успешная валидация всего списка по одиночному критерию
console.log(isSelectedByList(['apple', 'apple'], 'apple')) // true

// Успешная валидация, если каждый элемент из values содержится в массиве selected
console.log(isSelectedByList(['apple', 'cherry'], ['banana', 'apple', 'cherry'])) // true

// Провал. 'date' отсутствует в списке разрешений (selected). Вернет false из-за .every(). 
console.log(isSelectedByList(['apple', 'date'], ['banana', 'apple', 'cherry'])) // false

// Если передано одиночное значение как values, работает идентично isSelected
console.log(isSelectedByList('apple', 'apple')) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};