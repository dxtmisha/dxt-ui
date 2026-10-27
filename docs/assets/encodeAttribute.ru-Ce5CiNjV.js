import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/encodeAttribute - Кодирование символов для атрибутов`}),`
`,(0,c.jsx)(t.h1,{id:`encodeattribute`,children:(0,c.jsx)(t.code,{children:`encodeAttribute`})}),`
`,(0,c.jsxs)(t.p,{children:[`Кодирует специальные символы в строке (`,(0,c.jsx)(t.code,{children:`&`}),`, `,(0,c.jsx)(t.code,{children:`<`}),`, `,(0,c.jsx)(t.code,{children:`>`}),`, `,(0,c.jsx)(t.code,{children:`"`}),`, `,(0,c.jsx)(t.code,{children:`'`}),`) в соответствующие HTML-сущности (`,(0,c.jsx)(t.code,{children:`&amp;`}),`, `,(0,c.jsx)(t.code,{children:`&lt;`}),`, `,(0,c.jsx)(t.code,{children:`&gt;`}),`, `,(0,c.jsx)(t.code,{children:`&quot;`}),`, `,(0,c.jsx)(t.code,{children:`&#39;`}),`). Это необходимо для безопасной вставки динамических значений или пользовательского ввода в HTML-атрибуты для предотвращения XSS-атак и инъекций с выходом из контекста кавычек (attribute breakout).`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Совет:`}),` Если требуется экранировать только базовые символы HTML (`,(0,c.jsx)(t.code,{children:`<`}),`, `,(0,c.jsx)(t.code,{children:`>`}),`, `,(0,c.jsx)(t.code,{children:`&`}),`), сохраняя кавычки без изменений (например, внутри тегов `,(0,c.jsx)(t.code,{children:`<title>`}),` или текстового содержимого элементов), используйте `,(0,c.jsx)(t.code,{children:`encodeLiteAttribute`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`ключевые-возможности`,children:`Ключевые возможности:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Полная защита атрибутов`}),`: Экранирует как двойные (`,(0,c.jsx)(t.code,{children:`"`}),`), так и одинарные (`,(0,c.jsx)(t.code,{children:`'`}),`) кавычки, амперсанд (`,(0,c.jsx)(t.code,{children:`&`}),`) и угловые скобки (`,(0,c.jsx)(t.code,{children:`<`}),`, `,(0,c.jsx)(t.code,{children:`>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Высокая производительность (Fast-Path)`}),`: Использует моментальную предварительную проверку перед заменой подстрок, возвращая исходную строку без лишних аллокаций памяти, если спецсимволы отсутствуют.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасное приведение типов`}),`: Корректно обрабатывает строки, числа (включая `,(0,c.jsx)(t.code,{children:`0`}),` и отрицательные числа), `,(0,c.jsx)(t.code,{children:`null`}),` и `,(0,c.jsx)(t.code,{children:`undefined`}),` без выброса исключений в рантайме.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сохранение пробелов`}),`: Не выполняет принудительный trimming, полностью сохраняя пробелы, табуляции и переносы строк.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text?: string | number | null`}),` — Значение для кодирования (строка, число или nullish-значение).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Закодированная строка, либо пустая строка `,(0,c.jsx)(t.code,{children:`''`}),` для `,(0,c.jsx)(t.code,{children:`null`}),` или `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { encodeAttribute } from '@dxtmisha/functional-basic'

// 1. Предотвращение XSS и инъекций с выходом из кавычек
const unsafeInput = '<script>alert("XSS")<\/script>'
const safeAttr = encodeAttribute(unsafeInput)
console.log(safeAttr)
// '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'

// Безопасная интерполяция в HTML-атрибуты
const userInput = '"><img src=x onerror=alert(1)>'
const html = \`<input type="text" name="query" value="\${encodeAttribute(userInput)}">\`
// '<input type="text" name="query" value="&quot;&gt;&lt;img src=x onerror=alert(1)&gt;">'

// 2. Безопасная обработка чисел и nullish-значений
encodeAttribute(0)         // '0'
encodeAttribute(123)       // '123'
encodeAttribute(null)      // ''
encodeAttribute(undefined) // ''
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};