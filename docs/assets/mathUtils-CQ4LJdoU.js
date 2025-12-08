import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Zkkrlp1B.js";import{M as c}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/functional/ru/Math Utils"}),`
`,n.jsx(e.h1,{id:"математические-утилиты",children:"Математические утилиты"}),`
`,n.jsx(e.p,{children:"Набор функций для математических вычислений и работы с числовыми значениями."}),`
`,n.jsx(e.h2,{id:"getrandomtext",children:n.jsx(e.code,{children:"getRandomText"})}),`
`,n.jsx(e.p,{children:"Генерирует случайный текст из указанного количества слов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min: number"})," — минимальное количество слов"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"max: number"})," — максимальное количество слов"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"symbol: string"})," — символ для замены букв (по умолчанию 'x')"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lengthMin: number"})," — минимальная длина слова (по умолчанию 3)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lengthMax: number"})," — максимальная длина слова (по умолчанию 8)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getRandomText } from '@dxtmisha/functional'

getRandomText(1, 3) // 'xxx xxxx xx'
getRandomText(2, 2, 'o', 4, 6) // 'oooo oooooo'
getRandomText(1, 1, '*', 5, 5) // '*****'
`})}),`
`,n.jsx(e.h2,{id:"getrequeststring",children:n.jsx(e.code,{children:"getRequestString"})}),`
`,n.jsx(e.p,{children:"Преобразует объект параметров в строку запроса URL."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: Record<string, any>"})," — объект с параметрами"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getRequestString } from '@dxtmisha/functional'

getRequestString({ name: 'John', age: 30 }) // 'name=John&age=30'
getRequestString({ q: 'search term', page: 1 }) // 'q=search%20term&page=1'
getRequestString({}) // ''
`})}),`
`,n.jsx(e.h2,{id:"getsteppercent",children:n.jsx(e.code,{children:"getStepPercent"})}),`
`,n.jsx(e.p,{children:"Вычисляет процентное значение шага между минимальным и максимальным значениями."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: number"})," — текущее значение"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min: number"})," — минимальное значение"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"max: number"})," — максимальное значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getStepPercent } from '@dxtmisha/functional'

getStepPercent(25, 0, 100) // 25
getStepPercent(50, 20, 80) // 50
getStepPercent(15, 10, 20) // 50
`})}),`
`,n.jsx(e.h2,{id:"getstepvalue",children:n.jsx(e.code,{children:"getStepValue"})}),`
`,n.jsx(e.p,{children:"Вычисляет значение по проценту между минимальным и максимальным значениями."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"percent: number"})," — процентное значение"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min: number"})," — минимальное значение"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"max: number"})," — максимальное значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getStepValue } from '@dxtmisha/functional'

getStepValue(50, 0, 100) // 50
getStepValue(25, 10, 20) // 12.5
getStepValue(75, 0, 200) // 150
`})}),`
`,n.jsx(e.h2,{id:"random",children:n.jsx(e.code,{children:"random"})}),`
`,n.jsx(e.p,{children:"Генерирует случайное целое число в указанном диапазоне."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min: number"})," — минимальное значение (включительно)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"max: number"})," — максимальное значение (включительно)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { random } from '@dxtmisha/functional'

random(1, 10) // например, 7
random(0, 100) // например, 42
random(5, 5) // 5
`})})]})}function a(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{a as default};
