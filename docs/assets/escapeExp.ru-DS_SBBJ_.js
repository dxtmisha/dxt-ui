import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/escapeExp - Экранирование специальных символов RegExp`}),`
`,(0,c.jsx)(t.h1,{id:`escapeexp`,children:(0,c.jsx)(t.code,{children:`escapeExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита, экранирующая все специальные символы регулярных выражений в строке (`,(0,c.jsx)(t.code,{children:`.`}),` `,(0,c.jsx)(t.code,{children:`*`}),` `,(0,c.jsx)(t.code,{children:`+`}),` `,(0,c.jsx)(t.code,{children:`?`}),` `,(0,c.jsx)(t.code,{children:`^`}),` `,(0,c.jsx)(t.code,{children:`$`}),` `,(0,c.jsx)(t.code,{children:`{`}),` `,(0,c.jsx)(t.code,{children:`}`}),` `,(0,c.jsx)(t.code,{children:`(`}),` `,(0,c.jsx)(t.code,{children:`)`}),` `,(0,c.jsx)(t.code,{children:`|`}),` `,(0,c.jsx)(t.code,{children:`[`}),` `,(0,c.jsx)(t.code,{children:`]`}),` `,(0,c.jsx)(t.code,{children:`\\`}),` `,(0,c.jsx)(t.code,{children:`/`}),` `,(0,c.jsx)(t.code,{children:`-`}),`), чтобы её можно было безопасно использовать внутри `,(0,c.jsx)(t.code,{children:`RegExp`}),` (как в основном теле шаблона, так и внутри символьных классов `,(0,c.jsx)(t.code,{children:`[...]`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`Используется, когда поисковый запрос, токен или строка поступает от пользователя или из внешнего источника и может содержать символы, имеющие специальное синтаксическое значение в регулярных выражениях.`}),`
`,(0,c.jsx)(t.h3,{id:`ключевые-возможности`,children:`Ключевые возможности:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Полное экранирование 16 метасимволов`}),`: Экранирует все синтаксические метасимволы (`,(0,c.jsx)(t.code,{children:`.`}),` `,(0,c.jsx)(t.code,{children:`*`}),` `,(0,c.jsx)(t.code,{children:`+`}),` `,(0,c.jsx)(t.code,{children:`?`}),` `,(0,c.jsx)(t.code,{children:`^`}),` `,(0,c.jsx)(t.code,{children:`$`}),` `,(0,c.jsx)(t.code,{children:`{}`}),` `,(0,c.jsx)(t.code,{children:`()`}),` `,(0,c.jsx)(t.code,{children:`|`}),` `,(0,c.jsx)(t.code,{children:`[]`}),` `,(0,c.jsx)(t.code,{children:`\\`}),`), а также прямой слэш (`,(0,c.jsx)(t.code,{children:`/`}),`) и дефис (`,(0,c.jsx)(t.code,{children:`-`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Безопасность внутри символьных классов (`,(0,c.jsx)(t.code,{children:`[...]`}),`)`]}),`: Экранирует дефис как `,(0,c.jsx)(t.code,{children:`\\-`}),`, предотвращая непреднамеренное создание диапазонов (например, `,(0,c.jsx)(t.code,{children:`[0-9]`}),`) или падение с фатальной ошибкой `,(0,c.jsx)(t.code,{children:`SyntaxError: Range out of order in character class`}),` при подстановке строк с обратным порядком символов (например, `,(0,c.jsx)(t.code,{children:`[z-a]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасная обработка типов`}),`: Принимает строки, числа (включая `,(0,c.jsx)(t.code,{children:`0`}),` и отрицательные значения), `,(0,c.jsx)(t.code,{children:`null`}),` и `,(0,c.jsx)(t.code,{children:`undefined`}),`, корректно преобразуя их без выброса исключений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Защита от ReDoS`}),`: Работает с гарантированной линейной сложностью $O(N)$ без вложенных квантификаторов и катастрофического отката (backtracking).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Изоморфность и SSR`}),`: Чистая функция без побочных эффектов, не зависящая от глобальных объектов браузера (`,(0,c.jsx)(t.code,{children:`window`}),` или `,(0,c.jsx)(t.code,{children:`document`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: string | number | null`}),` — Строка или число для экранирования.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Строка с экранированными специальными символами, безопасная для использования в `,(0,c.jsx)(t.code,{children:`RegExp`}),`. Возвращает пустую строку `,(0,c.jsx)(t.code,{children:`''`}),`, если передано `,(0,c.jsx)(t.code,{children:`null`}),` или `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { escapeExp } from '@dxtmisha/functional-basic'

// 1. Экранирование специальных символов регулярных выражений
console.log(escapeExp('user.name[0]')) // 'user\\\\.name\\\\[0\\\\]'
console.log(escapeExp('price $10.00')) // 'price \\\\$10\\\\.00'
console.log(escapeExp('C++ & C#'))     // 'C\\\\+\\\\+ & C#'
console.log(escapeExp('path/to/*.log')) // 'path\\\\/to\\\\/\\\\*\\\\.log'

// 2. Безопасное использование в конструкторе RegExp
const userInput = '[VIP] (Special) *promo*'
const regex = new RegExp(\`^\${escapeExp(userInput)}$\`, 'i')
regex.test('[VIP] (Special) *promo*') // true
regex.test('VIP Special promo')       // false

// 3. Безопасность в контексте символьных классов ([...])
// Экранирование дефиса защищает от Range out of order
const reversedRange = 'z-a'
const safeBracketRegex = new RegExp(\`[\${escapeExp(reversedRange)}]\`)
safeBracketRegex.test('z') // true
safeBracketRegex.test('-') // true
safeBracketRegex.test('a') // true

// 4. Безопасная обработка чисел и nullish-значений
escapeExp(0)         // '0'
escapeExp(12345)     // '12345'
escapeExp(-42)       // '\\\\-42'
escapeExp(null)      // ''
escapeExp(undefined) // ''
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};