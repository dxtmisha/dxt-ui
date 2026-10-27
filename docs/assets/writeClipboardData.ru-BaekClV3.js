import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/writeClipboardData - Запись текста в буфер обмена`}),`
`,(0,c.jsx)(t.h1,{id:`writeclipboarddata`,children:(0,c.jsx)(t.code,{children:`writeClipboardData`})}),`
`,(0,c.jsxs)(t.p,{children:[`Записывает текстовую строку в буфер обмена пользователя в DOM-окружении. Использует современный API `,(0,c.jsx)(t.code,{children:`navigator.clipboard.writeText(text)`}),`, а в случае ошибки переключается на резервный метод со скрытым временным элементом `,(0,c.jsx)(t.code,{children:`<textarea>`}),` и `,(0,c.jsx)(t.code,{children:`document.execCommand('copy')`}),`, передавая ошибку в `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` (группа `,(0,c.jsx)(t.code,{children:`'clipboard'`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text: string`}),` — Текст для записи.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<void>`}),` — Промис, который завершается после успешной записи.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { writeClipboardData } from '@dxtmisha/functional-basic'

await writeClipboardData('Скопированный текст')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};