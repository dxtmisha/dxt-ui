import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getCurrentDate - Получение текущей даты`}),`
`,(0,c.jsx)(t.h1,{id:`getcurrentdate`,children:(0,c.jsx)(t.code,{children:`getCurrentDate`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает текущую дату в указанном формате. Функция является оберткой над классом `,(0,c.jsx)(t.code,{children:`Datetime`}),` и позволяет быстро получить отформатированную строку текущего времени.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Внимание (SSR):`}),` Использование этой функции для отрисовки в SSR может привести к ошибкам гидратации, так как время или часовой пояс сервера могут отличаться от времени на стороне клиента. Рекомендуется использовать эту функцию только внутри хуков, выполняющихся на клиенте (например, `,(0,c.jsx)(t.code,{children:`onMounted`}),` в Vue или `,(0,c.jsx)(t.code,{children:`useEffect`}),` в React).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`format: GeoDate`}),` — тип формата даты вывода (по умолчанию `,(0,c.jsx)(t.code,{children:`'datetime'`}),`). Поддерживает значения: `,(0,c.jsx)(t.code,{children:`'date'`}),`, `,(0,c.jsx)(t.code,{children:`'time'`}),`, `,(0,c.jsx)(t.code,{children:`'datetime'`}),`, `,(0,c.jsx)(t.code,{children:`'full'`}),` и другие.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
Текущая дата в виде строки.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getCurrentDate } from '@dxtmisha/functional-basic'

// Стандартный формат (datetime)
const now = getCurrentDate()
// Результат: "2024-03-15 14:30"

// Только дата
const date = getCurrentDate('date')
// Результат: "2024-03-15"
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};