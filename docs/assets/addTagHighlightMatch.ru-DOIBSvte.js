import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/addTagHighlightMatch - Подсветка совпадений в строке`}),`
`,(0,c.jsx)(n.h1,{id:`addtaghighlightmatch`,children:(0,c.jsx)(n.code,{children:`addTagHighlightMatch`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита для выделения совпадений в строке путём оборачивания их в HTML-тег `,(0,c.jsx)(n.code,{children:`<span>`}),` с заданным классом. Использует `,(0,c.jsx)(n.code,{children:`getSeparatingSearchExp`}),` для поддержки поиска по нескольким словам (через пробел).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Исходная строка для обработки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search?: string`}),` — Строка поиска (одно или несколько слов через пробел).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`className: string = 'sys-highlight-match'`}),` — CSS-класс, который будет добавлен к тегу `,(0,c.jsx)(n.code,{children:`<span>`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Строка с добавленными HTML-тегами для подсветки.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { addTagHighlightMatch } from '@dxtmisha/functional-basic'

// Подсветка одного слова
addTagHighlightMatch('Hello world', 'hello') 
// '<span class="sys-highlight-match">Hello</span> world'

// Подсветка нескольких слов (OR-логика)
addTagHighlightMatch('Apple and Banana', 'apple banana')
// '<span class="sys-highlight-match">Apple</span> and <span class="sys-highlight-match">Banana</span>'

// Кастомный класс
addTagHighlightMatch('Test', 'test', 'text-red')
// '<span class="text-red">Test</span>'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};