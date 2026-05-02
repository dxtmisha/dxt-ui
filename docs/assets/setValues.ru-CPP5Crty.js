import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/setValues - Управление списком выбранных значений`}),`
`,(0,c.jsx)(n.h1,{id:`setvalues`,children:(0,c.jsx)(n.code,{children:`setValues`})}),`
`,(0,c.jsx)(n.p,{children:`Обрабатывает обновление выбранных значений в зависимости от режима (одиночный или множественный выбор). Позволяет добавлять, удалять или заменять значения с поддержкой ограничений на максимальное количество элементов.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: T | T[] | undefined`}),` — Текущие выбранные значения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: any`}),` — Новое значение для обработки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options`}),` — Объект с настройками:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`multiple: boolean`}),` — Режим множественного выбора (по умолчанию `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maxlength: number`}),` — Максимальное количество элементов для множественного выбора (по умолчанию `,(0,c.jsx)(n.code,{children:`0`}),` — без ограничений).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`alwaysChange: boolean`}),` — Флаг принудительной замены значения (по умолчанию `,(0,c.jsx)(n.code,{children:`true`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`notEmpty: boolean`}),` — Запрет на полное очищение списка (по умолчанию `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`T | T[] | undefined`}),` — Новое состояние выбранных значений.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setValues } from '@dxtmisha/functional-basic'

// Одиночный выбор
console.log(setValues(1, 2, {})) // 2

// Множественный выбор (переключение)
let list = [1, 2]
list = setValues(list, 2, { multiple: true }) // [1] (удаление существующего)
list = setValues(list, 3, { multiple: true }) // [1, 3] (добавление нового)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};