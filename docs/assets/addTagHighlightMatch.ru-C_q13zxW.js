import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-BDI5G1Gi.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/addTagHighlightMatch - Подсветка совпадений в строке`}),`
`,(0,l.jsx)(n.h1,{id:`addtaghighlightmatch`,children:(0,l.jsx)(n.code,{children:`addTagHighlightMatch`})}),`
`,(0,l.jsxs)(n.p,{children:[`Утилита для выделения совпадений в строке путём оборачивания их в HTML-тег `,(0,l.jsx)(n.code,{children:`<span>`}),` с заданным классом. Использует `,(0,l.jsx)(n.code,{children:`getSeparatingSearchExp`}),` для поддержки поиска по нескольким словам (через пробел).`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value: string`}),` — Исходная строка для обработки.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`search?: string | RegExp`}),` — Строка поиска (одно или несколько слов через пробел) или регулярное выражение.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`className: string = 'sys-highlight-match'`}),` — CSS-класс, который будет добавлен к тегу `,(0,l.jsx)(n.code,{children:`<span>`}),`.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`shouldEscape: boolean = false`}),` — Нужно ли экранировать строку перед добавлением подсветки.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`string`}),` — Строка с добавленными HTML-тегами для подсветки.`]}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { addTagHighlightMatch } from '@dxtmisha/functional-basic'

// Подсветка одного слова
addTagHighlightMatch('Hello world', 'hello')
// '<span class="sys-highlight-match">Hello</span> world'

// Подсветка нескольких слов (OR-логика)
addTagHighlightMatch('Apple and Banana', 'apple banana')
// '<span class="sys-highlight-match">Apple</span> and <span class="sys-highlight-match">Banana</span>'

// Кастомный класс
addTagHighlightMatch('Test', 'test', 'text-red')
// '<span class="text-red">Test</span>'

// С экранированием
addTagHighlightMatch('<b>bold</b>', 'bold', 'sys-highlight-match', true)
// '&lt;b&gt;<span class="sys-highlight-match">bold</span>&lt;/b&gt;'
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};