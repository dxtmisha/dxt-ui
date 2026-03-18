import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function l(n){const s={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/ru/functional-basic/Functions/isSelectedByList - Проверка выбора для списка"}),`
`,e.jsx(s.h1,{id:"isselectedbylist",children:e.jsx(s.code,{children:"isSelectedByList"})}),`
`,e.jsxs(s.p,{children:["Комбинированная утилита, расширяющая функционал базовой проверки ",e.jsx(s.code,{children:"isSelected"}),". Она позволяет проверить, соответствуют ли ",e.jsx(s.strong,{children:"все элементы"})," из переданного списка (",e.jsx(s.code,{children:"values"}),") критериям целевой выборки (",e.jsx(s.code,{children:"selected"}),")."]}),`
`,e.jsxs(s.p,{children:["Если на вход подается одно значение, а не массив, функция просто делегирует проверку напрямую в ",e.jsx(s.code,{children:"isSelected"}),". Однако если на вход поступает массив значений (",e.jsx(s.code,{children:"values"}),"), функция использует метод массива ",e.jsx(s.code,{children:".every()"}),", чтобы убедиться, что ",e.jsx(s.strong,{children:"каждый отдельный элемент"})," успешно проходит индивидуальную проверку ",e.jsx(s.code,{children:"isSelected(item, selected)"}),"."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Параметры:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"values: T | T[]"})," — Одиночное значение или массив значений, каждое из которых должно быть проверено."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"selected: T | T[]"})," — Целевой критерий отбора (строка, число или массив допустимых значений)."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Возвращает:"}),`
`,e.jsx(s.code,{children:"boolean"})," — Вернет ",e.jsx(s.code,{children:"true"})," только в том случае, если абсолютно все переданные элементы удовлетворяют списку проверки."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { isSelectedByList } from '@dxtmisha/functional-basic'

// Успешная валидация всего списка по одиночному критерию
console.log(isSelectedByList(['apple', 'apple'], 'apple')) // true

// Успешная валидация, если каждый элемент из values содержится в массиве selected
console.log(isSelectedByList(['apple', 'cherry'], ['banana', 'apple', 'cherry'])) // true

// Провал. 'date' отсутствует в списке разрешений (selected). Вернет false из-за .every(). 
console.log(isSelectedByList(['apple', 'date'], ['banana', 'apple', 'cherry'])) // false

// Если передано одиночное значение как values, работает идентично isSelected
console.log(isSelectedByList('apple', 'apple')) // true
`})})]})}function h(n={}){const{wrapper:s}={...c(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{h as default};
