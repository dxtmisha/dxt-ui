import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/getStepValue - Расчет абсолютного значения шага"}),`
`,e.jsx(n.h1,{id:"getstepvalue",children:e.jsx(n.code,{children:"getStepValue"})}),`
`,e.jsxs(n.p,{children:["Вычисляет абсолютное значение одного процента (",e.jsx(n.code,{children:"1%"}),") от общего диапазона (разницы между минимальным и максимальным значениями). Функция полезна для определения, насколько изменить значение слайдера или прогресс-бара при сдвиге на 1%."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"min: number | undefined"})," — Минимальное значение диапазона. Если передано ",e.jsx(n.code,{children:"undefined"}),", будет использован ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max: number"})," — Максимальное значение диапазона."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"number"})," — Значение, равное 1% от длины диапазона. Если максимальное значение меньше или равно минимальному, функция вернет ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getStepValue } from '@dxtmisha/functional-basic'

// Диапазон от 0 до 500, значит 1% это 5 ед.
console.log(getStepValue(0, 500)) // 5

// Диапазон от 50 до 150 (разница 100), значит 1% это 1 ед.
console.log(getStepValue(50, 150)) // 1
`})})]})}function a(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{a as default};
