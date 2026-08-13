import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getRandomText - Генерация случайного текста`}),`
`,(0,c.jsx)(t.h1,{id:`getrandomtext`,children:(0,c.jsx)(t.code,{children:`getRandomText`})}),`
`,(0,c.jsx)(t.p,{children:`Генерирует строку, состоящую из случайного количества «слов». Под словом понимается последовательность одинаковых символов заданной длины. Функция полезна для заполнения интерфейса заглушками (placeholder), похожими на текст, но не имеющими смысла или языковой привязки.`}),`
`,(0,c.jsxs)(t.p,{children:[`Она работает на основе утилит `,(0,c.jsx)(t.code,{children:`random`}),` (для выбора случайных чисел) и `,(0,c.jsx)(t.code,{children:`strFill`}),` (для заполнения слова символами).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min: number`}),` — Минимальное количество слов в итоговой строке.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max: number`}),` — Максимальное количество слов в итоговой строке.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`symbol: string`}),` — (Необязательно) Символ, из которого состоят сгенерированные слова. По умолчанию `,(0,c.jsx)(t.code,{children:`#`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lengthMin: number`}),` — (Необязательно) Минимальная длина одного слова. По умолчанию `,(0,c.jsx)(t.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lengthMax: number`}),` — (Необязательно) Максимальная длина одного слова. По умолчанию `,(0,c.jsx)(t.code,{children:`12`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Строку, состоящую из слов, разделённых пробелами.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getRandomText } from '@dxtmisha/functional-basic'

// Сгенерирует от 2 до 5 слов, состоящих из символа '#'
// Длина каждого слова от 2 до 12 символов
console.log(getRandomText(2, 5)) // '#### ## #######'

// Генерация точного числа слов (3) из определенного символа ('*')
// Длина слов строго по 5 символов
console.log(getRandomText(3, 3, '*', 5, 5)) // '***** ***** *****'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};