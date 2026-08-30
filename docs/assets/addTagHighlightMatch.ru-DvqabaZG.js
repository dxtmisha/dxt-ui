import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-C5PYTnT8.js";function s(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/functional-basic/Functions/addTagHighlightMatch - Подсветка совпадений в строке`}),`
`,(0,l.jsx)(t.h1,{id:`addtaghighlightmatch`,children:(0,l.jsx)(t.code,{children:`addTagHighlightMatch`})}),`
`,(0,l.jsxs)(t.p,{children:[`Утилита для выделения совпадений в строке путём оборачивания их в HTML-тег `,(0,l.jsx)(t.code,{children:`<span>`}),` с заданным классом. Использует `,(0,l.jsx)(t.code,{children:`getSeparatingSearchExp`}),` для поддержки поиска по нескольким словам (через пробел).`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: string`}),` — Исходная строка для обработки.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`search?: string | RegExp`}),` — Строка поиска (одно или несколько слов через пробел) или регулярное выражение.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`className: string = 'sys-highlight-match'`}),` — CSS-класс, который будет добавлен к тегу `,(0,l.jsx)(t.code,{children:`<span>`}),`.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`shouldEscape: boolean = false`}),` — Нужно ли экранировать строку перед добавлением подсветки.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`string`}),` — Строка с добавленными HTML-тегами для подсветки.`]}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};