import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/setValues - Управление списком выбранных значений`}),`
`,(0,c.jsx)(t.h1,{id:`setvalues`,children:(0,c.jsx)(t.code,{children:`setValues`})}),`
`,(0,c.jsx)(t.p,{children:`Обрабатывает обновление выбранных значений в зависимости от режима (одиночный или множественный выбор). Позволяет добавлять, удалять или заменять значения с поддержкой ограничений на максимальное количество элементов.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: T | T[] | undefined`}),` — Текущие выбранные значения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — Новое значение для обработки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options`}),` — Объект с настройками:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`multiple: boolean`}),` — Режим множественного выбора (по умолчанию `,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxlength: number`}),` — Максимальное количество элементов для множественного выбора (по умолчанию `,(0,c.jsx)(t.code,{children:`0`}),` — без ограничений).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`alwaysChange: boolean`}),` — Флаг принудительной замены значения (по умолчанию `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`notEmpty: boolean`}),` — Запрет на полное очищение списка (по умолчанию `,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`T | T[] | undefined`}),` — Новое состояние выбранных значений.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setValues } from '@dxtmisha/functional-basic'

// Одиночный выбор
console.log(setValues(1, 2, {})) // 2

// Множественный выбор (переключение)
let list = [1, 2]
list = setValues(list, 2, { multiple: true }) // [1] (удаление существующего)
list = setValues(list, 3, { multiple: true }) // [1, 3] (добавление нового)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};