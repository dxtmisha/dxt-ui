import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/encodeLiteAttribute - Базовое кодирование символов HTML`}),`
`,(0,c.jsx)(t.h1,{id:`encodeliteattribute`,children:(0,c.jsx)(t.code,{children:`encodeLiteAttribute`})}),`
`,(0,c.jsxs)(t.p,{children:[`Кодирует базовые специальные символы HTML в строке (`,(0,c.jsx)(t.code,{children:`<`}),`, `,(0,c.jsx)(t.code,{children:`>`}),`, `,(0,c.jsx)(t.code,{children:`&`}),`) в соответствующие HTML-сущности (`,(0,c.jsx)(t.code,{children:`&lt;`}),`, `,(0,c.jsx)(t.code,{children:`&gt;`}),`, `,(0,c.jsx)(t.code,{children:`&amp;`}),`), сохраняя кавычки (`,(0,c.jsx)(t.code,{children:`"`}),` и `,(0,c.jsx)(t.code,{children:`'`}),`) без изменений. Обычно используется для тегов заголовков HTML и облегченного форматирования текста.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Примечание:`}),` Эта функция намеренно НЕ экранирует кавычки (`,(0,c.jsx)(t.code,{children:`"`}),` и `,(0,c.jsx)(t.code,{children:`'`}),`). Для экранирования пользовательского ввода внутри HTML-атрибутов используйте `,(0,c.jsx)(t.code,{children:`encodeAttribute`}),` во избежание уязвимостей инъекции атрибутов.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text: string`}),` — Строка, которую необходимо закодировать.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Закодированная строка.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { encodeLiteAttribute } from '@dxtmisha/functional-basic'

const input = 'Title "Hello & <World>"'
const encoded = encodeLiteAttribute(input)

console.log(encoded)
// 'Title "Hello &amp; &lt;World&gt;"'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};