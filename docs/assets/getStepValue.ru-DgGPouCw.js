import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getStepValue - Расчет абсолютного значения шага`}),`
`,(0,c.jsx)(n.h1,{id:`getstepvalue`,children:(0,c.jsx)(n.code,{children:`getStepValue`})}),`
`,(0,c.jsxs)(n.p,{children:[`Вычисляет абсолютное значение одного процента (`,(0,c.jsx)(n.code,{children:`1%`}),`) от общего диапазона (разницы между минимальным и максимальным значениями). Функция полезна для определения, насколько изменить значение слайдера или прогресс-бара при сдвиге на 1%.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min: number | undefined`}),` — Минимальное значение диапазона. Если передано `,(0,c.jsx)(n.code,{children:`undefined`}),`, будет использован `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`max: number`}),` — Максимальное значение диапазона.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`number`}),` — Значение, равное 1% от длины диапазона. Если максимальное значение меньше или равно минимальному, функция вернет `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getStepValue } from '@dxtmisha/functional-basic'

// Диапазон от 0 до 500, значит 1% это 5 ед.
console.log(getStepValue(0, 500)) // 5

// Диапазон от 50 до 150 (разница 100), значит 1% это 1 ед.
console.log(getStepValue(50, 150)) // 1
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};