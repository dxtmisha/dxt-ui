import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/getRequestString - Формирование строки запроса`}),`
`,(0,c.jsx)(n.h1,{id:`getrequeststring`,children:(0,c.jsx)(n.code,{children:`getRequestString`})}),`
`,(0,c.jsxs)(n.p,{children:[`Преобразует объект словаря в URL-формат (по умолчанию строку запроса для GET-параметров), где ключи и значения объединяются заданными разделителями. Перед формированием строки все значения приводятся к строке, очищаются от пробелов по краям и пропускаются через `,(0,c.jsx)(n.code,{children:`encodeURIComponent`}),` для безопасной передачи через URL. Ключи сортируются в алфавитном порядке.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: Record<string, any>`}),` — Объект с данными для преобразования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sign: string`}),` — (Необязательно) Символ соединения между ключом и значением. По умолчанию `,(0,c.jsx)(n.code,{children:`=`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`separator: string`}),` — (Необязательно) Разделитель между парами. По умолчанию `,(0,c.jsx)(n.code,{children:`&`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Отформатированная и отсортированная строка.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getRequestString } from '@dxtmisha/functional-basic'

const params = {
  sort: 'desc',
  page: 2,
  search: 'удобный стул'
}

console.log(getRequestString(params)) 
// 'page=2&search=%D1%83%D0%B4%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D1%81%D1%82%D1%83%D0%BB&sort=desc'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};