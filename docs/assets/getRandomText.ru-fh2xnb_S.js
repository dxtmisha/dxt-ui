import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(s){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/ru/functional-basic/Functions/getRandomText - Генерация случайного текста"}),`
`,n.jsx(e.h1,{id:"getrandomtext",children:n.jsx(e.code,{children:"getRandomText"})}),`
`,n.jsx(e.p,{children:"Генерирует строку, состоящую из случайного количества «слов». Под словом понимается последовательность одинаковых символов заданной длины. Функция полезна для заполнения интерфейса заглушками (placeholder), похожими на текст, но не имеющими смысла или языковой привязки."}),`
`,n.jsxs(e.p,{children:["Она работает на основе утилит ",n.jsx(e.code,{children:"random"})," (для выбора случайных чисел) и ",n.jsx(e.code,{children:"strFill"})," (для заполнения слова символами)."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min: number"})," — Минимальное количество слов в итоговой строке."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"max: number"})," — Максимальное количество слов в итоговой строке."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"symbol: string"})," — (Необязательно) Символ, из которого состоят сгенерированные слова. По умолчанию ",n.jsx(e.code,{children:"#"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lengthMin: number"})," — (Необязательно) Минимальная длина одного слова. По умолчанию ",n.jsx(e.code,{children:"2"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lengthMax: number"})," — (Необязательно) Максимальная длина одного слова. По умолчанию ",n.jsx(e.code,{children:"12"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"string"})," — Строку, состоящую из слов, разделённых пробелами."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getRandomText } from '@dxtmisha/functional-basic'

// Сгенерирует от 2 до 5 слов, состоящих из символа '#'
// Длина каждого слова от 2 до 12 символов
console.log(getRandomText(2, 5)) // '#### ## #######'

// Генерация точного числа слов (3) из определенного символа ('*')
// Длина слов строго по 5 символов
console.log(getRandomText(3, 3, '*', 5, 5)) // '***** ***** *****'
`})})]})}function m(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{m as default};
