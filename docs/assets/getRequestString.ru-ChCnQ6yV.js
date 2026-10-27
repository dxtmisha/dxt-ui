import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getRequestString - Формирование строки запроса`}),`
`,(0,c.jsx)(t.h1,{id:`getrequeststring`,children:(0,c.jsx)(t.code,{children:`getRequestString`})}),`
`,(0,c.jsxs)(t.p,{children:[`Преобразует объект или массив в URL-формат (по умолчанию строку запроса для GET-параметров), где ключи и значения объединяются заданными разделителями. Ключи очищаются от пробелов по краям и кодируются через `,(0,c.jsx)(t.code,{children:`encodeURIComponent`}),`, значения приводятся к строке и кодируются через `,(0,c.jsx)(t.code,{children:`encodeURIComponent`}),`, вложенные объекты и массивы рекурсивно сериализуются с использованием скобочной нотации (`,(0,c.jsx)(t.code,{children:`key[subKey]`}),` или `,(0,c.jsx)(t.code,{children:`key[]`}),`), а итоговые пары сортируются в алфавитном порядке.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: Record<string, unknown> | readonly unknown[]`}),` — Объект или массив с данными для преобразования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sign?: string`}),` — (Необязательно) Символ соединения между ключом и значением. По умолчанию `,(0,c.jsx)(t.code,{children:`'='`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`separator?: string`}),` — (Необязательно) Разделитель между парами. По умолчанию `,(0,c.jsx)(t.code,{children:`'&'`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`subKey?: string`}),` — (Необязательно) Родительский ключ для форматирования вложенных объектов или элементов массива.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Отформатированная и отсортированная строка запроса (или `,(0,c.jsx)(t.code,{children:`''`}),`, если `,(0,c.jsx)(t.code,{children:`request`}),` не является объектом или массивом).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getRequestString } from '@dxtmisha/functional-basic'

const params = {
  sort: 'desc',
  page: 2,
  search: 'удобный стул'
}

console.log(getRequestString(params)) 
// 'page=2&search=%D1%83%D0%B4%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D1%81%D1%82%D1%83%D0%BB&sort=desc'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};