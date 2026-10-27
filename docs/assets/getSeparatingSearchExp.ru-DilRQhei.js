import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getSeparatingSearchExp - Создание RegExp для поиска по отдельным словам`}),`
`,(0,c.jsx)(t.h1,{id:`getseparatingsearchexp`,children:(0,c.jsx)(t.code,{children:`getSeparatingSearchExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита, строящая регистронезависимое глобальное регулярное выражение `,(0,c.jsx)(t.code,{children:`RegExp`}),` для поиска строк, содержащих `,(0,c.jsx)(t.strong,{children:`любое`}),` из слов поисковой строки (разделение пробелом), либо клонирующая переданный `,(0,c.jsx)(t.code,{children:`RegExp`}),` с сохранением его шаблона и флагов.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Уникальные слова разбиваются пробелами, сортируются по убыванию длины, экранируются и объединяются оператором «или» `,(0,c.jsx)(t.code,{children:`|`}),` внутри захватывающей группы `,(0,c.jsx)(t.code,{children:`(...)`}),`. Это необходимо для поиска, фильтрации и подсветки совпадений (highlighting) хотя бы по одному из введённых слов.`]}),`
`,(0,c.jsx)(t.h3,{id:`ключевые-возможности`,children:`Ключевые возможности:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Многословный поиск по дизъюнкции (OR-logic)`}),`: Разделяет строку по любым пробельным символам (`,(0,c.jsx)(t.code,{children:`/\\s+/`}),`) и объединяет слова оператором `,(0,c.jsx)(t.code,{children:`|`}),` внутри захватывающей группы `,(0,c.jsx)(t.code,{children:`(слово1|слово2)`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Защита от затенения префиксов (Prefix Shadowing)`}),`: Автоматическая сортировка токенов по убыванию длины гарантирует, что длинные слова имеют приоритет над своими префиксами в регулярном выражении (`,(0,c.jsx)(t.code,{children:`caterpillar`}),` совпадет полностью, а не обрежется до `,(0,c.jsx)(t.code,{children:`cat`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Регистронезависимая дедупликация`}),`: Устранение повторяющихся слов без учёта регистра предотвращает разрастание шаблона и создание избыточных альтернативных ветвей (например, `,(0,c.jsx)(t.code,{children:`apple Apple APPLE`}),` превращается в компактный `,(0,c.jsx)(t.code,{children:`(apple)`}),` с флагом `,(0,c.jsx)(t.code,{children:`ig`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Надежное экранирование специальных символов`}),`: Автоматически экранирует все метасимволы регулярных выражений через `,(0,c.jsx)(t.code,{children:`escapeExp`}),`, предотвращая синтаксические сбои и уязвимости ReDoS при вводе спецсимволов (`,(0,c.jsx)(t.code,{children:`.`}),`, `,(0,c.jsx)(t.code,{children:`*`}),`, `,(0,c.jsx)(t.code,{children:`+`}),`, `,(0,c.jsx)(t.code,{children:`?`}),`, `,(0,c.jsx)(t.code,{children:`$`}),`, `,(0,c.jsx)(t.code,{children:`[`}),`, `,(0,c.jsx)(t.code,{children:`]`}),`, `,(0,c.jsx)(t.code,{children:`(`}),`, `,(0,c.jsx)(t.code,{children:`)`}),`, `,(0,c.jsx)(t.code,{children:`|`}),` и др.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасное клонирование RegExp`}),`: При передаче существующего объекта `,(0,c.jsx)(t.code,{children:`RegExp`}),` создаёт новый экземпляр со сбросом `,(0,c.jsx)(t.code,{children:`lastIndex = 0`}),`, исключая взаимное влияние и состояние гонки между независимыми вызовами.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Гарантированный безопасный fallback `,(0,c.jsx)(t.code,{children:`/(?!)/`})]}),`: При пустом вводе, строке только из пробелов, превышении лимита длины или передаче пустого регулярного выражения `,(0,c.jsx)(t.code,{children:`/(?:)/`}),` возвращает отрицательный lookahead `,(0,c.jsx)(t.code,{children:`/(?!)/`}),`, который никогда ни с чем не совпадает (в отличие от опасного `,(0,c.jsx)(t.code,{children:`/(?:)/`}),`, приводящего к бесконечным циклам).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Изоморфность и полная SSR-совместимость`}),`: Чистая функция без побочных эффектов, не зависящая от окружения браузера (`,(0,c.jsx)(t.code,{children:`window`}),` или `,(0,c.jsx)(t.code,{children:`document`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: string | RegExp`}),` — Строка поиска, состоящая из одного или нескольких слов, разделённых пробелами, или объект `,(0,c.jsx)(t.code,{children:`RegExp`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit?: number`}),` — (Необязательно) Максимальная длина строки поиска (игнорируется, если передан `,(0,c.jsx)(t.code,{children:`RegExp`}),`). По умолчанию `,(0,c.jsx)(t.code,{children:`128`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — Регулярное выражение с флагами `,(0,c.jsx)(t.code,{children:`ig`}),` (без учёта регистра, глобальный) для строковых запросов или клонированный `,(0,c.jsx)(t.code,{children:`RegExp`}),`, если был передан `,(0,c.jsx)(t.code,{children:`RegExp`}),`. Если строка поиска пуста, `,(0,c.jsx)(t.code,{children:`limit <= 0`}),`, превышает `,(0,c.jsx)(t.code,{children:`limit`}),` или передан пустой `,(0,c.jsx)(t.code,{children:`RegExp`}),` (`,(0,c.jsx)(t.code,{children:`/(?:)/`}),` или `,(0,c.jsx)(t.code,{children:`new RegExp('')`}),`), возвращается `,(0,c.jsx)(t.code,{children:`/(?!)/`}),` (регулярное выражение, которое никогда ни с чем не совпадает).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getSeparatingSearchExp } from '@dxtmisha/functional-basic'

// 1. Стандартный многословный поиск (OR-логика)
const searchExpression = getSeparatingSearchExp('apple banana')

console.log('an apple and banana'.match(searchExpression)) 
// ['apple', 'banana']

// 2. Предотвращение затенения префиксов (сортировка по длине)
// 'caterpillar' проверяется раньше, чем 'cat'
const prefixExpression = getSeparatingSearchExp('cat caterpillar')
const matchedWord = 'caterpillar'.match(prefixExpression)?.[0]
console.log(matchedWord) // 'caterpillar'

// 3. Автоматическое экранирование метасимволов
const symbolsExpression = getSeparatingSearchExp('C++ $10 .')
console.log(symbolsExpression.test('Code in C++')) // true
console.log(symbolsExpression.test('Total: $10'))  // true

// 4. Клонирование существующего RegExp с изоляцией lastIndex
const originalRegExp = /match/g
originalRegExp.lastIndex = 3

const clonedExpression = getSeparatingSearchExp(originalRegExp)
console.log(clonedExpression.lastIndex) // 0
console.log(originalRegExp.lastIndex)   // 3 (исходный не изменился)

// 5. Безопасная обработка пустых строк и лимита длины
getSeparatingSearchExp('').toString()      // '/(?!)/' (никогда не совпадает)
getSeparatingSearchExp('   ').toString()   // '/(?!)/'
getSeparatingSearchExp('text', 0)          // '/(?!)/'

// 6. Подсветка текста и токенизация
const highlightExpression = getSeparatingSearchExp('vue vite')
const sourceText = 'Awesome vue and vite setup'

const highlightedHtml = sourceText.replace(
  highlightExpression,
  matchedText => \`<mark>\${matchedText}</mark>\`
)
// 'Awesome <mark>vue</mark> and <mark>vite</mark> setup'

const tokens = sourceText.split(highlightExpression)
// ['Awesome ', 'vue', ' and ', 'vite', ' setup']
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};