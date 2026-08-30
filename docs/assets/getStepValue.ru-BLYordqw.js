import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getStepValue - Расчет абсолютного значения шага`}),`
`,(0,c.jsx)(t.h1,{id:`getstepvalue`,children:(0,c.jsx)(t.code,{children:`getStepValue`})}),`
`,(0,c.jsxs)(t.p,{children:[`Вычисляет абсолютное значение одного процента (`,(0,c.jsx)(t.code,{children:`1%`}),`) от общего диапазона (разницы между минимальным и максимальным значениями). Функция полезна для определения, насколько изменить значение слайдера или прогресс-бара при сдвиге на 1%.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min: number | undefined`}),` — Минимальное значение диапазона. Если передано `,(0,c.jsx)(t.code,{children:`undefined`}),`, будет использован `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max: number`}),` — Максимальное значение диапазона.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`number`}),` — Значение, равное 1% от длины диапазона. Если максимальное значение меньше или равно минимальному, функция вернет `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getStepValue } from '@dxtmisha/functional-basic'

// Диапазон от 0 до 500, значит 1% это 5 ед.
console.log(getStepValue(0, 500)) // 5

// Диапазон от 50 до 150 (разница 100), значит 1% это 1 ед.
console.log(getStepValue(50, 150)) // 1
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};