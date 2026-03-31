import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getRandomText - Генерация случайного текста`}),`
`,(0,c.jsx)(n.h1,{id:`getrandomtext`,children:(0,c.jsx)(n.code,{children:`getRandomText`})}),`
`,(0,c.jsx)(n.p,{children:`Генерирует строку, состоящую из случайного количества «слов». Под словом понимается последовательность одинаковых символов заданной длины. Функция полезна для заполнения интерфейса заглушками (placeholder), похожими на текст, но не имеющими смысла или языковой привязки.`}),`
`,(0,c.jsxs)(n.p,{children:[`Она работает на основе утилит `,(0,c.jsx)(n.code,{children:`random`}),` (для выбора случайных чисел) и `,(0,c.jsx)(n.code,{children:`strFill`}),` (для заполнения слова символами).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min: number`}),` — Минимальное количество слов в итоговой строке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`max: number`}),` — Максимальное количество слов в итоговой строке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`symbol: string`}),` — (Необязательно) Символ, из которого состоят сгенерированные слова. По умолчанию `,(0,c.jsx)(n.code,{children:`#`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lengthMin: number`}),` — (Необязательно) Минимальная длина одного слова. По умолчанию `,(0,c.jsx)(n.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lengthMax: number`}),` — (Необязательно) Максимальная длина одного слова. По умолчанию `,(0,c.jsx)(n.code,{children:`12`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Строку, состоящую из слов, разделённых пробелами.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getRandomText } from '@dxtmisha/functional-basic'

// Сгенерирует от 2 до 5 слов, состоящих из символа '#'
// Длина каждого слова от 2 до 12 символов
console.log(getRandomText(2, 5)) // '#### ## #######'

// Генерация точного числа слов (3) из определенного символа ('*')
// Длина слов строго по 5 символов
console.log(getRandomText(3, 3, '*', 5, 5)) // '***** ***** *****'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};