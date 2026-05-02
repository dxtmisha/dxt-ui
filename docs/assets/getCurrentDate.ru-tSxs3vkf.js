import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/getCurrentDate - Получение текущей даты`}),`
`,(0,c.jsx)(n.h1,{id:`getcurrentdate`,children:(0,c.jsx)(n.code,{children:`getCurrentDate`})}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает текущую дату в указанном формате. Функция является оберткой над классом `,(0,c.jsx)(n.code,{children:`Datetime`}),` и позволяет быстро получить отформатированную строку текущего времени.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Внимание (SSR):`}),` Использование этой функции для отрисовки в SSR может привести к ошибкам гидратации, так как время или часовой пояс сервера могут отличаться от времени на стороне клиента. Рекомендуется использовать эту функцию только внутри хуков, выполняющихся на клиенте (например, `,(0,c.jsx)(n.code,{children:`onMounted`}),` в Vue или `,(0,c.jsx)(n.code,{children:`useEffect`}),` в React).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`format: GeoDate`}),` — тип формата даты вывода (по умолчанию `,(0,c.jsx)(n.code,{children:`'datetime'`}),`). Поддерживает значения: `,(0,c.jsx)(n.code,{children:`'date'`}),`, `,(0,c.jsx)(n.code,{children:`'time'`}),`, `,(0,c.jsx)(n.code,{children:`'datetime'`}),`, `,(0,c.jsx)(n.code,{children:`'full'`}),` и другие.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
Текущая дата в виде строки.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getCurrentDate } from '@dxtmisha/functional-basic'

// Стандартный формат (datetime)
const now = getCurrentDate()
// Результат: "2024-03-15 14:30"

// Только дата
const date = getCurrentDate('date')
// Результат: "2024-03-15"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};